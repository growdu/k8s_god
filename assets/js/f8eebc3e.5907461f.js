"use strict";(self.webpackChunkk_8_s_god=self.webpackChunkk_8_s_god||[]).push([[4438],{4965:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"tools/cunit\u5355\u5143\u6d4b\u8bd5\u4f7f\u7528","title":"cunit\u5355\u5143\u6d4b\u8bd5\u4f7f\u7528","description":"\u4e0b\u8f7d\u5b89\u88c5","source":"@site/docs/tools/cunit\u5355\u5143\u6d4b\u8bd5\u4f7f\u7528.md","sourceDirName":"tools","slug":"/tools/cunit\u5355\u5143\u6d4b\u8bd5\u4f7f\u7528","permalink":"/blog/docs/tools/cunit\u5355\u5143\u6d4b\u8bd5\u4f7f\u7528","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tools/cunit\u5355\u5143\u6d4b\u8bd5\u4f7f\u7528.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"codeserver_docker","permalink":"/blog/docs/tools/codeserver_docker"},"next":{"title":"\u4e0d\u5f97\u4e0d\u4f1a\u7684\u4ee3\u7801\u6ce8\u91ca\u5de5\u5177\u2014\u2014doxygen","permalink":"/blog/docs/tools/doxygen\u4f7f\u7528\u6307\u5357"}}');var i=t(74848),r=t(28453);const c={},d="cunit\u5355\u5143\u6d4b\u8bd5\u4f7f\u7528",l={},o=[{value:"\u4e0b\u8f7d\u5b89\u88c5",id:"\u4e0b\u8f7d\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u8fd0\u884c\u5355\u5143\u6d4b\u8bd5",id:"\u8fd0\u884c\u5355\u5143\u6d4b\u8bd5",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"cunit\u5355\u5143\u6d4b\u8bd5\u4f7f\u7528",children:"cunit\u5355\u5143\u6d4b\u8bd5\u4f7f\u7528"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4e0b\u8f7d\u5b89\u88c5",children:"\u4e0b\u8f7d\u5b89\u88c5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"wget https://gigenet.dl.sourceforge.net/project/cunit/CUnit/2.1-3/CUnit-2.1-3.tar.bz2\ncd CUnit-2.1-3\n./bootstrap\n./configure\nmake -j 8\nmake install\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,i.jsx)(n.p,{children:"cunit\u5b89\u88c5\u6d4b\u8bd5\u6ce8\u518c\u8868\uff0c\u6d4b\u8bd5\u5957\uff0c\u6d4b\u8bd5\u7528\u4f8b\u4e09\u4e2a\u5c42\u7ea7\u6765\u7ba1\u7406\u5355\u5143\u6d4b\u8bd5\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u4e00\u4e2a\u9879\u76ee\u5bf9\u5e94\u4e00\u4e2a\u6d4b\u8bd5\u6ce8\u518c\u8868\uff0c\u4e00\u4e2a\u6d4b\u8bd5\u5957\u5bf9\u5e94\u4e00\u4e2ac\u6587\u4ef6\uff0c\u4e00\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u5bf9\u5e94\u4e00\u4e2a\u6d4b\u8bd5\u51fd\u6570\u3002\u5f53\u7136\u4e00\u4e2ac\u51fd\u6570\u53ef\u80fd\u4f1a\u6709\u591a\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"                  Test Registry\n                        |\n         ------------------------------\n         |                            |\n      Suite '1'      . . . .       Suite 'N'\n         |                            |\n   ---------------             ---------------\n   |             |             |             |\nTest '11' ... Test '1M'     Test 'N1' ... Test 'NM'\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5404\u4e2a\u6d4b\u8bd5\u6ce8\u518c\u5230\u5957\u4ef6\uff08Suite\uff09\u4e2d\uff0c\u5e76\u5728\u6d3b\u52a8\u7684\u6d4b\u8bd5\u6ce8\u518c\u8868\u4e2d\u6ce8\u518c\u3002\u5957\u4ef6\u53ef\u4ee5\u5177\u6709\u8bbe\u7f6e\uff08setup\uff09\u548c\u62c6\u5378\uff08teardown\uff09\u529f\u80fd\uff0c\u53ef\u4ee5\u5728\u8fd0\u884c\u5957\u4ef6\u7684\u6d4b\u8bd5\u4e4b\u524d\u548c\u7ed3\u675f\u4e4b\u540e\u81ea\u52a8\u8c03\u7528\u5b83\u4eec\u3002\u6ce8\u518c\u8868\u4e2d\u7684\u6240\u6709\u5957\u4ef6/\u6d4b\u8bd5\u90fd\u53ef\u4ee5\u4f7f\u7528\u5355\u4e2a\u51fd\u6570\u8c03\u7528\u6765\u8fd0\u884c\uff0c\u6216\u8005\u4e5f\u53ef\u4ee5\u8fd0\u884c\u9009\u5b9a\u7684\u5957\u4ef6\u6216\u6d4b\u8bd5\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528CUnit\u6846\u67b6\u7684\u5178\u578b\u6b65\u9aa4\u5e8f\u5217\u4e3a\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u5199\u6d4b\u8bd5\u529f\u80fd\u65b9\u6cd5(\u5e76\u5728\u5fc5\u8981\u65f6\u8fdb\u884c\u5957\u4ef6(Suite)\u521d\u59cb\u5316/\u6e05\u9664)"}),"\n",(0,i.jsxs)(n.li,{children:["\u521d\u59cb\u5316\u6d4b\u8bd5\u6ce8\u518c\u8868:",(0,i.jsx)(n.code,{children:"CU_initialize_registry()"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u5c06\u5957\u4ef6\u6dfb\u52a0\u5230\u6d4b\u8bd5\u6ce8\u518c\u8868:",(0,i.jsx)(n.code,{children:"CU_add_suite()"}),",\u53ef\u4ee5\u8c03\u7528\u591a\u6b21\u6dfb\u52a0\u591a\u4e2a\u6d4b\u8bd5\u5957\u4ef6"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5c06\u6d4b\u8bd5\u6dfb\u52a0\u5230\u5957\u4ef6:",(0,i.jsx)(n.code,{children:"CU_add_test()"}),"\uff0c\u6bcf\u4e2a\u6d4b\u8bd5\u5957\u4ef6\u90fd\u53ef\u4ee5\u8c03\u7528\u591a\u6b21\u6dfb\u52a0\u591a\u4e2a\u6d4b\u8bd5"]}),"\n",(0,i.jsxs)(n.li,{children:["\u4f7f\u7528\u9002\u5f53\u7684\u754c\u9762\u8fd0\u884c\u6d4b\u8bd5\uff0c\u4f8b\u5982:",(0,i.jsx)(n.code,{children:"CU_console_run_tests"}),"\u6216\u8005",(0,i.jsx)(n.code,{children:"CU_automated_run_tests"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u6e05\u7406\u6d4b\u8bd5\u6ce8\u518c\u8868:",(0,i.jsx)(n.code,{children:"CU_cleanup_registry"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8fd0\u884c\u5355\u5143\u6d4b\u8bd5",children:"\u8fd0\u884c\u5355\u5143\u6d4b\u8bd5"}),"\n",(0,i.jsx)(n.p,{children:"CUnit\u652f\u6301\u5728\u6240\u6709\u6ce8\u518c\u7684\u5957\u4ef6\u4e2d\u8fd0\u884c\u6240\u6709\u6d4b\u8bd5\uff0c\u4f46\u662f\u4e5f\u53ef\u4ee5\u8fd0\u884c\u5355\u4e2a\u6d4b\u8bd5\u6216\u5957\u4ef6\u3002\u5728\u6bcf\u6b21\u8fd0\u884c\u671f\u95f4\uff0c\u6846\u67b6\u90fd\u4f1a\u8ddf\u8e2a\u8fd0\u884c\uff0c\u901a\u8fc7\u548c\u5931\u8d25\u7684\u5957\u4ef6\uff0c\u6d4b\u8bd5\u548c\u65ad\u8a00\u7684\u6570\u91cf\u3002\u8bf7\u6ce8\u610f\uff0c\u6bcf\u6b21\u542f\u52a8\u6d4b\u8bd5\u8fd0\u884c\u65f6\u90fd\u4f1a\u6e05\u9664\u7ed3\u679c\uff08\u5373\u4f7f\u5931\u8d25\uff09\u3002\n\u5c3d\u7ba1CUnit\u4e3a\u8fd0\u884c\u5957\u4ef6\u548c\u6d4b\u8bd5\u63d0\u4f9b\u4e86\u539f\u59cb\u529f\u80fd\uff0c\u4f46\u5927\u591a\u6570\u7528\u6237\u5c06\u5e0c\u671b\u4f7f\u7528\u7b80\u5316\u7684\u7528\u6237\u754c\u9762\u4e4b\u4e00\u3002\u8fd9\u4e9b\u754c\u9762\u5904\u7406\u4e0e\u6846\u67b6\u4ea4\u4e92\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5e76\u4e3a\u7528\u6237\u63d0\u4f9b\u6d4b\u8bd5\u8be6\u7ec6\u4fe1\u606f\u548c\u7ed3\u679c\u7684\u8f93\u51fa\u3002"}),"\n",(0,i.jsx)(n.p,{children:"cunit\u652f\u6301\u56db\u79cd\u6d4b\u8bd5\u6a21\u5f0f\uff1a"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u6d4b\u8bd5\u6a21\u5f0f"}),(0,i.jsx)(n.th,{children:"\u5e73\u53f0"}),(0,i.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Automated"}),(0,i.jsx)(n.td,{children:"all"}),(0,i.jsx)(n.td,{children:"\u975e\u4ea4\u4e92\u6a21\u5f0f\uff0c\u6d4b\u8bd5\u62a5\u544a\u8f93\u51fa\u5230XML\u6587\u4ef6"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Basic"}),(0,i.jsx)(n.td,{children:"all"}),(0,i.jsx)(n.td,{children:"\u975e\u4ea4\u4e92\u6a21\u5f0f\uff0c\u6d4b\u8bd5\u62a5\u544a\u8f93\u51fastdout"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Console"}),(0,i.jsx)(n.td,{children:"all"}),(0,i.jsx)(n.td,{children:"\u63a7\u5236\u53f0\u4e0b\u7684\u4ea4\u4e92\u6a21\u5f0f"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Curses"}),(0,i.jsx)(n.td,{children:"Linux/Unix"}),(0,i.jsx)(n.td,{children:"curses\u7684\u4ea4\u4e92\u6a21\u5f0f"})]})]})]}),"\n",(0,i.jsx)(n.h1,{id:"reference",children:"reference"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://blog.csdn.net/iuices/article/details/115280751",children:"https://blog.csdn.net/iuices/article/details/115280751"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var s=t(96540);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);