if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),l={module:{uri:t},exports:o,require:c};s[t]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-CZ6ET3mj.js",revision:null},{url:"assets/index-CzD9PmEZ.css",revision:null},{url:"index.html",revision:"33877b25593ead562ebb18677f145ccd"},{url:"registerSW.js",revision:"01f08bb2f1d8224f261b236c62a955ff"},{url:"icons/manifest-icon-192.maskable.png",revision:"7fb754d5c913aa8ed8d3d3927e464e47"},{url:"icons/manifest-icon-512.maskable.png",revision:"1fe023cab9e1ab4a52791751fcad4ec0"},{url:"manifest.webmanifest",revision:"8399b41379c92ed7b9e066c935e045c2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
