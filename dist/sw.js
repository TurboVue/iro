if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,f)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let a={};const c=e=>i(e,o),d={module:{uri:o},exports:a,require:c};s[o]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(f(...e),a)))}}define(["./workbox-4ee7f24a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/ColorHistory.8daa48d0.css",revision:"6147b7bbbaf3a10145f12318474421f0"},{url:"assets/ColorHistory.e946c300.js",revision:"e5369489301ce5d86cfc5407de8e17f6"},{url:"assets/ColorPicker.36eb0d38.css",revision:"21d9d06d11320f87a621d387be49ef6a"},{url:"assets/ColorPicker.9a75e3ef.js",revision:"80f8a46300cfc7451521bae191b9dcd1"},{url:"assets/index.5557a681.css",revision:"2bffbf38e4e293c3d7b312c058521925"},{url:"assets/index.f51b7009.js",revision:"a370940ef6fae856b48ad2e7a0967734"},{url:"assets/ModalPalette.68dc62a2.css",revision:"b494983c6260a36bc11fea55b22a0567"},{url:"assets/ModalPalette.eaf73778.js",revision:"c52975f243c0ec5936f11529e4c553b0"},{url:"assets/ModalStyle.bdefdd10.js",revision:"d0e7630b926cfa62f34fa32dbe0e52d0"},{url:"assets/ModalStyle.ddd461fd.css",revision:"546d0eedcba6ca1588e3161f8c3d456a"},{url:"assets/worker.2fd1cd99.js",revision:"95c21e480d8796be6d6e28f96716c710"},{url:"index.html",revision:"ffef1c51340f526dfd7d2397fe311273"},{url:"OneSignalSDKWorker.js",revision:"ebb63ca15bba16b550232b0b0f66c726"},{url:"icons/icon-192x192.png",revision:"7b1f980efa8530d80ca69d25c11cffa3"},{url:"icons/icon-512x512.png",revision:"3056087aa54f9e6f5c4f4f6629e9a952"},{url:"manifest.webmanifest",revision:"f0b2c9cbba99617699eaf62243ef1248"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
