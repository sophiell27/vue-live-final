import{f as t}from"./frontStore-70f789c0.js";import{_ as a,m,e as i,r as o,o as c,j as p,w as e,b as u,d as _,f as d}from"./index-0b32d01c.js";import{L as f}from"./LoginFormComponent-0a4c32dd.js";import"./sweetalert2.all-0f40db2e.js";const g={data(){return{}},components:{LoginFormComponent:f},computed:{...m(t,["loginStatus"])},methods:{...i(t,["toastMessge","register"])},mounted(){this.loginStatus&&this.$router.push("/")}},l=d("span",{class:"text-highlight"},"按此登入",-1);function h(s,C,L,S,x,F){const n=o("RouterLink"),r=o("LoginFormComponent");return c(),p(r,{status:"註冊",onSubmitForm:s.register},{msg:e(()=>[u(n,{to:"/login",class:"mt-5"},{default:e(()=>[_(" 已是會員？"),l]),_:1})]),_:1},8,["onSubmitForm"])}const N=a(g,[["render",h]]);export{N as default};