"use strict";(self.webpackChunkk_8_s_god=self.webpackChunkk_8_s_god||[]).push([[9018],{6135:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>c,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"pgsql/repmgr/repmgr_cluster","title":"repmgr\u642d\u5efa\u96c6\u7fa4","description":"\u7f16\u8bd1","source":"@site/docs/pgsql/repmgr/repmgr_cluster.md","sourceDirName":"pgsql/repmgr","slug":"/pgsql/repmgr/repmgr_cluster","permalink":"/blog/docs/pgsql/repmgr/repmgr_cluster","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/pgsql/repmgr/repmgr_cluster.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"repmgr","permalink":"/blog/docs/pgsql/repmgr/pgsql_repmgr"},"next":{"title":"sql_test","permalink":"/blog/docs/pgsql/sql_test"}}');var l=n(74848),t=n(28453);const c={},i="repmgr\u642d\u5efa\u96c6\u7fa4",d={},a=[{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:2},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:2},{value:"\u4e3b\u5e93",id:"\u4e3b\u5e93",level:3},{value:"\u5907\u5e93",id:"\u5907\u5e93",level:3}];function p(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.header,{children:(0,l.jsx)(r.h1,{id:"repmgr\u642d\u5efa\u96c6\u7fa4",children:"repmgr\u642d\u5efa\u96c6\u7fa4"})}),"\n",(0,l.jsx)(r.h2,{id:"\u7f16\u8bd1",children:"\u7f16\u8bd1"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-shell",children:"git clone git@github.com:EnterpriseDB/repmgr.git\n"})}),"\n",(0,l.jsx)(r.p,{children:"\u68c0\u67e5pg\u662f\u5426\u5b89\u88c5\uff0c\u4e3b\u8981\u770bpg_config\u5728\u4e0d\u5728$PATH\u4e0b\u9762\u3002"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-shell",children:"pg_config --help\n"})}),"\n",(0,l.jsx)(r.p,{children:"\u7136\u540e\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u7f16\u8bd1"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-shell",children:"./configure\nmake\nmake install\n"})}),"\n",(0,l.jsx)(r.p,{children:"repmgr5.3\u4e0epg15\u5bf9\u5e94\uff0c\u4f7f\u7528\u5176\u4ed6\u5bf9\u5e94\u5173\u7cfb\u6709\u53ef\u80fd\u4f1a\u7f16\u8bd1\u62a5\u9519\uff0c\u7f16\u8bd1\u5b8c\u6210\u540erepmgr\u4f1a\u653e\u5728pg\u7684\u4e8c\u8fdb\u5236\u76ee\u5f55\u4e0b\u3002"}),"\n",(0,l.jsx)(r.h2,{id:"\u8fd0\u884c",children:"\u8fd0\u884c"}),"\n",(0,l.jsx)(r.h3,{id:"\u4e3b\u5e93",children:"\u4e3b\u5e93"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:"\u521b\u5efa\u6570\u636e\u5e93"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-shell",children:"initdb -D data -A trust -U system\n"})}),"\n"]}),"\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:"\u8fd0\u884c\u6570\u636e\u5e93"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-shell",children:"pg_ctl -D data -l data/pg.log start\n"})}),"\n"]}),"\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:"\u8fde\u63a5\u6570\u636e\u5e93"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-shell",children:"psql -U system -d postgres -p 5432\n"})}),"\n"]}),"\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:"\u521b\u5efarepmgr\u7528\u6237"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-shell"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(r.h3,{id:"\u5907\u5e93",children:"\u5907\u5e93"})]})}function o(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>i});var s=n(96540);const l={},t=s.createContext(l);function c(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);