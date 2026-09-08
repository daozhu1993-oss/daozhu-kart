/**
 * 蘑菇卡丁车 · 岛主出品
 * LocalStorage 本地适配引擎 (local-adapter.js)
 * 作用：拦截 /api/* 请求，使用浏览器的 localStorage 提供免后端的本地持久化能力
 */

(function () {
  console.log("%c🌴 蘑菇卡丁车 · 岛主出品已就绪", "color: #d9f24d; font-size: 16px; font-weight: bold; background: #222; padding: 4px 8px; border-radius: 4px;");

  const originalFetch = window.fetch;

  // 1. 初始化本地排行榜默认数据
  const defaultTop10 = [
    { rank: 1, nickname: "车神岛主", score: 1888, track: "garden", difficulty: "expert", mode: "speed", laps: 3, estimated: false, finishTime: 72.15, character: "mario", kart: "classic", achievedAt: Date.now() - 3600000, isMe: true },
    { rank: 2, nickname: "梅仁", score: 1541, track: "garden", difficulty: "expert", mode: "speed", laps: 3, estimated: false, finishTime: 91.58, character: "mario", kart: "rocket", achievedAt: Date.now() - 7200000, isMe: false },
    { rank: 3, nickname: "蛙里奥", score: 1231, track: "garden", difficulty: "expert", mode: "speed", laps: 3, estimated: true, finishTime: 73.40, character: "bowser", kart: "chatgpt", achievedAt: Date.now() - 10800000, isMe: false },
    { rank: 4, nickname: "维尼", score: 1176, track: "garden", difficulty: "expert", mode: "speed", laps: 2, estimated: true, finishTime: 48.53, character: "toad", kart: "burger", achievedAt: Date.now() - 14400000, isMe: false },
    { rank: 5, nickname: "komorebi", score: 1158, track: "garden", difficulty: "expert", mode: "speed", laps: 3, estimated: true, finishTime: 73.47, character: "yoshi", kart: "ufo", achievedAt: Date.now() - 18000000, isMe: false },
    { rank: 6, nickname: "风风", score: 1190, track: "garden", difficulty: "expert", mode: "speed", laps: 3, estimated: true, finishTime: 73.42, character: "mario", kart: "jetbike", achievedAt: Date.now() - 21600000, isMe: false },
    { rank: 7, nickname: "星空漫步", score: 1135, track: "forest", difficulty: "expert", mode: "speed", laps: 3, estimated: true, finishTime: 74.20, character: "peach", kart: "gemini", achievedAt: Date.now() - 25200000, isMe: false },
    { rank: 8, nickname: "极速先锋", score: 1120, track: "castle", difficulty: "expert", mode: "item", laps: 3, estimated: true, finishTime: 88.50, character: "luigi", kart: "claude", achievedAt: Date.now() - 28800000, isMe: false },
    { rank: 9, nickname: "酷霸王粉丝", score: 1080, track: "castle", difficulty: "standard", mode: "speed", laps: 3, estimated: true, finishTime: 95.10, character: "bowser", kart: "cyber", achievedAt: Date.now() - 32400000, isMe: false },
    { rank: 10, nickname: "新手车手", score: 990, track: "garden", difficulty: "rookie", mode: "speed", laps: 3, estimated: true, finishTime: 102.30, character: "toad", kart: "doubao", achievedAt: Date.now() - 36000000, isMe: false }
  ];

  function getLeaderboard() {
    try {
      const data = localStorage.getItem("daozhu_leaderboard");
      if (data) return JSON.parse(data);
    } catch (e) {}
    return { top10: defaultTop10, profile: { nickname: "车神岛主", bestScore: 1888, completedRuns: 1, needsNickname: false, identityMode: "local" } };
  }

  function saveLeaderboard(board) {
    try {
      localStorage.setItem("daozhu_leaderboard", JSON.stringify(board));
    } catch (e) {}
  }

  // 2. 账号系统 Mock
  function getAccount() {
    try {
      const data = localStorage.getItem("daozhu_account");
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed) {
          parsed.balance = (typeof parsed.balance === "number") ? parsed.balance : (parsed.coins || 8888);
          parsed.inviteCoins = (typeof parsed.inviteCoins === "number") ? parsed.inviteCoins : 0;
          return parsed;
        }
      }
    } catch (e) {}
    return {
      id: "daozhu_user_01",
      username: "车神岛主",
      balance: 8888, coins: 8888,
      rewardDay: 1,
      sharedToday: true,
      inviteCoins: 100
    };
  }

  function saveAccount(acc) {
    try {
      localStorage.setItem("daozhu_account", JSON.stringify(acc));
    } catch (e) {}
  }

  // 3. 抢车位 Mock
  function getParking() {
    return {
      ok: true,
      now: Date.now(),
      profile: {
        id: "daozhu-parking-lot",
        registered: true,
        nickname: "车神岛主",
        code: "DAOZHU8888",
        balance: 8888,
        theme: "garden",
        public: 1,
        bonus: 50,
        bonusUntil: Date.now() + 86400000,
        nextParkAt: 0
      },
      lot: {
        id: "daozhu-parking-lot",
        nickname: "车神岛主专属车位",
        code: "DAOZHU8888",
        theme: "garden",
        public: 1,
        occupied: 1,
        ornaments: []
      },
      slots: [
        { id: "slot-1", car: "classic", status: "parked", earned: 240, parkedAt: Date.now() - 3600000 },
        { id: "slot-2", car: "gemini", status: "empty", earned: 0 }
      ],
      ornaments: [],
      away: [],
      lots: [
        { id: "lot-ai-1", nickname: "马里奥的停车坪", code: "MARIO001", theme: "garden", public: 1, occupied: 0 },
        { id: "lot-ai-2", nickname: "碧姬公主皇家车位", code: "PEACH002", theme: "garden", public: 1, occupied: 0 }
      ],
      friends: [],
      themes: ["garden"],
      events: [],
      blocked: []
    };
  }

  // Fetch 拦截器
  window.fetch = async function (input, init) {
    let url = typeof input === "string" ? input : input instanceof URL ? input.href : input?.url || "";
    const method = (init?.method || "GET").toUpperCase();

    // 排行榜拦截
    if (url.includes("/api/leaderboard")) {
      const board = getLeaderboard();
      if (method === "POST" && init?.body) {
        try {
          const body = JSON.parse(init.body);
          if (body.nickname) {
            board.profile.nickname = body.nickname;
          }
          if (body.score && body.score > 0) {
            board.profile.completedRuns = (board.profile.completedRuns || 0) + 1;
            if (body.score > (board.profile.bestScore || 0)) {
              board.profile.bestScore = body.score;
            }
            board.top10.push({
              rank: board.top10.length + 1,
              nickname: board.profile.nickname || "你",
              score: body.score,
              track: body.track || "garden",
              difficulty: body.difficulty || "standard",
              mode: body.mode || "speed",
              laps: body.laps || 3,
              estimated: false,
              finishTime: body.finishTime || 75.0,
              character: body.character || "mario",
              kart: body.kart || "classic",
              achievedAt: Date.now(),
              isMe: true
            });
            // 重新排序并取前10
            board.top10.sort((a, b) => b.score - a.score);
            board.top10 = board.top10.slice(0, 10).map((item, idx) => ({ ...item, rank: idx + 1 }));
            saveLeaderboard(board);
          }
        } catch (e) {
          console.error("Mock leaderboard error:", e);
        }
      }
      return new Response(JSON.stringify({
        ok: true,
        scoreVersion: 2,
        recalculating: false,
        profile: board.profile,
        top10: board.top10
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 账号拦截
    if (url.includes("/api/account")) {
      let acc = getAccount();
      if (method === "POST" && init?.body) {
        try {
          const body = JSON.parse(init.body);
          if (body.action === "checkin") {
            acc.balance = (acc.balance || 8888) + 100;
            acc.coins = acc.balance;
            saveAccount(acc);
            return new Response(JSON.stringify({
              ok: true,
              account: acc,
              earned: 100,
              message: "签到成功！获得 100 金币。"
            }), {
              status: 200,
              headers: { "Content-Type": "application/json" }
            });
          }
          if (body.action === "share") {
            acc.balance = (acc.balance || 8888) + 50;
            acc.coins = acc.balance;
            saveAccount(acc);
            return new Response(JSON.stringify({
              ok: true,
              account: acc,
              earned: 50,
              message: "分享成功！获得 50 金币。"
            }), {
              status: 200,
              headers: { "Content-Type": "application/json" }
            });
          }
          acc = {
            id: "daozhu_" + Date.now(),
            username: body.username || "车神岛主",
            balance: 8888, coins: 8888,
            rewardDay: 1,
            sharedToday: true,
            inviteCoins: 0
          };
          saveAccount(acc);
        } catch (e) {}
      }
      return new Response(JSON.stringify({
        ok: true,
        account: acc,
        onboarding: {
          nickname: acc.username,
          username: acc.username,
          canKeepName: true,
          source: null,
          balance: acc.balance || 8888, coins: acc.balance || 8888,
          hasWallet: true
        }
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 抢车位拦截
    if (url.includes("/api/parking")) {
      return new Response(JSON.stringify(getParking()), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }


    // 分享拦截
    if (url.includes("/api/share")) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }


    // 其他资源正常请求
    return originalFetch.apply(this, arguments);
  };
})();
