(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-missionHall-taskDes-taskDes"],{7509:function(t,n,i){n=t.exports=i("2350")(!1),n.push([t.i,"\n.task_font[data-v-e07fbc7c]{width:%?703.125?%;margin:%?35.156?% auto\n}\n.task_font .title[data-v-e07fbc7c]{font-size:%?32.812?%;color:#686363\n}\n.task_font .des[data-v-e07fbc7c],.task_font .title[data-v-e07fbc7c]{font-family:MicrosoftYaHeiLight;font-weight:300;text-align:center\n}\n.task_font .des[data-v-e07fbc7c]{font-size:%?18.75?%;color:#b2b0b0;margin-top:%?15.234?%\n}\n.task_font .info[data-v-e07fbc7c]{font-size:%?28.125?%;font-family:MicrosoftYaHeiLight;font-weight:300;color:#686363;width:%?703.125?%;margin:0 auto\n}\n.task_font .info uni-image[data-v-e07fbc7c]{width:100%\n}\n.task_font .info uni-textarea[data-v-e07fbc7c]{width:%?618.75?%;margin:%?58.593?% %?41.015?%;line-height:1.4\n}\n.tag-read[data-v-e07fbc7c]{margin-bottom:%?99.609?%\n}\n.taskDes uni-button[data-v-e07fbc7c]{width:%?664.453?%;height:%?86.718?%;margin:0 auto;line-height:%?86.718?%;font-size:%?35.156?%;font-family:SimSun;font-weight:400;color:#e4f6f2\n}",""])},a47b:function(t,n,i){"use strict";i.r(n);var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"taskDes"},[i("v-uni-view",{staticClass:"task_font"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[t._v("普通VIP任务(阿胶)")])],1),i("v-uni-view",{staticClass:"des"},[i("v-uni-text",[t._v("请将以下文案及图片发布到您的朋友圈")])],1),i("v-uni-view",{staticClass:"info"},[i("v-uni-textarea",{model:{value:t.titleInfo,callback:function(n){t.titleInfo=n},expression:"titleInfo"}})],1)],1),i("v-uni-button",{staticClass:"tag-read",attrs:{type:"primary","data-clipboard-text":t.titleInfo},on:{click:function(n){n=t.$handleEvent(n),t.copy(n)}}},[t._v("复制文案")]),i("v-uni-view",{staticClass:"task_font"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[t._v("图片信息")])],1),i("v-uni-view",{staticClass:"des"},[i("v-uni-text",[t._v("点击图片可保存图片到手机")])],1),i("v-uni-view",{staticClass:"info"},[i("v-uni-image",{attrs:{src:"../../../../static/center/logo@2x.png",mode:"widthFix"},on:{longpress:function(n){n=t.$handleEvent(n),t.savePhoto(n)}}})],1)],1)],1)},e=[],o={data:function(){return{titleInfo:"思宏阿胶枣 一斤装哦 是秋天是滋补的季节补起来。阿胶枣含有大量的胶原蛋白、蛋白质以及多种氨基酸，而且富含维生素C、铁、钙、硫、磷、铜等矿物质元素。一袋508克。49.8元两袋包邮@手机号18853971456"}},methods:{copy:function(){uni.setClipboardData({data:this.titleInfo,success:function(){uni.showToast({title:"复制成功",mask:!1,duration:1500,icon:"none"})}})},savePhoto:function(){uni.downloadFile({url:"http://116.62.245.5:80/apiupfile/2018/12/11/1072420635734552576.png",success:function(t){200===t.statusCode&&(console.log(t.tempFilePath),uni.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(){uni.showToast({title:"成功",mask:!1,duration:1500})}}))}})}}},s=o,c=(i("eec4"),i("2877")),f=Object(c["a"])(s,a,e,!1,null,"e07fbc7c",null);f.options.__file="taskDes.vue";n["default"]=f.exports},e34a:function(t,n,i){var a=i("7509");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=i("4f06").default;e("13123e06",a,!0,{sourceMap:!1,shadowMode:!1})},eec4:function(t,n,i){"use strict";var a=i("e34a"),e=i.n(a);e.a}}]);