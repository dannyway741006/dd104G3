(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Clock"],{5707:function(t,e,r){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var i=r("1d80"),n=r("5899"),c="["+n+"]",s=RegExp("^"+c+c+"*"),o=RegExp(c+c+"*$"),a=function(t){return function(e){var r=String(i(e));return 1&t&&(r=r.replace(s,"")),2&t&&(r=r.replace(o,"")),r}};t.exports={start:a(1),end:a(2),trim:a(3)}},"63fb":function(t,e,r){},"6e7d":function(t,e,r){},"79b0":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"clock"},[r("div",{attrs:{id:"clock"}},[r("ClockFace",{attrs:{mode:t.mode,"clock-time":t.passedTimer,timer:t.timer,"is-play":t.isPlay}}),r("ClockControl",{attrs:{mode:t.mode},on:{"update:mode":function(e){t.mode=e},resetTimer:function(e){return t.resetTimer(t.targetInfo)}}})],1),r("ClockContent",{attrs:{mode:t.mode,elapsedtimer:t.workElapsedtimer}})],1)},n=[],c=(r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"clockFace"},[r("svg",{class:{active:t.isPlay},attrs:{id:"svg",width:"30vw",height:"30vw",viewPort:"0 0 155 155",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[r("defs",[r("linearGradient",{class:{break:t.mode},attrs:{id:"gradient",x1:"0",x2:"0",y1:"0",y2:"1"}},[r("stop",{attrs:{offset:"0%"}}),r("stop",{attrs:{offset:"100%"}})],1)],1),r("circle",{attrs:{r:"40%",cx:"50%",cy:"50%"}}),r("circle",{ref:"bar",attrs:{id:"bar",r:"40%",cx:"50%",cy:"50%","stroke-dashoffset":t.dashOffset}}),r("circle",{attrs:{id:"outside",r:"45%",cx:"50%",cy:"50%"}}),r("text",{attrs:{id:"timer",x:"50%",y:"50%"}},[t._v(t._s(t.time))])])])},o=[],a=(r("a9e3"),r("750b")),l=(r("99af"),{computed:{time:function(){var t=this.clockTime%60<10?"0"+this.clockTime%60:this.clockTime%60,e=(this.clockTime-t)/60<10?"0"+(this.clockTime-t)/60:(this.clockTime-t)/60;return"".concat(e,":").concat(t)}}}),u={name:"ClockFace",mixins:[l],props:{timer:{type:Number,required:!0},clockTime:{type:Number,required:!0},mode:{type:Number,required:!0},isPlay:{type:Boolean,required:!0}},setup:function(t,e){var r=e.refs,i=(e.emit,Object(a["f"])(NaN)),n=Object(a["a"])((function(){return i.value-(i.value-i.value/t.timer*t.clockTime)})),c=function(){var t=r.bar,e=t.getBoundingClientRect().width*Math.PI;t.style.strokeDasharray=e,i.value=e};return Object(a["e"])((function(){setTimeout((function(){c()}),1),window.addEventListener("resize",c)})),Object(a["d"])((function(){window.removeEventListener("resize",c)})),{dasharray:i,dashOffset:n}}},f=u,d=(r("c26e"),r("2877")),p=Object(d["a"])(f,s,o,!1,null,null,null),m=p.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"clockControl"},[i("div",{staticClass:"switch"},[i("div",{staticClass:"work",class:{active:!t.switchMode},on:{click:function(e){t.switchMode=0}}},[t._v(" WORK ")]),i("div",{staticClass:"control"},[i("div",{staticClass:"reset",on:{click:t.resetTimer}},[i("img",{attrs:{src:r("7a99"),alt:"reset"}}),i("img",{attrs:{src:r("c6cf"),alt:"reset"}})])]),i("div",{staticClass:"break",class:{active:t.switchMode},on:{click:function(e){t.switchMode=1}}},[t._v(" BREAK ")])]),i("div")])},v=[],O={name:"ClockControl",props:{mode:{type:Number,required:!0}},setup:function(t,e){var r=e.emit,i=Object(a["a"])({get:function(){return t.mode},set:function(t){r("update:mode",t)}}),n=function(){return r("resetTimer")};return{switchMode:i,resetTimer:n}}},y=O,g=(r("a0a6"),Object(d["a"])(y,b,v,!1,null,null,null)),h=g.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"clockContent",class:{listType:t.listType}},[r("div",{staticClass:"select_list"},[r("button",{class:{active:!t.listType},attrs:{type:"button"},on:{click:function(e){t.listType=0}}},[t._v(" 專案項目 ")]),r("button",{class:{active:t.listType},attrs:{type:"button"},on:{click:function(e){t.listType=1}}},[t._v(" 個人項目 ")])]),t._l(t.clockList,(function(e){return r("ClockContentList",{key:e.type,class:e.type,attrs:{content:e,mode:t.mode,elapsedtimer:t.elapsedtimer}})}))],2)},C=[],j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"clockContentList"},[i("div",{staticClass:"title"},[i("p",[t._v(t._s(t.content.name))])]),i("transition-group",{staticClass:"list",attrs:{tag:"ul",name:"self"===t.content.type?"slider":null}},t._l(t.content.list,(function(e){return i("ClockList",{key:e.info.id,attrs:{list:e,mode:t.mode,type:t.content.type,elapsedtimer:t.elapsedtimer},nativeOn:{click:function(r){return t.selectTarget(e)}}})})),1),"self"===t.content.type?i("div",{staticClass:"add_clock_list"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.listContent,expression:"listContent",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"增加一項"},domProps:{value:t.listContent},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addList(e)},input:function(e){e.target.composing||(t.listContent=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("div",{on:{click:t.addList}},[i("img",{attrs:{src:r("f232"),alt:"edit"}}),i("img",{attrs:{src:r("8513"),alt:"edit"}})])]):t._e()],1)},w=[],T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"clockList",class:[{active:t.targetInfo&&t.list.info.id===t.targetInfo.info.id},t.clockStyle]},[i("div",{staticClass:"card_color",style:t.cardColor}),i("div",{staticClass:"title"},[i("p",[t._v(t._s(t.list.info.content))])]),i("div",{staticClass:"info"},[i("div",{staticClass:"timer"},[i("img",{attrs:{src:r("72d7"),alt:"calendar",width:"20"}}),i("p",[t._v(t._s(t.time))])]),i("div",{staticClass:"status"},[t.targetInfo&&t.list.info.id===t.targetInfo.info.id?i("div",{staticClass:"control",on:{click:function(e){return t.toggleStatus(!t.isPlay)}}},[!t.isPlay||t.targetInfo&&t.list.info.id!==t.targetInfo.info.id?i("div",{staticClass:"play"},[i("img",{attrs:{src:r("b803"),alt:"play"}}),i("img",{attrs:{src:r("b093"),alt:"play"}})]):i("div",{staticClass:"pause"},[i("img",{attrs:{src:r("321d"),alt:"pause"}}),i("img",{attrs:{src:r("87ed"),alt:"pause"}})])]):t._e(),i("div",{staticClass:"done",on:{click:function(e){return t.DONE_CLOCK(t.list)}}},[t.list.info.status?i("img",{attrs:{src:r("73ae"),alt:"checked",width:"17.5"}}):i("img",{attrs:{src:r("5ec3"),alt:"checked",width:"17.5"}})]),i("div",{staticClass:"cancel",on:{click:function(e){return t.DELETE_CLOCK(t.list)}}},[i("img",{attrs:{src:r("b248"),alt:"checked"}}),i("img",{attrs:{src:r("dc71"),alt:"checked"}})])])])])},_=[],E=r("2f62");function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function L(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var I={name:"ClockList",mixins:[l],props:{list:{type:Object,required:!0},mode:{type:Number,required:!0},elapsedtimer:{type:Number,required:!0},type:{type:String,required:!0}},setup:function(t){var e=Object(a["a"])((function(){return t.mode?"break":"work"})),r=Object(a["a"])((function(){return"pm"===t.type?{backgroundColor:t.list.color}:{backgroundImage:"linear-gradient(to right, #81c7d4, #f8c3cd)"}}));return{clockStyle:e,cardColor:r}},computed:L({},Object(E["e"])("clockStore",["isPlay","targetInfo"]),{clockTime:function(){return this.targetInfo&&this.list.info.id===this.targetInfo.info.id?this.list.info.timer+this.elapsedtimer:this.list.info.timer}}),methods:L({},Object(E["d"])("clockStore",["toggleStatus"]),{},Object(E["b"])("clockStore",["DONE_CLOCK","DELETE_CLOCK"]))},S=I,N=(r("afa3"),Object(d["a"])(S,T,_,!1,null,null,null)),D=N.exports;function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var A={name:"ClockContentList",components:{ClockList:D},props:{content:{type:Object,required:!0},mode:{type:Number,required:!0},elapsedtimer:{type:Number,required:!0}},setup:function(t){var e=Object(a["f"])(null),r=Object(a["a"])((function(){return{type:"self",info:{content:e.value,id:Date.now()+"",status:!1,timer:0}}}));return{listContent:e,selfList:r}},methods:q({},Object(E["d"])("clockStore",["selectTarget","addSelfList"]),{addList:function(){this.listContent&&(this.addSelfList(this.selfList),this.listContent=null)}})},M=A,F=(r("a604"),Object(d["a"])(M,j,w,!1,null,null,null)),K=F.exports;function R(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function $(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?R(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var G={name:"ClockContent",components:{ClockContentList:K},props:{mode:{type:Number,required:!0},elapsedtimer:{type:Number,required:!0}},setup:function(){var t=Object(a["f"])(0);return{listType:t}},computed:$({},Object(E["c"])("clockStore",["clockList"]))},V=G,B=(r("e96d"),Object(d["a"])(V,k,C,!1,null,null,null)),U=B.exports;function z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function J(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?z(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var X={name:"Clock",components:{ClockFace:m,ClockControl:h,ClockContent:U},setup:function(t,e){var r=e.root,i=Object(a["f"])(0),n=Object(a["f"])(10),c=Object(a["f"])(5),s=Object(a["f"])(0),o=Object(a["f"])(0),l=Object(a["f"])(0),u=Object(a["f"])(null),f=Object(a["a"])((function(){return i.value?c.value:n.value})),d=Object(a["a"])({get:function(){return i.value?o.value:s.value},set:function(t){i.value?o.value=t:s.value=t}}),p=Object(a["a"])((function(){return f.value-d.value})),m=function t(){u.value=setTimeout((function(){b(),0===p.value?i.value?r.$store.commit("clockStore/toggleStatus",!1):i.value=1:(d.value++,t())}),1e3)},b=function(){return clearTimeout(u.value)},v=function(){i.value=0,s.value=0,o.value=0,l.value=0},O=function(){l.value=s.value};return{mode:i,workElapsedtimer:s,resetClock:v,startTime:m,clearTime:b,timer:f,passedTimer:p,tempTimer:l,setTempTimer:O}},computed:J({},Object(E["e"])("clockStore",["isPlay","targetInfo"]),{},Object(E["e"])(["isLogin"])),watch:{mode:{handler:function(){this.toggleStatus(!1),this.setTempTimer()}},targetInfo:{handler:function(t,e){this.resetTimer(e)}},isPlay:{immediate:!0,handler:function(t){this.setTempTimer(),t?this.startTime():this.clearTime()}},isLogin:function(t){t&&this.GET_CLOCK_LIST()}},mounted:function(){this.isLogin&&this.GET_CLOCK_LIST()},activated:function(){this.isLogin&&this.GET_CLOCK_LIST()},methods:J({},Object(E["d"])("clockStore",["toggleStatus"]),{},Object(E["b"])("clockStore",["ADD_TIMER","GET_CLOCK_LIST"]),{resetTimer:function(t){this.setTempTimer(),this.ADD_TIMER({info:t,timer:this.tempTimer}),this.toggleStatus(!1),this.resetClock()}})},Y=X,W=(r("9390"),Object(d["a"])(Y,i,n,!1,null,null,null));e["default"]=W.exports},9262:function(t,e,r){},9390:function(t,e,r){"use strict";var i=r("93da"),n=r.n(i);n.a},"93da":function(t,e,r){},"95a1":function(t,e,r){},a0a6:function(t,e,r){"use strict";var i=r("5707"),n=r.n(i);n.a},a604:function(t,e,r){"use strict";var i=r("63fb"),n=r.n(i);n.a},a9e3:function(t,e,r){"use strict";var i=r("83ab"),n=r("da84"),c=r("94ca"),s=r("6eeb"),o=r("5135"),a=r("c6b6"),l=r("7156"),u=r("c04e"),f=r("d039"),d=r("7c73"),p=r("241c").f,m=r("06cf").f,b=r("9bf2").f,v=r("58a8").trim,O="Number",y=n[O],g=y.prototype,h=a(d(g))==O,k=function(t){var e,r,i,n,c,s,o,a,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=v(l),e=l.charCodeAt(0),43===e||45===e){if(r=l.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+l}for(c=l.slice(2),s=c.length,o=0;o<s;o++)if(a=c.charCodeAt(o),a<48||a>n)return NaN;return parseInt(c,i)}return+l};if(c(O,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var C,j=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof j&&(h?f((function(){g.valueOf.call(r)})):a(r)!=O)?l(new y(k(e)),r,j):k(e)},w=i?p(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;w.length>T;T++)o(y,C=w[T])&&!o(j,C)&&b(j,C,m(y,C));j.prototype=g,g.constructor=j,s(n,O,j)}},afa3:function(t,e,r){"use strict";var i=r("95a1"),n=r.n(i);n.a},c26e:function(t,e,r){"use strict";var i=r("9262"),n=r.n(i);n.a},e96d:function(t,e,r){"use strict";var i=r("6e7d"),n=r.n(i);n.a}}]);