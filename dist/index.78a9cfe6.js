function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequire3a11;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequire3a11=o),o.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("gKAGC",(function(e,t){var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)})),o.register("eGV3v",(function(e,t){e.exports=!o("k19Az")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))})),o.register("k19Az",(function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}})),o.register("32lI6",(function(e,t){var n=s.document,r=a(n)&&a(n.createElement);e.exports=function(e){return r?n.createElement(e):{}}}));var a={};a=function(e){return"object"==typeof e?null!==e:"function"==typeof e};var s={},c=s="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=c),o.register("fmYHZ",(function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}})),o.register("9ug1p",(function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.78a9cfe6.js","hfd23":"icons.c14567a0.svg","eyyUD":"icons.c14567a0.svg"}'));var u,l,d={},p=o("gKAGC"),h={};l=function(e){if(!a(e))throw TypeError(e+" is not an object!");return e};var f;f=!o("eGV3v")&&!o("k19Az")((function(){return 7!=Object.defineProperty(o("32lI6")("div"),"a",{get:function(){return 7}}).a}));var g;g=function(e,t){if(!a(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!a(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!a(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!a(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")};var m=Object.defineProperty;u=o("eGV3v")?Object.defineProperty:function(e,t,n){if(l(e),t=g(t,!0),l(n),f)try{return m(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e};var v;v=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},h=o("eGV3v")?function(e,t,n){return u(e,t,v(1,n))}:function(e,t,n){return e[t]=n,e};var _,y,w={}.hasOwnProperty;y=function(e,t){return w.call(e,t)};var b=o("fmYHZ")("src"),k=Function.toString,E=(""+k).split("toString");o("gKAGC").inspectSource=function(e){return k.call(e)},(_=function(e,t,n,r){var i="function"==typeof n;i&&(y(n,"name")||h(n,"name",t)),e[t]!==n&&(i&&(y(n,b)||h(n,b,e[t]?""+e[t]:E.join(String(t)))),e===s?e[t]=n:r?e[t]?e[t]=n:h(e,t,n):(delete e[t],h(e,t,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[b]||k.call(this)}));var S,$;$=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e},S=function(e,t,n){if($(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}};var x=function(e,t,n){var r,i,o,a,c=e&x.F,u=e&x.G,l=e&x.S,d=e&x.P,f=e&x.B,g=u?s:l?s[t]||(s[t]={}):(s[t]||{}).prototype,m=u?p:p[t]||(p[t]={}),v=m.prototype||(m.prototype={});for(r in u&&(n=t),n)o=((i=!c&&g&&void 0!==g[r])?g:n)[r],a=f&&i?S(o,s):d&&"function"==typeof o?S(Function.call,o):o,g&&_(g,r,o,e&x.U),m[r]!=o&&h(m,r,a),d&&v[r]!=o&&(v[r]=o)};s.core=p,x.F=1,x.G=2,x.S=4,x.P=8,x.B=16,x.W=32,x.U=64,x.R=128,d=x;var F,L;L=function(e,t,n){var r=void 0===n;switch(t.length){case 0:return r?e():e.call(n);case 1:return r?e(t[0]):e.call(n,t[0]);case 2:return r?e(t[0],t[1]):e.call(n,t[0],t[1]);case 3:return r?e(t[0],t[1],t[2]):e.call(n,t[0],t[1],t[2]);case 4:return r?e(t[0],t[1],t[2],t[3]):e.call(n,t[0],t[1],t[2],t[3])}return e.apply(n,t)};var M={},O=s.document;M=O&&O.documentElement;var P,j,H,T=o("32lI6"),q=s.process,R=s.setImmediate,I=s.clearImmediate,N=s.MessageChannel,G=s.Dispatch,U=0,A={},C=function(){var e=+this;if(A.hasOwnProperty(e)){var t=A[e];delete A[e],t()}},W=function(e){C.call(e.data)};R&&I||(R=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return A[++U]=function(){L("function"==typeof e?e:Function(e),t)},P(U),U},I=function(e){delete A[e]},"process"==o("9ug1p")(q)?P=function(e){q.nextTick(S(C,e,1))}:G&&G.now?P=function(e){G.now(S(C,e,1))}:N?(H=(j=new N).port2,j.port1.onmessage=W,P=S(H.postMessage,H,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(P=function(e){s.postMessage(e+"","*")},s.addEventListener("message",W,!1)):P="onreadystatechange"in T("script")?function(e){M.appendChild(T("script")).onreadystatechange=function(){M.removeChild(this),C.call(e)}}:function(e){setTimeout(S(C,e,1),0)}),F={set:R,clear:I},d(d.G+d.B,{setImmediate:F.set,clearImmediate:F.clear});var z=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,o=Object.create(i.prototype),a=new L(r||[]);return o._invoke=function(e,t,n){var r=d;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw o;return O()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=$(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?f:p,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=f,n.method="throw",n.arg=c.arg)}}}(e,n,a),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",p="suspendedYield",h="executing",f="completed",g={};function m(){}function v(){}function _(){}var y={};c(y,o,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(M([])));b&&b!==n&&r.call(b,o)&&(y=b);var k=_.prototype=m.prototype=Object.create(y);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,o,a,s){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function $(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,$(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function M(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:O}}function O(){return{value:t,done:!0}}return v.prototype=_,c(k,"constructor",_),c(_,"constructor",v),v.displayName=c(_,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new S(u(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),c(k,s,"Generator"),c(k,o,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=M,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),F(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;F(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:M(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=z}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=z:Function("r","regeneratorRuntime = r")(z)}const Y=async function(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),i=await Promise.race([r,(n=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]),o=await i.json();if(!i.ok)throw new Error(`${o.message} (${i.status})`);return o}catch(e){throw e}var n},D={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},K=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},V=function(e=D.search.page){D.search.page=e;const t=(e-1)*D.search.resultsPerPage,n=e*D.search.resultsPerPage;return D.search.results.slice(t,n)},B=function(){localStorage.setItem("bookmarks",JSON.stringify(D.bookmarks))},J=function(e){D.bookmarks.push(e),e.id===D.recipe.id&&(D.recipe.bookmarked=!0),B()};!function(){const e=localStorage.getItem("bookmarks");e&&(D.bookmarks=JSON.parse(e))}();var Q,Z,X,ee;Q=new URL(o("27Lyk").resolve("hfd23"),import.meta.url).toString(),Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,i=num.split(" ");if(i[0]&&(n=i[0]),i[1]&&(r=i[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var o=n.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(X=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},ee=function(e,t){if(t){var n=Math.pow(10,t);return Math.round(e*n)/n}return Math.round(e)},function(){if(X(this.denominator)){var e=ee(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}X(this.numerator)&&(e=ee(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return r.forEach((function(e){var t=i.indexOf(e);t>=0&&(n.push(e),i.splice(t,1))})),0===n.length?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},Z=Fraction;class te{_data;render(e){this._data=e;const t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const e=`<div class="spinner">\n    <svg>\n      <use href="${t(Q)}#icon-loader"></use>\n    </svg>\n  </div> `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderMessage(e=this._message){const n=`<div class="message">\n            <div>\n              <svg>\n                <use href="${t(Q)}#icon-smile"></use>\n              </svg>\n            </div>\n            <p>${e}</p>\n          </div> `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}}var ne=new class extends te{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}_generateMarkup(){return`  \n  <figure class="recipe__fig">\n<img src="${this._data.image}" alt="Tomato" class="recipe__img" />\n<h1 class="recipe__title">\n  <span>${this._data.title}</span>\n</h1>\n</figure>\n\n<div class="recipe__details">\n<div class="recipe__info">\n  <svg class="recipe__info-icon">\n    <use href="${t(Q)}#icon-clock"></use>\n  </svg>\n  <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n  <span class="recipe__info-text">minutes</span>\n</div>\n<div class="recipe__info">\n  <svg class="recipe__info-icon">\n    <use href="${t(Q)}#icon-users"></use>\n  </svg>\n  <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n  <span class="recipe__info-text">servings</span>\n\n  <div class="recipe__info-buttons">\n    <button class="btn--tiny btn--increase-servings">\n      <svg>\n        <use href="${t(Q)}#icon-minus-circle"></use>\n      </svg>\n    </button>\n    <button class="btn--tiny btn--increase-servings">\n      <svg>\n        <use href="${t(Q)}#icon-plus-circle"></use>\n      </svg>\n    </button>\n  </div>\n</div>\n\n<div class="recipe__user-generated">\n  <svg>\n    <use href="${t(Q)}#icon-user"></use>\n  </svg>\n</div>\n\n<button class="btn--round">\n  <svg class="">\n    <use href="${t(Q)}#icon-bookmark-fill"></use>\n  </svg>\n</button>\n</div>\n\n<div class="recipe__ingredients">\n<h2 class="heading--2">Recipe ingredients</h2>\n<ul class="recipe__ingredient-list">\n${this._data.ingredients.map(this._generateMarkupIngridient).join("")}\n</div>\n\n<div class="recipe__directions">\n<h2 class="heading--2">How to cook it</h2>\n<p class="recipe__directions-text">\n  This recipe was carefully designed and tested by\n  <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n  directions at their website.\n</p>\n<a\n  class="btn--small recipe__btn"\n  href="${this._data.sourceUrl}"\n  target="_blank"\n>\n  <span>Directions</span>\n  <svg class="search__icon">\n    <use href="${t(Q)}#icon-arrow-right"></use>\n  </svg>\n</a>\n</div>`}_generateMarkupIngridient(e){return`\n      <li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${t(Q)}#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${e.quantity?new Z(e.quantity).toString():""}</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${e.unit}</span>\n        ${e.description}\n      </div>\n    </li>\n      `}};var re=new class{_parentEl=document.querySelector(".search");getQuery(){return this._parentEl.querySelector(".search__field").value}_clearInput(){const e=this._parentEl.querySelector(".search__field").value="";return this._clearInput(),e}addHandlerSearch(e){this._parentEl.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var ie,oe=new class extends te{_parentElement=document.querySelector(".results");_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){return`\n    <li class="preview">\n    <a class="preview__link preview__link--active" href="#${e.id}">\n      <figure class="preview__fig">\n        <img src="${e.image}" alt="${e.title}" />\n      </figure>\n      <div class="preview__data">\n        <h4 class="preview__title">${e.title}</h4>\n        <p class="preview__publisher">${e.publisher}</p>\n      </div>\n    </a>\n  </li>\n  `}};ie=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString();var ae=new class extends te{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}_generateMarkup(){const e=this._data.page,n=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&n>1?`\n        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n          <span>Page ${e+1}</span>\n          <svg class="search__icon">\n            <use href="${t(ie)}#icon-arrow-right"></use>\n          </svg>\n        </button>\n      `:e===n&&n>1?`\n        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="${t(ie)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${e-1}</span>\n        </button>\n      `:e<n?`\n        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="${t(ie)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${e-1}</span>\n        </button>\n        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n          <span>Page ${e+1}</span>\n          <svg class="search__icon">\n            <use href="${t(ie)}#icon-arrow-right"></use>\n          </svg>\n        </button>\n      `:""}};var se=new class extends te{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n      <li class="preview">\n        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n          <figure class="preview__fig">\n            <img src="${this._data.image}" alt="${this._data.title}" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${this._data.title}</h4>\n            <p class="preview__publisher">${this._data.publisher}</p>\n            <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n              <svg>\n              <use href="${t(ie)}#icon-user"></use>\n              </svg>\n            </div>\n          </div>\n        </a>\n      </li>\n    `}};var ce=new class extends te{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>se.render(e,!1))).join("")}};var ue=new class extends te{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_generateMarkup(){}};const le=async function(){try{const e=window.location.hash.slice(1);if(!e)return;ne.renderSpinner(),oe.update(V()),ce.update(D.bookmarks),await async function(e){try{const t=await Y(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=<YOUR_KEY>`);D.recipe=K(t),D.bookmarks.some((t=>t.id===e))?D.recipe.bookmarked=!0:D.recipe.bookmarked=!1,console.log(D.recipe)}catch(e){throw console.error(`${e} 💥💥💥💥`),e}}(e),ne.render(D.recipe)}catch(e){ne.renderError(),console.error(e)}},de=async function(){try{oe.renderSpinner();const e=re.getQuery();if(!e)return;await async function(e){try{D.search.query=e;const t=await Y(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=<YOUR_KEY>`);console.log(t),D.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),D.search.page=1}catch(e){throw console.error(`${e} 💥💥💥💥`),e}}(e),oe.render(V()),ae.render(D.search)}catch(e){console.log(e)}},pe=function(e){oe.render(V(e)),ae.render(D.search)},he=function(e){!function(e){D.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/D.recipe.servings})),D.recipe.servings=e}(e),ne.update(D.recipe)},fe=function(){D.recipe.bookmarked?function(e){const t=D.bookmarks.findIndex((t=>t.id===e));D.bookmarks.splice(t,1),e===D.recipe.id&&(D.recipe.bookmarked=!1),B()}(D.recipe.id):J(D.recipe),ne.update(D.recipe),ce.render(D.bookmarks)},ge=function(){ce.render(D.bookmarks)},me=async function(e){try{ue.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient fromat! Please use the correct format :)");const[n,r,i]=t;return{quantity:n?+n:null,unit:r,description:i}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await Y("https://forkify-api.herokuapp.com/api/v2/recipes/?key=<YOUR_KEY>",n);D.recipe=K(r),J(D.recipe)}catch(e){throw e}}(e),console.log(D.recipe),ne.render(D.recipe),ue.renderMessage(),ce.render(D.bookmarks),window.history.pushState(null,"",`#${D.recipe.id}`),setTimeout((function(){ue.toggleWindow()}),2500)}catch(e){console.error("💥",e),ue.renderError(e.message)}};ce.addHandlerRender(ge),ne.addHandlerRender(le),ne.addHandlerUpdateServings(he),ne.addHandlerAddBookmark(fe),re.addHandlerSearch(de),ae.addHandlerClick(pe),ue.addHandlerUpload(me);
//# sourceMappingURL=index.78a9cfe6.js.map
