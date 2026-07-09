"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var x=f(function(I,j){
var m=require('@stdlib/strided-base-reinterpret-complex64/dist');function h(e,r,a,o,i,p,q){var s,u,n,y,d,v,t,c;if(e<=0)return i;for(s=m(r,0),u=m(i,0),y=a*2,d=p*2,v=o*2,t=q*2,c=0;c<e;c++)n=s[v],s[v]=u[t],u[t]=n,n=s[v+1],s[v+1]=u[t+1],u[t+1]=n,v+=y,t+=d;return i}j.exports=h
});var _=f(function(J,R){
var l=require('@stdlib/strided-base-stride2offset/dist'),k=x();function z(e,r,a,o,i){var p=l(e,a),q=l(e,i);return k(e,r,a,p,o,i,q)}R.exports=z
});var b=f(function(K,O){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=_(),B=x();A(E,"ndarray",B);O.exports=E
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=b(),w,g=D(C(__dirname,"./native.js"));F(g)?w=G:w=g;module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
