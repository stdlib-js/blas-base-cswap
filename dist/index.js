"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var x=f(function(I,j){
var m=require('@stdlib/strided-base-reinterpret-complex64/dist');function h(r,e,u,o,a,p,q){var t,s,n,y,d,i,v,c;if(r<=0)return a;for(t=m(e,0),s=m(a,0),y=u*2,d=p*2,i=o*2,v=q*2,c=0;c<r;c++)n=t[i],t[i]=s[v],s[v]=n,n=t[i+1],t[i+1]=s[v+1],s[v+1]=n,i+=y,v+=d;return a}j.exports=h
});var _=f(function(J,R){
var l=require('@stdlib/strided-base-stride2offset/dist'),k=x();function z(r,e,u,o,a){var p=l(r,u),q=l(r,a);return k(r,e,u,p,o,a,q)}R.exports=z
});var b=f(function(K,O){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=_(),B=x();A(E,"ndarray",B);O.exports=E
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=b(),w,g=D(C(__dirname,"./native.js"));F(g)?w=G:w=g;module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
