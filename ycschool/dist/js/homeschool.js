!function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}({10:function(t,e,n){"use strict";n(88);new Vue({el:"#jhomeWorkApp",data:{consultList:[],replyList:[],current:1,allpage:0,showItem:3,userIconPath:""},filters:{addRootFile:function(t){return SERVERROOTFILE+t}},mounted:function(){this.$nextTick(function(){this.getConsult(),this.userIconPath=$(window).storager({key:"uIcon"}).readStorage()})},methods:{getConsult:function(){var t=this;this.$http.post(SERVERROOTDATA+"api/student/site/Student.ashx?action=getSuggestionList",{pageSize:t.showItem,pageIndex:t.current},{emulateJSON:!0}).then(function(e){200==e.body.code&&(t.consultList=e.body.rows,t.consultList.forEach(function(t,e){Vue.set(t,"openFlag",!1)}),t.allpage=e.body.totalPageCount)}).then(function(){t.setParentIframe()})},getSuggestion:function(t){var e=this;this.$http.post(SERVERROOTDATA+"api/student/site/Student.ashx?action=getSuggestionResponseList",{suggestionId:t.suggestionId,pageSize:200,pageIndex:1},{emulateJSON:!0}).then(function(n){200==n.body.code&&Vue.set(e.consultList[e.consultList.indexOf(t)],"suggestion",n.body.rows)}).then(function(){e.setParentIframe()})},toggleReply:function(t){Vue.set(t,"openFlag",!t.openFlag),t.openFlag&&(Vue.set(t,"suggestion",[]),Vue.set(t,"replyContent",""),this.getSuggestion(t))},replySub:function(t){var e=this;if(""==t.replyContent)return layer.msg("回复内容不能为空!"),!1;this.$http.post(SERVERROOTDATA+"api/student/app/Student.ashx?action=saveSuggestionResponse",{suggestionId:t.suggestionId,content:t.replyContent},{emulateJSON:!0}).then(function(n){200==n.body.code?(layer.msg(n.body.message),Vue.set(e.consultList[e.consultList.indexOf(t)],"replyContent",""),e.getSuggestion(t)):layer.msg(n.body.message)}).then(function(){e.setParentIframe()})},setParentIframe:function(){setTimeout(function(){window.parent.window.setIframeHeight($("#jStudentIframe")[0])},200)}}})},88:function(t,e){}});