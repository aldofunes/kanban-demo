webpackJsonp([0,3],[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),a=r(o),u=n(1),l=r(u),i=n(2),c=r(i);l["default"].render(a["default"].createElement(c["default"],null),document.getElementById("app"))},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),f=n(3),s=r(f),d=n(5),v=r(d),p=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.addNote=function(){var e=n.state.notes;n.setState({notes:e.concat([{id:v["default"].v4(),task:"New Task"}])})},n.deleteNote=function(e,t){t.stopPropagation();var r=n.state.notes;n.setState({notes:r.filter(function(t){return t.id!==e})})},n.state={notes:[{id:v["default"].v4(),task:"Learn React"},{id:v["default"].v4(),task:"Do laundry"}]},n}return u(t,e),l(t,[{key:"render",value:function(){var e=this.state.notes;return c["default"].createElement("div",null,c["default"].createElement("button",{onClick:this.addNote},"+"),c["default"].createElement(s["default"],{notes:e,onDelete:this.deleteNote}))}}]),t}(c["default"].Component);t["default"]=p},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o),u=n(4),l=r(u),i=function(e){var t=e.notes,n=e.onDelete,r=void 0===n?function(){}:n;return a["default"].createElement("ul",null,t.map(function(e){return a["default"].createElement("li",{key:e.id},a["default"].createElement(l["default"],{task:e.task,onDelete:r.bind(null,e.id)}))}))};t["default"]=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o),u=function(e){var t=e.task,n=e.onDelete;return a["default"].createElement("div",null,a["default"].createElement("span",null,t),a["default"].createElement("button",{onClick:n},"X"))};t["default"]=u},function(e,t,n){function r(e,t,n){var r=t&&n||0,o=0;for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,function(e){o<16&&(t[r+o++]=c[e])});o<16;)t[r+o++]=0;return t}function o(e,t){var n=t||0,r=i;return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}function a(e,t,n){var r=t&&n||0,a=t||[];e=e||{};var u=void 0!==e.clockseq?e.clockseq:v,l=void 0!==e.msecs?e.msecs:(new Date).getTime(),i=void 0!==e.nsecs?e.nsecs:y+1,c=l-p+(i-y)/1e4;if(c<0&&void 0===e.clockseq&&(u=u+1&16383),(c<0||l>p)&&void 0===e.nsecs&&(i=0),i>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");p=l,y=i,v=u,l+=122192928e5;var f=(1e4*(268435455&l)+i)%4294967296;a[r++]=f>>>24&255,a[r++]=f>>>16&255,a[r++]=f>>>8&255,a[r++]=255&f;var s=l/4294967296*1e4&268435455;a[r++]=s>>>8&255,a[r++]=255&s,a[r++]=s>>>24&15|16,a[r++]=s>>>16&255,a[r++]=u>>>8|128,a[r++]=255&u;for(var m=e.node||d,b=0;b<6;b++)a[r+b]=m[b];return t?t:o(a)}function u(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null),e=e||{};var a=e.random||(e.rng||l)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var u=0;u<16;u++)t[r+u]=a[u];return t||o(a)}for(var l=n(6),i=[],c={},f=0;f<256;f++)i[f]=(f+256).toString(16).substr(1),c[i[f]]=f;var s=l(),d=[1|s[0],s[1],s[2],s[3],s[4],s[5]],v=16383&(s[6]<<8|s[7]),p=0,y=0,m=u;m.v1=a,m.v4=u,m.parse=r,m.unparse=o,e.exports=m},function(e,t){(function(t){var n,r=t.crypto||t.msCrypto;if(r&&r.getRandomValues){var o=new Uint8Array(16);n=function(){return r.getRandomValues(o),o}}if(!n){var a=new Array(16);n=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),a[t]=e>>>((3&t)<<3)&255;return a}}e.exports=n}).call(t,function(){return this}())}]);
//# sourceMappingURL=app.2ed409fecdbc3eaccaf1.js.map