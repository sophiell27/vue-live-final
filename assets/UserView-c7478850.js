import{f as e}from"./frontStore-2c67cf42.js";import{_ as s,m as r,e as a,r as n,o as i,j as c,i as m}from"./index-63941f38.js";import"./sweetalert2.all-2a6e8b79.js";const p={computed:{...r(e,["loginStatus"])},methods:{...a(e,["alertMessage"])},mounted(){this.loginStatus||(this.alertMessage("請先登入！"),this.$router.push("/login"))}};function u(t,f,l,_,d,g){const o=n("RouterView");return t.loginStatus?(i(),c(o,{key:0})):m("",!0)}const V=s(p,[["render",u]]);export{V as default};
