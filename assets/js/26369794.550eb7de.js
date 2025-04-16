"use strict";(self.webpackChunkk_8_s_god=self.webpackChunkk_8_s_god||[]).push([[8595],{28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var r=n(96540);const c={},t=r.createContext(c);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(t.Provider,{value:s},e.children)}},89353:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"linux/\u94f6\u6cb3\u9e92\u9e9fV10 \u8fdc\u7a0b\u684c\u9762_\u94f6\u6cb3\u9e92\u9e9fv10\u8fdc\u7a0b\u684c\u9762-CSDN\u535a\u5ba2","title":"\u94f6\u6cb3\u9e92\u9e9fV10 \u8fdc\u7a0b\u684c\u9762_\u94f6\u6cb3\u9e92\u9e9fv10\u8fdc\u7a0b\u684c\u9762-CSDN\u535a\u5ba2","description":"\u5b89\u88c5","source":"@site/docs/linux/\u94f6\u6cb3\u9e92\u9e9fV10 \u8fdc\u7a0b\u684c\u9762_\u94f6\u6cb3\u9e92\u9e9fv10\u8fdc\u7a0b\u684c\u9762-CSDN\u535a\u5ba2.md","sourceDirName":"linux","slug":"/linux/\u94f6\u6cb3\u9e92\u9e9fV10 \u8fdc\u7a0b\u684c\u9762_\u94f6\u6cb3\u9e92\u9e9fv10\u8fdc\u7a0b\u684c\u9762-CSDN\u535a\u5ba2","permalink":"/blog/docs/linux/\u94f6\u6cb3\u9e92\u9e9fV10 \u8fdc\u7a0b\u684c\u9762_\u94f6\u6cb3\u9e92\u9e9fv10\u8fdc\u7a0b\u684c\u9762-CSDN\u535a\u5ba2","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/linux/\u94f6\u6cb3\u9e92\u9e9fV10 \u8fdc\u7a0b\u684c\u9762_\u94f6\u6cb3\u9e92\u9e9fv10\u8fdc\u7a0b\u684c\u9762-CSDN\u535a\u5ba2.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u89e3\u51b3SSH\u8fde\u63a5Linux\u8d85\u65f6\u81ea\u52a8\u65ad\u5f00","permalink":"/blog/docs/linux/\u89e3\u51b3SSH\u8fde\u63a5Linux\u8d85\u65f6\u81ea\u52a8\u65ad\u5f00"},"next":{"title":"email\u7f16\u7a0b","permalink":"/blog/docs/mail/email\u7f16\u7a0b"}}');var c=n(74848),t=n(28453);const i={},l=void 0,d={},o=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u8bbe\u7f6eVNC\u767b\u5f55\u53e3\u4ee4",id:"\u8bbe\u7f6evnc\u767b\u5f55\u53e3\u4ee4",level:3},{value:"\u767b\u5f55\u8bbf\u95ee",id:"\u767b\u5f55\u8bbf\u95ee",level:3},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:3}];function a(e){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{children:"yum install tigervnc-server tigervnc-server-module\n"})}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:"https://img-blog.csdnimg.cn/4967717af6f54d44ae22430eb2c583c1.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})}),"\n",(0,c.jsx)(s.p,{children:"\u521b\u5efa\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{children:"vi /etc/systemd/system/vncserver@.service\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u5199\u5165\u4e00\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{children:"[Unit]\nDescription=Remote desktop service (VNC)\nAfter=syslog.target network.target\n\n[Service]\nType=forking\nWorkingDirectory=/root\nUser=root\nExecStartPre=/bin/sh -c '/usr/bin/vncserver -kill %i > /dev/null 2>&1 || :'\nExecStart=/usr/bin/vncserver %i -geometry 1920x1080\nExecStop=/usr/bin/vncserver -kill %i\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u91cd\u65b0\u52a0\u8f7d"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{children:"systemctl daemon-reload\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u542f\u52a8",(0,c.jsx)(s.a,{href:"https://so.csdn.net/so/search?q=VNC&spm=1001.2101.3001.7020",children:"VNC"}),"\u670d\u52a1"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{children:"systemctl start vncserver@:1.service\n"})}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"vncserver@:1"}),"\u7684",(0,c.jsx)(s.code,{children:"1"}),"\u8868\u793a\u542f\u52a8VNC\u684c\u9762id\uff0cVNC\u9ed8\u8ba4\u7aef\u53e3\u4e3a5900,",(0,c.jsx)(s.code,{children:"1"}),"\u914d\u7f6eVNC\u542f\u52a8\u7684\u7aef\u53e3\u4e3a\uff1a",(0,c.jsx)(s.code,{children:"5901"})]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\u67e5\u770b\u542f\u52a8\u72b6\u6001"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{children:"systemctl status vncserver@:1.service\n"})}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:"https://img-blog.csdnimg.cn/e40c747872694f949b0517618eb6a28f.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2xpdmVuX2tlbg==,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})}),"\n",(0,c.jsx)(s.p,{children:"\u8bbe\u7f6eVNC\u5f00\u673a\u542f\u52a8"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{children:"systemctl enable vncserver@:1.service\n"})}),"\n",(0,c.jsx)(s.h3,{id:"\u8bbe\u7f6evnc\u767b\u5f55\u53e3\u4ee4",children:"\u8bbe\u7f6eVNC\u767b\u5f55\u53e3\u4ee4"}),"\n",(0,c.jsx)(s.p,{children:"\u8fd0\u884c\u547d\u4ee4\u7136\u540e\u8f93\u5165\u53e3\u4ee4\uff0c\u5e76\u4e14\u786e\u8ba4\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{children:"vncpasswd\n"})}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:"https://img-blog.csdnimg.cn/8b82943f2c2e49129035b7a22377dc1d.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})}),"\n",(0,c.jsx)(s.h3,{id:"\u767b\u5f55\u8bbf\u95ee",children:"\u767b\u5f55\u8bbf\u95ee"}),"\n",(0,c.jsx)(s.p,{children:"\u4e0b\u8f7dVNC Windows\u5ba2\u6237\u7aef"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"TigerVNC"}),": ",(0,c.jsx)(s.a,{href:"https://github.com/TigerVNC/tigervnc/releases",children:"https://github.com/TigerVNC/tigervnc/releases"})]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["\u70b9\u51fbRelease\u4e2d\u7684SourceForge\u94fe\u63a5\uff1a",(0,c.jsx)(s.br,{}),"\n",(0,c.jsx)(s.img,{src:"https://img-blog.csdnimg.cn/f51b1b7b0f224271ba1c7b37d3656294.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2xpdmVuX2tlbg==,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),(0,c.jsx)(s.br,{}),"\n","\u70b9\u51fb\u4e0b\u8f7d",(0,c.jsx)(s.br,{}),"\n",(0,c.jsx)(s.img,{src:"https://img-blog.csdnimg.cn/b73404c9ce044e668f6208d937ab1d9b.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2xpdmVuX2tlbg==,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})]}),"\n",(0,c.jsx)(s.p,{children:"TigerVNC\u4e3a\u514d\u5b89\u88c5\u8f6f\u4ef6\uff0c\u4e0b\u8f7d\u540e\u53cc\u51fb\u542f\u52a8\u5373\u53ef\u3002"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.img,{src:"https://img-blog.csdnimg.cn/e0557fde178846f38e1d216e91e004d2.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),(0,c.jsx)(s.br,{}),"\n","\u8f93\u5165IP\u548c\u7aef\u53e3\uff0c\u70b9\u51fb\u8fde\u63a5\uff0c\u7136\u540e\u8f93\u5165\u53e3\u4ee4\u5c31\u53ef\u4ee5",(0,c.jsx)(s.br,{}),"\n",(0,c.jsx)(s.img,{src:"https://img-blog.csdnimg.cn/ca6472e4816543838bb3c087a71199ee.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:"https://img-blog.csdnimg.cn/8e3d292b317b43189fae20ad38bf89dd.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQ2xpdmVuX2tlbg==,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})}),"\n",(0,c.jsx)(s.h3,{id:"\u53c2\u8003\u6587\u732e",children:"\u53c2\u8003\u6587\u732e"}),"\n",(0,c.jsxs)(s.p,{children:["[1]. ",(0,c.jsx)(s.a,{href:"https://xieshaohu.wordpress.com/2020/09/10/%E9%93%B6%E6%B2%B3%E9%BA%92%E9%BA%9Fv10%E5%90%AF%E7%94%A8vncserver/",children:"\u8c22\u90b5\u864e\u7684\u535a\u5ba2 . \u94f6\u6cb3\u9e92\u9e9fV10\u542f\u7528VNCServer . 2020.09 . https://xieshaohu.wordpress.com/2020/09/10/%E9%93%B6%E6%B2%B3%E9%BA%92%E9%BA%9Fv10%E5%90%AF%E7%94%A8vncserver/"})]})]})}function x(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}}}]);