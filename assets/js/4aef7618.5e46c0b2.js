"use strict";(self.webpackChunkk_8_s_god=self.webpackChunkk_8_s_god||[]).push([[3099],{5706:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>t,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"docker/docker\u4e0e\u5bbf\u4e3b\u673a\u5171\u4eab\u5185\u5b58\u901a\u4fe1","title":"docker\u4e0e\u5bbf\u4e3b\u673a\u5171\u4eab\u5185\u5b58\u901a\u4fe1","description":"docker\u4e2d\u7684\u8fdb\u7a0b\u8981\u4e0e\u5bbf\u4e3b\u673a\u4f7f\u7528\u5171\u4eab\u5185\u5b58\u901a\u4fe1\uff0c\u9700\u8981\u5728\u542f\u52a8\u5bb9\u5668\u7684\u65f6\u5019\u6307\u5b9a\u201c--ipc=host\u201d\u9009\u9879\u3002\u7136\u540e\u518d\u7f16\u5199\u76f8\u5e94\u7684\u5171\u4eab\u5185\u5b58\u7684\u7a0b\u5e8f\uff0c\u4e00\u4e2a\u8dd1\u5728\u5bbf\u4e3b\u673a\u4e0a\uff0c\u53e6\u4e00\u4e2a\u8dd1\u5728docker\u4e0a\u9762\u3002","source":"@site/docs/docker/docker\u4e0e\u5bbf\u4e3b\u673a\u5171\u4eab\u5185\u5b58\u901a\u4fe1.md","sourceDirName":"docker","slug":"/docker/docker\u4e0e\u5bbf\u4e3b\u673a\u5171\u4eab\u5185\u5b58\u901a\u4fe1","permalink":"/blog/docs/docker/docker\u4e0e\u5bbf\u4e3b\u673a\u5171\u4eab\u5185\u5b58\u901a\u4fe1","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docker/docker\u4e0e\u5bbf\u4e3b\u673a\u5171\u4eab\u5185\u5b58\u901a\u4fe1.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"docker\u4e0e\u5bbf\u4e3b\u673a\u5171\u4eab\u5185\u5b58\u901a\u4fe1","permalink":"/blog/docs/docker/docker_communication_with_host"},"next":{"title":"docker\u57fa\u7840\u6307\u5317","permalink":"/blog/docs/docker/docker\u57fa\u7840\u6307\u5317"}}');var c=s(74848),d=s(28453);const t={},i="docker\u4e0e\u5bbf\u4e3b\u673a\u5171\u4eab\u5185\u5b58\u901a\u4fe1",l={},h=[{value:"\u5bbf\u4e3b\u673a\u7a0b\u5e8f\u51c6\u5907",id:"\u5bbf\u4e3b\u673a\u7a0b\u5e8f\u51c6\u5907",level:2},{value:"docker\u955c\u50cf\u51c6\u5907",id:"docker\u955c\u50cf\u51c6\u5907",level:2},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:2},{value:"docker\u4e0e\u5bbf\u4e3b\u673a\u901a\u4fe1\u65f6\u95f4\u635f\u8017",id:"docker\u4e0e\u5bbf\u4e3b\u673a\u901a\u4fe1\u65f6\u95f4\u635f\u8017",level:2}];function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"docker\u4e0e\u5bbf\u4e3b\u673a\u5171\u4eab\u5185\u5b58\u901a\u4fe1",children:"docker\u4e0e\u5bbf\u4e3b\u673a\u5171\u4eab\u5185\u5b58\u901a\u4fe1"})}),"\n",(0,c.jsxs)(e.p,{children:["docker\u4e2d\u7684\u8fdb\u7a0b\u8981\u4e0e\u5bbf\u4e3b\u673a\u4f7f\u7528\u5171\u4eab\u5185\u5b58\u901a\u4fe1\uff0c\u9700\u8981\u5728\u542f\u52a8\u5bb9\u5668\u7684\u65f6\u5019\u6307\u5b9a",(0,c.jsx)("font",{color:"red",children:"\u201c--ipc=host\u201d"}),"\u9009\u9879\u3002\u7136\u540e\u518d\u7f16\u5199\u76f8\u5e94\u7684\u5171\u4eab\u5185\u5b58\u7684\u7a0b\u5e8f\uff0c\u4e00\u4e2a\u8dd1\u5728\u5bbf\u4e3b\u673a\u4e0a\uff0c\u53e6\u4e00\u4e2a\u8dd1\u5728docker\u4e0a\u9762\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u5bbf\u4e3b\u673a\u7a0b\u5e8f\u51c6\u5907",children:"\u5bbf\u4e3b\u673a\u7a0b\u5e8f\u51c6\u5907"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"shm_data.h"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-c",children:"#ifndef _SHMDATA_H_HEADER\n#define _SHMDATA_H_HEADER\n\n#define TEXT_SZ 2048\n\nstruct shared_use_st\n{\n    int written; // \u4f5c\u4e3a\u4e00\u4e2a\u6807\u5fd7\uff0c\u975e0\uff1a\u8868\u793a\u53ef\u8bfb\uff0c0\uff1a\u8868\u793a\u53ef\u5199\n    char text[TEXT_SZ]; // \u8bb0\u5f55\u5199\u5165 \u548c \u8bfb\u53d6 \u7684\u6587\u672c\n};\n\n#endif\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"shm_slave.c"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-c",children:'#include <unistd.h>\n#include <stdlib.h>\n#include <stdio.h>\n#include <string.h>\n#include <sys/shm.h>\n#include "shmdata.h"\n\nint main(int argc, char **argv)\n{\n    void *shm = NULL;\n    struct shared_use_st *shared = NULL;\n    char buffer[BUFSIZ + 1]; // \u7528\u4e8e\u4fdd\u5b58\u8f93\u5165\u7684\u6587\u672c\n    int shmid;\n\n    // \u521b\u5efa\u5171\u4eab\u5185\u5b58\n    shmid = shmget((key_t)1234, sizeof(struct shared_use_st), 0666|IPC_CREAT);\n    if (shmid == -1)\n    {\n        fprintf(stderr, "shmget failed\\n");\n        exit(EXIT_FAILURE);\n    }\n\n    // \u5c06\u5171\u4eab\u5185\u5b58\u8fde\u63a5\u5230\u5f53\u524d\u7684\u8fdb\u7a0b\u5730\u5740\u7a7a\u95f4\n    shm = shmat(shmid, (void *)0, 0);\n    if (shm == (void *)-1)\n    {\n        fprintf(stderr, "shmat failed\\n");\n        exit(EXIT_FAILURE);\n    }\n\n    printf("Memory attched at %X\\n", (int)shm);\n\n    // \u8bbe\u7f6e\u5171\u4eab\u5185\u5b58\n    shared = (struct shared_use_st *)shm;\n    while (1) // \u5411\u5171\u4eab\u5185\u5b58\u4e2d\u5199\u6570\u636e\n    {\n        // \u6570\u636e\u8fd8\u6ca1\u6709\u88ab\u8bfb\u53d6\uff0c\u5219\u7b49\u5f85\u6570\u636e\u88ab\u8bfb\u53d6\uff0c\u4e0d\u80fd\u5411\u5171\u4eab\u5185\u5b58\u4e2d\u5199\u5165\u6587\u672c\n        while (shared->written == 1)\n        {\n            sleep(1);\n            printf("Waiting...\\n");\n        }\n\n        // \u5411\u5171\u4eab\u5185\u5b58\u4e2d\u5199\u5165\u6570\u636e\n        printf("Enter some text: ");\n        fgets(buffer, BUFSIZ, stdin);\n        strncpy(shared->text, buffer, TEXT_SZ);\n\n        // \u5199\u5b8c\u6570\u636e\uff0c\u8bbe\u7f6ewritten\u4f7f\u5171\u4eab\u5185\u5b58\u6bb5\u53ef\u8bfb\n        shared->written = 1;\n\n        // \u8f93\u5165\u4e86end\uff0c\u9000\u51fa\u5faa\u73af\uff08\u7a0b\u5e8f\uff09\n        if (strncmp(buffer, "end", 3) == 0)\n        {\n            break;\n        }\n    }\n\n    // \u628a\u5171\u4eab\u5185\u5b58\u4ece\u5f53\u524d\u8fdb\u7a0b\u4e2d\u5206\u79bb\n    if (shmdt(shm) == -1)\n    {\n        fprintf(stderr, "shmdt failed\\n");\n        exit(EXIT_FAILURE);\n    }\n\n    sleep(2);\n    exit(EXIT_SUCCESS);\n}\n'})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"makefile"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-makefile",children:"all:\n    gcc -o shm_slave shm_slave.c\nclean:\n    rm -rf shm_slave\n"})}),"\n",(0,c.jsx)(e.h2,{id:"docker\u955c\u50cf\u51c6\u5907",children:"docker\u955c\u50cf\u51c6\u5907"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"shm_data.h"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-c",children:"#ifndef _SHMDATA_H_HEADER\n#define _SHMDATA_H_HEADER\n\n#define TEXT_SZ 2048\n\nstruct shared_use_st\n{\n    int written; // \u4f5c\u4e3a\u4e00\u4e2a\u6807\u5fd7\uff0c\u975e0\uff1a\u8868\u793a\u53ef\u8bfb\uff0c0\uff1a\u8868\u793a\u53ef\u5199\n    char text[TEXT_SZ]; // \u8bb0\u5f55\u5199\u5165 \u548c \u8bfb\u53d6 \u7684\u6587\u672c\n};\n\n#endif\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"shm_master.c"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-c",children:'#include <stddef.h>\n#include <sys/shm.h>\n#include <stdio.h>\n#include <stdlib.h>\n#include <unistd.h>\n#include <string.h>\n#include "shmdata.h"\n\nint main(int argc, char **argv)\n{\n    void *shm = NULL;\n    struct shared_use_st *shared; // \u6307\u5411shm\n    int shmid; // \u5171\u4eab\u5185\u5b58\u6807\u8bc6\u7b26\n    // \u5c06\u5185\u5bb9\u5199\u5165\u5230\u6587\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b\u6587\u4ef6\u786e\u5b9a\u5171\u4eab\u5185\u5b58\u662f\u5426\u6210\u529f\n    FILE* file = fopen("t.txt","w+");\n\n    // \u521b\u5efa\u5171\u4eab\u5185\u5b58\n    shmid = shmget((key_t)1234, sizeof(struct shared_use_st), 0666|IPC_CREAT);\n    if (shmid == -1)\n    {\n        fprintf(stderr, "shmat failed\\n");\n        exit(EXIT_FAILURE);\n    }\n\n    // \u5c06\u5171\u4eab\u5185\u5b58\u8fde\u63a5\u5230\u5f53\u524d\u8fdb\u7a0b\u7684\u5730\u5740\u7a7a\u95f4\n    shm = shmat(shmid, 0, 0);\n    if (shm == (void *)-1)\n    {\n        fprintf(stderr, "shmat failed\\n");\n        exit(EXIT_FAILURE);\n    }\n\n    printf("\\nMemory attached at %X\\n", (int)shm);\n\n    // \u8bbe\u7f6e\u5171\u4eab\u5185\u5b58\n    shared = (struct shared_use_st*)shm; // \u6ce8\u610f\uff1ashm\u6709\u70b9\u7c7b\u4f3c\u901a\u8fc7 malloc() \u83b7\u53d6\u5230\u7684\u5185\u5b58\uff0c\u6240\u4ee5\u8fd9\u91cc\u9700\u8981\u505a\u4e2a \u7c7b\u578b\u5f3a\u5236\u8f6c\u6362\n    shared->written = 0;\n    while (1) // \u8bfb\u53d6\u5171\u4eab\u5185\u5b58\u4e2d\u7684\u6570\u636e\n    {\n        // \u6ca1\u6709\u8fdb\u7a0b\u5411\u5185\u5b58\u5199\u6570\u636e\uff0c\u6709\u6570\u636e\u53ef\u8bfb\u53d6\n        if (shared->written == 1)\n        {\n            printf("You wrote: %s", shared->text);\n            fputs(shared->text,file);\n            fflush(file);\n            sleep(1);\n\n            // \u8bfb\u53d6\u5b8c\u6570\u636e\uff0c\u8bbe\u7f6ewritten\u4f7f\u5171\u4eab\u5185\u5b58\u6bb5\u53ef\u5199\n            shared->written = 0;\n\n            // \u8f93\u5165\u4e86 end\uff0c\u9000\u51fa\u5faa\u73af\uff08\u7a0b\u5e8f\uff09\n            if (strncmp(shared->text, "end", 3) == 0)\n            {\n                break;\n            }\n        }\n        else // \u6709\u5176\u4ed6\u8fdb\u7a0b\u5728\u5199\u6570\u636e\uff0c\u4e0d\u80fd\u8bfb\u53d6\u6570\u636e\n        {\n            sleep(1);\n        }\n    }\n\n    // \u628a\u5171\u4eab\u5185\u5b58\u4ece\u5f53\u524d\u8fdb\u7a0b\u4e2d\u5206\u79bb\n    if (shmdt(shm) == -1)\n    {\n        fprintf(stderr, "shmdt failed\\n");\n        flcose(file);\n        exit(EXIT_FAILURE);\n    }\n\n    // \u5220\u9664\u5171\u4eab\u5185\u5b58\n    if (shmctl(shmid, IPC_RMID, 0) == -1)\n    {\n        fprintf(stderr, "shmctl(IPC_RMID) failed\\n");\n        fclose(file);\n        exit(EXIT_FAILURE);\n    }\n     flcose(file);\n    exit(EXIT_SUCCESS);\n}\n'})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"makefile"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-makefile",children:"all:\n    gcc -o shm_master shm_master.c\nclean:\n    rm -rf shm_master\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"Dockerfile"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-dockerfile",children:'FROM gcc:latest\n\nRUN  mkdir /usr/src/shm_test\n\nCOPY shm_master.c shm_data.h makefile /usr/src/shm_test/\n\nWORKDIR /usr/src/shm_test\n\nRUN  make\n\nCMD ["./shm_master"]\n'})}),"\n",(0,c.jsx)(e.h2,{id:"\u8fd0\u884c",children:"\u8fd0\u884c"}),"\n",(0,c.jsx)(e.p,{children:"\u8fd0\u884c\u65f6\u9700\u8981\u5148\u4e0b\u8f7ddocker\uff0c\u83b7\u53d6\u652f\u6301c\u8bed\u8a00\u7f16\u8bd1\u8fd0\u884c\u7684\u57fa\u7840\u955c\u50cf\uff0c\u6bd4\u5982ubuntu\u3001gcc\u7b49\u3002\u8fd9\u91cc\u4f7f\u7528gcc\u4f5c\u4e3a\u57fa\u7840\u955c\u50cf\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-shell",children:"sudo apt install docker\nsudo docker pull gcc\n# \u67e5\u770b\u4e00\u4e0bgcc\u7684\u955c\u50cf\u662f\u5426\u62c9\u53d6\u4e0b\u6765\u4e86\ndocker images\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u57fa\u7840\u955c\u50cf\u6709\u4e86\u540e\u5c31\u53ef\u4ee5\u57fa\u4e8e\u57fa\u7840\u955c\u50cf\u6784\u5efadocker\u5bb9\u5668\uff0c\u57fa\u4e8e\u4e0a\u9762\u6240\u5199\u7684dockerfile\uff0c\u6784\u5efa\u955c\u50cf\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-shell",children:"sudo docker build -t shm_master:v1 .\n# \u67e5\u770b\u955c\u50cf\u662f\u5426\u521b\u5efa\u6210\u529f\nsudo docker images\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u955c\u50cf\u521b\u5efa\u6210\u529f\u540e\u5c31\u53ef\u4ee5\u542f\u52a8\u5bb9\u5668\uff0c\u542f\u52a8\u65f6\u8bb0\u5f97\u52a0\u4e0a\u53c2\u6570\u201c--ipc\u201d\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-shell",children:"# fe9c3bd6d102\u662f\u4e4b\u524d\u521b\u5efa\u6210\u529f\u7684\u955c\u50cf\u7684id\nsudo docker run -d --ipc=host --name master fe9c3bd6d102\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u6210\u529f\u542f\u52a8\u5bb9\u5668\u540e\u53ef\u4ee5\u8fdb\u5165\u5230\u5bb9\u5668\u5185\u90e8\u67e5\u770b\u901a\u4fe1\u76f8\u5173\u4fe1\u606f\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-shell",children:"sudo docker exec -it master /bin/bash\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{src:s(65304).A+"",width:"1156",height:"159"})}),"\n",(0,c.jsx)(e.h2,{id:"docker\u4e0e\u5bbf\u4e3b\u673a\u901a\u4fe1\u65f6\u95f4\u635f\u8017",children:"docker\u4e0e\u5bbf\u4e3b\u673a\u901a\u4fe1\u65f6\u95f4\u635f\u8017"}),"\n",(0,c.jsx)(e.p,{children:"\u5728\u5f53\u524ddemo\u4e2d\uff0c\u5bbf\u4e3b\u673a\u672c\u5730ipc\u901a\u4fe1\u65f6\u95f4\u635f\u8017\u5982\u4e0b\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-shell",children:"send time:1641533324779\nsend content:test\nrecv time:1641533326499\nsend time:1641533327499\nsend content:end\nrecv time:1641533328779\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u5bbf\u4e3b\u673a\u4e0edocker\u901a\u4fe1\u65f6\u95f4\u635f\u8017\u5982\u4e0b\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-shell",children:"send time:1641533611791\nsend content:test\nrecv time:1641533614055\nsend time:1641533615056\nsend content:end\nrecv time:1641533617589\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u901a\u8fc7\u8ba1\u7b97\uff0c\u5bbf\u4e3b\u673a\u672c\u5730ipc\u901a\u4fe1\u635f\u8017\u4e3a1720ms\u548c1280ms\uff0c\u5e73\u57471500ms\uff1b\u5bbf\u4e3b\u673a\u4e0edocker ipc\u901a\u4fe1\u635f\u8017\u4e3a2264ms\u548c2533ms\uff0c\u5e73\u5747\u4e3a2398ms\u3002",(0,c.jsx)("font",{color:"red",children:"\u4ece\u8fd9\u4e2a\u7ed3\u679c\u6765\u770b\uff0c\u5bbf\u4e3b\u673a\u4e0edocker ipc\u901a\u4fe1\u635f\u8017\u8981\u7a0d\u5fae\u9ad8\u4e00\u4e9b\u3002"})]}),"\n",(0,c.jsx)(e.h1,{id:"reference",children:"reference"}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.a,{href:"https://www.cnblogs.com/hailun1987/p/9697236.html",children:"https://www.cnblogs.com/hailun1987/p/9697236.html"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.a,{href:"https://www.jianshu.com/p/7eb7c7f62bf3",children:"https://www.jianshu.com/p/7eb7c7f62bf3"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.a,{href:"https://www.cnblogs.com/52php/p/5861372.html",children:"https://www.cnblogs.com/52php/p/5861372.html"})}),"\n"]}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(a,{...n})}):a(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>i});var r=s(96540);const c={},d=r.createContext(c);function t(n){const e=r.useContext(d);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:t(n.components),r.createElement(d.Provider,{value:e},n.children)}},65304:(n,e,s)=>{s.d(e,{A:()=>r});const r=s.p+"assets/images/docker_ipc_with_host-6e708b44ff126a80aad41c0c37e8fe65.png"}}]);