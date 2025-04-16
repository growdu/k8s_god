"use strict";(self.webpackChunkk_8_s_god=self.webpackChunkk_8_s_god||[]).push([[594],{28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var t=o(96540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}},80777:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"protocol/fib\u8868","title":"fib\u8868","description":"fib\uff08forward info base\uff09\u8f6c\u53d1\u8868\u3002","source":"@site/docs/protocol/fib\u8868.md","sourceDirName":"protocol","slug":"/protocol/fib\u8868","permalink":"/blog/docs/protocol/fib\u8868","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/fib\u8868.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"linux\u751f\u6210coredump","permalink":"/blog/docs/programmer_self_cultivation/linux\u751f\u6210coredump"},"next":{"title":"ip\u5206\u7247","permalink":"/blog/docs/protocol/ip\u5206\u7247"}}');var r=o(74848),i=o(28453);const s={},c="fib\u8868",l={},d=[{value:"\u51fa\u73b0\u539f\u56e0",id:"\u51fa\u73b0\u539f\u56e0",level:2},{value:"fib\u7684\u4f5c\u7528",id:"fib\u7684\u4f5c\u7528",level:2}];function a(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"fib\u8868",children:"fib\u8868"})}),"\n",(0,r.jsx)(n.p,{children:"fib\uff08forward info base\uff09\u8f6c\u53d1\u8868\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u51fa\u73b0\u539f\u56e0",children:"\u51fa\u73b0\u539f\u56e0"}),"\n",(0,r.jsx)(n.p,{children:"\u8def\u7531\u8868\u8868\u793a\u6240\u6709\u7684\u6709\u6548\u8def\u7531\u6240\u5f62\u6210\u7684\u8868\u9879\uff0c\u5e76\u4e0d\u6307\u5bfc\u8f6c\u53d1"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u8f6c\u53d1\u539f\u7406 \uff1a\n\u8def\u7531\u8868\u4e2d\u5b58\u5728\u591a\u4e2a\u8def\u7531\u9879\u53ef\u4ee5\u5339\u914d\u76ee\u7684IP\u5730\u5740\u65f6\uff0c\u8def\u7531\u67e5\u627e\u8fdb\u7a0b\u4f1a\u9009\u62e9\u5176\u4e2d\u63a9\u7801\u6700\u957f\u7684\u8def\u7531\u9879\u7528\u4e8e\u8f6c\u53d1"}),"\n",(0,r.jsx)(n.li,{children:"\u7f3a\u70b9 \uff1a\n\u90a3\u4e48\u8def\u7531\u8868\u4e2d\u8def\u7531\u9879\u6570\u91cf\u8d8a\u591a\uff0c\u6240\u9700\u67e5\u627e\u53ca\u5339\u914d\u7684\u6b21\u6570\u4e5f\u5c31\u8d8a\u591a\uff0c\u5176\u8f6c\u53d1\u6548\u7387\u4e5f\u5c31\u8d8a\u4f4e"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u6362\u53e5\u8bdd\u8bf4\uff0c\u4ece\u4e00\u7aef\u5230\u53e6\u4e00\u7aef\u8def\u7531\u8868\u53ef\u80fd\u5b58\u5728\u591a\u6761\u8def\u5f84\uff0c\u4e14\u8def\u5f84\u957f\u5ea6\u4e0d\u4e00\u5b9a\u662f1\uff0c\u540c\u65f6\u8f6c\u53d1\u65e0\u6cd5\u76f4\u8fbe\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"fib\u7684\u4f5c\u7528",children:"fib\u7684\u4f5c\u7528"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"FIB \u8868\u4f5c\u4e3a\u8def\u7531\u8868\u7684\u4e00\u79cd\u7cbe\u7b80\u5f62\u5f0f\u51fa\u73b0\uff0c\u901a\u5e38\u53ea\u8bb0\u5f55\u5e38\u7528\u7684\u8868\u9879"}),"\n",(0,r.jsx)(n.li,{children:"FIB \u4e2d\u5305\u542b\u4e86\u8def\u7531\u5668\u5728\u8f6c\u53d1\u62a5\u6587\u65f6\u6240\u5fc5\u9700\u7684\u4e00\u7ec4\u6700\u5c0f\u4fe1\u606f\n\u5f53\u9700\u8981\u9009\u8def\u65f6\uff0c\u5148\u68c0\u7d22FIB\u8868\uff0c\u5982\u679c\u627e\u4e0d\u5230\u518d\u68c0\u7d22\u8def\u7531\u8868"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"FIB\u8868\u662f\u8def\u7531\u8868RIB\u4e2d\u7684\u6700\u4f18\u8def\u7531\u6761\u76ee\u5bfc\u5165\u5230FIB\u4e2d\u7684\uff0c\u4e5f\u53ef\u4ee5\u662f\u7531ARP\u751f\u6210\u7684\uff0c\u662f\u771f\u6b63\u6307\u5bfc\u6570\u636e\u8f6c\u53d1\u7684\u8868\u3002FIB\u4e2d\u5305\u542b\u4e86\u8def\u7531\u5668\u5728\u8f6c\u53d1\u62a5\u6587\u65f6\u6240\u5fc5\u9700\u7684\u4e00\u7ec4\u6700\u5c0f\u4fe1\u606f\u3002\u8def\u7531\u8868RIB\u7528\u6765\u51b3\u7b56\u8def\u7531\uff0c\u8f6c\u53d1\u8868FIB\u7528\u6765\u8f6c\u53d1\u5206\u7ec4\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);