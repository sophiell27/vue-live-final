import{a as p}from"./adminStore-8278dc3f.js";import{_ as u,a as _,r as l,o as c,c as m,b as e,d as o,w as s,u as f,l as v,j as k,f as a}from"./index-23a0601b.js";const{VITE_API:y,VITE_PATH:D}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"sophiee22",BASE_URL:"/vue-live-final/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},g={data(){return{loginStatus:"",isActive:""}},methods:{..._(p,["checkLogin"]),logOut(){this.$http.post(`${y}logout`).then(r=>{alert("你已登出"),this.loginStatus=!1,this.$router.push("/admin/login")}).catch(()=>{alert("無法登出")})}},watch:{},mounted(){this.checkLogin().then(r=>{this.loginStatus=r})}},x={class:"min-h-screen"},V={class:"bg-primary mb-6"},A={class:"container"},E={class:"flex justify-between items-center text-dark font-bold text-4.5"},S={class:"flex items-center gap-x-6 py-6"},w=e("li",null,[e("a",{href:"",class:"py-2 md:py-4 border-b border-b-transparent hover:border-b hover:border-b-dark"})],-1),R=e("li",null,[e("a",{href:"",class:"py-2 md:py-4 border-b border-b-transparent hover:border-b hover:border-b-dark"})],-1),T={class:"flex items-center gap-x-4"},B={class:"h-[calc(100vh-131px)]"};function I(r,n,L,O,i,d){const t=l("RouterLink"),b=l("RouterView");return c(),m("div",x,[e("div",V,[e("div",A,[e("nav",E,[e("ul",S,[e("li",null,[o(t,{to:"/admin/orders",class:"py-2 md:py-4 border-b border-b-transparent hover:border-b hover:border-b-dark"},{default:s(()=>[a("所有訂單")]),_:1})]),e("li",null,[o(t,{to:"/admin/products",class:"py-2 md:py-4 border-b border-b-transparent hover:border-b hover:border-b-dark"},{default:s(()=>[a("產品管理")]),_:1})]),w,R]),e("ul",T,[e("li",null,[o(t,{to:"/",class:"py-2 md:py-4 border-b border-b-transparent hover:border-b hover:border-b-dark"},{default:s(()=>[a(" 前台首頁 ")]),_:1})]),e("li",null,[e("a",{href:"",class:"py-2 md:py-4 border-b border-b-transparent hover:border-b hover:border-b-dark",onClick:n[0]||(n[0]=f((...h)=>d.logOut&&d.logOut(...h),["prevent"]))},"登出")])])])])]),e("div",B,[i.loginStatus?(c(),v(b,{key:0,class:"container h-full"})):k("",!0)])])}const N=u(g,[["render",I]]);export{N as default};