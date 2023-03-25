(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"body{\n  font-family: 'Times New Roman', Times, serif;\n  background-color: beige;\n}\n\n.wrapper{\n  display: grid;\n  grid-template-rows: 100px 1fr 100px;\n}\n\n.title {\n  color: white;\n  font-size: 2.2rem;\n  margin-left: 30px;\n  min-width: 200px;\n}\n\n.header {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-items: center;\n  margin-bottom: 10px;\n  background-image: linear-gradient(to right, rgb(187, 151, 52), rgb(255, 255, 255));\n}\n\n.rightlinks{\n  gap: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nbutton{\n  border-style: none;\n  font-size: 1.7rem;\n  background-color: transparent;\n  font-family: 'Times New Roman', Times, serif;\n}\n\n.home:hover, .menu:hover, .contact:hover{\n  /* background-color: rgb(187, 151, 52); */\n  /* color: white;\n  cursor:grab;\n  border-radius: 10px; */\n  border-bottom: 5px solid black;\n}\n\n.frontImage{\n  margin: 0;\n  padding: 0;\n}\n\n.image1, .image2{\n  width: 100%;\n  height: 100%;\n}\n\n.description{\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-items: center;\n  margin-top: 10px;\n}\n\n.descTitle{\n  font-size: 2.5rem;\n  font-weight: 900;\n  text-align: center;\n}\n\n.descText2{\n  text-align: center;\n  font-size: 1.5rem;\n  margin-left: 50px;\n  margin-right: 50px;\n  margin-bottom: 30px;\n  font-weight: 700;\n}\n\n.footer{\n  background-color: black;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n",""]);const d=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],d=0;d<e.length;d++){var s=e[d],c=r.base?s[0]+r.base:s[0],l=a[c]||0,p="".concat(c," ").concat(l);a[c]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=o(m,r);r.byIndex=d,t.splice(d,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=n(a[i]);t[d].references--}for(var s=r(e,o),c=0;c<a.length;c++){var l=n(a[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),d=n(565),s=n.n(d),c=n(216),l=n.n(c),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=n.p+"24f57886eb395459e6c4.jpg",g=n.p+"f1dfefff05d1eebfc3d5.jpeg";console.log("Hello World");const b=document.getElementById("content"),v=document.createElement("div"),y=document.createElement("div"),C=document.createElement("div"),x=document.createElement("ul"),w=document.createElement("button"),E=document.createElement("button"),L=document.createElement("button"),k=document.createElement("div"),T=document.createElement("div"),j=document.createElement("div"),F=document.createElement("div"),S=document.createElement("div"),M=document.createElement("div"),I=document.createElement("p"),R=document.createElement("div"),O=document.createElement("footer"),A=document.createElement("img"),B=document.createElement("img");function N(e){const t=e;t.style.borderBottom="",t.style.backgroundColor="",t.style.color="",t.style.borderRadius=""}v.classList.add("wrapper"),y.classList.add("header"),C.classList.add("title"),x.classList.add("rightlinks"),w.classList.add("home"),E.classList.add("menu"),L.classList.add("contact"),k.classList.add("emptyheader"),T.classList.add("midsection"),j.classList.add("frontImage"),F.classList.add("description"),S.classList.add("descText"),M.classList.add("descText2"),I.classList.add("descTitle"),R.classList.add("descImage"),O.classList.add("footer"),A.classList.add("image1"),B.classList.add("image2"),window.addEventListener("load",(e=>{})),w.addEventListener("click",(()=>{N(E),N(L),function(e){const t=e;t.style.borderBottom="5px solid Black",t.style.backgroundColor="rgb(187, 151, 52)",t.style.color="white",t.style.borderRadius="10px"}(w),T.replaceChildren(),T.appendChild(j),T.appendChild(F),j.appendChild(A),A.src="./images/surfandturf.jpeg",A.alt="black plate on a table that includes cooked lobster cut in half on the left, a baked potato cut up in the middle, and a steak cut in slices on the right",F.appendChild(S),F.appendChild(R),S.appendChild(I),S.appendChild(M),I.textContent="Delicious Food Awaits!",M.textContent="Our food is made from fresh daily with the finest ingredients local to the area! Red Lobsters, Blue Oysters, Jumbo Shrimp, Fried Calamari, Filet Mingon, Ribeye, and more. From the surf to the turf and every delicious dish in between, this restuarant offers it all!",R.appendChild(B),B.src="./images/seafood.jpg",B.alt="bowl of seafood including lobster, shrimp, small octopus, over a bed of lettuce."}));window.addEventListener("load",(e=>{b.appendChild(v),v.appendChild(y),v.appendChild(T),v.appendChild(O),y.appendChild(C),y.appendChild(x),y.appendChild(k),C.textContent="Elegant Food",x.appendChild(w),x.appendChild(E),x.appendChild(L),w.textContent="Home",E.textContent="Menu",L.textContent="Contact",T.appendChild(j),T.appendChild(F),j.appendChild(A),A.src=g,A.alt="black plate on a table that includes cooked lobster cut in half on the left, a baked potato cut up in the middle, and a steak cut in slices on the right",F.appendChild(S),F.appendChild(R),S.appendChild(I),S.appendChild(M),I.textContent="Delicious Food Awaits!",M.textContent="Our food is made from fresh daily with the finest ingredients local to the area! Red Lobsters, Blue Oysters, Jumbo Shrimp, Fried Calamari, Filet Mingon, Ribeye, and more. From the surf to the turf and every delicious dish in between, this restuarant offers it all!",R.appendChild(B),B.src=h,B.alt="bowl of seafood including lobster, shrimp, small octopus, over a bed of lettuce.",O.textContent="The Odin Project 2023"}))})()})();