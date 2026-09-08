import{d as e,f as t,n,t as r}from"./data-DIORE0w6.js";import{a as i,d as a,i as o,l as s,t as c,u as l}from"./endurance-track-CFfYRgzd.js";import{n as u}from"./collision-Cx9paes6.js";import{d,r as f,u as p}from"./race-C1W30byT.js";import{A as m,Bt as h,Ct as g,D as _,E as v,Et as y,Gt as b,H as x,Ht as S,I as C,It as w,J as T,K as E,M as D,Mt as O,O as ee,Pt as te,T as k,Tt as ne,Ut as A,Vt as j,W as M,X as N,Y as P,_ as re,_t as ie,b as ae,ct as F,d as I,et as L,f as R,ft as oe,g as se,h as ce,ht as z,i as le,it as ue,j as B,jt as de,kt as fe,n as pe,nt as me,o as he,ot as ge,p as _e,pt as ve,rt as V,s as ye,t as be,tt as H,u as xe,v as U,vt as Se,x as Ce,xt as we,y as Te,zt as W}from"./three.module-6apKfKTZ.js";import{t as Ee}from"./RoundedBoxGeometry-CFCxn223.js";import{_ as G,a as K,c as De,f as q,g as J,i as Oe,l as ke,n as Ae,u as Y,v as je,y as Me}from"./drivers-A4poacb_.js";var Ne=class extends re{constructor(e){super(e),this.type=B}parse(e){let t=function(e,t){switch(e){case 1:throw Error(`THREE.HDRLoader: Read Error: `+(t||``));case 2:throw Error(`THREE.HDRLoader: Write Error: `+(t||``));case 3:throw Error(`THREE.HDRLoader: Bad File Format: `+(t||``));default:case 4:throw Error(`THREE.HDRLoader: Memory Error: `+(t||``))}},n=function(e,t,n){t||=1024;let r=e.pos,i=-1,a=0,o=``,s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));for(;0>(i=s.indexOf(`
`))&&a<t&&r<e.byteLength;)o+=s,a+=s.length,r+=128,s+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));return-1<i?(!1!==n&&(e.pos+=a+i+1),o+s.slice(0,i)):!1},r=function(e){let r=/^#\?(\S+)/,i=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,a=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*FORMAT=(\S+)\s*$/,s=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,c={valid:0,string:``,comments:``,programtype:`RGBE`,format:``,gamma:1,exposure:1,width:0,height:0},l,u;for((e.pos>=e.byteLength||!(l=n(e)))&&t(1,`no header found`),(u=l.match(r))||t(3,`bad initial token`),c.valid|=1,c.programtype=u[1],c.string+=l+`
`;l=n(e),!1!==l;){if(c.string+=l+`
`,l.charAt(0)===`#`){c.comments+=l+`
`;continue}if((u=l.match(i))&&(c.gamma=parseFloat(u[1])),(u=l.match(a))&&(c.exposure=parseFloat(u[1])),(u=l.match(o))&&(c.valid|=2,c.format=u[1]),(u=l.match(s))&&(c.valid|=4,c.height=parseInt(u[1],10),c.width=parseInt(u[2],10)),c.valid&2&&c.valid&4)break}return c.valid&2||t(3,`missing format specifier`),c.valid&4||t(3,`missing image size specifier`),c},i=function(e,n,r){let i=n;if(i<8||i>32767||e[0]!==2||e[1]!==2||e[2]&128)return new Uint8Array(e);i!==(e[2]<<8|e[3])&&t(3,`wrong scanline width`);let a=new Uint8Array(4*n*r);a.length||t(4,`unable to allocate buffer space`);let o=0,s=0,c=4*i,l=new Uint8Array(4),u=new Uint8Array(c),d=r;for(;d>0&&s<e.byteLength;){s+4>e.byteLength&&t(1),l[0]=e[s++],l[1]=e[s++],l[2]=e[s++],l[3]=e[s++],(l[0]!=2||l[1]!=2||(l[2]<<8|l[3])!=i)&&t(3,`bad rgbe scanline format`);let n=0,r;for(;n<c&&s<e.byteLength;){r=e[s++];let i=r>128;if(i&&(r-=128),(r===0||n+r>c)&&t(3,`bad scanline data`),i){let t=e[s++];for(let e=0;e<r;e++)u[n++]=t}else u.set(e.subarray(s,s+r),n),n+=r,s+=r}let f=i;for(let e=0;e<f;e++){let t=0;a[o]=u[e+t],t+=i,a[o+1]=u[e+t],t+=i,a[o+2]=u[e+t],t+=i,a[o+3]=u[e+t],o+=4}d--}return a},a=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=e[t+0]*i,n[r+1]=e[t+1]*i,n[r+2]=e[t+2]*i,n[r+3]=1},o=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=U.toHalfFloat(Math.min(e[t+0]*i,65504)),n[r+1]=U.toHalfFloat(Math.min(e[t+1]*i,65504)),n[r+2]=U.toHalfFloat(Math.min(e[t+2]*i,65504)),n[r+3]=U.toHalfFloat(1)},s=new Uint8Array(e);s.pos=0;let c=r(s),l=c.width,u=c.height,d=i(s.subarray(s.pos),l,u),f,p,m;switch(this.type){case v:m=d.length/4;let e=new Float32Array(m*4);for(let t=0;t<m;t++)a(d,t*4,e,t*4);f=e,p=v;break;case B:m=d.length/4;let t=new Uint16Array(m*4);for(let e=0;e<m;e++)o(d,e*4,t,e*4);f=t,p=B;break;default:throw Error(`THREE.HDRLoader: Unsupported type: `+this.type)}return{width:l,height:u,data:f,header:c.string,gamma:c.gamma,exposure:c.exposure,type:p}}setDataType(e){return this.type=e,this}load(e,t,n,r){function i(e,n){switch(e.type){case v:case B:e.colorSpace=M,e.minFilter=x,e.magFilter=x,e.generateMipmaps=!1,e.flipY=!0;break}t&&t(e,n)}return super.load(e,i,n,r)}},X={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Z=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Pe=new ge(-1,1,1,-1,0,1),Fe=new class extends he{constructor(){super(),this.setAttribute(`position`,new k([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new k([0,2,0,0,2,0],2))}},Ie=class{constructor(e){this._mesh=new P(Fe,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Pe)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Le=class extends Z{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof y?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=W.clone(e.uniforms),this.material=new y({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ie(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Re=class extends Z{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},ze=class extends Z{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Be=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new S);this._width=n.width,this._height=n.height,t=new b(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:B}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Le(X),this.copyPass.material.blending=0,this.clock=new xe}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Re!==void 0&&(r instanceof Re?n=!0:r instanceof ze&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new S);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Ve=class extends Z{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new I}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},He={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:`x`,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new S},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new T},cameraProjectionMatrixInverse:{value:new T},cameraWorldMatrix:{value:new T},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new A(-1,-1,-1)},sceneBoxMax:{value:new A(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ue={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},We={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Ge(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=Ke(t),r=n.length,i=new Uint8Array(r*4);for(let e=0;e<r;++e){let t=n[e],a=2*Math.PI*t/r,o=new A(Math.cos(a),Math.sin(a),0).normalize();i[e*4]=(o.x*.5+.5)*255,i[e*4+1]=(o.y*.5+.5)*255,i[e*4+2]=127,i[e*4+3]=255}let a=new se(i,t,t);return a.wrapS=we,a.wrapT=we,a.needsUpdate=!0,a}function Ke(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;){if(i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]!==0){a-=2,i++;continue}else r[i*t+a]=e++;a++,i--}return r}var qe={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:Je(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new S},cameraProjectionMatrixInverse:{value:new T},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Je(e,t,n){let r=Ye(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function Ye(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new A(Math.cos(a),Math.sin(a),o))}return r}var Xe=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,ee=_-C+2*d,te=v-w+2*d,k=g-1+3*d,ne=_-1+3*d,A=v-1+3*d,j=c&255,M=l&255,N=u&255,P=this.perm[j+this.perm[M+this.perm[N]]]%12,re=this.perm[j+y+this.perm[M+b+this.perm[N+x]]]%12,ie=this.perm[j+S+this.perm[M+C+this.perm[N+w]]]%12,ae=this.perm[j+1+this.perm[M+1+this.perm[N+1]]]%12,F=.6-g*g-_*_-v*v;F<0?r=0:(F*=F,r=F*F*this._dot3(this.grad3[P],g,_,v));let I=.6-T*T-E*E-D*D;I<0?i=0:(I*=I,i=I*I*this._dot3(this.grad3[re],T,E,D));let L=.6-O*O-ee*ee-te*te;L<0?a=0:(L*=L,a=L*L*this._dot3(this.grad3[ie],O,ee,te));let R=.6-k*k-ne*ne-A*A;return R<0?o=0:(R*=R,o=R*R*this._dot3(this.grad3[ae],k,ne,A)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,ee=w>E?16:0,te=T>E?8:0,k=w>D?4:0,ne=T>D?2:0,A=+(E>D),j=O+ee+te+k+ne+A,M=+(a[j][0]>=3),N=+(a[j][1]>=3),P=+(a[j][2]>=3),re=+(a[j][3]>=3),ie=+(a[j][0]>=2),ae=+(a[j][1]>=2),F=+(a[j][2]>=2),I=+(a[j][3]>=2),L=+(a[j][0]>=1),R=+(a[j][1]>=1),oe=+(a[j][2]>=1),se=+(a[j][3]>=1),ce=w-M+c,z=T-N+c,le=E-P+c,ue=D-re+c,B=w-ie+2*c,de=T-ae+2*c,fe=E-F+2*c,pe=D-I+2*c,me=w-L+3*c,he=T-R+3*c,ge=E-oe+3*c,_e=D-se+3*c,ve=w-1+4*c,V=T-1+4*c,ye=E-1+4*c,be=D-1+4*c,H=h&255,xe=g&255,U=_&255,Se=v&255,Ce=o[H+o[xe+o[U+o[Se]]]]%32,we=o[H+M+o[xe+N+o[U+P+o[Se+re]]]]%32,Te=o[H+ie+o[xe+ae+o[U+F+o[Se+I]]]]%32,W=o[H+L+o[xe+R+o[U+oe+o[Se+se]]]]%32,Ee=o[H+1+o[xe+1+o[U+1+o[Se+1]]]]%32,G=.6-w*w-T*T-E*E-D*D;G<0?l=0:(G*=G,l=G*G*this._dot4(i[Ce],w,T,E,D));let K=.6-ce*ce-z*z-le*le-ue*ue;K<0?u=0:(K*=K,u=K*K*this._dot4(i[we],ce,z,le,ue));let De=.6-B*B-de*de-fe*fe-pe*pe;De<0?d=0:(De*=De,d=De*De*this._dot4(i[Te],B,de,fe,pe));let q=.6-me*me-he*he-ge*ge-_e*_e;q<0?f=0:(q*=q,f=q*q*this._dot4(i[W],me,he,ge,_e));let J=.6-ve*ve-V*V-ye*ye-be*be;return J<0?p=0:(J*=J,p=J*J*this._dot4(i[Ee],ve,V,ye,be)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},Ze=class e extends Z{constructor(e,t,n=512,r=512,i,a,o){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Ge(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new b(this.width,this.height,{type:B}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new y({defines:Object.assign({},He.defines),uniforms:W.clone(He.uniforms),vertexShader:He.vertexShader,fragmentShader:He.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new L,this.normalMaterial.blending=0,this.pdMaterial=new y({defines:Object.assign({},qe.defines),uniforms:W.clone(qe.uniforms),vertexShader:qe.vertexShader,fragmentShader:qe.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new y({defines:Object.assign({},Ue.defines),uniforms:W.clone(Ue.uniforms),vertexShader:Ue.vertexShader,fragmentShader:Ue.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new y({uniforms:W.clone(X.uniforms),vertexShader:X.vertexShader,fragmentShader:X.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new y({uniforms:W.clone(We.uniforms),vertexShader:We.vertexShader,fragmentShader:We.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new Ie(null),this._originalClearColor=new I,this.setGBuffer(i?i.depthTexture:void 0,i?i.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e===void 0?(this.depthTexture=new ae,this.depthTexture.format=Te,this.depthTexture.type=j,this.normalRenderTarget=new b(this.width,this.height,{minFilter:V,magFilter:V,type:B,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0):(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1);let n=+!!this.normalTexture,r=this.depthTexture===this.normalTexture?`w`:`x`;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Je(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Xe,n=e*e*4,r=new Uint8Array(n);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let a=n,o=i;r[(n*e+i)*4]=(t.noise(a,o)*.5+.5)*255,r[(n*e+i)*4+1]=(t.noise(a+e,o)*.5+.5)*255,r[(n*e+i)*4+2]=(t.noise(a,o+e)*.5+.5)*255,r[(n*e+i)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let i=new se(r,e,e,ie,h);return i.wrapS=we,i.wrapT=we,i.needsUpdate=!0,i}};Ze.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Qe={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new I(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},$e=class e extends Z{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new S(256,256):new S(e.x,e.y),this.clearColor=new I(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new b(i,a,{type:B}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new b(i,a,{type:B});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new b(i,a,{type:B});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Qe;this.highPassUniforms=W.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new y({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[3,5,7,9,11];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new S(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=W.clone(X.uniforms),this.blendMaterial=new y({uniforms:this.copyUniforms,vertexShader:X.vertexShader,fragmentShader:X.fragmentShader,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new I,this._oldClearAlpha=1,this._basic=new N,this._fsQuad=new Ie(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new S(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new y({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new S(.5,.5)},direction:{value:new S(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new y({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};$e.BlurDirectionX=new S(1,0),$e.BlurDirectionY=new S(0,1);var et={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},tt=class extends Z{constructor(){super(),this.uniforms=W.clone(et.uniforms),this.material=new Se({name:et.name,uniforms:this.uniforms,vertexShader:et.vertexShader,fragmentShader:et.fragmentShader}),this._fsQuad=new Ie(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},R.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},nt={name:`SMAAEdgesShader`,defines:{SMAA_THRESHOLD:`0.1`},uniforms:{tDiffuse:{value:null},resolution:{value:new S(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},rt={name:`SMAAWeightsShader`,defines:{SMAA_MAX_SEARCH_STEPS:`8`,SMAA_AREATEX_MAX_DISTANCE:`16`,SMAA_AREATEX_PIXEL_SIZE:`( 1.0 / vec2( 160.0, 560.0 ) )`,SMAA_AREATEX_SUBTEX_SIZE:`( 1.0 / 7.0 )`},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new S(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},it={name:`SMAABlendShader`,uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new S(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`},at=class extends Z{constructor(){super(),this._edgesRT=new b(1,1,{depthBuffer:!1,type:B}),this._edgesRT.texture.name=`SMAAPass.edges`,this._weightsRT=new b(1,1,{depthBuffer:!1,type:B}),this._weightsRT.texture.name=`SMAAPass.weights`;let e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new te,this._areaTexture.name=`SMAAPass.area`,this._areaTexture.image=t,this._areaTexture.minFilter=x,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;let n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new te,this._searchTexture.name=`SMAAPass.search`,this._searchTexture.image=n,this._searchTexture.magFilter=V,this._searchTexture.minFilter=V,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=W.clone(nt.uniforms),this._materialEdges=new y({defines:Object.assign({},nt.defines),uniforms:this._uniformsEdges,vertexShader:nt.vertexShader,fragmentShader:nt.fragmentShader}),this._uniformsWeights=W.clone(rt.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new y({defines:Object.assign({},rt.defines),uniforms:this._uniformsWeights,vertexShader:rt.vertexShader,fragmentShader:rt.fragmentShader}),this._uniformsBlend=W.clone(it.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new y({uniforms:this._uniformsBlend,vertexShader:it.vertexShader,fragmentShader:it.fragmentShader}),this._fsQuad=new Ie(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return`data:image/png;base64,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`}_getSearchTexture(){return`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII=`}},ot=class{constructor(){this.previous=null,this.lastChange=0,this.fps=60}reset(){this.previous=null,this.fps=60}sample(e){let t=this.previous===null,n=t?1/60:Math.max(1/240,(e-this.previous)/1e3);t&&(this.lastChange=e),this.previous=e;let r=Math.min(.25,n);return this.fps+=(1/n-this.fps)*(1-Math.exp(-1.5*r)),r}resolution(e,t,n){let r=e-this.lastChange;return r>3e3&&this.fps<50&&t>.6?(this.lastChange=e,Math.max(.6,t*.9)):r>8e3&&this.fps>58&&t<n?(this.lastChange=e,Math.min(n,t*1.08)):t}},st=[[[[0,0,1],[2,0,1],[5,4,1],[7,2,1],[8,0,2],[12,4,1],[14,5,1]],[[0,7,2],[3,5,1],[6,4,1],[8,2,2],[11,4,1],[14,0,2]],[[0,0,1],[2,0,1],[5,4,1],[7,2,1],[8,0,2],[12,4,1],[14,5,1]],[[0,7,1],[3,6,1],[4,5,2],[8,4,1],[10,2,1],[12,0,3]]],[[[0,4,2],[3,2,1],[6,4,1],[8,5,1],[11,4,1],[14,2,2]],[[0,1,1],[2,2,1],[5,4,1],[8,2,3],[13,0,2]],[[0,4,2],[3,2,1],[6,4,1],[8,5,1],[11,4,1],[14,7,2]],[[1,6,1],[4,5,2],[7,4,1],[10,2,2],[14,0,2]]],[[[0,0,1],[1,2,1],[4,4,2],[7,4,1],[10,2,1],[12,0,2]],[[0,5,1],[3,4,1],[4,2,2],[8,1,2],[12,2,2]],[[0,0,1],[1,2,1],[4,4,2],[7,7,1],[10,5,1],[12,4,2]],[[0,2,2],[4,1,1],[7,2,1],[8,0,4],[14,-1,1]]]],ct=[[[[0,0,1],[3,0,1],[4,2,1],[7,4,1],[8,2,2],[12,0,2]],[[0,4,1],[3,4,1],[4,5,1],[7,7,1],[8,5,2],[12,4,2]],[[0,0,1],[3,0,1],[4,2,1],[7,4,1],[8,2,2],[12,0,2]],[[0,5,2],[4,4,1],[7,2,1],[8,1,2],[12,0,3]]],[[[0,2,1],[2,4,1],[5,2,1],[8,0,2],[11,0,1],[14,2,1]],[[0,4,2],[4,5,1],[6,4,1],[9,2,2],[13,0,2]],[[0,2,1],[2,4,1],[5,2,1],[8,0,2],[11,0,1],[14,7,1]],[[0,6,2],[4,5,1],[6,4,1],[9,2,2],[13,0,2]]],[[[0,4,1],[4,4,1],[6,2,1],[8,0,2],[12,2,1],[14,4,1]],[[0,5,2],[3,4,1],[6,2,1],[9,1,1],[12,0,3]],[[0,4,1],[4,4,1],[6,2,1],[8,0,2],[12,2,1],[14,7,1]],[[0,5,2],[3,4,1],[6,2,1],[9,0,1],[12,0,3]]]],lt=[`停车摇摇乐`,`金币蹦蹦街`,`蘑菇招财舞`],ut=[`王国主题曲`,`弹跳冲刺`,`摇摆追逐`,`胜利回旋`],dt=`kart.audio.volumes.v1`,ft={music:.46,sfx:.68},pt=.15,mt=25,ht=16,gt=96,Q=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),$=e=>440*2**((e-69)/12),_t={garden:132,forest:118,castle:138};function vt(e){let t=(e%gt+gt)%gt;return t<16?`hook`:t<32?`answer`:t<40?`break`:t<48?`build`:t<64?`drop`:t<80?`bridge`:`finale`}var yt={garden:[[[0,4,1],[3,4,1],[4,2,2],[7,1,1],[8,0,3],[12,2,1],[14,4,1]],[[0,5,2],[3,4,1],[6,2,2],[9,1,1],[10,2,2],[14,0,2]],[[0,4,1],[3,4,1],[4,2,2],[7,1,1],[8,0,3],[12,2,1],[14,4,1]],[[0,5,2],[3,7,1],[4,6,2],[7,4,1],[8,2,2],[11,1,1],[12,0,3]]],forest:[[[0,0,1],[3,2,1],[5,4,1],[6,2,1],[8,0,2],[11,-1,1],[14,0,2]],[[0,4,2],[3,2,1],[6,0,2],[10,2,1],[13,1,1],[14,0,2]],[[0,0,1],[3,2,1],[5,4,1],[6,2,1],[8,0,2],[11,-1,1],[14,0,2]],[[0,5,1],[3,4,1],[6,2,2],[9,1,1],[12,0,3]]],castle:[[[0,0,1],[2,0,1],[3,4,1],[6,3,2],[8,2,1],[10,1,1],[11,0,2],[14,4,1]],[[0,0,1],[2,0,1],[3,4,1],[6,5,2],[9,4,1],[10,2,2],[14,1,1]],[[0,0,1],[2,0,1],[3,4,1],[6,3,2],[8,2,1],[10,1,1],[11,0,2],[14,4,1]],[[0,5,2],[3,4,1],[6,2,1],[8,1,2],[11,0,3]]]},bt={garden:[[[0,7,3],[4,6,1],[6,5,2],[10,4,2],[14,2,2]],[[1,4,2],[4,5,2],[8,7,3],[12,6,1],[14,4,2]],[[0,5,3],[4,4,1],[6,2,2],[10,1,2],[14,2,2]],[[0,4,2],[3,2,1],[6,1,2],[10,0,5]]],forest:[[[0,7,2],[3,4,1],[6,5,2],[10,4,2],[14,2,2]],[[1,4,2],[4,2,2],[8,0,3],[12,2,1],[14,4,2]],[[0,5,2],[3,7,1],[6,6,2],[10,4,2],[14,2,2]],[[0,4,2],[3,2,1],[6,1,2],[10,0,5]]],castle:[[[0,7,2],[3,6,1],[4,7,2],[8,4,3],[12,2,2]],[[0,5,3],[4,4,2],[8,2,2],[11,1,1],[14,0,2]],[[0,4,3],[4,6,2],[8,7,3],[12,6,2]],[[0,5,2],[3,4,1],[6,2,2],[10,1,2],[14,0,2]]]},xt={garden:{bpm:_t.garden,tonic:62,scale:[0,2,4,5,7,9,11],leadCutoff:4200,arpWave:`triangle`,chords:[0,0,3,4,5,3,1,4]},forest:{bpm:_t.forest,tonic:62,scale:[0,2,3,5,7,9,10],leadCutoff:4600,arpWave:`sine`,chords:[0,0,3,0,6,3,4,0]},castle:{bpm:_t.castle,tonic:57,scale:[0,2,3,5,7,8,11],leadCutoff:3400,arpWave:`triangle`,chords:[0,0,5,4,0,3,5,4]}},St={brass:[0,1,.62,.36,.2,.12,.07,.045,.025],mallet:[0,1,.06,.42,.025,.13,.01,.035],pluck:[0,1,.34,.19,.09,.045,.018],reed:[0,1,.025,.24,.01,.08,.005,.025],pad:[0,1,.23,.08,.03,.01],bass:[0,1,.4,.18,.07,.025]},Ct={music:48,sfx:24},wt=class{constructor(){this.context=null,this.unlocking=null,this.master=null,this.musicBus=null,this.musicDuck=null,this.sfxBus=null,this.leadBus=null,this.arpBus=null,this.bassBus=null,this.drumBus=null,this.engineGain=null,this.engineLow=null,this.engineHigh=null,this.driftGain=null,this.driftSource=null,this.noiseBuffer=null,this.waves={},this.graphNodes=[],this.voices={music:new Set,sfx:new Set},this.timer=null,this.nextNoteAt=0,this.scoreStep=0,this.musicVariation=0,this.survivalIntensity=0,this.scene=`menu`,this.track=`garden`,this.musicVolume=ft.music,this.sfxVolume=ft.sfx,this.muted=!1,this.disposed=!1,this.engineState={speed:0,active:!1,drift:!1},this.lastPlayed=new Map,this.finalLap=!1,this.boosting=!1,this.engineStyle=`classic`,this.previousLap=1,this.previousRank=0,this.previousSpeed=0,this.previousDrift=!1,this.cowNextAt=0,this.cowBuffer=null,this.cowLoading=null,this.cowFetch=null,this.cowEligible=!1,this.cowRetryAt=0,this.cowLastAt=-1/0;try{let e=JSON.parse(globalThis.localStorage?.getItem(dt)||`null`);Number.isFinite(e?.music)&&(this.musicVolume=Q(e.music)),Number.isFinite(e?.sfx)&&(this.sfxVolume=Q(e.sfx))}catch{}}get volumes(){return{music:this.musicVolume,sfx:this.sfxVolume}}cowTurretMoment(e=performance.now()){this.cowMoment(!0,e,!0)}cowMoment(e,t=performance.now(),n=!1){if(this.cowEligible=e,!e||this.disposed||this.muted||!this.context||this.context.state!==`running`||this.sfxVolume<=0||document.hidden)return;if(this.cowNextAt||=t+16e3+Math.random()*2e4,!this.cowBuffer&&!this.cowLoading&&t>=this.cowRetryAt){let e=this.context;this.cowFetch=new AbortController,this.cowLoading=fetch(`/audio/niulai-mama.mp3`,{signal:this.cowFetch.signal}).then(e=>{if(!e.ok)throw Error(`Meme audio unavailable`);return e.arrayBuffer()}).then(t=>e.decodeAudioData(t)).then(e=>{this.disposed||(this.cowBuffer=e)}).catch(()=>{this.cowRetryAt=t+9e4}).finally(()=>{this.cowLoading=null,this.cowFetch=null})}if(!n&&t<this.cowNextAt||!this.cowBuffer||!this.sfxBus||t-this.cowLastAt<Math.max(4200,this.cowBuffer.duration*1e3+100)||(this.cowLastAt=t,this.cowNextAt=t+55e3+Math.random()*55e3,!this.cowEligible))return;let r=this.context.createBufferSource();r.buffer=this.cowBuffer;let i=this.envelope(this.context.currentTime,r.buffer.duration,.42,this.sfxBus,.015,.95);r.connect(i),this.trackVoice(r,i,[i],`sfx`),r.start()}async unlock(){if(!this.disposed){if(this.unlocking)return this.unlocking;this.unlocking=(async()=>{if(!this.context){let e=globalThis,t=e.AudioContext||e.webkitAudioContext;if(!t)throw Error(`Web Audio is not supported in this browser.`);this.context=new t({latencyHint:`interactive`}),this.buildGraph(this.context)}let e=this.context;e.state!==`running`&&await e.resume(),!(this.disposed||this.context!==e)&&(this.applyVolumes(),this.updateMaster(),this.updateEngine(),this.timer===null&&(this.nextNoteAt=e.currentTime+.045,this.timer=setInterval(()=>this.schedule(),mt),this.schedule()))})();try{await this.unlocking}finally{this.unlocking=null}}}setVolumes(e,t){Number.isFinite(e)&&(this.musicVolume=Q(e)),Number.isFinite(t)&&(this.sfxVolume=Q(t));try{globalThis.localStorage?.setItem(dt,JSON.stringify(this.volumes))}catch{}this.applyVolumes()}setMuted(e){this.muted=e,this.updateMaster(),this.updateEngine()}setScene(e,t){if(this.disposed)return;let n=this.track!==t,r=e===`race`&&this.scene===`menu`,i=e===`parking`!=(this.scene===`parking`)||e===`survival`!=(this.scene===`survival`);this.scene===e&&!n||(e===`menu`&&(this.finalLap=!1,this.boosting=!1,this.previousLap=1,this.previousRank=0,this.previousSpeed=0,this.previousDrift=!1),this.scene=e,this.track=t,r&&(this.musicVariation=(this.musicVariation+1)%4),(n||r||i)&&this.context&&(this.stopVoices(`music`),this.scoreStep=0,this.nextNoteAt=this.context.currentTime+.055),this.applyVolumes(),this.updateEngine())}get musicTitle(){if(this.scene===`survival`)return[`雾灯未熄`,`街角心跳`,`最后的巡逻`][this.musicVariation%3];let e=this.scene===`parking`?lt:ut;return e[this.musicVariation%e.length]}nextMusic(){this.musicVariation=(this.musicVariation+1)%(this.scene===`parking`?3:4),this.scoreStep=0,this.context&&(this.stopVoices(`music`),this.nextNoteAt=this.context.currentTime+.06),this.play(`select`)}setSurvivalIntensity(e){this.survivalIntensity=Q(e)}setEngine(e,t,n){this.engineState={speed:Number.isFinite(e)?Q(e,0,80):0,active:t,drift:n},this.updateEngine()}setRaceDetail(e,t,n,r,i,a=!1){if(this.engineStyle=r,this.boosting=a,this.scene!==`race`||!this.engineState.active)return;let{speed:o,drift:s}=this.engineState;this.finalLap=e>=t,e>this.previousLap&&this.finalLap&&this.play(`final-lap`),this.previousRank>n&&n>0&&this.play(`overtake`),s&&!this.previousDrift&&o>10&&this.play(`drift-in`),i&&this.previousSpeed>16&&o<this.previousSpeed-.3&&this.play(`brake`),this.previousLap=e,this.previousRank=n,this.previousSpeed=o,this.previousDrift=s}play(e){let t=this.context;if(!t||t.state!==`running`||this.disposed||this.muted||!this.sfxBus)return;let n=t.currentTime,r=[`finish`,`final-lap`,`overtake`,`brake`].includes(e)?1:e===`beep`?.18:e===`bump`?.16:.09;if(n-(this.lastPlayed.get(e)??-1/0)<r)return;if(this.lastPlayed.set(e,n),e===`go`&&this.scene===`race`&&(this.stopVoices(`music`),this.scoreStep=0,this.nextNoteAt=n+.012),this.musicDuck&&[`pickup`,`hit`,`boost`,`final-lap`,`finish`].includes(e)){let t=this.musicDuck.gain;t.cancelScheduledValues(n),t.setTargetAtTime(e===`finish`?.48:.76,n,.012),t.setTargetAtTime(1,n+(e===`finish`?.9:.16),.12)}let i=n+.006,a=(e,t,n=.12,r=.11,a=`sine`)=>this.tone(i+t,$(e),n,r,a,this.sfxBus,`sfx`);if(e.startsWith(`powerup-`)){let t=[`frost`,`nova`,`invincible`,`regen`].some(t=>e===`powerup-`+t);for(let e=0;e<4;e++)a((t?74:62)+[0,7,12,19][e],e*.045,.15,.065,t?`sine`:`triangle`);return}switch(e){case`lightning-shot`:this.noise(i,.07,.07,4300,`highpass`,this.sfxBus,`sfx`),a(95,0,.07,.04,`sawtooth`);return;case`barrage-shot`:this.noise(i,.23,.07,2500,`bandpass`,this.sfxBus,`sfx`),a(65,0,.09,.06),a(77,.04,.1,.04);return;case`nova-pulse`:a(96,0,.4,.05),a(103,.09,.3,.03),this.noise(i,.28,.045,4600,`highpass`,this.sfxBus,`sfx`);return;case`orbit-pulse`:this.noise(i,.18,.04,1800,`bandpass`,this.sfxBus,`sfx`);return;case`meteor-warning`:a(69,0,.13,.07),a(69,.25,.1,.04);return;case`meteor-impact`:case`turret-break`:this.noise(i,.45,.16,500,`lowpass`,this.sfxBus,`sfx`),a(28,0,.35,.1);return;case`rat-warning`:a(91,0,.11,.09,`sawtooth`),a(100,.14,.11,.08,`sawtooth`),this.noise(i,.3,.065,2400,`bandpass`,this.sfxBus,`sfx`);return;case`rat-theft`:[84,79,72,64].forEach((e,t)=>a(e,t*.1,.15,.08,`triangle`));return;case`rat-blocked`:a(84,0,.12,.07),a(96,.08,.25,.07);return;case`pistol-shot`:case`rifle-shot`:case`shotgun-shot`:case`smg-shot`:case`machinegun-shot`:case`sniper-shot`:this.noise(i,e===`shotgun-shot`?.2:.09,.2,1700,`lowpass`,this.sfxBus,`sfx`),a(e===`shotgun-shot`?31:43,0,.1,.15,`triangle`);return;case`laser-shot`:case`turret-shot`:a(e===`turret-shot`?78:88,0,.08,.085,`sawtooth`),a(52,.04,.12,.055);return;case`flamethrower-shot`:this.noise(i,.14,.08,900,`lowpass`,this.sfxBus,`sfx`);return;case`turret-deploy`:a(48,0,.12,.1,`triangle`),a(60,.1,.2,.08,`square`);return;case`crossbow-shot`:case`melee`:this.noise(i,.14,.09,2300,`bandpass`,this.sfxBus,`sfx`),a(47,.05,.09,.1);return;case`reload`:case`weapon-drop`:case`weapon-pickup`:this.noise(i,.035,.09,3600,`highpass`,this.sfxBus,`sfx`),a(63,.08,.04,.08,`square`),a(68,.18,.04,.06,`square`);return;case`chest-pickup`:for(let e=0;e<5;e++)a(72+[0,4,7,12,16][e],e*.055,.24,.075);return;case`ammo-pickup`:case`med-pickup`:case`coin-pickup`:a(e===`med-pickup`?76:84,0,.1,.08),a(e===`med-pickup`?83:91,.08,.18,.07);return;case`monster-down`:this.noise(i,.12,.065,600,`lowpass`,this.sfxBus,`sfx`),a(39,.01,.13,.055);return;case`monster-brute`:a(25,0,.7,.12,`sawtooth`),a(37,.12,.35,.05,`triangle`),this.noise(i,.5,.07,260,`lowpass`,this.sfxBus,`sfx`);return;case`monster-spitter`:this.noise(i,.55,.075,720,`bandpass`,this.sfxBus,`sfx`),a(43,0,.3,.06,`triangle`),a(40,.2,.4,.045);return;case`monster-windup`:case`chomp-growl`:a(28,0,.7,.11,`sawtooth`),a(29,.12,.7,.055,`triangle`),this.noise(i,.8,.06,400,`lowpass`,this.sfxBus,`sfx`);return;case`bomb-fuse`:[0,.3,.6,.85,1.05,1.2].forEach((e,t)=>a(78+t*2,e,.06,.035,`square`));return;case`bomb-pop`:this.noise(i,.4,.13,600,`lowpass`,this.sfxBus,`sfx`),a(28,0,.4,.12,`triangle`);return;case`monkey-jump`:a(67,0,.12,.06,`triangle`),a(79,.09,.16,.05,`triangle`);return;case`bone-collapse`:case`bone-revive`:[0,.06,.13].forEach((t,n)=>a(e===`bone-revive`?56+n*4:68-n*5,t,.07,.04,`square`));return;case`acid-spit`:this.noise(i,.5,.12,2100,`bandpass`,this.sfxBus,`sfx`),a(53,0,.3,.06,`sawtooth`);return;case`survivor-hit`:a(33,0,.16,.13),this.noise(i,.15,.13,850,`lowpass`,this.sfxBus,`sfx`);return;case`survival-start`:case`survival-wave`:[45,48,52,57].forEach((e,t)=>a(e,t*.17,.4,.085,`sawtooth`));return;case`survivor-death`:case`survival-over`:[48,43,39,33].forEach((e,t)=>a(e,t*.24,.6,.09,`triangle`));return;case`street-open`:[72,76,79,84,81,84].forEach((e,t)=>a(e,t*.075,.17,.055,`triangle`));break;case`car-select`:a(72+this.musicVariation%3*2,0,.07,.05,`triangle`),a(84,.055,.09,.042);break;case`visit`:[72,79,81].forEach((e,t)=>a(e,t*.04,.1,.045));break;case`park`:this.sweep(i,170,75,.48,.04,`triangle`,this.sfxBus,`sfx`),[76,79,84,88].forEach((e,t)=>a(e,.9+t*.085,.2,.055)),this.noise(i+1.15,.06,.025,1200,`bandpass`,this.sfxBus,`sfx`);break;case`recall`:this.sweep(i,80,270,.5,.035,`triangle`,this.sfxBus,`sfx`),[79,84,88,91,96].forEach((e,t)=>a(e,.2+t*.06,.17,.045));break;case`ticket`:this.noise(i,.055,.05,1800,`bandpass`,this.sfxBus,`sfx`),[72,77,81,84].forEach((e,t)=>a(e,.1+t*.06,.12,.05,`triangle`));break;case`friend`:[76,83,88].forEach((e,t)=>a(e,t*.09,.2,.045));break;case`decorate`:[72,76,79,83,84,88,91].forEach((e,t)=>a(e,t*.065,.26,.045));break;case`error`:a(57,0,.09,.035,`triangle`),a(53,.1,.12,.03,`triangle`);break;case`select`:a(76,0,.065,.06,`triangle`),a(83,.04,.1,.055);break;case`drift-in`:this.sweep(i,760,420,.17,.045,`triangle`,this.sfxBus,`sfx`),this.noise(i,.12,.036,2300,`bandpass`,this.sfxBus,`sfx`);break;case`brake`:this.sweep(i,830,290,.22,.032,`sine`,this.sfxBus,`sfx`),this.noise(i,.17,.025,1500,`bandpass`,this.sfxBus,`sfx`);break;case`overtake`:[79,84,88].forEach((e,t)=>a(e,t*.045,.14,.042));break;case`final-lap`:[76,79,84,88,86,91].forEach((e,t)=>a(e,t*.1,t===5?.45:.15,.078,`triangle`)),this.noise(i+.5,.3,.038,4200,`highpass`,this.sfxBus,`sfx`);break;case`beep`:a(77,0,.105,.11,`triangle`);break;case`go`:a(72,0,.14,.11),a(79,.07,.15,.1),a(84,.14,.3,.11);break;case`boost`:this.sweep(i,150,780,.3,.065,`triangle`,this.sfxBus,`sfx`),this.noise(i,.23,.055,2100,`highpass`,this.sfxBus,`sfx`),a(86,.11,.18,.055);break;case`ready`:[81,86,88].forEach((e,t)=>a(e,t*.075,.19,.08));break;case`hit`:this.sweep(i,180,47,.21,.12,`triangle`,this.sfxBus,`sfx`),this.noise(i,.12,.1,1350,`lowpass`,this.sfxBus,`sfx`);break;case`bump`:this.sweep(i,95,38,.115,.068,`sine`,this.sfxBus,`sfx`),this.noise(i,.055,.032,750,`lowpass`,this.sfxBus,`sfx`);break;case`shield`:[83,88,92,95].forEach((e,t)=>a(e,t*.025,.34,.065));break;case`lap`:[74,79,83,86].forEach((e,t)=>a(e,t*.085,t===3?.35:.16,.09,`triangle`));break;case`item`:this.sweep(i,380,1100,.12,.065,`sine`,this.sfxBus,`sfx`),a(88,.07,.15,.07);break;case`pickup`:a(88,0,.105,.08),a(93,.075,.19,.07);break;case`coin`:a(91,0,.09,.075,`triangle`),a(103,.065,.16,.065,`triangle`);break;case`ice`:[93,98,102].forEach((e,t)=>a(e,t*.055,.3,.045)),this.noise(i,.22,.035,5400,`highpass`,this.sfxBus,`sfx`);break;case`star`:[79,86,90,88,95,93].forEach((e,t)=>a(e,t*.065,.2,.062));break;case`finish`:{let e=[72,76,79,81,77,84,83,79,86,84],t=[0,.12,.24,.44,.68,.84,1.08,1.22,1.42,1.66];e.forEach((e,n)=>a(e,t[n],n===9?.72:.21,.095,`triangle`)),[60,64,67].forEach(e=>a(e,1.66,.85,.042));break}}}dispose(){if(this.disposed)return;this.disposed=!0,this.cowFetch?.abort(),this.cowBuffer=null,this.timer!==null&&clearInterval(this.timer),this.timer=null,this.stopVoices(`music`,!0),this.stopVoices(`sfx`,!0);for(let e of[this.engineLow,this.engineHigh,this.driftSource])try{e?.stop()}catch{}for(let e of this.graphNodes)try{e.disconnect()}catch{}this.graphNodes=[],this.lastPlayed.clear();let e=this.context;this.context=null,this.master=this.musicBus=this.musicDuck=this.sfxBus=null,this.leadBus=this.arpBus=this.bassBus=this.drumBus=null,this.engineGain=this.driftGain=null,this.engineLow=this.engineHigh=null,this.driftSource=null,this.noiseBuffer=null,this.waves={},e&&e.state!==`closed`&&e.close().catch(()=>{})}buildGraph(e){let t=(t,n)=>{let r=e.createGain();return r.gain.value=t,r.gain.setValueAtTime(t,e.currentTime),n&&r.connect(n),this.graphNodes.push(r),r},n=e.createDynamicsCompressor();n.threshold.value=-17,n.knee.value=16,n.ratio.value=3,n.attack.value=.008,n.release.value=.18,n.connect(e.destination),this.graphNodes.push(n),this.master=t(0,n),this.musicDuck=t(1,this.master),this.musicBus=t(0,this.musicDuck),this.sfxBus=t(0,this.master),this.leadBus=t(.85,this.musicBus),this.arpBus=t(.62,this.musicBus),this.bassBus=t(.86,this.musicBus),this.drumBus=t(.67,this.musicBus);for(let[t,n]of Object.entries(St))this.waves[t]=e.createPeriodicWave(new Float32Array(n.length),new Float32Array(n));let r=t(.2);this.leadBus.connect(r),this.arpBus.connect(r);for(let[n,i,a]of[[.095,-.7,.4],[.17,.65,.28],[.265,-.25,.18]]){let o=e.createDelay(.4),s=e.createBiquadFilter(),c=e.createStereoPanner();o.delayTime.value=n,s.type=`lowpass`,s.frequency.value=2600,s.Q.value=.3,c.pan.value=i,r.connect(o),o.connect(s),s.connect(c),c.connect(t(a,this.musicBus)),this.graphNodes.push(o,s,c)}this.noiseBuffer=e.createBuffer(1,e.sampleRate,e.sampleRate);let i=this.noiseBuffer.getChannelData(0);for(let e=0;e<i.length;e++)i[e]=Math.random()*2-1;let a=e.createBiquadFilter();a.type=`lowpass`,a.frequency.value=430,a.Q.value=.35,this.engineGain=t(0,this.sfxBus),a.connect(this.engineGain),this.engineLow=e.createOscillator(),this.engineLow.type=`sine`,this.engineLow.frequency.value=45,this.engineLow.connect(a),this.engineHigh=e.createOscillator(),this.engineHigh.type=`triangle`,this.engineHigh.frequency.value=89;let o=t(.16,a);this.engineHigh.connect(o),this.engineLow.start(),this.engineHigh.start();let s=e.createBiquadFilter();s.type=`bandpass`,s.frequency.value=1600,s.Q.value=.6,this.driftGain=t(0,this.sfxBus),s.connect(this.driftGain),this.driftSource=e.createBufferSource(),this.driftSource.buffer=this.noiseBuffer,this.driftSource.loop=!0,this.driftSource.connect(s),this.driftSource.start(),this.graphNodes.push(a,this.engineLow,this.engineHigh,s,this.driftSource)}applyVolumes(){this.context&&(this.smooth(this.musicBus?.gain,this.musicVolume*{menu:1,race:.83,pause:.2,finish:.7,parking:.76,survival:.82}[this.scene],.1),this.smooth(this.sfxBus?.gain,this.sfxVolume,.04))}updateMaster(){this.smooth(this.master?.gain,this.muted?0:.8,.035)}updateEngine(){let{speed:e,active:t,drift:n}=this.engineState,r=t&&this.scene===`race`&&!this.muted,i=Q(e/52),a=(44+i*65)*({jetbike:1.46,ufo:1.72,burger:.76,glider:1.18,ant:.84,chatgpt:1.38,claude:1.05,doubao:1.24,qwen:1.56,glm:.93,gemini:1.42,minimax:.88,classic:1,formula:1.22,cow:.71,royal:.91,rocket:1.13,shell:.71,grok:.86,cyber:1.32}[this.engineStyle]||1);this.smooth(this.engineLow?.frequency,a,.11),this.smooth(this.engineHigh?.frequency,a*1.997,.11),this.smooth(this.engineGain?.gain,r?.009+i*.019:0,.09),this.smooth(this.driftGain?.gain,r&&n?.019:0,.07)}smooth(e,t,n){if(!e||!this.context||this.disposed)return;let r=this.context.currentTime;e.cancelScheduledValues(r),e.setTargetAtTime(t,r,n)}schedule(){let e=this.context;if(!e||e.state!==`running`||this.disposed)return;let t=60/(this.scene===`survival`?[96,112,128][this.musicVariation%3]+this.survivalIntensity*12:this.scene===`parking`?124:xt[this.track].bpm)/4/(this.finalLap&&this.scene===`race`?1.1:1);for(this.nextNoteAt<e.currentTime-.06&&(this.nextNoteAt=e.currentTime+.035);this.nextNoteAt<e.currentTime+pt;)!this.muted&&this.musicVolume>0&&this.scheduleStep(this.scoreStep,this.nextNoteAt,t),this.scoreStep=(this.scoreStep+1)%(ht*gt),this.scoreStep===0&&(this.musicVariation=(this.musicVariation+1)%(this.scene===`parking`?3:4)),this.nextNoteAt+=t}degree(e,t,n=0){let r=(t%7+7)%7;return e.tonic+e.scale[r]+Math.floor(t/7)*12+n*12}scheduleStep(e,t,n){if(this.scene===`survival`){let r=e%16,i=Math.floor(e/16),a=(this.musicVariation+Math.floor(i/24))%3,o=[38,41,36][a],s=[[0,0,7,1,0,10,7,1],[0,7,0,3,1,7,3,0],[0,12,7,1,0,3,1,-1]][a],c=this.musicBus,l=this.drumBus,u=this.survivalIntensity;r===0&&(this.tone(t,$(o-12),n*15,.04,`sine`,c,`music`,600,`pad`),this.tone(t,$(o+7),n*12,.017,`triangle`,c,`music`,900,`pad`));let d=i%8==7&&r>=10;r%(u>.45?2:4)==0&&!d&&this.tone(t,$(o+s[r/2]),n*.65,.052+u*.02,`sawtooth`,c,`music`,600+u*700,`pluck`),(r===0||r===2||u>.5&&(r===8||r===10))&&this.tone(t,52,.16,.11,`sine`,l,`music`),!d&&u>.35&&(r===4||r===12)&&this.noise(t,.075,.035+u*.035,1800,`bandpass`,l,`music`),!d&&(u>.5&&r%4==2||u>.8)&&this.noise(t,.026,.02,5600,`highpass`,l,`music`),i%4==3&&r===12&&this.tone(t,$(o+25),n*5,.022,`sine`,c,`music`,1500),i%4==2&&r===1&&(this.noise(t,n*7,.018+u*.01,1300,`bandpass`,c,`music`),this.tone(t,$(o+18),n*8,.011,`sawtooth`,c,`music`,1700,`pad`)),i%8==4&&r===7&&this.tone(t,$(o+1),n*5,.022,`triangle`,c,`music`,700,`pad`);return}if(!this.leadBus||!this.arpBus||!this.bassBus||!this.drumBus)return;let r=Math.floor(e/ht)%gt,i=e%ht,a=this.scene===`parking`?xt.garden:xt[this.track],o=vt(r),s=this.track===`forest`,c=this.track===`castle`,l=o===`drop`||o===`finale`,u=o===`break`,d=o===`build`,f=o===`bridge`,p=a.chords[(r+(f?4:0))%8],m=this.scene===`parking`?ct[this.musicVariation%3]:this.musicVariation>0?st[(this.musicVariation-1)%3]:o===`answer`||f?bt[this.track]:yt[this.track],h=t+(i%2?n*(s?.21:c?.035:.075):0),g=[15,31,47,63,79,95].includes(r)&&i>=14,_=u?.46:d?.63+(r-40)*.04:f?.72:l?1:.88,v=m[r%4].find(e=>e[0]===i),y=(e,t=0)=>$(this.degree(a,e,t)),b=this.scene===`parking`?this.musicVariation%2?`pluck`:`mallet`:s?`mallet`:f||u?`reed`:`brass`;if(v&&!g&&(!u||i<7)&&(!d||r%2==0||i<5)){let e=+(o===`finale`&&r%4==3&&i<8);this.tone(h,y(v[1],e),Math.max(.085,v[2]*n*(s?1.2:.83)),(s?.16:.15)*_*(i===0||i===8?1:.88),`sine`,this.leadBus,`music`,a.leadCutoff,b),l&&r%4>=2&&[4,8].includes(i)&&this.tone(h+n*.5,y(v[1],1),n*1.1,.026,`sine`,this.arpBus,`music`,3700,s?`mallet`:`reed`)}if(!g&&(f||u?i===0:[2,6,10,14].includes(i)))for(let e of[0,2,4])this.tone(h+e/2*.007,y(p+e,f||u?-1:0),n*(f||u?10:s?1.25:.75),(f||u?.027:.029)*_,`triangle`,this.arpBus,`music`,f||u?1700:3e3,f||u?`pad`:`pluck`);if(!u&&!d&&!g&&r%2&&[11,13].includes(i)&&this.tone(h,y(i===11?4:2,1),n*.85,.036,`sine`,this.arpBus,`music`,3300,s?`reed`:`mallet`),!g&&(s?[0,3,6,8,11,14]:c?[0,3,6,8,10,14]:[0,3,6,8,11,14]).includes(i)&&(!u||i===0)&&(!f||[0,6,8,14].includes(i))){let e=i===6||i===14?p+4:i===3||i===11?p+7:p;this.tone(h+.008,y(e,-2),n*(i===0||i===8?2.8:1.25),.18*_*(i===3||i===11?.76:1),`triangle`,this.bassBus,`music`,s?950:1300,`bass`)}let x=s?[0,6,10]:c?[0,4,8,10,12]:[0,6,8];if(!u&&!g&&(this.scene===`parking`||this.musicVariation>0)&&[3,7,11].includes(i)&&this.tone(h,y(i===7?4:0,1),.055,.028*_,`sine`,this.drumBus,`music`,1900,`mallet`),!u&&!g&&(x.includes(i)||l&&i===14&&r%2==0)&&!(d&&r===47&&i>=8)&&(this.sweep(h,c?168:148,c?43:48,.16,.24*_,`sine`,this.drumBus,`music`),this.noise(h,.016,.018*_,2200,`lowpass`,this.drumBus,`music`)),!u&&!g&&[4,12].includes(i))if(s)this.tone(h,460,.055,.075*_,`sine`,this.drumBus,`music`,2300,`mallet`),this.noise(h+.008,.04,.035*_,1650,`bandpass`,this.drumBus,`music`);else{for(let[e,t]of[[0,.031],[.012,.045],[.027,.067]])this.noise(h+e,.07,t*_,c?1850:1450,`bandpass`,this.drumBus,`music`);this.tone(h,c?180:220,.072,.029*_,`triangle`,this.drumBus,`music`,900)}!g&&(!u||i===6||i===14)&&(i%2==0||s&&[3,11].includes(i)||l&&c&&i%4==3)&&this.noise(h,i===6||i===14?.1:.027,(i%4==2?.034:.018)*_,s?5700:6800,`highpass`,this.drumBus,`music`),(r%8==7||d&&r>=44)&&i>=12&&i<(r===47?15:14)&&(this.tone(h,y(4-(i-12),-1),.07,.045*_,`sine`,this.drumBus,`music`,1900,`mallet`),this.noise(h,.04,.034*_,2400,`bandpass`,this.drumBus,`music`)),l&&r%16==0&&i===0&&this.noise(h,.42,.05,4800,`highpass`,this.drumBus,`music`),this.scene===`race`&&this.boosting&&i%4==2&&this.tone(h,y([0,4,7,9][Math.floor(i/4)],1),n*.72,.016,`sine`,this.arpBus,`music`,3900,`mallet`),this.finalLap&&this.scene===`race`&&!u&&i%4==3&&this.noise(h,.023,.014,7400,`highpass`,this.drumBus,`music`)}tone(e,t,n,r,i,a,o,s,c){let l=this.context;if(!l||this.disposed)return;let u=l.createOscillator();c&&this.waves[c]?u.setPeriodicWave(this.waves[c]):u.type=i,u.frequency.setValueAtTime(t,e);let d=c===`pad`?.035:c===`brass`?.012:c===`reed`?.014:c?.003:.009,f=this.envelope(e,n,r,a,d,c===`pad`?.76:c===`brass`||c===`reed`?.62:c===`mallet`?.24:.4),p=[f];if(s){let r=l.createBiquadFilter();r.type=`lowpass`,c?(r.frequency.setValueAtTime(c===`brass`?Math.max(650,t*1.8):s,e),c===`brass`&&r.frequency.linearRampToValueAtTime(s,e+Math.min(.02,n*.2)),r.frequency.exponentialRampToValueAtTime(Math.max(t*1.25,c===`mallet`?620:c===`bass`?240:950),e+n*(c===`mallet`||c===`pluck`?.4:.8))):r.frequency.setValueAtTime(s,e),r.Q.value=c===`brass`?.72:.4,u.connect(r),r.connect(f),p.push(r)}else u.connect(f);this.trackVoice(u,f,p,o),u.start(e),u.stop(e+n+.025)}sweep(e,t,n,r,i,a,o,s){let c=this.context;if(!c||this.disposed)return;let l=c.createOscillator();l.type=a,l.frequency.setValueAtTime(t,e),l.frequency.exponentialRampToValueAtTime(n,e+r);let u=this.envelope(e,r,i,o);l.connect(u),this.trackVoice(l,u,[u],s),l.start(e),l.stop(e+r+.025)}noise(e,t,n,r,i,a,o){let s=this.context;if(!s||!this.noiseBuffer||this.disposed)return;let c=s.createBufferSource();c.buffer=this.noiseBuffer;let l=s.createBiquadFilter();l.type=i,l.frequency.setValueAtTime(r,e),l.Q.value=.5;let u=this.envelope(e,t,n,a,.003);c.connect(l),l.connect(u),this.trackVoice(c,u,[l,u],o),c.start(e),c.stop(e+t+.015)}envelope(e,t,n,r,i=.009,a=.52){let o=this.context.createGain(),s=e+Math.min(i,t*.15);return o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(n,s),o.gain.exponentialRampToValueAtTime(Math.max(1e-4,n*a),e+t*.42),o.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(r),o}trackVoice(e,t,n,r){for(;this.voices[r].size>=Ct[r];){let e=this.voices[r].values().next().value;e.source.onended=null;try{e.source.stop()}catch{}e.source.disconnect();for(let t of e.nodes)t.disconnect();this.voices[r].delete(e)}let i={source:e,envelope:t,nodes:n};this.voices[r].add(i),e.onended=()=>{e.disconnect();for(let e of n)e.disconnect();this.voices[r].delete(i)}}stopVoices(e,t=!1){let n=this.context?.currentTime??0;for(let r of this.voices[e]){try{r.envelope.gain.cancelScheduledValues(n),r.envelope.gain.setTargetAtTime(0,n,.008),r.source.stop(n+(t?0:.035))}catch{}if(t){r.source.onended=null,r.source.disconnect();for(let e of r.nodes)e.disconnect()}}t&&this.voices[e].clear()}};function Tt(e,t,n,r,i){let{p:a,f:o}=t.at(0,1.8),s=Math.max(160,i.width),c=Math.max(140,i.height),u=Math.max(34,Math.min(72,r/Math.max(190,c)*13,r/s*20));e.fov=48,e.aspect=n/r,e.clearViewOffset(),e.position.copy(a).addScaledVector(o,-u),e.position.y=13+u*.08;let d=a.clone().addScaledVector(o,20);d.y=1.7,e.lookAt(d),e.updateProjectionMatrix(),e.updateMatrixWorld(!0);let f=a.clone().add(new l(0,1.8,0)).project(e),p=i.left+i.width*.5,m=i.top+i.height*.66;return e.setViewOffset(n,r,(f.x+1)*n/2-p,(1-f.y)*r/2-m,n,r),e.updateProjectionMatrix(),d}function Et(e,t,n){let r=new l().fromArray(t.p),i=new a().fromArray(t.q);if(e){let t=new l().fromArray(e.p);t.distanceToSquared(r)<400&&(r.lerpVectors(t,r.clone(),Math.max(0,Math.min(1,n))),i.slerpQuaternions(new a().fromArray(e.q),i.clone(),Math.max(0,Math.min(1,n))))}return{p:r,q:i}}var Dt=class{constructor(){this.orientation=new a,this.initialized=!1,this.target=new a,this.basis=new s,this.forward=new l(0,0,1),this.up=new l(0,1,0)}update(e,t,n,r=!1){let i=t.clone().normalize(),a=e.clone().addScaledVector(i,-e.dot(i));a.lengthSq()<1e-6&&a.copy(this.forward).addScaledVector(i,-this.forward.dot(i)),a.lengthSq()<1e-6&&a.set(+(Math.abs(i.x)<.9),Math.abs(i.x)<.9?0:1,0).cross(i),a.normalize();let o=i.clone().cross(a).normalize();return this.target.setFromRotationMatrix(this.basis.makeBasis(o,i,a)),!this.initialized||r?this.orientation.copy(this.target):this.orientation.slerp(this.target,1-Math.exp(-7*n)),this.initialized=!0,this.forward.set(0,0,1).applyQuaternion(this.orientation),this.up.set(0,1,0).applyQuaternion(this.orientation),this}},Ot=new A(0,1,0),kt=(e,t,n,r)=>E.lerp(e,t,1-Math.exp(-n*r)),At=class{constructor(e,r={}){this.host=e,this.previousVehicles=new Map,this.chaseFrame=new Dt,this.parkingViewOpen=!1,this.menuFrame=null,this.coinMesh=null,this.coinPoses=[],this.coinFrames=[],this.coinTransform=new ue,this.scene=new ne,this.camera=new F(48,1,.5,800),this.track=i(`garden`),this.courseKey=``,this.settings={...n},this.race=new f(this.track.length,i(this.settings.track).curvature),this.environment=De(),this.sky=null,this.skyTrack=null,this.parkSky=null,this.parkEnvironment=null,this.parkSkyLoading=!1,this.effectSample={p:new A,f:new A},this.sun=new Ce(`#fff1d5`,2.6),this.ambientLight=new D(`#fff9e7`,`#86ae73`,1.1),this.fillLight=new Ce(`#a8d9ff`,.6),this.player=new m,this.actors=new Map,this.selected=`mario`,this.selectedKart=`classic`,this.boxes=[],this.bananaMeshes=[],this.composer=null,this.passes=[],this.flames=[],this.frame=0,this.frameBudget=new ot,this.time=0,this.accumulator=0,this.lastNotify=0,this.lastLOD=0,this.resolution=1,this.maxResolution=1,this.menuSelection=null,this.cameraLook=new A,this.onUpdate=null,this.sound=!0,this.audio=new wt,this.audioError=``,this.lastAudioNote=``,this.lastLocalBoostSound=-1/0,this.lastCountdown=0,this.network=null,this.online=!1,this.onlineOverlay=!1,this.lastPickupNote=``,this.pickupLife=0,this.graphicsError=``,this.contextUnavailable=!1,this.recoveryResolutionCap=1/0,this.disposed=!1,this.reducedMotion=typeof matchMedia<`u`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches,this.keyDown=e=>{if(this.race.phase===`menu`||e.target instanceof HTMLElement&&e.target.matches(`input,textarea`))return;let t={KeyA:`left`,ArrowLeft:`left`,KeyD:`right`,ArrowRight:`right`,KeyW:`accelerate`,ArrowUp:`accelerate`,KeyS:`brake`,ArrowDown:`brake`,ShiftLeft:`drift`,ShiftRight:`drift`,KeyR:`reset`};t[e.code]&&(e.preventDefault(),this.setInput(t[e.code],!0)),e.code===`Space`&&(e.preventDefault(),e.repeat||this.activateBoost()),e.code===`KeyX`&&(e.preventDefault(),e.repeat||this.activateItem()),(e.code===`Escape`||e.code===`KeyP`)&&!e.repeat&&(e.preventDefault(),this.pause())},this.keyUp=e=>{let t={KeyA:`left`,ArrowLeft:`left`,KeyD:`right`,ArrowRight:`right`,KeyW:`accelerate`,ArrowUp:`accelerate`,KeyS:`brake`,ArrowDown:`brake`,ShiftLeft:`drift`,ShiftRight:`drift`,KeyR:`reset`};t[e.code]&&this.setInput(t[e.code],!1)},this.blur=()=>{this.online?(this.network?.stopDriving(),this.onlineOverlay=!0):(this.race.phase===`racing`||this.race.phase===`countdown`)&&this.race.pause(),this.race.clearInputs(),this.onUpdate?.()},this.visibility=()=>{this.frameBudget.reset(),this.accumulator=0,this.audio.setMuted(document.hidden||!this.sound),document.hidden&&this.blur()},this.contextLost=e=>{e.preventDefault(),this.contextUnavailable=!0,cancelAnimationFrame(this.frame),this.blur(),this.graphicsError=`显卡正在恢复，比赛已暂停。若画面没有恢复，请刷新页面。`,this.onUpdate?.()},this.contextRestored=()=>{if(!this.disposed){if(this.contextUnavailable=!1,this.recoveryResolutionCap=1,this.parkEnvironment?.dispose(),this.parkEnvironment=null,this.parkSky){let e=new be(this.renderer);this.parkEnvironment=e.fromEquirectangular(this.parkSky),e.dispose()}this.sun.shadow.map?.dispose(),this.sun.shadow.map=null,this.applyTrackLighting(),this.setupPost(),this.resize(),this.accumulator=0,this.graphicsError=``,this.renderer.shadowMap.needsUpdate=!0,this.loop(),this.onUpdate?.()}},this.loop=(e=performance.now())=>{if(this.disposed||this.contextUnavailable||(this.frame=requestAnimationFrame(this.loop),document.hidden)||this.parkingViewOpen&&this.race.phase===`menu`)return;let t=this.frameBudget.sample(e);if(this.time+=t,this.scenery.updateAtmosphere(this.time),this.online){let e=this.network?.interpolated();e&&this.race.load(e,this.network.playerId)}else for(this.accumulator+=t;this.accumulator>=1/60;){this.previousVehicles.clear();for(let e of this.race.racers)e.physics&&this.previousVehicles.set(e.id,e.physics);this.race.tick(1/60),this.accumulator-=1/60}let n=this.race.phase!==`menu`;if(this.updateEnduranceCourse(n),n?this.updateRacers(t):(this.recoveryVeil.style.opacity=`0`,this.updateMenuCamera(),this.reducedMotion||(K(this.player,Math.sin(this.time*.9)*.2),Oe(this.player,this.time,0)),this.shield.visible=!1,this.particles.visible=!1,this.pickup.visible=!1,this.flames.forEach(e=>e.visible=!1),this.sun.target.position.set(0,0,0),this.sun.position.set(-65,95,40)),this.boxes.forEach((e,t)=>{e.visible=n&&!!this.race.player&&!!this.race.boxes[t]&&this.race.boxCooldown(this.race.boxes[t],this.race.player)<=0,e.children[0].rotation.y=this.time*.8,e.children[0].position.y=1.8+Math.sin(this.time*2+t)*.16}),this.coinMesh){this.coinMesh.visible=n&&this.online;let e=this.race.player;if(n&&e)for(let t=0;t<24;t++){let n=Math.round((e.distance-d(t,this.race.length).distance)/this.race.length);this.coinTransform.position.copy(this.coinPoses[t]),this.coinTransform.position.addScaledVector(this.coinFrames[t].u,1.6+Math.sin(this.time*2+t)*.12),this.coinTransform.quaternion.copy(this.coinFrames[t].q).multiply(new z().setFromAxisAngle(Ot,this.time*1.8+t)),this.coinTransform.scale.setScalar(p(e,t,n)&&n<this.race.settings.laps?1:0),this.coinTransform.updateMatrix(),this.coinMesh.setMatrixAt(t,this.coinTransform.matrix)}this.coinMesh.instanceMatrix.needsUpdate=!0}for(;this.bananaMeshes.length<this.race.bananas.length;){let e=new P(new w(.65,.21,8,12,Math.PI),new me({color:`#ffdc38`,roughness:.5}));e.rotation.x=-Math.PI/2,this.bananaMeshes.push(e),this.scene.add(e)}if(this.bananaMeshes.forEach((e,t)=>{let r=this.race.bananas[t];if(e.visible=n&&!!r&&(this.race.settings.laps!==100||Math.floor(r.distance/this.race.length)===Math.floor((this.race.player?.distance||0)/this.race.length)),r){e.position.copy(this.at(r.distance/this.race.length+.012,r.lane).p);let t=this.track.frameAt(r.distance/this.race.length+.012,r.lane);e.position.addScaledVector(t.u,.3),e.quaternion.copy(t.q).multiply(new z().setFromAxisAngle(new A(1,0,0),-Math.PI/2))}}),e-this.lastLOD>120&&(this.scenery.updateLOD(this.camera.position),this.lastLOD=e),this.audio.setScene(this.onlineOverlay||this.race.phase===`paused`?`pause`:this.race.phase===`racing`||this.race.phase===`countdown`?`race`:this.race.phase===`finished`?`finish`:`menu`,this.settings.track===`hotwheels`?`forest`:this.settings.track),this.audio.setEngine(this.race.player?.speed||0,this.race.phase===`racing`&&!this.onlineOverlay,!!this.race.player?.drifting),this.audio.cowMoment(this.race.phase===`racing`&&this.race.player?.kart===`cow`),this.race.player&&this.audio.setRaceDetail(this.race.player.lastLap,this.race.settings.laps,this.race.rank,this.race.player.kart,this.online?!!this.network?.controls.brake:this.race.inputs.brake,this.race.player.boost>0),this.online){let e=this.race.player,t=e?.note+`|`+e?.noteUntil;t!==this.lastAudioNote&&(this.lastAudioNote=t,e?.soundEvent&&!(e.soundEvent===`boost`&&performance.now()-this.lastLocalBoostSound<2200)&&this.audio.play(e.soundEvent));let n=Math.ceil(this.race.countdown);this.race.phase===`countdown`&&n!==this.lastCountdown&&(this.audio.play(`beep`),this.lastCountdown=n)}for(let e of this.race.events.splice(0))this.audio.play(e);let r=this.frameBudget.resolution(e,this.resolution,this.maxResolution);r!==this.resolution&&(this.resolution=r,this.renderer.setPixelRatio(this.resolution),this.renderer.setSize(this.host.clientWidth,this.host.clientHeight),this.composer?.setPixelRatio(this.resolution),this.composer?.setSize(this.host.clientWidth,this.host.clientHeight)),n&&(this.renderer.shadowMap.needsUpdate=!0),this.renderer.info.reset(),this.composer?this.composer.render():this.renderer.render(this.scene,this.camera),e-this.lastNotify>100&&(this.onUpdate?.(),this.lastNotify=e)},this.settings=t({...this.settings,...r}),this.track=i(this.settings.track),this.race=new f(this.track.length,this.track.curvature),this.race.settings=this.settings,this.renderer=new pe({antialias:!0,powerPreference:`high-performance`}),this.renderer.shadowMap.enabled=!0,this.renderer.info.autoReset=!1,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.type=2,this.renderer.toneMapping=7,this.renderer.toneMappingExposure=1,this.renderer.outputColorSpace=g,this.scene.background=new I(`#8edaff`),this.scene.fog=new _(`#a7ddf4`,360,750),this.scene.environment=this.environment,this.scene.environmentIntensity=.65,e.appendChild(this.renderer.domElement),this.recoveryVeil=document.createElement(`div`),this.recoveryVeil.setAttribute(`aria-hidden`,`true`),this.recoveryVeil.style.cssText=`position:absolute;inset:0;background:#0b1720;opacity:0;pointer-events:none;z-index:1`,e.appendChild(this.recoveryVeil),this.scene.add(this.ambientLight),this.fillLight.position.set(50,35,-70),this.scene.add(this.fillLight),this.applyTrackLighting(),this.sun.position.set(-65,95,40),this.sun.castShadow=!0,this.sun.shadow.mapSize.setScalar({performance:1024,balanced:2048,ultra:4096}[this.settings.quality]),this.sun.shadow.normalBias=.08,this.sun.shadow.bias=-6e-5,Object.assign(this.sun.shadow.camera,{left:-85,right:85,top:85,bottom:-85,near:1,far:250}),this.scene.add(this.sun,this.sun.target),this.scenery=ke(this.track,this.settings.quality),this.scene.add(this.scenery.group),this.shield=new P(new fe(2.8,28,20),new H({color:`#8fe7fa`,transparent:!0,opacity:.23,roughness:.12,metalness:.15,clearcoat:1,depthWrite:!1})),this.shield.visible=!1,this.scene.add(this.shield);let a=new he;a.setAttribute(`position`,new k(new Float32Array(192),3)),this.particles=new oe(a,new ve({color:`#ffd35b`,size:.23,transparent:!0,opacity:.85})),this.particles.frustumCulled=!1,this.scene.add(this.particles),this.pickup=new P(new w(2.2,.14,8,40),new N({color:`#ffdb42`,transparent:!0,depthWrite:!1})),this.pickup.rotation.x=-Math.PI/2,this.pickup.visible=!1,this.scene.add(this.pickup);for(let e of[-.72,.72]){let t=new P(new _e(.28,2.3,12),new me({color:`#8cefff`,emissive:`#2be3ff`,emissiveIntensity:3}));t.userData.side=e,t.visible=!1,this.flames.push(t),this.scene.add(t)}this.selectCharacter(`mario`),this.setupPost(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.resize(),window.addEventListener(`keydown`,this.keyDown),window.addEventListener(`keyup`,this.keyUp),window.addEventListener(`blur`,this.blur),document.addEventListener(`visibilitychange`,this.visibility),this.renderer.domElement.addEventListener(`webglcontextlost`,this.contextLost),this.renderer.domElement.addEventListener(`webglcontextrestored`,this.contextRestored),this.loop()}get curve(){return this.track.curve}applyTrackLighting(){let e=q[this.settings.track];if(this.settings.track===`hotwheels`){this.sky?.dispose(),this.sky=null,this.skyTrack=`hotwheels`,this.scene.background=this.parkSky,this.scene.fog=new ee(`#c5d7e0`,71e-6),this.sun.color.set(`#fff5df`),this.sun.intensity=3.2,this.fillLight.color.set(`#b8d7ed`),this.fillLight.intensity=.55,this.ambientLight.color.set(`#deeeff`),this.ambientLight.groundColor.set(`#89897b`),this.ambientLight.intensity=.82,this.scene.environmentIntensity=.64,this.camera.far=24e3,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.02,this.scene.environment=this.parkEnvironment?.texture??this.environment,this.scene.backgroundIntensity=.8,this.loadParkSky(),this.camera.updateProjectionMatrix();return}this.scene.environment=this.environment,this.scene.backgroundIntensity=1,this.camera.far=800,this.camera.up.set(0,1,0),this.renderer.toneMapping=7,this.renderer.toneMappingExposure=1,this.skyTrack!==this.settings.track&&(this.sky?.dispose(),this.sky=J(this.settings.track),this.skyTrack=this.settings.track,this.scene.background=this.sky),this.scene.fog=new _(e.fog,e.fogNear,750),this.sun.color.set(e.sun),this.sun.intensity=e.intensity,this.fillLight.color.set(e.fill),this.ambientLight.color.set(e.ambient),this.ambientLight.groundColor.set(e.bounce),this.ambientLight.intensity={garden:.85,forest:.7,castle:.62}[this.settings.track],this.fillLight.intensity={garden:.55,forest:.48,castle:.45}[this.settings.track],this.scene.environmentIntensity={garden:.5,forest:.4,castle:.35}[this.settings.track]}loadParkSky(){this.parkSky||this.parkSkyLoading||(this.parkSkyLoading=!0,new Ne().load(`/hot-wheels/sky/park-sky-2k.hdr`,e=>{if(this.parkSkyLoading=!1,this.disposed){e.dispose();return}e.mapping=303;let t=new be(this.renderer);if(this.parkEnvironment=t.fromEquirectangular(e),t.dispose(),this.parkSky=e,this.settings.track===`hotwheels`){this.scene.background=e,this.scene.environment=this.parkEnvironment.texture;let t=this.scenery?.group.getObjectByName(`park-sky-fallback`);t&&(t.visible=!0)}},void 0,()=>{this.parkSkyLoading=!1}))}at(e,t=0){return this.track.at(e,t)}get stats(){return{fps:Math.round(this.frameBudget.fps),triangles:this.renderer.info.render.triangles,trees:this.scenery.treeCount,treeTriangles:this.scenery.highTreeTriangles}}configure(e,n=this.selected){let r=this.settings.quality,a=t({...this.settings,...e}),o=a.track!==this.settings.track||a.quality!==this.settings.quality;if(this.settings=a,this.applyTrackLighting(),this.renderer.shadowMap.needsUpdate=!0,o){Y(this.scenery.group),this.track=i(a.track),this.scenery=ke(this.track,a.quality);let e=this.scenery.group.getObjectByName(`park-sky-fallback`);e&&this.parkSky&&(e.visible=!0),this.scene.add(this.scenery.group),this.courseKey=``,this.race=new f(this.track.length,i(this.settings.track).curvature),this.race.settings=a,this.setupPost(),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null,this.sun.shadow.mapSize.setScalar(a.quality===`ultra`?4096:a.quality===`performance`?1024:2048)}if(n!==this.selected||r!==a.quality)this.selectCharacter(n);else if(o){let e=a.track===`hotwheels`?.012:0,{p:t}=this.at(e,1.8);this.player.position.copy(t),this.player.quaternion.copy(this.track.frameAt(e,1.8).q)}this.resize(),this.onUpdate?.()}setupPost(){if(this.passes.forEach(e=>e.dispose()),this.composer?.dispose(),this.composer=null,this.passes=[],this.settings.quality===`performance`)return;let e=new b(this.host.clientWidth,this.host.clientHeight,{type:B,samples:Math.min(2,this.renderer.capabilities.maxSamples)});this.composer=new Be(this.renderer,e);let t=new Ve(this.scene,this.camera);if(this.composer.addPass(t),this.passes.push(t),this.settings.quality===`ultra`){let e=new Ze(this.scene,this.camera,this.host.clientWidth,this.host.clientHeight);e.output=Ze.OUTPUT.Default,e.updateGtaoMaterial({radius:1.4,thickness:.6,samples:8}),e.blendIntensity=.42,this.composer.addPass(e),this.passes.push(e)}let n=new $e(new S(this.host.clientWidth,this.host.clientHeight),this.settings.track===`hotwheels`?0:.23,.35,1.1),r=new tt;this.composer.addPass(n),this.composer.addPass(r);let i=new at;this.composer.addPass(i),this.passes.push(n,r,i)}selectKart(t){this.selectedKart=e(t),this.selectCharacter(this.selected)}selectCharacter(e){this.selected=e,[...this.actors.values()].includes(this.player)||Y(this.player);for(let e of this.actors.values())Y(e);this.actors.clear(),this.player=Ae(e,this.settings.quality===`performance`?`low`:`high`,this.selectedKart);let t=this.settings.track===`hotwheels`?.012:0,{p:n}=this.at(t,1.8);this.player.position.copy(n),this.player.quaternion.copy(this.track.frameAt(t,1.8).q),this.player.scale.setScalar(1.5),this.scene.add(this.player),this.renderer.shadowMap.needsUpdate=!0}buildActors(){[...this.actors.values()].includes(this.player)||Y(this.player);for(let e of this.actors.values())Y(e);this.actors.clear();for(let e of this.race.racers){let t=Ae(e.character,this.settings.quality===`performance`?`low`:`high`,e.kart);this.actors.set(e.id,t),this.scene.add(t),e.id===this.race.viewerId&&(this.player=t)}this.buildBoxes()}textSprite(e){let t=document.createElement(`canvas`);t.width=128,t.height=128;let n=t.getContext(`2d`);n.fillStyle=`#fff9de`,n.font=`900 96px Arial`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(e,64,68);let r=new ye(t);return r.colorSpace=g,new de(new O({map:r,depthTest:!1}))}buildBoxes(){if(this.coinMesh&&Y(this.coinMesh),this.coinMesh=null,this.coinPoses=[],this.online){let e=[new ce(.75,.75,.2,24).rotateX(Math.PI/2)];for(let t of[-1,1])e.push(new w(.63,.045,6,24).translate(0,0,t*.105)),e.push(new le(.09,.72,.025).translate(0,0,t*.115));let t=Me(e,!1);e.forEach(e=>e.dispose()),this.coinMesh=new C(t,new me({color:`#ffd83a`,metalness:.6,roughness:.25,emissive:`#aa5d08`,emissiveIntensity:.3}),24),this.coinMesh.frustumCulled=!1,this.coinFrames=Array.from({length:24},(e,t)=>{let n=d(t,this.race.length);return this.track.frameAt(n.distance/this.race.length+.012,n.lane)}),this.coinPoses=this.coinFrames.map(e=>e.p.clone()),this.scene.add(this.coinMesh)}for(let e of this.boxes)Y(e);this.boxes=[];for(let e of this.race.boxes){let t=new m,{p:n}=this.at(e.distance/this.race.length+.012,e.lane);t.position.copy(n),t.quaternion.copy(this.track.frameAt(e.distance/this.race.length+.012,e.lane).q);let r=new P(new Ee(u,u,u,2,.08),new H({color:`#56d3e1`,emissive:`#3b98bc`,emissiveIntensity:.5,roughness:.16,metalness:.25,clearcoat:1}));r.rotation.z=Math.PI/4,r.position.y=1.9,r.castShadow=!0,t.add(r);let i=this.textSprite(`?`);i.position.y=1.95,i.scale.set(1.35,1.35,1),t.add(i);let a=new P(new w(1.35,.07,8,32),new N({color:`#a3f5fe`,transparent:!0,opacity:.8}));a.rotation.x=-Math.PI/2,a.position.y=.1,t.add(a),this.scene.add(t),this.boxes.push(t)}}start(t,n=this.settings.mode,a=this.settings,o=this.selectedKart){this.selectedKart=e(o),this.menuSelection=null,this.online=!1,this.onlineOverlay=!1,this.configure({...a,mode:n,courseSeed:parseInt(crypto.randomUUID().slice(0,8),16)||1},t),this.race=new f(this.track.length,i(this.settings.track).curvature),this.race.start(t,n,r.map(e=>e.id),this.settings,this.selectedKart),this.buildActors(),this.accumulator=0,this.previousVehicles.clear(),this.chaseFrame=new Dt,this.camera.clearViewOffset(),this.updateRacers(1),this.initAudio(),this.onUpdate?.()}startOnline(e,t){this.online||(this.menuSelection={settings:{...this.settings},character:this.selected,kart:this.selectedKart}),this.online=!0,this.onlineOverlay=!1,this.configure({...e.settings,quality:this.settings.quality},e.racers.find(e=>e.id===t).character),this.race=new f(this.track.length,i(this.settings.track).curvature),this.race.load(e,t),this.online=!0,this.buildActors(),this.camera.clearViewOffset(),this.updateRacers(1),this.initAudio(),this.onUpdate?.()}attachNetwork(e){this.network=e,e.onStart=(e,t)=>this.startOnline(e,t),e.onItemPredicted=e=>{(e===`boost`||e===`triple`||e===`nitro`)&&(this.audio.play(`boost`),this.lastLocalBoostSound=performance.now())},e.createPrediction=(e,t)=>{let n=new f(e.length,i(e.settings.track).curvature);return n.load(structuredClone(e),t),n}}menu(){this.online&&this.network?.leave(),this.online=!1,this.onlineOverlay=!1,this.race.phase=`menu`,this.race.clearInputs();for(let e of this.boxes)e.visible=!1;if(this.menuSelection){let e=this.menuSelection;this.menuSelection=null,this.selectedKart=e.kart,this.configure(e.settings,e.character),this.race.phase=`menu`}this.selectCharacter(this.selected),this.resize(),this.onUpdate?.()}pause(){this.online?(this.onlineOverlay=!this.onlineOverlay,this.onlineOverlay?this.network?.stopDriving():this.network?.setInput(`brake`,!1)):this.race.pause(),this.onUpdate?.()}activateItem(){this.onlineOverlay||this.race.phase!==`racing`||(this.online?this.network?.useItem(`item`):this.race.useTool())}activateBoost(){this.onlineOverlay||this.race.phase!==`racing`||(this.online?this.network?.useItem(`boost`):this.race.useBoost())}setInput(e,t){if(this.online){this.onlineOverlay||this.network?.setInput(e,t);return}e===`axis`?this.race.inputs.axis=Number(t):this.race.inputs[e]=!!t}setSound(e){this.sound=e,this.audio.setMuted(!e||document.hidden),e&&this.initAudio()}initAudio(){this.sound&&this.audio.unlock().catch(()=>{this.audioError=`声音暂未启动，点击声音按钮重试。`,this.onUpdate?.()})}setAudioVolumes(e,t){this.audio.setVolumes(e,t),this.initAudio()}resize(){let e=this.host.clientWidth,t=this.host.clientHeight;this.maxResolution=Math.min(window.devicePixelRatio,this.recoveryResolutionCap,this.settings.quality===`ultra`?1.65:this.settings.quality===`performance`?1:1.3),this.resolution=this.maxResolution,this.frameBudget.reset(),this.renderer.setPixelRatio(this.resolution),this.renderer.setSize(e,t),this.composer?.setPixelRatio(this.resolution),this.composer?.setSize(e,t),this.camera.aspect=e/t,this.race.phase===`menu`?this.updateMenuCamera():this.camera.clearViewOffset(),this.camera.updateProjectionMatrix()}setMenuFrame(e){this.menuFrame=e,this.race.phase===`menu`&&this.updateMenuCamera()}updateMenuCamera(){let e=this.host.clientWidth,t=this.host.clientHeight;if(!e||!t)return;let n=this.menuFrame||{left:e*.35,top:t*.18,width:e*.38,height:t*.44};if(this.settings.track===`hotwheels`){let n=this.track.frameAt(.012);this.camera.position.copy(n.p).addScaledVector(n.f,-28).addScaledVector(n.r,-13).addScaledVector(n.u,t>e?22:15),this.cameraLook.copy(n.p).addScaledVector(n.f,45).addScaledVector(n.u,4),this.camera.up.copy(n.u),this.camera.lookAt(this.cameraLook),this.camera.fov=56,this.camera.updateProjectionMatrix()}else this.camera.up.set(0,1,0),this.cameraLook.copy(Tt(this.camera,this.track,e,t,n))}racerPose(e){let t=this.track.frameAt(e.distance/this.race.length+.012,e.lane);if(e.physics){let n=Et(this.online?void 0:this.previousVehicles.get(e.id),e.physics,this.accumulator*60);t.q.copy(n.q),t.u.set(0,1,0).applyQuaternion(t.q),t.r.set(1,0,0).applyQuaternion(t.q),t.f.set(0,0,1).applyQuaternion(t.q),t.p.copy(n.p).addScaledVector(t.u,-.81)}return t}updateRacers(e){for(let t of this.race.racers){let n=this.actors.get(t.id);if(!n)continue;n.visible=this.race.settings.laps!==100||Math.floor(t.distance/this.race.length)===Math.floor((this.race.player?.distance||0)/this.race.length);let r=this.race.phase===`racing`&&t.finishTime===null&&!t.dnf?t.speed:0,i=this.racerPose(t),{p:a}=i;n.position.copy(a),t.physics||n.position.addScaledVector(i.u,Math.sin(this.time*21)*r*9e-4);let o=kt(n.userData.driftRoll||0,t.drifting?t.steer*.08:0,9,e);n.userData.driftRoll=o,n.quaternion.copy(i.q).multiply(new z().setFromAxisAngle(Ot,t.heading)).multiply(new z().setFromAxisAngle(new A(0,0,1),o)),t.physics&&n.quaternion.copy(i.q),n.userData.frontWheelPivots?.forEach(e=>e.rotation.y=t.steer*.32),n.userData.wheels?.forEach(t=>t.rotation.x+=r*e/.6),K(n,t.steer),Oe(n,this.time,r)}let t=this.race.player;if(!t)return;let n=this.race.phase===`racing`&&t.finishTime===null&&!t.dnf,r=this.racerPose(t),{p:i,f:a}=r,o=this.camera.aspect<1,s=t.physics&&(t.physics.grounded||t.physics.airborne<.18),c=t.physics?s?this.track.frameAt(t.distance/this.race.length+.012).u:Ot:r.u,l=t.physics&&!s?new A(t.physics.v[0],0,t.physics.v[2]):a.clone();l.lengthSq()<1e-6&&l.copy(this.track.frameAt(t.distance/this.race.length+.012).f),l.normalize();let u=t.physics?.recoveryFade??0;if(t.physics){let t=this.chaseFrame.update(l,c,e,u>.99);l=t.forward,c=t.up}let d=i.clone().addScaledVector(l,o?-15:-12);d.addScaledVector(c,o?10:7.4),this.recoveryVeil.style.opacity=String(u),u>.99&&this.camera.position.copy(d),this.camera.position.lerp(d,1-Math.exp(-e*6.5));let f=i.clone().addScaledVector(l,7);f.addScaledVector(c,1.8),u>.99&&(this.cameraLook.copy(f),this.camera.up.copy(c)),this.cameraLook.lerp(f,1-Math.exp(-e*9)),this.camera.up.lerp(c,1-Math.exp(-e*4)).normalize(),this.camera.lookAt(this.cameraLook);let p=this.settings.track===`hotwheels`?62+Math.min(14,t.speed*.14):48;if(this.camera.fov=kt(this.camera.fov,p+(t.boost>0?6:0),3,e),this.camera.updateProjectionMatrix(),this.shield.visible=t.shield>0||t.invincible>0,this.shield.position.copy(i).addScaledVector(r.u,1.75),this.shield.rotation.y=this.time*.6,this.shield.material.color.set(t.invincible>0?`#fff291`:`#8fe7fa`),this.flames.forEach(e=>{if(e.visible=n&&t.boost>0,!e.visible)return;let o=i.clone().addScaledVector(r.r,e.userData.side);o.addScaledVector(a,-2.4),e.position.copy(o),e.position.addScaledVector(r.u,.8),e.quaternion.setFromUnitVectors(Ot,a.clone().negate()),e.scale.y=.85+Math.sin(this.time*36)*.18}),this.particles.visible=n&&t.drifting&&(!t.physics||t.physics.grounded),this.particles.visible){let e=this.particles.geometry.attributes.position.array;for(let n=0;n<64;n++){let r=(n/64*5+this.time*8%5)%5,i=this.track.atInto((t.distance-r)/this.race.length+.012,t.lane+(n%2?1.35:-1.35),this.effectSample).p;e[n*3]=i.x;let a=.2+Math.abs(Math.sin(n*5+this.time*5))*.22,o=this.track.frameAt((t.distance-r)/this.race.length+.012).u;i.addScaledVector(o,a),e[n*3]=i.x,e[n*3+1]=i.y,e[n*3+2]=i.z}this.particles.geometry.attributes.position.needsUpdate=!0}let m=t.note+`|`+t.noteUntil;t.note.startsWith(`获得`)&&m!==this.lastPickupNote&&(this.lastPickupNote=m,this.pickupLife=.7),this.pickup.visible=this.pickupLife>0,this.pickupLife>0&&(this.pickupLife-=e,this.pickup.position.copy(i),this.pickup.position.addScaledVector(r.u,1+(.7-this.pickupLife)*3),this.pickup.scale.setScalar(1+(.7-this.pickupLife)),this.pickup.material.opacity=this.pickupLife/.7),je(i,170/this.sun.shadow.mapSize.x,this.sun.target.position),this.sun.position.copy(this.sun.target.position).add(G),this.sun.target.updateMatrixWorld()}updateEnduranceCourse(e){let t=e&&this.race.settings.laps===100&&this.settings.track!==`hotwheels`,n=Math.min(99,Math.max(0,Math.floor((this.race.player?.distance||0)/this.race.length))),r=this.race.settings.courseSeed||1,a=t?`${this.settings.track}:${r}:${n}`:this.settings.track;if(a===this.courseKey)return;this.courseKey=a;let s=t?o(this.settings.track,r,n):i(this.settings.track);this.track=s,this.scenery.setCourseWarp(t?o(this.settings.track,r,n).warp:c);for(let e of this.passes)e instanceof Ze&&(e.enabled=!t);for(let e=0;e<this.boxes.length;e++){let t=this.race.boxes[e];t&&this.boxes[e].position.copy(this.at(t.distance/this.race.length+.012,t.lane).p)}this.coinPoses.forEach((e,t)=>{let n=d(t,this.race.length);e.copy(this.at(n.distance/this.race.length+.012,n.lane).p),this.coinFrames[t]=this.track.frameAt(n.distance/this.race.length+.012,n.lane)}),this.renderer.shadowMap.needsUpdate=!0,this.lastLOD=0}dispose(){this.disposed||(this.disposed=!0,cancelAnimationFrame(this.frame),this.observer.disconnect(),window.removeEventListener(`keydown`,this.keyDown),window.removeEventListener(`keyup`,this.keyUp),window.removeEventListener(`blur`,this.blur),document.removeEventListener(`visibilitychange`,this.visibility),this.renderer.domElement.removeEventListener(`webglcontextlost`,this.contextLost),this.renderer.domElement.removeEventListener(`webglcontextrestored`,this.contextRestored),this.passes.forEach(e=>e.dispose()),this.composer?.dispose(),this.audio.dispose(),Y(this.scene),this.environment.dispose(),this.sky?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.recoveryVeil.remove())}};export{At as KartGame};