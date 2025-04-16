# 01-k8s和docker-compose的区别

|维度 | Docker Compose | Kubernetes|
|:-------:|:------:|:-----:|
|🌱 初衷 | 本地开发/测试中快速启动多个容器 | 分布式环境下大规模容器编排与管理|
|⚙️ 定义方式 | docker-compose.yml | 多种 YAML 文件（Deployment、Service、Ingress等）|
|🔁 生命周期管理 | 简单：up, down, restart | 完善：RollingUpdate, Auto healing, Scale, Jobs, 等|
|⚖️ 扩容/缩容 | 手动 scale 命令，较为简单 | 自动扩缩容 (HPA)、Pod 水平扩展|
|🔧 网络 | 默认 bridge 网络 | 完善的 CNI 插件支持、跨主机网络|
|📦 存储卷 | 使用 host bind mounts/volumes | 支持持久卷（PV/PVC）、StorageClass|
|🧠 调度策略 | 无调度，仅运行在一个节点上 | 有调度器，支持资源优化分布|
|🔐 安全与权限 | 基础网络隔离 | 支持 RBAC、Pod 安全策略、NetworkPolicy|
|📡 服务发现 | 基于容器名称的 DNS | 自动注册服务，Service + CoreDNS|
|📈 健康检查 | 支持基本的 healthcheck | 支持 livenessProbe, readinessProbe|
|🧪 开发体验 | 极简适合开发者快速启动 | 相对复杂，需要学习曲线|
|🏗️ 适合场景 | 本地开发、简单项目 | 生产环境、大规模服务|