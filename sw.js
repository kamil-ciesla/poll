if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let c={};const o=e=>s(e,t),d={module:{uri:t},exports:c,require:o};i[t]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-bdd7d589.js",revision:null},{url:"assets/index-cf183d32.css",revision:null},{url:"index.html",revision:"3f1a1e789a72c02494e5524fc2995d36"},{url:"registerSW.js",revision:"ff7d21ece789ccf52ef3d8bf71e4b10e"},{url:"pwa-icon-144x144.png",revision:"5561942c307ed76de29bcc76566400fc"},{url:"manifest.webmanifest",revision:"7c7cd1001e1934dab17ac8f8821bfecc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
