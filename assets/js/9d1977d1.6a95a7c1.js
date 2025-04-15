"use strict";(self.webpackChunkk_8_s_god=self.webpackChunkk_8_s_god||[]).push([[9801],{538:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"\u7b51\u57fa\u671f/\u5b89\u88c5k8s","title":"\u5b89\u88c5k8s","description":"\u8bbe\u7f6e\u64cd\u4f5c\u7cfb\u7edf\u73af\u5883","source":"@site/docs/02-\u7b51\u57fa\u671f/01-\u5b89\u88c5k8s.md","sourceDirName":"02-\u7b51\u57fa\u671f","slug":"/\u7b51\u57fa\u671f/\u5b89\u88c5k8s","permalink":"/docs/\u7b51\u57fa\u671f/\u5b89\u88c5k8s","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-\u7b51\u57fa\u671f/01-\u5b89\u88c5k8s.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u96c6\u7fa4","permalink":"/docs/\u7b51\u57fa\u671f/\u96c6\u7fa4"},"next":{"title":"k8s\u96c6\u7fa4\u642d\u5efa","permalink":"/docs/\u7b51\u57fa\u671f/k8s\u96c6\u7fa4\u642d\u5efa"}}');var a=s(4848),o=s(8453);const d={},c="\u5b89\u88c5k8s",l={},i=[{value:"\u8bbe\u7f6e\u64cd\u4f5c\u7cfb\u7edf\u73af\u5883",id:"\u8bbe\u7f6e\u64cd\u4f5c\u7cfb\u7edf\u73af\u5883",level:2},{value:"\u5b89\u88c5\u5bb9\u5668",id:"\u5b89\u88c5\u5bb9\u5668",level:2},{value:"\u5b89\u88c5k8s\u7ec4\u4ef6",id:"\u5b89\u88c5k8s\u7ec4\u4ef6",level:2},{value:"\u521d\u59cb\u5316\u5355\u8282\u70b9\u96c6\u7fa4",id:"\u521d\u59cb\u5316\u5355\u8282\u70b9\u96c6\u7fa4",level:2},{value:"\u5b89\u88c5dashboard",id:"\u5b89\u88c5dashboard",level:2}];function t(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"\u5b89\u88c5k8s",children:"\u5b89\u88c5k8s"})}),"\n",(0,a.jsx)(n.h2,{id:"\u8bbe\u7f6e\u64cd\u4f5c\u7cfb\u7edf\u73af\u5883",children:"\u8bbe\u7f6e\u64cd\u4f5c\u7cfb\u7edf\u73af\u5883"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"sudo swapoff -a\nsudo sed -i '/ swap / s/^/#/' /etc/fstab\n\n# 2. \u52a0\u8f7d\u5185\u6838\u6a21\u5757\ncat <<EOF | sudo tee /etc/modules-load.d/k8s.conf\nbr_netfilter\nEOF\n\nsudo modprobe br_netfilter\n\n# 3. \u8bbe\u7f6e\u5185\u6838\u53c2\u6570\ncat <<EOF | sudo tee /etc/sysctl.d/k8s.conf\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nnet.ipv4.ip_forward = 1\nEOF\n\nsudo sysctl --system\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5b89\u88c5\u5bb9\u5668",children:"\u5b89\u88c5\u5bb9\u5668"}),"\n",(0,a.jsx)(n.h2,{id:"\u5b89\u88c5k8s\u7ec4\u4ef6",children:"\u5b89\u88c5k8s\u7ec4\u4ef6"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'sudo mkdir -p /etc/apt/keyrings\n\ncurl -fsSL https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-archive-keyring.gpg\n\necho "deb [signed-by=/etc/apt/keyrings/kubernetes-archive-keyring.gpg] https://mirrors.aliyun.com/kubernetes/apt kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list\n\n\n\nsudo apt update\nsudo apt install -y kubelet kubeadm kubectl\nsudo apt-mark hold kubelet kubeadm kubectl\n\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u521d\u59cb\u5316\u5355\u8282\u70b9\u96c6\u7fa4",children:"\u521d\u59cb\u5316\u5355\u8282\u70b9\u96c6\u7fa4"}),"\n",(0,a.jsx)(n.p,{children:"\u62c9\u53d6\u6240\u9700\u7684\u955c\u50cf\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"sudo kubeadm config images pull --image-repository=registry.aliyuncs.com/google_containers\nsudo kubeadm init \\\n  --apiserver-advertise-address=192.168.3.96 \\\n  --pod-network-cidr=10.244.0.0/16 \\\n  --image-repository=registry.aliyuncs.com/google_containers \\\n  --kubernetes-version=v1.28.0 \\\n  -v=6\n\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u90e8\u7f72\u51fa\u9519\uff0c\u6e05\u7406\u73af\u5883\u91cd\u65b0\u6765\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"sudo kubeadm reset -f\nsudo rm -rf /etc/kubernetes/pki /etc/kubernetes/manifests/*\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u521d\u59cb\u5316\u96c6\u7fa4\uff1a"}),"\n",(0,a.jsx)(n.p,{children:"\u6267\u884c\u524d\u786e\u8ba4\u4e00\u4e0b\u5185\u5b58\u4ea4\u6362\u5df2\u7ecf\u5173\u95ed\uff1a\uff08\u5426\u5219\u521d\u59cb\u5316\u4f1a\u5931\u8d25\uff09"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"swapon --summary # \u65e0\u8f93\u51fa\u8868\u793a\u5173\u95ed\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"sudo kubeadm init --apiserver-advertise-address=192.168.3.96 --pod-network-cidr=10.244.0.0/16 --image-repository=registry.aliyuncs.com/google_containers  --ignore-preflight-errors=Swap  -v=5\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u521d\u59cb\u5316\u5931\u8d25\uff0c\u67e5\u770b\u62a5\u9519\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"journalctl -u kubelet -xe\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u53d1\u73b0\u62a5\u9519\u4e3a\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"round_trippers.go:553] GET https://192.168.3.96:6443/healthz?timeout=10s\n"})}),"\n",(0,a.jsx)(n.p,{children:"6443\u662fapi server\u7684\u670d\u52a1\u7aef\u53e3\uff0c\u8bf4\u660eapi server\u6ca1\u6709\u542f\u52a8\u6210\u529f\u3002\u56e0\u4e3a\u6211\u4eec\u7528\u7684\u662fcontainerd\u90e8\u7f72\u5bb9\u5668\uff0c\u56e0\u4e3a\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"ps -ef | grep kube-apiserver\ncrictl ps -a | grep kube-apiserver\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u62a5\u9519\u5185\u5bb9\u4e3a\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'FATA[0000] listing containers: rpc error: code = Unavailable desc = connection error: desc = "transport: Error while dialing dial unix /var/run/dockershim.sock: connect: no such file or directory\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u8fd0\u884c crictl \u65f6\uff0c\u5b83\u5c1d\u8bd5\u8fde\u63a5\u7684\u662f Docker shim \u7684 socket\uff0c\u4f46\u8fd9\u4e2a socket \u4e0d\u5b58\u5728\u3002"}),"\n",(0,a.jsx)(n.p,{children:"crictl \u9ed8\u8ba4\u914d\u7f6e\u4e3a\u4f7f\u7528 dockershim\uff08\u5df2\u5e9f\u5f03\u7684 Docker \u8fd0\u884c\u65f6\u9002\u914d\u5c42\uff09\uff0c\u4f46\u4f60\u7cfb\u7edf\u7528\u7684\u5176\u5b9e\u662f containerd\uff0c\u5bfc\u81f4\u8fde\u63a5\u5931\u8d25\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"sudo tee /etc/crictl.yaml > /dev/null <<EOF\nruntime-endpoint: unix:///run/containerd/containerd.sock\nimage-endpoint: unix:///run/containerd/containerd.sock\ntimeout: 10\ndebug: false\nEOF\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u4f7f\u7528containerd\u9047\u5230\u5404\u79cd\u56f0\u96be\uff0c\u90e8\u7f72\u4e0d\u6210\u529f\uff0c\u6362\u6210docker\u6765\u90e8\u7f72\uff0cdocker\u547d\u4ee4\u66f4\u719f\u6089\u4e00\u70b9\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u6362\u6210docker\u540e\uff0c\u8fd8\u9700\u8981\u5b89\u88c5cri-docker,\u5b89\u88c5\u5b8c\u6210\u540e\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u6765\u8fdb\u884c\u521d\u59cb\u5316\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"kubeadm init --apiserver-advertise-address=192.168.3.96 --pod-network-cidr=10.244.0.0/16 --image-repository=registry.aliyuncs.com/google_containers  --ignore-preflight-errors=Swap --cri-socket=unix:///var/run/cri-dockerd.sock -v=5\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u521d\u59cb\u5316\u7684\u8fc7\u7a0b\u4e2d\u67e5\u770bkubelet\u670d\u52a1\u7684\u62a5\u9519\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'Apr 12 08:16:32 node1 kubelet[23909]: E0412 08:16:32.256295   23909 pod_workers.go:1300] "Error syncing pod, skipping" err="failed to \\"CreatePodSandbox\\" for \\"kube-controller-manager-node1_kube-system(acc63920f56567719deaf84949fd1f24)\\" with CreatePodSandboxError: \\"Failed to create sandbox for pod \\\\\\"kube-controller-manager-node1_kube-system(acc63920f56567719deaf84949fd1f24)\\\\\\": rpc error: code = Unknown desc = failed pulling image \\\\\\"registry.k8s.io/pause:3.10\\\\\\": Error response from daemon: Head \\\\\\"https://us-west2-docker.pkg.dev/v2/k8s-artifacts-prod/images/pause/manifests/3.10\\\\\\": dial tcp 142.250.157.82:443: i/o timeout\\"" pod="kube-system/kube-controller-manager-node1"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u53d1\u73b0\u4e00\u76f4\u8981\u53bb\u62c9\u53d6",(0,a.jsx)(n.code,{children:"registry.k8s.io/pause:3.10"}),"\u955c\u50cf\uff0c\u800c\u4e14\u56e0\u4e3a\u8c37\u6b4c\u88ab\u5899\u7684\u539f\u56e0\uff0c\u4e00\u76f4\u5931\u8d25\uff0c\u5bfc\u81f4\u670d\u52a1\u62a5\u9519\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u53ea\u80fd\u4f7f\u7528aliyun\u7684\u955c\u50cf\u62c9\u53d6\u7136\u540e\u91cd\u547d\u540d\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"docker pull registry.aliyuncs.com/google_containers/pause:3.10\ndocker tag e6f181688397 registry.k8s.io/pause:3.10\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u521d\u59cb\u5316\u6210\u529f\u540e\uff0c\u4f1a\u6253\u5370\u52a0\u5165\u547d\u4ee4\u7684\u914d\u7f6e\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'Your Kubernetes control-plane has initialized successfully!\n\nTo start using your cluster, you need to run the following as a regular user:\n\n  mkdir -p $HOME/.kube\n  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n  sudo chown $(id -u):$(id -g) $HOME/.kube/config\n\nAlternatively, if you are the root user, you can run:\n\n  export KUBECONFIG=/etc/kubernetes/admin.conf\n\nYou should now deploy a pod network to the cluster.\nRun "kubectl apply -f [podnetwork].yaml" with one of the options listed at:\n  https://kubernetes.io/docs/concepts/cluster-administration/addons/\n\nThen you can join any number of worker nodes by running the following on each as root:\n\nkubeadm join 192.168.3.96:6443 --token kj1h9t.cipysavo47a8ctkd \\\n        --discovery-token-ca-cert-hash sha256:38ef506c6a5bf87c32dea3e10b672f7122bde2299f9aa06951e2c555106be79d\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u7136\u540e\u5728\u8981\u7ba1\u7406k8s\u7684\u7528\u6237\u4e0b\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"mkdir -p $HOME/.kube\n  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n  sudo chown $(id -u):$(id -g) $HOME/.kube/config\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u4e0d\u7136\u65e0\u6cd5\u67e5\u8be2\u90fd\u96c6\u7fa4\u4fe1\u606f\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u6267\u884c\u5b8c\u6210\u540e\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u96c6\u7fa4\u4fe1\u606f\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"root@node1:/home/dys# kubectl get nodes\nNAME    STATUS     ROLES           AGE     VERSION\nnode1   NotReady   control-plane   6m27s   v1.28.2\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u8981\u628a\u5176\u4ed6\u8282\u70b9\u52a0\u5165\u8fdb\u96c6\u7fa4\u5c31\u53ef\u4ee5\u4f7f\u7528\u6700\u540e\u7684\u90a3\u4e00\u884c\u547d\u4ee4\u52a0\u5165\u3002\u8bb0\u5f97\u590d\u5236\u4e0b\u6765\u4fdd\u7559\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u6b64\u65f6\u8282\u70b9\u8fd8\u5904\u4e8eNotReady\u72b6\u6001\uff0c\u8fd8\u9700\u8981\u7f51\u7edc\u63d2\u4ef6\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5b89\u88c5\u5b8c\u6210\u540e\u9700\u8981\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4\uff0c\u8282\u70b9\u4f1a\u81ea\u52a8\u53d8\u4e3aready\u72b6\u6001\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"kubectl get nodes\nNAME    STATUS   ROLES           AGE   VERSION\nnode1   Ready    control-plane   14m   v1.28.2\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5b89\u88c5dashboard",children:"\u5b89\u88c5dashboard"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.6.0/aio/deploy/recommended.yaml\n#\u68c0\u67e5\u662f\u5426\u5b89\u88c5\u6210\u529f\nkubectl get pods -n kubernetes-dashboard\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}}}]);