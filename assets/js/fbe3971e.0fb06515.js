"use strict";(self.webpackChunkk_8_s_god=self.webpackChunkk_8_s_god||[]).push([[1981],{28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>o});var l=n(96540);const s={},c=l.createContext(s);function r(e){const i=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(c.Provider,{value:i},e.children)}},85070:(e,i,n)=>{n.d(i,{A:()=>l});const l=n.p+"assets/images/iommu-0f85540b37c5c03fce99a8d4a3d944ef.png"},91570:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>t});const l=JSON.parse('{"id":"dpdk/\u7528\u6237\u6001\u9a71\u52a8\uff08UIOVFIO\uff09","title":"\u7528\u6237\u6001\u9a71\u52a8\uff08UIO/VFIO\uff09","description":"UIO","source":"@site/docs/dpdk/\u7528\u6237\u6001\u9a71\u52a8\uff08UIOVFIO\uff09.md","sourceDirName":"dpdk","slug":"/dpdk/\u7528\u6237\u6001\u9a71\u52a8\uff08UIOVFIO\uff09","permalink":"/blog/docs/dpdk/\u7528\u6237\u6001\u9a71\u52a8\uff08UIOVFIO\uff09","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/dpdk/\u7528\u6237\u6001\u9a71\u52a8\uff08UIOVFIO\uff09.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u6293\u5305","permalink":"/blog/docs/dpdk/\u6293\u5305"},"next":{"title":"docusaurus\u81ea\u5b9a\u4e49\u6e32\u67d3\u5185\u5bb9","permalink":"/blog/docs/edit/docusaurus\u81ea\u5b9a\u4e49\u6e32\u67d3\u5185\u5bb9"}}');var s=n(74848),c=n(28453);const r={},o="\u7528\u6237\u6001\u9a71\u52a8\uff08UIO/VFIO\uff09",d={},t=[{value:"UIO",id:"uio",level:2},{value:"UIO\u51fa\u73b0\u539f\u56e0",id:"uio\u51fa\u73b0\u539f\u56e0",level:3},{value:"UIO\u5de5\u4f5c\u539f\u7406",id:"uio\u5de5\u4f5c\u539f\u7406",level:2},{value:"UIO\u4e0e\u5185\u6838\u7684\u5173\u7cfb",id:"uio\u4e0e\u5185\u6838\u7684\u5173\u7cfb",level:3},{value:"igb_uio\u5206\u6790",id:"igb_uio\u5206\u6790",level:3},{value:"\u5185\u6838\u9a71\u52a8",id:"\u5185\u6838\u9a71\u52a8",level:4},{value:"VFIO",id:"vfio",level:2},{value:"IOMMU",id:"iommu",level:3},{value:"VFIO\u4e0eIOMMU\u7684\u5173\u7cfb",id:"vfio\u4e0eiommu\u7684\u5173\u7cfb",level:3},{value:"VFIO\u4e3b\u8981\u6982\u5ff5",id:"vfio\u4e3b\u8981\u6982\u5ff5",level:2},{value:"group",id:"group",level:4},{value:"container",id:"container",level:4},{value:"device",id:"device",level:4},{value:"VFIO\u6846\u67b6",id:"vfio\u6846\u67b6",level:3},{value:"VFIO\u4e0e\u5185\u6838\u7684\u5173\u7cfb",id:"vfio\u4e0e\u5185\u6838\u7684\u5173\u7cfb",level:3}];function h(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"\u7528\u6237\u6001\u9a71\u52a8uiovfio",children:"\u7528\u6237\u6001\u9a71\u52a8\uff08UIO/VFIO\uff09"})}),"\n",(0,s.jsx)(i.h2,{id:"uio",children:"UIO"}),"\n",(0,s.jsx)(i.h3,{id:"uio\u51fa\u73b0\u539f\u56e0",children:"UIO\u51fa\u73b0\u539f\u56e0"}),"\n",(0,s.jsx)(i.p,{children:"\u786c\u4ef6\u8bbe\u5907\u53ef\u4ee5\u6839\u636e\u529f\u80fd\u5206\u4e3a\u7f51\u7edc\u8bbe\u5907\uff0c\u5757\u8bbe\u5907\uff0c\u5b57\u7b26\u8bbe\u5907\uff0c\u6216\u8005\u6839\u636e\u4e0eCPU\u76f8\u8fde\u7684\u65b9\u5f0f\u5206\u4e3aPCI\u8bbe\u5907\uff0cUSB\u8bbe\u5907\u7b49\u3002\u5b83\u4eec\u88ab\u4e0d\u540c\u7684\u5185\u6838\u5b50\u7cfb\u7edf\u652f\u6301\u3002\u8fd9\u4e9b\u6807\u51c6\u7684\u8bbe\u5907\u7684\u9a71\u52a8\u7f16\u5199\u8f83\u4e3a\u5bb9\u6613\u800c\u4e14\u5bb9\u6613\u7ef4\u62a4\u3002\u5f88\u5bb9\u6613\u52a0\u5165\u4e3b\u5185\u6838\u6e90\u7801\u6811\u3002\u4f46\u662f\uff0c\u53c8\u6709\u5f88\u591a\u8bbe\u5907\u96be\u4ee5\u5212\u5206\u5230\u8fd9\u4e9b\u5b50\u7cfb\u7edf\u4e2d\uff0c\u6bd4\u5982I/O\u5361\uff0c\u73b0\u573a\u603b\u7ebf\u63a5\u53e3\u6216\u8005\u5b9a\u5236\u7684FPGA\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u901a\u5e38\u8fd9\u4e9b\u975e\u6807\u51c6\u8bbe\u5907\u7684\u9a71\u52a8\u88ab\u5b9e\u73b0\u4e3a\u5b57\u7b26\u9a71\u52a8\u3002\u8fd9\u4e9b\u9a71\u52a8\u4f7f\u7528\u4e86\u5f88\u591a\u5185\u6838\u5185\u90e8\u51fd\u6570\u548c\u5b8f\u3002\u800c\u8fd9\u4e9b\u5185\u90e8\u51fd\u6570\u548c\u5b8f\u662f\u53d8\u5316\u7684\u3002\u8fd9\u6837\u9a71\u52a8\u7684\u7f16\u5199\u8005\u5fc5\u987b\u7f16\u5199\u4e00\u4e2a\u5b8c\u5168\u7684\u5185\u6838\u9a71\u52a8\uff0c\u800c\u4e14\u4e00\u76f4\u7ef4\u62a4\u8fd9\u4e9b\u4ee3\u7801\u3002\u800c\u4e14\u8fd9\u4e9b\u9a71\u52a8\u8fdb\u4e0d\u4e86\u4e3b\u5185\u6838\u6e90\u7801\u3002\u4e8e\u662f\u5c31\u51fa\u73b0\u4e86\u7528\u6237\u7a7a\u95f4I/O\u6846\u67b6(Userspace I/O framework)\u3002"}),"\n",(0,s.jsx)(i.h2,{id:"uio\u5de5\u4f5c\u539f\u7406",children:"UIO\u5de5\u4f5c\u539f\u7406"}),"\n",(0,s.jsx)(i.p,{children:"\u4e00\u4e2a\u8bbe\u5907\u9a71\u52a8\u7684\u4e3b\u8981\u4efb\u52a1\u6709\u4e24\u4e2a\uff1a"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u5b58\u53d6\u8bbe\u5907\u7684\u5185\u5b58"}),"\n",(0,s.jsx)(i.p,{children:"UIO\u6838\u5fc3\u5b9e\u73b0\u4e86mmap()\u53ef\u4ee5\u5904\u7406\u7269\u7406\u5185\u5b58(physicalmemory)\uff0c\u903b\u8f91\u5185\u5b58(logical memory)\uff0c\u865a\u62df\u5185\u5b58(virtual memory)\u3002UIO\u9a71\u52a8\u7684\u7f16\u5199\u662f\u5c31\u4e0d\u9700\u8981\u518d\u8003\u8651\u8fd9\u4e9b\u7e41\u7410\u7684\u7ec6\u8282\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u5904\u7406\u8bbe\u5907\u4ea7\u751f\u7684\u4e2d\u65ad"}),"\n",(0,s.jsx)(i.p,{children:"\u5bf9\u4e8e\u8bbe\u5907\u4e2d\u65ad\u7684\u5e94\u7b54\u5fc5\u987b\u5728\u5185\u6838\u7a7a\u95f4\u8fdb\u884c\u3002\u6240\u4ee5\u5728\u5185\u6838\u7a7a\u95f4\u6709\u4e00\u5c0f\u90e8\u5206\u4ee3\u7801\u7528\u6765\u5e94\u7b54\u4e2d\u65ad\u548c\u7981\u6b62\u4e2d\u65ad\uff0c\u4f46\u662f\u5176\u4f59\u7684\u5de5\u4f5c\u5168\u90e8\u7559\u7ed9\u7528\u6237\u7a7a\u95f4\u5904\u7406\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u5982\u679c\u7528\u6237\u7a7a\u95f4\u8981\u7b49\u5f85\u4e00\u4e2a\u8bbe\u5907\u4e2d\u65ad\uff0c\u5b83\u53ea\u9700\u8981\u7b80\u5355\u7684\u963b\u585e\u5728\u5bf9 /dev/uioX\u7684read()\u64cd\u4f5c\u4e0a\u3002\u5f53\u8bbe\u5907\u4ea7\u751f\u4e2d\u65ad\u65f6\uff0cread()\u64cd\u4f5c\u7acb\u5373\u8fd4\u56de\u3002UIO \u4e5f\u5b9e\u73b0\u4e86poll()\u7cfb\u7edf\u8c03\u7528\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 select()\u6765\u7b49\u5f85\u4e2d\u65ad\u7684\u53d1\u751f\u3002select()\u6709\u4e00\u4e2a\u8d85\u65f6\u53c2\u6570\u53ef\u4ee5\u7528\u6765\u5b9e\u73b0\u6709\u9650\u65f6\u95f4\u5185\u7b49\u5f85\u4e2d\u65ad\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"uio\u4e0e\u5185\u6838\u7684\u5173\u7cfb",children:"UIO\u4e0e\u5185\u6838\u7684\u5173\u7cfb"}),"\n",(0,s.jsx)(i.p,{children:"UIO\u4e0e\u5185\u6838\u7684\u5173\u7cfb\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(92002).A+"",width:"1054",height:"697"})}),"\n",(0,s.jsx)(i.p,{children:"\u5bf9\u8bbe\u5907\u7684\u63a7\u5236\u8fd8\u53ef\u4ee5\u901a\u8fc7/sys/class/uio\u4e0b\u7684\u5404\u4e2a\u6587\u4ef6\u7684\u8bfb\u5199\u6765\u5b8c\u6210\u3002\u4f60\u6ce8\u518c\u7684uio\u8bbe\u5907\u5c06\u4f1a\u51fa\u73b0\u5728\u8be5\u76ee\u5f55\u4e0b\u3002\u5047\u5982\u4f60\u7684uio\u8bbe\u5907\u662fuio0\u90a3\u4e48\u6620\u5c04\u7684\u8bbe\u5907\u5185\u5b58\u6587\u4ef6\u51fa\u73b0\u5728 /sys/class/uio/uio0/maps/mapX\uff0c\u5bf9\u8be5\u6587\u4ef6\u7684\u8bfb\u5199\u5c31\u662f \u5bf9\u8bbe\u5907\u5185\u5b58\u7684\u8bfb\u5199\u3002"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"[root@localhost ~]# ls /sys/class/uio/uio0/\ndev        device/    event      maps/      name       power/     subsystem/ uevent     version\n"})}),"\n",(0,s.jsx)(i.h3,{id:"igb_uio\u5206\u6790",children:"igb_uio\u5206\u6790"}),"\n",(0,s.jsx)(i.p,{children:"\u5728\u8fdb\u884cDPDK\u7684\u6d4b\u8bd5\u4e2d\uff0c\u4f7f\u7528\u7684\u90fd\u662figb_uio\u8fd9\u4e2a\u9a71\u52a8\uff1bigb_uio\u662fIntel igb\u7f51\u5361\u9a71\u52a8\u7684UIO\u5b9e\u73b0\uff0c\u5206\u6210igb_uio\u5185\u6838\u9a71\u52a8\u3001\u5185\u6838uio\u6846\u67b6\u3001uio\u7528\u6237\u6001\u4e09\u90e8\u5206\u3002"}),"\n",(0,s.jsx)(i.h4,{id:"\u5185\u6838\u9a71\u52a8",children:"\u5185\u6838\u9a71\u52a8"}),"\n",(0,s.jsx)(i.p,{children:"igb_uio\u9a71\u52a8\u4e3b\u8981\u505a\u7684\u5c31\u662f\u6ce8\u518c\u4e00\u4e2apci\u8bbe\u5907\uff0c\u5728DPDK\u5de5\u5177dpdk_nic_bind.py\u7ed1\u5b9aNIC\u7684\u65f6\u5019\u8fd9\u4e2a\u9a71\u52a8\u4f1aprobe\u5230\u8fd9\u4e2a\u8bbe\u5907\uff0c\u8fdb\u884c\u76f8\u5173\u914d\u7f6e\u3002\u4e4b\u540e\u4f1a\u6ce8\u518c\u4e00\u4e2aUIO\u8bbe\u5907\uff0cprobe\u51fd\u6570\u4f1a\u5c06\u8bb0\u5f55\u8bbe\u5907\u7684\u8d44\u6e90\u6bd4\u5982PCI\u8bbe\u5907BAR\u7a7a\u95f4\u7684\u7269\u7406\u5730\u5740\u3001\u5927\u5c0f\u7b49\u4fe1\u606f\u8bb0\u5f55\u4e0b\u6765\u4f20\u7ed9\u7528\u6237\u6001\u3002\u6ce8\u518c\u7684UIO\u8bbe\u5907\u540d\u4e3aigb_uio\uff0c\u5185\u6838\u6001\u4e2d\u65ad\u5904\u7406\u51fd\u6570\u4e3aigbuio_pci_irqhandler\uff0c\u4e2d\u65ad\u63a7\u5236\u51fd\u6570igbuio_pci_irqcontrol\u3002\u6ce8\u518c\u7684\u4e3b\u8981\u5de5\u4f5c\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u521d\u59cb\u5316uio_device\u7ed3\u6784\u4f53\u6307\u9488\uff0c\u4e3b\u8981\u5305\u62ec\u7b49\u5f85\u961f\u5217wait\u3001\u4e2d\u65ad\u4e8b\u4ef6\u8ba1\u6570event\u3001\u6b21\u8bbe\u5907\u53f7minor\u7b49\u3002"}),"\n",(0,s.jsx)(i.li,{children:"\u5728/dev\u76ee\u5f55\u4e0b\u521b\u5efa\u4e86\u4e00\u4e2auio\u8bbe\u5907\uff0c\u8bbe\u5907\u540d\u4e3auioX\uff0cX\u5bf9\u5e94\u7684\u5c31\u662f\u6b21\u8bbe\u5907\u53f7minor\u3002"}),"\n",(0,s.jsx)(i.li,{children:"\u5728/sys/class/uio/uioX/\u76ee\u5f55\u4e0b\u521b\u5efamaps\u548cportio\u63a5\u53e3\u3002"}),"\n",(0,s.jsx)(i.li,{children:"\u6ce8\u518c\u4e2d\u65ad\u548c\u4e2d\u65ad\u5904\u7406\u51fd\u6570uio_interrupt"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"vfio",children:"VFIO"}),"\n",(0,s.jsx)(i.h3,{id:"iommu",children:"IOMMU"}),"\n",(0,s.jsx)(i.p,{children:"\u5728\u8ba1\u7b97\u673a\u9886\u57df\uff0cIOMMU\uff08Input/Output Memory Management Unit\uff09\u662f\u4e00\u4e2a\u5185\u5b58\u7ba1\u7406\u5355\u5143\uff08Memory Management Unit\uff09\uff0c\u5b83\u7684\u4f5c\u7528\u662f\u8fde\u63a5DMA-capable I/O\u603b\u7ebf\uff08Direct Memory Access-capable I/O Bus\uff09\u548c\u4e3b\u5b58\uff08main memory\uff09\u3002\u4f20\u7edf\u7684\u5185\u5b58\u7ba1\u7406\u5355\u5143\u4f1a\u628aCPU\u8bbf\u95ee\u7684\u865a\u62df\u5730\u5740\u8f6c\u5316\u6210\u5b9e\u9645\u7684\u7269\u7406\u5730\u5740\u3002\u800cIOMMU\u5219\u662f\u628a\u8bbe\u5907\uff08device\uff09\u8bbf\u95ee\u7684\u865a\u62df\u5730\u5740\u8f6c\u5316\u6210\u7269\u7406\u5730\u5740\u3002\u4e3a\u4e86\u9632\u6b62\u8bbe\u5907\u9519\u8bef\u5730\u8bbf\u95ee\u5185\u5b58\uff0c\u6709\u4e9bIOMMU\u8fd8\u63d0\u4f9b\u4e86\u8bbf\u95ee\u5185\u5b58\u4fdd\u62a4\u673a\u5236\u3002"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(85070).A+"",width:"522",height:"491"})}),"\n",(0,s.jsx)(i.p,{children:"IOMMU\u4e3b\u8981\u4f5c\u7528\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u5c4f\u853d\u7269\u7406\u5730\u5740\uff0c\u8d77\u5230\u4fdd\u62a4\u4f5c\u7528\u3002\u5178\u578b\u5e94\u7528\u5305\u62ec\u4e24\u4e2a\uff1a\u4e00\u662f\u5b9e\u73b0\u7528\u6237\u6001\u9a71\u52a8\uff0c\u7531\u4e8eIOMMU\u7684\u6620\u5c04\u529f\u80fd\uff0c\u4f7fHPA\u5bf9\u7528\u6237\u7a7a\u95f4\u4e0d\u53ef\u89c1\uff0c\u5728vfio\u90e8\u5206\u8fd8\u4f1a\u4e3e\u4f8b\u3002\u4e8c\u662f\u5c06\u8bbe\u5907\u900f\u4f20\u7ed9\u865a\u673a\uff0c\u4f7fHPA\u5bf9\u865a\u673a\u4e0d\u53ef\u89c1\uff0c\u5e76\u5c06GPA\u6620\u5c04\u4e3aHPA"}),"\n",(0,s.jsx)(i.li,{children:"IOMMU\u53ef\u4ee5\u5c06\u8fde\u7eed\u7684\u865a\u62df\u5730\u5740\u6620\u5c04\u5230\u4e0d\u8fde\u7eed\u7684\u591a\u4e2a\u7269\u7406\u5185\u5b58\u7247\u6bb5\uff0c\u8fd9\u90e8\u5206\u529f\u80fd\u4e8eMMU\u7c7b\u4f3c\uff0c\u5bf9\u4e8e\u6ca1\u6709IOMMU\u7684\u60c5\u51b5\uff0c\u8bbe\u5907\u8bbf\u95ee\u7684\u7269\u7406\u7a7a\u95f4\u5fc5\u987b\u662f\u8fde\u7eed\u7684\uff0cIOMMU\u53ef\u6709\u6548\u7684\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"vfio\u4e0eiommu\u7684\u5173\u7cfb",children:"VFIO\u4e0eIOMMU\u7684\u5173\u7cfb"}),"\n",(0,s.jsx)(i.p,{children:"VFIO\u5c31\u662f\u5185\u6838\u9488\u5bf9IOMMU\u63d0\u4f9b\u7684\u8f6f\u4ef6\u6846\u67b6\uff0c\u652f\u6301DMA Remapping\u548cInterrupt Remapping\uff0cVFIO\u5229\u7528IOMMU\u8fd9\u4e2a\u7279\u6027\uff0c\u53ef\u4ee5\u5c4f\u853d\u7269\u7406\u5730\u5740\u5bf9\u4e0a\u5c42\u7684\u53ef\u89c1\u6027\uff0c\u53ef\u4ee5\u7528\u6765\u5f00\u53d1\u7528\u6237\u6001\u9a71\u52a8\uff0c\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u8bbe\u5907\u900f\u4f20\u3002"}),"\n",(0,s.jsx)(i.p,{children:"VFIO\u662f\u4e00\u4e2a\u53ef\u4ee5\u5b89\u5168\u7684\u628a\u8bbe\u5907I/O\u3001\u4e2d\u65ad\u3001DMA\u7b49\u66b4\u9732\u5230\u7528\u6237\u7a7a\u95f4\uff08userspace\uff09\uff0c\u4ece\u800c\u53ef\u4ee5\u5728\u7528\u6237\u7a7a\u95f4\u5b8c\u6210\u8bbe\u5907\u9a71\u52a8\u7684\u6846\u67b6\u3002\u7528\u6237\u7a7a\u95f4\u76f4\u63a5\u8bbe\u5907\u8bbf\u95ee\uff0c\u865a\u62df\u673a\u8bbe\u5907\u5206\u914d\u53ef\u4ee5\u83b7\u5f97\u66f4\u9ad8\u7684IO\u6027\u80fd"}),"\n",(0,s.jsx)(i.h2,{id:"vfio\u4e3b\u8981\u6982\u5ff5",children:"VFIO\u4e3b\u8981\u6982\u5ff5"}),"\n",(0,s.jsx)(i.h4,{id:"group",children:"group"}),"\n",(0,s.jsx)(i.p,{children:"group \u662fIOMMU\u80fd\u591f\u8fdb\u884cDMA\u9694\u79bb\u7684\u6700\u5c0f\u786c\u4ef6\u5355\u5143\uff0c\u4e00\u4e2agroup\u5185\u53ef\u80fd\u53ea\u6709\u4e00\u4e2adevice\uff0c\u4e5f\u53ef\u80fd\u6709\u591a\u4e2adevice\uff0c\u8fd9\u53d6\u51b3\u4e8e\u7269\u7406\u5e73\u53f0\u4e0a\u786c\u4ef6\u7684IOMMU\u62d3\u6251\u7ed3\u6784\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u8bbe\u5907\u76f4\u901a\u7684\u65f6\u5019\u4e00\u4e2agroup\u91cc\u9762\u7684\u8bbe\u5907\u5fc5\u987b\u90fd\u76f4\u901a\u7ed9\u4e00\u4e2a\u865a\u62df\u673a\u3002\u4e0d\u80fd\u591f\u8ba9\u4e00\u4e2agroup\u91cc\u7684\u591a\u4e2adevice\u5206\u522b\u4ece\u5c5e\u4e8e2\u4e2a\u4e0d\u540c\u7684VM\uff0c\u4e5f\u4e0d\u5141\u8bb8\u90e8\u5206device\u5728host\u4e0a\u800c\u53e6\u4e00\u90e8\u5206\u88ab\u5206\u914d\u5230guest\u91cc\uff0c \u56e0\u4e3a\u5c31\u8fd9\u6837\u4e00\u4e2aguest\u4e2d\u7684device\u53ef\u4ee5\u5229\u7528DMA\u653b\u51fb\u83b7\u53d6\u53e6\u5916\u4e00\u4e2aguest\u91cc\u7684\u6570\u636e\uff0c\u5c31\u65e0\u6cd5\u505a\u5230\u7269\u7406\u4e0a\u7684DMA\u9694\u79bb\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u53e6\u5916\uff0cVFIO\u4e2d\u7684group\u548ciommu group\u53ef\u4ee5\u8ba4\u4e3a\u662f\u540c\u4e00\u4e2a\u6982\u5ff5\u3002"}),"\n",(0,s.jsx)(i.h4,{id:"container",children:"container"}),"\n",(0,s.jsx)(i.p,{children:"\u5bf9\u4e8e\u865a\u673a\uff0cContainer \u8fd9\u91cc\u53ef\u4ee5\u7b80\u5355\u7406\u89e3\u4e3a\u4e00\u4e2aVM Domain\u7684\u7269\u7406\u5185\u5b58\u7a7a\u95f4\u3002\u5bf9\u4e8e\u7528\u6237\u6001\u9a71\u52a8\uff0cContainer\u53ef\u4ee5\u662f\u591a\u4e2aGroup\u7684\u96c6\u5408\u3002"}),"\n",(0,s.jsx)(i.h4,{id:"device",children:"device"}),"\n",(0,s.jsx)(i.p,{children:"\u6307\u7684\u662f\u6211\u4eec\u8981\u64cd\u4f5c\u7684\u786c\u4ef6\u8bbe\u5907\uff0c\u4e0d\u8fc7\u8fd9\u91cc\u7684\u201c\u8bbe\u5907\u201d\u9700\u8981\u4eceIOMMU\u62d3\u6251\u7684\u89d2\u5ea6\u53bb\u7406\u89e3\u3002\u5982\u679c\u8be5\u8bbe\u5907\u662f\u4e00\u4e2a\u786c\u4ef6\u62d3\u6251\u4e0a\u72ec\u7acb\u7684\u8bbe\u5907\uff0c\u90a3\u4e48\u5b83\u81ea\u5df1\u5c31\u6784\u6210\u4e00\u4e2aiommu group\u3002 \u5982\u679c\u8fd9\u91cc\u662f\u4e00\u4e2amulti-function\u8bbe\u5907\uff0c\u90a3\u4e48\u5b83\u548c\u5176\u4ed6\u7684function\u4e00\u8d77\u7ec4\u6210\u4e00\u4e2aiommu group\uff0c\u56e0\u4e3a\u591a\u4e2afunction\u8bbe\u5907\u5728\u7269\u7406\u786c\u4ef6\u4e0a\u5c31\u662f\u4e92\u8054\u7684\uff0c \u4ed6\u4eec\u53ef\u4ee5\u4e92\u76f8\u8bbf\u95ee\u5bf9\u65b9\u7684\u6570\u636e\uff0c\u6240\u4ee5\u5fc5\u987b\u653e\u5230\u4e00\u4e2agroup\u91cc\u9694\u79bb\u8d77\u6765\u3002\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u5bf9\u4e8e\u652f\u6301PCIe ACS\u7279\u6027\u7684\u786c\u4ef6\u8bbe\u5907\uff0c\u6211\u4eec\u53ef\u4ee5\u8ba4\u4e3a\u4ed6\u4eec\u5728\u7269\u7406\u4e0a\u662f\u4e92\u76f8\u9694\u79bb\u7684\u3002"}),"\n",(0,s.jsx)(i.h3,{id:"vfio\u6846\u67b6",children:"VFIO\u6846\u67b6"}),"\n",(0,s.jsx)(i.p,{children:"\u6574\u4e2aVFIO\u6846\u67b6\u8bbe\u8ba1\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"+--------------------------------------------------------------+\n|                VFIO interface                                |\n+--------------------------------------------------------------+\n|    vfio_iommu           |  vfio_pci                          |\n+--------------------------------------------------------------+\n|  iommu driver          |  pci_bus driver                     |\n+--------------------------------------------------------------+\n"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u6700\u4e0a\u5c42VFIO Interface Layer\uff0c\u5b83\u8d1f\u8d23\u5411\u7528\u6237\u6001\u63d0\u4f9b\u7edf\u4e00\u8bbf\u95ee\u7684\u63a5\u53e3\uff0c\u7528\u6237\u6001\u901a\u8fc7\u7ea6\u5b9a\u7684ioctl\u8bbe\u7f6e\u548c\u8c03\u7528VFIO\u7684\u5404\u79cd\u80fd\u529b\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u4e2d\u95f4\u5c42\u5206\u522b\u662fvfio_iommu\u548cvfio_pci"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u6700\u4e0b\u9762\u7684\u4e00\u5c42\u5219\u662f\u786c\u4ef6\u9a71\u52a8\u8c03\u7528\u5c42"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u4e00\u4e2a\u6216\u591a\u4e2adevice\u4ece\u5c5e\u4e8e\u67d0\u4e2agroup\uff0c\u800c\u4e00\u4e2a\u6216\u591a\u4e2agroup\u53c8\u4ece\u5c5e\u4e8e\u4e00\u4e2acontainer\u3002 \u5982\u679c\u8981\u5c06\u4e00\u4e2adevice\u76f4\u901a\u7ed9VM\uff0c\u90a3\u4e48\u5148\u8981\u627e\u5230\u8fd9\u4e2a\u8bbe\u5907\u4ece\u5c5e\u7684iommu group\uff0c\u7136\u540e\u5c06\u6574\u4e2agroup\u52a0\u5165\u5230container\u4e2d\u5373\u53ef\u3002"}),"\n",(0,s.jsx)(i.h3,{id:"vfio\u4e0e\u5185\u6838\u7684\u5173\u7cfb",children:"VFIO\u4e0e\u5185\u6838\u7684\u5173\u7cfb"}),"\n",(0,s.jsx)(i.p,{children:"linux\u5185\u6838\u8bbe\u5907\u9a71\u52a8\u5145\u5206\u5229\u7528\u4e86\u201c\u4e00\u5207\u7686\u6587\u4ef6\u201d\u7684\u601d\u60f3\uff0cVFIO\u9a71\u52a8\u4e5f\u4e0d\u4f8b\u5916\uff0cVFIO\u4e2d\u4e3a\u4e86\u65b9\u4fbf\u64cd\u4f5cdevice, group, container\u7b49\u5bf9\u8c61\u5c06\u5b83\u4eec\u548c\u5bf9\u5e94\u7684\u8bbe\u5907\u6587\u4ef6\u8fdb\u884c\u7ed1\u5b9a\u3002VFIO\u9a71\u52a8\u5728\u52a0\u8f7d\u7684\u65f6\u5019\u4f1a\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a/dev/vfio/vfio\u7684\u6587\u4ef6\uff0c\u800c\u8fd9\u4e2a\u6587\u4ef6\u7684\u53e5\u67c4\u5173\u8054\u5230\u4e86vfio_container\u4e0a\uff0c\u7528\u6237\u6001\u8fdb\u7a0b\u6253\u5f00\u8fd9\u4e2a\u6587\u4ef6\u5c31\u53ef\u4ee5\u521d\u59cb\u5316\u548c\u8bbf\u95eevfio_container\u3002"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"root@HX-Technical-A:~# ls /dev/vfio/\n8  vfio\n"})}),"\n",(0,s.jsx)(i.h1,{id:"reference",children:"reference"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://blog.csdn.net/u013982161/article/details/51584900",children:"https://blog.csdn.net/u013982161/article/details/51584900"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://www.cnblogs.com/cynchanpin/p/7068965.html",children:"https://www.cnblogs.com/cynchanpin/p/7068965.html"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://blog.csdn.net/21cnbao/article/details/107572893",children:"https://blog.csdn.net/21cnbao/article/details/107572893"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://www.zhihu.com/question/325947168",children:"https://www.zhihu.com/question/325947168"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://www.cnblogs.com/yi-mu-xi/p/12370626.html",children:"https://www.cnblogs.com/yi-mu-xi/p/12370626.html"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://blog.csdn.net/cloudvtech/article/details/80359834",children:"https://blog.csdn.net/cloudvtech/article/details/80359834"})}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},92002:(e,i,n)=>{n.d(i,{A:()=>l});const l=n.p+"assets/images/uio_frame-96d30bae35633af1e8b3de40c940ed68.png"}}]);