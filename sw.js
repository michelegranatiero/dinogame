if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),f={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>f[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-DYe0WoJD.css",revision:null},{url:"assets/index-FePl6EgL.js",revision:null},{url:"index.html",revision:"e6b683fef5d62ce4948367501b1f2649"},{url:"registerSW.js",revision:"01f08bb2f1d8224f261b236c62a955ff"},{url:"manifest.webmanifest",revision:"0db185a48cd0f61ba4bdb8a41d78284c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
