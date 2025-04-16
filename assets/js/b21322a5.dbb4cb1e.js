"use strict";(self.webpackChunkk_8_s_god=self.webpackChunkk_8_s_god||[]).push([[9657],{28453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>d});var t=r(96540);const n={},c=t.createContext(n);function o(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(c.Provider,{value:s},e.children)}},47272:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>p,contentTitle:()=>d,default:()=>l,frontMatter:()=>o,metadata:()=>t,toc:()=>i});const t=JSON.parse('{"id":"pgsql/executor/PostgreSQL\u7684insert\u8bed\u53e5\u6267\u884c\u8fc7\u7a0b\u5206\u6790 - \u58a8\u5929\u8f6e","title":"PostgreSQL\u7684insert\u8bed\u53e5\u6267\u884c\u8fc7\u7a0b\u5206\u6790 - \u58a8\u5929\u8f6e","description":"\u9996\u9875 / PostgreSQL\u7684insert\u8bed\u53e5\u6267\u884c\u8fc7\u7a0b\u5206\u6790","source":"@site/docs/pgsql/executor/PostgreSQL\u7684insert\u8bed\u53e5\u6267\u884c\u8fc7\u7a0b\u5206\u6790 - \u58a8\u5929\u8f6e.md","sourceDirName":"pgsql/executor","slug":"/pgsql/executor/PostgreSQL\u7684insert\u8bed\u53e5\u6267\u884c\u8fc7\u7a0b\u5206\u6790 - \u58a8\u5929\u8f6e","permalink":"/blog/docs/pgsql/executor/PostgreSQL\u7684insert\u8bed\u53e5\u6267\u884c\u8fc7\u7a0b\u5206\u6790 - \u58a8\u5929\u8f6e","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/pgsql/executor/PostgreSQL\u7684insert\u8bed\u53e5\u6267\u884c\u8fc7\u7a0b\u5206\u6790 - \u58a8\u5929\u8f6e.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"code-server\u8c03\u8bd5postgresql","permalink":"/blog/docs/pgsql/debug/code-server\u8c03\u8bd5postgresql"},"next":{"title":"pg\u6269\u5c55\u5f00\u53d1","permalink":"/blog/docs/pgsql/extension/pgsql\u6269\u5c55"}}');var n=r(74848),c=r(28453);const o={},d=void 0,p={},i=[{value:"\u4e00\u3001gdb\u589e\u52a0\u65ad\u70b9",id:"\u4e00gdb\u589e\u52a0\u65ad\u70b9",level:2},{value:"\u4e8c\u3001\u6267\u884c\u5230exec_simple_query()",id:"\u4e8c\u6267\u884c\u5230exec_simple_query",level:2},{value:"\u4e09\u3001\u6267\u884c\u5230ProcessQuery()",id:"\u4e09\u6267\u884c\u5230processquery",level:2},{value:"\u56db\u3001\u6267\u884c\u5230standard_ExecutorRun()",id:"\u56db\u6267\u884c\u5230standard_executorrun",level:2}];function a(e){const s={a:"a",br:"br",h2:"h2",img:"img",p:"p",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://www.modb.pro/",children:"\u9996\u9875"})," / PostgreSQL\u7684insert\u8bed\u53e5\u6267\u884c\u8fc7\u7a0b\u5206\u6790"]}),"\n",(0,n.jsx)(s.p,{children:"\u5728\u6570\u636e\u5e93\u7684\u4f7f\u7528\u4e2d\uff0c\u589e\u5220\u6539\u67e5\u8fd9\u79cd\u64cd\u4f5c\u6bcf\u5929\u90fd\u5728\u8fdb\u884c\uff0c\u672c\u6587\u901a\u8fc7gdb\u5de5\u5177\u6f14\u793a\u4e86\u4e00\u4e2ainsert\u8bed\u53e5\u7684\u6267\u884c\u6d41\u7a0b\u3002"}),"\n",(0,n.jsx)(s.h2,{id:"\u4e00gdb\u589e\u52a0\u65ad\u70b9",children:"\u4e00\u3001gdb\u589e\u52a0\u65ad\u70b9"}),"\n",(0,n.jsxs)(s.p,{children:["\u5f00\u542f\u4e00\u4e2asession\uff0c\u83b7\u53d6pid",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.img,{src:"https://oss-emcsprod-public.modb.pro/image/editor/20220317-8c15d175-355d-4961-bc32-f1d5f083d61b.png",alt:"1647521753323.png"})]}),"\n",(0,n.jsx)(s.p,{children:"\u53e6\u5f00\u4e00\u4e2a\u7a97\u53e3\uff0c\u7528gdb\u8fdb\u5165\u8c03\u8bd5\u72b6\u6001"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://oss-emcsprod-public.modb.pro/image/editor/20220317-a2dd72ae-eb96-4992-b039-ad7b23a62243.png",alt:"1647521868566.png"})}),"\n",(0,n.jsx)(s.p,{children:"\u6570\u636e\u5e93\u7aef\u6267\u884c\u63d2\u5165\u64cd\u4f5c\uff0c\u56e0\u4e3agdb\u7ed1\u5b9a\u4e86pid\uff0c\u4f1a\u5361\u4f4f\uff0c\u76f4\u5230\u968f\u7740gdb\u7684\u8c03\u8bd5\u8fc7\u7a0b\uff0c\u6267\u884c\u5230\u771f\u6b63\u63d2\u5165\u52a8\u4f5c\u7684\u51fd\u6570"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://oss-emcsprod-public.modb.pro/image/editor/20220317-36fa239e-33e1-4322-9540-16d7ec7768d6.png",alt:"1647521904969.png"})}),"\n",(0,n.jsxs)(s.p,{children:["\u6211\u5728gdb\u7aef\u52a0\u4e86\u603b\u5171\u56db\u4e2a\u65ad\u70b9",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.img,{src:"https://oss-emcsprod-public.modb.pro/image/editor/20220317-c71bd980-53b2-4453-98c2-4f86f12576aa.png",alt:"1647524623688.png"})]}),"\n",(0,n.jsx)(s.h2,{id:"\u4e8c\u6267\u884c\u5230exec_simple_query",children:"\u4e8c\u3001\u6267\u884c\u5230exec_simple_query()"}),"\n",(0,n.jsx)(s.p,{children:"\u5148\u4ece\u5f53\u524d\u4f4d\u7f6e\u5f00\u59cb\u8fde\u7eed\u8fd0\u884c\u7a0b\u5e8f\uff0c\u5230\u7b2c\u4e00\u4e2a\u65ad\u70b9\uff0c\u4ece\u4e0b\u5f80\u4e0a\u770b\u8fd0\u884c\u7684\u5806\u6808\uff1a"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://oss-emcsprod-public.modb.pro/image/editor/20220317-cd366e22-d0f3-403c-9a8c-dc7a308832cc.png",alt:"1647524767084.png"})}),"\n",(0,n.jsx)(s.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0cinsert\u52a8\u4f5c\u4ecemain()\u51fd\u6570\u5f00\u59cb\uff0c\u9996\u5148\u5230\u4e86postmaster\u8fdb\u7a0b\u5165\u53e3 PostmasterMain() \uff0c\u901a\u8fc7ServerLoop() \u76d1\u542csession\u8fde\u63a5\u5e76fork\xa0postgres\u5b50\u8fdb\u7a0b \uff0c\u7136\u540e\u7528BackendStartup()\u542f\u52a8backend\u8fdb\u7a0b \uff0c\u4e4b\u540e\u5230PostgresMain() \u5373backend\u7684\u5165\u53e3\uff0c\u901a\u8fc7\u5b50\u8fdb\u7a0bbackend\u83b7\u53d6sql\u8bed\u53e5 \uff0c\u5e76\u6700\u7ec8\u5230\u4e86exec_simple_query() \u5373SQL\u5f15\u64ce\u7684\u5165\u53e3\u3002"}),"\n",(0,n.jsxs)(s.p,{children:["\u53ef\u4ee5\u5728\u6b64\u65f6\u67e5\u770b\u4f20\u5165\u8fd9\u91cc\u7684\u53c2\u6570",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.img,{src:"https://oss-emcsprod-public.modb.pro/image/editor/20220317-ed55b892-ea44-4dd7-9853-9627b118d312.png",alt:"1647526102468.png"})]}),"\n",(0,n.jsxs)(s.p,{children:["\u5355\u6b65\u6267\u884c\uff0c\u67e5\u770b\u6267\u884c\u8fc7\u7a0b\u4e2d\u76f8\u5173\u53d8\u91cf\u7684\u503c\u3002",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.img,{src:"https://oss-emcsprod-public.modb.pro/image/editor/20220317-cf59732e-7469-410c-9634-9e9dd60e384f.png",alt:"1647526543774.png"})]}),"\n",(0,n.jsx)(s.h2,{id:"\u4e09\u6267\u884c\u5230processquery",children:"\u4e09\u3001\u6267\u884c\u5230ProcessQuery()"}),"\n",(0,n.jsxs)(s.p,{children:["c\u7ee7\u7eed\u6267\u884c\uff0c\u5728\u4e0b\u4e00\u4e2a\u65ad\u70b9\uff0c\u5373ProcessQuery()\u8fd9\u91cc\u505c\u4e0b\uff0c\u67e5\u770b\u5806\u6808\uff0c\u53ef\u4ee5\u770b\u5230\u8fd9\u4e00\u90e8\u5206\u8dd1\u5230\u4e86PortalRun()\u7684\u5165\u53e3\uff0cPortal\u662f\u67e5\u8be2\u6267\u884c\u5668\u7684\u56db\u4e2a\u4e3b\u8981\u5b50\u6a21\u5757\u4e4b\u4e00\uff0c\u4e5f\u901a\u5e38\u88ab\u53eb\u505a\u7b56\u7565\u9009\u62e9\u6a21\u5757\uff0c\u5728\u8fd9\u9009\u62e9\u6267\u884c\u7b56\u7565\u540e\uff0c\u4f1a\u5c06\u63a7\u5236\u6d41\u7a0b\u4ea4\u7ed9\u76f8\u5e94\u7684\u5904\u7406\u90e8\u4ef6\uff0c\u5373Executer\u6216\u8005ProcessUtility\u3002\u8fd9\u91cc\u6839\u636e\u7b56\u7565\u8c03\u7528\u4e86PortalRunMulti() \uff0c\u6700\u540e\u5230\u8fbe\u4e86ProcessQuery()\u3002",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.img,{src:"https://oss-emcsprod-public.modb.pro/image/editor/20220317-5a13168a-cb85-4034-99c5-5c6a95b35586.png",alt:"1647527251161.png"})]}),"\n",(0,n.jsxs)(s.p,{children:["\u6211\u4eec\u7ee7\u7eed\u5355\u6b65\u6267\u884c\uff0cProcessQuery()\u5728\u8fd9\u4e00\u90e8\u5206\u521b\u5efaQueryDesc\uff0c\u5b83\u5c01\u88c5\u4e86\u6267\u884c\u5668\u6267\u884c\u67e5\u8be2\u6240\u9700\u7684\u6240\u6709\u5185\u5bb9 \uff0c\u8c03\u7528ExecutorStart\u51fd\u6570\u521d\u59cb\u5316\u7ed3\u6784\u4f53EState \uff0cExecutorStart\u51fd\u6570\u8c03\u7528InitPlan\u521d\u59cb\u5316\u8ba1\u5212\u72b6\u6001\u6811 \u3002",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.img,{src:"https://oss-emcsprod-public.modb.pro/image/editor/20220317-886be156-2136-4e05-bfc9-d91b732e65f5.png",alt:"1647529515600.png"})]}),"\n",(0,n.jsxs)(s.p,{children:["\u8fd9\u4e00\u90e8\u5206\u6267\u884c\u6d41\u7a0b\u8fc7\u7a0b\u5982\u9ec4\u8272\u6240\u793a\uff1a",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.img,{src:"https://oss-emcsprod-public.modb.pro/image/editor/20220317-177acdd1-9ba8-4f8f-a274-81fbe4406123.png",alt:"1647528024796.png"})]}),"\n",(0,n.jsx)(s.h2,{id:"\u56db\u6267\u884c\u5230standard_executorrun",children:"\u56db\u3001\u6267\u884c\u5230standard_ExecutorRun()"}),"\n",(0,n.jsxs)(s.p,{children:["\u7ee7\u7eedc\u6267\u884c\uff0c\u5230\u4e86standard_ExecutorRun(),\u8fd9\u91cc\u662f\u5148\u901a\u8fc7ExecutorRun ()\u8fd9\u91cc\u8fdb\u884c\u5224\u65ad\uff0c\u5982\u679c\u6709hook\u51fd\u6570\uff0c\u5c31\u6267\u884chook\u51fd\u6570\uff0c\u6ca1\u6709\u7684\u8bdd\uff0c\u6267\u884c\u6807\u51c6\u51fd\u6570standard_ExecutorRun()\u3002\uff08\u6bd4\u8f83\u5178\u578b\u7684\u4f7f\u7528hook\u7684\u662fpg_show_plans\u63d2\u4ef6\uff09",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.img,{src:"https://oss-emcsprod-public.modb.pro/image/editor/20220317-e2392436-152d-401b-b244-cb477ab9b826.png",alt:"1647530334528.png"})]}),"\n",(0,n.jsxs)(s.p,{children:["\u7ee7\u7eed\u6267\u884c\uff0c\u6700\u540e\u901a\u8fc7standard_ExecutorRun()\u7684ExecutePlan()\u6267\u884cinsert\u5e76\u901a\u8fc7MemoryContextSwitchTo()\u5207\u6362\u56de\u539f\u5185\u5b58\u4e0a\u4e0b\u6587\u3002",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.img,{src:"https://oss-emcsprod-public.modb.pro/image/editor/20220317-01d70778-e2f6-4f0d-92aa-0358ed876a85.png",alt:"1647530791018.png"})]}),"\n",(0,n.jsx)(s.p,{children:"c\u7ee7\u7eed\u6267\u884c\u4e00\u76f4\u5230\u7ed3\u675f"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://oss-emcsprod-public.modb.pro/image/editor/20220317-42fd5fa9-cc6f-403e-b0d5-b8cad70a011f.png",alt:"1647531040313.png"})}),"\n",(0,n.jsxs)(s.p,{children:["\u53ef\u4ee5\u5728\u6570\u636e\u5e93\u7aef\u770b\u5230\u6570\u636e\u6210\u529f\u63d2\u5165",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.img,{src:"https://oss-emcsprod-public.modb.pro/image/editor/20220317-4b8aec1a-3234-4b73-b88e-0132fd709a51.png",alt:"1647531072246.png"})]}),"\n",(0,n.jsxs)(s.p,{children:["\u6574\u4e2a\u63d2\u5165\u52a8\u4f5c\u7684\u5806\u6808\u5982\u4e0b\uff1a",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.img,{src:"https://oss-emcsprod-public.modb.pro/image/editor/20220317-e445f37b-3c07-4d91-97c1-773fdf54942f.png",alt:"1647531572570.png"})]}),"\n",(0,n.jsx)(s.p,{children:"\u6700\u540e\u4fee\u6539\u65f6\u95f4\uff1a2022-03-17 23:57:09"}),"\n",(0,n.jsxs)(s.p,{children:["\u3010\u7248\u6743\u58f0\u660e\u3011\u672c\u6587\u4e3a\u58a8\u5929\u8f6e\u7528\u6237\u539f\u521b\u5185\u5bb9\uff0c\u8f6c\u8f7d\u65f6\u5fc5\u987b\u6807\u6ce8\u6587\u7ae0\u7684\u6765\u6e90\uff08\u58a8\u5929\u8f6e\uff09\uff0c\u6587\u7ae0\u94fe\u63a5\uff0c\u6587\u7ae0\u4f5c\u8005\u7b49\u57fa\u672c\u4fe1\u606f\uff0c\u5426\u5219\u4f5c\u8005\u548c\u58a8\u5929\u8f6e\u6709\u6743\u8ffd\u7a76\u8d23\u4efb\u3002\u5982\u679c\u60a8\u53d1\u73b0\u58a8\u5929\u8f6e\u4e2d\u6709\u6d89\u5acc\u6284\u88ad\u6216\u8005\u4fb5\u6743\u7684\u5185\u5bb9\uff0c\u6b22\u8fce\u53d1\u9001\u90ae\u4ef6\u81f3\uff1a",(0,n.jsx)(s.a,{href:"mailto:contact@modb.pro",children:"contact@modb.pro"}),"\u8fdb\u884c\u4e3e\u62a5\uff0c\u5e76\u63d0\u4f9b\u76f8\u5173\u8bc1\u636e\uff0c\u4e00\u7ecf\u67e5\u5b9e\uff0c\u58a8\u5929\u8f6e\u5c06\u7acb\u523b\u5220\u9664\u76f8\u5173\u5185\u5bb9\u3002"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://js-cdn.modb.cc/image/svgs/likes.png",alt:""})}),"\n",(0,n.jsx)(s.p,{children:"\u83b7\u5f97\u4e86217\u6b21\u70b9\u8d5e"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://js-cdn.modb.cc/image/svgs/comment.png",alt:""})}),"\n",(0,n.jsx)(s.p,{children:"\u5185\u5bb9\u83b7\u5f9758\u6b21\u8bc4\u8bba"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://js-cdn.modb.cc/image/svgs/star.png",alt:""})}),"\n",(0,n.jsx)(s.p,{children:"\u83b7\u5f97\u4e86212\u6b21\u6536\u85cf"})]})}function l(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}}}]);