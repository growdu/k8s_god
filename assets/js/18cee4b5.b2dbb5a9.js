"use strict";(self.webpackChunkk_8_s_god=self.webpackChunkk_8_s_god||[]).push([[2804],{28453:(t,n,e)=>{e.d(n,{R:()=>r,x:()=>a});var i=e(96540);const o={},s=i.createContext(o);function r(t){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function a(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),i.createElement(s.Provider,{value:n},t.children)}},71566:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"pgsql/pg_command/initdb","title":"initdb","description":"\u542f\u52a8","source":"@site/docs/pgsql/pg_command/initdb.md","sourceDirName":"pgsql/pg_command","slug":"/pgsql/pg_command/initdb","permalink":"/blog/docs/pgsql/pg_command/initdb","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/pgsql/pg_command/initdb.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Postgresql \u89e6\u53d1\u5668\u8be6\u89e3","permalink":"/blog/docs/pgsql/kernel/Postgresql\u89e6\u53d1\u5668\u8be6\u89e3"},"next":{"title":"pg_ctl","permalink":"/blog/docs/pgsql/pg_command/pg_ctl"}}');var o=e(74848),s=e(28453);const r={},a="initdb",c={},d=[{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2}];function l(t){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"initdb",children:"initdb"})}),"\n",(0,o.jsx)(n.h2,{id:"\u542f\u52a8",children:"\u542f\u52a8"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'Breakpoint 2, bootstrap_template1 () at initdb.c:1309\n1309    {\n(gdb) bt\n#0  bootstrap_template1 () at initdb.c:1309\n#1  0x0000555555560e1f in initialize_data_directory () at initdb.c:2732\n#2  0x0000555555561abd in main (argc=3, argv=0x7fffffffe318) at initdb.c:3101\n(gdb) b 1378\nBreakpoint 3 at 0x55555555e5a8: file initdb.c, line 1378.\n(gdb) c\nContinuing.\nrunning bootstrap script ...\nBreakpoint 3, bootstrap_template1 () at initdb.c:1378\n1378            PG_CMD_OPEN;\n(gdb) p cmd\n$1 = "\\"/usr/local/postgresql/bin/postgres\\" --boot -X 16777216  -F -c log_checkpoints=false  \\000\\000\\200\\214\\345\\367\\377\\177\\000\\000P\\374\\310\\367\\377\\177\\000\\000\\240\\321\\377\\377\\377\\177\\000\\000\\000\\000\\000\\000\\377\\177\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\235v\\341\\367\\377\\177\\000\\000\\225v\\341\\367\\377\\177\\000\\000`\\325\\377\\377\\377\\177\\000\\000\\247\\000\\000\\000\\000\\000\\000\\000D\\322\\377\\377\\377\\177\\000\\000\\026\\307XUUU\\000\\000\\200\\243XUUU\\000\\000=\\334\\313\\000\\b\\000\\000\\000P\\322\\377\\377\\377\\177\\000\\000"...\n(gdb)\n\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0cinitdb\u6700\u7ec8\u4f1a\u8c03\u7528postgres\u6765\u521d\u59cb\u5316\u6570\u636e\u5e93\u3002"})]})}function p(t={}){const{wrapper:n}={...(0,s.R)(),...t.components};return n?(0,o.jsx)(n,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}}}]);