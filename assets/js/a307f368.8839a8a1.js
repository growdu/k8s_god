"use strict";(self.webpackChunkk_8_s_god=self.webpackChunkk_8_s_god||[]).push([[9295],{16239:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});const l=JSON.parse('{"id":"cluster/kingbase/kingbase\u4e24\u5730\u4e09\u4e2d\u5fc3\u65e5\u5e38\u5de1\u68c0","title":"kingbase\u4e24\u5730\u4e09\u4e2d\u5fc3\u65e5\u5e38\u5de1\u68c0","description":"\u4e24\u5730\u4e09\u4e2d\u5fc3\u8fd0\u884c\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u9700\u8981\u5b9a\u671f\u5de1\u68c0\uff0c\u89c2\u5bdf\u96c6\u7fa4\u72b6\u6001\u662f\u5426\u6b63\u5e38\uff0c\u82e5\u6709\u5f02\u5e38\uff0c\u9700\u786e\u8ba4\u5f02\u5e38\u539f\u56e0\u5e76\u53ca\u65f6\u5904\u7406\u3002","source":"@site/docs/cluster/kingbase/kingbase\u4e24\u5730\u4e09\u4e2d\u5fc3\u65e5\u5e38\u5de1\u68c0.md","sourceDirName":"cluster/kingbase","slug":"/cluster/kingbase/kingbase\u4e24\u5730\u4e09\u4e2d\u5fc3\u65e5\u5e38\u5de1\u68c0","permalink":"/blog/docs/cluster/kingbase/kingbase\u4e24\u5730\u4e09\u4e2d\u5fc3\u65e5\u5e38\u5de1\u68c0","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cluster/kingbase/kingbase\u4e24\u5730\u4e09\u4e2d\u5fc3\u65e5\u5e38\u5de1\u68c0.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"<center>\u8c03\u6574\u5141\u8bb8\u7684corosync\u7f51\u7edc\u6ce2\u52a8\u65f6\u95f4\u64cd\u4f5c\u6b65\u9aa4</center>","permalink":"/blog/docs/cluster/ha/\u8c03\u6574corosync\u7f51\u7edc\u6ce2\u52a8\u65f6\u95f4\u64cd\u4f5c\u6587\u6863"},"next":{"title":"\u4e24\u5730\u4e09\u4e2d\u5fc3","permalink":"/blog/docs/cluster/kingbase/tptc"}}');var r=s(74848),c=s(28453);const i={},o="kingbase\u4e24\u5730\u4e09\u4e2d\u5fc3\u65e5\u5e38\u5de1\u68c0",t={},a=[{value:"\u786e\u8ba4\u96c6\u7fa4\u662f\u5426\u6b63\u5e38",id:"\u786e\u8ba4\u96c6\u7fa4\u662f\u5426\u6b63\u5e38",level:2},{value:"\u786e\u8ba4\u6570\u636e\u5e93\u662f\u5426\u6b63\u5e38",id:"\u786e\u8ba4\u6570\u636e\u5e93\u662f\u5426\u6b63\u5e38",level:2},{value:"\u786e\u8ba4\u9ad8\u53ef\u7528\u7ec4\u4ef6\u662f\u5426\u6b63\u5e38",id:"\u786e\u8ba4\u9ad8\u53ef\u7528\u7ec4\u4ef6\u662f\u5426\u6b63\u5e38",level:2},{value:"\u67e5\u770b\u65e5\u5fd7\u662f\u5426\u6709\u76f8\u5173\u6545\u969c\u64cd\u4f5c\u53d1\u751f",id:"\u67e5\u770b\u65e5\u5fd7\u662f\u5426\u6709\u76f8\u5173\u6545\u969c\u64cd\u4f5c\u53d1\u751f",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"kingbase\u4e24\u5730\u4e09\u4e2d\u5fc3\u65e5\u5e38\u5de1\u68c0",children:"kingbase\u4e24\u5730\u4e09\u4e2d\u5fc3\u65e5\u5e38\u5de1\u68c0"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e24\u5730\u4e09\u4e2d\u5fc3\u8fd0\u884c\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u9700\u8981\u5b9a\u671f\u5de1\u68c0\uff0c\u89c2\u5bdf\u96c6\u7fa4\u72b6\u6001\u662f\u5426\u6b63\u5e38\uff0c\u82e5\u6709\u5f02\u5e38\uff0c\u9700\u786e\u8ba4\u5f02\u5e38\u539f\u56e0\u5e76\u53ca\u65f6\u5904\u7406\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u786e\u8ba4\u96c6\u7fa4\u662f\u5426\u6b63\u5e38",children:"\u786e\u8ba4\u96c6\u7fa4\u662f\u5426\u6b63\u5e38"}),"\n",(0,r.jsx)(n.p,{children:"\u5728observer\u8282\u70b9\u7684\u4e8c\u8fdb\u5236\u5b89\u88c5\u76ee\u5f55\u4e0b\uff0c\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u96c6\u7fa4\u7684\u72b6\u6001\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"./bin/repmgr cluster show\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5e94\u786e\u4fdd\u96c6\u7fa4\u53ea\u6709\u4e00\u4e2a\u4e3b\u5e93\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u786e\u8ba4\u6570\u636e\u5e93\u662f\u5426\u6b63\u5e38",children:"\u786e\u8ba4\u6570\u636e\u5e93\u662f\u5426\u6b63\u5e38"}),"\n",(0,r.jsx)(n.p,{children:"\u8fdb\u5165\u6570\u636e\u5e93\u8282\u70b9\u4e8c\u8fdb\u5236\u5b89\u88c5\u76ee\u5f55\u4e0b\uff0c\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u6570\u636e\u5e93\u7684\u8fd0\u884c\u72b6\u6001\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"./bin/repmgr cluster show\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u82e5\u65e0\u6cd5\u67e5\u8be2\u96c6\u7fa4\u4fe1\u606f\uff0c\u9700\u8981\u8fdb\u4e00\u6b65\u786e\u8ba4\u9ad8\u53ef\u7528\u7ec4\u4ef6\u662f\u5426\u6b63\u5e38\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u82e5\u80fd\u6b63\u5e38\u67e5\u8be2\u4fe1\u606f\uff0c\u5219\u9700\u8981\u786e\u8ba4\u6570\u636e\u5e93\u7684\u72b6\u6001\u662f\u5426\u6b63\u5e38"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u786e\u8ba4\u9ad8\u53ef\u7528\u7ec4\u4ef6\u662f\u5426\u6b63\u5e38",children:"\u786e\u8ba4\u9ad8\u53ef\u7528\u7ec4\u4ef6\u662f\u5426\u6b63\u5e38"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u786e\u8ba4kbha\u670d\u52a1\u72b6\u6001"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"./bin/repmgr service status\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u786e\u8ba4corosync\u901a\u4fe1\u662f\u5426\u6b63\u5e38"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"./corosync/sbin/corosync-quorumtool\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u9700\u786e\u8ba4Quorate\u662f\u4e0d\u662fYes\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u67e5\u770b\u65e5\u5fd7\u662f\u5426\u6709\u76f8\u5173\u6545\u969c\u64cd\u4f5c\u53d1\u751f",children:"\u67e5\u770b\u65e5\u5fd7\u662f\u5426\u6709\u76f8\u5173\u6545\u969c\u64cd\u4f5c\u53d1\u751f"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u67e5\u770bhamgr.log,\u67e5\u770b\u662f\u5426\u6709ERROR\u6216\u8005\u5207\u6362\u64cd\u4f5c"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'cat log/hamgr.log | grep -E "ERROR|promote"\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u67e5\u770bkbha.log\uff0c\u67e5\u770b\u662f\u5426\u6709ERROR\u6216\u8005stop\u64cd\u4f5c"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'cat log/kbha.log | grep -E "ERROR|stop"\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u82e5\u5b58\u5728\u5f02\u5e38\uff0c\u9700\u8981\u53d6\u5404\u4e2a\u8282\u70b9\u4e0a\u7684\u5982\u4e0b\u65e5\u5fd7\u8fdb\u884c\u5206\u6790\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"log\u4e0b\u7684\u6240\u6709\u65e5\u5fd7\u6587\u4ef6\uff08hamgr.log\u3001kbha.log\uff09"}),"\n",(0,r.jsx)(n.li,{children:"corosync/log\u4e0b\u7684\u65e5\u5fd7\u6587\u4ef6\uff08corosync.log\uff09"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var l=s(96540);const r={},c=l.createContext(r);function i(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);