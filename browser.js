// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,l=n.__defineGetter__,f=n.__defineSetter__,a=n.__lookupGetter__,u=n.__lookupSetter__,i=r,c=function(e,t,r){var i,c,y,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(a.call(e,t)||u.call(e,t)?(i=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=i):e[t]=r.value),y="get"in r,p="set"in r,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&l&&l.call(e,t,r.get),p&&f&&f.call(e,t,r.set),e},y=t()?i:c,p=function(e,t,r){y(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})},b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=Object.prototype.toString,s=_,d=function(e){return s.call(e)},m=Object.prototype.hasOwnProperty,g=function(e,t){return null!=e&&m.call(e,t)},v="function"==typeof Symbol?Symbol.toStringTag:"",w=g,h=v,j=_,O=d,S=function(e){var t,r,n;if(null==e)return j.call(e);r=e[h],t=w(e,h);try{e[h]=void 0}catch(t){return j.call(e)}return n=j.call(e),t?e[h]=r:delete e[h],n},A=b&&"symbol"==typeof Symbol.toStringTag?S:O,F="function"==typeof Float32Array,T=function(e){return F&&e instanceof Float32Array||"[object Float32Array]"===A(e)},P=Number.POSITIVE_INFINITY,E="function"==typeof Float32Array?Float32Array:null,I=T,x=P,N=E,V="function"==typeof Float32Array?Float32Array:void 0,k=function(){throw new Error("not implemented")},G=function(){var e,t;if("function"!=typeof N)return!1;try{t=new N([1,3.14,-3.14,5e40]),e=I(t)&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===x}catch(t){e=!1}return e}()?V:k;function C(e,t,r,n,o){var l,f,a,u,i,c,y,p,b;if(e<=0)return n;if(l=new G(t.buffer,t.byteOffset,2*t.length),f=new G(n.buffer,n.byteOffset,2*n.length),1===r&&1===o){for(p=0;p<2*e;p+=2)a=l[p],l[p]=f[p],f[p]=a,a=l[b=p+1],l[b]=f[b],f[b]=a;return n}for(c=r<0?2*(1-e)*r:0,y=o<0?2*(1-e)*o:0,u=2*r,i=2*o,p=0;p<e;p++)a=l[c],l[c]=f[y],f[y]=a,a=l[c+1],l[c+1]=f[y+1],f[y+1]=a,c+=u,y+=i;return n}return p(C,"ndarray",(function(e,t,r,n,o,l,f){var a,u,i,c,y,p,b,_;if(e<=0)return o;for(a=new G(t.buffer,t.byteOffset,2*t.length),u=new G(o.buffer,o.byteOffset,2*o.length),c=2*r,y=2*l,p=2*n,b=2*f,_=0;_<e;_++)i=a[p],a[p]=u[b],u[b]=i,i=a[p+1],a[p+1]=u[b+1],u[b+1]=i,p+=c,b+=y;return o})),C},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).cswap=t();
//# sourceMappingURL=browser.js.map