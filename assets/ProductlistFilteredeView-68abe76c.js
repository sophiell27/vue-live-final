import{f as r}from"./frontStore-2c67cf42.js";import{_ as i,m,e as p,r as c,o as n,c as a,b as e,f as o,w as u,i as l,F as h,d as _}from"./index-63941f38.js";import{P as f}from"./ProductListComponent-e0266696.js";import{P}from"./PillBtnComponent-0fcbe14e.js";import"./sweetalert2.all-2a6e8b79.js";const g={data(){return{}},components:{ProductListComponent:f,PillBtnComponent:P},computed:{...m(r,["products","filteredProducts","getNewProducts"])},methods:{...p(r,["getProducts"])},watch:{$route(t){this.getProducts(t.params.category)}},mounted(){this.getProducts(this.$route.params.category)}},C={key:0,class:""},x=o("p",{class:"text-highlight text-center mb-20"},"正在努力上架新品了～～",-1),w=o("h2",{class:"titleDash text-h4 text-center text-dark pb-5 mb-4"}," 先看看其他商品",-1),B={class:"flex justify-center"};function N(t,$,y,V,b,k){const s=c("ProductListComponent"),d=c("PillBtnComponent");return n(),a(h,null,[e(s,{products:t.filteredProducts},null,8,["products"]),t.filteredProducts.length?l("",!0):(n(),a("div",C,[x,w,e(s,{products:t.getNewProducts},null,8,["products"]),o("div",B,[e(d,{dynamicPath:"/products"},{default:u(()=>[_(" 看更多產品 ")]),_:1})])]))],64)}const A=i(g,[["render",N]]);export{A as default};
