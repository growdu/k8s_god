"use strict";(self.webpackChunkk_8_s_god=self.webpackChunkk_8_s_god||[]).push([[7160],{5937:(t,e,s)=>{s.d(e,{A:()=>r});var i=s(2453),n=s(4886);const r=(t,e)=>i.A.lang.round(n.A.parse(t)[e])},7160:(t,e,s)=>{s.d(e,{diagram:()=>b});var i=s(3222),n=s(6044),r=(s(6157),s(7231),s(4007),s(2355),s(6503),s(4431),s(5395)),a=s(2107),c=s(7),o=s(5937),l=s(5582),h=function(){var t=(0,a.K2)((function(t,e,s,i){for(s=s||{},i=t.length;i--;s[t[i]]=e);return s}),"o"),e=[6,8,10,22,24,26,28,33,34,35,36,37,40,43,44,50],s=[1,10],i=[1,11],n=[1,12],r=[1,13],c=[1,20],o=[1,21],l=[1,22],h=[1,23],u=[1,24],y=[1,19],d=[1,25],p=[1,26],_=[1,18],g=[1,33],b=[1,34],m=[1,35],f=[1,36],E=[1,37],k=[6,8,10,13,15,17,20,21,22,24,26,28,33,34,35,36,37,40,43,44,50,63,64,65,66,67],O=[1,42],S=[1,43],T=[1,52],A=[40,50,68,69],R=[1,63],N=[1,61],I=[1,58],C=[1,62],x=[1,64],D=[6,8,10,13,17,22,24,26,28,33,34,35,36,37,40,41,42,43,44,48,49,50,63,64,65,66,67],v=[63,64,65,66,67],$=[1,81],K=[1,80],w=[1,78],L=[1,79],M=[6,10,42,47],F=[6,10,13,41,42,47,48,49],B=[1,89],Y=[1,88],P=[1,87],z=[19,56],G=[1,98],U=[1,97],Z=[19,56,58,60],j={trace:(0,a.K2)((function(){}),"trace"),yy:{},symbols_:{error:2,start:3,ER_DIAGRAM:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,entityName:11,relSpec:12,COLON:13,role:14,STYLE_SEPARATOR:15,idList:16,BLOCK_START:17,attributes:18,BLOCK_STOP:19,SQS:20,SQE:21,title:22,title_value:23,acc_title:24,acc_title_value:25,acc_descr:26,acc_descr_value:27,acc_descr_multiline_value:28,direction:29,classDefStatement:30,classStatement:31,styleStatement:32,direction_tb:33,direction_bt:34,direction_rl:35,direction_lr:36,CLASSDEF:37,stylesOpt:38,separator:39,UNICODE_TEXT:40,STYLE_TEXT:41,COMMA:42,CLASS:43,STYLE:44,style:45,styleComponent:46,SEMI:47,NUM:48,BRKT:49,ENTITY_NAME:50,attribute:51,attributeType:52,attributeName:53,attributeKeyTypeList:54,attributeComment:55,ATTRIBUTE_WORD:56,attributeKeyType:57,",":58,ATTRIBUTE_KEY:59,COMMENT:60,cardinality:61,relType:62,ZERO_OR_ONE:63,ZERO_OR_MORE:64,ONE_OR_MORE:65,ONLY_ONE:66,MD_PARENT:67,NON_IDENTIFYING:68,IDENTIFYING:69,WORD:70,$accept:0,$end:1},terminals_:{2:"error",4:"ER_DIAGRAM",6:"EOF",8:"SPACE",10:"NEWLINE",13:"COLON",15:"STYLE_SEPARATOR",17:"BLOCK_START",19:"BLOCK_STOP",20:"SQS",21:"SQE",22:"title",23:"title_value",24:"acc_title",25:"acc_title_value",26:"acc_descr",27:"acc_descr_value",28:"acc_descr_multiline_value",33:"direction_tb",34:"direction_bt",35:"direction_rl",36:"direction_lr",37:"CLASSDEF",40:"UNICODE_TEXT",41:"STYLE_TEXT",42:"COMMA",43:"CLASS",44:"STYLE",47:"SEMI",48:"NUM",49:"BRKT",50:"ENTITY_NAME",56:"ATTRIBUTE_WORD",58:",",59:"ATTRIBUTE_KEY",60:"COMMENT",63:"ZERO_OR_ONE",64:"ZERO_OR_MORE",65:"ONE_OR_MORE",66:"ONLY_ONE",67:"MD_PARENT",68:"NON_IDENTIFYING",69:"IDENTIFYING",70:"WORD"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,5],[9,9],[9,7],[9,7],[9,4],[9,6],[9,3],[9,5],[9,1],[9,3],[9,7],[9,9],[9,6],[9,8],[9,4],[9,6],[9,2],[9,2],[9,2],[9,1],[9,1],[9,1],[9,1],[9,1],[29,1],[29,1],[29,1],[29,1],[30,4],[16,1],[16,1],[16,3],[16,3],[31,3],[32,4],[38,1],[38,3],[45,1],[45,2],[39,1],[39,1],[39,1],[46,1],[46,1],[46,1],[46,1],[11,1],[11,1],[18,1],[18,2],[51,2],[51,3],[51,3],[51,4],[52,1],[53,1],[54,1],[54,3],[57,1],[55,1],[12,3],[61,1],[61,1],[61,1],[61,1],[61,1],[62,1],[62,1],[14,1],[14,1],[14,1]],performAction:(0,a.K2)((function(t,e,s,i,n,r,a){var c=r.length-1;switch(n){case 1:break;case 2:case 6:case 7:this.$=[];break;case 3:r[c-1].push(r[c]),this.$=r[c-1];break;case 4:case 5:case 55:case 78:case 62:case 63:case 66:this.$=r[c];break;case 8:i.addEntity(r[c-4]),i.addEntity(r[c-2]),i.addRelationship(r[c-4],r[c],r[c-2],r[c-3]);break;case 9:i.addEntity(r[c-8]),i.addEntity(r[c-4]),i.addRelationship(r[c-8],r[c],r[c-4],r[c-5]),i.setClass([r[c-8]],r[c-6]),i.setClass([r[c-4]],r[c-2]);break;case 10:i.addEntity(r[c-6]),i.addEntity(r[c-2]),i.addRelationship(r[c-6],r[c],r[c-2],r[c-3]),i.setClass([r[c-6]],r[c-4]);break;case 11:i.addEntity(r[c-6]),i.addEntity(r[c-4]),i.addRelationship(r[c-6],r[c],r[c-4],r[c-5]),i.setClass([r[c-4]],r[c-2]);break;case 12:i.addEntity(r[c-3]),i.addAttributes(r[c-3],r[c-1]);break;case 13:i.addEntity(r[c-5]),i.addAttributes(r[c-5],r[c-1]),i.setClass([r[c-5]],r[c-3]);break;case 14:i.addEntity(r[c-2]);break;case 15:i.addEntity(r[c-4]),i.setClass([r[c-4]],r[c-2]);break;case 16:i.addEntity(r[c]);break;case 17:i.addEntity(r[c-2]),i.setClass([r[c-2]],r[c]);break;case 18:i.addEntity(r[c-6],r[c-4]),i.addAttributes(r[c-6],r[c-1]);break;case 19:i.addEntity(r[c-8],r[c-6]),i.addAttributes(r[c-8],r[c-1]),i.setClass([r[c-8]],r[c-3]);break;case 20:i.addEntity(r[c-5],r[c-3]);break;case 21:i.addEntity(r[c-7],r[c-5]),i.setClass([r[c-7]],r[c-2]);break;case 22:i.addEntity(r[c-3],r[c-1]);break;case 23:i.addEntity(r[c-5],r[c-3]),i.setClass([r[c-5]],r[c]);break;case 24:case 25:this.$=r[c].trim(),i.setAccTitle(this.$);break;case 26:case 27:this.$=r[c].trim(),i.setAccDescription(this.$);break;case 32:i.setDirection("TB");break;case 33:i.setDirection("BT");break;case 34:i.setDirection("RL");break;case 35:i.setDirection("LR");break;case 36:this.$=r[c-3],i.addClass(r[c-2],r[c-1]);break;case 37:case 38:case 56:case 64:case 43:this.$=[r[c]];break;case 39:case 40:this.$=r[c-2].concat([r[c]]);break;case 41:this.$=r[c-2],i.setClass(r[c-1],r[c]);break;case 42:this.$=r[c-3],i.addCssStyles(r[c-2],r[c-1]);break;case 44:case 65:r[c-2].push(r[c]),this.$=r[c-2];break;case 46:this.$=r[c-1]+r[c];break;case 54:case 76:case 77:case 67:this.$=r[c].replace(/"/g,"");break;case 57:r[c].push(r[c-1]),this.$=r[c];break;case 58:this.$={type:r[c-1],name:r[c]};break;case 59:this.$={type:r[c-2],name:r[c-1],keys:r[c]};break;case 60:this.$={type:r[c-2],name:r[c-1],comment:r[c]};break;case 61:this.$={type:r[c-3],name:r[c-2],keys:r[c-1],comment:r[c]};break;case 68:this.$={cardA:r[c],relType:r[c-1],cardB:r[c-2]};break;case 69:this.$=i.Cardinality.ZERO_OR_ONE;break;case 70:this.$=i.Cardinality.ZERO_OR_MORE;break;case 71:this.$=i.Cardinality.ONE_OR_MORE;break;case 72:this.$=i.Cardinality.ONLY_ONE;break;case 73:this.$=i.Cardinality.MD_PARENT;break;case 74:this.$=i.Identification.NON_IDENTIFYING;break;case 75:this.$=i.Identification.IDENTIFYING}}),"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:9,22:s,24:i,26:n,28:r,29:14,30:15,31:16,32:17,33:c,34:o,35:l,36:h,37:u,40:y,43:d,44:p,50:_},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:27,11:9,22:s,24:i,26:n,28:r,29:14,30:15,31:16,32:17,33:c,34:o,35:l,36:h,37:u,40:y,43:d,44:p,50:_},t(e,[2,5]),t(e,[2,6]),t(e,[2,16],{12:28,61:32,15:[1,29],17:[1,30],20:[1,31],63:g,64:b,65:m,66:f,67:E}),{23:[1,38]},{25:[1,39]},{27:[1,40]},t(e,[2,27]),t(e,[2,28]),t(e,[2,29]),t(e,[2,30]),t(e,[2,31]),t(k,[2,54]),t(k,[2,55]),t(e,[2,32]),t(e,[2,33]),t(e,[2,34]),t(e,[2,35]),{16:41,40:O,41:S},{16:44,40:O,41:S},{16:45,40:O,41:S},t(e,[2,4]),{11:46,40:y,50:_},{16:47,40:O,41:S},{18:48,19:[1,49],51:50,52:51,56:T},{11:53,40:y,50:_},{62:54,68:[1,55],69:[1,56]},t(A,[2,69]),t(A,[2,70]),t(A,[2,71]),t(A,[2,72]),t(A,[2,73]),t(e,[2,24]),t(e,[2,25]),t(e,[2,26]),{13:R,38:57,41:N,42:I,45:59,46:60,48:C,49:x},t(D,[2,37]),t(D,[2,38]),{16:65,40:O,41:S,42:I},{13:R,38:66,41:N,42:I,45:59,46:60,48:C,49:x},{13:[1,67],15:[1,68]},t(e,[2,17],{61:32,12:69,17:[1,70],42:I,63:g,64:b,65:m,66:f,67:E}),{19:[1,71]},t(e,[2,14]),{18:72,19:[2,56],51:50,52:51,56:T},{53:73,56:[1,74]},{56:[2,62]},{21:[1,75]},{61:76,63:g,64:b,65:m,66:f,67:E},t(v,[2,74]),t(v,[2,75]),{6:$,10:K,39:77,42:w,47:L},{40:[1,82],41:[1,83]},t(M,[2,43],{46:84,13:R,41:N,48:C,49:x}),t(F,[2,45]),t(F,[2,50]),t(F,[2,51]),t(F,[2,52]),t(F,[2,53]),t(e,[2,41],{42:I}),{6:$,10:K,39:85,42:w,47:L},{14:86,40:B,50:Y,70:P},{16:90,40:O,41:S},{11:91,40:y,50:_},{18:92,19:[1,93],51:50,52:51,56:T},t(e,[2,12]),{19:[2,57]},t(z,[2,58],{54:94,55:95,57:96,59:G,60:U}),t([19,56,59,60],[2,63]),t(e,[2,22],{15:[1,100],17:[1,99]}),t([40,50],[2,68]),t(e,[2,36]),{13:R,41:N,45:101,46:60,48:C,49:x},t(e,[2,47]),t(e,[2,48]),t(e,[2,49]),t(D,[2,39]),t(D,[2,40]),t(F,[2,46]),t(e,[2,42]),t(e,[2,8]),t(e,[2,76]),t(e,[2,77]),t(e,[2,78]),{13:[1,102],42:I},{13:[1,104],15:[1,103]},{19:[1,105]},t(e,[2,15]),t(z,[2,59],{55:106,58:[1,107],60:U}),t(z,[2,60]),t(Z,[2,64]),t(z,[2,67]),t(Z,[2,66]),{18:108,19:[1,109],51:50,52:51,56:T},{16:110,40:O,41:S},t(M,[2,44],{46:84,13:R,41:N,48:C,49:x}),{14:111,40:B,50:Y,70:P},{16:112,40:O,41:S},{14:113,40:B,50:Y,70:P},t(e,[2,13]),t(z,[2,61]),{57:114,59:G},{19:[1,115]},t(e,[2,20]),t(e,[2,23],{17:[1,116],42:I}),t(e,[2,11]),{13:[1,117],42:I},t(e,[2,10]),t(Z,[2,65]),t(e,[2,18]),{18:118,19:[1,119],51:50,52:51,56:T},{14:120,40:B,50:Y,70:P},{19:[1,121]},t(e,[2,21]),t(e,[2,9]),t(e,[2,19])],defaultActions:{52:[2,62],72:[2,57]},parseError:(0,a.K2)((function(t,e){if(!e.recoverable){var s=new Error(t);throw s.hash=e,s}this.trace(t)}),"parseError"),parse:(0,a.K2)((function(t){var e=this,s=[0],i=[],n=[null],r=[],c=this.table,o="",l=0,h=0,u=0,y=r.slice.call(arguments,1),d=Object.create(this.lexer),p={yy:{}};for(var _ in this.yy)Object.prototype.hasOwnProperty.call(this.yy,_)&&(p.yy[_]=this.yy[_]);d.setInput(t,p.yy),p.yy.lexer=d,p.yy.parser=this,void 0===d.yylloc&&(d.yylloc={});var g=d.yylloc;r.push(g);var b=d.options&&d.options.ranges;function m(){var t;return"number"!=typeof(t=i.pop()||d.lex()||1)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,a.K2)((function(t){s.length=s.length-2*t,n.length=n.length-t,r.length=r.length-t}),"popStack"),(0,a.K2)(m,"lex");for(var f,E,k,O,S,T,A,R,N,I={};;){if(k=s[s.length-1],this.defaultActions[k]?O=this.defaultActions[k]:(null==f&&(f=m()),O=c[k]&&c[k][f]),void 0===O||!O.length||!O[0]){var C="";for(T in N=[],c[k])this.terminals_[T]&&T>2&&N.push("'"+this.terminals_[T]+"'");C=d.showPosition?"Parse error on line "+(l+1)+":\n"+d.showPosition()+"\nExpecting "+N.join(", ")+", got '"+(this.terminals_[f]||f)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==f?"end of input":"'"+(this.terminals_[f]||f)+"'"),this.parseError(C,{text:d.match,token:this.terminals_[f]||f,line:d.yylineno,loc:g,expected:N})}if(O[0]instanceof Array&&O.length>1)throw new Error("Parse Error: multiple actions possible at state: "+k+", token: "+f);switch(O[0]){case 1:s.push(f),n.push(d.yytext),r.push(d.yylloc),s.push(O[1]),f=null,E?(f=E,E=null):(h=d.yyleng,o=d.yytext,l=d.yylineno,g=d.yylloc,u>0&&u--);break;case 2:if(A=this.productions_[O[1]][1],I.$=n[n.length-A],I._$={first_line:r[r.length-(A||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(A||1)].first_column,last_column:r[r.length-1].last_column},b&&(I._$.range=[r[r.length-(A||1)].range[0],r[r.length-1].range[1]]),void 0!==(S=this.performAction.apply(I,[o,h,l,p.yy,O[1],n,r].concat(y))))return S;A&&(s=s.slice(0,-1*A*2),n=n.slice(0,-1*A),r=r.slice(0,-1*A)),s.push(this.productions_[O[1]][0]),n.push(I.$),r.push(I._$),R=c[s[s.length-2]][s[s.length-1]],s.push(R);break;case 3:return!0}}return!0}),"parse")},W=function(){return{EOF:1,parseError:(0,a.K2)((function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)}),"parseError"),setInput:(0,a.K2)((function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this}),"setInput"),input:(0,a.K2)((function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t}),"input"),unput:(0,a.K2)((function(t){var e=t.length,s=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),s.length-1&&(this.yylineno-=s.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:s?(s.length===i.length?this.yylloc.first_column:0)+i[i.length-s.length].length-s[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this}),"unput"),more:(0,a.K2)((function(){return this._more=!0,this}),"more"),reject:(0,a.K2)((function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"reject"),less:(0,a.K2)((function(t){this.unput(this.match.slice(t))}),"less"),pastInput:(0,a.K2)((function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")}),"pastInput"),upcomingInput:(0,a.K2)((function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")}),"upcomingInput"),showPosition:(0,a.K2)((function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"}),"showPosition"),test_match:(0,a.K2)((function(t,e){var s,i,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],s=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s)return s;if(this._backtrack){for(var r in n)this[r]=n[r];return!1}return!1}),"test_match"),next:(0,a.K2)((function(){if(this.done)return this.EOF;var t,e,s,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),r=0;r<n.length;r++)if((s=this._input.match(this.rules[n[r]]))&&(!e||s[0].length>e[0].length)){if(e=s,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(s,n[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,n[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"next"),lex:(0,a.K2)((function(){var t=this.next();return t||this.lex()}),"lex"),begin:(0,a.K2)((function(t){this.conditionStack.push(t)}),"begin"),popState:(0,a.K2)((function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]}),"popState"),_currentRules:(0,a.K2)((function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules}),"_currentRules"),topState:(0,a.K2)((function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"}),"topState"),pushState:(0,a.K2)((function(t){this.begin(t)}),"pushState"),stateStackSize:(0,a.K2)((function(){return this.conditionStack.length}),"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,a.K2)((function(t,e,s,i){switch(s){case 0:return this.begin("acc_title"),24;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),26;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 33;case 8:return 34;case 9:return 35;case 10:return 36;case 11:return 10;case 12:case 23:case 28:case 35:break;case 13:return 8;case 14:return 50;case 15:return 70;case 16:return 4;case 17:return this.begin("block"),17;case 18:case 19:case 38:return 49;case 20:case 37:return 42;case 21:return 15;case 22:case 36:return 13;case 24:return 59;case 25:case 26:return 56;case 27:return 60;case 29:return this.popState(),19;case 30:case 73:return e.yytext[0];case 31:return 20;case 32:return 21;case 33:return this.begin("style"),44;case 34:return this.popState(),10;case 39:return this.begin("style"),37;case 40:return 43;case 41:case 45:case 46:case 59:return 63;case 42:case 43:case 44:case 52:case 54:case 61:return 65;case 47:case 48:case 49:case 50:case 51:case 53:case 60:return 64;case 55:case 56:case 57:case 58:return 66;case 62:return 67;case 63:case 66:case 67:case 68:return 68;case 64:case 65:return 69;case 69:return 41;case 70:return 47;case 71:return 40;case 72:return 48;case 74:return 6}}),"anonymous"),rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:[\s]+)/i,/^(?:"[^"%\r\n\v\b\\]+")/i,/^(?:"[^"]*")/i,/^(?:erDiagram\b)/i,/^(?:\{)/i,/^(?:#)/i,/^(?:#)/i,/^(?:,)/i,/^(?::::)/i,/^(?::)/i,/^(?:\s+)/i,/^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,/^(?:([^\s]*)[~].*[~]([^\s]*))/i,/^(?:([\*A-Za-z_\u00C0-\uFFFF][A-Za-z0-9\-\_\[\]\(\)\u00C0-\uFFFF\*]*))/i,/^(?:"[^"]*")/i,/^(?:[\n]+)/i,/^(?:\})/i,/^(?:.)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:style\b)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?::)/i,/^(?:,)/i,/^(?:#)/i,/^(?:classDef\b)/i,/^(?:class\b)/i,/^(?:one or zero\b)/i,/^(?:one or more\b)/i,/^(?:one or many\b)/i,/^(?:1\+)/i,/^(?:\|o\b)/i,/^(?:zero or one\b)/i,/^(?:zero or more\b)/i,/^(?:zero or many\b)/i,/^(?:0\+)/i,/^(?:\}o\b)/i,/^(?:many\(0\))/i,/^(?:many\(1\))/i,/^(?:many\b)/i,/^(?:\}\|)/i,/^(?:one\b)/i,/^(?:only one\b)/i,/^(?:1\b)/i,/^(?:\|\|)/i,/^(?:o\|)/i,/^(?:o\{)/i,/^(?:\|\{)/i,/^(?:\s*u\b)/i,/^(?:\.\.)/i,/^(?:--)/i,/^(?:to\b)/i,/^(?:optionally to\b)/i,/^(?:\.-)/i,/^(?:-\.)/i,/^(?:([^\x00-\x7F]|\w|-|\*)+)/i,/^(?:;)/i,/^(?:([^\x00-\x7F]|\w|-|\*)+)/i,/^(?:[0-9])/i,/^(?:.)/i,/^(?:$)/i],conditions:{style:{rules:[34,35,36,37,38,69,70],inclusive:!1},acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},block:{rules:[23,24,25,26,27,28,29,30],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,31,32,33,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,71,72,73,74],inclusive:!0}}}}();function X(){this.yy={}}return j.lexer=W,(0,a.K2)(X,"Parser"),X.prototype=j,j.Parser=X,new X}();h.parser=h;var u=h,y=class{constructor(){this.entities=new Map,this.relationships=[],this.classes=new Map,this.direction="TB",this.Cardinality={ZERO_OR_ONE:"ZERO_OR_ONE",ZERO_OR_MORE:"ZERO_OR_MORE",ONE_OR_MORE:"ONE_OR_MORE",ONLY_ONE:"ONLY_ONE",MD_PARENT:"MD_PARENT"},this.Identification={NON_IDENTIFYING:"NON_IDENTIFYING",IDENTIFYING:"IDENTIFYING"},this.setAccTitle=a.SV,this.getAccTitle=a.iN,this.setAccDescription=a.EI,this.getAccDescription=a.m7,this.setDiagramTitle=a.ke,this.getDiagramTitle=a.ab,this.getConfig=(0,a.K2)((()=>(0,a.D7)().er),"getConfig"),this.clear(),this.addEntity=this.addEntity.bind(this),this.addAttributes=this.addAttributes.bind(this),this.addRelationship=this.addRelationship.bind(this),this.setDirection=this.setDirection.bind(this),this.addCssStyles=this.addCssStyles.bind(this),this.addClass=this.addClass.bind(this),this.setClass=this.setClass.bind(this),this.setAccTitle=this.setAccTitle.bind(this),this.setAccDescription=this.setAccDescription.bind(this)}static{(0,a.K2)(this,"ErDB")}addEntity(t,e=""){return this.entities.has(t)?!this.entities.get(t)?.alias&&e&&(this.entities.get(t).alias=e,a.Rm.info(`Add alias '${e}' to entity '${t}'`)):(this.entities.set(t,{id:`entity-${t}-${this.entities.size}`,label:t,attributes:[],alias:e,shape:"erBox",look:(0,a.D7)().look??"default",cssClasses:"default",cssStyles:[]}),a.Rm.info("Added new entity :",t)),this.entities.get(t)}getEntity(t){return this.entities.get(t)}getEntities(){return this.entities}getClasses(){return this.classes}addAttributes(t,e){const s=this.addEntity(t);let i;for(i=e.length-1;i>=0;i--)e[i].keys||(e[i].keys=[]),e[i].comment||(e[i].comment=""),s.attributes.push(e[i]),a.Rm.debug("Added attribute ",e[i].name)}addRelationship(t,e,s,i){const n=this.entities.get(t),r=this.entities.get(s);if(!n||!r)return;const c={entityA:n.id,roleA:e,entityB:r.id,relSpec:i};this.relationships.push(c),a.Rm.debug("Added new relationship :",c)}getRelationships(){return this.relationships}getDirection(){return this.direction}setDirection(t){this.direction=t}getCompiledStyles(t){let e=[];for(const s of t){const t=this.classes.get(s);t?.styles&&(e=[...e,...t.styles??[]].map((t=>t.trim()))),t?.textStyles&&(e=[...e,...t.textStyles??[]].map((t=>t.trim())))}return e}addCssStyles(t,e){for(const s of t){const t=this.entities.get(s);if(!e||!t)return;for(const s of e)t.cssStyles.push(s)}}addClass(t,e){t.forEach((t=>{let s=this.classes.get(t);void 0===s&&(s={id:t,styles:[],textStyles:[]},this.classes.set(t,s)),e&&e.forEach((function(t){if(/color/.exec(t)){const e=t.replace("fill","bgFill");s.textStyles.push(e)}s.styles.push(t)}))}))}setClass(t,e){for(const s of t){const t=this.entities.get(s);if(t)for(const s of e)t.cssClasses+=" "+s}}clear(){this.entities=new Map,this.classes=new Map,this.relationships=[],(0,a.IU)()}getData(){const t=[],e=[],s=(0,a.D7)();for(const n of this.entities.keys()){const e=this.entities.get(n);e&&(e.cssCompiledStyles=this.getCompiledStyles(e.cssClasses.split(" ")),t.push(e))}let i=0;for(const n of this.relationships){const t={id:(0,r.rY)(n.entityA,n.entityB,{prefix:"id",counter:i++}),type:"normal",curve:"basis",start:n.entityA,end:n.entityB,label:n.roleA,labelpos:"c",thickness:"normal",classes:"relationshipLine",arrowTypeStart:n.relSpec.cardB.toLowerCase(),arrowTypeEnd:n.relSpec.cardA.toLowerCase(),pattern:"IDENTIFYING"==n.relSpec.relType?"solid":"dashed",look:s.look};e.push(t)}return{nodes:t,edges:e,other:{},config:s,direction:"TB"}}},d={};(0,a.VA)(d,{draw:()=>p});var p=(0,a.K2)((async function(t,e,s,o){a.Rm.info("REF0:"),a.Rm.info("Drawing er diagram (unified)",e);const{securityLevel:l,er:h,layout:u}=(0,a.D7)(),y=o.db.getData(),d=(0,i.A)(e,l);y.type=o.type,y.layoutAlgorithm=(0,n.q7)(u),y.config.flowchart.nodeSpacing=h?.nodeSpacing||140,y.config.flowchart.rankSpacing=h?.rankSpacing||80,y.direction=o.db.getDirection(),y.markers=["only_one","zero_or_one","one_or_more","zero_or_more"],y.diagramId=e,await(0,n.XX)(y,d),"elk"===y.layoutAlgorithm&&d.select(".edges").lower();const p=d.selectAll('[id*="-background"]');Array.from(p).length>0&&p.each((function(){const t=(0,c.Ltv)(this),e=t.attr("id").replace("-background",""),s=d.select(`#${CSS.escape(e)}`);if(!s.empty()){const e=s.attr("transform");t.attr("transform",e)}}));r._K.insertTitle(d,"erDiagramTitleText",h?.titleTopMargin??25,o.db.getDiagramTitle()),(0,i.P)(d,8,"erDiagram",h?.useMaxWidth??!0)}),"draw"),_=(0,a.K2)(((t,e)=>{const s=o.A,i=s(t,"r"),n=s(t,"g"),r=s(t,"b");return l.A(i,n,r,e)}),"fade"),g=(0,a.K2)((t=>`\n  .entityBox {\n    fill: ${t.mainBkg};\n    stroke: ${t.nodeBorder};\n  }\n\n  .relationshipLabelBox {\n    fill: ${t.tertiaryColor};\n    opacity: 0.7;\n    background-color: ${t.tertiaryColor};\n      rect {\n        opacity: 0.5;\n      }\n  }\n\n  .labelBkg {\n    background-color: ${_(t.tertiaryColor,.5)};\n  }\n\n  .edgeLabel .label {\n    fill: ${t.nodeBorder};\n    font-size: 14px;\n  }\n\n  .label {\n    font-family: ${t.fontFamily};\n    color: ${t.nodeTextColor||t.textColor};\n  }\n\n  .edge-pattern-dashed {\n    stroke-dasharray: 8,8;\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon\n  {\n    fill: ${t.mainBkg};\n    stroke: ${t.nodeBorder};\n    stroke-width: 1px;\n  }\n\n  .relationshipLine {\n    stroke: ${t.lineColor};\n    stroke-width: 1;\n    fill: none;\n  }\n\n  .marker {\n    fill: none !important;\n    stroke: ${t.lineColor} !important;\n    stroke-width: 1;\n  }\n`),"getStyles"),b={parser:u,get db(){return new y},renderer:d,styles:g}}}]);