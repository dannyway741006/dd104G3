(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PMView"],{"02f4":function(t,e,n){"use strict";var r=n("1237"),a=n.n(r);a.a},1237:function(t,e,n){},1680:function(t,e,n){"use strict";var r=n("ace6"),a=n.n(r);a.a},"2a6a":function(t,e,n){"use strict";var r=n("7a2a"),a=n.n(r);a.a},"35b0":function(t,e,n){"use strict";var r=n("eb73"),a=n.n(r);a.a},"40f1":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pmView"},[n("div",[n("CreateProject",{on:{createProject:t.CREATE_PROJECT}})],1),n("transition-group",{attrs:{name:"slider",tag:"div"}},t._l(t.projects,(function(e){return n("Project",{key:e.id,attrs:{project:e},on:{enterProject:t.enterProject}})})),1),n("Calendar"),n("Tour",{attrs:{steps:t.PMViewSteps}})],1)},a=[],o=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("159b"),n("96cf"),n("ade3")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"createProject"},[n("label",[t._m(0),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.name,expression:"name",modifiers:{trim:!0}}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("div",[t._m(1),n("div",{staticClass:"project_color"},t._l(t.colors,(function(e){return n("span",{key:e,staticClass:"color",class:{active:t.selectColor===e},style:{backgroundColor:e},on:{click:function(n){t.selectColor=e}}})})),0)]),n("button",{on:{click:t.createProject}},[t._v(" 建立專案 ")])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("專案名稱 "),n("span",[t._v("Project")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("專案專屬色 "),n("span",[t._v("Color")])])}],s=n("750b"),u={name:"CreateProject",setup:function(t,e){var n=e.emit,r=Object(s["f"])(["#81c7d4","#a6c1ee","#3581B8","#f8c3cd","#EB7A77","#F9BF45","#86C166","#B6BE9C","#9E768F","#B2967D","#7C6C77","#777777"]),a=Object(s["f"])(null),o=Object(s["f"])(null),c=Object(s["a"])((function(){return{id:Date.now()+"",info:{title:a.value,color:o.value},list:[{status:"待辦事項",todo:[]},{status:"進行中",todo:[]},{status:"已完成",todo:[]}]}})),i=function(){a.value&&o.value&&(n("createProject",c.value),a.value=null,o.value=null)};return{colors:r,name:a,selectColor:o,createProject:i}}},l=u,d=(n("1680"),n("2877")),f=Object(d["a"])(l,c,i,!1,null,null,null),p=f.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project"},[r("p",{on:{click:t.enterProject}},[r("span",{style:{backgroundColor:t.project.info.color}}),t._v(" "+t._s(t.project.info.title)+" ")]),t.project.memberList?r("div",{staticClass:"project_members"},t._l(t.project.memberList,(function(t){return r("div",{key:t.mem_no,staticClass:"member"},[r("img",{attrs:{src:t.headshot?"./userImg/"+t.headshot:n("d710"),title:t.mem_name||t.mem_id,alt:"member"}})])})),0):t._e(),r("div",{staticClass:"invite"},[t.result?r("p",{staticClass:"invite_status",class:t.result.status},[t._v(" "+t._s(t.result.content)+" ")]):t._e(),r("div",{staticClass:"invite_input"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inviteAccount,expression:"inviteAccount",modifiers:{trim:!0}}],style:{backgroundColor:t.project.info.color},attrs:{type:"text",placeholder:"邀請帳號"},domProps:{value:t.inviteAccount},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.inviteMember(e)},input:function(e){e.target.composing||(t.inviteAccount=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),r("div",{on:{click:t.inviteMember}},[r("img",{attrs:{src:n("2fbe"),alt:"search"}})])])])])},b=[],v=n("2f62");function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O={name:"Project",props:{project:{type:Object,required:!0}},setup:function(t,e){var n=e.emit,r=Object(s["f"])(null),a=Object(s["f"])(null),o=function(){return n("enterProject",t.project.id)};return{inviteAccount:r,result:a,enterProject:o}},methods:j({},Object(v["b"])("memberStore",["INVITE_MEMBER"]),{inviteMember:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.inviteAccount){t.next=5;break}return t.next=3,regeneratorRuntime.awrap(this.INVITE_MEMBER({account:this.inviteAccount,projectId:this.project.id}));case 3:this.result=t.sent,this.inviteAccount=null;case 5:case"end":return t.stop()}}),null,this)}})},_=O,y=(n("2a6a"),Object(d["a"])(_,m,b,!1,null,null,null)),w=y.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calendar"},[n("transition",{attrs:{name:"slider_xl",mode:"out-in"}},[n(t.view,{tag:"component",attrs:{calendar:t.calendar,"view-date":t.viewDate,"maturity-card":t.maturityCard?t.maturityCard:{},"now-date":t.nowDate?t.nowDate:NaN},on:{viewRemainder:t.viewRemainder,back:function(e){t.view="CalendarView"}},nativeOn:{mousewheel:function(t){t.stopPropagation()}}})],1)],1)},C=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calendar_view"},t._l(t.calendar,(function(e){return n("div",{key:e.nowMonth},[n("div",{staticClass:"calendar_month"},[t._v(" "+t._s(e.nowMonth)+" ")]),n("ul",{staticClass:"calendar_days"},t._l(e.days,(function(r){return n("li",{key:r.date,class:{now_date:t.nowDate===r.date},on:{click:function(n){t.selectDate={month:e.nowMonth,date:r.date,day:r.day}}}},[n("p",[t._v(t._s(r.day))]),n("p",[t._v(t._s(r.date))]),t.maturityCard[e.nowMonth]&&t.maturityCard[e.nowMonth][r.date]?n("span",[t._v(t._s(t.maturityCard[e.nowMonth][r.date].length))]):t._e()])})),0)])})),0)},x=[],E=(n("a9e3"),{name:"CalendarView",props:{calendar:{type:Array,required:!0},nowDate:{type:Number,required:!0},viewDate:{type:Object,required:!0},maturityCard:{type:Object,required:!0}},setup:function(t,e){var n=e.emit,r=Object(s["a"])({get:function(){return t.viewDate},set:function(t){var e=t.month,r=t.date,a=t.day;n("viewRemainder",{month:e,date:r,day:a})}});return{selectDate:r}}}),T=E,D=(n("ccfc"),Object(d["a"])(T,P,x,!1,null,null,null)),k=D.exports,I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"calendarReminder"},[r("div",{staticClass:"reminder_header"},[r("button",{on:{click:t.back,touchstart:t.back}},[r("img",{attrs:{src:n("a78c"),alt:"back"}}),r("img",{attrs:{src:n("15c0"),alt:"back"}})]),r("div",{staticClass:"reminder_date"},[r("p",[t._v(t._s(t.getFullMonth)+", "+t._s(t.viewDate.day))]),r("h2",[t._v(t._s(t.viewDate.date))])])]),r("ul",{staticClass:"reminder_list"},t._l(t.getMaturityCards,(function(t){return r("CalendarReminderItem",{key:t.card_no,attrs:{cards:t}})})),1)])},M=[],R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"calendar_reminder_item",on:{click:t.checkTodoCard}},[r("div",{staticClass:"card_color",style:{backgroundColor:t.cards.pro_col}}),r("div",{staticClass:"todo_title"},[r("p",[t._v(t._s(t.cards.card_name))])]),r("div",{staticClass:"todo_info"},[r("div",{staticClass:"todo_date"},[r("img",{attrs:{src:n("aa21"),alt:"calendar",width:"20"}}),r("p",[t._v(t._s(t.cards.card_date))])])])])},S=[],A={name:"CalendarReminderItem",props:{cards:{type:Object,required:!0}},setup:function(t,e){var n=e.root,r=function(){n.$router.push({name:"Project",params:{id:t.cards.pro_no}})};return{checkTodoCard:r}}},N=A,$=(n("6a73"),Object(d["a"])(N,R,S,!1,null,null,null)),V=$.exports,F={name:"CalendarReminder",components:{CalendarReminderItem:V},props:{viewDate:{type:Object,required:!0},maturityCard:{type:Object,required:!0}},setup:function(t,e){var n=e.emit,r=function(){n("back")},a=Object(s["a"])((function(){var e=["January","February","March","April","May","June","July","August","September","October","November","December"];return e[t.viewDate.month-1]})),o=Object(s["a"])((function(){return t.maturityCard[t.viewDate.month]&&t.maturityCard[t.viewDate.month][t.viewDate.date]?t.maturityCard[t.viewDate.month][t.viewDate.date]:[]}));return{back:r,getFullMonth:a,getMaturityCards:o}}},L=F,J=(n("02f4"),Object(d["a"])(L,I,M,!1,null,null,null)),U=J.exports;function q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?q(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var B={name:"Calendar",components:{CalendarView:k,CalendarReminder:U},setup:function(){var t=Object(s["f"])("CalendarView"),e=Object(s["f"])([]),n=Object(s["f"])({}),r=Object(s["f"])(null),a=function(){var t=new Date,n=["SUN","MON","TUE","WED","THU","FRI","SAT"],a=t.getMonth()+1;r.value=t.getDate();var o=t.getDay(),c=new Date(t.getFullYear(),a,0).getDate();e.value.push({nowMonth:a,days:[]});for(var i=0;i<7;i++)e.value[e.value.length-1].days.push({date:(r.value+i)%c||c,day:n[(o+i)%7]}),(r.value+i)%c===0&&(a=(a+1)%12||12,e.value.push({nowMonth:a,days:[]}))},o=function(e){t.value="CalendarReminder",n.value=e};return Object(s["e"])((function(){a()})),{view:t,calendar:e,viewDate:n,viewRemainder:o,nowDate:r}},computed:G({},Object(v["e"])("pmStore",["maturityCard"]))},Y=B,X=(n("84d2"),Object(d["a"])(Y,g,C,!1,null,null,null)),H=X.exports,W=n("f301"),z=n("60d6");function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Z={name:"PMView",components:{CreateProject:p,Project:w,Calendar:H,Tour:W["a"]},setup:function(t,e){e.refs;var n=e.root,r=function(t){n.$router.push({name:"Project",params:{id:t}})},a=Object(z["a"])(n),o=a.PMViewSteps;return{enterProject:r,PMViewSteps:o}},computed:Q({},Object(v["e"])(["isLogin"]),{},Object(v["e"])("pmStore",["projects"]),{},Object(v["e"])("memberStore",["userInfo"])),watch:{isLogin:function(t){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,regeneratorRuntime.awrap(this.GET_PROJECTS_LIST(this.userInfo.mem_no));case 3:return e.next=5,regeneratorRuntime.awrap(this.GET_MATURITY_CARD(this.userInfo.mem_no));case 5:case"end":return e.stop()}}),null,this)}},mounted:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(this.clearProjectId(),!this.isLogin){t.next=6;break}return t.next=4,regeneratorRuntime.awrap(this.GET_PROJECTS_LIST(this.userInfo.mem_no));case 4:return t.next=6,regeneratorRuntime.awrap(this.GET_MATURITY_CARD(this.userInfo.mem_no));case 6:case"end":return t.stop()}}),null,this)},methods:Q({},Object(v["b"])("pmStore",["CREATE_PROJECT","GET_PROJECTS_LIST","GET_MATURITY_CARD"]),{},Object(v["d"])("pmStore",["clearProjectId"]))},tt=Z,et=(n("f4bc"),Object(d["a"])(tt,r,a,!1,null,null,null));e["default"]=et.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("5899"),o="["+a+"]",c=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(i,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},"59b7":function(t,e,n){},"60d6":function(t,e,n){"use strict";var r=n("750b");e["a"]=function(t,e){var n=Object(r["f"])([{attachTo:{element:".createProject",on:"right"},text:"歡迎來到專案管理頁面,是否進入教學",buttons:[{action:function(){return t.$route.meta.tour=!1,this.complete()},text:"Skip"},{action:function(){return this.next()},text:"教學"}]},{attachTo:{element:".createProject input",on:"bottom"},text:"輸入你的專案名稱",buttons:[{action:function(){return this.next()},text:"下一步"}]},{attachTo:{element:".project_color",on:"bottom"},text:"選擇你的專案色",buttons:[{action:function(){return this.next()},text:"下一步"}]},{attachTo:{element:".createProject button",on:"left"},text:"建立一個專案",buttons:[{action:function(){return this.next()},text:"完成"}]},{attachTo:{element:".calendar_view",on:"right"},text:"登入後，側邊行事曆會提醒你 7 天以內快到期的專案待辦事項",buttons:[{action:function(){return t.$route.meta.tour=!1,this.complete()},text:"我知道了"}]}]),a=Object(r["f"])([{attachTo:{element:".card"},text:"為你的專案增加一個待辦事項吧",buttons:[{action:function(){return t.$route.meta.tour=!1,this.complete()},text:"Skip"},{action:function(){return e.$emit("tourMode",!0),this.next()},text:"教學"}]},{attachTo:{element:".card_head",on:"bottom"},text:"幫你的待辦事項取名子",buttons:[{action:function(){return this.next()},text:"下一步"}]},{attachTo:{element:".inviteComponent",on:"bottom"},text:"如果是多人專案即可指定此待辦事項成員",buttons:[{action:function(){return this.next()},text:"下一步"}]},{attachTo:{element:".dateComponent ",on:"bottom"},text:"你可以決定是否要設定期限",buttons:[{action:function(){return this.next()},text:"下一步"}]},{attachTo:{element:".add_todo ",on:"bottom"},text:"試著增加待辦事項的內容吧",buttons:[{action:function(){return this.next()},text:"下一步"}]},{attachTo:{element:".contentList ",on:"bottom"},text:"建立事項後可以將這件事情加入番茄鐘",buttons:[{action:function(){return this.next()},text:"下一步"}]},{attachTo:{element:".fileContent label",on:"bottom"},text:"這裡可以上傳檔案",buttons:[{action:function(){return this.next()},text:"下一步"}]},{attachTo:{element:".card_footer",on:"bottom"},text:"建立這張待辦事項卡片吧",buttons:[{action:function(){return e.$emit("tourMode",!1),t.$route.meta.tour=!1,this.complete()},text:"完成"}]}]);return{PMViewSteps:n,CardViewSteps:a}}},"6a73":function(t,e,n){"use strict";var r=n("59b7"),a=n.n(r);a.a},"7a2a":function(t,e,n){},"84d2":function(t,e,n){"use strict";var r=n("afe7"),a=n.n(r);a.a},"8a27":function(t,e,n){},a9e3:function(t,e,n){"use strict";var r=n("83ab"),a=n("da84"),o=n("94ca"),c=n("6eeb"),i=n("5135"),s=n("c6b6"),u=n("7156"),l=n("c04e"),d=n("d039"),f=n("7c73"),p=n("241c").f,m=n("06cf").f,b=n("9bf2").f,v=n("58a8").trim,h="Number",j=a[h],O=j.prototype,_=s(f(O))==h,y=function(t){var e,n,r,a,o,c,i,s,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+u}for(o=u.slice(2),c=o.length,i=0;i<c;i++)if(s=o.charCodeAt(i),s<48||s>a)return NaN;return parseInt(o,r)}return+u};if(o(h,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var w,g=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof g&&(_?d((function(){O.valueOf.call(n)})):s(n)!=h)?u(new j(y(e)),n,g):y(e)},C=r?p(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;C.length>P;P++)i(j,w=C[P])&&!i(g,w)&&b(g,w,m(j,w));g.prototype=O,O.constructor=g,c(a,h,g)}},ace6:function(t,e,n){},afe7:function(t,e,n){},b60b:function(t,e,n){},ccfc:function(t,e,n){"use strict";var r=n("8a27"),a=n.n(r);a.a},eb73:function(t,e,n){},f301:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tour"})},a=[],o=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),c=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={name:"Tour",props:{steps:{type:Array,required:!0}},computed:s({},Object(c["e"])(["isLogin"])),mounted:function(){var t=this;this.isLogin||this.$route.meta.tour&&this.$nextTick((function(){var e=t.$shepherd({useModalOverlay:!0,defaultStepOptions:{classes:"tour",scrollTo:!0},cancelIcon:{enabled:!0}});e.addSteps(t.steps),setTimeout((function(){e.start()}),100)}))}},l=u,d=(n("35b0"),n("2877")),f=Object(d["a"])(l,r,a,!1,null,null,null);e["a"]=f.exports},f4bc:function(t,e,n){"use strict";var r=n("b60b"),a=n.n(r);a.a}}]);