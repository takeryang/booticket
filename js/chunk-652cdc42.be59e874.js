(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-652cdc42"],{"0418":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header"},[s("div",{staticClass:"secheader bg-primary"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row align-items-center py-1"},[t._m(0),s("div",{staticClass:"col-md-6 text-right userlink d-flex justify-content-around justify-content-md-end"},[null===t.userEmail?s("router-link",{staticClass:"text-light p-2",attrs:{to:"/customer_login"}},[s("i",{staticClass:"fas fa-user mr-1"}),t._v("會員登入 ")]):s("div",{staticClass:"d-flex align-items-center"},[s("a",{staticClass:"m-0 text-light mr-2 dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown","data-reference":"parent"}},[t._v("您好 "+t._s(t.userEmail))]),s("div",{staticClass:"dropdown-menu"},[s("router-link",{staticClass:"dropdown-item",attrs:{to:"history_order"}},[t._v("查詢訂單")]),s("a",{staticClass:"dropdown-item",attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.signOut(a)}}},[t._v("會員登出")])],1)]),s("router-link",{staticClass:"text-light p-2 mr-3",attrs:{to:"/admin_login"}},[s("i",{staticClass:"fas fa-user-cog mr-1"}),t._v("管理員登入 ")])],1)])])]),s("div",{staticClass:"mainheader container"},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[s("h1",{staticClass:"m-0"},[s("router-link",{staticClass:"navbar-brand title mr-4",attrs:{to:"/"}},[s("i",{staticClass:"fab fa-bootstrap text-primary mr-2"}),t._v("boo售票網 ")])],1),s("div",{staticClass:"d-lg-none ml-auto mr-3 cart-lg"},[s("a",{staticClass:"align-middle",attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.loginCheck(a)}}},[s("i",{staticClass:"fas fa-shopping-cart"})])]),t._m(1),s("div",{staticClass:"collapse navbar-collapse ",attrs:{id:"navbarNav"}},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{"active-class":"active","focus-class":"focus",to:"/product_music"}},[s("i",{staticClass:"fas fa-music"}),t._v("音樂")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{"active-class":"active","focus-class":"focus",to:"/product_drama"}},[s("i",{staticClass:"fas fa-theater-masks"}),t._v("戲劇")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{"active-class":"active","focus-class":"focus",to:"/product_sport"}},[s("i",{staticClass:"fas fa-basketball-ball"}),t._v("運動")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{"active-class":"active","focus-class":"focus",to:"/product_expo"}},[s("i",{staticClass:"fas fa-palette"}),t._v("展覽")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{"active-class":"active","focus-class":"focus",to:"/product_concert"}},[s("i",{staticClass:"fas fa-microphone-alt"}),t._v("演唱會")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{"active-class":"active","focus-class":"focus",to:"/product_movie"}},[s("i",{staticClass:"fas fa-video"}),t._v("電影")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{"active-class":"active","focus-class":"focus",to:"/product_family"}},[s("i",{staticClass:"fas fa-child"}),t._v("親子")])],1)])]),s("div",{staticClass:"cart"},[s("router-link",{attrs:{to:"/customer_order"}},[s("i",{staticClass:"fas fa-shopping-cart mr-1"}),t._v("購物車("+t._s(t.cartsLen)+") ")])],1)])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-6 social-media"},[s("a",{staticClass:"text-light p-3",attrs:{href:""}},[s("i",{staticClass:"fab fa-instagram"})]),s("a",{staticClass:"text-light p-3",attrs:{href:""}},[s("i",{staticClass:"fab fa-facebook-square"})]),s("a",{staticClass:"text-light p-3",attrs:{href:""}},[s("i",{staticClass:"fab fa-line"})]),s("a",{staticClass:"text-light p-3",attrs:{href:"https://github.com/takeryang/booticket-SC"}},[s("i",{staticClass:"fab fa-github"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],r=(s("a9e3"),s("1276"),s("ac1f"),s("260b")),n=(s("1157"),{props:{cartsLen:Number},data:function(){return{userEmail:null,status:{online:!1},a:""}},methods:{signOut:function(){var t=this;r["a"].auth().signOut().then((function(){"/"!==t.$route.path?t.$router.push("/"):window.location.reload()})).catch((function(t){}))},userOnline:function(){r["a"].auth().onAuthStateChanged((function(t){if(null!==t){t.email;console.log(t)}else console.log("NO")}))},loginCheck:function(){null!==this.userEmail?this.$router.push("/customer_order"):(alert("請先登入會員"),this.$router.push("/customer_login"))},currentUser:function(){var t=this;r["a"].auth().onAuthStateChanged((function(a){a&&(t.userEmail=a.email.split("@")[0])}))}},created:function(){this.currentUser()}}),c=n,l=s("2877"),o=Object(l["a"])(c,i,e,!1,null,null,null);a["a"]=o.exports},1276:function(t,a,s){"use strict";var i=s("d784"),e=s("44e7"),r=s("825a"),n=s("1d80"),c=s("4840"),l=s("8aa5"),o=s("50c4"),u=s("14c3"),d=s("9263"),f=s("9f7f"),v=f.UNSUPPORTED_Y,h=[].push,p=Math.min,g=4294967295;i("split",2,(function(t,a,s){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,s){var i=String(n(this)),r=void 0===s?g:s>>>0;if(0===r)return[];if(void 0===t)return[i];if(!e(t))return a.call(i,t,r);var c,l,o,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,p=new RegExp(t.source,f+"g");while(c=d.call(p,i)){if(l=p.lastIndex,l>v&&(u.push(i.slice(v,c.index)),c.length>1&&c.index<i.length&&h.apply(u,c.slice(1)),o=c[0].length,v=l,u.length>=r))break;p.lastIndex===c.index&&p.lastIndex++}return v===i.length?!o&&p.test("")||u.push(""):u.push(i.slice(v)),u.length>r?u.slice(0,r):u}:"0".split(void 0,0).length?function(t,s){return void 0===t&&0===s?[]:a.call(this,t,s)}:a,[function(a,s){var e=n(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,e,s):i.call(String(e),a,s)},function(t,e){var n=s(i,t,this,e,i!==a);if(n.done)return n.value;var d=r(t),f=String(this),h=c(d,RegExp),m=d.unicode,C=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"g":"y"),b=new h(v?"^(?:"+d.source+")":d,C),_=void 0===e?g:e>>>0;if(0===_)return[];if(0===f.length)return null===u(b,f)?[f]:[];var x=0,k=0,w=[];while(k<f.length){b.lastIndex=v?0:k;var y,E=u(b,v?f.slice(k):f);if(null===E||(y=p(o(b.lastIndex+(v?k:0)),f.length))===x)k=l(f,k,m);else{if(w.push(f.slice(x,k)),w.length===_)return w;for(var $=1;$<=E.length-1;$++)if(w.push(E[$]),w.length===_)return w;k=x=y}}return w.push(f.slice(x)),w}]}),v)},"44e7":function(t,a,s){var i=s("861d"),e=s("c6b6"),r=s("b622"),n=r("match");t.exports=function(t){var a;return i(t)&&(void 0!==(a=t[n])?!!a:"RegExp"==e(t))}},8418:function(t,a,s){"use strict";var i=s("c04e"),e=s("9bf2"),r=s("5c6c");t.exports=function(t,a,s){var n=i(a);n in t?e.f(t,n,r(0,s)):t[n]=s}},"99af":function(t,a,s){"use strict";var i=s("23e7"),e=s("d039"),r=s("e8b5"),n=s("861d"),c=s("7b0b"),l=s("50c4"),o=s("8418"),u=s("65f0"),d=s("1dde"),f=s("b622"),v=s("2d00"),h=f("isConcatSpreadable"),p=9007199254740991,g="Maximum allowed index exceeded",m=v>=51||!e((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),C=d("concat"),b=function(t){if(!n(t))return!1;var a=t[h];return void 0!==a?!!a:r(t)},_=!m||!C;i({target:"Array",proto:!0,forced:_},{concat:function(t){var a,s,i,e,r,n=c(this),d=u(n,0),f=0;for(a=-1,i=arguments.length;a<i;a++)if(r=-1===a?n:arguments[a],b(r)){if(e=l(r.length),f+e>p)throw TypeError(g);for(s=0;s<e;s++,f++)s in r&&o(d,f,r[s])}else{if(f>=p)throw TypeError(g);o(d,f++,r)}return d.length=f,d}})},fb89:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"product-category"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("Header",{attrs:{"carts-len":t.cartsLen}}),0!==t.filterConcert.length?s("div",t._l(t.filterConcert,(function(a,i){return s("div",{staticClass:"container-fluid product",class:{"bg-secondary":i%2===0,"item-right":i%2!==0},attrs:{"data-aos":"flip-up"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-10 d-flex flex-column flex-md-row",class:{"ml-auto":i%2!==0}},[s("div",{staticClass:"product-information order-1 order-md-0"},[s("a",{attrs:{href:""},on:{click:function(s){return s.preventDefault(),t.getProductDetail(a.id)}}},[s("h2",[t._v(t._s(a.title))])]),s("p",{staticClass:"line-clamp"},[t._v(t._s(a.description))])]),s("div",{staticClass:"product-img order-0 order-md-1"},[s("a",{attrs:{href:""},on:{click:function(s){return s.preventDefault(),t.getProductDetail(a.id)}}},[s("img",{staticClass:"img-fluid",attrs:{src:a.imageUrl,alt:""}})])]),t._m(0,!0)])])])])})),0):s("div",{staticClass:"container text-center no-show"},[s("i",{staticClass:"far fa-frown"}),s("h1",[t._v("暫無相關展覽")])]),s("Footer"),s("router-view")],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"show-date d-none d-md-flex align-items-end order-2"},[s("p",{staticClass:"m-0"},[t._v("01"),s("br"),t._v("JUN"),s("br"),t._v("|"),s("br"),t._v("31"),s("br"),t._v("OCT")])])}],r=(s("99af"),s("4de4"),s("0418")),n=s("fd2d"),c={components:{Header:r["a"],Footer:n["a"]},data:function(){return{products:[],product:[],isLoading:!1,carts:{},cartsLen:0}},methods:{getProducts:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("user001","/products/all");this.isLoading=!0,this.$http.get(a).then((function(a){t.products=a.data.products,t.isLoading=!1}))},getProduct:function(t){var a=this,s="".concat("https://vue-course-api.hexschool.io/","api/").concat("user001","/product/").concat(t);this.isLoading=!0,this.$http.get(s).then((function(t){a.product=t.data.product,a.isLoading=!1,$("#productModal").modal("show")}))},getProductDetail:function(t){var a=this,s="".concat("https://vue-course-api.hexschool.io/","api/").concat("user001","/product/").concat(t);this.isLoading=!0,this.$http.get(s).then((function(t){t.data.success&&a.$router.push({path:"/product",query:{id:"".concat(t.data.product.id)}}),a.isLoading=!1}))},getCart:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("user001","/cart");this.isLoading=!0,this.$http.get(a).then((function(a){t.carts=a.data.data,t.cartsLen=a.data.data.carts.length,t.isLoading=!1}))}},computed:{filterConcert:function(){return this.products.filter((function(t){return"演唱會"===t.category&&1===t.is_enabled}))}},created:function(){this.getProducts(),this.getCart()}},l=c,o=s("2877"),u=Object(o["a"])(l,i,e,!1,null,null,null);a["default"]=u.exports},fd2d:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"footer"},[s("div",{staticClass:"subscribe-banner"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-5"},[s("div",{staticClass:"subscribe"},[s("p",[t._v("想收到展覽的最新消息嗎？"),s("br"),t._v("快訂閱我們！")]),s("div",{staticClass:"input-group mb-3"},[s("input",{staticClass:"form-control",attrs:{type:"gmail",placeholder:"輸入您的電子信箱","aria-label":"Recipient's username","aria-describedby":"button-addon2"}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button",id:"button-addon2"}},[t._v("訂閱")])])])])])])])]),s("div",{staticClass:"bg-primary information"},[s("div",{staticClass:"container d-flex align-items-center justify-content-center"},[s("h1",{staticClass:"mr-3"},[t._v("boo 售票網")]),s("p",{staticClass:"m-0"},[t._v("© 2021 作品練習 無商業用途")]),s("a",{staticClass:"ml-auto mr-3",attrs:{href:""}},[t._v("隱私權政策")]),s("a",{attrs:{href:""}},[t._v("服務條款")])])])])}],r=s("2877"),n={},c=Object(r["a"])(n,i,e,!1,null,null,null);a["a"]=c.exports}}]);
//# sourceMappingURL=chunk-652cdc42.be59e874.js.map