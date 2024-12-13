import{b,t as h,c as J}from"../chunks/disclose-version.vRlpr8E2.js";import{v as z,O as A,x as B,P as i,R as a,Q as o,V as C,F as m,a4 as j,N as L}from"../chunks/runtime.C1ZHzn9M.js";import{d as G}from"../chunks/store.BslfwL47.js";import{p as E,a as q,i as T}from"../chunks/preload-helper.DmZ2lKru.js";import{r as R,b as V,c as D,d as W,s as N}from"../chunks/Plot.Dzc-Jf15.js";import{s as H}from"../chunks/render.D6iwXBoD.js";import{s as K}from"../chunks/snippet.HHQw8Ibq.js";import{I as F}from"../chunks/Icon.CaeunKvy.js";import{M as Q,e as X,i as Y}from"../chunks/Editor.qlNwN-Vc.js";var Z=(s,e)=>e(!e()),$=h('<div class="card svelte-1ieggam"><input class="checkbox svelte-1ieggam" type="checkbox"> <!> <span class="label svelte-1ieggam"> </span></div>');function I(s,e){z(e,!0);let c=E(e,"checked",15);var r=$();r.__click=[Z,c];var l=i(r);R(l);var t=a(l,2);K(t,()=>e.icon);var v=a(t,2),_=i(v,!0);o(v),o(r),A(()=>{V(l,c()),H(_,e.label)}),b(s,r),B()}G(["click"]);var ee=h('<div class="objectives svelte-1bb90me"><!> <!> <!></div>');function se(s,e){let c=E(e,"cost",15),r=E(e,"emissions",15),l=E(e,"risk",15);var t=ee(),v=i(t);I(v,{label:"Price",get checked(){return c()},set checked(n){c(n)},icon:n=>{F(n,{icon:"twemoji:dollar-banknote"})},$$slots:{icon:!0}});var _=a(v,2);I(_,{label:"Emissions",get checked(){return r()},set checked(n){r(n)},icon:n=>{F(n,{icon:"fa:leaf",style:"color: #4CAF50;"})},$$slots:{icon:!0}});var w=a(_,2);I(w,{label:"Risk",get checked(){return l()},set checked(n){l(n)},icon:n=>{F(n,{icon:"fluent-emoji-flat:police-car-light"})},$$slots:{icon:!0}}),o(t),b(s,t)}function te(s,e){const c={Wind:.1,Solar:.2,Hydro:.3,Nuclear:.4},r=JSON.stringify(Object.keys(c)),l=JSON.stringify(Object.values(c)),t="```",v=`

# Optimization Results

## Optimal Energy Mix

${t}plot
{
  "data": [
    {
      "labels": ${r},
      "values": ${l},
      "type": "pie",
      "hole": 0.3,
      "textinfo": "label+percent",
      "name": "Energy Sources"
    }
  ],
  "layout": {
    "showlegend": false,
    "margin": {"l": 10, "r": 10, "t": 10, "b": 10}
  }
}
${t}

## Key Performance Indicators

| **Metric**               | **Value**         |
|---------------------------|-------------------|
| Weighted Cost (LCOE)      | $65.93/MWh        |
| Weighted Carbon Intensity | 278.25 gCO2eq/kWh |

`;Q(s,{markdown:v,theme:{table:{headerBg:"#444",oddRowBg:"#2b2b2b",oddRowFontColor:"var(--color-text)",oddRowHover:"#333",evenRowBg:"#1e1e1e",evenRowFontColor:"var(--color-text)",evenRowHover:"#333",border:"1px solid #444"},text:{h1Color:"var(--color-h1)",h2Color:"white"},plot:{paper_bgcolor:"#1b2925",font:{color:"#d4f0e4"},fillParent:"width"}}})}var ae=(s,e)=>{C(e,!m(e))},oe=(s,e)=>e.setSource({...e.source,p_min:+s.currentTarget.value}),re=(s,e)=>e.setSource({...e.source,p_max:+s.currentTarget.value}),ie=(s,e)=>e.setSource({...e.source,cost:+s.currentTarget.value}),ce=(s,e)=>e.setSource({...e.source,emissions:+s.currentTarget.value}),le=(s,e)=>e.setSource({...e.source,risk:+s.currentTarget.value}),ne=h('<div class="accordion svelte-1bl7qwx"><div class="accordion-summary svelte-1bl7qwx"><strong> </strong> <span> </span></div> <div><label class="svelte-1bl7qwx"><span>Minimum Proportion:</span> <input type="number" min="0" max="1" step="0.01" class="svelte-1bl7qwx"></label> <label class="svelte-1bl7qwx">Maximum Proportion: <input type="number" min="0" max="1" step="0.01" class="svelte-1bl7qwx"></label> <label class="svelte-1bl7qwx">Cost: <input type="number" class="svelte-1bl7qwx"></label> <label class="svelte-1bl7qwx">Emissions: <input type="number" class="svelte-1bl7qwx"></label> <label class="svelte-1bl7qwx">Risk: <input type="number" class="svelte-1bl7qwx"></label></div></div>');function ve(s,e){z(e,!0);let c=j(!1);var r=ne(),l=i(r);l.__click=[ae,c];var t=i(l),v=i(t,!0);o(t);var _=a(t,2),w=i(_);o(_),o(l);var p=a(l,2),n=i(p),y=a(i(n),2);R(y),y.__input=[oe,e],o(n);var O=a(n,2),S=a(i(O));R(S),S.__input=[re,e],o(O);var k=a(O,2),d=a(i(k));R(d),d.__input=[ie,e],o(k);var g=a(k,2),x=a(i(g));R(x),x.__input=[ce,e],o(g);var u=a(g,2),f=a(i(u));R(f),f.__input=[le,e],o(u),o(p),o(r),A(()=>{H(v,e.source.name),H(w,`${e.source.cost??""} €/kWh, ${e.source.emissions??""} gCO₂/MWh`),D(p,`${`accordion-details ${m(c)?"":"hidden"}`??""} svelte-1bl7qwx`),W(y,e.source.p_min??0),W(S,e.source.p_max??1),W(d,e.source.cost),W(x,e.source.emissions),W(f,e.source.risk)}),b(s,r),B()}G(["click","input"]);var ue=h('<div class="sources-container svelte-afdh44"></div>');function _e(s,e){z(e,!0);const c=E(e,"sources",15);var r=ue();X(r,21,c,Y,(l,t,v)=>{ve(l,{get source(){return m(t)},setSource:_=>c(c()[v]=_,!0)})}),o(r),b(s,r),B()}const me=[{name:"Coal",cost:50,emissions:100,risk:10,p_max:.1},{name:"Natural Gas",cost:40,emissions:50,risk:5,p_max:.3},{name:"Solar",cost:30,emissions:10,risk:1,p_max:.6},{name:"Wind",cost:20,emissions:5,risk:.5,p_max:.8},{name:"Hydro",cost:10,emissions:2,risk:.1,p_max:1},{name:"Nuclear",cost:60,emissions:20,risk:2,p_max:.2},{name:"Oil",cost:45,emissions:80,risk:8,p_max:.2},{name:"Geothermal",cost:25,emissions:10,risk:1,p_max:.5}];var de=(s,e)=>e("results"),be=h('<div class="objectives-tab svelte-1evw29x"><h2>Objectives</h2> <!> <button class="svelte-1evw29x">Optimize</button></div>'),ke=h('<div class="sources-tab svelte-1evw29x"><h2>Sources</h2> <div class="sources-scroll svelte-1evw29x"><!></div></div>'),xe=h('<div class="results-tab"><!></div>'),pe=(s,e)=>e("objectives"),ge=(s,e)=>e("sources"),fe=(s,e)=>e("results"),he=h('<div class="container svelte-1evw29x"><main class="svelte-1evw29x"><h1>Portfolio Optimization</h1> <!></main> <footer class="svelte-1evw29x"><button class="svelte-1evw29x">Objectives</button> <button class="svelte-1evw29x">Sources</button> <button class="svelte-1evw29x">Results</button></footer></div>');function We(s){let e=j(q(me)),c=j(!1),r=j(!1),l=j(!1),t=j("objectives");function v(k){C(t,q(k))}var _=he(),w=i(_),p=a(i(w),2);T(p,()=>m(t)==="objectives",k=>{var d=be(),g=a(i(d),2);se(g,{get cost(){return m(c)},set cost(u){C(c,q(u))},get emissions(){return m(r)},set emissions(u){C(r,q(u))},get risk(){return m(l)},set risk(u){C(l,q(u))}});var x=a(g,2);x.__click=[de,v],o(d),b(k,d)},k=>{var d=J(),g=L(d);T(g,()=>m(t)==="sources",x=>{var u=ke(),f=a(i(u),2),P=i(f);_e(P,{get sources(){return m(e)},set sources(M){C(e,q(M))}}),o(f),o(u),b(x,u)},x=>{var u=J(),f=L(u);T(f,()=>m(t)==="results",P=>{var M=xe(),U=i(M);te(U),o(M),b(P,M)},null,!0),b(x,u)},!0),b(k,d)}),o(w);var n=a(w,2),y=i(n);y.__click=[pe,v];var O=a(y,2);O.__click=[ge,v];var S=a(O,2);S.__click=[fe,v],o(n),o(_),A(()=>{N(y,"style",m(t)==="objectives"?"background: var(--color-accent-2);":""),N(O,"style",m(t)==="sources"?"background: var(--color-accent-2);":""),N(S,"style",m(t)==="results"?"background: var(--color-accent-2);":"")}),b(s,_)}G(["click"]);export{We as component};
