import{r as l}from"./index.BVOCwoKb.js";var x={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d;function R(){if(d)return n;d=1;var i=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(a,e,t){var s=null;if(t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),"key"in e){t={};for(var r in e)r!=="key"&&(t[r]=e[r])}else t=e;return e=t.ref,{$$typeof:i,type:a,key:s,ref:e!==void 0?e:null,props:t}}return n.Fragment=o,n.jsx=u,n.jsxs=u,n}var p;function v(){return p||(p=1,x.exports=R()),x.exports}var f=v();function T({encodedEmail:i,baseMessage:o,successMessage:u,Icon:a}){const[e,t]=l.useState(o),[s,r]=l.useState(!1),c=l.useRef(void 0);function m(){navigator.clipboard.writeText(atob(i)),t(u),r(!0),clearTimeout(c.current),c.current=window.setTimeout(()=>{t(o),r(!1)},2e3)}return f.jsxs("button",{onClick:m,className:"btn border-aqua-self border rounded-lg px-6 py-3 flex gap-2 items-center *:text-aqua-self my-2 link text-aqua-self cursor-pointer",children:[e,s&&f.jsx("i",{className:"icon text-lg flex items-center justify-center",dangerouslySetInnerHTML:{__html:a}})]})}export{T as default};
