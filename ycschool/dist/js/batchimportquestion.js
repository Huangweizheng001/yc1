!function(e){var t={};function o(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=48)}({132:function(e,t){},48:function(e,t,o){"use strict";o(132),new Vue({el:"#batchImportQuestion",data:{checkFlag:!1,checkContent:"",questions:[],leftCon:""},filters:{addRootFile:function(e){return SERVERROOTFILE+e},getType:function(e){switch(e){case 1:return"选择题";case 2:return"多选题";case 3:return"判断题";case 4:return"问答题";case 5:return"填空题"}}},mounted:function(){var e=this;this.$nextTick(function(){e.init()})},methods:{init:function(){var e=$(window).height()-71,t=this;$(".fe-batchimport-question-left .fe-left-con").css("height",e),$(".fe-batchimport-question-right .fe-right-con").css("height",e),$(".fe-batchimport-question-left").on("click",".fe-left-nav #word",function(){$(".fe-word-type").hasClass("active")?($(".fe-word-type").slideUp(300),$(".fe-word-type").removeClass("active")):($(".fe-word-type").slideDown(300),$(".fe-word-type").addClass("active"))}),$(".fe-batchimport-question-left").on("click",".fe-word-type  .fe-bottom button",function(){$(".fe-word-type").slideUp(300),$(".fe-word-type").removeClass("active")}),$(".fe-batchimport-question").on("click",".feoperation button:first-child",function(){layer.load(1,{shade:[.1,"#fff"]});t.$http.post("http://www.fetv.cn/fe/QuestionsForTeacher/QuestionsInput.ashx?action=CheckWord",{},{emulateJSON:!0}).then(function(e){layer.closeAll(),200==e.body.code?(t.checkFlag=e.body.returnJson.checkFlag,t.checkContent=e.body.returnJson.checkContent,t.questions=e.body.returnJson.questions):(layer.msg("识别错误，请按格式更改"),t.checkFlag=!1,t.checkContent=e.body.returnJson,t.questions=[])}).then(function(){})}),$(".fe-batchimport-question").on("click",".feoperation button:last-child",function(){layer.load(1,{shade:[.1,"#fff"]});t.$http.post("http://www.fetv.cn/fe/QuestionsForTeacher/QuestionsInput.ashx?action=SaveWord",{},{emulateJSON:!0}).then(function(e){layer.closeAll(),200==e.body.code&&(layer.msg("导入成功！"),$(".fe-batchimport-question-left").css("display","none"),$(".fe-batchimport-question-right").css("display","none"),$(".feoperation").css("display","none"),$(".fe-goback").css("display","block"))})}),$(".fe-batchimport-question-right").on("click",".fe-right-nav span",function(){if(!$(this).hasClass("active")){$(this).siblings().removeClass("active"),$(this).addClass("active");var e=$(this).data("id");t.$http.post("http://www.fetv.cn/fe/QuestionsForTeacher/QuestionsInput.ashx?action=FilterCheckResult",{type:e},{emulateJSON:!0}).then(function(e){200==e.body.code&&(t.checkFlag=e.body.returnJson.checkFlag,t.checkContent=e.body.returnJson.checkContent,t.questions=e.body.returnJson.questions)})}}),$(".fe-batchimport-question .fe-word-type").on("change","#upload",function(){$(".fe-word-type").removeClass("active"),$(".fe-word-type").slideUp(300);var e=new FormData($("#upload-form")[0]);layer.load(1,{shade:[.1,"#fff"]});$.ajax({url:"http://www.fetv.cn/fe/QuestionsForTeacher/QuestionsInput.ashx?action=UploadWord",type:"POST",data:e,processData:!1,contentType:!1,success:function(e){layer.closeAll();var o=JSON.parse(e);200==o.code&&(t.leftCon=o.returnJson)}})})}}})}});