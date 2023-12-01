"use strict";var x=function(t,n){return function(){return n||t((n={exports:{}}).exports,n),n.exports}};var y=x(function(I,l){
var j=require('@stdlib/strided-base-reinterpret-complex64/dist');function k(t,n,c,q,p){var i,v,e,o,f,u,s,r,a;if(t<=0)return q;if(i=j(n,0),v=j(q,0),c===1&&p===1){for(r=0;r<t*2;r+=2)e=i[r],i[r]=v[r],v[r]=e,a=r+1,e=i[a],i[a]=v[a],v[a]=e;return q}for(c<0?u=2*(1-t)*c:u=0,p<0?s=2*(1-t)*p:s=0,o=c*2,f=p*2,r=0;r<t;r++)e=i[u],i[u]=v[s],v[s]=e,e=i[u+1],i[u+1]=v[s+1],v[s+1]=e,u+=o,s+=f;return q}l.exports=k
});var E=x(function(J,_){
var R=require('@stdlib/strided-base-reinterpret-complex64/dist');function z(t,n,c,q,p,i,v){var e,o,f,u,s,r,a,w;if(t<=0)return p;for(e=R(n,0),o=R(p,0),u=c*2,s=i*2,r=q*2,a=v*2,w=0;w<t;w++)f=e[r],e[r]=o[a],o[a]=f,f=e[r+1],e[r+1]=o[a+1],o[a+1]=f,r+=u,a+=s;return p}_.exports=z
});var g=x(function(K,b){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=y(),B=E();A(O,"ndarray",B);b.exports=O
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=g(),m,h=D(C(__dirname,"./native.js"));F(h)?m=G:m=h;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
