function m(){}const A=t=>t;function w(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function E(t){return t()}function C(){return Object.create(null)}function j(t){t.forEach(E)}function q(t){return typeof t=="function"}function G(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let f;function H(t,n){return t===n?!0:(f||(f=document.createElement("a")),f.href=n,t===f.href)}function I(t){return Object.keys(t).length===0}function F(t,...n){if(t==null){for(const o of n)o(void 0);return m}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function P(t,n,e){t.$$.on_destroy.push(F(n,e))}function S(t,n,e,o){if(t){const s=k(t,n,e,o);return t[0](s)}}function k(t,n,e,o){return t[1]&&o?w(e.ctx.slice(),t[1](o(n))):e.ctx}function U(t,n,e,o){if(t[2]&&o){const s=t[2](o(e));if(n.dirty===void 0)return s;if(typeof s=="object"){const a=[],_=Math.max(n.dirty.length,s.length);for(let u=0;u<_;u+=1)a[u]=n.dirty[u]|s[u];return a}return n.dirty|s}return n.dirty}function J(t,n,e,o,s,a){if(s){const _=k(n,e,o,a);t.p(_,s)}}function K(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function L(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function N(t){const n={};for(const e in t)n[e]=!0;return n}function Q(t){return t&&q(t.destroy)?t.destroy:m}function R(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let l;function d(t){l=t}function y(){if(!l)throw new Error("Function called outside component initialization");return l}function T(t){y().$$.on_mount.push(t)}function V(t){y().$$.after_update.push(t)}function W(t){y().$$.on_destroy.push(t)}function X(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(o=>o.call(this,n))}const i=[],g=[];let c=[];const p=[],x=Promise.resolve();let b=!1;function O(){b||(b=!0,x.then(D))}function Y(){return O(),x}function z(t){c.push(t)}function Z(t){p.push(t)}const h=new Set;let r=0;function D(){if(r!==0)return;const t=l;do{try{for(;r<i.length;){const n=i[r];r++,d(n),M(n.$$)}}catch(n){throw i.length=0,r=0,n}for(d(null),i.length=0,r=0;g.length;)g.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];h.has(e)||(h.add(e),e())}c.length=0}while(i.length);for(;p.length;)p.pop()();b=!1,h.clear(),d(t)}function M(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}function v(t){const n=[],e=[];c.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),c=n}export{W as A,q as B,C,I as D,v as E,l as F,E as G,i as H,O as I,V as a,g as b,H as c,w as d,L as e,S as f,K as g,U as h,z as i,N as j,X as k,P as l,Q as m,m as n,T as o,Z as p,R as q,j as r,G as s,Y as t,J as u,A as v,B as w,y as x,d as y,D as z};
