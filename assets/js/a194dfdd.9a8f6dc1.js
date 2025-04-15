"use strict";(self.webpackChunkk_8_s_god=self.webpackChunkk_8_s_god||[]).push([[4676],{6096:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"\u70bc\u6c14\u671f/\u5bb9\u5668","title":"\u5bb9\u5668","description":"\u5b89\u88c5containerd","source":"@site/docs/01-\u70bc\u6c14\u671f/01-\u5bb9\u5668.md","sourceDirName":"01-\u70bc\u6c14\u671f","slug":"/\u70bc\u6c14\u671f/\u5bb9\u5668","permalink":"/docs/\u70bc\u6c14\u671f/\u5bb9\u5668","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01-\u70bc\u6c14\u671f/01-\u5bb9\u5668.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u70bc\u6c14\u671f","permalink":"/docs/category/\u70bc\u6c14\u671f"},"next":{"title":"\u7b51\u57fa\u671f","permalink":"/docs/category/\u7b51\u57fa\u671f"}}');var c=s(4848),d=s(8453);const o={},t="\u5bb9\u5668",l={},a=[{value:"\u5b89\u88c5containerd",id:"\u5b89\u88c5containerd",level:2},{value:"\u5b89\u88c5docker",id:"\u5b89\u88c5docker",level:2}];function i(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u5bb9\u5668",children:"\u5bb9\u5668"})}),"\n",(0,c.jsx)(n.h2,{id:"\u5b89\u88c5containerd",children:"\u5b89\u88c5containerd"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"# \u5b89\u88c5 containerd\nsudo apt update\nsudo apt install -y containerd\n\n# \u914d\u7f6e\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\nsudo mkdir -p /etc/containerd\ncontainerd config default | sudo tee /etc/containerd/config.toml\n\n# \u542f\u7528 Systemd \u7ba1\u7406\u7684 cgroup\uff08\u5173\u952e\uff09\nsudo sed -i 's/SystemdCgroup = false/SystemdCgroup = true/' /etc/containerd/config.toml\n\n# \u91cd\u542f\u670d\u52a1\nsudo systemctl restart containerd\nsudo systemctl enable containerd\n\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u5b89\u88c5docker",children:"\u5b89\u88c5docker"}),"\n",(0,c.jsx)(n.p,{children:"\u5728 Ubuntu 24.04 \u4e0a\u5b89\u88c5 Docker\uff0c\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u6765\u7a33\u5b9a\u3001\u5feb\u901f\u5730\u5b89\u88c5\uff08\u5305\u62ec\u7528 \u963f\u91cc\u4e91\u955c\u50cf\u52a0\u901f\uff0c\u907f\u514d\u5361\u5728\u56fd\u5916\u6e90\uff09\uff1a"}),"\n",(0,c.jsx)(n.p,{children:"\u2705 \u6b65\u9aa4\u4e00\uff1a\u5378\u8f7d\u65e7\u7248\uff08\u5982\u679c\u6709\uff09"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"sudo apt remove docker docker-engine docker.io containerd runc\n\nsudo tee /etc/apt/sources.list.d/docker.list > /dev/null <<EOF\ndeb [arch=amd64 signed-by=/etc/apt/keyrings/docker.gpg] https://mirrors.aliyun.com/docker-ce/linux/ubuntu noble stable\nEOF\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u2705 \u6b65\u9aa4\u4e8c\uff1a\u5b89\u88c5\u4f9d\u8d56"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"sudo apt update\nsudo apt install -y ca-certificates curl gnupg lsb-release\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u2705 \u6b65\u9aa4\u4e09\uff1a\u6dfb\u52a0 Docker \u5b98\u65b9 GPG \u5bc6\u94a5\uff08\u56fd\u5185\u955c\u50cf\uff09"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"sudo install -m 0755 -d /etc/apt/keyrings\ncurl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | \\\n  sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\nsudo chmod a+r /etc/apt/keyrings/docker.gpg\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u2705 \u6b65\u9aa4\u56db\uff1a\u6dfb\u52a0\u963f\u91cc\u4e91 Docker \u8f6f\u4ef6\u6e90"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:'echo \\\n  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \\\n  https://mirrors.aliyun.com/docker-ce/linux/ubuntu \\\n  $(lsb_release -cs) stable" | \\\n  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u2705 \u6b65\u9aa4\u4e94\uff1a\u66f4\u65b0\u5e76\u5b89\u88c5 Docker \u6700\u65b0\u7248\u672c"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"sudo apt update\nsudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u2705 \u6b65\u9aa4\u516d\uff1a\u6d4b\u8bd5\u662f\u5426\u6210\u529f"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"sudo docker version\nsudo docker run hello-world\n"})}),"\n",(0,c.jsx)(n.p,{children:"\ud83d\udd04 \uff08\u53ef\u9009\uff09\u6dfb\u52a0\u5f53\u524d\u7528\u6237\u5230 docker \u7528\u6237\u7ec4\uff0c\u907f\u514d\u6bcf\u6b21\u7528 sudo"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"sudo usermod -aG docker $USER\nnewgrp docker\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u2705 \u914d\u7f6e\u56fd\u5185\u955c\u50cf\u52a0\u901f\u5668\uff08\u63a8\u8350\uff09\n\u7f16\u8f91\u6587\u4ef6 /etc/docker/daemon.json\uff08\u5982\u679c\u6ca1\u6709\u5c31\u65b0\u5efa\uff09\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:'sudo mkdir -p /etc/docker\nsudo tee /etc/docker/daemon.json > /dev/null <<EOF\n{\n  "registry-mirrors": ["https://registry.docker-cn.com", "https://mirror.aliyuncs.com"]\n}\nEOF\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u7136\u540e\u91cd\u542f Docker\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"sudo systemctl daemon-reexec\nsudo systemctl restart docker\n"})})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}}}]);