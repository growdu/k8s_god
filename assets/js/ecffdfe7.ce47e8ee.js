"use strict";(self.webpackChunkk_8_s_god=self.webpackChunkk_8_s_god||[]).push([[6245],{23102:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"linux/logrotate\u673a\u5236\u8be6\u89e3","title":"logrotate\u673a\u5236\u8be6\u89e3","description":"logrotate \u662f\u4e00\u4e2a linux \u7cfb\u7edf\u65e5\u5fd7\u7684\u7ba1\u7406\u5de5\u5177\u3002\u53ef\u4ee5\u5bf9\u5355\u4e2a\u65e5\u5fd7\u6587\u4ef6\u6216\u8005\u67d0\u4e2a\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u6309\u65f6\u95f4 / \u5927\u5c0f\u8fdb\u884c\u5207\u5272\uff0c\u538b\u7f29\u64cd\u4f5c\uff1b\u6307\u5b9a\u65e5\u5fd7\u4fdd\u5b58\u6570\u91cf\uff1b\u8fd8\u53ef\u4ee5\u5728\u5207\u5272\u4e4b\u540e\u8fd0\u884c\u81ea\u5b9a\u4e49\u547d\u4ee4\u3002","source":"@site/docs/linux/logrotate\u673a\u5236\u8be6\u89e3.md","sourceDirName":"linux","slug":"/linux/logrotate\u673a\u5236\u8be6\u89e3","permalink":"/blog/docs/linux/logrotate\u673a\u5236\u8be6\u89e3","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/linux/logrotate\u673a\u5236\u8be6\u89e3.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"linux\u9501\u6307\u5317","permalink":"/blog/docs/linux/linux\u9501\u6307\u5317"},"next":{"title":"lvm\u8be6\u89e3","permalink":"/blog/docs/linux/lvm\u8be6\u89e3"}}');var r=o(74848),l=o(28453);const a={},s=void 0,i={},c=[{value:"\u8fd0\u884c\u673a\u5236",id:"\u8fd0\u884c\u673a\u5236",level:2}];function u(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"logrotate \u662f\u4e00\u4e2a linux \u7cfb\u7edf\u65e5\u5fd7\u7684\u7ba1\u7406\u5de5\u5177\u3002\u53ef\u4ee5\u5bf9\u5355\u4e2a\u65e5\u5fd7\u6587\u4ef6\u6216\u8005\u67d0\u4e2a\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u6309\u65f6\u95f4 / \u5927\u5c0f\u8fdb\u884c\u5207\u5272\uff0c\u538b\u7f29\u64cd\u4f5c\uff1b\u6307\u5b9a\u65e5\u5fd7\u4fdd\u5b58\u6570\u91cf\uff1b\u8fd8\u53ef\u4ee5\u5728\u5207\u5272\u4e4b\u540e\u8fd0\u884c\u81ea\u5b9a\u4e49\u547d\u4ee4\u3002"}),"\n",(0,r.jsx)(e.p,{children:"logrotate \u662f\u57fa\u4e8e crontab \u8fd0\u884c\u7684\uff0c\u6240\u4ee5\u8fd9\u4e2a\u65f6\u95f4\u70b9\u662f\u7531 crontab \u63a7\u5236\u7684\uff0c\u5177\u4f53\u53ef\u4ee5\u67e5\u8be2 crontab \u7684\u914d\u7f6e\u6587\u4ef6 /etc/anacrontab\u3002 \u7cfb\u7edf\u4f1a\u6309\u7167\u8ba1\u5212\u7684\u9891\u7387\u8fd0\u884c logrotate\uff0c\u901a\u5e38\u662f\u6bcf\u5929\u3002\u5728\u5927\u591a\u6570\u7684 Linux \u53d1\u884c\u7248\u672c\u4e0a\uff0c\u8ba1\u5212\u6bcf\u5929\u8fd0\u884c\u7684\u811a\u672c\u4f4d\u4e8e /etc/cron.daily/logrotate\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4e3b\u6d41 Linux \u53d1\u884c\u7248\u4e0a\u90fd\u9ed8\u8ba4\u5b89\u88c5\u6709 logrotate \u5305\uff0c\u5982\u679c\u4f60\u7684 linux \u7cfb\u7edf\u4e2d\u627e\u4e0d\u5230 logrotate, \u53ef\u4ee5\u4f7f\u7528 apt-get \u6216 yum \u547d\u4ee4\u6765\u5b89\u88c5\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u8fd0\u884c\u673a\u5236",children:"\u8fd0\u884c\u673a\u5236"}),"\n",(0,r.jsx)(e.p,{children:"logrotate \u5728\u5f88\u591a Linux \u53d1\u884c\u7248\u4e0a\u90fd\u662f\u9ed8\u8ba4\u5b89\u88c5\u7684\u3002\u7cfb\u7edf\u4f1a\u5b9a\u65f6\u8fd0\u884c logrotate\uff0c\u4e00\u822c\u662f\u6bcf\u5929\u4e00\u6b21\u3002\u7cfb\u7edf\u662f\u8fd9\u4e48\u5b9e\u73b0\u6309\u5929\u6267\u884c\u7684\u3002crontab \u4f1a\u6bcf\u5929\u5b9a\u65f6\u6267\u884c /etc/cron.daily \u76ee\u5f55\u4e0b\u7684\u811a\u672c\uff0c\u800c\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u6709\u4e2a\u6587\u4ef6\u53eb logrotate\u3002\u5728 centos \u4e0a\u811a\u672c\u5185\u5bb9\u662f\u8fd9\u6837\u7684\uff1a"}),"\n",(0,r.jsxs)(e.p,{children:["\u7cfb\u7edf\u81ea\u5e26 cron task\uff1a",(0,r.jsx)(e.code,{children:"/etc/cron.daily/logrotate"}),"\uff0c\u6bcf\u5929\u8fd0\u884c\u4e00\u6b21\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:'(base) \u279c  ~ sudo cat /etc/cron.daily/logrotate                                    \n#!/bin/sh                                                                          \n/usr/sbin/logrotate -s /var/lib/logrotate/logrotate.status /etc/logrotate.conf     \nEXITVALUE=$?                                                                       \nif [ $EXITVALUE != 0 ]; then                                                       \n    /usr/bin/logger -t logrotate "ALERT exited abnormally with [$EXITVALUE]"       \nfi                                                                                 \nexit 0\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2a\u811a\u672c\u4e3b\u8981\u505a\u7684\u4e8b\u5c31\u662f\u4ee5\xa0",(0,r.jsx)(e.code,{children:"/etc/logrotate.conf"}),"\xa0\u4e3a\u914d\u7f6e\u6587\u4ef6\u6267\u884c\u4e86 logrotate\u3002\u5c31\u662f\u8fd9\u6837\u5b9e\u73b0\u4e86\u6bcf\u5929\u6267\u884c\u4e00\u6b21 logrotate\u3002"]}),"\n",(0,r.jsx)(e.h1,{id:"reference",children:"reference"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://wsgzao.github.io/post/logrotate/",children:"https://wsgzao.github.io/post/logrotate/"})}),"\n"]})]})}function d(t={}){const{wrapper:e}={...(0,l.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(u,{...t})}):u(t)}},28453:(t,e,o)=>{o.d(e,{R:()=>a,x:()=>s});var n=o(96540);const r={},l=n.createContext(r);function a(t){const e=n.useContext(l);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:a(t.components),n.createElement(l.Provider,{value:e},t.children)}}}]);