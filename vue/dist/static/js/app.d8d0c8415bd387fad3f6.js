webpackJsonp([1],{0:function(t,e){},BLEX:function(t,e){},FPkJ:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s={data:function(){return{items:[{id:1,title:"This book",author:"this author"},{id:2,title:"That book",author:"that author"}],id:"books"}},mounted:function(){this.pullItems()},methods:{pullItems:function(){var t=this;this.$http.get("/api/books").then(function(e){t.items=e.body},function(t){console.log(t)})},navigateToMessage:function(t){var e=this;this.$router.push({path:"/books/"+t}).catch(function(t){e.$router.push({path:"/"})})}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shop"},[i("div",{staticClass:"special-offer"}),t._v(" "),i("div",{staticClass:"shop-content"},[i("h2",[t._v("Top sellers")]),t._v(" "),i("ul",t._l(t.items,function(e){return i("li",{key:e.TITLE,staticClass:"preview",on:{click:function(i){return t.navigateToMessage(e.id)}}},[i("div",{staticClass:"preview-title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"preview-author"},[t._v("by "+t._s(e.author))]),t._v(" "),i("p",[t._v("★★★★☆")])])}),0)])])},staticRenderFns:[]};var r=i("VU/8")(s,o,!1,function(t){i("BLEX")},"data-v-573233d6",null).exports,n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar"},[i("div",{staticClass:"category-title-wrapper"},[i("h2",[t._v("Books")])]),t._v(" "),i("ul",[i("li",[t._v("Fiction\n      "),i("ul",{staticClass:"sidebar-list"},[i("li",[i("a",{attrs:{href:""}},[t._v("Crime & Thrillers")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Novels & Stories")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Erotic Novels")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Sci-Fi")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Fantasy")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Horror")])])])]),t._v(" "),i("li",[t._v("Non-Fiction\n      "),i("ul",{staticClass:"sidebar-list"},[i("li",[i("a",{attrs:{href:""}},[t._v("History")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Psychology")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Philosophy")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Cooking")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Economics")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Mathematics")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Business")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Finance")])])])])]),t._v(" "),i("div",{staticClass:"category-title-wrapper"},[i("h2",[t._v("DVDs")])]),t._v(" "),i("ul",[i("li",[t._v("Fiction\n      "),i("ul",{staticClass:"sidebar-list"},[i("li",[i("a",{attrs:{href:""}},[t._v("Crime & Thrillers")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Documentaries")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("TV")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Sci-Fi")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Fantasy")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Horror")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Cartoons")])])])])])])}]};var l=i("VU/8")({data:function(){return{msg:"Welcome to Your Vue.js App"}}},n,!1,function(t){i("yaMp")},"data-v-9d77d970",null).exports,c={data:function(){return{bookName:"placeholder name",bookAuthor:"placeholder name",bookPrice:"$14.95",bookStock:"3",bookId:this.$route.params.id,details:""}},mounted:function(){this.pullDetails()},methods:{pullDetails:function(){var t=this;this.$http.get("/api/books/"+this.bookId).then(function(e){t.bookName=e.body.title,t.bookAuthor=e.body.author},function(t){console.log(t)})}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail"},[i("div",{staticClass:"detail-wrapper"},[i("div",{staticClass:"detail-content"},[i("div",{staticClass:"detail-text-content"},[i("h2",[t._v(t._s(t.bookName))]),t._v(" "),i("p",[t._v("by "+t._s(t.bookAuthor))]),t._v(" "),i("p",[t._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          ")]),t._v(" "),i("p",[t._v("Price: "+t._s(t.bookPrice))]),t._v(" "),i("p",[t._v("Left in stock: "+t._s(t.bookStock))])]),t._v(" "),i("div",{staticClass:"detail-image-container"},[i("img",{attrs:{src:"/static/generic-book.jpg"}}),t._v(" "),i("div",{staticClass:"centered"},[i("p",{staticClass:"title"},[t._v(t._s(t.bookName))]),t._v(" "),i("p",[t._v(t._s(t.bookAuthor))])])])]),t._v(" "),i("button",{staticClass:"call-to-action"},[t._v("Add to cart")])])])},staticRenderFns:[]};var u=i("VU/8")(c,v,!1,function(t){i("htYT")},"data-v-223d6eaf",null).exports,d={name:"App",data:function(){return{loggedIn:!1,username:""}},methods:{show:function(){this.$modal.show("hello-world")},signIn:function(){this.loggedIn=!0,this.$modal.hide("hello-world")}},components:{"component-sidebar":l,"component-Shop":r,"component-detail":u}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"topbar"},[t._m(1),t._v(" "),i("input",{attrs:{type:"text",name:"fname"}}),t._v(" "),i("button",{attrs:{id:"button-search"}},[t._v("Search")]),t._v(" "),t.loggedIn?i("div",{attrs:{id:"login-message"}},[t._v("Welcome back, "+t._s(t.username))]):t._e(),t._v(" "),i("p",{attrs:{id:"clock"}},[t._v("3:43pm 23/06/2002")]),t._v(" "),i("div",{staticClass:"account"},[i("button",{attrs:{id:"login"},on:{click:function(e){return t.show()}}},[t._v("Log in")]),t._v(" "),i("button",{staticClass:"call-to-action",attrs:{id:"signup"}},[t._v("Sign up")])])]),t._v(" "),i("hr"),t._v(" "),i("modal",{attrs:{name:"hello-world"}},[i("div",{staticClass:"box"},[i("div",{staticClass:"box-part",attrs:{id:"bp-left"}},[i("div",{staticClass:"partition",attrs:{id:"partition-register"}},[i("div",{staticClass:"partition-title"},[t._v("CREATE ACCOUNT")]),t._v(" "),i("div",{staticClass:"partition-form"},[i("form",{attrs:{autocomplete:"false"}},[i("div",{staticClass:"autocomplete-fix"},[i("input",{attrs:{disabled:"",type:"password"}})]),t._v(" "),i("input",{attrs:{id:"n-email",type:"text",placeholder:"Email"}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{id:"n-username",type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),i("input",{attrs:{id:"n-password2",type:"password",placeholder:"Password"}})]),t._v(" "),i("div",{staticStyle:{"margin-top":"42px"}}),t._v(" "),i("div",{staticClass:"button-set"},[i("button",{attrs:{id:"goto-signin-btn"},on:{click:t.signIn}},[t._v("Sign In")]),t._v(" "),i("button",{attrs:{id:"register-btn"}},[t._v("Register")])])])])]),t._v(" "),i("div",{staticClass:"box-part",attrs:{id:"bp-right"}},[i("div",{staticClass:"box-messages"})])])]),t._v(" "),i("div",{staticClass:"main-container"},[i("router-view",{attrs:{name:"componentShop"}}),t._v(" "),i("router-view",{attrs:{name:"componentDetail"}}),t._v(" "),i("router-view",{attrs:{name:"componentSidebar"}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"top-special-offer"}},[e("h3",[this._v("SPECIAL OFFER: 20% OFF BOOKS WITH "),e("i",[this._v("WORDS")]),this._v(" IN THEM!!! LIMITED TIME ONLY!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"/"}},[e("img",{attrs:{src:"static/logo-horizontal.png"}})])}]};var p=i("VU/8")(d,_,!1,function(t){i("FPkJ")},null,null).exports,h=i("/ocq"),m=i("8+8L");a.a.use(h.a),a.a.use(m.a);var f=new h.a({routes:[{path:"/",components:{componentSidebar:l,componentShop:r}},{path:"/books/:id",components:{componentSidebar:l,componentDetail:u}}],mode:"history"}),b=i("rifk"),g=i.n(b);a.a.config.productionTip=!1,a.a.use(g.a),new a.a({el:"#app",router:f,components:{App:p},template:"<App/>",render:function(t){return t(p)}})},htYT:function(t,e){},yaMp:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d8d0c8415bd387fad3f6.js.map