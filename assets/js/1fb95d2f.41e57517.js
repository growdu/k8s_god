"use strict";(self.webpackChunkk_8_s_god=self.webpackChunkk_8_s_god||[]).push([[1741],{28453:(e,a,r)=>{r.d(a,{R:()=>c,x:()=>s});var t=r(96540);const n={},l=t.createContext(n);function c(e){const a=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(l.Provider,{value:a},e.children)}},84117:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"pgsql/replication/PostgreSQL\u6570\u636e\u5e93\u590d\u5236\u2014\u2014\u540e\u53f0\u4e00\u7b49\u516c\u6c11\u8fdb\u7a0bWalReceiver&startup\u4ea4\u4e92_postgressql walreceive\u7ebf\u7a0b_\u80a5\u53d4\u83cc\u7684\u535a\u5ba2-CSDN\u535a\u5ba2","title":"PostgreSQL\u6570\u636e\u5e93\u590d\u5236\u2014\u2014\u540e\u53f0\u4e00\u7b49\u516c\u6c11\u8fdb\u7a0bWalReceiver&startup\u4ea4\u4e92_postgressql walreceive\u7ebf\u7a0b_\u80a5\u53d4\u83cc\u7684\u535a\u5ba2-CSDN\u535a\u5ba2","description":"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0","source":"@site/docs/pgsql/replication/PostgreSQL\u6570\u636e\u5e93\u590d\u5236\u2014\u2014\u540e\u53f0\u4e00\u7b49\u516c\u6c11\u8fdb\u7a0bWalReceiver&startup\u4ea4\u4e92_postgressql walreceive\u7ebf\u7a0b_\u80a5\u53d4\u83cc\u7684\u535a\u5ba2-CSDN\u535a\u5ba2.md","sourceDirName":"pgsql/replication","slug":"/pgsql/replication/PostgreSQL\u6570\u636e\u5e93\u590d\u5236\u2014\u2014\u540e\u53f0\u4e00\u7b49\u516c\u6c11\u8fdb\u7a0bWalReceiver&startup\u4ea4\u4e92_postgressql walreceive\u7ebf\u7a0b_\u80a5\u53d4\u83cc\u7684\u535a\u5ba2-CSDN\u535a\u5ba2","permalink":"/blog/docs/pgsql/replication/PostgreSQL\u6570\u636e\u5e93\u590d\u5236\u2014\u2014\u540e\u53f0\u4e00\u7b49\u516c\u6c11\u8fdb\u7a0bWalReceiver&startup\u4ea4\u4e92_postgressql walreceive\u7ebf\u7a0b_\u80a5\u53d4\u83cc\u7684\u535a\u5ba2-CSDN\u535a\u5ba2","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/pgsql/replication/PostgreSQL\u6570\u636e\u5e93\u590d\u5236\u2014\u2014\u540e\u53f0\u4e00\u7b49\u516c\u6c11\u8fdb\u7a0bWalReceiver&startup\u4ea4\u4e92_postgressql walreceive\u7ebf\u7a0b_\u80a5\u53d4\u83cc\u7684\u535a\u5ba2-CSDN\u535a\u5ba2.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"PostgreSQL\u590d\u5236\u69fd\u5b9e\u64cd","permalink":"/blog/docs/pgsql/replication/PostgreSQL\u590d\u5236\u69fd\u5b9e\u64cd"},"next":{"title":"PostgreSQL\u7684\u540e\u53f0\u8fdb\u7a0bwalsender\u5206\u6790 - \u5173\u7cfb\u578b\u6570\u636e\u5e93 - \u4ebf\u901f\u4e91","permalink":"/blog/docs/pgsql/replication/PostgreSQL\u7684\u540e\u53f0\u8fdb\u7a0bwalsender\u5206\u6790 - \u5173\u7cfb\u578b\u6570\u636e\u5e93 - \u4ebf\u901f\u4e91"}}');var n=r(74848),l=r(28453);const c={},s=void 0,i={},o=[{value:"startup\u8fdb\u7a0b\u4e3b\u8981\u6d41\u7a0b",id:"startup\u8fdb\u7a0b\u4e3b\u8981\u6d41\u7a0b",level:2},{value:"WalReceiver\u8fdb\u7a0b\u4e3b\u8981\u6d41\u7a0b",id:"walreceiver\u8fdb\u7a0b\u4e3b\u8981\u6d41\u7a0b",level:2},{value:"WalReceiver&amp;startup\u4ea4\u4e92",id:"walreceiverstartup\u4ea4\u4e92",level:2}];function p(e){const a={a:"a",br:"br",code:"code",h2:"h2",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.img,{src:"https://img-blog.csdnimg.cn/89809fb51a0d406a8e4ea2626968c763.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),(0,n.jsx)(a.br,{}),"\n","\u5728PostgreSQL\u6d41\u590d\u5236\u8fc7\u7a0b\u4e2d\uff0c\u6709\u4e09\u4e2a\u8fdb\u7a0b\u534f\u540c\u5de5\u4f5c\uff1awalsender\u8fdb\u7a0b\uff0cwalreceiver\u8fdb\u7a0b\u548cstartup\u8fdb\u7a0b\u3002\u5176\u4e2dwalsender\u8fdb\u7a0b\u5c5e\u4e8e\u4e3b\u8282\u70b9\u7684\u8fdb\u7a0b\uff0c\u4e3b\u8981\u7528\u6765\u5411\u5907\u8282\u70b9\u53d1\u9001wal record\uff1b walreceiver\u548cstartup\u8fdb\u7a0b\u5c5e\u4e8e\u5907\u8282\u70b9\u8fdb\u7a0b\uff0cwal receiver\u4e3b\u8981\u7528\u6765\u63a5\u6536\u4e3b\u7aef\u53d1\u9001\u6765\u7684wal record\u5e76\u5199\u5165\u78c1\u76d8\u4e0a\u7684XLOG\u6587\u4ef6\u4e2d\uff0c\u4e4b\u540estartup\u8fdb\u7a0b\u5c31\u4f1a\u5bf9\u8fd9\u4e9bwal\u6570\u636e\u8fdb\u884creplay\u3002\u4e09\u4e2a\u8fdb\u7a0b\u5171\u540c\u534f\u4f5c\uff0c\u5b8c\u6210\u4e3b\u5907\u7684\u6574\u4e2a\u6d41\u590d\u5236\u8fc7\u7a0b\u3002\u672c\u7bc7\u535a\u5ba2\u4e3b\u8981\u5173\u6ce8\u4e8eWalReceiver\u8fdb\u7a0b\u548cstartup\u8fdb\u7a0b\u4e4b\u95f4\u7684\u4ea4\u4e92\u903b\u8f91\u3002\u9996\u5148\u770b\u4e00\u4e0b\u8fd9\u4e09\u4e2a\u8fdb\u7a0b\u7684\u8c03\u7528\u5806\u6808\uff0c\u53ef\u4ee5\u66f4\u52a0\u65b9\u4fbf\u5b9a\u4f4d\u6240\u9700\u9605\u8bfb\u7684\u4ee3\u7801\u7ec6\u8282\uff1a"]}),"\n",(0,n.jsx)(a.p,{children:"walsender\u8fdb\u7a0b\u662f\u7528\u6765\u53d1\u9001WAL\u65e5\u5fd7\u8bb0\u5f55\u7684\uff0c\u6267\u884c\u987a\u5e8f\u5982\u4e0b\uff1a"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"PostgresMain()->exec_replication_command()->StartReplication()->WalSndLoop()->XLogSendPhysical()"})}),"\n",(0,n.jsx)(a.mermaid,{value:"graph TB\nPostgresMain--\x3eexec_replication_command--\x3eStartReplication\n--\x3eWalSndLoop--\x3eXLogSendPhysical"}),"\n",(0,n.jsxs)(a.p,{children:["walreceiver\u8fdb\u7a0b\u662f\u7528\u6765\u63a5\u6536WAL\u65e5\u5fd7\u8bb0\u5f55\u7684\uff0c\u6267\u884c\u987a\u5e8f\u5982\u4e0b\uff1a",(0,n.jsx)(a.code,{children:"sigusr1_handler()->StartWalReceiver()->AuxiliaryProcessMain()->WalReceiverMain()->walrcv_receive()"})]}),"\n",(0,n.jsx)(a.mermaid,{value:"graph TB\nsigusr1_handler--\x3eStartWalReceiver--\x3eAuxiliaryProcessMain\n--\x3eWalReceiverMain--\x3ewalrcv_receive"}),"\n",(0,n.jsxs)(a.p,{children:["startup\u8fdb\u7a0b\u662f\u7528\u6765apply\u65e5\u5fd7\u7684\uff0c\u6267\u884c\u987a\u5e8f\u5982\u4e0b\uff1a",(0,n.jsx)(a.code,{children:"PostmasterMain()->StartupDataBase()->AuxiliaryProcessMain()->StartupProcessMain()->StartupXLOG()"})]}),"\n",(0,n.jsx)(a.mermaid,{value:"graph TB\nPostmasterMain--\x3eStartupDataBase--\x3eAuxiliaryProcessMain\n--\x3eStartupProcessMain--\x3eStartupXLOG"}),"\n",(0,n.jsx)(a.p,{children:"\u5728\u6d41\u590d\u5236\u542f\u52a8\u8fc7\u7a0b\u4e2d\uff0c\u4e09\u4e2a\u8fdb\u7a0b\u7684\u542f\u52a8\u987a\u5e8f\u662f\u4ece\u5907\u5e93\u5230\u4e3b\u5e93\uff0c\u5373\uff1astartup \u2014> walreceiver \u2014> walsender\u3002\u4f46\u662f\u503c\u5f97\u6ce8\u610f\u7684\u662fStartup\u542f\u52a8\u540e\uff0c\u4e0d\u4f1a\u9a6c\u4e0a\u53d1\u9001\u4fe1\u53f7\u7ed9postmaster\u6765\u542f\u52a8wal receiver\u8fdb\u7a0b\uff0c\u5b83\u5148\u4f1a\u8fdb\u884c\u4e00\u7cfb\u5217\u6761\u4ef6\u7684\u5224\u65ad\u7136\u540e\u51b3\u5b9a\u662f\u5426\u901a\u77e5postmaster\u542f\u52a8wal receiver\u8fdb\u7a0b\u3002 \u6211\u4eec\u77e5\u9053Startup\u8fdb\u7a0b\u56de\u653e\u65e5\u5fd7\u6240\u9700\u8981\u7684WAL\u6587\u4ef6\u67093\u4e2a\u6765\u6e90\uff1a\u5f52\u6863\u4e2d\u83b7\u53d6\u3001pg_wal\u6587\u4ef6\u5939\u4e0b\u83b7\u53d6\u3001\u4eceprimary \u8282\u70b9\u4ee5\u6d41\u590d\u5236\u65b9\u5f0f\u83b7\u53d6\u3002\u5728\u5b9e\u9645\u6d41\u590d\u5236\u8fc7\u7a0b\u4e2d\uff0c \u5982\u679c\u662f\u975e\u5f52\u6863\uff0c\u5219\u5148\u4f1a\u4ecepg_wal\u4e2d\u83b7\u53d6\uff1b\u5426\u5219\u4f18\u5148\u4ecearchive\u5f52\u6863\u4e2d\u83b7\u53d6\uff08Archive Mode\uff09\uff1b \u5982\u679c\u4e24\u8005\u90fd\u6ca1\u6709\uff0cstartup\u8981\u6062\u590d\u7684wal\uff0c\u53ea\u80fd\u4eceprimary \u8282\u70b9\u4ee5\u6d41\u590d\u5236\u65b9\u5f0f\u83b7\u53d6\uff0c\u8fd9\u65f6startup\u4f1a\u53d1\u9001\u4fe1\u53f7\uff08\u901a\u8fc7\u51fd\u6570SendPostmasterSignal(PMSIGNAL_START_WALRECEIVER) \uff0c\u53ef\u4ee5\u67e5\u770b\u4e4b\u524d\u7684\u535a\u6587\u4e86\u89e3\u8fd9\u6bb5\u8fc7\u7a0b\uff09\u7ed9postmaster\u8fdb\u7a0b\uff0c\u8bf7\u6c42\u5176\u542f\u52a8wal receiver\u8fdb\u7a0b\u4ecePrimary\u8282\u70b9\u6765\u83b7\u53d6wal\u6570\u636e\u3002"}),"\n",(0,n.jsxs)(a.p,{children:["\u5728\u6d41\u590d\u5236\u8fd0\u884c\u4e2d\uff0cWAL\u6570\u636e\u7684\u6d41\u5411\u5219\u662fwalsender\u8fdb\u7a0b\u5360\u636e\u4e3b\u52a8\u4f4d\u7f6e\uff1awalsender \u2014> walreceiver \u2014> startup\u3002\u4ece\u4e3b\u5e93",(0,n.jsx)(a.a,{href:"https://so.csdn.net/so/search?q=backend&spm=1001.2101.3001.7020",children:"backend"}),"\u6267\u884c\u4e1a\u52a1\u64cd\u4f5c\u6240\u4ea7\u751f\u7684XLOG\u4f1a\u987a\u7740\u4e0a\u8ff0\u6d41\u7a0b\u4ece\u4e3b\u5e93walsender\u8fdb\u7a0b\u7f51\u7edc\u53d1\u9001\u5230walreceiver\u7f51\u7edc\u63a5\u6536\u5e76\u843d\u76d8\uff0c\u6700\u7ec8\u5907\u5e93startup\u8fdb\u7a0b\u4f1a\u5bf9XLOG\u8fdb\u884c\u5e94\u7528\u3002"]}),"\n",(0,n.jsx)(a.h2,{id:"startup\u8fdb\u7a0b\u4e3b\u8981\u6d41\u7a0b",children:"startup\u8fdb\u7a0b\u4e3b\u8981\u6d41\u7a0b"}),"\n",(0,n.jsx)(a.p,{children:"startup\u8fdb\u7a0b\u8fdb\u5165standby\u6a21\u5f0f\u548capply\u65e5\u5fd7\u4e3b\u8981\u8fc7\u7a0b\uff1a"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"\u8bfb\u53d6pg_control\u6587\u4ef6\uff0c\u627e\u5230redo\u4f4d\u70b9;\u8bfb\u53d6recovery.conf\uff0c\u5982\u679c\u914d\u7f6estandby_mode=on\u5219\u8fdb\u5165standby\u6a21\u5f0f\u3002"}),"\n",(0,n.jsx)(a.li,{children:"\u5982\u679c\u662fHot Standby\u9700\u8981\u521d\u59cb\u5316clog\u3001subtrans\u3001\u4e8b\u52a1\u73af\u5883\u7b49\u3002\u521d\u59cb\u5316redo\u8d44\u6e90\u7ba1\u7406\u5668\uff0c\u6bd4\u5982Heap\u3001Heap2\u3001Database\u3001XLOG\u7b49\u3002"}),"\n",(0,n.jsxs)(a.li,{children:["\u8bfb\u53d6WAL record\uff0c\u5982\u679crecord\u4e0d\u5b58\u5728\u9700\u8981\u8c03\u7528XLogPageRead->",(0,n.jsx)(a.strong,{children:"WaitForWALToBecomeAvailable->RequestXLogStreaming"}),"\u5524\u9192walreceiver\u4ecewalsender\u83b7\u53d6WAL record\u3002"]}),"\n",(0,n.jsx)(a.li,{children:"\u5bf9\u8bfb\u53d6\u7684WAL record\u8fdb\u884credo\uff0c\u901a\u8fc7record->xl_rmid\u4fe1\u606f\uff0c\u8c03\u7528\u76f8\u5e94\u7684redo\u8d44\u6e90\u7ba1\u7406\u5668\u8fdb\u884credo\u64cd\u4f5c\u3002\u6bd4\u5982heap_redo\u7684XLOG_HEAP_INSERT\u64cd\u4f5c\uff0c\u5c31\u662f\u901a\u8fc7record\u7684\u4fe1\u606f\u5728buffer page\u4e2d\u589e\u52a0\u4e00\u4e2arecord\u3002\u8fd8\u6709\u90e8\u5206redo\u64cd\u4f5c(vacuum\u4ea7\u751f\u7684record)\u9700\u8981\u68c0\u67e5\u5728Hot Standby\u6a21\u5f0f\u4e0b\u7684\u67e5\u8be2\u51b2\u7a81\uff0c\u6bd4\u5982\u67d0\u4e9btuples\u9700\u8981remove\uff0c\u800c\u5b58\u5728\u6b63\u5728\u6267\u884c\u7684query\u53ef\u80fd\u8bfb\u5230\u8fd9\u4e9btuples\uff0c\u8fd9\u6837\u5c31\u4f1a\u7834\u574f\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u3002\u901a\u8fc7\u51fd\u6570ResolveRecoveryConflictWithSnapshot\u68c0\u6d4b\u51b2\u7a81\uff0c\u5982\u679c\u53d1\u751f\u51b2\u7a81\uff0c\u90a3\u4e48\u5c31\u628a\u8fd9\u4e2aquery\u6240\u5728\u7684\u8fdb\u7a0bkill\u6389\u3002"}),"\n",(0,n.jsx)(a.li,{children:"\u68c0\u67e5\u4e00\u81f4\u6027\uff0c\u5982\u679c\u4e00\u81f4\u4e86\uff0cHot Standby\u6a21\u5f0f\u53ef\u4ee5\u63a5\u53d7\u7528\u6237\u53ea\u8bfb\u67e5\u8be2\uff1b\u66f4\u65b0\u5171\u4eab\u5185\u5b58\u4e2dXLogCtlData\u7684apply\u4f4d\u70b9\u548c\u65f6\u95f4\u7ebf\uff1b\u5982\u679c\u6062\u590d\u5230\u65f6\u95f4\u70b9\uff0c\u65f6\u95f4\u7ebf\u6216\u8005\u4e8b\u52a1id\u9700\u8981\u68c0\u67e5\u662f\u5426\u6062\u590d\u5230\u5f53\u524d\u76ee\u6807\uff1b"}),"\n",(0,n.jsxs)(a.li,{children:["\u56de\u5230\u6b65\u9aa43\uff0c\u8bfb\u53d6next WAL record\u3002",(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.img,{src:"https://img-blog.csdnimg.cn/a910be3896b14ef785476802a1b34533.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"walreceiver\u8fdb\u7a0b\u4e3b\u8981\u6d41\u7a0b",children:"WalReceiver\u8fdb\u7a0b\u4e3b\u8981\u6d41\u7a0b"}),"\n",(0,n.jsx)(a.p,{children:"WalReceiver\u8fdb\u7a0b\u8fdb\u5165\u5de5\u4f5c\u72b6\u6001\u540e\u4e3b\u8981\u6267\u884c\u6d41\u7a0b\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["WalReceiver\u8fdb\u7a0b\u8fdb\u5165\u6d41\u590d\u5236\u4e4b\u524d\uff0c",(0,n.jsx)(a.strong,{children:"startup\u8fdb\u7a0b\u5df2\u7ecfrecovery.conf\u6587\u4ef6\u4e2d\u7684primary_conninfo\u53c2\u6570\u4fe1\u606f\u89e3\u6790\u540e\u586b\u5145"}),"\u5230",(0,n.jsx)(a.code,{children:"walrcv->conninfo"}),"\u3001",(0,n.jsx)(a.code,{children:"walrcv->slotname"}),"\u3001",(0,n.jsx)(a.code,{children:"walrcv->receiveStart"}),"\u3001",(0,n.jsx)(a.code,{children:"walrcv->receiveStartTLI"}),"\u7b49\u5171\u4eab\u5185\u5b58WalRcvData\u4e2d\u3002 WalReceiver\u8fdb\u7a0b\u901a\u8fc7walrcv_connect\u8fde\u63a5\u4e3b\u5e93\u3002"]}),"\n",(0,n.jsx)(a.li,{children:"\u8fdb\u5165\u7b2c\u4e00\u5c42\u6b7b\u5faa\u73af\uff0c\u6267\u884cidentify_system\u547d\u4ee4\uff0c\u83b7\u53d6\u4e3b\u5e93systemid/timeline/xlogpos\u7b49\u4fe1\u606f\uff0c\u6267\u884cTIMELINE_HISTORY\u547d\u4ee4\u62c9\u53d6history\u6587\u4ef6\uff0c\u5982\u679c\u9700\u8981\uff0c\u5219\u521b\u5efa\u4e34\u65f6\u590d\u5236\u69fd\u3002"}),"\n",(0,n.jsxs)(a.li,{children:["(3.1)\u6267\u884cwal_startstreaming\u5f00\u59cb\u542f\u52a8\u6d41\u590d\u5236",(0,n.jsx)(a.br,{}),"\n","\uff083.1.1\uff09\u901a\u8fc7walrcv_receive\u83b7\u53d6WAL\u65e5\u5fd7\uff0c\u5e76\u5411wal segment\u6587\u4ef6\u4e2d\u5199\u5165xlog\uff0c\u671f\u95f4\u4e5f\u4f1a\u56de\u5e94\u4e3b\u5e93\u53d1\u8fc7\u6765\u7684\u5fc3\u8df3\u4fe1\u606f(\u53d1\u9001write\u4f4d\u70b9\u3001flush\u4f4d\u70b9\u3001apply\u4f4d\u70b9)",(0,n.jsx)(a.br,{}),"\n","\uff083.1.2\uff09\u5982\u679cwalrcv_receive\u83b7\u53d6\u4e0d\u5230\u6570\u636e\uff0c\u5411\u4e3b\u5e93\u53d1\u9001write\u4f4d\u70b9\u3001flush\u4f4d\u70b9\u3001apply\u4f4d\u70b9\uff0c\u53d1\u9001feedback\u4fe1\u606f(xmin\u3001xmin_epoch\u3001catalog_xmin\u3001catalog_xmin_epoch)\uff0c\u907f\u514dvacuum\u5220\u6389\u5907\u5e93\u6b63\u5728\u4f7f\u7528\u7684\u8bb0\u5f55\uff0c\u5982\u679cflush\u4e86XLOG\u903b\u8f91\u4f4d\u7f6e",(0,n.jsx)(a.strong,{children:"\u5524\u9192startup\u8fdb\u7a0b"}),"\uff0c\u8df3\u8f6c\u52304",(0,n.jsx)(a.br,{}),"\n","\uff083.1.3\uff09\u5982\u679cwalrcv_receive\u83b7\u53d6EOF\uff0c\u5411\u4e3b\u5e93\u53d1\u9001write\u4f4d\u70b9\u3001flush\u4f4d\u70b9\u3001apply\u4f4d\u70b9\uff0c\u53d1\u9001feedback\u4fe1\u606f(xmin\u3001xmin_epoch\u3001catalog_xmin\u3001catalog_xmin_epoch)\uff0c\u907f\u514dvacuum\u5220\u6389\u5907\u5e93\u6b63\u5728\u4f7f\u7528\u7684\u8bb0\u5f55\uff0c\u5982\u679cflush\u4e86XLOG\u903b\u8f91\u4f4d\u7f6e",(0,n.jsx)(a.strong,{children:"\u5524\u9192startup\u8fdb\u7a0b"}),"\uff0c\u8df3\u8f6c\u52305",(0,n.jsx)(a.br,{}),"\n","(3.2)\u5982\u679cwal_startstreaming\u8fd4\u56defalse\uff0c\u8bf4\u660e\u4e3b\u5e93\u5728\u8be5\u65f6\u95f4\u7ebf\u4e0a\u5df2\u7ecf\u6ca1\u6709wal\u53ef\u4ee5\u53d1\u9001\u4e86\uff0c\u8df3\u8f6c\u52306"]}),"\n",(0,n.jsxs)(a.li,{children:["WaitLatchOrSocket\u7b49\u5f85\u8d85\u65f6/\u7f51\u7edc\u53ef\u8bfb/latch\u88ab\u89e6\u53d1\uff1a",(0,n.jsx)(a.br,{}),"\n","\uff084.1\uff09\u7b49\u5f85\u8d85\u65f6\uff0c\u5411\u4e3b\u5e93\u53d1\u9001\u63a5\u6536\u4f4d\u70b9\u3001flush\u4f4d\u70b9\u3001apply\u4f4d\u70b9\uff0c\u53d1\u9001feedback\u4fe1\u606f(xmin\u3001xmin_epoch\u3001catalog_xmin\u3001catalog_xmin_epoch)\uff0c\u8df3\u8f6c\u52303.1.x",(0,n.jsx)(a.br,{}),"\n","\uff084.2\uff09",(0,n.jsx)(a.strong,{children:"startup\u8fdb\u7a0b\u901a\u8fc7latch\u5524\u9192WalReceiver"}),"\u8fdb\u7a0b\uff0c\u5411\u4e3b\u5e93\u53d1\u9001write\u4f4d\u70b9\u3001flush\u4f4d\u70b9\u3001apply\u4f4d\u70b9\uff0c\u8df3\u8f6c\u52303.1.x"]}),"\n",(0,n.jsx)(a.li,{children:"\u6267\u884cwalrcv_endstreaming\u7ed3\u675f\u6d41\u590d\u5236\uff0c\u63a5\u6536wal sender\u53d1\u9001\u8fc7\u6765\u7684\u65f6\u95f4\u7ebf\u6587\u4ef6\uff0c\u8fdb\u5165\u6b65\u9aa46"}),"\n",(0,n.jsxs)(a.li,{children:["\u5173\u95ed\u76ee\u524d\u7684xlog segment\u6587\u4ef6\u63cf\u8ff0\u7b26\uff0c\u53d1\u9001feedback\u4fe1\u606f(xmin\u3001xmin_epoch\u3001catalog_xmin\u3001catalog_xmin_epoch)\uff0c\u5982\u679cflush\u4e86XLOG\u903b\u8f91\u4f4d\u7f6e",(0,n.jsx)(a.strong,{children:"\u5524\u9192startup\u8fdb\u7a0b"}),"\uff0c\u8fdb\u5165\u6b65\u9aa47"]}),"\n",(0,n.jsxs)(a.li,{children:["WalRcvWaitForStartPosition\u51fd\u6570",(0,n.jsx)(a.strong,{children:"\u7b49\u5f85startup\u8fdb\u7a0b\u66f4\u65b0receiveStart\u548creceiveStartTLI"}),"\uff0c\u4e00\u65e6\u66f4\u65b0\uff0c\u8fdb\u5165\u6b65\u9aa42\u3002",(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.img,{src:"https://img-blog.csdnimg.cn/7e90eba69283455c82161be643301839.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"walreceiverstartup\u4ea4\u4e92",children:"WalReceiver&startup\u4ea4\u4e92"}),"\n",(0,n.jsx)(a.mermaid,{value:"graph TB\nXLogPageRead--\x3eWaitForWALToBecomeAvailable--\x3eRequestXLogStreaming\n--\x3e|\u53d1\u9001PMSIGNAL_START_WALRECEIVER\u4fe1\u53f7\u542f\u52a8walreceiver|SendPostmasterSignal\n--\x3esigusr1_handler--\x3eStartWalReceiver--\x3eAuxiliaryProcessMain\n--\x3eWalReceiverMain--\x3ewalrcv_receive"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["startup\u8fdb\u7a0b\u5411postmaster\u8bf7\u6c42\u542f\u52a8WalReceiver\u8fdb\u7a0b",(0,n.jsx)(a.br,{}),"\n","startup\u8fdb\u7a0b\u901a\u8fc7\u5982\u4e0b",(0,n.jsx)(a.code,{children:"WaitForWALToBecomeAvailable->RequestXLogStreaming"}),"\u6d41\u7a0b\u8bbe\u7f6ereceiveStart\u548creceiveStartTLI\uff0c\u8981\u6c42WalReceiver\u8fdb\u884c\u6d41\u590d\u5236\u3002"]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"void RequestXLogStreaming(TimeLineID tli, XLogRecPtr recptr, const char *conninfo, const char *slotname, bool create_temp_slot) {\nWalRcvData *walrcv = WalRcv;\n...\nwalrcv->receiveStart = recptr;\nwalrcv->receiveStartTLI = tli;\nlatch = walrcv->latch;\nSpinLockRelease(&walrcv->mutex);\n    // startup\u8fdb\u7a0b\u5c06WalReceiver\u72b6\u6001\u4eceWALRCV_STOPPED\u8f6c\u53d8\u4e3aWALRCV_STARTING\u65f6\uff0c\u8bbe\u7f6elaunch\u4e3atrue\uff0c\u5411postmaster\u8bf7\u6c42\u542f\u52a8WalReceiver\u8fdb\u7a0b\n    // startup\u8fdb\u7a0b\u901a\u8fc7latch\u5524\u9192WalReceiver\u8fdb\u7a0b\nif (launch) SendPostmasterSignal(PMSIGNAL_START_WALRECEIVER);\nelse if (latch) SetLatch(latch);\n}\n"})}),"\n",(0,n.jsxs)(a.ol,{start:"2",children:["\n",(0,n.jsx)(a.li,{children:"walReceiver\u8fdb\u7a0b\u8c03\u7528XLogWalRcvFlush\u51fd\u6570\u5982\u679c\u5df2\u7ecfflush\u4e86XLOG\u903b\u8f91\u4f4d\u7f6e\u5219\u5524\u9192startup\u8fdb\u7a0b"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"static void XLogWalRcvFlush(bool dying) {\nif (LogstreamResult.Flush < LogstreamResult.Write) {\nWalRcvData *walrcv = WalRcv;\nissue_xlog_fsync(recvFile, recvSegNo);\nLogstreamResult.Flush = LogstreamResult.Write;\n/* Update shared-memory status */\nSpinLockAcquire(&walrcv->mutex);\nif (walrcv->flushedUpto < LogstreamResult.Flush) {\nwalrcv->latestChunkStart = walrcv->flushedUpto;\nwalrcv->flushedUpto = LogstreamResult.Flush;\nwalrcv->receivedTLI = ThisTimeLineID;\n}\nSpinLockRelease(&walrcv->mutex);\nWakeupRecovery(); /* Signal the startup process and walsender that new WAL has arrived */ // \u5524\u9192startup\u8fdb\u7a0b\nif (AllowCascadeReplication()) WalSndWakeup();\nif (!dying) { /* Also let the primary know that we made some progress */\nXLogWalRcvSendReply(false, false);\nXLogWalRcvSendHSFeedback(false);\n}\n}\n}\n"})}),"\n",(0,n.jsxs)(a.ol,{start:"3",children:["\n",(0,n.jsxs)(a.li,{children:["startup\u8fdb\u7a0b\u8981\u6c42WalReceiver\u8fdb\u884c\u73b0\u5728\u53d1\u9001\u5e94\u7528\u53cd\u9988\uff0c\u6bcf\u5f53\u5e94\u7528interesting xlog records\u65f6\uff0cstartup\u8fdb\u7a0b\u90fd\u4f1a\u8c03\u7528\u6b64\u65b9\u6cd5\uff0c\u4ee5\u4fbf walreceiver \u53ef\u4ee5\u68c0\u67e5\u5b83\u662f\u5426\u9700\u8981\u5c06apply\u901a\u77e5\uff08notification\uff09\u53d1\u9001\u56de\u4e3b\u8282\u70b9\uff0c\u4e3b\u5e93\u53ef\u80fd\u5728\u5e94\u7528\u4e86",(0,n.jsx)(a.strong,{children:"synchronous_commit = remote_apply"}),"\u53c2\u6570\u7684COMMIT\u4e2d\u7b49\u5f85walreceiver\u7684\u53cd\u9988\u3002\u4ece\u8fd9\u91cc\u53ef\u4ee5\u770b\u5230WalReceiver\u9664\u4e86\u53d1\u9001write\u4f4d\u70b9\u3001flush\u4f4d\u70b9\u3001apply\u4f4d\u70b9\u6d88\u606f\u4e4b\u5916\uff0c\u9488\u5bf9remote_apply\u4ece\u5e93\u5e94\u7528\u4e4b\u540e\u624dcommit\u8fd9\u79cd\u60c5\u51b5\uff0c\u589e\u52a0\u4e86startup\u8fdb\u7a0b\u5f3a\u5236WalReceiver\u5524\u9192\u53d1\u9001\u53cd\u9988\u8fd9\u4e00\u7279\u6027\uff0c\u52a0\u901f\u4e3b\u5e93\u8fdb\u884ccommit\u64cd\u4f5c\u3002"]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"void WalRcvForceReply(void) {\nLatch   *latch;\nWalRcv->force_reply = true;  // \u8bbe\u7f6e\u5f3a\u5236\u56de\u590d\u6807\u5fd7\nSpinLockAcquire(&WalRcv->mutex); /* fetching the latch pointer might not be atomic, so use spinlock */\nlatch = WalRcv->latch;\nSpinLockRelease(&WalRcv->mutex);\nif (latch) SetLatch(latch);\n}\n"})}),"\n",(0,n.jsxs)(a.ol,{start:"4",children:["\n",(0,n.jsx)(a.li,{children:"walReceiver\u8fdb\u7a0bWalRcvWaitForStartPosition\u51fd\u6570\u7b49\u5f85startup\u8fdb\u7a0b\u8bbe\u7f6ereceiveStart\u548creceiveStartTLI"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"static void WalRcvWaitForStartPosition(XLogRecPtr *startpoint, TimeLineID *startpointTLI) {\nWalRcvData *walrcv = WalRcv;\nintstate;\nSpinLockAcquire(&walrcv->mutex);\nstate = walrcv->walRcvState;\nif (state != WALRCV_STREAMING) {\nSpinLockRelease(&walrcv->mutex);\nif (state == WALRCV_STOPPING) proc_exit(0);\nelse elog(FATAL, \"unexpected walreceiver state\");\n}\nwalrcv->walRcvState = WALRCV_WAITING;\nwalrcv->receiveStart = InvalidXLogRecPtr;\nwalrcv->receiveStartTLI = 0;\nSpinLockRelease(&walrcv->mutex);\n/* nudge startup process to notice that we've stopped streaming and are now waiting for instructions. */\nWakeupRecovery();\nfor (;;) {\nResetLatch(MyLatch);\nProcessWalRcvInterrupts();\nSpinLockAcquire(&walrcv->mutex);\nif (walrcv->walRcvState == WALRCV_RESTARTING) {\n/* No need to handle changes in primary_conninfo or primary_slotname here. Startup process will signal us to terminate in case those change. */\n*startpoint = walrcv->receiveStart;\n*startpointTLI = walrcv->receiveStartTLI;\nwalrcv->walRcvState = WALRCV_STREAMING;\nSpinLockRelease(&walrcv->mutex);\nbreak;\n}\nif (walrcv->walRcvState == WALRCV_STOPPING) { /* We should've received SIGTERM if the startup process wants us to die, but might as well check it here too. */\nSpinLockRelease(&walrcv->mutex);\nexit(1);\n}\nSpinLockRelease(&walrcv->mutex);\n(void) WaitLatch(MyLatch, WL_LATCH_SET | WL_EXIT_ON_PM_DEATH, 0, WAIT_EVENT_WAL_RECEIVER_WAIT_START);\n}\n}\n"})}),"\n",(0,n.jsxs)(a.p,{children:["startup\u8fdb\u7a0b\u5219\u901a\u8fc7",(0,n.jsx)(a.code,{children:"WaitForWALToBecomeAvailable->RequestXLogStreaming"}),"\u6d41\u7a0b\u8bbe\u7f6ereceiveStart\u548creceiveStartTLI\uff0c\u5e76\u4e14\u662f\u901a\u8fc7",(0,n.jsx)(a.a,{href:"https://so.csdn.net/so/search?q=latch&spm=1001.2101.3001.7020",children:"latch"}),"\u5524\u9192WalReceiver\u8fdb\u7a0b\u3002"]}),"\n",(0,n.jsxs)(a.ol,{start:"5",children:["\n",(0,n.jsxs)(a.li,{children:["walReceiver\u8fdb\u7a0b\u5173\u95ed",(0,n.jsx)(a.br,{}),"\n","(1) startup\u8fdb\u7a0b\u6267\u884c\u5982\u4e0bShutdownWalRcv\u51fd\u6570\u8bf7\u6c42walreceiver\u8fdb\u7a0b\u5173\u95ed\uff0c\u5e76\u901a\u8fc7walRcvStoppedCV\u76d1\u89c6walReceiver\u8fdb\u7a0b\u5173\u95ed\uff0c\u7b49\u5f85 walreceiver \u901a\u8fc7\u5c06\u72b6\u6001\u8bbe\u7f6e\u4e3a WALRCV_STOPPED \u6765\u786e\u8ba4\u5176\u6b7b\u4ea1\u3002"]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"void ShutdownWalRcv(void) {\nWalRcvData *walrcv = WalRcv;\npid_twalrcvpid = 0;\nboolstopped = false;\n/* Request walreceiver to stop. Walreceiver will switch to WALRCV_STOPPED mode once it's finished, and will also request postmaster to not restart itself.*/ // \u8bf7\u6c42walreceiver\u8fdb\u7a0b\u5173\u95ed\nSpinLockAcquire(&walrcv->mutex);\nswitch (walrcv->walRcvState) {\ncase WALRCV_STOPPED: break;\ncase WALRCV_STARTING:\nwalrcv->walRcvState = WALRCV_STOPPED;\nstopped = true;\nbreak;\ncase WALRCV_STREAMING:\ncase WALRCV_WAITING:\ncase WALRCV_RESTARTING:\nwalrcv->walRcvState = WALRCV_STOPPING;\n/* fall through */\ncase WALRCV_STOPPING:\nwalrcvpid = walrcv->pid;\nbreak;\n}\nSpinLockRelease(&walrcv->mutex);\n/* Unnecessary but consistent. */\nif (stopped) ConditionVariableBroadcast(&walrcv->walRcvStoppedCV);\n\n/* Signal walreceiver process if it was still running. */ // \u5411walreceiver\u8fdb\u7a0b\u53d1\u9001SIGTERM\u4fe1\u53f7\nif (walrcvpid != 0) kill(walrcvpid, SIGTERM);\n\n/* Wait for walreceiver to acknowledge its death by setting state to WALRCV_STOPPED. */ // \u7b49\u5f85 walreceiver \u901a\u8fc7\u5c06\u72b6\u6001\u8bbe\u7f6e\u4e3a WALRCV_STOPPED \u6765\u786e\u8ba4\u5176\u6b7b\u4ea1\nConditionVariablePrepareToSleep(&walrcv->walRcvStoppedCV);\nwhile (WalRcvRunning())\nConditionVariableSleep(&walrcv->walRcvStoppedCV, WAIT_EVENT_WAL_RECEIVER_EXIT);\nConditionVariableCancelSleep();\n}\n"})}),"\n",(0,n.jsx)(a.p,{children:"walReceiver\u8fdb\u7a0b\u4fe1\u53f7\u5904\u7406\u51fd\u6570WalRcvDie\u5411walRcvStoppedCV\u6761\u4ef6\u53d8\u91cf\u8fdb\u884c\u5e7f\u64ad\uff0c\u901a\u77e5startup\u8fdb\u7a0b\u3002"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"static void WalRcvDie(int code, Datum arg) {\nWalRcvData *walrcv = WalRcv;\nXLogWalRcvFlush(true); /* Ensure that all WAL records received are flushed to disk */\nSpinLockAcquire(&walrcv->mutex); /* Mark ourselves inactive in shared memory */\nwalrcv->walRcvState = WALRCV_STOPPED;\nwalrcv->pid = 0;\nwalrcv->ready_to_display = false;\nwalrcv->latch = NULL;\nSpinLockRelease(&walrcv->mutex);\nConditionVariableBroadcast(&walrcv->walRcvStoppedCV);\nif (wrconn != NULL) walrcv_disconnect(wrconn); /* Terminate the connection gracefully. */\nWakeupRecovery(); /* Wake up the startup process to notice promptly that we're gone */\n}\n"})}),"\n",(0,n.jsxs)(a.p,{children:["walReceiver\u8fdb\u7a0bWalReceiverMain\u5904\u7406walRcvState\u72b6\u6001\u5411walRcvStoppedCV\u6761\u4ef6\u53d8\u91cf\u8fdb\u884c\u5e7f\u64ad\uff0c\u901a\u77e5startup\u8fdb\u7a0b\u3002",(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.img,{src:"https://img-blog.csdnimg.cn/eebf23b0f51f4f9da7586f9b7556a6e5.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})]}),"\n",(0,n.jsxs)(a.p,{children:["(2) startup\u8fdb\u7a0bWaitForWALToBecomeAvailable\u4f1a\u901a\u8fc7WalRcvStreaming\u4eceWALRCV_STARTING\u72b6\u6001\u5411Streaming\u8f6c\u53d8\u6216\u662f\u5426\u5b58\u6d3b\u3002",(0,n.jsx)(a.br,{}),"\n","startup\u8fdb\u7a0b\u901a\u8fc7WalRcvRunning\u51fd\u6570\u76d1\u63a7walReceiver\u8fdb\u7a0b\u4eceWALRCV_STARTING\u72b6\u6001\u5411Running\u8f6c\u53d8\u8d85\u65f6\u6216\u662f\u5426\u5b58\u6d3b\uff0c\u4f1a\u5411walRcvStoppedCV\u6761\u4ef6\u53d8\u91cf\u8fdb\u884c\u5e7f\u64ad\uff0c\u4ee5\u4fdd\u8bc1\u9000\u51faShutdownWalRcv\u51fd\u6570\u7684\u8fd9\u4e2asleep\u5faa\u73af\u3002\u6216\u8005\u5728\u542f\u52a8\u8fdb\u7a0b\u91cd\u8f7d\u914d\u7f6e\u6587\u4ef6\u65f6StartupRequestWalReceiverRestart\u51fd\u6570\u4f1a\u8c03\u7528WalRcvRunning\u51fd\u6570\u3002",(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.img,{src:"https://img-blog.csdnimg.cn/07fb7230cc7146babc71146ad76985a6.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})]}),"\n",(0,n.jsxs)(a.p,{children:["\u56fe\u7247\u548c\u90e8\u5206\u5185\u5bb9\u53c2\u8003\u81ea\u963f\u91cc\u5185\u6838\u6708\u62a5 ",(0,n.jsx)(a.a,{href:"https://www.kancloud.cn/taobaomysql/monthly/81110",children:"https://www.kancloud.cn/taobaomysql/monthly/81110"}),(0,n.jsx)(a.br,{}),"\n","\u5728\u8fd9\u91cc\u8877\u5fc3\u611f\u8c22\u963f\u91cc\u5185\u6838\u56e2\u961f\u7684\u5206\u4eab"]})]})}function d(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}}}]);