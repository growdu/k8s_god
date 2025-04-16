"use strict";(self.webpackChunkk_8_s_god=self.webpackChunkk_8_s_god||[]).push([[3870],{28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var r=s(96540);const a={},t=r.createContext(a);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(t.Provider,{value:n},e.children)}},72226:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"pgsql/replication/pg_walsender","title":"pg_walsender","description":"walsender\u5206\u6790\u5206\u4e3a\u4e24\u90e8\u5206\uff0c","source":"@site/docs/pgsql/replication/pg_walsender.md","sourceDirName":"pgsql/replication","slug":"/pgsql/replication/pg_walsender","permalink":"/blog/docs/pgsql/replication/pg_walsender","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/pgsql/replication/pg_walsender.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"pg_walreceiver","permalink":"/blog/docs/pgsql/replication/pg_walreceiver"},"next":{"title":"postgresql startup\u5904\u7406 - postgresql\u5185\u6838\u5206\u6790 - SegmentFault \u601d\u5426","permalink":"/blog/docs/pgsql/replication/postgresql startup\u5904\u7406 - postgresql\u5185\u6838\u5206\u6790 - SegmentFault \u601d\u5426"}}');var a=s(74848),t=s(28453);const l={},i="pg_walsender",d={},c=[{value:"\u5efa\u8fde\u524d",id:"\u5efa\u8fde\u524d",level:2},{value:"\u5168\u5c40\u53d8\u91cf",id:"\u5168\u5c40\u53d8\u91cf",level:3},{value:"\u5bf9\u5916\u63a5\u53e3",id:"\u5bf9\u5916\u63a5\u53e3",level:3},{value:"\u5bf9\u5185\u63a5\u53e3",id:"\u5bf9\u5185\u63a5\u53e3",level:3},{value:"\u6570\u636e\u6a21\u578b",id:"\u6570\u636e\u6a21\u578b",level:3},{value:"\u8bf7\u6c42\u63a5\u6536",id:"\u8bf7\u6c42\u63a5\u6536",level:3},{value:"\u6570\u636e\u53d1\u9001",id:"\u6570\u636e\u53d1\u9001",level:3},{value:"\u5efa\u8fde\u540e",id:"\u5efa\u8fde\u540e",level:2},{value:"\u57fa\u672c\u6d41\u7a0b",id:"\u57fa\u672c\u6d41\u7a0b",level:2},{value:"\u5fc3\u8df3",id:"\u5fc3\u8df3",level:3},{value:"sender\u6d88\u606f\u5904\u7406",id:"sender\u6d88\u606f\u5904\u7406",level:3},{value:"sender\u6d88\u606f\u53d1\u9001",id:"sender\u6d88\u606f\u53d1\u9001",level:3},{value:"\u903b\u8f91\u590d\u5236",id:"\u903b\u8f91\u590d\u5236",level:4},{value:"\u7269\u7406\u590d\u5236",id:"\u7269\u7406\u590d\u5236",level:4}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"pg_walsender",children:"pg_walsender"})}),"\n",(0,a.jsx)(n.p,{children:"walsender\u5206\u6790\u5206\u4e3a\u4e24\u90e8\u5206\uff0c"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u4e0e\u5907\u5e93\u5efa\u7acb\u94fe\u63a5\u524d\u7684\u6d41\u7a0b"}),"\n",(0,a.jsx)(n.p,{children:"\u4e3b\u5e93\u4f1a\u76d1\u542csocket\uff0c\u5e76\u63a5\u53d7\u5907\u5e93\u7684tcp\u94fe\u63a5\u8bf7\u6c42\uff0c\u5f53\u6536\u5230\u5907\u5e93walReceiver\u8bf7\u6c42\u540e\uff0c\u4e3b\u5e93postgres\u5c31\u4f1afork\u51fa\u4e00\u4e2awaksender\u8fdb\u7a0b\u6765\u5904\u7406\u76f8\u5173\u8bf7\u6c42\u3002"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u4e0e\u5907\u5e93\u5efa\u7acb\u94fe\u63a5\u540e\u7684\u6d41\u7a0b"}),"\n",(0,a.jsx)(n.p,{children:"\u5efa\u7acb\u8fde\u63a5\u540e\uff0cwalsender\u9700\u8981\u5224\u65ad\u53d1\u9001\u54ea\u4e9b\u6570\u636e\uff0c\u5e76\u542f\u52a8keepalive\u673a\u5236\uff0c\u63a2\u6d4b\u5907\u5e93receiver\u662f\u5426\u6b63\u5e38\uff0c\u540c\u65f6\u53d1\u9001\u6570\u636e\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5efa\u8fde\u524d",children:"\u5efa\u8fde\u524d"}),"\n",(0,a.jsx)(n.p,{children:"postgres\u4e3b\u8fdb\u7a0b\u542f\u52a8\u540e\uff0c\u4f1a\u76d1\u542c\u914d\u7f6e\u7684\u5730\u5740\uff0c\u7b49\u5f85\u65b0\u7684\u8fde\u63a5\u5230\u6765\u3002\u800cwalsender\u542f\u52a8\u5c31\u662f\u5728\u7b49\u5f85walreceiver\u8fc7\u6765\u8fde\u63a5\u3002"}),"\n",(0,a.jsx)(n.mermaid,{value:"graph TB\nServerLoop--\x3e|\u4f7f\u7528select\u76d1\u542csocket\u5e76\u7b49\u5f85\u65b0\u8fde\u63a5\u5230\u6765|ConnCreate--\x3e|\u63a5\u53d7\u8fde\u63a5\u540e\u8f6c\u5230\u540e\u53f0\u8fd0\u884c|BackendStartup--\x3e|\u521b\u5efa\u65b0\u8fdb\u7a0b\u6765\u5904\u7406\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42|fork_process--\x3eBackendInitialize--\x3e|\u8bfb\u53d6\u542f\u52a8\u62a5\u6587\u5e76\u5224\u65ad\u662f\u4e0d\u662fwalreceiver\u8fde\u63a5|ProcessStartupPacket"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'if (strcmp(valptr, "database") == 0)\n{\n    am_walsender = true;\n    am_db_walsender = true;\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u5f53am_walsender\u8bbe\u7f6e\u4e3atrue\u65f6\uff0c\u5c31\u8868\u793apostgres\u521b\u5efa\u7684\u8fd9\u4e2a\u670d\u52a1\u8fdb\u7a0b\u4e3awalsender\u3002walsender\u8fdb\u7a0b\u4e0e\u666e\u901a\u7684\u6765\u81ea\u5ba2\u6237\u7aef\u7684\u8fde\u63a5\u8fdb\u7a0b\u6ca1\u6709\u4ec0\u4e48\u533a\u522b\uff0c\u53ea\u662fwalsender\u4e13\u95e8\u505a\u6d41\u590d\u5236\u8fd9\u4ef6\u4e8b\uff0c\u540c\u65f6\u5b83\u63a5\u53d7\u5904\u7406\u7684\u662f\u6765\u81eawalreceiver\u7684\u8bf7\u6c42\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u5168\u5c40\u53d8\u91cf",children:"\u5168\u5c40\u53d8\u91cf"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"/* global state */\nextern PGDLLIMPORT bool am_walsender; // \u662f\u5426\u662fwalsender\u8fdb\u7a0b\nextern PGDLLIMPORT bool am_cascading_walsender; // \u662f\u5426\u662f\u7ea7\u8054walsender\nextern PGDLLIMPORT bool am_db_walsender; // \u662f\u5426\u8fde\u63a5\u5230\u6570\u636e\u5e93\nextern PGDLLIMPORT bool wake_wal_senders; \n\n/* user-settable parameters */\nextern PGDLLIMPORT int max_wal_senders; // \u6700\u5927walsender\u8fdb\u7a0b\u6570\nextern PGDLLIMPORT int wal_sender_timeout; // wal\u6d88\u606f\u53d1\u9001\u8d85\u65f6\u65f6\u95f4\nextern PGDLLIMPORT bool log_replication_commands;\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"am_walsender\u548cam_db_walsender"}),"\n",(0,a.jsx)(n.p,{children:"\u89e3\u6790\u542f\u52a8\u53c2\u6570replication\u7684\u503c\u8fdb\u884c\u8d4b\u503c\uff0c\u5982\u679creplication\u7684\u503c\u662fdatabase\u6216\u8005true\u5c31\u8bbe\u7f6e\u8fd9\u4e24\u4e2a\u503c\u4e3atrue\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'                if (strcmp(valptr, "database") == 0)\n                {\n                    am_walsender = true;\n                    am_db_walsender = true;\n                }\n                else if (!parse_bool(valptr, &am_walsender)) {\n\n                }\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"am_cascading_walsender"}),"\n",(0,a.jsx)(n.p,{children:"am_cascading_walsender\u5728\u521d\u59cb\u5316walSnd\u7684\u65f6\u5019\u8d4b\u503c\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"am_cascading_walsender = RecoveryInProgress();\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u503c\u5462\u4e3b\u8981\u6765\u81ea\u4e8e\u5168\u5c40\u7684LocalRecoveryInProgress\uff0cLocalRecoveryInProgress=false\u65f6\u5c31\u662ffalse\uff0c\u5426\u5219\u7684\u8bdd\u5c31\u4ecexlogctl->SharedRecoveryState\u53d6\u503c\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"LocalRecoveryInProgress = (xlogctl->SharedRecoveryState != RECOVERY_STATE_DONE);\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u5bf9\u5916\u63a5\u53e3",children:"\u5bf9\u5916\u63a5\u53e3"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"extern void InitWalSender(void);\nextern bool exec_replication_command(const char *query_string);\nextern void WalSndErrorCleanup(void);\nextern void WalSndResourceCleanup(bool isCommit);\nextern void WalSndSignals(void);\nextern Size WalSndShmemSize(void);\nextern void WalSndShmemInit(void);\nextern void WalSndWakeup(void);\nextern void WalSndInitStopping(void);\nextern void WalSndWaitStopping(void);\nextern void HandleWalSndInitStopping(void);\nextern void WalSndRqstFileReload(void);\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"InitWalSender"}),"\n",(0,a.jsx)(n.p,{children:"\u521d\u59cb\u5316\u4e00\u4e2awalSnd\u3002\u5f53am_walsender\u4e3atrue\u7684\u65f6\u5019\uff0cporstgres\u542f\u52a8\u7684\u65f6\u5019\u5c31\u4f1a\u521d\u59cb\u5316\u4e00\u4e2awalSnd\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.mermaid,{value:"graph TB\nInitWalSender--\x3e|\u521d\u59cb\u5316walSnd|InitWalSenderSlot--\x3eMarkPostmasterChildWalSender--\x3eSendPostmasterSignal--\x3eMemoryContextAllocZero"}),"\n",(0,a.jsx)(n.p,{children:"\u521d\u59cb\u5316slot\u7684\u65f6\u5019\u4f1a\u5c06\u5168\u5c40\u7684WalSndCtl\u7684walsnds\u521d\u59cb\u5316\uff0cwalsnds\u662f\u4e00\u4e2a\u53d8\u957f\u6570\u7ec4\uff0c\u4f1a\u6839\u636emax_wal_senders\u8fdb\u884c\u5185\u5b58\u5206\u914d\u548c\u521d\u59cb\u5316\u3002\u6bcf\u4e2a\u521b\u5efa\u7684walSnd\u90fd\u4f1a\u4fdd\u5b58\u5230\u5168\u5c40\u7684WalSndCtl\u7684\u6570\u7ec4\u4e2d\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u6839\u636ewalSnd\u7684pid\u662f\u5426\u4e3a0\u6765\u5224\u65ad\u662f\u5426\u9700\u8981\u521d\u59cb\u5316\uff0c\u6bcf\u4e2a\u521d\u59cb\u5316\u7684walSnd\u7684\u72b6\u6001\u4e3aWALSNDSTATE_STARTUP\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u5bf9\u5185\u63a5\u53e3",children:"\u5bf9\u5185\u63a5\u53e3"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"extern void WalSndSetState(WalSndState state);\n\n/*\n * Internal functions for parsing the replication grammar, in repl_gram.y and\n * repl_scanner.l\n */\nextern int    replication_yyparse(void);\nextern int    replication_yylex(void);\nextern void replication_yyerror(const char *str) pg_attribute_noreturn();\nextern void replication_scanner_init(const char *query_string);\nextern void replication_scanner_finish(void);\nextern bool replication_scanner_is_replication_command(void);\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"WalSndSetState"}),"\n",(0,a.jsx)(n.p,{children:"\u7528\u6765\u66f4\u6539walSnd\u7684\u72b6\u6001\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u6570\u636e\u6a21\u578b",children:"\u6570\u636e\u6a21\u578b"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"walsender\u72b6\u6001"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"typedef enum WalSndState\n{\n    WALSNDSTATE_STARTUP = 0,\n    WALSNDSTATE_BACKUP,\n    WALSNDSTATE_CATCHUP,\n    WALSNDSTATE_STREAMING,\n    WALSNDSTATE_STOPPING\n} WalSndState;\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"walsender \u7ed3\u6784"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u4e00\u4e2a\u8fdb\u7a0b\u5bf9\u5e94\u4e00\u4e2awalSnd\u7ed3\u6784\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"typedef struct WalSnd\n{\n    pid_t        pid;            /* this walsender's PID, or 0 if not active */\n\n    WalSndState state;            /* this walsender's state */\n    XLogRecPtr    sentPtr;        /* WAL has been sent up to this point */\n    bool        needreload;        /* does currently-open file need to be\n                                 * reloaded? */\n\n    /*\n     * The xlog locations that have been written, flushed, and applied by\n     * standby-side. These may be invalid if the standby-side has not offered\n     * values yet.\n     */\n    XLogRecPtr    write;\n    XLogRecPtr    flush;\n    XLogRecPtr    apply;\n\n    /* Measured lag times, or -1 for unknown/none. */\n    TimeOffset    writeLag;\n    TimeOffset    flushLag;\n    TimeOffset    applyLag;\n\n    /*\n     * The priority order of the standby managed by this WALSender, as listed\n     * in synchronous_standby_names, or 0 if not-listed.\n     */\n    int            sync_standby_priority;\n\n    /* Protects shared variables shown above. */\n    slock_t        mutex;\n\n    /*\n     * Pointer to the walsender's latch. Used by backends to wake up this\n     * walsender when it has work to do. NULL if the walsender isn't active.\n     */\n    Latch       *latch;\n\n    /*\n     * Timestamp of the last message received from standby.\n     */\n    TimestampTz replyTime;\n} WalSnd;\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"WalSndCtlData"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"typedef struct\n{\n    /*\n     * Synchronous replication queue with one queue per request type.\n     * Protected by SyncRepLock.\n     */\n    SHM_QUEUE    SyncRepQueue[NUM_SYNC_REP_WAIT_MODE];\n\n    /*\n     * Current location of the head of the queue. All waiters should have a\n     * waitLSN that follows this value. Protected by SyncRepLock.\n     */\n    XLogRecPtr    lsn[NUM_SYNC_REP_WAIT_MODE];\n\n    /*\n     * Are any sync standbys defined?  Waiting backends can't reload the\n     * config file safely, so checkpointer updates this value as needed.\n     * Protected by SyncRepLock.\n     */\n    bool        sync_standbys_defined;\n\n    WalSnd        walsnds[FLEXIBLE_ARRAY_MEMBER];\n} WalSndCtlData;\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"NodeTag"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"typedef enum NodeTag {\n   .....\n       /*\n     * TAGS FOR REPLICATION GRAMMAR PARSE NODES (replnodes.h)\n     */\n    T_IdentifySystemCmd,\n    T_BaseBackupCmd,\n    T_CreateReplicationSlotCmd,\n    T_DropReplicationSlotCmd,\n    T_ReadReplicationSlotCmd,\n    T_StartReplicationCmd,\n    T_TimeLineHistoryCmd,\n    ......\n} NodeTag;\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"XLogReaderState"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"typedef uint64 XLogRecPtr;\nstruct XLogReaderState\n{\n    XLogReaderRoutine routine;\n    XLogRecPtr    ReadRecPtr;        /* start of last record read */\n    XLogRecPtr    EndRecPtr;        /* end+1 of last record read */\n}\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"XLogReaderRoutine"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"typedef int (*XLogPageReadCB) (XLogReaderState *xlogreader,\n                               XLogRecPtr targetPagePtr,\n                               int reqLen,\n                               XLogRecPtr targetRecPtr,\n                               char *readBuf);\ntypedef void (*WALSegmentOpenCB) (XLogReaderState *xlogreader,\n                                  XLogSegNo nextSegNo,\n                                  TimeLineID *tli_p);\ntypedef void (*WALSegmentCloseCB) (XLogReaderState *xlogreader);\ntypedef struct XLogReaderRoutine\n{\n    XLogPageReadCB page_read;\n    WALSegmentOpenCB segment_open;\n    WALSegmentCloseCB segment_close;\n} XLogReaderRoutine;\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"XLogRecoveryCtlData"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"typedef struct XLogRecoveryCtlData\n{\n    bool        SharedHotStandbyActive;\n\n    bool        SharedPromoteIsTriggered;\n\n    Latch        recoveryWakeupLatch;\n\n    /*\n     * Last record successfully replayed.\n     */\n    XLogRecPtr    lastReplayedReadRecPtr; /* start position */\n    XLogRecPtr    lastReplayedEndRecPtr;    /* end+1 position */\n    TimeLineID    lastReplayedTLI;    /* timeline */\n\n    XLogRecPtr    replayEndRecPtr;\n    TimeLineID    replayEndTLI;\n    /* timestamp of last COMMIT/ABORT record replayed (or being replayed) */\n    TimestampTz recoveryLastXTime;\n\n    TimestampTz currentChunkStartTime;\n    /* Recovery pause state */\n    RecoveryPauseState recoveryPauseState;\n    ConditionVariable recoveryNotPausedCV;\n\n    slock_t        info_lck;        /* locks shared variables shown above */\n} XLogRecoveryCtlData;\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u8bf7\u6c42\u63a5\u6536",children:"\u8bf7\u6c42\u63a5\u6536"}),"\n",(0,a.jsx)(n.p,{children:"postgresmain\u4f1a\u76d1\u542csocket\uff0c\u5e76\u63a5\u53d7\u5bf9\u7aef\u7684\u8bf7\u6c42\u3002"}),"\n",(0,a.jsx)(n.mermaid,{value:"graph TB\nPostgresMain--\x3eReadCommand--\x3eSocketBackend--\x3epq_getbyte--\x3epq_recvbuf--\x3esecure_read--\x3esecure_raw_read--\x3erecv\npq_getbyte--\x3e|firstChar=='Q'|exec_replication_command"}),"\n",(0,a.jsx)(n.h3,{id:"\u6570\u636e\u53d1\u9001",children:"\u6570\u636e\u53d1\u9001"}),"\n",(0,a.jsx)(n.p,{children:"\u6570\u636e\u901a\u8fc7socket\u63a5\u53e3\u8fdb\u884c\u53d1\u9001\uff0c\u6700\u7ec8\u6570\u636e\u51fa\u53e3\u4e3a\u64cd\u4f5c\u7cfb\u7edf\u63d0\u4f9b\u7684socket\u63a5\u53e3\u7684send\u51fd\u6570\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"typedef struct\n{\n    void        (*comm_reset) (void);\n    int            (*flush) (void);\n    int            (*flush_if_writable) (void);\n    bool        (*is_send_pending) (void);\n    int            (*putmessage) (char msgtype, const char *s, size_t len);\n    void        (*putmessage_noblock) (char msgtype, const char *s, size_t len);\n} PQcommMethods;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"static const PQcommMethods PqCommSocketMethods = {\n    socket_comm_reset,\n    socket_flush,\n    socket_flush_if_writable,\n    socket_is_send_pending,\n    socket_putmessage,\n    socket_putmessage_noblock\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5176\u6267\u884c\u6d41\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(n.mermaid,{value:"graph TB\nXLogSendPhysical--\x3epq_putmessage_noblock--\x3esocket_putmessage_noblock--\x3esocket_putmessage--\x3einternal_putbytes--\x3einternal_flush--\x3esecure_write--\x3esecure_raw_write--\x3esend"}),"\n",(0,a.jsx)(n.h2,{id:"\u5efa\u8fde\u540e",children:"\u5efa\u8fde\u540e"}),"\n",(0,a.jsx)(n.h2,{id:"\u57fa\u672c\u6d41\u7a0b",children:"\u57fa\u672c\u6d41\u7a0b"}),"\n",(0,a.jsx)(n.p,{children:"\u5efa\u7acb\u8fde\u63a5\u540e\uff0cwalsender\u4f1a\u8fdb\u5165\u4e00\u4e2a\u5faa\u73af\u4e2d\uff0c\u5faa\u73af\u5224\u65ad\u662f\u5426\u9700\u8981\u53d1\u9001\u6570\u636e\uff0c\u662f\u5426\u9700\u8981\u542f\u52a8\u5fc3\u8df3\u673a\u5236\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u5176\u6d41\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(n.mermaid,{value:"graph TB\nWalSndLoop--\x3e|\u63a5\u6536\u62a5\u6587|ProcessRepliesIfAny--\x3e|\u5224\u65ad\u9700\u8981\u53d1\u9001\u62a5\u6587|send_data--\x3e|\u68c0\u67e5\u5fc3\u8df3\u662f\u5426\u8d85\u65f6|WalSndCheckTimeOut--\x3e|\u672a\u8d85\u65f6\u68c0\u67e5\u662f\u5426\u9700\u8981\u53d1\u9001\u5fc3\u8df3|WalSndKeepaliveIfNecessary--\x3e|\u4e0a\u6b21\u6267\u884c\u65f6\u95f4\u5f53\u5f53\u524d\u65f6\u95f4\u95f4\u9694\u5df2\u8d85\u8fc7\u8bbe\u7f6e\u7684\u4e00\u534a\u8d85\u65f6\u65f6\u95f4\u5219\u53d1\u9001keepalive\u62a5\u6587|WalSndKeepalive--\x3eloop\nWalSndCheckTimeOut--\x3e|\u8d85\u65f6\u5173\u95edwalSender|WalSndShutdown"}),"\n",(0,a.jsx)(n.p,{children:"\u5176\u4e2dwalsender\u6536\u5305\u7684\u6d41\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(n.mermaid,{value:"graph TB\nProcessRepliesIfAny--\x3epq_getbyte_if_available--\x3esecure_read--\x3esecure_raw_read--\x3erecv"}),"\n",(0,a.jsx)(n.p,{children:"\u9700\u8981\u7279\u522b\u6ce8\u610f\u7684\u662frecv\u5206\u4e3a\u963b\u585eIO\u548c\u975e\u963b\u585eIO\uff0cpg\u4f7f\u7528\u7684\u662f\u975e\u963b\u585eIO\uff0c\u6536\u5305\u4e0d\u4f1a\u5728\u8fd9\u91cc\u5361\u4f4f\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u5fc3\u8df3",children:"\u5fc3\u8df3"}),"\n",(0,a.jsx)(n.p,{children:"\u5fc3\u8df3\u4e3b\u8981\u7531\u4ee5\u4e0b\u4e24\u4e2a\u65f6\u95f4\u6765\u63a7\u5236\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"/* Timestamp of last ProcessRepliesIfAny(). */\nstatic TimestampTz last_processing = 0;\n\n/*\n * Timestamp of last ProcessRepliesIfAny() that saw a reply from the\n * standby. Set to 0 if wal_sender_timeout doesn't need to be active.\n */\nstatic TimestampTz last_reply_timestamp = 0;\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5176\u4e2dlast_reply_timestamp\u4f1a\u5728\u8fdb\u5165\u5faa\u73af\u7684\u65f6\u5019\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\u6233\uff0c"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"last_reply_timestamp = GetCurrentTimestamp();\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u6bcf\u6b21sender\u5faa\u73af\u4e2d\uff0c\u90fd\u4f1a\u5148\u68c0\u67e5sender\u6709\u6ca1\u6709\u6536\u5230receiver\u53d1\u8fc7\u6765\u7684\u62a5\u6587\uff0c\u6b64\u65f6\u5728\u6536\u5305\u524d\u4f1a\u8bb0\u4e0b\u5f53\u524d\u7684\u65f6\u95f4\u6233\uff0c\u5e76\u8d4b\u503c\u7ed9last_processing\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"last_processing = GetCurrentTimestamp();\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6b64\u65f6\u4f1a\u9002\u7528recv\u8fdb\u884c\u6536\u5305\uff0c\u82e5\u6536\u5230\u62a5\u6587\u7c7b\u578b\u4e3a'd'\u548c\u2018c\u2019\u7684\u62a5\u6587\u65f6\uff0c\u4f1a\u5c06\u662f\u5426\u6536\u5230\u62a5\u6587\u7684\u72b6\u6001\u91cfreceived\u8bbe\u7f6e\u4e3atrue\u3002\u5e76\u4e14\u82e5receivede\u4e3atrue\uff0c\u5219\u5728\u6536\u5305\u5b8c\u6210\u540e\u66f4\u65b0last_reply_timestamp\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"    /*\n     * Save the last reply timestamp if we've received at least one reply.\n     */\n    if (received)\n    {\n        last_reply_timestamp = last_processing;\n        waiting_for_ping_response = false;\n    }\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5f53\u83b7\u53d6\u5230last_processing\u548clast_reply_timestamp\u65f6\u95f4\u540e\uff0c\u518d\u7ed3\u5408\u914d\u7f6ewal_send_timeout\u5373\u53ef\u8ba1\u7b97sender\u662f\u5426\u9700\u8981\u5173\u95ed\uff0c\u4ee5\u53ca\u8ba1\u7b97sender\u7684keepalive\u53d1\u9001\u7684\u65f6\u673a\u3002"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u662f\u5426\u5173\u95edsender"}),"\n",(0,a.jsx)(n.p,{children:"\u901a\u8fc7WalSndCheckTimeOut\u6765\u68c0\u67e5sender\u662f\u5426\u8d85\u65f6\uff0c\u5176\u4e3b\u8981\u5224\u65ad\u4f9d\u636e\u662f"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'    timeout = TimestampTzPlusMilliseconds(last_reply_timestamp,\n                                          wal_sender_timeout);\n\n    if (wal_sender_timeout > 0 && last_processing >= timeout)\n    {\n        /*\n         * Since typically expiration of replication timeout means\n         * communication problem, we don\'t send the error message to the\n         * standby.\n         */\n        ereport(COMMERROR,\n                (errmsg("terminating walsender process due to replication timeout")));\n\n        WalSndShutdown();\n    }\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u7528\u4e0a\u4e00\u6b21\u6536\u5230\u56de\u590d\u7684\u65f6\u523b\uff0c\u52a0\u4e0awal_sender_timeout\uff0c\u8ba1\u7b97\u5f97\u5230\u4e00\u4e2a\u65f6\u95f4\u6233timeout\uff0c\u7136\u540e\u770blast_processing\u662f\u5426\u5df2\u7ecf\u8d85\u8fc7\u4e86timeout\u3002\u6216\u8005\u8bf4\u4ece\u4e0a\u6b21\u6536\u5230\u56de\u590d\u5230\u5f53\u524d\u6267\u884c\u7684\u65f6\u95f4\u5dee\u503c\u662f\u5426\u5df2\u7ecf\u8d85\u8fc7\u4e86wal_sender_timeout\u3002"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u662f\u5426\u9700\u8981\u53d1\u9001keepalive"}),"\n",(0,a.jsx)(n.p,{children:"\u901a\u8fc7WalSndKeepaliveIfNecessary\u6765\u68c0\u67e5\u662f\u5426\u9700\u8981\u53d1\u9001keepalive\u62a5\u6587\u3002\u5176\u5224\u65ad\u903b\u8f91\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"    /*\n     * If half of wal_sender_timeout has lapsed without receiving any reply\n     * from the standby, send a keep-alive message to the standby requesting\n     * an immediate reply.\n     */\n    ping_time = TimestampTzPlusMilliseconds(last_reply_timestamp,\n                                            wal_sender_timeout / 2);\n    if (last_processing >= ping_time)\n    {\n        WalSndKeepalive(true, InvalidXLogRecPtr);\n\n        /* Try to flush pending output to the client */\n        if (pq_flush_if_writable() != 0)\n            WalSndShutdown();\n    }\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\u4e0e\u8d85\u65f6\u5173\u95ed\u4e0d\u540c\u7684\u662f\uff0c\u53d1\u9001\u5fc3\u8df3\u62a5\u6587\u7684\u5224\u65ad\u65f6\u95f4\u662fwal_sender_timeout\u7684\u4e00\u534a\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"sender\u6d88\u606f\u5904\u7406",children:"sender\u6d88\u606f\u5904\u7406"}),"\n",(0,a.jsx)(n.p,{children:"walsender\u6536\u5230receiver\u7684\u6d88\u606f\u540e\uff0c\u901a\u8fc7\u6d88\u606f\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u6765\u5904\u7406\u5bf9\u5e94\u7684\u6d88\u606f\u3002sender\u4ec5\u5904\u7406\u5982\u4e0b\u4e09\u79cd\u7c7b\u578b\u7684\u62a5\u6587\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"x"}),"\n",(0,a.jsx)(n.p,{children:"x\u8868\u793a\u5bf9\u7aef\u5df2\u7ecf\u5173\u95ed\u4e86\u6d41\u590d\u5236\u7684socket"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"d"}),"\n",(0,a.jsx)(n.p,{children:"d\u8868\u793a\u7684\u662f\u6570\u636e\u62a5\u6587\u3002"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"c"}),"\n",(0,a.jsx)(n.p,{children:"c\u8868\u793a\u7684\u662fcopydone\uff0c\u8868\u793a\u5907\u673a\u5df2\u7ecf\u5b8c\u6210\u6d41\u5f0f\u590d\u5236\uff0c\u82e5sender\u8fd8\u6ca1\u6709\u53d1\u9001\u6570\u636e\u7684\u8bdd\uff0c\u4e5f\u9700\u8981\u4f7f\u7528\u8fd9\u79cd\u7c7b\u578b\u56de\u590d\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"sender\u6d88\u606f\u53d1\u9001",children:"sender\u6d88\u606f\u53d1\u9001"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5fc3\u8df3\u62a5\u6587"}),"\n",(0,a.jsx)(n.p,{children:"\u5fc3\u8df3\u62a5\u6587\u5728WalSndKeepalive\u4e2d\u53d1\u9001\uff0c\u5176\u6d88\u606f\u683c\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"    pq_sendbyte(&output_message, 'k');\n    pq_sendint64(&output_message, XLogRecPtrIsInvalid(writePtr) ? sentPtr : writePtr);\n    pq_sendint64(&output_message, GetCurrentTimestamp());\n    pq_sendbyte(&output_message, requestReply ? 1 : 0);\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u7b2c\u4e00\u4e2a\u5b57\u7b26\u662f'k'\uff0c\u8868\u793a\u5fc3\u8df3\u62a5\u6587\uff0c\u7136\u540e\u8ddf\u7740\u4e00\u4e2a8\u5b57\u8282\u7684\u6570\u636e\u6307\u9488\u548c\u4e00\u4e2a8\u5b57\u8282\u7684\u65f6\u95f4\u6233\uff0c\u6700\u540e\u8fd8\u6709\u4e00\u4e2a\u5b57\u8282\u7684\u662f\u5426\u9700\u8981\u56de\u590d\u6807\u5fd7\u3002"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u6570\u636e\u62a5\u6587"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"    pq_sendbyte(&output_message, 'w');\n\n    pq_sendint64(&output_message, startptr);    /* dataStart */\n    pq_sendint64(&output_message, SendRqstPtr); /* walEnd */\n    pq_sendint64(&output_message, 0);    /* sendtime, filled in last */\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"\u903b\u8f91\u590d\u5236",children:"\u903b\u8f91\u590d\u5236"}),"\n",(0,a.jsx)(n.h4,{id:"\u7269\u7406\u590d\u5236",children:"\u7269\u7406\u590d\u5236"}),"\n",(0,a.jsx)(n.p,{children:"\u7269\u7406\u590d\u5236\u4f7f\u7528XLogSendPhysical\u8fdb\u884c\u6570\u636e\u53d1\u9001\u3002"}),"\n",(0,a.jsx)(n.mermaid,{value:"graph TB\nXLogSendPhysical--\x3eGetStandbyFlushRecPtr--\x3eGetWalRcvFlushRecPtr--\x3eGetXLogReplayRecPtr--\x3eWALRead--\x3epg_read--\x3eread"}),"\n",(0,a.jsx)(n.p,{children:"\u5148\u627e\u5230\u672a\u540c\u6b65\u7684\u8d77\u59cb\u6307\u9488"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"    receivePtr = GetWalRcvFlushRecPtr(NULL, &receiveTLI);\n    replayPtr = GetXLogReplayRecPtr(&replayTLI);\n\n    *tli = replayTLI;\n\n    result = replayPtr;\n    if (receiveTLI == replayTLI && receivePtr > replayPtr)\n        result = receivePtr;\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}}}]);