import{f as r}from"./frontStore-2c67cf42.js";import{_ as s,m as c,e as a,r as n,o as p,j as m}from"./index-63941f38.js";import{P as u}from"./ProductListComponent-e0266696.js";import"./sweetalert2.all-2a6e8b79.js";const d={data(){return{}},components:{ProductListComponent:u},watch:{$route(t,o){t.params.category!==o.params.category&&this.getProducts(t.params.category)}},computed:{...c(r,["products","filteredProducts","currentCategory"])},methods:{...a(r,["getProducts"])},mounted(){this.getProducts()}};function i(t,o,f,_,P,l){const e=n("ProductListComponent");return p(),m(e,{products:t.products},null,8,["products"])}const $=s(d,[["render",i]]);export{$ as default};
