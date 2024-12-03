var bt=Array.isArray,Ft=Array.from,Pt=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,Wn=Object.getOwnPropertyDescriptors,qt=Object.prototype,Mt=Array.prototype,Xn=Object.getPrototypeOf;function Lt(n){return typeof n=="function"}const Yt=()=>{};function Ht(n){return n()}function Qn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,En=4,j=8,en=16,T=32,z=64,X=128,S=256,G=512,h=1024,x=2048,N=4096,k=8192,b=16384,nt=32768,yn=65536,jt=1<<17,tt=1<<19,wn=1<<20,vn=Symbol("$state"),Bt=Symbol("legacy props"),Ut=Symbol("");function mn(n){return n===this.v}function rt(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function Tn(n){return!rt(n,this.v)}function et(n){throw new Error("effect_in_teardown")}function lt(){throw new Error("effect_in_unowned_derived")}function at(n){throw new Error("effect_orphan")}function st(){throw new Error("effect_update_depth_exceeded")}function Vt(){throw new Error("hydration_failed")}function Gt(n){throw new Error("props_invalid_value")}function Kt(){throw new Error("state_descriptors_fixed")}function $t(){throw new Error("state_prototype_fixed")}function ut(){throw new Error("state_unsafe_local_read")}function ot(){throw new Error("state_unsafe_mutation")}let J=!1;function Zt(){J=!0}function ln(n){return{f:0,v:n,reactions:null,equals:mn,version:0}}function zt(n){return gn(ln(n))}function it(n,t=!1){var e;const r=ln(n);return t||(r.equals=Tn),J&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function Jt(n,t=!1){return gn(it(n,t))}function gn(n){return i!==null&&i.f&y&&(m===null?At([n]):m.push(n)),n}function An(n,t){return i!==null&&on()&&i.f&(y|en)&&(m===null||!m.includes(n))&&ot(),ft(n,t)}function ft(n,t){return n.equals(t)||(n.v=t,n.version=Un(),xn(n,x),on()&&u!==null&&u.f&h&&!(u.f&T)&&(v!==null&&v.includes(n)?(w(u,x),W(u)):A===null?xt([n]):A.push(n))),t}function xn(n,t){var r=n.reactions;if(r!==null)for(var e=on(),l=r.length,a=0;a<l;a++){var s=r[a],f=s.f;f&x||!e&&s===u||(w(s,t),f&(h|S)&&(f&y?xn(s,N):W(s)))}}const Wt=1,Xt=2,Qt=16,nr=1,tr=2,rr=4,er=8,lr=16,ar=1,sr=2,_t="[",ct="[!",vt="]",Rn={},ur=Symbol();function Sn(n){console.warn("hydration_mismatch")}let C=!1;function or(n){C=n}let g;function L(n){if(n===null)throw Sn(),Rn;return g=n}function ir(){return L(F(g))}function fr(n){if(C){if(F(g)!==null)throw Sn(),Rn;g=n}}function _r(){for(var n=0,t=g;;){if(t.nodeType===8){var r=t.data;if(r===vt){if(n===0)return t;n-=1}else(r===_t||r===ct)&&(n+=1)}var e=F(t);t.remove(),t=e}}var pn,Dn,In;function cr(){if(pn===void 0){pn=window;var n=Element.prototype,t=Node.prototype;Dn=cn(t,"firstChild").get,In=cn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function Q(n=""){return document.createTextNode(n)}function nn(n){return Dn.call(n)}function F(n){return In.call(n)}function vr(n,t){if(!C)return nn(n);var r=nn(g);if(r===null)r=g.appendChild(Q());else if(t&&r.nodeType!==3){var e=Q();return r==null||r.before(e),L(e),e}return L(r),r}function pr(n,t){if(!C){var r=nn(n);return r instanceof Comment&&r.data===""?F(r):r}return g}function hr(n,t=1,r=!1){let e=C?g:n;for(var l;t--;)l=e,e=F(e);if(!C)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=Q();return e===null?l==null||l.after(s):e.before(s),L(s),s}return L(e),e}function dr(n){n.textContent=""}function pt(n){var t=y|x;u===null?t|=S:u.f|=wn;var r=i!==null&&i.f&y?i:null;const e={children:null,ctx:o,deps:null,equals:mn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function Er(n){const t=pt(n);return t.equals=Tn,t}function On(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?an(e):q(e)}}}function ht(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function kn(n){var t,r=u;Z(ht(n));try{On(n),t=Vn(n)}finally{Z(r)}return t}function Cn(n){var t=kn(n),r=(D||n.f&S)&&n.deps!==null?N:h;w(n,r),n.equals(t)||(n.v=t,n.version=Un())}function an(n){On(n),H(n,0),w(n,b),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Nn(n){u===null&&i===null&&at(),i!==null&&i.f&S&&lt(),un&&et()}function dt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function P(n,t,r,e=!0){var l=(n&z)!==0,a=u,s={ctx:o,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|x,first:null,fn:t,last:null,next:null,parent:l?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var f=I;try{hn(!0),B(s),s.f|=nt}catch(_){throw q(s),_}finally{hn(f)}}else t!==null&&W(s);var p=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&wn)===0;if(!p&&!l&&e&&(a!==null&&dt(s,a),i!==null&&i.f&y)){var d=i;(d.children??(d.children=[])).push(s)}return s}function yr(n){const t=P(j,null,!1);return w(t,h),t.teardown=n,t}function wr(n){Nn();var t=u!==null&&(u.f&T)!==0&&o!==null&&!o.m;if(t){var r=o;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:i})}else{var e=bn(n);return e}}function mr(n){return Nn(),sn(n)}function Tr(n){const t=P(z,n,!0);return()=>{q(t)}}function bn(n){return P(En,n,!1)}function gr(n,t){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=sn(()=>{n(),!e.ran&&(e.ran=!0,An(r.l.r2,!0),kt(t))})}function Ar(){var n=o;sn(()=>{if(zn(n.l.r2)){for(var t of n.l.r1){var r=t.effect;r.f&h&&w(r,N),M(r)&&B(r),t.ran=!1}n.l.r2.v=!1}})}function sn(n){return P(j,n,!0)}function xr(n){return Et(n)}function Et(n,t=0){return P(j|en|t,n,!0)}function Rr(n,t=!0){return P(j|T,n,!0,t)}function Fn(n){var t=n.teardown;if(t!==null){const r=un,e=i;dn(!0),$(null);try{t.call(null)}finally{dn(r),$(e)}}}function Pn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)an(t[r])}}function qn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;q(r,t),r=e}}function yt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&T||q(t),t=r}}function q(n,t=!0){var r=!1;if((t||n.f&tt)&&n.nodes_start!==null){for(var e=n.nodes_start,l=n.nodes_end;e!==null;){var a=e===l?null:F(e);e.remove(),e=a}r=!0}qn(n,t&&!r),Pn(n),H(n,0),w(n,b);var s=n.transitions;if(s!==null)for(const p of s)p.stop();Fn(n);var f=n.parent;f!==null&&f.first!==null&&Mn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Mn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function Sr(n,t){var r=[];Ln(n,r,!0),wt(r,()=>{q(n),t&&t()})}function wt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var l of n)l.out(e)}else t()}function Ln(n,t,r){if(!(n.f&k)){if(n.f^=k,n.transitions!==null)for(const s of n.transitions)(s.is_global||r)&&t.push(s);for(var e=n.first;e!==null;){var l=e.next,a=(e.f&yn)!==0||(e.f&T)!==0;Ln(e,t,a?r:!1),e=l}}}function Dr(n){Yn(n,!0)}function Yn(n,t){if(n.f&k){M(n)&&B(n),n.f^=k;for(var r=n.first;r!==null;){var e=r.next,l=(r.f&yn)!==0||(r.f&T)!==0;Yn(r,l?t:!1),r=e}if(n.transitions!==null)for(const a of n.transitions)(a.is_global||t)&&a.in()}}let K=!1,tn=[];function Hn(){K=!1;const n=tn.slice();tn=[],Qn(n)}function Ir(n){K||(K=!0,queueMicrotask(Hn)),tn.push(n)}function mt(){K&&Hn()}function Tt(n){throw new Error("lifecycle_outside_component")}const jn=0,gt=1;let U=!1,V=jn,Y=!1,I=!1,un=!1;function hn(n){I=n}function dn(n){un=n}let R=[],O=0;let i=null;function $(n){i=n}let u=null;function Z(n){u=n}let m=null;function At(n){m=n}let v=null,E=0,A=null;function xt(n){A=n}let Bn=0,D=!1,o=null;function Un(){return++Bn}function on(){return!J||o!==null&&o.l===null}function M(n){var s,f;var t=n.f;if(t&x)return!0;if(t&N){var r=n.deps,e=(t&S)!==0;if(r!==null){var l;if(t&G){for(l=0;l<r.length;l++)((s=r[l]).reactions??(s.reactions=[])).push(n);n.f^=G}for(l=0;l<r.length;l++){var a=r[l];if(M(a)&&Cn(a),e&&u!==null&&!D&&!((f=a==null?void 0:a.reactions)!=null&&f.includes(n))&&(a.reactions??(a.reactions=[])).push(n),a.version>n.version)return!0}}e||w(n,h)}return!1}function Rt(n,t){for(var r=t;r!==null;){if(r.f&X)try{r.fn(n);return}catch{r.f^=X}r=r.parent}throw U=!1,n}function St(n){return(n.f&b)===0&&(n.parent===null||(n.parent.f&X)===0)}function fn(n,t,r,e){if(U){if(r===null&&(U=!1),St(t))throw n;return}r!==null&&(U=!0);{Rt(n,t);return}}function Vn(n){var _n;var t=v,r=E,e=A,l=i,a=D,s=m,f=o,p=n.f;v=null,E=0,A=null,i=p&(T|z)?null:n,D=!I&&(p&S)!==0,m=null,o=n.ctx;try{var d=(0,n.fn)(),_=n.deps;if(v!==null){var c;if(H(n,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else n.deps=_=v;if(!D)for(c=E;c<_.length;c++)((_n=_[c]).reactions??(_n.reactions=[])).push(n)}else _!==null&&E<_.length&&(H(n,E),_.length=E);return d}finally{v=t,E=r,A=e,i=l,D=a,m=s,o=f}}function Dt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var l=r.length-1;l===0?r=t.reactions=null:(r[e]=r[l],r.pop())}}r===null&&t.f&y&&(v===null||!v.includes(t))&&(w(t,N),t.f&(S|G)||(t.f^=G),H(t,0))}function H(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)Dt(n,r[e])}function B(n){var t=n.f;if(!(t&b)){w(n,h);var r=u,e=o;u=n;try{t&en?yt(n):qn(n),Pn(n),Fn(n);var l=Vn(n);n.teardown=typeof l=="function"?l:null,n.version=Bn}catch(a){fn(a,n,r,e||n.ctx)}finally{u=r}}}function Gn(){O>1e3&&(O=0,st()),O++}function Kn(n){var t=n.length;if(t!==0){Gn();var r=I;I=!0;try{for(var e=0;e<t;e++){var l=n[e];l.f&h||(l.f^=h);var a=[];$n(l,a),It(a)}}finally{I=r}}}function It(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(b|k)))try{M(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mn(e):e.fn=null))}catch(l){fn(l,e,null,e.ctx)}}}function Ot(){if(Y=!1,O>1001)return;const n=R;R=[],Kn(n),Y||(O=0)}function W(n){V===jn&&(Y||(Y=!0,queueMicrotask(Ot)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(z|T)){if(!(r&h))return;t.f^=h}}R.push(t)}function $n(n,t){var r=n.first,e=[];n:for(;r!==null;){var l=r.f,a=(l&T)!==0,s=a&&(l&h)!==0,f=r.next;if(!s&&!(l&k))if(l&j){if(a)r.f^=h;else try{M(r)&&B(r)}catch(c){fn(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else l&En&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(n===c)break n;var d=c.next;if(d!==null){r=d;continue n}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],t.push(p),$n(p,t)}function Zn(n){var t=V,r=R;try{Gn();const l=[];V=gt,R=l,Y=!1,Kn(r);var e=n==null?void 0:n();return mt(),(R.length>0||l.length>0)&&Zn(),O=0,e}finally{V=t,R=r}}async function Or(){await Promise.resolve(),Zn()}function zn(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&b){var e=kn(n);return an(n),e}if(i!==null){m!==null&&m.includes(n)&&ut();var l=i.deps;v===null&&l!==null&&l[E]===n?E++:v===null?v=[n]:v.push(n),A!==null&&u!==null&&u.f&h&&!(u.f&T)&&A.includes(n)&&(w(u,x),W(u))}else if(r&&n.deps===null)for(var a=n,s=a.parent,f=a;s!==null;)if(s.f&y){var p=s;f=p,s=p.parent}else{var d=s;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(a=n,M(a)&&Cn(a)),n.v}function kt(n){const t=i;try{return i=null,n()}finally{i=t}}const Ct=~(x|N|h);function w(n,t){n.f=n.f&Ct|t}function kr(n){return Jn().get(n)}function Cr(n,t){return Jn().set(n,t),t}function Jn(n){return o===null&&Tt(),o.c??(o.c=new Map(Nt(o)||void 0))}function Nt(n){let t=n.p;for(;t!==null;){const r=t.c;if(r!==null)return r;t=t.p}return null}function Nr(n,t=1){var r=zn(n),e=t===1?r++:r--;return An(n,r),e}function br(n,t=!1,r){o={p:o,c:null,e:null,m:!1,s:n,x:null,l:null},J&&!t&&(o.l={s:null,u:null,r1:[],r2:ln(!1)})}function Fr(n){const t=o;if(t!==null){const s=t.e;if(s!==null){var r=u,e=i;t.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];Z(a.effect),$(a.reaction),bn(a.fn)}}finally{Z(r),$(e)}}o=t.p,t.m=!0}return{}}function Pr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(vn in n)rn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&vn in r&&rn(r)}}}function rn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{rn(n[e],t)}catch{}const r=Xn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Wn(r);for(let l in e){const a=e[l].get;if(a)try{a.call(n)}catch{}}}}}export{vn as $,_r as A,L as B,or as C,g as D,yn as E,Yt as F,yr as G,ct as H,it as I,An as J,Pt as K,$ as L,Z as M,i as N,u as O,cr as P,nn as Q,_t as R,F as S,Rn as T,vt as U,Sn as V,Vt as W,dr as X,Ft as Y,Tr as Z,Q as _,wr as a,qt as a0,Mt as a1,ln as a2,Kt as a3,ur as a4,cn as a5,$t as a6,Xn as a7,bn as a8,sn as a9,k as aA,ft as aB,Ln as aC,wt as aD,Xt as aE,Wt as aF,Qt as aG,kr as aH,Cr as aI,rt as aJ,Ir as aa,Gt as ab,jt as ac,rr as ad,Tn as ae,Nr as af,T as ag,z as ah,nr as ai,tr as aj,er as ak,Bt as al,Er as am,lr as an,Lt as ao,ar as ap,sr as aq,Zn as ar,Or as as,zt as at,q as au,Wn as av,Ut as aw,Jt as ax,gr as ay,Ar as az,kt as b,o as c,Qn as d,Pr as e,pt as f,zn as g,J as h,bt as i,Zt as j,pr as k,Tt as l,Fr as m,vr as n,fr as o,br as p,Et as q,Ht as r,hr as s,xr as t,mr as u,Dr as v,Rr as w,Sr as x,C as y,ir as z};