if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,o)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let f={};const d=e=>i(e,a),c={module:{uri:a},exports:f,require:d};s[a]=Promise.all(r.map((e=>c[e]||d(e)))).then((e=>(o(...e),f)))}}define(["./workbox-4ee7f24a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/ColorHistory.30826637.js",revision:"c7df3d0792b7148c40a94e79a458d63b"},{url:"assets/ColorHistory.8daa48d0.css",revision:"6147b7bbbaf3a10145f12318474421f0"},{url:"assets/ColorPicker.36eb0d38.css",revision:"21d9d06d11320f87a621d387be49ef6a"},{url:"assets/ColorPicker.47805b79.js",revision:"c2dfdac2f7596f8268e73545dd67c6bc"},{url:"assets/index.5557a681.css",revision:"2bffbf38e4e293c3d7b312c058521925"},{url:"assets/index.bab197a4.js",revision:"41044f3d678b3d20317a2ef093fe1e2e"},{url:"assets/ModalPalette.30304b51.js",revision:"b00f87501e5f9ba06de189c7eb9003e4"},{url:"assets/ModalPalette.68dc62a2.css",revision:"b494983c6260a36bc11fea55b22a0567"},{url:"assets/ModalStyle.a7b288f2.js",revision:"79bee59b80f149223ea0f490c8f69a72"},{url:"assets/ModalStyle.ddd461fd.css",revision:"546d0eedcba6ca1588e3161f8c3d456a"},{url:"assets/worker.2fd1cd99.js",revision:"95c21e480d8796be6d6e28f96716c710"},{url:"index.html",revision:"694e502947537507d1c5fdf806907b10"},{url:"icons/icon-192x192.png",revision:"7b1f980efa8530d80ca69d25c11cffa3"},{url:"icons/icon-512x512.png",revision:"3056087aa54f9e6f5c4f4f6629e9a952"},{url:"manifest.webmanifest",revision:"f0b2c9cbba99617699eaf62243ef1248"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
