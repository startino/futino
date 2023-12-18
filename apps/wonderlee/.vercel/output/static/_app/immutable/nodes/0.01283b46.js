import{s as ge,c as it,n as pe,d as ue,e as he,f as re,u as ae,g as oe,h as ie,i as Ee,o as Se,j as nt,k as ft}from"../chunks/scheduler.55305828.js";import{S as me,i as _e,g as F,h as L,k as h,a as z,f as g,r as x,s as W,j as B,u as $,c as G,l as Pe,x as P,v as ee,d as E,t as O,w as te,y as de,m as K,n as X,o as se,z as ct,A as ke,p as J,b as Y,B as ut,C as Ce,D as ht,e as Ae,E as ve}from"../chunks/index.b4766217.js";import{P as dt}from"../chunks/Prose.70965972.js";import"../chunks/Inview.svelte_svelte_type_style_lang.815525a4.js";import{e as le}from"../chunks/each.e59479a4.js";import{I as gt}from"../chunks/Icon.5ec90ac4.js";import{s as He,f as Oe}from"../chunks/index.d29e4f8b.js";import{B as mt}from"../chunks/Button.b005e081.js";const _t=!0,ol=Object.freeze(Object.defineProperty({__proto__:null,prerender:_t},Symbol.toStringTag,{value:"Module"}));function bt(r){let e,t,l;return{c(){e=F("img"),this.h()},l(s){e=L(s,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){it(e.src,t="/favicon.png")||h(e,"src",t),h(e,"class",l=r[1].class+" "+r[0]),h(e,"alt","Logo")},m(s,a){z(s,e,a)},p(s,[a]){a&3&&l!==(l=s[1].class+" "+s[0])&&h(e,"class",l)},i:pe,o:pe,d(s){s&&g(e)}}}function pt(r,e,t){let{height:l="h-8"}=e;return r.$$set=s=>{t(1,e=ue(ue({},e),he(s))),"height"in s&&t(0,l=s.height)},e=he(e),[l,e]}class be extends me{constructor(e){super(),_e(this,e,pt,bt,ge,{height:0})}}function Fe(r,e,t){const l=r.slice();return l[10]=e[t][0],l[11]=e[t][1],l}function Le(r,e,t){const l=r.slice();return l[14]=e[t][0],l[15]=e[t][1],l}const vt=r=>({}),Be=r=>({});function De(r){let e,t;return{c(){e=F("p"),t=K(r[1]),this.h()},l(l){e=L(l,"P",{class:!0});var s=B(e);t=X(s,r[1]),s.forEach(g),this.h()},h(){h(e,"class","flex m-0 my-auto")},m(l,s){z(l,e,s),P(e,t)},p(l,s){s&2&&se(t,l[1])},d(l){l&&g(e)}}}function Ie(r){let e,t,l=r[14]+"",s,a;return{c(){e=F("a"),t=F("h6"),s=K(l),this.h()},l(o){e=L(o,"A",{href:!0,class:!0});var i=B(e);t=L(i,"H6",{});var n=B(t);s=X(n,l),n.forEach(g),i.forEach(g),this.h()},h(){h(e,"href",a=r[15]),h(e,"class","hover:underline m-0")},m(o,i){z(o,e,i),P(e,t),P(t,s)},p(o,i){i&1&&l!==(l=o[14]+"")&&se(s,l),i&1&&a!==(a=o[15])&&h(e,"href",a)},d(o){o&&g(e)}}}function Ne(r){let e,t,l=r[10]+"",s,a,o,i=le(Object.entries(r[11])),n=[];for(let f=0;f<i.length;f+=1)n[f]=Ie(Le(r,i,f));return{c(){e=F("div"),t=F("h6"),s=K(l),a=W();for(let f=0;f<n.length;f+=1)n[f].c();o=W(),this.h()},l(f){e=L(f,"DIV",{class:!0});var k=B(e);t=L(k,"H6",{class:!0});var c=B(t);s=X(c,l),c.forEach(g),a=G(k);for(let _=0;_<n.length;_+=1)n[_].l(k);o=G(k),k.forEach(g),this.h()},h(){h(t,"class","mb-1 font-bold m-0"),h(e,"class","flex flex-col gap-3 max-w-none prose-a:no-underline prose sm:prose-sm lg:prose-md prose-invert prose-main")},m(f,k){z(f,e,k),P(e,t),P(t,s),P(e,a);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(e,null);P(e,o)},p(f,k){if(k&1&&l!==(l=f[10]+"")&&se(s,l),k&1){i=le(Object.entries(f[11]));let c;for(c=0;c<i.length;c+=1){const _=Le(f,i,c);n[c]?n[c].p(_,k):(n[c]=Ie(_),n[c].c(),n[c].m(e,o))}for(;c<n.length;c+=1)n[c].d(1);n.length=i.length}},d(f){f&&g(e),de(n,f)}}}function kt(r){let e,t,l,s,a,o,i,n,f,k;a=new be({props:{class:"not-prose"}});let c=r[1]!="Company Name"&&De(r);const _=r[9].left,u=re(_,r,r[8],Be);let b=le(Object.entries(r[0])),C=[];for(let d=0;d<b.length;d+=1)C[d]=Ne(Fe(r,b,d));return{c(){e=F("footer"),t=F("div"),l=F("div"),s=F("a"),x(a.$$.fragment),o=W(),c&&c.c(),i=W(),u&&u.c(),n=W(),f=F("div");for(let d=0;d<C.length;d+=1)C[d].c();this.h()},l(d){e=L(d,"FOOTER",{class:!0});var S=B(e);t=L(S,"DIV",{class:!0});var p=B(t);l=L(p,"DIV",{class:!0});var D=B(l);s=L(D,"A",{class:!0,style:!0,href:!0});var M=B(s);$(a.$$.fragment,M),o=G(M),c&&c.l(M),M.forEach(g),i=G(D),u&&u.l(D),D.forEach(g),n=G(p),f=L(p,"DIV",{class:!0});var R=B(f);for(let H=0;H<C.length;H+=1)C[H].l(R);R.forEach(g),p.forEach(g),S.forEach(g),this.h()},h(){h(s,"class",""),Pe(s,"margin","0"),h(s,"href","/"),h(l,"class","flex flex-col gap-3 items-start prose-a:no-underline prose sm:prose-sm lg:prose-md prose-invert prose-main w-full"),h(f,"class","grid grid-cols-2 md:grid-cols-4 gap-12 justify-items-start items-start mt-3 sm:mt-0 w-full"),h(t,"class","flex text-left flex-col md:flex-row z-50 w-full py-24 items-start justify-start gap-8 px-6 md:px-18 lg:max-w-5xl xl:max-w-6xl mx-auto justify-items-start"),h(e,"class","max-w-none prose-a:no-underline prose sm:prose-sm lg:prose-md prose-invert prose-main bg-background")},m(d,S){z(d,e,S),P(e,t),P(t,l),P(l,s),ee(a,s,null),P(s,o),c&&c.m(s,null),P(l,i),u&&u.m(l,null),P(t,n),P(t,f);for(let p=0;p<C.length;p+=1)C[p]&&C[p].m(f,null);k=!0},p(d,[S]){if(d[1]!="Company Name"?c?c.p(d,S):(c=De(d),c.c(),c.m(s,null)):c&&(c.d(1),c=null),u&&u.p&&(!k||S&256)&&ae(u,_,d,d[8],k?ie(_,d[8],S,vt):oe(d[8]),Be),S&1){b=le(Object.entries(d[0]));let p;for(p=0;p<b.length;p+=1){const D=Fe(d,b,p);C[p]?C[p].p(D,S):(C[p]=Ne(D),C[p].c(),C[p].m(f,null))}for(;p<C.length;p+=1)C[p].d(1);C.length=b.length}},i(d){k||(E(a.$$.fragment,d),E(u,d),k=!0)},o(d){O(a.$$.fragment,d),O(u,d),k=!1},d(d){d&&g(e),te(a),c&&c.d(),u&&u.d(d),de(C,d)}}}function yt(r,e,t){let{$$slots:l={},$$scope:s}=e,{pages:a={Explore:{Home:"/",About:"/"},Legal:{"Privacy Policy":"/","Tems of Service":"/"},Support:{Skills:"/",FAQ:"/"},Company:{Careers:"/",Blog:"/"}}}=e,{companyName:o="Company Name"}=e,{background:i=""}=e,{border:n=" border-outline"}=e,{padding:f=""}=e,{shadow:k=""}=e,{gap:c="gap-6"}=e,{typography:_="text-primary"}=e;return r.$$set=u=>{"pages"in u&&t(0,a=u.pages),"companyName"in u&&t(1,o=u.companyName),"background"in u&&t(2,i=u.background),"border"in u&&t(3,n=u.border),"padding"in u&&t(4,f=u.padding),"shadow"in u&&t(5,k=u.shadow),"gap"in u&&t(6,c=u.gap),"typography"in u&&t(7,_=u.typography),"$$scope"in u&&t(8,s=u.$$scope)},[a,o,i,n,f,k,c,_,s,l]}class Et extends me{constructor(e){super(),_e(this,e,yt,kt,ge,{pages:0,companyName:1,background:2,border:3,padding:4,shadow:5,gap:6,typography:7})}}function Te(r,e,t){const l=r.slice();return l[31]=e[t][0],l[32]=e[t][1].href,l[33]=e[t][1].highlight,l}function Ve(r,e,t){const l=r.slice();return l[36]=e[t][0],l[32]=e[t][1],l[38]=t,l}function Re(r,e,t){const l=r.slice();return l[36]=e[t][0],l[32]=e[t][1],l}function ze(r){let e,t,l,s,a,o,i,n,f,k,c,_=le(Object.entries(r[1])),u=[];for(let b=0;b<_.length;b+=1)u[b]=we(Re(r,_,b));return{c(){e=F("div"),t=F("div"),l=W(),s=F("div"),a=F("nav");for(let b=0;b<u.length;b+=1)u[b].c();this.h()},l(b){e=L(b,"DIV",{class:!0});var C=B(e);t=L(C,"DIV",{class:!0}),B(t).forEach(g),l=G(C),s=L(C,"DIV",{class:!0});var d=B(s);a=L(d,"NAV",{class:!0});var S=B(a);for(let p=0;p<u.length;p+=1)u[p].l(S);S.forEach(g),d.forEach(g),C.forEach(g),this.h()},h(){h(t,"class","bg-black/50 absolute w-screen h-screen backdrop-blur-sm"),h(a,"class","text-center flex flex-col gap-6 headline-medium"),h(s,"class","absolute z-50 p-12 w-full mx-auto my-auto top-0 bottom-0 flex flex-col items-center gap-4 left-0 right-0 h-fit max-w-xs md:max-w-xl bg-surface rounded-lg shadow-lg"),h(e,"class","fixed inset-0 z-50")},m(b,C){z(b,e,C),P(e,t),P(e,l),P(e,s),P(s,a);for(let d=0;d<u.length;d+=1)u[d]&&u[d].m(a,null);f=!0,k||(c=ke(t,"click",r[12]),k=!0)},p(b,C){if(C[0]&4098){_=le(Object.entries(b[1]));let d;for(d=0;d<_.length;d+=1){const S=Re(b,_,d);u[d]?u[d].p(S,C):(u[d]=we(S),u[d].c(),u[d].m(a,null))}for(;d<u.length;d+=1)u[d].d(1);u.length=_.length}},i(b){f||(b&&Ee(()=>{f&&(i&&i.end(1),o=ut(s,He,{delay:200,duration:300}),o.start())}),b&&Ee(()=>{f&&(n||(n=Ce(e,Oe,{},!0)),n.run(1))}),f=!0)},o(b){o&&o.invalidate(),b&&(i=ht(s,He,{})),b&&(n||(n=Ce(e,Oe,{},!1)),n.run(0)),f=!1},d(b){b&&g(e),de(u,b),b&&i&&i.end(),b&&n&&n.end(),k=!1,c()}}}function we(r){let e,t=r[36]+"",l,s,a,o,i;return{c(){e=F("a"),l=K(t),s=W(),this.h()},l(n){e=L(n,"A",{class:!0,href:!0});var f=B(e);l=X(f,t),s=G(f),f.forEach(g),this.h()},h(){h(e,"class","text-surface-on hover:text-tertiary hover:scale-105 transition duration-200"),h(e,"href",a=r[32])},m(n,f){z(n,e,f),P(e,l),P(e,s),o||(i=ke(e,"click",r[12]),o=!0)},p(n,f){f[0]&2&&t!==(t=n[36]+"")&&se(l,t),f[0]&2&&a!==(a=n[32])&&h(e,"href",a)},d(n){n&&g(e),o=!1,i()}}}function Pt(r){let e,t,l,s,a,o;return t=new be({props:{height:"h-10"}}),{c(){e=F("a"),x(t.$$.fragment),l=W(),s=F("p"),a=K(r[4]),this.h()},l(i){e=L(i,"A",{class:!0,href:!0});var n=B(e);$(t.$$.fragment,n),l=G(n),s=L(n,"P",{class:!0});var f=B(s);a=X(f,r[4]),f.forEach(g),n.forEach(g),this.h()},h(){h(s,"class","hidden sm:flex text-xl my-auto"),h(e,"class","flex md:hidden gap-3 not-prose justify-self-start mr-auto"),h(e,"href","/")},m(i,n){z(i,e,n),ee(t,e,null),P(e,l),P(e,s),P(s,a),o=!0},p(i,n){(!o||n[0]&16)&&se(a,i[4])},i(i){o||(E(t.$$.fragment,i),o=!0)},o(i){O(t.$$.fragment,i),o=!1},d(i){i&&g(e),te(t)}}}function St(r){let e,t,l,s,a,o;return t=new be({}),{c(){e=F("a"),x(t.$$.fragment),l=W(),s=F("p"),a=K(r[4]),this.h()},l(i){e=L(i,"A",{class:!0,href:!0});var n=B(e);$(t.$$.fragment,n),l=G(n),s=L(n,"P",{class:!0});var f=B(s);a=X(f,r[4]),f.forEach(g),n.forEach(g),this.h()},h(){h(s,"class","hidden sm:flex text-xl my-auto"),h(e,"class","flex gap-3 not-prose justify-self-start mr-auto"),h(e,"href","/")},m(i,n){z(i,e,n),ee(t,e,null),P(e,l),P(e,s),P(s,a),o=!0},p(i,n){(!o||n[0]&16)&&se(a,i[4])},i(i){o||(E(t.$$.fragment,i),o=!0)},o(i){O(t.$$.fragment,i),o=!1},d(i){i&&g(e),te(t)}}}function We(r){let e,t,l,s,a,o,i;return t=new be({props:{height:"h-10"}}),{c(){e=F("a"),x(t.$$.fragment),l=W(),s=F("p"),a=K(r[4]),o=W(),this.h()},l(n){e=L(n,"A",{class:!0,href:!0});var f=B(e);$(t.$$.fragment,f),l=G(f),s=L(f,"P",{class:!0});var k=B(s);a=X(k,r[4]),k.forEach(g),o=G(f),f.forEach(g),this.h()},h(){h(s,"class","hidden sm:flex text-xl my-auto"),h(e,"class","flex gap-3 not-prose"),h(e,"href","/")},m(n,f){z(n,e,f),ee(t,e,null),P(e,l),P(e,s),P(s,a),P(e,o),i=!0},p(n,f){(!i||f[0]&16)&&se(a,n[4])},i(n){i||(E(t.$$.fragment,n),i=!0)},o(n){O(t.$$.fragment,n),i=!1},d(n){n&&g(e),te(t)}}}function Ge(r){let e,t,l=r[36]+"",s,a,o,i,n=r[5]=="center"&&r[38]==Object.entries(r[1]).length/2-1,f,k,c=n&&We(r);return{c(){e=F("a"),t=F("h6"),s=K(l),i=W(),c&&c.c(),f=Ae(),this.h()},l(_){e=L(_,"A",{class:!0,href:!0});var u=B(e);t=L(u,"H6",{class:!0});var b=B(t);s=X(b,l),b.forEach(g),u.forEach(g),i=G(_),c&&c.l(_),f=Ae(),this.h()},h(){h(t,"class","m-0 sm:m-0"),h(e,"class",a="text-center "+r[0]),h(e,"href",o=r[32])},m(_,u){z(_,e,u),P(e,t),P(t,s),z(_,i,u),c&&c.m(_,u),z(_,f,u),k=!0},p(_,u){(!k||u[0]&2)&&l!==(l=_[36]+"")&&se(s,l),(!k||u[0]&1&&a!==(a="text-center "+_[0]))&&h(e,"class",a),(!k||u[0]&2&&o!==(o=_[32]))&&h(e,"href",o),u[0]&34&&(n=_[5]=="center"&&_[38]==Object.entries(_[1]).length/2-1),n?c?(c.p(_,u),u[0]&34&&E(c,1)):(c=We(_),c.c(),E(c,1),c.m(f.parentNode,f)):c&&(J(),O(c,1,1,()=>{c=null}),Y())},i(_){k||(E(c),k=!0)},o(_){O(c),k=!1},d(_){_&&(g(e),g(i),g(f)),c&&c.d(_)}}}function jt(r){let e=r[31]+"",t,l;return{c(){t=K(e),l=W()},l(s){t=X(s,e),l=G(s)},m(s,a){z(s,t,a),z(s,l,a)},p(s,a){a[0]&4&&e!==(e=s[31]+"")&&se(t,e)},d(s){s&&(g(t),g(l))}}}function Me(r){let e,t;return e=new mt({props:{variant:r[7],class:"w-full",highlight:r[33],href:r[32],$$slots:{default:[jt]},$$scope:{ctx:r}}}),{c(){x(e.$$.fragment)},l(l){$(e.$$.fragment,l)},m(l,s){ee(e,l,s),t=!0},p(l,s){const a={};s[0]&128&&(a.variant=l[7]),s[0]&4&&(a.highlight=l[33]),s[0]&4&&(a.href=l[32]),s[0]&4|s[1]&1024&&(a.$$scope={dirty:s,ctx:l}),e.$set(a)},i(l){t||(E(e.$$.fragment,l),t=!0)},o(l){O(e.$$.fragment,l),t=!1},d(l){te(e,l)}}}function Ue(r){let e,t,l,s,a,o;return t=new be({}),{c(){e=F("a"),x(t.$$.fragment),l=W(),s=F("p"),a=K(r[4]),this.h()},l(i){e=L(i,"A",{class:!0,href:!0});var n=B(e);$(t.$$.fragment,n),l=G(n),s=L(n,"P",{class:!0});var f=B(s);a=X(f,r[4]),f.forEach(g),n.forEach(g),this.h()},h(){h(s,"class","hidden sm:flex text-xl my-auto"),h(e,"class","flex gap-3 not-prose"),h(e,"href","/")},m(i,n){z(i,e,n),ee(t,e,null),P(e,l),P(e,s),P(s,a),o=!0},p(i,n){(!o||n[0]&16)&&se(a,i[4])},i(i){o||(E(t.$$.fragment,i),o=!0)},o(i){O(t.$$.fragment,i),o=!1},d(i){i&&g(e),te(t)}}}function Ct(r){let e,t,l,s,a,o,i,n,f,k,c,_,u,b,C,d,S,p,D,M,R,H,A=r[9]&&ze(r);const N=[St,Pt],j=[];function y(m,I){return m[5]=="leading"?0:1}a=y(r),o=j[a]=N[a](r);let U=le(Object.entries(r[1])),T=[];for(let m=0;m<U.length;m+=1)T[m]=Ge(Ve(r,U,m));const ne=m=>O(T[m],1,1,()=>{T[m]=null});let Z=le(Object.entries(r[2])),w=[];for(let m=0;m<Z.length;m+=1)w[m]=Me(Te(r,Z,m));const ye=m=>O(w[m],1,1,()=>{w[m]=null});let v=r[5]=="trailing"&&Ue(r);return d=new gt({props:{height:"32",width:"32",fill:"none",icon:r[9]?"cross":"burger"}}),{c(){A&&A.c(),e=W(),t=F("header"),l=F("div"),s=F("div"),o.c(),i=W(),n=F("nav");for(let m=0;m<T.length;m+=1)T[m].c();k=W(),c=F("div");for(let m=0;m<w.length;m+=1)w[m].c();u=W(),v&&v.c(),b=W(),C=F("button"),x(d.$$.fragment),this.h()},l(m){A&&A.l(m),e=G(m),t=L(m,"HEADER",{id:!0,class:!0});var I=B(t);l=L(I,"DIV",{class:!0});var q=B(l);s=L(q,"DIV",{class:!0});var Q=B(s);o.l(Q),i=G(Q),n=L(Q,"NAV",{class:!0});var V=B(n);for(let ce=0;ce<T.length;ce+=1)T[ce].l(V);V.forEach(g),k=G(Q),c=L(Q,"DIV",{class:!0});var fe=B(c);for(let ce=0;ce<w.length;ce+=1)w[ce].l(fe);fe.forEach(g),u=G(Q),v&&v.l(Q),b=G(Q),C=L(Q,"BUTTON",{class:!0});var je=B(C);$(d.$$.fragment,je),je.forEach(g),Q.forEach(g),q.forEach(g),I.forEach(g),this.h()},h(){h(n,"class",f="hidden "+(r[5]=="center"?`col-span-5 md:grid justify-between w-full h-full place-items-center grid-cols-${Object.entries(r[1]).length+1}`:"md:flex col-span-3 ")+" mx-auto "+r[6]+" justify-self-center"),h(c,"class",_="hidden md:flex grid grid-cols-"+Object.entries(r[2]).length+" gap-4 md:gap-6 place-items-center w-fit justify-self-end"),h(C,"class","flex md:hidden stroke-primary hover:stroke-tertiary"),h(s,"class","flex md:grid md:grid-cols-5 z-50 items-center w-full justify-center px-6 max-w-7xl mx-auto"),h(l,"class",S=r[11]+" "+r[8]+" z-40 relative transition transition-[padding] duration-400"),h(t,"id","header"),h(t,"class",p=(r[3]?"fixed":"")+" z-40 w-full transition duration-400 justify-items-center"),Ee(()=>r[25].call(t))},m(m,I){A&&A.m(m,I),z(m,e,I),z(m,t,I),P(t,l),P(l,s),j[a].m(s,null),P(s,i),P(s,n);for(let q=0;q<T.length;q+=1)T[q]&&T[q].m(n,null);P(s,k),P(s,c);for(let q=0;q<w.length;q+=1)w[q]&&w[q].m(c,null);P(s,u),v&&v.m(s,null),P(s,b),P(s,C),ee(d,C,null),D=ct(t,r[25].bind(t)),M=!0,R||(H=ke(C,"click",r[12]),R=!0)},p(m,I){m[9]?A?(A.p(m,I),I[0]&512&&E(A,1)):(A=ze(m),A.c(),E(A,1),A.m(e.parentNode,e)):A&&(J(),O(A,1,1,()=>{A=null}),Y());let q=a;if(a=y(m),a===q?j[a].p(m,I):(J(),O(j[q],1,1,()=>{j[q]=null}),Y(),o=j[a],o?o.p(m,I):(o=j[a]=N[a](m),o.c()),E(o,1),o.m(s,i)),I[0]&51){U=le(Object.entries(m[1]));let V;for(V=0;V<U.length;V+=1){const fe=Ve(m,U,V);T[V]?(T[V].p(fe,I),E(T[V],1)):(T[V]=Ge(fe),T[V].c(),E(T[V],1),T[V].m(n,null))}for(J(),V=U.length;V<T.length;V+=1)ne(V);Y()}if((!M||I[0]&98&&f!==(f="hidden "+(m[5]=="center"?`col-span-5 md:grid justify-between w-full h-full place-items-center grid-cols-${Object.entries(m[1]).length+1}`:"md:flex col-span-3 ")+" mx-auto "+m[6]+" justify-self-center"))&&h(n,"class",f),I[0]&132){Z=le(Object.entries(m[2]));let V;for(V=0;V<Z.length;V+=1){const fe=Te(m,Z,V);w[V]?(w[V].p(fe,I),E(w[V],1)):(w[V]=Me(fe),w[V].c(),E(w[V],1),w[V].m(c,null))}for(J(),V=Z.length;V<w.length;V+=1)ye(V);Y()}(!M||I[0]&4&&_!==(_="hidden md:flex grid grid-cols-"+Object.entries(m[2]).length+" gap-4 md:gap-6 place-items-center w-fit justify-self-end"))&&h(c,"class",_),m[5]=="trailing"?v?(v.p(m,I),I[0]&32&&E(v,1)):(v=Ue(m),v.c(),E(v,1),v.m(s,b)):v&&(J(),O(v,1,1,()=>{v=null}),Y());const Q={};I[0]&512&&(Q.icon=m[9]?"cross":"burger"),d.$set(Q),(!M||I[0]&2304&&S!==(S=m[11]+" "+m[8]+" z-40 relative transition transition-[padding] duration-400"))&&h(l,"class",S),(!M||I[0]&8&&p!==(p=(m[3]?"fixed":"")+" z-40 w-full transition duration-400 justify-items-center"))&&h(t,"class",p)},i(m){if(!M){E(A),E(o);for(let I=0;I<U.length;I+=1)E(T[I]);for(let I=0;I<Z.length;I+=1)E(w[I]);E(v),E(d.$$.fragment,m),M=!0}},o(m){O(A),O(o),T=T.filter(Boolean);for(let I=0;I<T.length;I+=1)O(T[I]);w=w.filter(Boolean);for(let I=0;I<w.length;I+=1)O(w[I]);O(v),O(d.$$.fragment,m),M=!1},d(m){m&&(g(e),g(t)),A&&A.d(m),j[a].d(),de(T,m),de(w,m),v&&v.d(),te(d),D(),R=!1,H()}}}function At(r,e,t){let l,{pages:s={Home:"/"}}=e,{CTAButtons:a={}}=e,{sticky:o=!0}=e,{dualTheme:i=!0}=e,{companyName:n="Company Name"}=e,{logoPos:f="leading"}=e,{bgBig:k=""}=e,{bgSmall:c=""}=e,{maxWidth:_=""}=e,{border:u=""}=e,{paddingBig:b=""}=e,{paddingSmall:C=""}=e,{margin:d="mx-auto"}=e,{top:S=""}=e,{radius:p=""}=e,{shadow:D=""}=e,{gap:M="gap-6"}=e,{typography:R=""}=e,{variant:H="normal"}=e,{buttonVariant:A="normal"}=e;const N={normal:{colors:["bg-transparent","bg-transparent"],border:"border-b border-primary/40",padding:["py-10","py-3 md:py-4"],radius:"rounded-none",typography:"text-surface-on",top:"top-0"},pill:{colors:["bg-surface","bg-surface"],border:"",padding:["py-4 px-4","py-2 px-2 md:py-4 md:px-4"],radius:"rounded-full",typography:"text-surface-on",top:"top-4",margin:"",maxWidth:"max-w-5xl"}};function j(){t(18,k=k||N[H].colors[0]),t(19,c=c||N[H].colors[1]),t(20,b=b||N[H].padding[0]),t(21,C=C||N[H].padding[1]),t(15,d=d||N[H].margin),t(14,u=u||N[H].border),t(17,p=p||N[H].radius),t(16,S=S||N[H].top),t(13,_=_||N[H].maxWidth),t(0,R=R||N[H].typography)}j();let y=`${b} ${k}`,U=`${C} ${c} ${u} backdrop-blur`,T=y,ne=!1,Z;function w(){t(9,ne=!ne)}Se(()=>{window.addEventListener("scroll",()=>{t(8,T=window.scrollY>12&&o?U:y)})});function ye(){Z=this.clientHeight,t(10,Z)}return r.$$set=v=>{t(30,e=ue(ue({},e),he(v))),"pages"in v&&t(1,s=v.pages),"CTAButtons"in v&&t(2,a=v.CTAButtons),"sticky"in v&&t(3,o=v.sticky),"dualTheme"in v&&t(22,i=v.dualTheme),"companyName"in v&&t(4,n=v.companyName),"logoPos"in v&&t(5,f=v.logoPos),"bgBig"in v&&t(18,k=v.bgBig),"bgSmall"in v&&t(19,c=v.bgSmall),"maxWidth"in v&&t(13,_=v.maxWidth),"border"in v&&t(14,u=v.border),"paddingBig"in v&&t(20,b=v.paddingBig),"paddingSmall"in v&&t(21,C=v.paddingSmall),"margin"in v&&t(15,d=v.margin),"top"in v&&t(16,S=v.top),"radius"in v&&t(17,p=v.radius),"shadow"in v&&t(23,D=v.shadow),"gap"in v&&t(6,M=v.gap),"typography"in v&&t(0,R=v.typography),"variant"in v&&t(24,H=v.variant),"buttonVariant"in v&&t(7,A=v.buttonVariant)},r.$$.update=()=>{t(11,l=`${_} ${d} ${D} ${u} ${p} ${S} ${e.class} ${R}`)},e=he(e),[R,s,a,o,n,f,M,A,T,ne,Z,l,w,_,u,d,S,p,k,c,b,C,i,D,H,ye]}class Ht extends me{constructor(e){super(),_e(this,e,At,Ct,ge,{pages:1,CTAButtons:2,sticky:3,dualTheme:22,companyName:4,logoPos:5,bgBig:18,bgSmall:19,maxWidth:13,border:14,paddingBig:20,paddingSmall:21,margin:15,top:16,radius:17,shadow:23,gap:6,typography:0,variant:24,buttonVariant:7},null,[-1,-1])}}const Ot=r=>({}),qe=r=>({}),Ft=r=>({}),Qe=r=>({}),Lt=r=>({}),Je=r=>({}),Bt=r=>({}),Ye=r=>({}),Dt=r=>({}),Ke=r=>({}),It=r=>({}),Xe=r=>({});function Ze(r){let e,t,l;const s=r[21].header,a=re(s,r,r[20],Xe);return{c(){e=F("header"),a&&a.c(),this.h()},l(o){e=L(o,"HEADER",{id:!0,class:!0});var i=B(e);a&&a.l(i),i.forEach(g),this.h()},h(){h(e,"id","shell-header"),h(e,"class",t="flex-none "+r[9]+" "+(r[2]?"opacity-100":"opacity-0")+" transition-opacity"),ve(e,"invisible",!r[2])},m(o,i){z(o,e,i),a&&a.m(e,null),l=!0},p(o,i){a&&a.p&&(!l||i&1048576)&&ae(a,s,o,o[20],l?ie(s,o[20],i,It):oe(o[20]),Xe),(!l||i&516&&t!==(t="flex-none "+o[9]+" "+(o[2]?"opacity-100":"opacity-0")+" transition-opacity"))&&h(e,"class",t),(!l||i&516)&&ve(e,"invisible",!o[2])},i(o){l||(E(a,o),l=!0)},o(o){O(a,o),l=!1},d(o){o&&g(e),a&&a.d(o)}}}function xe(r){let e,t;const l=r[21].sidebarLeft,s=re(l,r,r[20],Ke);return{c(){e=F("aside"),s&&s.c(),this.h()},l(a){e=L(a,"ASIDE",{id:!0,class:!0});var o=B(e);s&&s.l(o),o.forEach(g),this.h()},h(){h(e,"id","sidebar-left"),h(e,"class",r[8])},m(a,o){z(a,e,o),s&&s.m(e,null),t=!0},p(a,o){s&&s.p&&(!t||o&1048576)&&ae(s,l,a,a[20],t?ie(l,a[20],o,Dt):oe(a[20]),Ke),(!t||o&256)&&h(e,"class",a[8])},i(a){t||(E(s,a),t=!0)},o(a){O(s,a),t=!1},d(a){a&&g(e),s&&s.d(a)}}}function $e(r){let e,t,l;const s=r[21].pageHeader,a=re(s,r,r[20],Ye),o=a||Nt();return{c(){e=F("header"),o&&o.c(),this.h()},l(i){e=L(i,"HEADER",{id:!0,class:!0});var n=B(e);o&&o.l(n),n.forEach(g),this.h()},h(){h(e,"id","page-header"),h(e,"class",t="flex-none "+r[6])},m(i,n){z(i,e,n),o&&o.m(e,null),l=!0},p(i,n){a&&a.p&&(!l||n&1048576)&&ae(a,s,i,i[20],l?ie(s,i[20],n,Bt):oe(i[20]),Ye),(!l||n&64&&t!==(t="flex-none "+i[6]))&&h(e,"class",t)},i(i){l||(E(o,i),l=!0)},o(i){O(o,i),l=!1},d(i){i&&g(e),o&&o.d(i)}}}function Nt(r){let e;return{c(){e=K("(slot:header)")},l(t){e=X(t,"(slot:header)")},m(t,l){z(t,e,l)},d(t){t&&g(e)}}}function et(r){let e,t,l;const s=r[21].pageFooter,a=re(s,r,r[20],Je),o=a||Tt();return{c(){e=F("footer"),o&&o.c(),this.h()},l(i){e=L(i,"FOOTER",{id:!0,class:!0});var n=B(e);o&&o.l(n),n.forEach(g),this.h()},h(){h(e,"id","page-footer"),h(e,"class",t="flex-none "+r[4])},m(i,n){z(i,e,n),o&&o.m(e,null),l=!0},p(i,n){a&&a.p&&(!l||n&1048576)&&ae(a,s,i,i[20],l?ie(s,i[20],n,Lt):oe(i[20]),Je),(!l||n&16&&t!==(t="flex-none "+i[4]))&&h(e,"class",t)},i(i){l||(E(o,i),l=!0)},o(i){O(o,i),l=!1},d(i){i&&g(e),o&&o.d(i)}}}function Tt(r){let e;return{c(){e=K("(slot:footer)")},l(t){e=X(t,"(slot:footer)")},m(t,l){z(t,e,l)},d(t){t&&g(e)}}}function tt(r){let e,t;const l=r[21].sidebarRight,s=re(l,r,r[20],Qe);return{c(){e=F("aside"),s&&s.c(),this.h()},l(a){e=L(a,"ASIDE",{id:!0,class:!0});var o=B(e);s&&s.l(o),o.forEach(g),this.h()},h(){h(e,"id","sidebar-right"),h(e,"class",r[7])},m(a,o){z(a,e,o),s&&s.m(e,null),t=!0},p(a,o){s&&s.p&&(!t||o&1048576)&&ae(s,l,a,a[20],t?ie(l,a[20],o,Ft):oe(a[20]),Qe),(!t||o&128)&&h(e,"class",a[7])},i(a){t||(E(s,a),t=!0)},o(a){O(s,a),t=!1},d(a){a&&g(e),s&&s.d(a)}}}function lt(r){let e,t,l;const s=r[21].footer,a=re(s,r,r[20],qe);return{c(){e=F("footer"),a&&a.c(),this.h()},l(o){e=L(o,"FOOTER",{id:!0,class:!0});var i=B(e);a&&a.l(i),i.forEach(g),this.h()},h(){h(e,"id","shell-footer"),h(e,"class",t="flex-none "+r[3])},m(o,i){z(o,e,i),a&&a.m(e,null),l=!0},p(o,i){a&&a.p&&(!l||i&1048576)&&ae(a,s,o,o[20],l?ie(s,o[20],i,Ot):oe(o[20]),qe),(!l||i&8&&t!==(t="flex-none "+o[3]))&&h(e,"class",t)},i(o){l||(E(a,o),l=!0)},o(o){O(a,o),l=!1},d(o){o&&g(e),a&&a.d(o)}}}function Vt(r){let e,t,l,s,a,o,i,n,f,k,c,_,u,b,C,d,S=r[11].header&&Ze(r),p=r[11].sidebarLeft&&xe(r),D=r[11].pageHeader&&$e(r);const M=r[21].default,R=re(M,r,r[20],null);let H=r[11].pageFooter&&et(r),A=r[11].sidebarRight&&tt(r),N=r[11].footer&&lt(r);return{c(){e=F("div"),S&&S.c(),t=W(),l=F("div"),p&&p.c(),s=W(),a=F("div"),D&&D.c(),o=W(),i=F("main"),R&&R.c(),f=W(),H&&H.c(),c=W(),A&&A.c(),u=W(),N&&N.c(),this.h()},l(j){e=L(j,"DIV",{id:!0,class:!0,"data-testid":!0});var y=B(e);S&&S.l(y),t=G(y),l=L(y,"DIV",{class:!0});var U=B(l);p&&p.l(U),s=G(U),a=L(U,"DIV",{id:!0,class:!0});var T=B(a);D&&D.l(T),o=G(T),i=L(T,"MAIN",{id:!0,class:!0});var ne=B(i);R&&R.l(ne),ne.forEach(g),f=G(T),H&&H.l(T),T.forEach(g),c=G(U),A&&A.l(U),U.forEach(g),u=G(y),N&&N.l(y),y.forEach(g),this.h()},h(){h(i,"id","page-content"),h(i,"class",n="flex-auto "+r[5]),h(a,"id","page"),h(a,"class",k=r[1]+" "+rt),Pe(a,"scrollbar-gutter",r[0]),h(l,"class",_="flex-auto "+(r[2]?"opacity-100":"opacity-0")+" transition-opacity duration-300 "+st),ve(l,"invisible",!r[2]),h(e,"id","appShell"),h(e,"class",r[10]),h(e,"data-testid","app-shell")},m(j,y){z(j,e,y),S&&S.m(e,null),P(e,t),P(e,l),p&&p.m(l,null),P(l,s),P(l,a),D&&D.m(a,null),P(a,o),P(a,i),R&&R.m(i,null),P(a,f),H&&H.m(a,null),P(l,c),A&&A.m(l,null),P(e,u),N&&N.m(e,null),b=!0,C||(d=ke(a,"scroll",r[22]),C=!0)},p(j,[y]){j[11].header?S?(S.p(j,y),y&2048&&E(S,1)):(S=Ze(j),S.c(),E(S,1),S.m(e,t)):S&&(J(),O(S,1,1,()=>{S=null}),Y()),j[11].sidebarLeft?p?(p.p(j,y),y&2048&&E(p,1)):(p=xe(j),p.c(),E(p,1),p.m(l,s)):p&&(J(),O(p,1,1,()=>{p=null}),Y()),j[11].pageHeader?D?(D.p(j,y),y&2048&&E(D,1)):(D=$e(j),D.c(),E(D,1),D.m(a,o)):D&&(J(),O(D,1,1,()=>{D=null}),Y()),R&&R.p&&(!b||y&1048576)&&ae(R,M,j,j[20],b?ie(M,j[20],y,null):oe(j[20]),null),(!b||y&32&&n!==(n="flex-auto "+j[5]))&&h(i,"class",n),j[11].pageFooter?H?(H.p(j,y),y&2048&&E(H,1)):(H=et(j),H.c(),E(H,1),H.m(a,null)):H&&(J(),O(H,1,1,()=>{H=null}),Y()),(!b||y&2&&k!==(k=j[1]+" "+rt))&&h(a,"class",k),y&1&&Pe(a,"scrollbar-gutter",j[0]),j[11].sidebarRight?A?(A.p(j,y),y&2048&&E(A,1)):(A=tt(j),A.c(),E(A,1),A.m(l,null)):A&&(J(),O(A,1,1,()=>{A=null}),Y()),(!b||y&4&&_!==(_="flex-auto "+(j[2]?"opacity-100":"opacity-0")+" transition-opacity duration-300 "+st))&&h(l,"class",_),(!b||y&4)&&ve(l,"invisible",!j[2]),j[11].footer?N?(N.p(j,y),y&2048&&E(N,1)):(N=lt(j),N.c(),E(N,1),N.m(e,null)):N&&(J(),O(N,1,1,()=>{N=null}),Y()),(!b||y&1024)&&h(e,"class",j[10])},i(j){b||(E(S),E(p),E(D),E(R,j),E(H),E(A),E(N),b=!0)},o(j){O(S),O(p),O(D),O(R,j),O(H),O(A),O(N),b=!1},d(j){j&&g(e),S&&S.d(),p&&p.d(),D&&D.d(),R&&R.d(j),H&&H.d(),A&&A.d(),N&&N.d(),C=!1,d()}}}const Rt="w-full h-full flex flex-col overflow-hidden",st="w-full h-full flex overflow-hidden",rt="flex-1 overflow-x-hidden flex flex-col ",zt="flex-none overflow-x-hidden overflow-y-auto",wt="flex-none overflow-x-hidden overflow-y-auto";function Wt(r,e,t){let l,s,a,o,i,n,f,k,{$$slots:c={},$$scope:_}=e;const u=nt(c);var b;let{scrollbarGutter:C="auto"}=e,{regionPage:d=""}=e,{slotHeader:S="z-10"}=e,{slotSidebarLeft:p="w-auto"}=e,{slotSidebarRight:D="w-auto"}=e,{slotPageHeader:M=""}=e,{slotPageContent:R=""}=e,{slotPageFooter:H=""}=e,{slotFooter:A=""}=e,N=!1;Se(()=>{t(2,N=!0)});function j(y){ft.call(this,r,y)}return r.$$set=y=>{t(23,e=ue(ue({},e),he(y))),"scrollbarGutter"in y&&t(0,C=y.scrollbarGutter),"regionPage"in y&&t(1,d=y.regionPage),"slotHeader"in y&&t(12,S=y.slotHeader),"slotSidebarLeft"in y&&t(13,p=y.slotSidebarLeft),"slotSidebarRight"in y&&t(14,D=y.slotSidebarRight),"slotPageHeader"in y&&t(15,M=y.slotPageHeader),"slotPageContent"in y&&t(16,R=y.slotPageContent),"slotPageFooter"in y&&t(17,H=y.slotPageFooter),"slotFooter"in y&&t(18,A=y.slotFooter),"$$scope"in y&&t(20,_=y.$$scope)},r.$$.update=()=>{t(10,l=`${Rt} ${t(19,b=e.class)!==null&&b!==void 0?b:""}`),r.$$.dirty&4096&&t(9,s=`${S}`),r.$$.dirty&8192&&t(8,a=`${zt} ${p}`),r.$$.dirty&16384&&t(7,o=`${wt} ${D}`),r.$$.dirty&32768&&t(6,i=`${M}`),r.$$.dirty&65536&&t(5,n=`${R}`),r.$$.dirty&131072&&t(4,f=`${H}`),r.$$.dirty&262144&&t(3,k=`${A}`)},e=he(e),[C,d,N,k,f,n,i,o,a,s,l,u,S,p,D,M,R,H,A,b,_,c,j]}class Gt extends me{constructor(e){super(),_e(this,e,Wt,Vt,ge,{scrollbarGutter:0,regionPage:1,slotHeader:12,slotSidebarLeft:13,slotSidebarRight:14,slotPageHeader:15,slotPageContent:16,slotPageFooter:17,slotFooter:18})}}function ot(r,e){const t={...r};for(const l in e)e.hasOwnProperty(l)&&(t.hasOwnProperty(l)&&typeof e[l]=="object"&&e[l]!==null?t[l]=ot(t[l],e[l]):t[l]=e[l]);return t}const at={DEFAULT:{colors:["bg-surface","bg-surface-highlight"],border:"",padding:"px-6 py-4",radius:"rounded-md",typography:""},pill:{colors:["bg-surface","bg-surface-highlight"],border:"",padding:"px-10 py-2",radius:"rounded-full",typography:""}};function Mt(r){return r?at[r]:at.DEFAULT}function Ut(r){return{}}function qt(){const r=Mt("pill"),e=Ut();return ot({button:r,hero:e},{button:{border:"border-1",radius:"rounded-md",padding:"px-12 py-4",colors:{DEFAULT:"bg-surface",hover:"bg-surface-highlight",focus:"bg-surface-highlight/80"},typography:{size:"sm",uppercase:!0}},hero:{minified:{colors:"bg-surface"}}})}function Qt(r){let e;const t=r[3].default,l=re(t,r,r[4],null);return{c(){l&&l.c()},l(s){l&&l.l(s)},m(s,a){l&&l.m(s,a),e=!0},p(s,a){l&&l.p&&(!e||a&16)&&ae(l,t,s,s[4],e?ie(t,s[4],a,null):oe(s[4]),null)},i(s){e||(E(l,s),e=!0)},o(s){O(l,s),e=!1},d(s){l&&l.d(s)}}}function Jt(r){let e,t;return e=new Ht({props:{buttonVariant:"pill",companyName:"",pages:r[0],CTAButtons:r[2]}}),{c(){x(e.$$.fragment)},l(l){$(e.$$.fragment,l)},m(l,s){ee(e,l,s),t=!0},p:pe,i(l){t||(E(e.$$.fragment,l),t=!0)},o(l){O(e.$$.fragment,l),t=!1},d(l){te(e,l)}}}function Yt(r){let e,t;return e=new dt({props:{$$slots:{default:[Jt]},$$scope:{ctx:r}}}),{c(){x(e.$$.fragment)},l(l){$(e.$$.fragment,l)},m(l,s){ee(e,l,s),t=!0},p(l,s){const a={};s&16&&(a.$$scope={dirty:s,ctx:l}),e.$set(a)},i(l){t||(E(e.$$.fragment,l),t=!0)},o(l){O(e.$$.fragment,l),t=!1},d(l){te(e,l)}}}function Kt(r){let e,t;return e=new Et({props:{companyName:"",pages:r[1]}}),{c(){x(e.$$.fragment)},l(l){$(e.$$.fragment,l)},m(l,s){ee(e,l,s),t=!0},p:pe,i(l){t||(E(e.$$.fragment,l),t=!0)},o(l){O(e.$$.fragment,l),t=!1},d(l){te(e,l)}}}function Xt(r){let e,t;return e=new Gt({props:{class:"bg-background",$$slots:{footer:[Kt],header:[Yt],default:[Qt]},$$scope:{ctx:r}}}),{c(){x(e.$$.fragment)},l(l){$(e.$$.fragment,l)},m(l,s){ee(e,l,s),t=!0},p(l,[s]){const a={};s&16&&(a.$$scope={dirty:s,ctx:l}),e.$set(a)},i(l){t||(E(e.$$.fragment,l),t=!0)},o(l){O(e.$$.fragment,l),t=!1},d(l){te(e,l)}}}function Zt(r,e,t){let{$$slots:l={},$$scope:s}=e;const a={"Our work":"/our-work",Services:"/services",Products:"/products",About:"/about"},o={Explore:{Home:"/","Our work":"/our-work",Products:"/products",Testimonials:"/#testimonials"},Support:{About:"/about",Contact:"/contact",FAQ:"/#faq"},Legal:{"Privacy Policy":"/legal/privacy",Licenses:"/about#licenses"}},i={"Contact us":{href:"/contact",highlight:!1}};let n=null;const f=()=>!!n&&n.getItem("foo");return Se(()=>{typeof localStorage<"u"&&(n=localStorage),f();let k=qt();for(let c in k){let _=k[c];localStorage.setItem(c,JSON.stringify(_))}}),r.$$set=k=>{"$$scope"in k&&t(4,s=k.$$scope)},[a,o,i,l,s]}class il extends me{constructor(e){super(),_e(this,e,Zt,Xt,ge,{})}}export{il as component,ol as universal};
