"use strict";var q=function(f,a){return function(){return a||f((a={exports:{}}).exports,a),a.exports}};var O=q(function(I,y){
var m=require('@stdlib/array-float32/dist');function _(f,a,c,o,n){var v,i,e,w,p,u,s,r,t;if(f<=0)return o;if(v=new m(a.buffer,a.byteOffset,a.length*2),i=new m(o.buffer,o.byteOffset,o.length*2),c===1&&n===1){for(r=0;r<f*2;r+=2)e=v[r],v[r]=i[r],i[r]=e,t=r+1,e=v[t],v[t]=i[t],i[t]=e;return o}for(c<0?u=2*(1-f)*c:u=0,n<0?s=2*(1-f)*n:s=0,w=c*2,p=n*2,r=0;r<f;r++)e=v[u],v[u]=i[s],i[s]=e,e=v[u+1],v[u+1]=i[s+1],i[s+1]=e,u+=w,s+=p;return o}y.exports=_
});var j=q(function(J,h){
var g=require('@stdlib/array-float32/dist');function E(f,a,c,o,n,v,i){var e,w,p,u,s,r,t,l;if(f<=0)return n;for(e=new g(a.buffer,a.byteOffset,a.length*2),w=new g(n.buffer,n.byteOffset,n.length*2),u=c*2,s=v*2,r=o*2,t=i*2,l=0;l<f;l++)p=e[r],e[r]=w[t],w[t]=p,p=e[r+1],e[r+1]=w[t+1],w[t+1]=p,r+=u,t+=s;return n}h.exports=E
});var F=q(function(K,A){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=O(),z=j();k(x,"ndarray",z);A.exports=x
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),G=F(),b,R=C(B(__dirname,"./native.js"));D(R)?b=G:b=R;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
