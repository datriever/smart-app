import{c as re,b as F,t as ke}from"./disclose-version.vRlpr8E2.js";import"./legacy.BcWStO_I.js";import{v as Be,T as Qe,U as Ve,N as se,x as Ue,V as ie,F as b,W as L,X as Q,P as qe,Q as He,O as ce,G as Ge,Y as Ke}from"./runtime.C1ZHzn9M.js";import{l as We,i as le}from"./preload-helper.DmZ2lKru.js";import{h as Je,a as fe}from"./Plot.Dzc-Jf15.js";import{i as Xe}from"./lifecycle.D_uNlEq5.js";import{o as Ye,a as Ze,c as et}from"./index-client.DYMmj3-M.js";const Ce=/^[a-z0-9]+(-[a-z0-9]+)*$/,R=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),a={provider:o.length>0?o[0]:r,prefix:l,name:c};return t&&!A(a)?null:a}const s=o[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return t&&!A(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:s};return t&&!A(c,n)?null:c}return null},A=(e,t)=>e?!!((t&&e.prefix===""||e.prefix)&&e.name):!1,Te=Object.freeze({left:0,top:0,width:16,height:16}),N=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),$=Object.freeze({...Te,...N}),q=Object.freeze({...$,body:"",hidden:!1});function tt(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function ae(e,t){const n=tt(e,t);for(const r in q)r in N?r in e&&!(r in n)&&(n[r]=N[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function nt(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function s(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=r[i]&&r[i].parent,l=c&&s(c);l&&(o[i]=[c].concat(l))}return o[i]}return Object.keys(n).concat(Object.keys(r)).forEach(s),o}function ot(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let s={};function i(c){s=ae(r[c]||o[c],s)}return i(t),n.forEach(i),ae(e,s)}function je(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=nt(e);for(const o in r){const s=r[o];s&&(t(o,ot(e,o,s)),n.push(o))}return n}const rt={provider:"",aliases:{},not_found:{},...Te};function V(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Pe(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!V(e,rt))return null;const n=t.icons;for(const o in n){const s=n[o];if(!o||typeof s.body!="string"||!V(s,q))return null}const r=t.aliases||Object.create(null);for(const o in r){const s=r[o],i=s.parent;if(!o||typeof i!="string"||!n[i]&&!r[i]||!V(s,q))return null}return t}const ue=Object.create(null);function st(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function C(e,t){const n=ue[e]||(ue[e]=Object.create(null));return n[t]||(n[t]=st(e,t))}function Y(e,t){return Pe(t)?je(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function it(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let O=!1;function Oe(e){return typeof e=="boolean"&&(O=e),O}function ct(e){const t=typeof e=="string"?R(e,!0,O):e;if(t){const n=C(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function lt(e,t){const n=R(e,!0,O);if(!n)return!1;const r=C(n.provider,n.prefix);return t?it(r,n.name,t):(r.missing.add(n.name),!0)}function ft(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),O&&!t&&!e.prefix){let o=!1;return Pe(e)&&(e.prefix="",je(e,(s,i)=>{lt(s,i)&&(o=!0)})),o}const n=e.prefix;if(!A({provider:t,prefix:n,name:"a"}))return!1;const r=C(t,n);return!!Y(r,e)}const Ee=Object.freeze({width:null,height:null}),Me=Object.freeze({...Ee,...N}),at=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ut=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function de(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(at);if(r===null||!r.length)return e;const o=[];let s=r.shift(),i=ut.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?o.push(s):o.push(Math.ceil(c*t*n)/n)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}function dt(e,t="defs"){let n="";const r=e.indexOf("<"+t);for(;r>=0;){const o=e.indexOf(">",r),s=e.indexOf("</"+t);if(o===-1||s===-1)break;const i=e.indexOf(">",s);if(i===-1)break;n+=e.slice(o+1,s).trim(),e=e.slice(0,r).trim()+e.slice(i+1)}return{defs:n,content:e}}function pt(e,t){return e?"<defs>"+e+"</defs>"+t:t}function ht(e,t,n){const r=dt(e);return pt(r.defs,t+r.content+n)}const gt=e=>e==="unset"||e==="undefined"||e==="none";function mt(e,t){const n={...$,...e},r={...Me,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(y=>{const g=[],m=y.hFlip,p=y.vFlip;let S=y.rotate;m?p?S+=2:(g.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),g.push("scale(-1 1)"),o.top=o.left=0):p&&(g.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),g.push("scale(1 -1)"),o.top=o.left=0);let v;switch(S<0&&(S-=Math.floor(S/4)*4),S=S%4,S){case 1:v=o.height/2+o.top,g.unshift("rotate(90 "+v.toString()+" "+v.toString()+")");break;case 2:g.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:v=o.width/2+o.left,g.unshift("rotate(-90 "+v.toString()+" "+v.toString()+")");break}S%2===1&&(o.left!==o.top&&(v=o.left,o.left=o.top,o.top=v),o.width!==o.height&&(v=o.width,o.width=o.height,o.height=v)),g.length&&(s=ht(s,'<g transform="'+g.join(" ")+'">',"</g>"))});const i=r.width,c=r.height,l=o.width,a=o.height;let f,u;i===null?(u=c===null?"1em":c==="auto"?a:c,f=de(u,l/a)):(f=i==="auto"?l:i,u=c===null?de(f,a/l):c==="auto"?a:c);const d={},x=(y,g)=>{gt(g)||(d[y]=g.toString())};x("width",f),x("height",u);const w=[o.left,o.top,l,a];return d.viewBox=w.join(" "),{attributes:d,viewBox:w,body:s}}const yt=/\sid="(\S+)"/g,bt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let xt=0;function wt(e,t=bt){const n=[];let r;for(;r=yt.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof t=="function"?t(s):t+(xt++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}const H=Object.create(null);function vt(e,t){H[e]=t}function G(e){return H[e]||H[""]}function Z(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const ee=Object.create(null),j=["https://api.simplesvg.com","https://api.unisvg.com"],D=[];for(;j.length>0;)j.length===1||Math.random()>.5?D.push(j.shift()):D.push(j.pop());ee[""]=Z({resources:["https://api.iconify.design"].concat(D)});function It(e,t){const n=Z(t);return n===null?!1:(ee[e]=n,!0)}function te(e){return ee[e]}const St=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let pe=St();function kt(e,t){const n=te(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const s=t+".json?icons=";r=n.maxURL-o-n.path.length-s.length}return r}function Ct(e){return e===404}const Tt=(e,t,n)=>{const r=[],o=kt(e,t),s="icons";let i={type:s,provider:e,prefix:t,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=o&&a>0&&(r.push(i),i={type:s,provider:e,prefix:t,icons:[]},c=l.length),i.icons.push(l)}),r.push(i),r};function jt(e){if(typeof e=="string"){const t=te(e);if(t)return t.path}return"/"}const Pt=(e,t,n)=>{if(!pe){n("abort",424);return}let r=jt(t.provider);switch(t.type){case"icons":{const s=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});r+=s+".json?"+l.toString();break}case"custom":{const s=t.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let o=503;pe(e+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(Ct(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",o)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",o)})},Ot={prepare:Tt,send:Pt};function Et(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,c=o.name,l=n[s]||(n[s]=Object.create(null)),a=l[i]||(l[i]=C(s,i));let f;c in a.icons?f=t.loaded:i===""||a.missing.has(c)?f=t.missing:f=t.pending;const u={provider:s,prefix:i,name:c};f.push(u)}),t}function Fe(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function Mt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==o)return!0;const a=l.name;if(e.icons[a])i.loaded.push({provider:r,prefix:o,name:a});else if(e.missing.has(a))i.missing.push({provider:r,prefix:o,name:a});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||Fe([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let Ft=0;function Lt(e,t,n){const r=Ft++,o=Fe.bind(null,n,r);if(!t.pending.length)return o;const s={id:r,icons:t,callback:e,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function _t(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const s=typeof o=="string"?R(o,t,n):o;s&&r.push(s)}),r}var At={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Dt(e,t,n,r){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let i;if(e.random){let h=e.resources.slice(0);for(i=[];h.length>1;){const I=Math.floor(Math.random()*h.length);i.push(h[I]),h=h.slice(0,I).concat(h.slice(I+1))}i=i.concat(h)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));const c=Date.now();let l="pending",a=0,f,u=null,d=[],x=[];typeof r=="function"&&x.push(r);function w(){u&&(clearTimeout(u),u=null)}function y(){l==="pending"&&(l="aborted"),w(),d.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),d=[]}function g(h,I){I&&(x=[]),typeof h=="function"&&x.push(h)}function m(){return{startTime:c,payload:t,status:l,queriesSent:a,queriesPending:d.length,subscribe:g,abort:y}}function p(){l="failed",x.forEach(h=>{h(void 0,f)})}function S(){d.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),d=[]}function v(h,I,T){const M=I!=="success";switch(d=d.filter(k=>k!==h),l){case"pending":break;case"failed":if(M||!e.dataAfterTimeout)return;break;default:return}if(I==="abort"){f=T,p();return}if(M){f=T,d.length||(i.length?B():p());return}if(w(),S(),!e.random){const k=e.resources.indexOf(h.resource);k!==-1&&k!==e.index&&(e.index=k)}l="completed",x.forEach(k=>{k(T)})}function B(){if(l!=="pending")return;w();const h=i.shift();if(h===void 0){if(d.length){u=setTimeout(()=>{w(),l==="pending"&&(S(),p())},e.timeout);return}p();return}const I={status:"pending",resource:h,callback:(T,M)=>{v(I,T,M)}};d.push(I),a++,u=setTimeout(B,e.rotate),n(h,t,I.callback)}return setTimeout(B),m}function Le(e){const t={...At,...e};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,a){const f=Dt(t,c,l,(u,d)=>{r(),a&&a(u,d)});return n.push(f),f}function s(c){return n.find(l=>c(l))||null}return{query:o,find:s,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function he(){}const U=Object.create(null);function Nt(e){if(!U[e]){const t=te(e);if(!t)return;const n=Le(t),r={config:t,redundancy:n};U[e]=r}return U[e]}function Rt(e,t,n){let r,o;if(typeof e=="string"){const s=G(e);if(!s)return n(void 0,424),he;o=s.send;const i=Nt(e);i&&(r=i.redundancy)}else{const s=Z(e);if(s){r=Le(s);const i=e.resources?e.resources[0]:"",c=G(i);c&&(o=c.send)}}return!r||!o?(n(void 0,424),he):r.query(t,o,n)().abort}const ge="iconify2",E="iconify",_e=E+"-count",me=E+"-version",Ae=36e5,$t=168,zt=50;function K(e,t){try{return e.getItem(t)}catch{}}function ne(e,t,n){try{return e.setItem(t,n),!0}catch{}}function ye(e,t){try{e.removeItem(t)}catch{}}function W(e,t){return ne(e,_e,t.toString())}function J(e){return parseInt(K(e,_e))||0}const z={local:!0,session:!0},De={local:new Set,session:new Set};let oe=!1;function Bt(e){oe=e}let _=typeof window>"u"?{}:window;function Ne(e){const t=e+"Storage";try{if(_&&_[t]&&typeof _[t].length=="number")return _[t]}catch{}z[e]=!1}function Re(e,t){const n=Ne(e);if(!n)return;const r=K(n,me);if(r!==ge){if(r){const c=J(n);for(let l=0;l<c;l++)ye(n,E+l.toString())}ne(n,me,ge),W(n,0);return}const o=Math.floor(Date.now()/Ae)-$t,s=c=>{const l=E+c.toString(),a=K(n,l);if(typeof a=="string"){try{const f=JSON.parse(a);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>o&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&t(f,c))return!0}catch{}ye(n,l)}};let i=J(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,W(n,i)):De[e].add(c))}function $e(){if(!oe){Bt(!0);for(const e in z)Re(e,t=>{const n=t.data,r=t.provider,o=n.prefix,s=C(r,o);if(!Y(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function Qt(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in z)Re(r,o=>{const s=o.data;return o.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function Vt(e,t){oe||$e();function n(r){let o;if(!z[r]||!(o=Ne(r)))return;const s=De[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=J(o),i>=zt||!W(o,i+1))return;const c={cached:Math.floor(Date.now()/Ae),provider:e.provider,data:t};return ne(o,E+i.toString(),JSON.stringify(c))}t.lastModified&&!Qt(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function be(){}function Ut(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Mt(e)}))}function qt(e){const t=[],n=[];return e.forEach(r=>{(r.match(Ce)?t:n).push(r)}),{valid:t,invalid:n}}function P(e,t,n,r){function o(){const s=e.pendingIcons;t.forEach(i=>{s&&s.delete(i),e.icons[i]||e.missing.add(i)})}if(n&&typeof n=="object")try{if(!Y(e,n).length){o();return}r&&Vt(e,n)}catch(s){console.error(s)}o(),Ut(e)}function xe(e,t){e instanceof Promise?e.then(n=>{t(n)}).catch(()=>{t(null)}):t(e)}function Ht(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;if(delete e.iconsToLoad,!o||!o.length)return;const s=e.loadIcon;if(e.loadIcons&&(o.length>1||!s)){xe(e.loadIcons(o,r,n),f=>{P(e,o,f,!1)});return}if(s){o.forEach(f=>{const u=s(f,r,n);xe(u,d=>{const x=d?{prefix:r,icons:{[f]:d}}:null;P(e,[f],x,!1)})});return}const{valid:i,invalid:c}=qt(o);if(c.length&&P(e,c,null,!1),!i.length)return;const l=r.match(Ce)?G(n):null;if(!l){P(e,i,null,!1);return}l.prepare(n,r,i).forEach(f=>{Rt(n,f,u=>{P(e,f.icons,u,!0)})})}))}const Gt=(e,t)=>{const n=_t(e,!0,Oe()),r=Et(n);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,be)}),()=>{l=!1}}const o=Object.create(null),s=[];let i,c;return r.pending.forEach(l=>{const{provider:a,prefix:f}=l;if(f===c&&a===i)return;i=a,c=f,s.push(C(a,f));const u=o[a]||(o[a]=Object.create(null));u[f]||(u[f]=[])}),r.pending.forEach(l=>{const{provider:a,prefix:f,name:u}=l,d=C(a,f),x=d.pendingIcons||(d.pendingIcons=new Set);x.has(u)||(x.add(u),o[a][f].push(u))}),s.forEach(l=>{const a=o[l.provider][l.prefix];a.length&&Ht(l,a)}),t?Lt(t,r,s):be};function Kt(e,t){const n={...e};for(const r in t){const o=t[r],s=typeof o;r in Ee?(o===null||o&&(s==="string"||s==="number"))&&(n[r]=o):s===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const Wt=/[\s,]+/;function Jt(e,t){t.split(Wt).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Xt(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(e.slice(0,e.length-n.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return t}function Yt(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function Zt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function en(e){return"data:image/svg+xml,"+Zt(e)}function tn(e){return'url("'+en(e)+'")'}const we={...Me,inline:!1},nn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},on={display:"inline-block"},X={"background-color":"currentColor"},ze={"background-color":"transparent"},ve={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Ie={"-webkit-mask":X,mask:X,background:ze};for(const e in Ie){const t=Ie[e];for(const n in ve)t[e+"-"+n]=ve[n]}function rn(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function sn(e,t){const n=Kt(we,t),r=t.mode||"svg",o=r==="svg"?{...nn}:{};e.body.indexOf("xlink:")===-1&&delete o["xmlns:xlink"];let s=typeof t.style=="string"?t.style:"";for(let m in t){const p=t[m];if(p!==void 0)switch(m){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[m]=p===!0||p==="true"||p===1;break;case"flip":typeof p=="string"&&Jt(n,p);break;case"color":s=s+(s.length>0&&s.trim().slice(-1)!==";"?";":"")+"color: "+p+"; ";break;case"rotate":typeof p=="string"?n[m]=Xt(p):typeof p=="number"&&(n[m]=p);break;case"ariaHidden":case"aria-hidden":p!==!0&&p!=="true"&&delete o["aria-hidden"];break;default:if(m.slice(0,3)==="on:")break;we[m]===void 0&&(o[m]=p)}}const i=mt(e,n),c=i.attributes;if(n.inline&&(s="vertical-align: -0.125em; "+s),r==="svg"){Object.assign(o,c),s!==""&&(o.style=s);let m=0,p=t.id;return typeof p=="string"&&(p=p.replace(/-/g,"_")),{svg:!0,attributes:o,body:wt(i.body,p?()=>p+"ID"+m++:"iconifySvelte")}}const{body:l,width:a,height:f}=e,u=r==="mask"||(r==="bg"?!1:l.indexOf("currentColor")!==-1),d=Yt(l,{...c,width:a+"",height:f+""}),w={"--svg":tn(d)},y=m=>{const p=c[m];p&&(w[m]=rn(p))};y("width"),y("height"),Object.assign(w,on,u?X:ze);let g="";for(const m in w)g+=m+": "+w[m]+";";return o.style=g+s,{svg:!1,attributes:o}}Oe(!0);vt("",Ot);if(typeof document<"u"&&typeof window<"u"){$e();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!ft(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;It(n,o)||console.error(r)}catch{console.error(r)}}}}function cn(e,t,n,r,o){function s(){t.loading&&(t.loading.abort(),t.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return t.name="",s(),{data:{...$,...e}};let i;if(typeof e!="string"||(i=R(e,!1,!0))===null)return s(),null;const c=ct(i);if(!c)return n&&(!t.loading||t.loading.name!==e)&&(s(),t.name="",t.loading={name:e,abort:Gt([i],r)}),null;s(),t.name!==e&&(t.name=e,o&&!t.destroyed&&o(e));const l=["iconify"];return i.prefix!==""&&l.push("iconify--"+i.prefix),i.provider!==""&&l.push("iconify--"+i.provider),{data:c,classes:l}}function Se(e,t){return e?sn({...$,...e},t):null}var ln=ke("<svg><!></svg>"),fn=ke("<span></span>");function yn(e,t){const n=We(t,["children","$$slots","$$events","$$legacy"]);Be(t,!1);const r=L({name:"",loading:null,destroyed:!1});let o=L(!1),s=L(0),i=L();const c=u=>{typeof n.onLoad=="function"&&n.onLoad(u),et()("load",{icon:u})};function l(){Ke(s)}Ye(()=>{ie(o,!0)}),Ze(()=>{Q(r,b(r).destroyed=!0),b(r).loading&&(b(r).loading.abort(),Q(r,b(r).loading=null))}),Qe(()=>(b(s),Ge(n),b(o),b(r),b(i),Se),()=>{b(s);const u=!!n.ssr||b(o),d=cn(n.icon,b(r),u,l,c);ie(i,d?Se(d.data,n):null),b(i)&&d.classes&&Q(i,b(i).attributes.class=(typeof n.class=="string"?n.class+" ":"")+d.classes.join(" "))}),Ve(),Xe();var a=re(),f=se(a);le(f,()=>b(i),u=>{var d=re(),x=se(d);le(x,()=>b(i).svg,w=>{var y=ln();let g;var m=qe(y);Je(m,()=>b(i).body,!0,!1),He(y),ce(()=>g=fe(y,g,{...b(i).attributes},void 0,!0)),F(w,y)},w=>{var y=fn();let g;ce(()=>g=fe(y,g,{...b(i).attributes})),F(w,y)}),F(u,d)}),F(e,a),Ue()}export{yn as I};
