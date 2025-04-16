"use strict";(self.webpackChunkk_8_s_god=self.webpackChunkk_8_s_god||[]).push([[6819],{28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>o});var t=n(96540);const s={},i=t.createContext(s);function l(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:r},e.children)}},97206:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"pgsql/process/BgWriter","title":"BgWriter","description":"Bgwriter\u662f\u4e00\u4e2aBackground Writer\u8fdb\u7a0b\u7684\u7b80\u79f0\uff0cBgwriter\u4f1a\u5b9a\u65f6\u5c06\u7f13\u5b58\u4e2d\u4e00\u4e9b\u5df2\u7ecf\u66f4\u6539\u7684\u6570\u636e(\u810f\u7f13\u51b2\u533a)\u5199\u5165\u5230\u78c1\u76d8\u3002","source":"@site/docs/pgsql/process/BgWriter.md","sourceDirName":"pgsql/process","slug":"/pgsql/process/BgWriter","permalink":"/blog/docs/pgsql/process/BgWriter","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/pgsql/process/BgWriter.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"postgresql \u6e90\u7801\u7f16\u8bd1","permalink":"/blog/docs/pgsql/postgresql\u6e90\u7801\u7f16\u8bd1"},"next":{"title":"checkpoint","permalink":"/blog/docs/pgsql/process/Checkpoint"}}');var s=n(74848),i=n(28453);const l={},o="BgWriter",c={},a=[{value:"BgWriter\u914d\u7f6e\u53c2\u6570",id:"bgwriter\u914d\u7f6e\u53c2\u6570",level:2},{value:"\u6e90\u7801\u5206\u6790",id:"\u6e90\u7801\u5206\u6790",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:3},{value:"\u5199\u6587\u4ef6",id:"\u5199\u6587\u4ef6",level:3}];function p(e){const r={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"bgwriter",children:"BgWriter"})}),"\n",(0,s.jsx)(r.p,{children:"Bgwriter\u662f\u4e00\u4e2aBackground Writer\u8fdb\u7a0b\u7684\u7b80\u79f0\uff0cBgwriter\u4f1a\u5b9a\u65f6\u5c06\u7f13\u5b58\u4e2d\u4e00\u4e9b\u5df2\u7ecf\u66f4\u6539\u7684\u6570\u636e(\u810f\u7f13\u51b2\u533a)\u5199\u5165\u5230\u78c1\u76d8\u3002"}),"\n",(0,s.jsx)(r.p,{children:"BgWriter\u662fpostmaster\u901a\u8fc7fork\u521b\u5efa\u7684\u5b50\u8fdb\u7a0b\u3002"}),"\n",(0,s.jsx)(r.h2,{id:"bgwriter\u914d\u7f6e\u53c2\u6570",children:"BgWriter\u914d\u7f6e\u53c2\u6570"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"bgwriter_delay"}),"\n",(0,s.jsx)(r.p,{children:"\u542f\u52a8\u65f6\u95f4\u95f4\u9694\u3002"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"bgwriter_lru_maxpages"}),"\n",(0,s.jsx)(r.p,{children:"\u6700\u5927\u5237\u65b0\u9875\u6570\u3002"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"bgwriter_lru_multiplier"}),"\n",(0,s.jsx)(r.p,{children:"\u4e58\u6570\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"BgWriter\u4ece\u540e\u5411\u524d\u626b\u63cf\u7f13\u51b2\u533a\u7684LRU\u94fe\u8868\u5199\u51fa\u6700\u591abgwriter_lru_multiplier*N\u4e2a\u810f\u9875\uff0c\u5e76\u4e14\u4e0d\u8d85\u8fc7bgwriter_lru_maxpages\u3002\u5176\u4e2dN\u662f\u6307\u6700\u8fd1\u4e24\u6b21BgWriter\u6267\u884c\u7f13\u51b2\u533a\u6e05\u7406\u671f\u95f4\u7cfb\u7edf\u65b0\u7533\u8bf7\u7684\u7f13\u51b2\u9875\u6570\u3002"}),"\n",(0,s.jsx)(r.h2,{id:"\u6e90\u7801\u5206\u6790",children:"\u6e90\u7801\u5206\u6790"}),"\n",(0,s.jsx)(r.h3,{id:"\u542f\u52a8",children:"\u542f\u52a8"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u4e3b\u8fdb\u7a0bfork\u5b50\u8fdb\u7a0b"}),"\n"]}),"\n",(0,s.jsx)(r.mermaid,{value:"graph TB\nmain--\x3ePostmasterMain--\x3eStartChildProcess--\x3efork_process--\x3eAuxiliaryProcessMain--\x3eBackgroundWriterMain"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"\u5b50\u8fdb\u7a0b\u6d41\u7a0b"}),"\n",(0,s.jsx)(r.mermaid,{value:"graph TB\nBackgroundWriterMain--\x3e|\u6ce8\u518c\u4fe1\u53f7|GetCurrentTimestamp--\x3e|\u5206\u914d\u5185\u5b58\u4e0a\u4e0b\u6587|AllocSetContextCreate--\x3eMemoryContextSwitchTo--\x3eWritebackContextInit--\x3esigsetjmp--\x3eloop"}),"\n",(0,s.jsx)(r.mermaid,{value:"graph TB\nloop--\x3eResetLatch--\x3e|\u5904\u7406\u4fe1\u53f7\u5305\u62ec\u9000\u51faBgWriter\u8fdb\u7a0b|HandleMainLoopInterrupts--\x3eBgBufferSync--\x3epgstat_report_bgwriter--\x3eFirstCallSinceLastCheckpoint--\x3eWaitLatch--\x3e|\u5904\u7406\u78c1\u76d8\u8bf7\u6c42|loop"}),"\n",(0,s.jsx)(r.p,{children:"sigsetjmp\u4f1a\u4fdd\u5b58\u76ee\u524d\u5806\u6808\u73af\u5883\uff0c\u7136\u540e\u5c06\u76ee\u524d\u7684\u5730\u5740\u4f5c\u4e00\u4e2a\u8bb0\u53f7\u3002\u800c\u5728\u7a0b\u5e8f\u5176\u4ed6\u5730\u65b9\u8c03\u7528siglongjmp()\u65f6\u4fbf\u4f1a\u76f4\u63a5\u8df3\u5230\u8fd9\u4e2a\u8bb0\u53f7\u4f4d\u7f6e\uff0c\u7136\u540e\u8fd8\u539f\u5806\u6808\uff0c\u7ee7\u7eed\u7a0b\u5e8f\u7684\u6267\u884c\u3002 \u8fd4\u56de0\u65f6\u4ee3\u8868\u5df2\u7ecf\u505a\u597d\u8bb0\u53f7\u4e0a\uff0c\u82e5\u8fd4\u56de\u975e0\u5219\u4ee3\u8868\u7531siglongjmp\uff08\uff09\u8df3\u8f6c\u56de\u6765\u3002"}),"\n",(0,s.jsx)(r.h3,{id:"\u5199\u6587\u4ef6",children:"\u5199\u6587\u4ef6"}),"\n",(0,s.jsx)(r.mermaid,{value:"graph TB\nBgBufferSync--\x3eSyncOneBuffer--\x3eFlushBuffer--\x3e|\u5199xlog\u6587\u4ef6|XLogFlush--\x3eXLogWrite--\x3eXLogFileInit--\x3eXLogFileOpen--\x3epg_pwrite\nFlushBuffer--\x3e|\u5199\u6570\u636e\u6587\u4ef6|smgropen--\x3esmgrwrite"}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}}}]);