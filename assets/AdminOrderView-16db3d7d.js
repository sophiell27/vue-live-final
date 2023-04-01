import{a as h}from"./adminStore-64f1598e.js";import{a as x,z as V,_ as v,r as m,o as n,c as i,d as l,w as g,b as e,f as b,q as M,A as O,t as p,m as P,M as C,F as f,g as _,h as y,s as A,j as E}from"./index-f8c59545.js";import{P as T}from"./PaginationComponent-5bef1d40.js";import{_ as $}from"./lodash-017bbd54.js";import"./sweetalert2.all-7698f33b.js";const{VITE_API:I,VITE_PATH:S}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"sophiee22",BASE_URL:"/vue-live-final/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},D={data(){return{orderModal:{},data:{user:{}}}},methods:{...x(h,["getOrders"]),openOrderModal(o){this.data=$.cloneDeep(o),console.log(this.data),this.orderModal.show()},closeOrderModal(){this.orderModal.hide(),this.data={user:{}}},changeOrder(){confirm("是否確定更改訂單資訊？")&&this.$http.put(`${I}api/${S}/admin/order/${this.data.id}`,{data:this.data}).then(o=>{alert("已成功更改訂單資料"),this.closeOrderModal(),this.getOrders()}).catch(o=>{alert("更改訂單資料發生錯誤！")})}},mounted(){this.orderModal=new V(this.$refs.orderModal)}},L={class:"fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full",ref:"orderModal"},U={class:"relative bg-white rounded-lg shadow dark:bg-gray-700"},N={class:"flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"},q=e("h3",{class:"text-xl font-semibold text-gray-900 dark:text-white"}," 編輯訂單 ",-1),B=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),R=e("span",{class:"sr-only"},"Close modal",-1),z=[B,R],F={class:"grid grid-cols-1 gap-x-8 p-8"},H={class:"mb-8 md:mb-10"},j={class:"col-start-3 col-span-8"},G=e("h3",{class:"text-4.5 mb-6"}," 訂單資料",-1),Y={class:"grid grid-cols-2 gap-y-4 md:gap-x-4 md:gap-y-8"},J={class:"col-span-2 md:col-span-1"},K=e("label",{for:"recipient",class:"mb-2 block"},"收貨人：",-1),Q={class:"col-span-2 md:col-span-1"},W=e("label",{for:"recipientPhone",class:"mb-2 block"},"收貨人電話：",-1),X={class:"col-span-2"},Z=e("label",{for:"receipientAddr",class:"mb-2 block"},"收貨人地址：",-1),ee={class:"col-span-2"},re=e("label",{for:"receipientMail",class:"mb-2 block"},"電郵：",-1),te={class:"col-span-2 md:col-span-1"},oe=e("label",{for:"payment",class:"mb-2 block"},"付款方法：",-1),se=e("option",{value:"銀行轉賬",selected:""},"銀行轉賬",-1),ae=e("option",{value:"貨到付款"},"貨到付款",-1),le=[se,ae],de=e("div",{class:"col-span-2 md:col-span-1"},[e("label",{for:"couponNum",class:"mb-2 block"},"優惠碼："),e("input",{type:"text",id:"couponNum",class:"w-full rounded-lg px-4 py-2 border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-primary bg-transparent",placeholder:"請輸入優惠碼"})],-1),ne={class:"mb-3 flex items-center"},ie=["checked"],ce={for:"orderPaid",class:"block"},ue={class:"flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"},pe=e("button",{class:"text-white bg-secondary hover:bg-primary hover:text-dark focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"},"確定",-1);function me(o,r,k,w,s,d){const c=m("v-field"),u=m("v-error-message"),a=m("v-form");return n(),i("div",L,[l(a,{class:"relative w-full h-full max-w-2xl md:h-auto",onSubmit:d.changeOrder},{default:g(()=>[e("div",U,[e("div",N,[q,e("button",{type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",onClick:r[0]||(r[0]=(...t)=>d.closeOrderModal&&d.closeOrderModal(...t))},z)]),e("div",F,[l(a,{class:"container",onSubmit:d.changeOrder},{default:g(()=>[e("div",H,[e("div",j,[G,e("div",Y,[e("div",J,[K,l(c,{type:"text",id:"recipient",class:"w-full rounded-lg px-4 py-2 border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-primary bg-transparent",placeholder:"請輸入收貨人姓名",name:"收貨人姓名",rules:"required",modelValue:s.data.user.name,"onUpdate:modelValue":r[1]||(r[1]=t=>s.data.user.name=t)},null,8,["modelValue"]),l(u,{name:"收貨人姓名",class:"text-highlight"})]),e("div",Q,[W,l(c,{type:"tel",id:"recipientPhone",class:"w-full rounded-lg px-4 py-2 border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-primary bg-transparent",placeholder:"請輸入收貨人電話",name:"收貨人電話",rules:"required",modelValue:s.data.user.tel,"onUpdate:modelValue":r[2]||(r[2]=t=>s.data.user.tel=t)},null,8,["modelValue"]),l(u,{name:"收貨人電話",class:"text-highlight"})]),e("div",X,[Z,l(c,{type:"text",id:"receipientAddr",class:"w-full rounded-lg px-4 py-2 border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-primary bg-transparent",placeholder:"請輸入收貨人地址",name:"收貨人地址",rules:"required",modelValue:s.data.user.address,"onUpdate:modelValue":r[3]||(r[3]=t=>s.data.user.address=t)},null,8,["modelValue"]),l(u,{name:"收貨人地址",class:"text-highlight"})]),e("div",ee,[re,l(c,{type:"email",id:"receipientMail",class:"w-full rounded-lg px-4 py-2 border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-primary bg-transparent",placeholder:"請輸入電郵",name:"電郵",rules:"required",modelValue:s.data.user.email,"onUpdate:modelValue":r[4]||(r[4]=t=>s.data.user.email=t)},null,8,["modelValue"]),l(u,{name:"電郵",class:"text-highlight"})]),e("div",te,[oe,b(e("select",{id:"payment",class:"w-full rounded-lg px-4 py-2 border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-primary bg-transparent","onUpdate:modelValue":r[5]||(r[5]=t=>s.data.message=t)},le,512),[[M,s.data.message]])]),de,e("div",ne,[b(e("input",{type:"checkbox",id:"orderPaid",class:"rounded-sm mr-2 ring-2 ring-primary indeterminate:bg-white indeterminate:ring-offset-primary ring-offset-primary checked:bg-primary focus:outline-none focus:ring focus:ring-primary valid:border-primary","onUpdate:modelValue":r[6]||(r[6]=t=>s.data.is_paid=t),checked:s.data.is_paid},null,8,ie),[[O,s.data.is_paid]]),e("label",ce,p(s.data.is_paid?"已付款":"未付款"),1)])])])])]),_:1},8,["onSubmit"])]),e("div",ue,[e("button",{"data-modal-hide":"defaultModal",type:"button",class:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600",onClick:r[7]||(r[7]=(...t)=>d.closeOrderModal&&d.closeOrderModal(...t))},"取消"),pe])])]),_:1},8,["onSubmit"])],512)}const he=v(D,[["render",me]]),{VITE_API:ge,VITE_PATH:be}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"sophiee22",BASE_URL:"/vue-live-final/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},fe={data(){return{}},computed:{...P(h,["orders","orderPagination"])},components:{PaginationComponent:T,OrderComponent:he,MyLoader:C},methods:{...x(h,["getOrders"]),getFormatDate(o){const r=new Date(o*1e3);return`${r.getDate()}/${r.getMonth()}/${r.getFullYear()}`},openOrderModal(o){this.$refs.orderModal.openOrderModal(o)},delOrder(o){confirm("是否確定刪除訂單？")&&this.$http.delete(`${ge}api/${be}/admin/order/${o}`).then(()=>{this.getOrders(),alert("已成功刪除一筆訂單")}).catch(()=>{alert("無法刪除一筆訂單")})}},mounted(){this.getOrders(this.$route.params.orderpage)}},_e={key:0,class:"container flex flex-col h-full"},ye=e("h1",{class:"text-h4 text-center mb-8"},"訂單列表",-1),xe={key:0,class:"w-full mb-auto"},ve=e("thead",{class:"border-b border-b-secondary"},[e("tr",null,[e("th",null,"日期"),e("th",null,"訂單編號"),e("th",null,"訂單內容"),e("th",null,"總計"),e("th",null,"是否付款"),e("th",null,"編輯")])],-1),ke={class:"text-center mb-2"},we={class:"py-2"},Ve=["onClick"],Me=["onClick"];function Oe(o,r,k,w,s,d){const c=m("OrderComponent"),u=m("PaginationComponent");return o.orders?(n(),i("div",_e,[l(c,{ref:"orderModal"},null,512),ye,o.orders?(n(),i("table",xe,[ve,e("tbody",ke,[(n(!0),i(f,null,_(o.orders,a=>(n(),i("tr",{key:a.create_at},[e("td",null,p(d.getFormatDate(a.create_at)),1),e("td",null,p(a.id),1),e("td",null,[(n(!0),i(f,null,_(a.products,t=>(n(),i("p",{key:`item${t.id}`},p(`${t.product.title} x ${t.qty}`),1))),128))]),e("td",null,"NT$ "+p(a.total),1),e("td",{class:A({"text-highlight border-b-highlight":!a.is_paid})},p(a.is_paid?"已付款":"未付款"),3),e("td",we,[e("button",{type:"button",class:"pb-px border-b border-b-secondary hover:text-highlight hover:border-b-highlight",onClick:t=>d.openOrderModal(a)}," 編輯 ",8,Ve),E(" / "),e("button",{type:"button",class:"pb-px border-b border-b-secondary hover:text-highlight hover:border-b-highlight",onClick:t=>d.delOrder(a.id)}," 刪除 ",8,Me)])]))),128))])])):y("",!0),l(u,{pagination:o.orderPagination,onGetpage:o.getOrders},null,8,["pagination","onGetpage"])])):y("",!0)}const $e=v(fe,[["render",Oe]]);export{$e as default};
