(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16593904"],{1799:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.getProducts(t.pagination.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagination.total_pages,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.pagination.current_page==a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getProducts(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.getProducts(t.pagination.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},s=[],n={props:["pagination"],methods:{getProducts:function(t){this.$emit("changePage",t)}}},i=n,r=e("2877"),c=Object(r["a"])(i,o,s,!1,null,null,null);a["a"]=c.exports},"466d":function(t,a,e){"use strict";var o=e("d784"),s=e("825a"),n=e("50c4"),i=e("1d80"),r=e("8aa5"),c=e("14c3");o("match",1,(function(t,a,e){return[function(a){var e=i(this),o=void 0==a?void 0:a[t];return void 0!==o?o.call(a,e):new RegExp(a)[t](String(e))},function(t){var o=e(a,t,this);if(o.done)return o.value;var i=s(t),l=String(this);if(!i.global)return c(i,l);var d=i.unicode;i.lastIndex=0;var u,p=[],v=0;while(null!==(u=c(i,l))){var m=String(u[0]);p[v]=m,""===m&&(i.lastIndex=r(l,n(i.lastIndex),d)),v++}return 0===v?null:p}]}))},8418:function(t,a,e){"use strict";var o=e("c04e"),s=e("9bf2"),n=e("5c6c");t.exports=function(t,a,e){var i=o(a);i in t?s.f(t,i,n(0,e)):t[i]=e}},"99af":function(t,a,e){"use strict";var o=e("23e7"),s=e("d039"),n=e("e8b5"),i=e("861d"),r=e("7b0b"),c=e("50c4"),l=e("8418"),d=e("65f0"),u=e("1dde"),p=e("b622"),v=e("2d00"),m=p("isConcatSpreadable"),h=9007199254740991,f="Maximum allowed index exceeded",b=v>=51||!s((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),g=u("concat"),_=function(t){if(!i(t))return!1;var a=t[m];return void 0!==a?!!a:n(t)},C=!b||!g;o({target:"Array",proto:!0,forced:C},{concat:function(t){var a,e,o,s,n,i=r(this),u=d(i,0),p=0;for(a=-1,o=arguments.length;a<o;a++)if(n=-1===a?i:arguments[a],_(n)){if(s=c(n.length),p+s>h)throw TypeError(f);for(e=0;e<s;e++,p++)e in n&&l(u,p,n[e])}else{if(p>=h)throw TypeError(f);l(u,p++,n)}return u.length=p,u}})},df4f:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"text-right mt-4"},[e("button",{staticClass:"btn btn-primary",attrs:{"data-toggle":"modal"},on:{click:function(a){return t.showModal(!0)}}},[t._v("建立優惠券")])]),e("div",{staticClass:"table-responsive my-4 h-all"},[e("table",{staticClass:"table mt-4"},[t._m(0),e("tbody",t._l(t.filterCoupons(t.searchVal),(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.title))]),e("td",[t._v(t._s(a.percent)+"%")]),e("td",[t._v(t._s(a.due_date))]),e("td",[a.is_enabled?e("span",{staticClass:"text-success"},[t._v("啟用")]):e("span",{staticClass:"text-danger"},[t._v("未啟用")])]),e("td",[e("button",{staticClass:"btn btn-outline-primary btn-sm mr-2",on:{click:function(e){return t.showModal(!1,a)}}},[t._v("編輯")]),e("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(e){return t.delModal(a)}}},[t._v("刪除")])])])})),0)])]),e("Pagination",{attrs:{pagination:t.pagination},on:{changePage:function(a){return t.couponsList(t.page)}}}),e("div",{staticClass:"modal fade",attrs:{id:"couponsModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[e("div",{staticClass:"modal-header bg-primary text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v(t._s(t.modalTitle))])]),t._m(1)]),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group w-100"},[e("label",{attrs:{for:"title"}},[t._v("優惠券名稱")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon.title,expression:"coupon.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入優惠券名稱"},domProps:{value:t.coupon.title},on:{input:function(a){a.target.composing||t.$set(t.coupon,"title",a.target.value)}}})])]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group w-100"},[e("label",{attrs:{for:"code"}},[t._v("優惠碼")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon.code,expression:"coupon.code"}],staticClass:"form-control",attrs:{type:"text",id:"code",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon.code},on:{input:function(a){a.target.composing||t.$set(t.coupon,"code",a.target.value)}}})])]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group w-100"},[e("label",{attrs:{for:"due_date"}},[t._v("到期日")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon.due_date,expression:"coupon.due_date"}],staticClass:"form-control",attrs:{type:"date",id:"due_date"},domProps:{value:t.coupon.due_date},on:{input:function(a){a.target.composing||t.$set(t.coupon,"due_date",a.target.value)}}})])]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group w-100"},[e("label",{attrs:{for:"percent"}},[t._v("折扣比例")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon.percent,expression:"coupon.percent"}],staticClass:"form-control",attrs:{type:"number",id:"percent",placeholder:"請輸入折扣比例"},domProps:{value:t.coupon.percent},on:{input:function(a){a.target.composing||t.$set(t.coupon,"percent",a.target.value)}}})])]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon.is_enabled,expression:"coupon.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":t.enAbled.true,"false-value":t.enAbled.false},domProps:{checked:Array.isArray(t.coupon.is_enabled)?t._i(t.coupon.is_enabled,null)>-1:t._q(t.coupon.is_enabled,t.enAbled.true)},on:{change:function(a){var e=t.coupon.is_enabled,o=a.target,s=o.checked?t.enAbled.true:t.enAbled.false;if(Array.isArray(e)){var n=null,i=t._i(e,n);o.checked?i<0&&t.$set(t.coupon,"is_enabled",e.concat([n])):i>-1&&t.$set(t.coupon,"is_enabled",e.slice(0,i).concat(e.slice(i+1)))}else t.$set(t.coupon,"is_enabled",s)}}}),e("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v(" 是否啟用 ")])])])])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.cerateCoupon}},[t._v("確認")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"delCouponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(2),e("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),e("strong",{staticClass:"text-danger"},[t._v(t._s(t.coupon.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.delCoupon}},[t._v("確認刪除")])])])])])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{width:"120"}},[t._v("折扣券名稱")]),e("th",{attrs:{width:"120"}},[t._v("折後售價")]),e("th",{attrs:{width:"120"}},[t._v("到期日")]),e("th",{attrs:{width:"100"}},[t._v("是否啟用")]),e("th",{attrs:{width:"130"}},[t._v("編輯")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("刪除優惠券")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],n=(e("99af"),e("4de4"),e("466d"),e("ac1f"),e("1157")),i=e.n(n),r=e("1799"),c={props:["search"],components:{Pagination:r["a"]},data:function(){return{coupon:{},pagination:{},coupons:[],enAbled:{true:1,false:0},isLoading:!1,isNew:!1,modalTitle:"建立優惠券",searchVal:""}},watch:{search:function(t){this.searchVal=t}},methods:{showModal:function(t,a){t?(this.coupon={},this.isNew=!0):(this.coupon=Object.assign({},a),this.isNew=!1,this.modalTitle="編輯優惠券"),i()("#couponsModal").modal("show")},couponsList:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("user001","/admin/coupons?page=1");this.isLoading=!0,this.$http.get(a).then((function(a){t.pagination=a.data.pagination,t.coupons=a.data.coupons,a.data.success&&(t.isLoading=!1)}))},cerateCoupon:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("user001","/admin/coupon"),e="post";this.isNew||(a="".concat("https://vue-course-api.hexschool.io/","api/").concat("user001","/admin/coupon/").concat(this.coupon.id),e="put"),this.$http[e](a,{data:this.coupon}).then((function(a){t.isLoading=!0,a.data.success&&(t.isLoading=!1,i()("#couponsModal").modal("hide"),t.couponsList())}))},delModal:function(t){this.coupon=t,i()("#delCouponModal").modal("show")},delCoupon:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("user001","/admin/coupon/").concat(this.coupon.id);this.$http.delete(a).then((function(a){a.data.success?(t.couponsList(),i()("#delCouponModal").modal("hide")):(alert("刪除商品失敗"),t.couponsList(),i()("#delCouponModal").modal("hide"))}))},filterCoupons:function(t){return this.coupons.filter((function(a){return a.title.toLowerCase().match(t)}))}},created:function(){this.couponsList()}},l=c,d=e("2877"),u=Object(d["a"])(l,o,s,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-16593904.08fe35fc.js.map