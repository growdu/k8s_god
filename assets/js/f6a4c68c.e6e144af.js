"use strict";(self.webpackChunkk_8_s_god=self.webpackChunkk_8_s_god||[]).push([[2812],{23641:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>_});const t=JSON.parse('{"id":"vpp/vpp buffer\u63a5\u53e3","title":"vpp buffer\u63a5\u53e3","description":"buffer","source":"@site/docs/vpp/vpp buffer\u63a5\u53e3.md","sourceDirName":"vpp","slug":"/vpp/vpp buffer\u63a5\u53e3","permalink":"/blog/docs/vpp/vpp buffer\u63a5\u53e3","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/vpp/vpp buffer\u63a5\u53e3.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"fatsup cpu\u95f4\u8f6c\u53d1\u6d4b\u8bd5\u62a5\u544a","permalink":"/blog/docs/vpp/fatsup cpu\u95f4\u8f6c\u53d1\u6d4b\u8bd5\u62a5\u544a"},"next":{"title":"fastup ip\u5206\u7247\u6d4b\u8bd5\u9a8c\u8bc1","permalink":"/blog/docs/vpp/vpp ip\u5206\u7247\u6d4b\u8bd5\u9a8c\u8bc1"}}');var f=r(74848),a=r(28453);const i={},s="vpp buffer\u63a5\u53e3",u={},_=[{value:"buffer",id:"buffer",level:2},{value:"\u5e38\u7528\u63a5\u53e3",id:"\u5e38\u7528\u63a5\u53e3",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n.header,{children:(0,f.jsx)(n.h1,{id:"vpp-buffer\u63a5\u53e3",children:"vpp buffer\u63a5\u53e3"})}),"\n",(0,f.jsx)(n.h2,{id:"buffer",children:"buffer"}),"\n",(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:"language-c",children:"/** VLIB buffer representation. */\ntypedef union \n{ // \u4f7f\u7528union\u65b9\u4fbf\u5728\u7ed3\u6784\u4f53\u548cbyte\uff08\u5185\u5b58\uff09\u4e4b\u95f4\u8f6c\u6362\n  struct\n  {\n    CLIB_CACHE_LINE_ALIGN_MARK (cacheline0); // \u7528\u6765\u505acacheline\u5bf9\u9f50\n\n    /** signed offset in data[], pre_data[] that we are currently\n      * processing. If negative current header points into predata area.  */\n    i16 current_data;\n\n    /** Nbytes between current data and the end of this buffer.  */\n    u16 current_length;\n\n    /** buffer flags:\n\t<br> VLIB_BUFFER_FREE_LIST_INDEX_MASK: bits used to store free list index,\n\t<br> VLIB_BUFFER_IS_TRACED: trace this buffer.\n\t<br> VLIB_BUFFER_NEXT_PRESENT: this is a multi-chunk buffer.\n\t<br> VLIB_BUFFER_TOTAL_LENGTH_VALID: as it says\n\t<br> VLIB_BUFFER_EXT_HDR_VALID: buffer contains valid external buffer manager header,\n\tset to avoid adding it to a flow report\n\t<br> VLIB_BUFFER_FLAG_USER(n): user-defined bit N\n     */\n    u32 flags;\n\n    /** Generic flow identifier */\n    u32 flow_id;\n\n    /** Reference count for this buffer. */\n    volatile u8 ref_count;\n\n    /** index of buffer pool this buffer belongs. */\n    u8 buffer_pool_index;\n\n    /** Error code for buffers to be enqueued to error handler.  */\n    vlib_error_t error;\n\n    /** Next buffer for this linked-list of buffers. Only valid if\n      * VLIB_BUFFER_NEXT_PRESENT flag is set. */\n    u32 next_buffer;\n\n    /** The following fields can be in a union because once a packet enters\n     * the punt path, it is no longer on a feature arc */\n    union\n    {\n      /** Used by feature subgraph arcs to visit enabled feature nodes */\n      u32 current_config_index;\n      /* the reason the packet once punted */\n      u32 punt_reason;\n    };\n\n    /** Opaque data used by sub-graphs for their own purposes. */\n    u32 opaque[10];\n\n    /** part of buffer metadata which is initialized on alloc ends here. */\n      STRUCT_MARK (template_end);\n\n    /** start of 2nd half (2nd cacheline on systems where cacheline size is 64) */\n      CLIB_ALIGN_MARK (second_half, 64);\n\n    /** Specifies trace buffer handle if VLIB_PACKET_IS_TRACED flag is\n      * set. */\n    u32 trace_handle;\n\n    /** Only valid for first buffer in chain. Current length plus total length\n      * given here give total number of bytes in buffer chain. */\n    u32 total_length_not_including_first_buffer;\n\n    /**< More opaque data, see ../vnet/vnet/buffer.h */\n    u32 opaque2[14];\n\n#if VLIB_BUFFER_TRACE_TRAJECTORY > 0\n    /** trace trajectory data - we use a specific cacheline for that in the\n     * buffer when it is compiled-in */\n#define VLIB_BUFFER_TRACE_TRAJECTORY_MAX     31\n#define VLIB_BUFFER_TRACE_TRAJECTORY_SZ\t     64\n#define VLIB_BUFFER_TRACE_TRAJECTORY_INIT(b) (b)->trajectory_nb = 0\n    CLIB_ALIGN_MARK (trajectory, 64);\n    u16 trajectory_nb;\n    u16 trajectory_trace[VLIB_BUFFER_TRACE_TRAJECTORY_MAX];\n#else /* VLIB_BUFFER_TRACE_TRAJECTORY */\n#define VLIB_BUFFER_TRACE_TRAJECTORY_SZ 0\n#define VLIB_BUFFER_TRACE_TRAJECTORY_INIT(b)\n#endif /* VLIB_BUFFER_TRACE_TRAJECTORY */\n\n    /** start of buffer headroom */\n      CLIB_ALIGN_MARK (headroom, 64);\n\n    /** Space for inserting data before buffer start.  Packet rewrite string\n      * will be rewritten backwards and may extend back before\n      * buffer->data[0].  Must come directly before packet data.  */\n    u8 pre_data[VLIB_BUFFER_PRE_DATA_SIZE];\n\n    /** Packet data */\n    u8 data[]; // \u53d8\u957f\u6570\u7ec4\uff0c\u7528\u6765\u4fdd\u5b58\u6570\u636e\u90e8\u5206\n  };\n#ifdef CLIB_HAVE_VEC128\n  u8x16 as_u8x16[4];\n#endif\n#ifdef CLIB_HAVE_VEC256\n  u8x32 as_u8x32[2];\n#endif\n#ifdef CLIB_HAVE_VEC512\n  u8x64 as_u8x64[1];\n#endif\n} vlib_buffer_t;\n"})}),"\n",(0,f.jsx)(n.h2,{id:"\u5e38\u7528\u63a5\u53e3",children:"\u5e38\u7528\u63a5\u53e3"}),"\n",(0,f.jsxs)(n.ul,{children:["\n",(0,f.jsxs)(n.li,{children:["\n",(0,f.jsx)(n.p,{children:"\u589e"}),"\n",(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:"language-c",children:"// \u5c06\u6570\u636edata\u6dfb\u52a0\u5230buffer\u91cc\uff0c\u6ca1\u6709\u7a7a\u4f59\u7684buffer\u4f1a\u7533\u8bf7\u65b0\u7684\u5185\u5b58\uff0c\u540c\u65f6\u4f1a\u5c06buffer\u7684\u7d22\u5f15\u8d4b\u503c\u7ed9buffer_index\uff0c\u65b9\u4fbf\u540e\u7eed\u7528\u4e8e\u8bbf\u95ee\nint vlib_buffer_add_data (vlib_main_t * vm, vlib_buffer_free_list_index_t free_list_index, u32 * buffer_index, void *data,u32 n_data_bytes);\n"})}),"\n"]}),"\n",(0,f.jsxs)(n.li,{children:["\n",(0,f.jsx)(n.p,{children:"\u5220"}),"\n",(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:"language-c",children:"always_inline void\nvlib_buffer_free (vlib_main_t * vm,\n\t\t  /* pointer to first buffer */\n\t\t  u32 * buffers,\n\t\t  /* number of buffers to free */\n\t\t  u32 n_buffers);\n"})}),"\n"]}),"\n",(0,f.jsxs)(n.li,{children:["\n",(0,f.jsx)(n.p,{children:"\u6539"}),"\n",(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:"language-c",children:"// \u901a\u8fc7\u79fb\u52a8buffer\u7684current_data\u6307\u9488\u6765\u53d6\u6570\u636e\u6216\u8005\u6dfb\u52a0\u6570\u636e\uff0c\u5e76\u540c\u65f6\u4fee\u6539buffer\u7684current_length\u503c\n// \u4e00\u822cl\u4e3a\u6b63\u6570\u8868\u793a\u5f80\u524d\u8bfb\u53d6\u6570\u636e\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u8fdb\u884c\u4fee\u6539\n// \u4e00\u822cl\u4e3a\u8d1f\u6570\u8868\u793a\u5f80\u540e\u6dfb\u52a0\u6570\u636e\nalways_inline void vlib_buffer_advance (vlib_buffer_t * b, word l);\n"})}),"\n"]}),"\n",(0,f.jsxs)(n.li,{children:["\n",(0,f.jsx)(n.p,{children:"\u67e5"}),"\n",(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:"language-c",children:"// vm\u662fvpp\u8fd0\u884c\u65f6\u4e3b\u7ed3\u6784\u4f53\uff0cbuffer_index\u662fbuffer\u7684\u7d22\u5f15\uff0c\u4e00\u822c\u5728\u6dfb\u52a0buffer\u65f6\u53ef\u4ee5\u83b7\u53d6\u5230\uff0c\u6216\u8005\u904d\u5386buffer\u65f6\u83b7\u53d6\nalways_inline vlib_buffer_t *vlib_get_buffer (vlib_main_t * vm, u32 buffer_index);\n\n// \u83b7\u53d6\u5f53\u524d\u6570\u636e\u6240\u5728\u7684\u6307\u9488\u4f4d\u7f6e\uff0c\u4e00\u822c\u7528\u4e8e\u5bf9buffer\u8fdb\u884c\u6307\u9488\u504f\u79fb\u540e\u4f7f\u7528\nalways_inline void *vlib_buffer_get_current (vlib_buffer_t * b);\n"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,f.jsx)(n,{...e,children:(0,f.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var t=r(96540);const f={},a=t.createContext(f);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(f):e.components||f:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);