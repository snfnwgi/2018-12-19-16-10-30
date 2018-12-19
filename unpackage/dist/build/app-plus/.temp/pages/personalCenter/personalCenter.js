require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([13],{38:function(t,e,i){"use strict";var s=n(i(1)),a=n(i(39));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},39:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(41),a=i.n(s),n=i(42);var l=function(t){i(40)},c=i(0)(a.a,n.a,l,null,null);e.default=c.exports},40:function(t,e){},41:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},onLoad:function(){console.log("onload")},onReady:function(){console.log("onready")},created:function(){console.log("created")},methods:{personalInformation:function(){t.navigateTo({url:"../gerenziliao/gerenziliao"})},bindingBank:function(){t.navigateTo({url:"../bindingBank/bindingBank"})},wallet:function(){t.navigateTo({url:"../wallet/wallet"})},exitApp:function(){plus.runtime.quit()}}}}).call(e,i(2).default)},42:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"body"},[t._m(0),t._m(1),i("view",{staticClass:"center_list"},[i("view",{staticClass:"center_list_item",attrs:{eventid:"d4E-0"},on:{tap:t.personalInformation}},[t._m(2),t._m(3)]),i("view",{staticClass:"center_list_item",attrs:{eventid:"tTf-1"},on:{tap:t.bindingBank}},[t._m(4),t._m(5)]),i("view",{staticClass:"center_list_item",attrs:{eventid:"3Hd-2"},on:{tap:t.wallet}},[t._m(6),t._m(7)]),t._m(8),t._m(9),i("view",{staticClass:"center_list_item",attrs:{eventid:"YWz-3"},on:{tap:t.exitApp}},[t._m(10),t._m(11)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"center_logo"},[e("view",{staticClass:"logo"},[e("image",{attrs:{src:"http://116.62.245.5/wallet-static/center/logo@2x.png",mode:"widthFix"}}),e("text",[this._v("测试用户")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"center_money"},[e("view",{staticClass:"box"},[e("view",{staticClass:"top"},[e("text",[this._v("100000.00")])]),e("view",{staticClass:"next"},[e("text",[this._v("总收入")])])]),e("view",{staticClass:"box"},[e("view",{staticClass:"top"},[e("text",[this._v("800.00")])]),e("view",{staticClass:"next"},[e("text",[this._v("今日收入")])])]),e("view",{staticClass:"box"},[e("view",{staticClass:"top"},[e("text",[this._v("50000.00")])]),e("view",{staticClass:"next"},[e("text",[this._v("已提现")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticStyle:{display:"flex"}},[e("view",{staticClass:"listIco"},[e("image",{staticStyle:{width:"100%"},attrs:{src:"http://116.62.245.5/wallet-static/center/geren.png",mode:"widthFix"}})]),e("view",{staticClass:"listFont"},[e("text",[this._v("个人资料")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"listIconfont"},[e("image",{attrs:{src:"http://116.62.245.5/wallet-static/center/more.png",mode:"widthFix"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticStyle:{display:"flex"}},[e("view",{staticClass:"listIco"},[e("image",{staticStyle:{width:"100%"},attrs:{src:"http://116.62.245.5/wallet-static/center/yhk.png",mode:"widthFix"}})]),e("view",{staticClass:"listFont"},[e("text",[this._v("绑定银行卡")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"listIconfont"},[e("image",{attrs:{src:"http://116.62.245.5/wallet-static/center/more.png",mode:"widthFix"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticStyle:{display:"flex"}},[e("view",{staticClass:"listIco"},[e("image",{staticStyle:{width:"100%"},attrs:{src:"http://116.62.245.5/wallet-static/center/qb.png",mode:"widthFix"}})]),e("view",{staticClass:"listFont"},[e("text",[this._v("钱包")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"listIconfont"},[e("image",{attrs:{src:"http://116.62.245.5/wallet-static/center/more.png",mode:"widthFix"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"center_list_item"},[e("view",{staticStyle:{display:"flex"}},[e("view",{staticClass:"listIco"},[e("image",{staticStyle:{width:"100%"},attrs:{src:"http://116.62.245.5/wallet-static/center/cw.png",mode:"widthFix"}})]),e("view",{staticClass:"listFont"},[e("text",[this._v("财务管理")])])]),e("view",{staticClass:"listIconfont"},[e("image",{attrs:{src:"http://116.62.245.5/wallet-static/center/more.png",mode:"widthFix"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"center_list_item center_margin"},[e("view",{staticStyle:{display:"flex"}},[e("view",{staticClass:"listIco"},[e("image",{staticStyle:{width:"100%"},attrs:{src:"http://116.62.245.5/wallet-static/center/cw.png",mode:"widthFix"}})]),e("view",{staticClass:"listFont"},[e("text",[this._v("检查更新")])])]),e("view",{staticClass:"listIconfont"},[e("image",{attrs:{src:"http://116.62.245.5/wallet-static/center/more.png",mode:"widthFix"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticStyle:{display:"flex"}},[e("view",{staticClass:"listIco"},[e("image",{staticStyle:{width:"100%"},attrs:{src:"http://116.62.245.5/wallet-static/center/tuichu.png",mode:"widthFix"}})]),e("view",{staticClass:"listFont"},[e("text",[this._v("退出APP")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"listIconfont"},[e("image",{attrs:{src:"http://116.62.245.5/wallet-static/center/more.png",mode:"widthFix"}})])}]};e.a=s}},[38]);