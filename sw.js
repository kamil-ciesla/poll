if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>s(e,t),d={module:{uri:t},exports:o,require:c};i[t]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-7d5a9895.js",revision:null},{url:"assets/index-cf183d32.css",revision:null},{url:"index.html",revision:"1ad5b04a428f5ae0ea143675390ba554"},{url:"registerSW.js",revision:"ff7d21ece789ccf52ef3d8bf71e4b10e"},{url:"pwa-icon-144x144.png",revision:"5561942c307ed76de29bcc76566400fc"},{url:"manifest.webmanifest",revision:"7c7cd1001e1934dab17ac8f8821bfecc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
