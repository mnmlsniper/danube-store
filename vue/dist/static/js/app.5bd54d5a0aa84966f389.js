webpackJsonp([1],{0:function(t,e){},"1O9p":function(t,e){},"2lH8":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.jsonSchema=e.fromString=e.empty=e.isUuid=e.regex=e.uuid=void 0;const a=i("D6fo");e.uuid=function(){return a.v4()};const n={v4:/(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u,v5:/(?:^[a-f0-9]{8}-[a-f0-9]{4}-5[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u};e.regex=n;const o={v4:{type:"string",pattern:n.v4.toString().slice(1,-2)},v5:{type:"string",pattern:n.v5.toString().slice(1,-2)}};e.jsonSchema=o;e.isUuid=function(t){return n.v4.test(t)||n.v5.test(t)};e.empty=function(){return"00000000-0000-0000-0000-000000000000"};e.fromString=function(t,e="bb5d0ffa-9a4c-4d7c-8fc2-0a7d2220ba45"){return a.v5(t,e)}},"C/xY":function(t,e){},D6fo:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),n=new Uint8Array(16);function o(){if(!a)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(n)}for(var r=[],s=0;s<256;++s)r.push((s+256).toString(16).substr(1));var l,c,u=function(t,e){var i=e||0;return(r[t[i+0]]+r[t[i+1]]+r[t[i+2]]+r[t[i+3]]+"-"+r[t[i+4]]+r[t[i+5]]+"-"+r[t[i+6]]+r[t[i+7]]+"-"+r[t[i+8]]+r[t[i+9]]+"-"+r[t[i+10]]+r[t[i+11]]+r[t[i+12]]+r[t[i+13]]+r[t[i+14]]+r[t[i+15]]).toLowerCase()},p=0,d=0;var v=function(t,e,i){var a=e&&i||0,n=e||new Array(16),r=(t=t||{}).node||l,s=void 0!==t.clockseq?t.clockseq:c;if(null==r||null==s){var v=t.random||(t.rng||o)();null==r&&(r=l=[1|v[0],v[1],v[2],v[3],v[4],v[5]]),null==s&&(s=c=16383&(v[6]<<8|v[7]))}var m=void 0!==t.msecs?t.msecs:Date.now(),g=void 0!==t.nsecs?t.nsecs:d+1,h=m-p+(g-d)/1e4;if(h<0&&void 0===t.clockseq&&(s=s+1&16383),(h<0||m>p)&&void 0===t.nsecs&&(g=0),g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");p=m,d=g,c=s;var f=(1e4*(268435455&(m+=122192928e5))+g)%4294967296;n[a++]=f>>>24&255,n[a++]=f>>>16&255,n[a++]=f>>>8&255,n[a++]=255&f;var _=m/4294967296*1e4&268435455;n[a++]=_>>>8&255,n[a++]=255&_,n[a++]=_>>>24&15|16,n[a++]=_>>>16&255,n[a++]=s>>>8|128,n[a++]=255&s;for(var b=0;b<6;++b)n[a+b]=r[b];return e||u(n)};var m=function(t,e,i){function a(t,a,n,o){if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));for(var e=[],i=0;i<t.length;++i)e.push(t.charCodeAt(i));return e}(t)),"string"==typeof a&&(a=function(t){var e=[];return t.replace(/[a-fA-F0-9]{2}/g,function(t){e.push(parseInt(t,16))}),e}(a)),!Array.isArray(t))throw TypeError("value must be an array of bytes");if(!Array.isArray(a)||16!==a.length)throw TypeError("namespace must be uuid string or an Array of 16 byte values");var r=i(a.concat(t));if(r[6]=15&r[6]|e,r[8]=63&r[8]|128,n){o=o||0;for(var s=0;s<16;++s)n[o+s]=r[s];return n}return u(r)}try{a.name=t}catch(t){}return a.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",a.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",a};function g(t){return 14+(t+64>>>9<<4)+1}function h(t,e){var i=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(i>>16)<<16|65535&i}function f(t,e,i,a,n,o){return h((r=h(h(e,t),h(a,o)))<<(s=n)|r>>>32-s,i);var r,s}function _(t,e,i,a,n,o,r){return f(e&i|~e&a,t,e,n,o,r)}function b(t,e,i,a,n,o,r){return f(e&a|i&~a,t,e,n,o,r)}function y(t,e,i,a,n,o,r){return f(e^i^a,t,e,n,o,r)}function C(t,e,i,a,n,o,r){return f(i^(e|~a),t,e,n,o,r)}var k=m("v3",48,function(t){if("string"==typeof t){var e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(var i=0;i<e.length;++i)t[i]=e.charCodeAt(i)}return function(t){for(var e=[],i=32*t.length,a=0;a<i;a+=8){var n=t[a>>5]>>>a%32&255,o=parseInt("0123456789abcdef".charAt(n>>>4&15)+"0123456789abcdef".charAt(15&n),16);e.push(o)}return e}(function(t,e){t[e>>5]|=128<<e%32,t[g(e)-1]=e;for(var i=1732584193,a=-271733879,n=-1732584194,o=271733878,r=0;r<t.length;r+=16){var s=i,l=a,c=n,u=o;i=_(i,a,n,o,t[r],7,-680876936),o=_(o,i,a,n,t[r+1],12,-389564586),n=_(n,o,i,a,t[r+2],17,606105819),a=_(a,n,o,i,t[r+3],22,-1044525330),i=_(i,a,n,o,t[r+4],7,-176418897),o=_(o,i,a,n,t[r+5],12,1200080426),n=_(n,o,i,a,t[r+6],17,-1473231341),a=_(a,n,o,i,t[r+7],22,-45705983),i=_(i,a,n,o,t[r+8],7,1770035416),o=_(o,i,a,n,t[r+9],12,-1958414417),n=_(n,o,i,a,t[r+10],17,-42063),a=_(a,n,o,i,t[r+11],22,-1990404162),i=_(i,a,n,o,t[r+12],7,1804603682),o=_(o,i,a,n,t[r+13],12,-40341101),n=_(n,o,i,a,t[r+14],17,-1502002290),a=_(a,n,o,i,t[r+15],22,1236535329),i=b(i,a,n,o,t[r+1],5,-165796510),o=b(o,i,a,n,t[r+6],9,-1069501632),n=b(n,o,i,a,t[r+11],14,643717713),a=b(a,n,o,i,t[r],20,-373897302),i=b(i,a,n,o,t[r+5],5,-701558691),o=b(o,i,a,n,t[r+10],9,38016083),n=b(n,o,i,a,t[r+15],14,-660478335),a=b(a,n,o,i,t[r+4],20,-405537848),i=b(i,a,n,o,t[r+9],5,568446438),o=b(o,i,a,n,t[r+14],9,-1019803690),n=b(n,o,i,a,t[r+3],14,-187363961),a=b(a,n,o,i,t[r+8],20,1163531501),i=b(i,a,n,o,t[r+13],5,-1444681467),o=b(o,i,a,n,t[r+2],9,-51403784),n=b(n,o,i,a,t[r+7],14,1735328473),a=b(a,n,o,i,t[r+12],20,-1926607734),i=y(i,a,n,o,t[r+5],4,-378558),o=y(o,i,a,n,t[r+8],11,-2022574463),n=y(n,o,i,a,t[r+11],16,1839030562),a=y(a,n,o,i,t[r+14],23,-35309556),i=y(i,a,n,o,t[r+1],4,-1530992060),o=y(o,i,a,n,t[r+4],11,1272893353),n=y(n,o,i,a,t[r+7],16,-155497632),a=y(a,n,o,i,t[r+10],23,-1094730640),i=y(i,a,n,o,t[r+13],4,681279174),o=y(o,i,a,n,t[r],11,-358537222),n=y(n,o,i,a,t[r+3],16,-722521979),a=y(a,n,o,i,t[r+6],23,76029189),i=y(i,a,n,o,t[r+9],4,-640364487),o=y(o,i,a,n,t[r+12],11,-421815835),n=y(n,o,i,a,t[r+15],16,530742520),a=y(a,n,o,i,t[r+2],23,-995338651),i=C(i,a,n,o,t[r],6,-198630844),o=C(o,i,a,n,t[r+7],10,1126891415),n=C(n,o,i,a,t[r+14],15,-1416354905),a=C(a,n,o,i,t[r+5],21,-57434055),i=C(i,a,n,o,t[r+12],6,1700485571),o=C(o,i,a,n,t[r+3],10,-1894986606),n=C(n,o,i,a,t[r+10],15,-1051523),a=C(a,n,o,i,t[r+1],21,-2054922799),i=C(i,a,n,o,t[r+8],6,1873313359),o=C(o,i,a,n,t[r+15],10,-30611744),n=C(n,o,i,a,t[r+6],15,-1560198380),a=C(a,n,o,i,t[r+13],21,1309151649),i=C(i,a,n,o,t[r+4],6,-145523070),o=C(o,i,a,n,t[r+11],10,-1120210379),n=C(n,o,i,a,t[r+2],15,718787259),a=C(a,n,o,i,t[r+9],21,-343485551),i=h(i,s),a=h(a,l),n=h(n,c),o=h(o,u)}return[i,a,n,o]}(function(t){if(0===t.length)return[];for(var e=8*t.length,i=new Uint32Array(g(e)),a=0;a<e;a+=8)i[a>>5]|=(255&t[a/8])<<a%32;return i}(t),8*t.length))});var x=function(t,e,i){var a=(t=t||{}).random||(t.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e){i=i||0;for(var n=0;n<16;++n)e[i+n]=a[n];return e}return u(a)};function w(t,e,i,a){switch(t){case 0:return e&i^~e&a;case 1:return e^i^a;case 2:return e&i^e&a^i&a;case 3:return e^i^a}}function S(t,e){return t<<e|t>>>32-e}var A=m("v5",80,function(t){var e=[1518500249,1859775393,2400959708,3395469782],i=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var a=unescape(encodeURIComponent(t));t=[];for(var n=0;n<a.length;++n)t.push(a.charCodeAt(n))}t.push(128);for(var o=t.length/4+2,r=Math.ceil(o/16),s=new Array(r),l=0;l<r;++l){for(var c=new Uint32Array(16),u=0;u<16;++u)c[u]=t[64*l+4*u]<<24|t[64*l+4*u+1]<<16|t[64*l+4*u+2]<<8|t[64*l+4*u+3];s[l]=c}s[r-1][14]=8*(t.length-1)/Math.pow(2,32),s[r-1][14]=Math.floor(s[r-1][14]),s[r-1][15]=8*(t.length-1)&4294967295;for(var p=0;p<r;++p){for(var d=new Uint32Array(80),v=0;v<16;++v)d[v]=s[p][v];for(var m=16;m<80;++m)d[m]=S(d[m-3]^d[m-8]^d[m-14]^d[m-16],1);for(var g=i[0],h=i[1],f=i[2],_=i[3],b=i[4],y=0;y<80;++y){var C=Math.floor(y/20),k=S(g,5)+w(C,h,f,_)+b+e[C]+d[y]>>>0;b=_,_=f,f=S(h,30)>>>0,h=g,g=k}i[0]=i[0]+g>>>0,i[1]=i[1]+h>>>0,i[2]=i[2]+f>>>0,i[3]=i[3]+_>>>0,i[4]=i[4]+b>>>0}return[i[0]>>24&255,i[0]>>16&255,i[0]>>8&255,255&i[0],i[1]>>24&255,i[1]>>16&255,i[1]>>8&255,255&i[1],i[2]>>24&255,i[2]>>16&255,i[2]>>8&255,255&i[2],i[3]>>24&255,i[3]>>16&255,i[3]>>8&255,255&i[3],i[4]>>24&255,i[4]>>16&255,i[4]>>8&255,255&i[4]]});i.d(e,"v1",function(){return v}),i.d(e,"v3",function(){return k}),i.d(e,"v4",function(){return x}),i.d(e,"v5",function(){return A})},KvUz:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n=i("mtWM"),o=i.n(n),r={data:function(){return{books:[],id:"books"}},beforeMount:function(){this.pullBooks()},methods:{pullBooks:function(){var t=this;o.a.get("/api/books",{headers:{Accept:"application/json"}}).then(function(e){var i=t.$route.path,a=t.$route.query.string;i.includes("search")?e.data.forEach(function(e){(e.title.toUpperCase().includes(a.toUpperCase())||e.author.toUpperCase().includes(a.toUpperCase()))&&t.books.push(e)}):i.includes("category")?e.data.forEach(function(e){e.genre.toUpperCase().includes(a.toUpperCase())&&t.books.push(e)}):t.books=e.data},function(t){console.log(t)})},navigateToMessage:function(t){var e=this;this.$router.push({path:"/books/"+t}).catch(function(t){e.$router.push({path:"/"})})}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shop"},[i("div",{staticClass:"special-offer"}),t._v(" "),i("div",{staticClass:"shop-content"},[i("h2",[t._v("Top sellers")]),t._v(" "),i("ul",t._l(t.books,function(e){return i("li",{key:e.TITLE,staticClass:"preview",on:{click:function(i){return t.navigateToMessage(e.id)}}},[i("div",{staticClass:"preview-title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"preview-author"},[t._v(t._s(e.author))]),t._v(" "),i("div",{staticClass:"preview-details"},[i("p",{staticClass:"preview-rating"},[t._v(t._s(e.rating))]),t._v(" "),i("p",{staticClass:"preview-price"},[t._v("$"+t._s(e.price))])])])}),0)])])},staticRenderFns:[]};var l=i("VU/8")(r,s,!1,function(t){i("C/xY")},"data-v-5ad54829",null).exports,c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar"},[t._m(0),t._v(" "),i("ul",[i("li",[t._v("Fiction\n      "),i("ul",{staticClass:"sidebar-list"},[i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"crime"}},[t._v("Crime & Thrillers")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"novel"}},[t._v("Novels & Stories")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"erotic"}},[t._v("Erotic Novels")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"scifi"}},[t._v("Sci-Fi")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"fantasy"}},[t._v("Fantasy")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"horror"}},[t._v("Horror")])])])]),t._v(" "),i("li",[t._v("Non-Fiction\n      "),i("ul",{staticClass:"sidebar-list"},[i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"history"}},[t._v("History")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"psychology"}},[t._v("Psychology")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"philosophy"}},[t._v("Philosophy")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"cooking"}},[t._v("Cooking")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"economics"}},[t._v("Economics")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"mathematics"}},[t._v("Mathematics")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"business"}},[t._v("Business")])]),t._v(" "),i("li",{on:{click:t.navigateToCategory}},[i("a",{attrs:{name:"finance"}},[t._v("Finance")])])])])]),t._v(" "),t._m(1),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"category-title-wrapper"},[e("h2",[this._v("Books")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"category-title-wrapper"},[e("h2",[this._v("DVDs")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("Fiction\n      "),i("ul",{staticClass:"sidebar-list"},[i("li",[t._v("Crime & Thrillers")]),t._v(" "),i("li",[t._v("Documentaries")]),t._v(" "),i("li",[t._v("TV")]),t._v(" "),i("li",[t._v("Sci-Fi")]),t._v(" "),i("li",[t._v("Fantasy")]),t._v(" "),i("li",[t._v("Horror")]),t._v(" "),i("li",[t._v("Cartoons")])])])])}]};var u=i("VU/8")({data:function(){return{msg:"Welcome to Your Vue.js App"}},methods:{navigateToCategory:function(t){var e=this;this.$router.push({path:"/category",query:{string:t.target.name}}).catch(function(t){e.$router.push({path:"/"})})}}},c,!1,function(t){i("iFHm")},"data-v-7851559a",null).exports,p=i("mvHQ"),d=i.n(p),v={data:function(){return{book:"",bookTitle:"",bookAuthor:"",bookGenre:"",bookPrice:"",bookStock:"",bookRating:"",bookId:this.$route.params.id}},beforeMount:function(){this.pullDetails()},methods:{pullDetails:function(){var t=this;o.a.get("/api/books/"+this.bookId,{headers:{Accept:"application/json"}}).then(function(e){t.book=e.data,t.bookTitle=t.book.title,t.bookAuthor=t.book.author,t.bookPrice=t.book.price,t.bookStock=t.book.stock,t.bookGenre=t.book.genre,t.bookRating=t.book.rating},function(t){console.log(t)})},addToCart:function(){var t=this,e=window.localStorage,i=e.getItem("cartContent")?e.getItem("cartContent"):"[]",a=JSON.parse(i);a.push(this.book),i=d()(a),e.setItem("cartContent",i),this.$router.push({path:"/cart"}).catch(function(e){t.$router.push({path:"/"})})}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail"},[i("div",{staticClass:"detail-wrapper"},[i("div",{staticClass:"detail-content"},[i("div",{staticClass:"detail-text-content"},[i("h2",[t._v(t._s(t.bookTitle))]),t._v(" "),i("p",{staticClass:"book-rating"},[t._v(t._s(t.bookRating))]),t._v(" "),i("p",[t._v("by "+t._s(t.bookAuthor))]),t._v(" "),i("p",[t._v("Genre: "+t._s(t.bookGenre))]),t._v(" "),i("p",[t._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          ")]),t._v(" "),i("p",[t._v("Price: $"+t._s(t.bookPrice))]),t._v(" "),i("p",[t._v("Left in stock: "+t._s(t.bookStock))])]),t._v(" "),i("div",{staticClass:"detail-image-container"},[i("img",{attrs:{src:"/static/generic-book.jpg"}}),t._v(" "),i("div",{staticClass:"centered"},[i("p",{staticClass:"title"},[t._v(t._s(t.bookTitle))]),t._v(" "),i("p",[t._v(t._s(t.bookAuthor))])])])]),t._v(" "),t.book?i("button",{staticClass:"call-to-action",on:{click:function(e){return t.addToCart()}}},[t._v("Add to cart")]):t._e()])])},staticRenderFns:[]};var g=i("VU/8")(v,m,!1,function(t){i("g+Ag")},"data-v-37d2648c",null).exports,h={data:function(){return{loggedIn:!1,email:"",password:"",error:!1,searchQuery:""}},methods:{show:function(){this.$modal.show("modal-login")},signIn:function(){this.error="",this.email&&this.password?"user@email.com"===this.email&&"supersecure1"===this.password?(this.loggedIn=!0,this.$modal.hide("modal-login")):this.error="The email and/or password you have provided is incorrect.":this.error="Please fill in all fields."},signOut:function(){this.loggedIn=!1},signUp:function(){this.$modal.show("modal-signup")},submitSignUp:function(){this.email?(console.log("email found"),this.loggedIn=!0,this.$modal.hide("modal-signup")):(this.error="error",console.log("no email found"))},navigateToCart:function(){var t=this;this.$router.push({path:"/cart"}).catch(function(e){t.$router.push({path:"/"})})},navigateToSearch:function(){var t=this;this.$router.push({path:"/search",query:{string:this.searchQuery}}).catch(function(e){t.$router.push({path:"/"})})},navigateToAccount:function(){var t=this;this.$router.push({path:"/account"}).catch(function(e){t.$router.push({path:"/"})})}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"topbar"},[t._m(0),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],attrs:{type:"text",name:"searchbar"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),i("button",{attrs:{id:"button-search"},on:{click:function(e){return t.navigateToSearch()}}},[t._v("Search")]),t._v(" "),t.loggedIn?i("div",{attrs:{id:"login-message"}},[t._v("Welcome back, "+t._s(t.email))]):t._e(),t._v(" "),i("p",{attrs:{id:"clock"}},[t._v("3:43pm 23/06/2002")]),t._v(" "),i("div",{staticClass:"account-buttons"},[t.loggedIn?i("button",{attrs:{id:"logout"},on:{click:function(e){return t.signOut()}}},[t._v("Log out")]):i("button",{attrs:{id:"login"},on:{click:function(e){return t.show()}}},[t._v("Log in")]),t._v(" "),i("button",{staticClass:"call-to-action",attrs:{id:"signup"},on:{click:function(e){return t.signUp()}}},[t._v("Sign up")]),t._v(" "),i("button",{staticClass:"topbar-icon",attrs:{id:"cart"},on:{click:function(e){return t.navigateToCart()}}},[i("i",{staticClass:"fas fa-shopping-cart"})]),t._v(" "),t.loggedIn?i("button",{staticClass:"topbar-icon",attrs:{id:"account"},on:{click:function(e){return t.navigateToAccount()}}},[i("i",{staticClass:"fas fa-user"})]):t._e()]),t._v(" "),i("modal",{attrs:{name:"modal-login"}},[i("div",{staticClass:"box"},[i("div",{staticClass:"box-part",attrs:{id:"bp-left"}},[i("div",{staticClass:"partition",attrs:{id:"partition-login"}},[i("div",{staticClass:"partition-title"},[t._v("LOG IN")]),t._v(" "),i("div",{staticClass:"partition-form"},[i("form",{attrs:{autocomplete:"false"}},[i("div",{staticClass:"autocomplete-fix"},[i("input",{attrs:{disabled:"",type:"password"}})]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"textfield-modal",attrs:{id:"n-email",type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"textfield-modal",attrs:{id:"n-password2",type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),t.error?i("div",{staticClass:"error-message"},[t._v("\n              "+t._s(t.error)+"\n            ")]):t._e(),t._v(" "),i("div",{staticStyle:{"margin-top":"42px"}}),t._v(" "),i("div",{staticClass:"button-set"},[i("button",{attrs:{id:"goto-signin-btn"},on:{click:t.signIn}},[t._v("Sign In")])])])])]),t._v(" "),i("div",{staticClass:"box-part",attrs:{id:"bp-right"}},[i("div",{staticClass:"box-messages"})])])]),t._v(" "),i("modal",{attrs:{name:"modal-signup",height:"auto"}},[i("div",{staticClass:"box"},[i("div",{staticClass:"box-part",attrs:{id:"bp-left"}},[i("div",{staticClass:"partition",attrs:{id:"partition-register"}},[i("div",{staticClass:"partition-title"},[t._v("SIGN UP")]),t._v(" "),i("div",{staticClass:"partition-form"},[i("form",{attrs:{autocomplete:"false"}},[i("div",{staticClass:"autocomplete-fix"},[i("input",{attrs:{disabled:"",type:"password"}})]),t._v(" "),i("input",{staticClass:"textfield-modal",attrs:{id:"s-name",type:"text",placeholder:"Name"}}),t._v(" "),i("input",{staticClass:"textfield-modal",attrs:{id:"s-surname",type:"text",placeholder:"Surname"}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"textfield-modal",attrs:{id:"s-email",type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),i("input",{staticClass:"textfield-modal",attrs:{id:"s-password2",type:"password",placeholder:"Password"}}),t._v(" "),i("input",{staticClass:"textfield-modal",attrs:{id:"s-company",type:"text",placeholder:"Company (optional)"}}),t._v(" "),i("br"),t._v(" "),i("label",{attrs:{id:"account-usage"}},[t._v("I will be using my account for:")]),i("br"),t._v(" "),i("input",{attrs:{type:"radio",id:"myself",name:"user-type",value:"myelf"}}),t._v(" "),i("label",{attrs:{for:"myself"}},[t._v("Myself")]),i("br"),t._v(" "),i("input",{attrs:{type:"radio",id:"business",name:"user-type",value:"business"}}),t._v(" "),i("label",{attrs:{for:"business"}},[t._v("My business")]),i("br"),t._v(" "),i("br"),t._v(" "),i("input",{attrs:{type:"checkbox",id:"marketing-agreement",name:"marketing-agreement"}}),t._v(" "),i("label",{attrs:{for:"marketing-agreement"}},[t._v("I would like to receive promotional emails")]),i("br"),t._v(" "),i("input",{attrs:{type:"checkbox",id:"privacy-policy",name:"privacy-policy"}}),t._v(" "),i("label",{attrs:{for:"privacy-policy"}},[t._v("I have read and accept the privacy policy")]),i("br")]),t._v(" "),t.error?i("div",{staticClass:"error-message"},[t._v("\n              Please fill in all fields.\n            ")]):t._e(),t._v(" "),i("div",{staticStyle:{"margin-top":"42px"}}),t._v(" "),i("div",{staticClass:"button-set"},[i("button",{attrs:{id:"register-btn"},on:{click:function(e){return t.submitSignUp()}}},[t._v("\n                Register\n              ")])])])])]),t._v(" "),i("div",{staticClass:"box-part",attrs:{id:"bp-right"}},[i("div",{staticClass:"box-messages"})])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"/"}},[e("img",{attrs:{id:"logo",src:"static/logo-horizontal.svg"}})])}]};var _=i("VU/8")(h,f,!1,function(t){i("KvUz")},"data-v-9a19ef14",null).exports,b={data:function(){return{cartItems:[],totalPrice:0,billingCoupon:!1,coupon:"",couponAccepted:!1}},methods:{navigateToCheckout:function(){var t=this;this.$router.push({path:"/checkout"}).catch(function(e){t.$router.push({path:"/"})})},emptyCart:function(){window.localStorage;localStorage.removeItem("cartContent"),this.cartItems=[]},fetchItems:function(){var t=window.localStorage.getItem("cartContent");this.cartItems=JSON.parse(t)},sumPrices:function(){var t=0;this.cartItems.forEach(function(e){t+=parseFloat(e.price)}),this.totalPrice=t.toFixed(2)},applyCoupon:function(){"COUPON2020"===this.coupon&&(this.couponAccepted=!0,this.totalPrice=.8*this.totalPrice)}},mounted:function(){this.fetchItems(),this.sumPrices()}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cart"},[i("h1",[t._v("Your Shopping Cart")]),t._v(" "),t.cartItems?t._e():i("p",[t._v("Your shopping cart is empty. Go buy some books!")]),t._v(" "),i("ul",t._l(t.cartItems,function(e){return i("li",{key:e.title},[t._v("\n      1x, "+t._s(e.title)+", "+t._s(e.author)+", $"+t._s(e.price)+"\n    ")])}),0),t._v("\n  Total: $"),i("div",{attrs:{id:"total-price"}},[t._v(t._s(t.totalPrice))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingCoupon,expression:"billingCoupon"}],attrs:{type:"checkbox",id:"billing-coupon",name:"billing-coupon"},domProps:{checked:Array.isArray(t.billingCoupon)?t._i(t.billingCoupon,null)>-1:t.billingCoupon},on:{change:function(e){var i=t.billingCoupon,a=e.target,n=!!a.checked;if(Array.isArray(i)){var o=t._i(i,null);a.checked?o<0&&(t.billingCoupon=i.concat([null])):o>-1&&(t.billingCoupon=i.slice(0,o).concat(i.slice(o+1)))}else t.billingCoupon=n}}}),t._v(" "),i("label",{attrs:{for:"billing-coupon"}},[t._v("I have a coupon for this order")]),i("br"),t._v(" "),t.billingCoupon?i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon,expression:"coupon"}],staticClass:"textfield-modal",attrs:{id:"coupon",type:"text",placeholder:"Coupon"},domProps:{value:t.coupon},on:{input:function(e){e.target.composing||(t.coupon=e.target.value)}}}),t._v(" "),i("button",{on:{click:t.applyCoupon}},[t._v("Apply")]),t._v(" "),t.couponAccepted?i("p",[t._v("Coupon applied! 20% discount")]):i("p",[t._v("Invalid coupon.")])]):t._e(),t._v(" "),i("br"),t._v(" "),i("button",{staticClass:"call-to-action",on:{click:function(e){return t.navigateToCheckout()}}},[t._v("\n    Checkout\n  ")]),t._v(" "),i("button",{on:{click:function(e){return t.emptyCart()}}},[t._v("Empty Cart")])])},staticRenderFns:[]};var C=i("VU/8")(b,y,!1,function(t){i("1O9p")},"data-v-3ffc652b",null).exports,k=i("2lH8"),x={data:function(){return{shippingName:"",shippingSurname:"",shippingAddress:"",shippingZipcode:"",shippingCity:"",shippingCompany:"",billingName:"",billingSurname:"",billingAddress:"",billingZipcode:"",billingCity:"",billingCompany:"",errorMessage:"",separateBilling:!1}},methods:{navigateToRecap:function(){if(this.shippingName&&this.shippingSurname&&this.shippingAddress&&this.shippingZipcode&&this.shippingCity&&this.shippingCompany){var t=window.localStorage,e=t.getItem("cartContent"),i=JSON.parse(e),a=t.getItem("orders"),n=void 0;n=a?JSON.parse(a):[];var o=Date.now(),r=new Date(o),s=r.getDate(),l=r.getMonth()+1,c=r.getFullYear(),u={id:Object(k.uuid)(),date:s+"-"+l+"-"+c,cartItems:i};n.push(u),t.setItem("orders",d()(n)),localStorage.removeItem("cartContent"),this.$router.push({path:"/recap"}).catch(function(t){})}else this.errorMessage="Please fill in all fields."}}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"checkout"},[i("h1",[t._v("Checkout")]),t._v(" "),i("h2",[t._v("buy those books already...")]),t._v(" "),i("p",[t._v("Shipping:")]),t._v(" "),i("form",{attrs:{autocomplete:"false"}},[t._m(0),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingName,expression:"shippingName"}],staticClass:"textfield-modal",attrs:{id:"s-name",type:"text",placeholder:"Name"},domProps:{value:t.shippingName},on:{input:function(e){e.target.composing||(t.shippingName=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingSurname,expression:"shippingSurname"}],staticClass:"textfield-modal",attrs:{id:"s-surname",type:"text",placeholder:"Surname"},domProps:{value:t.shippingSurname},on:{input:function(e){e.target.composing||(t.shippingSurname=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingAddress,expression:"shippingAddress"}],staticClass:"textfield-modal",attrs:{id:"s-address",type:"text",placeholder:"Address"},domProps:{value:t.shippingAddress},on:{input:function(e){e.target.composing||(t.shippingAddress=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingZipcode,expression:"shippingZipcode"}],staticClass:"textfield-modal",attrs:{id:"s-zipcode",type:"text",placeholder:"Zipcode"},domProps:{value:t.shippingZipcode},on:{input:function(e){e.target.composing||(t.shippingZipcode=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingCity,expression:"shippingCity"}],staticClass:"textfield-modal",attrs:{id:"s-city",type:"text",placeholder:"City"},domProps:{value:t.shippingCity},on:{input:function(e){e.target.composing||(t.shippingCity=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingCompany,expression:"shippingCompany"}],staticClass:"textfield-modal",attrs:{id:"s-company",type:"text",placeholder:"Company (optional)"},domProps:{value:t.shippingCompany},on:{input:function(e){e.target.composing||(t.shippingCompany=e.target.value)}}}),t._v(" "),i("br"),t._v(" "),i("label",{attrs:{id:"account-usage"}},[t._v("I would like the items to be shipped")]),t._v(" "),i("br"),t._v(" "),i("input",{attrs:{type:"radio",id:"asap",name:"user-type",value:"asap"}}),t._v(" "),i("label",{attrs:{for:"asap"}},[t._v("as soon as possible")]),i("br"),t._v(" "),i("input",{attrs:{type:"radio",id:"single",name:"user-type",value:"single"}}),t._v(" "),i("label",{attrs:{for:"single"}},[t._v("in a single package")]),i("br"),t._v(" "),i("br"),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.separateBilling,expression:"separateBilling"}],attrs:{type:"checkbox",id:"billing-different",name:"billing-different"},domProps:{checked:Array.isArray(t.separateBilling)?t._i(t.separateBilling,null)>-1:t.separateBilling},on:{change:function(e){var i=t.separateBilling,a=e.target,n=!!a.checked;if(Array.isArray(i)){var o=t._i(i,null);a.checked?o<0&&(t.separateBilling=i.concat([null])):o>-1&&(t.separateBilling=i.slice(0,o).concat(i.slice(o+1)))}else t.separateBilling=n}}}),t._v(" "),i("label",{attrs:{for:"billing-different"}},[t._v("Billing address is different from shipping")]),i("br")]),t._v(" "),t.separateBilling?i("div",{attrs:{id:"billing-block"}},[i("p",[t._v("Billing:")]),t._v(" "),i("form",{attrs:{autocomplete:"false"}},[t._m(1),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingName,expression:"billingName"}],staticClass:"textfield-modal",attrs:{id:"b-name",type:"text",placeholder:"Name"},domProps:{value:t.billingName},on:{input:function(e){e.target.composing||(t.billingName=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingSurname,expression:"billingSurname"}],staticClass:"textfield-modal",attrs:{id:"b-surname",type:"text",placeholder:"Surname"},domProps:{value:t.billingSurname},on:{input:function(e){e.target.composing||(t.billingSurname=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingAddress,expression:"billingAddress"}],staticClass:"textfield-modal",attrs:{id:"b-address",type:"text",placeholder:"Address"},domProps:{value:t.billingAddress},on:{input:function(e){e.target.composing||(t.billingAddress=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingZipcode,expression:"billingZipcode"}],staticClass:"textfield-modal",attrs:{id:"b-zipcode",type:"text",placeholder:"Zipcode"},domProps:{value:t.billingZipcode},on:{input:function(e){e.target.composing||(t.billingZipcode=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingCity,expression:"billingCity"}],staticClass:"textfield-modal",attrs:{id:"b-city",type:"text",placeholder:"City"},domProps:{value:t.billingCity},on:{input:function(e){e.target.composing||(t.billingCity=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingCompany,expression:"billingCompany"}],staticClass:"textfield-modal",attrs:{id:"b-company",type:"text",placeholder:"Company (optional)"},domProps:{value:t.billingCompany},on:{input:function(e){e.target.composing||(t.billingCompany=e.target.value)}}}),t._v(" "),i("br")])]):t._e(),t._v(" "),t.errorMessage?i("p",{attrs:{id:"error-message"}},[t._v(t._s(t.errorMessage))]):t._e(),t._v(" "),i("button",{staticClass:"call-to-action",on:{click:function(e){return t.navigateToRecap()}}},[t._v("Buy")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"autocomplete-fix"},[e("input",{attrs:{disabled:"",type:"password"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"autocomplete-fix"},[e("input",{attrs:{disabled:"",type:"password"}})])}]};var S=i("VU/8")(x,w,!1,function(t){i("z/h+")},"data-v-f1081960",null).exports,A={data:function(){return{cartItems:[]}},methods:{navigateToCheckout:function(){var t=this;this.$router.push({path:"/checkout"}).catch(function(e){t.$router.push({path:"/"})})},navigateToHome:function(){var t=this;this.$router.push({path:"/"}).catch(function(e){t.$router.push({path:"/"})})}},mounted:function(){var t=window.localStorage.getItem("cartContent");this.cartItems=JSON.parse(t)}},N={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recap"},[i("p",{attrs:{id:"order-confirmation"}},[t._v("All good, order is on the way. Thank you!!")]),t._v(" "),i("p",{attrs:{id:"recap-content"}},[i("ul",t._l(t.cartItems,function(e){return i("li",{key:e.title},[t._v("\n                1x, "+t._s(e.title)+", "+t._s(e.author)+"\n            ")])}),0)]),t._v(" "),i("button",{on:{click:function(e){return t.navigateToHome()}}},[t._v("Shop more")])])},staticRenderFns:[]};var I=i("VU/8")(A,N,!1,function(t){i("u2Ps")},"data-v-829b8cd2",null).exports,P={data:function(){return{billingName:"",billingSurname:"",billingAddress:"",billingZipcode:"",billingCity:"",billingCompany:"",errorMessage:"",file:"",uploadSuccess:!1,uploadFailure:!1,orders:[]}},beforeMount:function(){var t=window.localStorage.getItem("orders");this.orders=JSON.parse(t)},methods:{onSelect:function(){var t=this.$refs.file.files[0];this.file=t,console.log(this.file.type)},submit:function(){this.file&&("image/png"===this.file.type||"image/jpg"===this.file.type||"image/jpeg"===this.file.type?this.uploadSuccess=!0:this.uploadFailure=!0)}}},$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"account"},[i("div",{staticClass:"account-content"},[i("h2",[t._v("Account")]),t._v(" "),i("div",{attrs:{id:"user-details"}},[i("h3",[t._v("User Details")]),t._v(" "),i("div",[t._v("E-Mail address: user@email.com")]),t._v(" "),i("div",[t._v("\n                Profile picture: "),i("input",{ref:"file",attrs:{type:"file"},on:{change:function(e){return t.onSelect()}}}),t._v(" "),i("br"),t._v(" "),i("button",{on:{click:function(e){return t.submit()}}},[t._v("Upload")]),t._v(" "),t.uploadSuccess?i("div",{attrs:{id:"upload-message-succcess"}},[t._v("Upload successful.")]):t._e(),t._v(" "),t.uploadFailure?i("div",{attrs:{id:"upload-message-failure"}},[t._v("Upload failed: unsupported file format.")]):t._e()])]),t._v(" "),i("div",{attrs:{id:"billing"}},[i("h3",[t._v("Billing Information")]),t._v(" "),i("form",{attrs:{autocomplete:"false"}},[t._m(0),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingName,expression:"billingName"}],attrs:{id:"s-name",type:"text",placeholder:"Name"},domProps:{value:t.billingName},on:{input:function(e){e.target.composing||(t.billingName=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingSurname,expression:"billingSurname"}],attrs:{id:"s-surname",type:"text",placeholder:"Surname"},domProps:{value:t.billingSurname},on:{input:function(e){e.target.composing||(t.billingSurname=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingAddress,expression:"billingAddress"}],attrs:{id:"s-address",type:"text",placeholder:"Address"},domProps:{value:t.billingAddress},on:{input:function(e){e.target.composing||(t.billingAddress=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingZipcode,expression:"billingZipcode"}],attrs:{id:"s-zipcode",type:"text",placeholder:"Zipcode"},domProps:{value:t.billingZipcode},on:{input:function(e){e.target.composing||(t.billingZipcode=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingCity,expression:"billingCity"}],attrs:{id:"s-city",type:"text",placeholder:"City"},domProps:{value:t.billingCity},on:{input:function(e){e.target.composing||(t.billingCity=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingCompany,expression:"billingCompany"}],attrs:{id:"s-company",type:"text",placeholder:"Company (optional)"},domProps:{value:t.billingCompany},on:{input:function(e){e.target.composing||(t.billingCompany=e.target.value)}}}),t._v(" "),i("button",{attrs:{type:"button"}},[t._v("Update")])])]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"autocomplete-fix"},[e("input",{attrs:{disabled:"",type:"password"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"orders"}},[e("h3",[this._v("Previous Orders")]),this._v(" "),e("ul",[e("li",[this._v("Order C0E11D0A-7378-446A-BE77-2FA07A576CFA - "),e("a",{attrs:{href:"/static/invoice-20-07-02.pdf",download:""}},[this._v("Invoice")])])])])}]};var T=i("VU/8")(P,$,!1,function(t){i("dGw4")},"data-v-334f6df9",null).exports,E={name:"App",data:function(){return{}},methods:{},components:{"component-sidebar":u,"component-shop":l,"component-detail":g,"component-topbar":_,"component-cart":C,"component-checkout":S,"component-recap":I}},U={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),i("component-topbar"),t._v(" "),i("hr"),t._v(" "),i("div",{attrs:{id:"app-content"}},[i("div",{staticClass:"main-container"},[i("router-view",{key:t.$route.fullPath,attrs:{name:"componentShop"}}),t._v(" "),i("router-view",{attrs:{name:"componentDetail"}}),t._v(" "),i("router-view",{attrs:{name:"componentSidebar"}}),t._v(" "),i("router-view",{attrs:{name:"componentCart"}}),t._v(" "),i("router-view",{attrs:{name:"componentCheckout"}}),t._v(" "),i("router-view",{attrs:{name:"componentRecap"}}),t._v(" "),i("router-view",{attrs:{name:"componentAccount"}})],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"top-special-offer"}},[e("h3",[this._v("\n      SPECIAL OFFER: 20% OFF BOOKS WITH "),e("i",[this._v("WORDS")]),this._v(" IN THEM!!! LIMITED TIME\n      ONLY!\n    ")])])}]};var F=i("VU/8")(E,U,!1,function(t){i("YHBt")},null,null).exports,R=i("/ocq"),M=i("8+8L");a.a.use(R.a),a.a.use(M.a);var O=new R.a({routes:[{path:"/",components:{componentSidebar:u,componentShop:l}},{path:"/books/:id",components:{componentSidebar:u,componentDetail:g}},{path:"/cart",components:{componentCart:C}},{path:"/checkout",components:{componentCheckout:S}},{path:"/recap",components:{componentRecap:I}},{path:"/search",components:{componentSidebar:u,componentShop:l}},{path:"/category",components:{componentSidebar:u,componentShop:l}},{path:"/account",components:{componentAccount:T}}],mode:"history"}),B=i("rifk"),D=i.n(B);a.a.config.productionTip=!1,a.a.use(D.a),new a.a({el:"#app",router:O,components:{App:F},template:"<App/>",render:function(t){return t(F)}})},YHBt:function(t,e){},dGw4:function(t,e){},"g+Ag":function(t,e){},iFHm:function(t,e){},u2Ps:function(t,e){},"z/h+":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5bd54d5a0aa84966f389.js.map