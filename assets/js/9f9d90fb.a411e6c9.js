"use strict";(self.webpackChunkk_8_s_god=self.webpackChunkk_8_s_god||[]).push([[9886],{28453:(e,n,c)=>{c.d(n,{R:()=>_,x:()=>s});var a=c(96540);const t={},r=a.createContext(t);function _(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:_(e.components),a.createElement(r.Provider,{value:n},e.children)}},58497:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>_,metadata:()=>a,toc:()=>i});const a=JSON.parse('{"id":"cluster/corosync/corosync-cmap\u4f7f\u7528\u6307\u5357","title":"corosync-cmap\u4f7f\u7528\u6307\u5357","description":"cmap\u662fcorosync\u7684\u5185\u5b58key/value\u5b58\u50a8\u3002cmap\u63d0\u4f9b\u4e86\u5982\u4e0b\u529f\u80fd\uff1a","source":"@site/docs/cluster/corosync/corosync-cmap\u4f7f\u7528\u6307\u5357.md","sourceDirName":"cluster/corosync","slug":"/cluster/corosync/corosync-cmap\u4f7f\u7528\u6307\u5357","permalink":"/blog/docs/cluster/corosync/corosync-cmap\u4f7f\u7528\u6307\u5357","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cluster/corosync/corosync-cmap\u4f7f\u7528\u6307\u5357.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"corosync qnet\u6302\u6b7b\u573a\u666f\u5206\u6790\u89e3\u51b3","permalink":"/blog/docs/cluster/corosync/corosync qnet\u6302\u6b7b\u573a\u666f\u5206\u6790\u89e3\u51b3"},"next":{"title":"corosync-qdevice\u4e2dffsplit\u4e0elsm\u7b97\u6cd5\u7684\u533a\u522b","permalink":"/blog/docs/cluster/corosync/corosync-qdevice\u4e2dffsplit\u4e0elsm\u7b97\u6cd5\u7684\u533a\u522b"}}');var t=c(74848),r=c(28453);const _={},s="corosync-cmap\u4f7f\u7528\u6307\u5357",l={},i=[{value:"cmap api",id:"cmap-api",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"corosync-cmap\u4f7f\u7528\u6307\u5357",children:"corosync-cmap\u4f7f\u7528\u6307\u5357"})}),"\n",(0,t.jsx)(n.p,{children:"cmap\u662fcorosync\u7684\u5185\u5b58key/value\u5b58\u50a8\u3002cmap\u63d0\u4f9b\u4e86\u5982\u4e0b\u529f\u80fd\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u521b\u5efakey"}),"\n",(0,t.jsx)(n.li,{children:"\u4fee\u6539\u5df2\u7ecf\u5b58\u5728\u7684key"}),"\n",(0,t.jsx)(n.li,{children:"\u79fb\u9664key"}),"\n",(0,t.jsx)(n.li,{children:"\u6839\u636e\u524d\u7f00\u8fed\u4ee3key"}),"\n",(0,t.jsx)(n.li,{children:"\u8ddf\u8e2akey\u7684\u6539\u53d8"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"cmap-api",children:"cmap api"}),"\n",(0,t.jsx)(n.p,{children:"cmap\u7684value\u652f\u6301\u5982\u4e0b\u51e0\u79cd\u7c7b\u578b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"CMAP_VALUETYPE_INT8 - 8-bit signed integer\n\nCMAP_VALUETYPE_UINT8 - 8-bit unsigned integer\n\nCMAP_VALUETYPE_INT16 - 16-bit signed integer\n\nCMAP_VALUETYPE_UINT16 - 16-bit unsigned integer\n\nCMAP_VALUETYPE_INT32 - 32-bit signed integer\n\nCMAP_VALUETYPE_UINT32 - 32-bit unsigned integer\n\nCMAP_VALUETYPE_INT64 - 64-bit signed integer\n\nCMAP_VALUETYPE_UINT64 - 64-bit unsigned integer\n\nCMAP_VALUETYPE_FLOAT - Float value\n\nCMAP_VALUETYPE_DOUBLE - Double value\n\nCMAP_VALUETYPE_STRING - C-style string\n\nCMAP_VALUETYPE_BINARY - Binary data, byte with zero value has no special meaning\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"cmap_initialize"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"cs_error_t cmap_initialize (cmap_handle_t *handle );\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u521d\u59cb\u5316\u4e00\u4e2acmap\u53e5\u67c4\uff0c\u540e\u9762\u4f7f\u7528\u8be5\u53e5\u67c4\u8fdb\u884ckey\u7684\u63d2\u5165\u4fee\u6539\u5220\u9664\u548c\u8ddf\u8e2a\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"cmap_set"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"cs_error_t cmap_set (cmap_handle_t handle,  // \u521d\u59cb\u5316\u65f6\u751f\u6210\u7684\u53e5\u67c4\n                     const char *key_name,  // \u8981\u6dfb\u52a0\u7684key\u540d\u79f0\n                     const void *value,     // key\u5bf9\u5e94\u7684\u503c\n                     size_t value_len,      // \u503c\u7684\u957f\u5ea6\n                     cmap_value_types_t type); // \u503c\u7684\u7c7b\u578b\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6307\u5b9a\u503c\u7c7b\u578b\u7684\u63a5\u53e3\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"cs_error_t cmap_set_int8(cmap_handle_t handle, const char *key_name, int8_t value);\n\ncs_error_t cmap_set_uint8(cmap_handle_t handle, const char *key_name, uint8_t value);\n\ncs_error_t cmap_set_int16(cmap_handle_t handle, const char *key_name, int16_t value);\n\ncs_error_t cmap_set_uint16(cmap_handle_t handle, const char *key_name, uint16_t value);\n\ncs_error_t cmap_set_int32(cmap_handle_t handle, const char *key_name, int32_t value);\n\ncs_error_t cmap_set_uint32(cmap_handle_t handle, const char *key_name, uint32_t value);\n\ncs_error_t cmap_set_int64(cmap_handle_t handle, const char *key_name, int64_t value);\n\ncs_error_t cmap_set_uint64(cmap_handle_t handle, const char *key_name, uint64_t value);\n\ncs_error_t cmap_set_float(cmap_handle_t handle, const char *key_name, float value);\n\ncs_error_t cmap_set_double(cmap_handle_t handle, const char *key_name, double value);\n\ncs_error_t cmap_set_string(cmap_handle_t handle, const char *key_name, const char *value);\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"cmap_get"}),"\n",(0,t.jsx)(n.p,{children:"cmap_get\u7528\u4e8e\u8bfb\u53d6key\u5bf9\u5e94\u7684\u503c\uff0c\u63a5\u53e3\u4e0ecmap_set\u76f8\u4f3c\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"cs_error_t cmap_get (cmap_handle_t handle,  // cmap\u53e5\u67c4\n                     const char *key_name, // \u8981\u67e5\u770b\u7684key\n                     void *value,          // key\u5bf9\u5e94\u7684\u503c\u4f1a\u5b58\u5230value\n                     size_t *value_len,    // value\u7684\u957f\u5ea6\u4f1a\u5b58\u5230\u8fd9\u91cc\n                     cmap_value_types_t *type); // value\u7684\u7c7b\u578b\u4f1a\u5b58\u5230\u8fd9\u91cc\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u540c\u6837\u7684\uff0c\u82e5\u77e5\u9053value\u7684\u660e\u786e\u7c7b\u578b\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u6307\u5b9a\u7c7b\u578b\u7684\u63a5\u53e3\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"cs_error_t cmap_get_int8 (cmap_handle_t handle, const char *key_name, int8_t *i8);\n\ncs_error_t cmap_get_uint8 (cmap_handle_t handle, const char *key_name, uint8_t *u8);\n\ncs_error_t cmap_get_int16 (cmap_handle_t handle, const char *key_name, int16_t *i16);\n\ncs_error_t cmap_get_uint16 (cmap_handle_t handle, const char *key_name, uint16_t *u16);\n\ncs_error_t cmap_get_int32 (cmap_handle_t handle, const char *key_name, int32_t *i32);\n\ncs_error_t cmap_get_uint32 (cmap_handle_t handle, const char *key_name, uint32_t *u32);\n\ncs_error_t cmap_get_int64 (cmap_handle_t handle, const char *key_name, int64_t *i64);\n\ncs_error_t cmap_get_uint64 (cmap_handle_t handle, const char *key_name, uint64_t *u64);\n\ncs_error_t cmap_get_float (cmap_handle_t handle, const char *key_name, float *flt);\n\ncs_error_t cmap_get_double (cmap_handle_t handle, const char *key_name, double *dbl);\n\ncs_error_t cmap_get_string (cmap_handle_t handle, const char *key_name, char **str);\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"cmap_delete"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"cs_error_t cmap_delete(cmap_handle_t handle, const char *key_name);\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5220\u9664\u67d0\u4e2a\u53ef\u4ee5\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"cmap_track_add"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"cs_error_t cmap_track_add (cmap_handle_t handle, // cmap\u53e5\u67c4\n                           const char *key_name, // key\u540d\n                           int32_t track_type,   // track\u7684\u7c7b\u578b\n                           cmap_notify_fn_t notify_fn, // value\u53d8\u66f4\u65f6\u7684\u56de\u8c03\u51fd\u6570\n                           void *user_data,   // \u56de\u8c03\u65f6\u4f20\u9012\u7684\u6570\u636e\n                           cmap_track_handle_t *cmap_track_handle // \u7528\u4e8e\u8c03\u5ea6\u5206\u53d1\u7684track\u53e5\u67c4\n                          );\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6dfb\u52a0\u5bf9\u67d0\u4e2akey\u7684value\u7684\u53d8\u5316\u8ddf\u8e2a\uff0c\u5f53value\u6539\u53d8\u65f6\u4f1a\u89e6\u53d1notify_fn\u56de\u8c03\u3002\u9700\u5728\u8fdb\u7a0b\u4e2d\u5faa\u73af\u8c03\u7528cmap_dispatch\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"cmap_finalize"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"cs_error_t cmap_finalize (cmap_handle_t handle);\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u91ca\u653ecmap\u53e5\u67c4\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"cmap\u7684\u5927\u81f4\u4f7f\u7528\u6d41\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TB\ncmap_initialize--\x3ecmap_set--\x3ecmap_get--\x3ecmap_delete--\x3ecmap_finalize\n"})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}}}]);