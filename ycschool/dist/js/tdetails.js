!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=21)}({110:function(t,e){},116:function(t,e){},21:function(t,e,n){"use strict";n(116),n(110);var i=$(void 0).getUrlParam("activityId");new Vue({el:"#teachingActivitiesetails",data:{beginTime:"",title:"",content:"",activityTypeName:"",data:{}},filters:{addRootFile:function(t){return SERVERROOTFILE+t},gotoDetail:function(t){return"tdetails.html?activityId="+t}},computed:{},mounted:function(){},created:function(){this.$nextTick(function(){this.qreyetails()})},methods:{qreyetails:function(){var t=this;this.$http.post(SERVERROOTDATA+"/website/ashx/site/Activity.ashx?action=getTeachingResultDetail",{resultId:i},{emulateJSON:!0}).then(function(e){t.data=e.body,t.activityTypeName=e.body.currentResult[0].title})}}})}});