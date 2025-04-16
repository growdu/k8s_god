"use strict";(self.webpackChunkk_8_s_god=self.webpackChunkk_8_s_god||[]).push([[9452],{12469:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>t,toc:()=>i});const t=JSON.parse('{"id":"base/sql","title":"sql\u603b\u7ed3","description":"union \u4e0eunion all","source":"@site/docs/base/sql.md","sourceDirName":"base","slug":"/base/sql","permalink":"/blog/docs/base/sql","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/base/sql.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"shell","permalink":"/blog/docs/base/shell"},"next":{"title":"<center>\u5b57\u7b26\u4e32\u64cd\u4f5c</center>","permalink":"/blog/docs/base/string"}}');var l=s(74848),o=s(28453);const c={},r="sql\u603b\u7ed3",a={},i=[{value:"union \u4e0eunion all",id:"union-\u4e0eunion-all",level:2},{value:"select 0",id:"select-0",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"sql\u603b\u7ed3",children:"sql\u603b\u7ed3"})}),"\n",(0,l.jsx)(n.h2,{id:"union-\u4e0eunion-all",children:"union \u4e0eunion all"}),"\n",(0,l.jsx)(n.p,{children:"\u7ed3\u8bba\uff1aunion all\u7684\u6027\u80fd\u5927\u7ea6\u662funion\u7684\u597d\u51e0\u500d\u3002"}),"\n",(0,l.jsx)(n.p,{children:"union\u5728\u8fdb\u884c\u8868\u94fe\u63a5\u540e\u4f1a\u7b5b\u9009\u6389\u91cd\u590d\u7684\u8bb0\u5f55\uff0c\u6240\u4ee5\u5728\u8868\u94fe\u63a5\u540e\u4f1a\u5bf9\u6240\u4ea7\u751f\u7684\u7ed3\u679c\u96c6\u8fdb\u884c\u6392\u5e8f\u8fd0\u7b97\uff0c\u5220\u9664\u91cd\u590d\u7684\u8bb0\u5f55\u518d\u8fd4\u56de\u7ed3\u679c\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select * from test_union1    \n\t  union  \nselect * from test_union2\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u4e2aSQL\u5728\u8fd0\u884c\u65f6\u5148\u53d6\u51fa\u4e24\u4e2a\u8868\u7684\u7ed3\u679c\uff0c\u518d\u7528\u6392\u5e8f\u7a7a\u95f4\u8fdb\u884c\u6392\u5e8f\u5220\u9664\u91cd\u590d\u7684\u8bb0\u5f55\uff0c\u6700\u540e\u8fd4\u56de\u7ed3\u679c\u96c6\uff0c\u5982\u679c\u8868\u6570\u636e\u91cf\u5927\u7684\u8bdd\u53ef\u80fd\u4f1a\u5bfc\u81f4\u7528\u78c1\u76d8\u8fdb\u884c\u6392\u5e8f\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u800cunion all\u53ea\u662f\u7b80\u5355\u7684\u5c06\u4e24\u4e2a\u7ed3\u679c\u5408\u5e76\u540e\u5c31\u8fd4\u56de\u3002\u8fd9\u6837\uff0c\u5982\u679c\u8fd4\u56de\u7684\u4e24\u4e2a\u7ed3\u679c\u96c6\u4e2d\u6709\u91cd\u590d\u7684\u6570\u636e\uff0c\u90a3\u4e48\u8fd4\u56de\u7684\u7ed3\u679c\u96c6\u5c31\u4f1a\u5305\u542b\u91cd\u590d\u7684\u6570\u636e\u4e86\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528 union \u7ec4\u5408\u67e5\u8be2\u7684\u7ed3\u679c\u96c6\u6709\u4e24\u4e2a\u6700\u57fa\u672c\u7684\u89c4\u5219\uff1a"}),"\n",(0,l.jsx)(n.p,{children:"1.\u6240\u6709\u67e5\u8be2\u4e2d\u7684\u5217\u6570\u548c\u5217\u7684\u987a\u5e8f\u5fc5\u987b\u76f8\u540c\u3002"}),"\n",(0,l.jsx)(n.p,{children:"2.\u6570\u636e\u7c7b\u578b\u5fc5\u987b\u517c\u5bb9"}),"\n",(0,l.jsx)(n.h2,{id:"select-0",children:"select 0"}),"\n",(0,l.jsx)(n.p,{children:"\u5f53\u6211\u4eec\u53ea\u5173\u5fc3\u6570\u636e\u8868\u6709\u591a\u5c11\u8bb0\u5f55\u884c\u800c\u4e0d\u9700\u8981\u77e5\u9053\u5177\u4f53\u7684\u5b57\u6bb5\u503c\u65f6\uff0c\u7c7b\u4f3c\u201cselect 1 from tblName\u201d\u662f\u4e00\u4e2a\u5f88\u4e0d\u9519\u7684SQL\u8bed\u53e5\u5199\u6cd5\uff0c\u5b83\u901a\u5e38\u7528\u4e8e\u5b50\u67e5\u8be2\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u6837\u53ef\u4ee5\u51cf\u5c11\u7cfb\u7edf\u5f00\u9500\uff0c\u63d0\u9ad8\u8fd0\u884c\u6548\u7387\uff0c\u56e0\u4e3a\u8fd9\u6837\u5b50\u5199\u7684SQL\u8bed\u53e5\uff0c\u6570\u636e\u5e93\u5f15\u64ce\u5c31\u4e0d\u4f1a\u53bb\u68c0\u7d22\u6570\u636e\u8868\u91cc\u4e00\u6761\u6761\u5177\u4f53\u7684\u8bb0\u5f55\u548c\u6bcf\u6761\u8bb0\u5f55\u91cc\u4e00\u4e2a\u4e2a\u5177\u4f53\u7684\u5b57\u6bb5\u503c\u5e76\u5c06\u5b83\u4eec\u653e\u5230\u5185\u5b58\u91cc\uff0c\u800c\u662f\u6839\u636e\u67e5\u8be2\u5230\u6709\u591a\u5c11\u884c\u5b58\u5728\u5c31\u8f93\u51fa\u591a\u5c11\u4e2a\u201c1\u201d\uff0c\u6bcf\u4e2a\u201c1\u201d\u4ee3\u8868\u67091\u884c\u8bb0\u5f55\uff0c\u540c\u65f6\u9009\u7528\u6570\u5b571\u8fd8\u56e0\u4e3a\u5b83\u6240\u5360\u7528\u7684\u5185\u5b58\u7a7a\u95f4\u6700\u5c0f\uff0c\u5f53\u7136\u7528\u6570\u5b570\u7684\u6548\u679c\u4e5f\u4e00\u6837\u3002\u5728\u4e0d\u9700\u8981\u77e5\u9053\u5177\u4f53\u7684\u8bb0\u5f55\u503c\u662f\u4ec0\u4e48\u7684\u60c5\u51b5\u4e0b\u8fd9\u79cd\u5199\u6cd5\u65e0\u7591\u66f4\u52a0\u53ef\u53d6\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"--\u5e38\u89c4\u5199\u6cd5\nselect class,count (*) as pax from students \ngroup by class;\n\n--select 0\n\nselect class,count (1) as pax from students \ngroup by class;\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var t=s(96540);const l={},o=t.createContext(l);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);