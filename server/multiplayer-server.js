import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// Load game simulation modules
const trackModule = await import(path.join(ROOT_DIR, '_next/static/chunks/endurance-track-CFfYRgzd.js'));
const raceModule = await import(path.join(ROOT_DIR, '_next/static/chunks/race-C1W30byT.js'));
const survivalModule = await import(path.join(ROOT_DIR, '_next/static/chunks/survival-model-CaE2FA_r.js'));

const trackBuilder = trackModule.a;
const Race = raceModule.r;
const SurvivalWorld = survivalModule.o;

const PORT = parseInt(process.env.PORT || '7788', 10);

// MIME types
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.hdr': 'application/octet-stream',
  '.mp3': 'audio/mpeg',
  '.json': 'application/json; charset=utf-8',
  '.ico': 'image/x-icon'
};

// AI Drivers pool for Kart Grand Prix
const AI_DRIVERS = [
  { id: 'luigi', name: '路易吉', character: 'luigi', kart: 'rocket' },
  { id: 'peach', name: '碧姬', character: 'peach', kart: 'royal' },
  { id: 'yoshi', name: '耀西', character: 'yoshi', kart: 'jetbike' },
  { id: 'toad', name: '奇诺比奥', character: 'toad', kart: 'burger' },
  { id: 'bowser', name: '酷霸王', character: 'bowser', kart: 'cyber' },
  { id: 'mario', name: '马里奥', character: 'mario', kart: 'classic' }
];

// Session state
const sessions = new Map(); // token -> Session
const rooms = new Map(); // roomId -> Room
const codeToRoom = new Map(); // code -> roomId
let roomCounter = 1;

// Survival state
const survivalRooms = new Map(); // roomId -> SurvivalRoom
const survivalCodeToRoom = new Map(); // code -> roomId
let survivalRoomCounter = 1;

function generateCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

function getOnlineCount() {
  const now = Date.now();
  let count = 0;
  for (const s of sessions.values()) {
    if (now - s.lastSeen < 60000) count++;
  }
  for (const r of survivalRooms.values()) {
    for (const m of r.members.values()) {
      if (m.active && now - m.lastSeen < 60000) count++;
    }
  }
  return Math.max(1, count);
}

function getOrCreateSession(token) {
  const now = Date.now();
  if (token && sessions.has(token)) {
    const s = sessions.get(token);
    s.lastSeen = now;
    return { session: s, resumed: true };
  }
  const newToken = 'tok_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
  const newPlayerId = 'p_' + Math.random().toString(36).slice(2, 8);
  const s = {
    id: newPlayerId,
    token: newToken,
    name: '车神岛主',
    character: 'mario',
    kart: 'classic',
    roomId: '',
    lastSeen: now,
    queuedMessages: [],
    controls: null
  };
  sessions.set(newToken, s);
  return { session: s, resumed: false };
}

// ---------------- Kart Grand Prix Room ----------------
class Room {
  constructor(id, code, settings) {
    this.id = id;
    this.code = code;
    this.settings = {
      track: settings.track || 'garden',
      difficulty: settings.difficulty || 'standard',
      mode: settings.mode || 'speed',
      laps: settings.laps || 3,
      itemSlots: settings.itemSlots || 2,
      itemDensity: settings.itemDensity || 'low',
      itemGroups: settings.itemGroups || 5,
      assist: settings.assist !== false,
      autoThrottle: settings.autoThrottle !== false,
      sensitivity: settings.sensitivity || 0.85,
      quality: 'ultra'
    };
    this.players = [];
    this.status = 'waiting';
    this.startsIn = null;
    this.race = null;
    this.track = trackBuilder(this.settings.track);
    this.tickCount = 0;
    this.timer = null;
    this.signals = new Map();
    this.signalCounter = 0;
    this.created = Date.now();
  }

  addPlayer(session) {
    if (this.players.some(p => p.id === session.id)) return;
    this.players.push(session);
    session.roomId = this.id;

    if (this.players.length >= 2) {
      if (this.startsIn === null) {
        this.startsIn = 5.0;
      }
    } else {
      this.startsIn = null;
    }
    this.broadcastLobby();
  }

  removePlayer(session) {
    const idx = this.players.findIndex(p => p.id === session.id);
    if (idx !== -1) {
      this.players.splice(idx, 1);
      session.roomId = '';
    }
    if (this.race) {
      const racer = this.race.racers.find(r => r.id === session.id);
      if (racer) racer.connected = false;
    }
    if (this.status === 'waiting') {
      if (this.players.length < 2) {
        this.startsIn = null;
      }
      this.broadcastLobby();
    }
    if (this.players.length === 0) {
      this.dispose();
    }
  }

  broadcastLobby() {
    const msg = {
      type: 'lobby',
      roomId: this.id,
      code: this.code,
      online: getOnlineCount(),
      startsIn: this.startsIn,
      settings: this.settings,
      players: this.players.map(p => ({
        id: p.id,
        name: p.name,
        character: p.character,
        kart: p.kart,
        ready: true
      }))
    };
    for (const p of this.players) {
      p.queuedMessages.push(msg);
    }
  }

  startCountdownAndRace() {
    if (this.status !== 'waiting') return;
    this.status = 'racing';
    this.startsIn = null;

    const racers = [];
    const usedChars = new Set();
    for (let i = 0; i < this.players.length && racers.length < 6; i++) {
      const p = this.players[i];
      racers.push({
        id: p.id,
        name: p.name || '车神岛主',
        character: p.character || 'mario',
        kart: p.kart || 'classic',
        human: true
      });
      usedChars.add(p.character || 'mario');
    }

    for (const ai of AI_DRIVERS) {
      if (racers.length >= 6) break;
      if (!usedChars.has(ai.character)) {
        racers.push({
          id: 'ai_' + ai.character,
          name: ai.name,
          character: ai.character,
          kart: ai.kart,
          human: false
        });
        usedChars.add(ai.character);
      }
    }

    this.race = new Race(this.track.length, this.track.curvature);
    this.race.startGrid(racers, this.settings, this.players[0].id, true);

    const initialSnapshot = this.race.snapshot();
    const startMsg = {
      type: 'start',
      roomId: this.id,
      tick: 0,
      transitMs: 8,
      snapshot: initialSnapshot
    };
    for (const p of this.players) {
      p.queuedMessages.push(startMsg);
    }

    const dt = 0.05;
    this.timer = setInterval(() => {
      if (this.status !== 'racing' || !this.race) return;

      for (const p of this.players) {
        if (p.controls) {
          this.race.setControls(p.id, p.controls);
        }
      }

      this.race.tick(dt);
      this.tickCount++;

      const snap = this.race.snapshot();
      const snapMsg = {
        type: 'snapshot',
        roomId: this.id,
        tick: this.tickCount,
        transitMs: 8,
        snapshot: snap
      };

      for (const p of this.players) {
        let snapCount = 0;
        for (let i = p.queuedMessages.length - 1; i >= 0; i--) {
          if (p.queuedMessages[i].type === 'snapshot') {
            snapCount++;
            if (snapCount >= 2) {
              p.queuedMessages.splice(i, 1);
            }
          }
        }
        p.queuedMessages.push(snapMsg);
      }

      const allHumansFinished = racers.filter(r => r.human).every(r => {
        const live = this.race.racers.find(lr => lr.id === r.id);
        return !live || live.finishTime !== null || live.dnf;
      });

      if (this.race.phase === 'finished' || allHumansFinished || this.race.elapsed > 300) {
        this.status = 'finished';
        clearInterval(this.timer);
        this.timer = null;
        setTimeout(() => this.dispose(), 30000);
      }
    }, 50);
  }

  tickLobby(dt) {
    if (this.status !== 'waiting') return;
    if (this.startsIn !== null) {
      this.startsIn = Math.max(0, this.startsIn - dt);
      this.broadcastLobby();
      if (this.startsIn <= 0) {
        this.startCountdownAndRace();
      }
    }
  }

  dispose() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    rooms.delete(this.id);
    codeToRoom.delete(this.code);
  }
}

// ---------------- Mushroom Street Survival Room ----------------
class SurvivalRoom {
  constructor(id, code, kind = 'solo') {
    this.id = id;
    this.code = code;
    this.kind = kind; // 'solo', 'create', 'public'
    this.seed = Math.floor(Math.random() * 1000000) + 1;
    this.world = new SurvivalWorld(this.seed);
    this.host = '';
    this.revision = 1;
    this.readyAt = 0;
    this.stateAt = Date.now();
    this.members = new Map(); // id -> { id, name, character, kart, weapon, active, input, lastSeen }
    this.signals = new Map(); // targetId -> Array of { id, sender, data }
    this.signalCounter = 0;
    this.inputs = {};
    this.timer = null;
    this.created = Date.now();

    // 30Hz simulation loop
    const dt = 1 / 30;
    this.timer = setInterval(() => {
      if (!this.world) return;
      if (this.world.state.phase === 'running') {
        this.world.step(dt, this.inputs);
        this.revision++;
        this.stateAt = Date.now();
      }
    }, 33);
  }

  addPlayer(id, name, character, kart, weapon) {
    if (!this.host) this.host = id;
    const defaultInput = { x: 0, z: 0, aim: 0, fire: false, attack: 0, slot: 1, reload: 0, interact: 0, drop: 0 };
    this.members.set(id, {
      id,
      name: name || '车神岛主',
      character: character || 'mario',
      kart: kart || 'classic',
      weapon: weapon || 'pistol',
      active: true,
      input: defaultInput,
      lastSeen: Date.now()
    });
    this.inputs[id] = defaultInput;
    this.world.addPlayer(id, name || '车神岛主', character || 'mario', kart || 'classic', weapon || 'pistol');
    this.revision++;
    this.stateAt = Date.now();
  }

  removePlayer(id) {
    if (this.members.has(id)) {
      this.members.get(id).active = false;
    }
    const player = this.world?.state.players.find(p => p.id === id);
    if (player) {
      player.connected = false;
    }
    const hasActive = [...this.members.values()].some(m => m.active);
    if (!hasActive) {
      this.dispose();
    }
  }

  getMembersArray() {
    return [...this.members.values()].map(m => ({
      id: m.id,
      name: m.name,
      active: m.active,
      input: m.input
    }));
  }

  dispose() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    survivalRooms.delete(this.id);
    survivalCodeToRoom.delete(this.code);
  }
}

// Global 1Hz Lobby ticker
setInterval(() => {
  for (const r of rooms.values()) {
    if (r.status === 'waiting' && r.startsIn !== null) {
      r.tickLobby(1.0);
    }
  }
}, 1000);

// Prune stale sessions
setInterval(() => {
  const now = Date.now();
  for (const [t, s] of sessions.entries()) {
    if (now - s.lastSeen > 900000) sessions.delete(t);
  }
  for (const r of survivalRooms.values()) {
    if (now - r.created > 1800000) r.dispose();
  }
}, 60000);

// Parse cookies helper
function parseCookies(req) {
  const list = {};
  const rc = req.headers.cookie;
  rc && rc.split(';').forEach(cookie => {
    const parts = cookie.split('=');
    list[parts.shift().trim()] = decodeURI(parts.join('='));
  });
  return list;
}

// HTTP Server
const server = http.createServer(async (req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host}`);
  const pathname = urlObj.pathname;

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  // 1. API: /api/multiplayer
  if (pathname === '/api/multiplayer') {
    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        try {
          const startTime = performance.now();
          const data = JSON.parse(body || '{}');
          const { session, resumed } = getOrCreateSession(data.token);
          const messages = Array.isArray(data.messages) ? data.messages : [];

          for (const msg of messages) {
            if (msg.type === 'hello') {
              session.queuedMessages.push({
                type: 'welcome',
                playerId: session.id,
                resume: session.token,
                seq: 0,
                itemSeq: 0,
                pickupSeq: 0,
                resumed: resumed,
                online: getOnlineCount(),
                roomId: session.roomId || ''
              });
            } else if (msg.type === 'join') {
              const kind = msg.kind || 'public';
              const character = msg.character || 'mario';
              const kart = msg.kart || 'classic';
              const settings = msg.settings || {};
              const code = (msg.code || '').trim().toUpperCase();

              session.character = character;
              session.kart = kart;

              if (session.roomId && rooms.has(session.roomId)) {
                rooms.get(session.roomId).removePlayer(session);
              }

              let targetRoom = null;
              if (kind === 'create') {
                const newCode = generateCode();
                const newId = 'room_' + (++roomCounter);
                targetRoom = new Room(newId, newCode, settings);
                rooms.set(newId, targetRoom);
                codeToRoom.set(newCode, newId);
              } else if (kind === 'code') {
                if (codeToRoom.has(code)) {
                  const rId = codeToRoom.get(code);
                  const r = rooms.get(rId);
                  if (r && r.status === 'waiting' && r.players.length < 6) {
                    targetRoom = r;
                  }
                }
                if (!targetRoom) {
                  session.queuedMessages.push({
                    type: 'error',
                    message: `房间码 ${code} 不存在或对局已发车。`
                  });
                  continue;
                }
              } else {
                for (const r of rooms.values()) {
                  if (r.status === 'waiting' && r.players.length < 6 && r.settings.track === (settings.track || 'garden')) {
                    targetRoom = r;
                    break;
                  }
                }
                if (!targetRoom) {
                  const newCode = generateCode();
                  const newId = 'room_' + (++roomCounter);
                  targetRoom = new Room(newId, newCode, settings);
                  rooms.set(newId, targetRoom);
                  codeToRoom.set(newCode, newId);
                }
              }

              targetRoom.addPlayer(session);
            } else if (msg.type === 'input') {
              session.controls = msg.controls;
              if (session.roomId && rooms.has(session.roomId)) {
                const r = rooms.get(session.roomId);
                if (r.race && r.status === 'racing') {
                  r.race.setControls(session.id, msg.controls);
                }
              }
            } else if (msg.type === 'leave') {
              if (session.roomId && rooms.has(session.roomId)) {
                rooms.get(session.roomId).removePlayer(session);
              }
              session.queuedMessages.push({ type: 'left' });
            } else if (msg.type === 'useItem' || msg.type === 'action') {
              if (session.roomId && rooms.has(session.roomId)) {
                const r = rooms.get(session.roomId);
                if (r.race && r.status === 'racing') {
                  r.race.useItem(session.id, msg.item || 'item');
                }
              }
            }
          }

          const outMessages = session.queuedMessages.splice(0, session.queuedMessages.length);
          const processingMs = Math.max(0, performance.now() - startTime);

          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({
            messages: outMessages,
            processingMs: Math.round(processingMs * 10) / 10,
            online: getOnlineCount()
          }));
        } catch (err) {
          console.error('API /api/multiplayer error:', err);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: err.message }));
        }
      });
      return;
    }
  }

  // 2. API: /api/multiplayer/signals (WebRTC Signaling Relay for Grand Prix)
  if (pathname === '/api/multiplayer/signals') {
    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        try {
          const data = JSON.parse(body || '{}');
          const token = data.token;
          const roomId = data.roomId;
          const signals = Array.isArray(data.signals) ? data.signals : [];
          const ack = Number(data.ack) || 0;

          const session = sessions.get(token);
          const room = rooms.get(roomId);

          if (!session || !room) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ signals: [] }));
            return;
          }

          for (const s of signals) {
            const targetId = s.target;
            if (targetId) {
              if (!room.signals.has(targetId)) room.signals.set(targetId, []);
              room.signals.get(targetId).push({
                id: ++room.signalCounter,
                sender: session.id,
                data: s.data
              });
            }
          }

          const mySignals = room.signals.get(session.id) || [];
          const remaining = mySignals.filter(s => s.id > ack);
          room.signals.set(session.id, remaining);

          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ signals: remaining }));
        } catch (e) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ signals: [] }));
        }
      });
      return;
    }
  }

  // 3. API: /api/survival (Mushroom Street Survival Mode Backend)
  if (pathname === '/api/survival') {
    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        try {
          const cookies = parseCookies(req);
          const data = JSON.parse(body || '{}');
          const action = data.action;

          // 3.1 JOIN
          if (action === 'join') {
            const kind = data.kind || 'solo';
            const character = data.character || 'mario';
            const kart = data.kart || 'classic';
            const weapon = data.weapon || 'pistol';
            const code = (data.code || '').trim().toUpperCase();
            const playerId = 'sp_' + Math.random().toString(36).slice(2, 8);
            const playerName = '车神岛主';

            let room = null;
            if (kind === 'solo') {
              const rId = 'sroom_' + (++survivalRoomCounter);
              const rCode = generateCode();
              room = new SurvivalRoom(rId, rCode, 'solo');
              survivalRooms.set(rId, room);
              survivalCodeToRoom.set(rCode, rId);
              room.addPlayer(playerId, playerName, character, kart, weapon);
            } else if (kind === 'code') {
              if (survivalCodeToRoom.has(code)) {
                const rId = survivalCodeToRoom.get(code);
                const r = survivalRooms.get(rId);
                if (r && r.world.state.phase === 'waiting' && r.members.size < 4) {
                  room = r;
                }
              }
              if (!room) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok: false, message: `房间码 ${code} 不存在或对局已开始。` }));
                return;
              }
              room.addPlayer(playerId, playerName, character, kart, weapon);
            } else {
              if (kind === 'public') {
                for (const r of survivalRooms.values()) {
                  if (r.kind !== 'solo' && r.world.state.phase === 'waiting' && r.members.size < 4) {
                    room = r;
                    break;
                  }
                }
              }
              if (!room) {
                const rId = 'sroom_' + (++survivalRoomCounter);
                const rCode = generateCode();
                room = new SurvivalRoom(rId, rCode, kind);
                survivalRooms.set(rId, room);
                survivalCodeToRoom.set(rCode, rId);
              }
              room.addPlayer(playerId, playerName, character, kart, weapon);
            }

            res.writeHead(200, {
              'Content-Type': 'application/json',
              'Set-Cookie': `survival_player=${playerId}; Path=/; SameSite=Lax`
            });
            res.end(JSON.stringify({
              ok: true,
              id: playerId,
              roomId: room.id,
              code: room.code,
              host: room.host,
              now: Date.now(),
              readyAt: room.readyAt,
              stateAt: room.stateAt,
              revision: room.revision,
              members: room.getMembersArray(),
              signals: [],
              state: room.world.state
            }));
            return;
          }

          // 3.2 SYNC
          if (action === 'sync') {
            const roomId = data.roomId;
            const room = survivalRooms.get(roomId);
            if (!room || !room.world) {
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ ok: false, message: '生存房间已结束。' }));
              return;
            }

            const playerId = cookies['survival_player'] || [...room.members.keys()][0];
            const member = room.members.get(playerId) || [...room.members.values()][0];

            if (data.input && member) {
              member.input = data.input;
              member.lastSeen = Date.now();
              room.inputs[member.id] = data.input;
            }

            if (data.start && room.world.state.phase === 'waiting') {
              room.world.state.phase = 'running';
              room.revision++;
              room.stateAt = Date.now();
            }

            if (Array.isArray(data.signals)) {
              for (const s of data.signals) {
                if (s.target) {
                  if (!room.signals.has(s.target)) room.signals.set(s.target, []);
                  room.signals.get(s.target).push({
                    id: ++room.signalCounter,
                    sender: playerId,
                    data: s.data
                  });
                }
              }
            }

            const signalAfter = Number(data.signalAfter) || 0;
            const mySignals = (room.signals.get(playerId) || []).filter(s => s.id > signalAfter);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
              ok: true,
              id: playerId,
              roomId: room.id,
              code: room.code,
              host: room.host,
              now: Date.now(),
              readyAt: room.readyAt,
              stateAt: room.stateAt,
              revision: room.revision,
              members: room.getMembersArray(),
              signals: mySignals,
              state: room.world.state
            }));
            return;
          }

          // 3.3 SETTLE
          if (action === 'settle') {
            const roomId = data.roomId;
            const room = survivalRooms.get(roomId);
            let earned = 80;
            if (room && room.world) {
              const p = room.world.state.players[0];
              if (p && p.coins > 0) earned = p.coins;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ ok: true, credited: earned }));
            return;
          }

          // 3.4 LEAVE
          if (action === 'leave') {
            const roomId = data.roomId;
            const room = survivalRooms.get(roomId);
            if (room) {
              const playerId = cookies['survival_player'];
              if (playerId) room.removePlayer(playerId);
              else room.dispose();
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ ok: true }));
            return;
          }

          // Fallback
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: true, balance: 8888 }));
        } catch (err) {
          console.error('API /api/survival error:', err);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: false, message: err.message }));
        }
      });
      return;
    }
  }

  // 4. Static File Server
  let filePath = path.join(ROOT_DIR, pathname === '/' ? 'index.html' : pathname);
  try {
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

    const stream = fs.createReadStream(filePath);
    res.statusCode = 200;
    stream.pipe(res);
  } catch (err) {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🏁 蘑菇卡丁车 · 岛主出品 (Plan B 多人联网 + 蘑菇街求生服务) 已启动！`);
  console.log(`👉 本地畅玩: http://localhost:${PORT}/`);
  console.log(`👉 同 Wi-Fi 局域网开黑: http://192.168.1.2:${PORT}/`);
});
