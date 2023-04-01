import{u as n,x as d,M as c,y as o}from"./index-f8c59545.js";import{S as e}from"./sweetalert2.all-7698f33b.js";const{VITE_API:s,VITE_PATH:r}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"sophiee22",BASE_URL:"/vue-live-final/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},h=n("adminStore",{state:()=>({products:[],productsPagination:{},orders:[],orderPagination:{}}),actions:{playLoading(){const t=d.useLoading().show({loader:c});setTimeout(()=>{t.hide()},1e3)},async checkLogin(a="/admin"){const t=document.cookie.replace(/(?:(?:^|.*;\s*)goldenToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");return o.defaults.headers.common.Authorization=t,await(async()=>{try{const i=await o.post(`${s}api/user/check`);return this.router.push(a),!0}catch{return this.router.push("/admin/login"),!1}})()},async getProducts(a=1){this.playLoading(),await o.get(`${s}api/${r}/admin/products?page=${a}`).then(t=>{this.products=t.data.products,this.productsPagination=t.data.pagination,this.router.push(`/admin/products/${t.data.pagination.current_page}`)}).catch(t=>{alert("取得產品列表發生錯誤")})},getOrders(a=1){this.playLoading(),o.get(`${s}api/${r}/admin/orders?page=${a}`).then(t=>{this.orders=t.data.orders,this.orderPagination=t.data.pagination,this.router.push(`/admin/orders/${t.data.pagination.current_page}`)}).catch(t=>{console.log("無法取得訂單列表"),console.log(t)})},async confirmMessage(a){return await e.fire({text:a,confirmButtonText:"確定"})},alertMessage(a){e.fire({text:a,timer:1e3})},toastMessge(a,t="top-end"){e.fire({toast:!0,position:t,icon:"success",title:a,showConfirmButton:!1,timer:1e3})}}});export{h as a};
