// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@esm/index.mjs";function s(e,r,s,n,d,i,o){var m,a,f,l,p,j,u,b;if(e<=0)return d;for(m=t(r,0),a=t(d,0),l=2*s,p=2*i,j=2*n,u=2*o,b=0;b<e;b++)f=m[j],m[j]=a[u],a[u]=f,f=m[j+1],m[j+1]=a[u+1],a[u+1]=f,j+=l,u+=p;return d}function n(e,t,n,d,i){return s(e,t,n,r(e,n),d,i,r(e,i))}e(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
