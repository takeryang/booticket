(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34c6d2fa"],{"0418":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header"},[s("div",{staticClass:"secheader bg-primary"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row align-items-center py-1"},[t._m(0),s("div",{staticClass:"col-md-6 text-right userlink d-flex justify-content-around justify-content-md-end"},[null===t.userEmail?s("router-link",{staticClass:"text-light p-2",attrs:{to:"/customer_login"}},[s("i",{staticClass:"fas fa-user mr-1"}),t._v("會員登入 ")]):s("div",{staticClass:"d-flex align-items-center"},[s("a",{staticClass:"m-0 text-light mr-2 dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown","data-reference":"parent"}},[t._v("您好 "+t._s(t.userEmail))]),s("div",{staticClass:"dropdown-menu"},[s("router-link",{staticClass:"dropdown-item",attrs:{to:"history_order"}},[t._v("查詢訂單")]),s("a",{staticClass:"dropdown-item",attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.signOut(a)}}},[t._v("會員登出")])],1)]),s("router-link",{staticClass:"text-light p-2 mr-3",attrs:{to:"/admin_login"}},[s("i",{staticClass:"fas fa-user-cog mr-1"}),t._v("管理員登入 ")])],1)])])]),s("div",{staticClass:"mainheader container"},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[s("h1",{staticClass:"m-0"},[s("router-link",{staticClass:"navbar-brand title mr-4",attrs:{to:"/"}},[s("i",{staticClass:"fab fa-bootstrap text-primary mr-2"}),t._v("boo售票網 ")])],1),s("div",{staticClass:"d-lg-none ml-auto mr-3 cart-lg"},[s("a",{staticClass:"align-middle",attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.loginCheck(a)}}},[s("i",{staticClass:"fas fa-shopping-cart"})])]),t._m(1),s("div",{staticClass:"collapse navbar-collapse ",attrs:{id:"navbarNav"}},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{"active-class":"active","focus-class":"focus",to:"/product_music"}},[s("i",{staticClass:"fas fa-music"}),t._v("音樂")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{"active-class":"active","focus-class":"focus",to:"/product_drama"}},[s("i",{staticClass:"fas fa-theater-masks"}),t._v("戲劇")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{"active-class":"active","focus-class":"focus",to:"/product_sport"}},[s("i",{staticClass:"fas fa-basketball-ball"}),t._v("運動")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{"active-class":"active","focus-class":"focus",to:"/product_expo"}},[s("i",{staticClass:"fas fa-palette"}),t._v("展覽")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{"active-class":"active","focus-class":"focus",to:"/product_concert"}},[s("i",{staticClass:"fas fa-microphone-alt"}),t._v("演唱會")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{"active-class":"active","focus-class":"focus",to:"/product_movie"}},[s("i",{staticClass:"fas fa-video"}),t._v("電影")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{"active-class":"active","focus-class":"focus",to:"/product_family"}},[s("i",{staticClass:"fas fa-child"}),t._v("親子")])],1)])]),s("div",{staticClass:"cart"},[s("router-link",{attrs:{to:"/customer_order"}},[s("i",{staticClass:"fas fa-shopping-cart mr-1"}),t._v("購物車("+t._s(t.cartsLen)+") ")])],1)])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-6 social-media"},[s("a",{staticClass:"text-light p-3",attrs:{href:""}},[s("i",{staticClass:"fab fa-instagram"})]),s("a",{staticClass:"text-light p-3",attrs:{href:""}},[s("i",{staticClass:"fab fa-facebook-square"})]),s("a",{staticClass:"text-light p-3",attrs:{href:""}},[s("i",{staticClass:"fab fa-line"})]),s("a",{staticClass:"text-light p-3",attrs:{href:"https://github.com/takeryang/booticket-SC"}},[s("i",{staticClass:"fab fa-github"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],n=(s("a9e3"),s("1276"),s("ac1f"),s("260b")),c=(s("1157"),{props:{cartsLen:Number},data:function(){return{userEmail:null,status:{online:!1},a:""}},methods:{signOut:function(){var t=this;n["a"].auth().signOut().then((function(){"/"!==t.$route.path?t.$router.push("/"):window.location.reload()})).catch((function(t){}))},userOnline:function(){n["a"].auth().onAuthStateChanged((function(t){if(null!==t){t.email;console.log(t)}else console.log("NO")}))},loginCheck:function(){null!==this.userEmail?this.$router.push("/customer_order"):(alert("請先登入會員"),this.$router.push("/customer_login"))},currentUser:function(){var t=this;n["a"].auth().onAuthStateChanged((function(a){a&&(t.userEmail=a.email.split("@")[0])}))}},created:function(){this.currentUser()}}),r=c,l=s("2877"),o=Object(l["a"])(r,i,e,!1,null,null,null);a["a"]=o.exports},1276:function(t,a,s){"use strict";var i=s("d784"),e=s("44e7"),n=s("825a"),c=s("1d80"),r=s("4840"),l=s("8aa5"),o=s("50c4"),u=s("14c3"),d=s("9263"),f=s("9f7f"),v=f.UNSUPPORTED_Y,p=[].push,h=Math.min,m=4294967295;i("split",2,(function(t,a,s){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,s){var i=String(c(this)),n=void 0===s?m:s>>>0;if(0===n)return[];if(void 0===t)return[i];if(!e(t))return a.call(i,t,n);var r,l,o,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,h=new RegExp(t.source,f+"g");while(r=d.call(h,i)){if(l=h.lastIndex,l>v&&(u.push(i.slice(v,r.index)),r.length>1&&r.index<i.length&&p.apply(u,r.slice(1)),o=r[0].length,v=l,u.length>=n))break;h.lastIndex===r.index&&h.lastIndex++}return v===i.length?!o&&h.test("")||u.push(""):u.push(i.slice(v)),u.length>n?u.slice(0,n):u}:"0".split(void 0,0).length?function(t,s){return void 0===t&&0===s?[]:a.call(this,t,s)}:a,[function(a,s){var e=c(this),n=void 0==a?void 0:a[t];return void 0!==n?n.call(a,e,s):i.call(String(e),a,s)},function(t,e){var c=s(i,t,this,e,i!==a);if(c.done)return c.value;var d=n(t),f=String(this),p=r(d,RegExp),C=d.unicode,g=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"g":"y"),b=new p(v?"^(?:"+d.source+")":d,g),_=void 0===e?m:e>>>0;if(0===_)return[];if(0===f.length)return null===u(b,f)?[f]:[];var x=0,k=0,y=[];while(k<f.length){b.lastIndex=v?0:k;var w,E=u(b,v?f.slice(k):f);if(null===E||(w=h(o(b.lastIndex+(v?k:0)),f.length))===x)k=l(f,k,C);else{if(y.push(f.slice(x,k)),y.length===_)return y;for(var $=1;$<=E.length-1;$++)if(y.push(E[$]),y.length===_)return y;k=x=w}}return y.push(f.slice(x)),y}]}),v)},"44e7":function(t,a,s){var i=s("861d"),e=s("c6b6"),n=s("b622"),c=n("match");t.exports=function(t){var a;return i(t)&&(void 0!==(a=t[c])?!!a:"RegExp"==e(t))}},8418:function(t,a,s){"use strict";var i=s("c04e"),e=s("9bf2"),n=s("5c6c");t.exports=function(t,a,s){var c=i(a);c in t?e.f(t,c,n(0,s)):t[c]=s}},"99af":function(t,a,s){"use strict";var i=s("23e7"),e=s("d039"),n=s("e8b5"),c=s("861d"),r=s("7b0b"),l=s("50c4"),o=s("8418"),u=s("65f0"),d=s("1dde"),f=s("b622"),v=s("2d00"),p=f("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",C=v>=51||!e((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=d("concat"),b=function(t){if(!c(t))return!1;var a=t[p];return void 0!==a?!!a:n(t)},_=!C||!g;i({target:"Array",proto:!0,forced:_},{concat:function(t){var a,s,i,e,n,c=r(this),d=u(c,0),f=0;for(a=-1,i=arguments.length;a<i;a++)if(n=-1===a?c:arguments[a],b(n)){if(e=l(n.length),f+e>h)throw TypeError(m);for(s=0;s<e;s++,f++)s in n&&o(d,f,n[s])}else{if(f>=h)throw TypeError(m);o(d,f++,n)}return d.length=f,d}})},d9cc:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"product-item"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("Header",{attrs:{"carts-len":t.cartsLen}}),s("div",{staticClass:"container product"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"product-img mb-2"},[s("img",{staticClass:"img-fluid",attrs:{src:t.product.imageUrl,alt:""}})]),s("h2",[t._v(t._s(t.product.title))]),s("p",[t._v(t._s(t.product.description))])]),s("div",{staticClass:"col-md-6 d-flex"},[s("div",{staticClass:"ticket-l d-flex flex-column w-50"},[s("div",{staticClass:"count text-center d-flex flex-column justify-content-center align-items-center"},[s("div",{staticClass:"ticket-count d-flex mb-6"},[s("button",{on:{click:t.minusTicket}},[s("i",{staticClass:"fas fa-minus-circle"})]),s("p",{staticClass:"mx-5"},[t._v(t._s(t.ticketCount))]),s("button",{on:{click:function(a){t.ticketCount++}}},[s("i",{staticClass:"fas fa-plus-circle"})])]),t._m(0)]),s("div",{staticClass:"buy-button text-center"},[s("button",{staticClass:"btn btn-outline-primary",on:{click:t.scroll}},[t._v("節目資訊")])])]),s("div",{staticClass:"ticket-r d-flex flex-column w-50"},[s("div",{staticClass:"price text-center d-flex flex-column justify-content-center"},[s("div",{staticClass:"mb-6"},[s("p",[t._v("NT$"+t._s(t.product.price))])]),t._m(1)]),s("div",{staticClass:"buy-button text-center"},[s("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.addtoCart(t.product.id,t.product.num)}}},[t.status.loadingItem===t.product.id?s("i",{staticClass:"fas fa-spinner fa-spin mr-2"}):t._e(),t._v("購賣票券")])])])])])]),s("div",{staticClass:"container show-detail",attrs:{id:"detail"}},[t._m(2),s("div",{staticClass:"product-img mb-4"},[s("img",{staticClass:"img-fluid",attrs:{src:t.product.imageUrl,alt:""}})]),s("div",{staticClass:"border mb-4"}),s("p",{staticClass:"show-text pre-line"},[t._v(" "+t._s(t.product.content)+" ")]),s("div",{staticClass:"border mb-10"})]),s("Footer")],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("p",{staticClass:"small-text"},[t._v("張")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("p",{staticClass:"small-text"},[t._v("票價")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"banner py-2 pl-4 rounded mb-4"},[s("p",{staticClass:"m-0"},[t._v("節目資訊")])])}],n=(s("99af"),s("0418")),c=s("fd2d"),r={components:{Header:n["a"],Footer:c["a"]},data:function(){return{ticketCount:1,product:[],isLoading:!1,carts:{},status:{loadingItem:""},productID:"",cartsLen:0}},methods:{minusTicket:function(){this.ticketCount>1&&this.ticketCount--},scroll:function(){this.$el.querySelector("#detail").scrollIntoView({behavior:"smooth"})},getProductDetail:function(t){var a=this,s="".concat("https://vue-course-api.hexschool.io/","api/").concat("user001","/product/").concat(t);this.isLoading=!0,this.$http.get(s).then((function(t){a.product=t.data.product,a.isLoading=!1}))},addtoCart:function(t,a){var s=this,i="".concat("https://vue-course-api.hexschool.io/","api/").concat("user001","/cart");this.status.loadingItem=t;var e={product_id:t,qty:this.ticketCount};this.$http.post(i,{data:e}).then((function(t){s.status.loadingItem="",s.ticketCount=1,s.getCart()}))},getCart:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("user001","/cart");this.isLoading=!0,this.$http.get(a).then((function(a){t.carts=a.data.data,t.cartsLen=a.data.data.carts.length,t.isLoading=!1}))}},created:function(){this.getCart(),this.productID=this.$route.query.id,this.getProductDetail(this.productID)}},l=r,o=s("2877"),u=Object(o["a"])(l,i,e,!1,null,null,null);a["default"]=u.exports},fd2d:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"footer"},[s("div",{staticClass:"subscribe-banner"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-5"},[s("div",{staticClass:"subscribe"},[s("p",[t._v("想收到展覽的最新消息嗎？"),s("br"),t._v("快訂閱我們！")]),s("div",{staticClass:"input-group mb-3"},[s("input",{staticClass:"form-control",attrs:{type:"gmail",placeholder:"輸入您的電子信箱","aria-label":"Recipient's username","aria-describedby":"button-addon2"}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button",id:"button-addon2"}},[t._v("訂閱")])])])])])])])]),s("div",{staticClass:"bg-primary information"},[s("div",{staticClass:"container d-flex align-items-center justify-content-center"},[s("h1",{staticClass:"mr-3"},[t._v("boo 售票網")]),s("p",{staticClass:"m-0"},[t._v("© 2021 作品練習 無商業用途")]),s("a",{staticClass:"ml-auto mr-3",attrs:{href:""}},[t._v("隱私權政策")]),s("a",{attrs:{href:""}},[t._v("服務條款")])])])])}],n=s("2877"),c={},r=Object(n["a"])(c,i,e,!1,null,null,null);a["a"]=r.exports}}]);
//# sourceMappingURL=chunk-34c6d2fa.326f861c.js.map