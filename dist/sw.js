if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const d=e=>i(e,c),f={module:{uri:c},exports:o,require:d};s[c]=Promise.all(a.map((e=>f[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-4ee7f24a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/ColorHistory.44c3d1f3.js",revision:"cc6de385a5ec67a1e6945d5ac8fc2ac1"},{url:"assets/ColorHistory.8daa48d0.css",revision:"6147b7bbbaf3a10145f12318474421f0"},{url:"assets/ColorPicker.36eb0d38.css",revision:"21d9d06d11320f87a621d387be49ef6a"},{url:"assets/ColorPicker.55282d78.js",revision:"e6e0f707fa4b7758646f5aacccadb42d"},{url:"assets/index.5557a681.css",revision:"2bffbf38e4e293c3d7b312c058521925"},{url:"assets/index.c009188f.js",revision:"7d508fe5ddda42ab015edd7ba5381e4d"},{url:"assets/ModalPalette.68dc62a2.css",revision:"b494983c6260a36bc11fea55b22a0567"},{url:"assets/ModalPalette.e9015317.js",revision:"1ef2c632ad83195d052f89923d0b4c9a"},{url:"assets/ModalStyle.54e533ca.js",revision:"ecacf6b2661578c0b4c1c0523264f84c"},{url:"assets/ModalStyle.ddd461fd.css",revision:"546d0eedcba6ca1588e3161f8c3d456a"},{url:"assets/worker.2fd1cd99.js",revision:"95c21e480d8796be6d6e28f96716c710"},{url:"index.html",revision:"4855eb48837b847ba7a402af239d56a0"},{url:"OneSignalSDKWorker.js",revision:"ebb63ca15bba16b550232b0b0f66c726"},{url:"icons/icon-192x192.png",revision:"7b1f980efa8530d80ca69d25c11cffa3"},{url:"icons/icon-512x512.png",revision:"3056087aa54f9e6f5c4f4f6629e9a952"},{url:"manifest.webmanifest",revision:"f0b2c9cbba99617699eaf62243ef1248"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
