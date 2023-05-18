import{f as b}from"./frontStore-d4b36cae.js";import{_ as f,m as O,e as P,r as m,o as s,c as o,f as t,t as r,i as c,F as v,a as T,b as w,w as C,d as N}from"./index-ffd9f6a9.js";import{P as V}from"./ProductListComponent-861e2dde.js";import{P as D}from"./PillBtnComponent-569a1446.js";import"./sweetalert2.all-6859ba2c.js";const{VITE_API:E,VITE_PATH:B}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"sophiee22",BASE_URL:"/vue-allaboutgolden/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},A={data(){return{newOrder:{}}},components:{ProductListComponent:V,PillBtnComponent:D},computed:{...O(b,["getNewProducts"])},methods:{...P(b,["alertMessage","getFormatDate","getProducts"]),getOrder(a){this.$http(`${E}api/${B}/order/${a}`).then(n=>{this.newOrder=n.data.order}).catch(()=>{this.alertMessage("無法取得訂單資訊")})}},mounted(){this.getOrder(this.$route.params.orderid),this.getProducts()}},I={class:"container pt-10 md:pt-16"},S=t("h2",{class:"text-h4 titleDash pb-4 mb-20 md:text-2xl text-center"}," 訂單內容 ",-1),L={key:0,class:"relative overflow-x-auto shadow-md sm:rounded-lg"},F={class:"text-sm text-left text-gray-500 dark:text-gray-400"},M={class:"border-b border-gray-200 dark:border-gray-700"},R=t("th",{scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"}," 訂單日期： ",-1),H={class:"px-6 py-4 w-full"},j={class:"border-b border-gray-200 dark:border-gray-700"},q=t("th",{scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"}," 訂單編號： ",-1),U={class:"px-6 py-4"},z={class:"border-b border-gray-200 dark:border-gray-700"},G=t("th",{scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"}," 收貨人姓名： ",-1),J={class:"px-6 py-4"},K={class:"border-b border-gray-200 dark:border-gray-700"},Q=t("th",{scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"}," 收貨人電話： ",-1),W={class:"px-6 py-4"},X={class:"border-b border-gray-200 dark:border-gray-700"},Y=t("th",{scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"}," 收貨人地址： ",-1),Z={class:"px-6 py-4"},$={class:"border-b border-gray-200 dark:border-gray-700"},tt=t("th",{scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"}," 收貨人電郵： ",-1),et={class:"px-6 py-4"},rt={class:"border-b border-gray-200 dark:border-gray-700"},st=t("th",{scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"}," 付款方法： ",-1),ot={class:"px-6 py-4"},at={class:"border-b border-gray-200 dark:border-gray-700"},dt=t("th",{scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"}," 總計： ",-1),ct={class:"px-6 py-4 text-xs md:text-sm"},nt={class:"border-b border-gray-200 dark:border-gray-700"},pt=t("th",{scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"}," 付款狀態： ",-1),it={class:"px-6 py-4"},lt={key:1,class:"relative overflow-x-auto shadow-md sm:rounded-lg mt-8"},_t={class:"text-sm text-gray-500 dark:text-gray-400 w-full text-center"},ht=t("caption",{class:"p-5 text-lg font-semibold text-center text-gray-900 bg-white dark:text-white dark:bg-gray-800"}," 購買內容 ",-1),gt=t("thead",{class:"text-xs text-gray-700 uppercase dark:text-gray-400"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 bg-gray-50 dark:bg-gray-800"}," 商品 "),t("th",{scope:"col",class:"px-6 py-3 whitespace-nowrap"}," 數量 "),t("th",{scope:"col",class:"px-6 py-3 bg-gray-50 dark:bg-gray-800"}," 小計 ")])],-1),yt={scope:"row",class:"px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800"},xt={class:"px-6 py-4"},bt={class:"px-6 py-4 text-xs md:text-sm whitespace-nowrap"},mt={key:0,class:"border-b border-gray-200 dark:border-gray-700"},wt=t("th",{scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"}," 運費 ",-1),ut=t("td",{class:"px-6 py-4"},null,-1),kt=t("td",{class:"px-6 py-4 text-xs md:text-sm"}," NT $ 500 ",-1),ft=[wt,ut,kt],Ot={class:"font-semibold text-dark dark:text-white text-center"},Pt=t("td",{class:"px-2 py-4 md:px-6 hidden md:block"},null,-1),vt=t("td",{colspan:"1"},null,-1),Tt=t("td",{class:"px-2 py-3 text-base whitespace-nowrap"},"總計：",-1),Ct={class:"px-2 py-3 text-xs whitespace-nowrap md:px-6"},Nt={class:"mt-14 lg:mt-20"},Vt=t("h2",{class:"text-lg titleDash after:mx-0 mb-6 md:text-xl"},"繼續選購產品",-1),Dt={class:"flex justify-center"};function Et(a,n,Bt,At,e,It){var p,i,l,_,h,g,y,x;const u=m("ProductListComponent"),k=m("PillBtnComponent");return s(),o("div",I,[S,e.newOrder?(s(),o("div",L,[t("table",F,[t("tbody",null,[t("tr",M,[R,t("td",H,r(a.getFormatDate(e.newOrder.create_at)),1)]),t("tr",j,[q,t("td",U,r(e.newOrder.id),1)]),t("tr",z,[G,t("td",J,r((i=(p=e.newOrder)==null?void 0:p.user)==null?void 0:i.name),1)]),t("tr",K,[Q,t("td",W,r((_=(l=e.newOrder)==null?void 0:l.user)==null?void 0:_.tel),1)]),t("tr",X,[Y,t("td",Z,r((g=(h=e.newOrder)==null?void 0:h.user)==null?void 0:g.address),1)]),t("tr",$,[tt,t("td",et,r((x=(y=e.newOrder)==null?void 0:y.user)==null?void 0:x.email),1)]),t("tr",rt,[st,t("td",ot,r(e.newOrder.message),1)]),t("tr",at,[dt,t("td",ct," NT $ "+r(e.newOrder.total),1)]),t("tr",nt,[pt,t("td",it,r(e.newOrder.is_paid?"已付款":"未付款"),1)])])])])):c("",!0),e.newOrder?(s(),o("div",lt,[t("table",_t,[ht,gt,t("tbody",null,[(s(!0),o(v,null,T(e.newOrder.products,d=>(s(),o("tr",{class:"border-b border-gray-200 dark:border-gray-700",key:d},[t("th",yt,r(d.product.title),1),t("td",xt,r(d.qty),1),t("td",bt," NT $ "+r(d.total),1)]))),128)),e.newOrder.total<900?(s(),o("tr",mt,ft)):c("",!0)]),t("tfoot",null,[t("tr",Ot,[Pt,vt,Tt,t("td",Ct,"NT $ "+r(e.newOrder.total),1)])])])])):c("",!0),t("div",Nt,[Vt,w(u,{products:a.getNewProducts},null,8,["products"]),t("div",Dt,[w(k,{dynamicPath:"/products"},{default:C(()=>[N(" 看更多產品 ")]),_:1})])])])}const Ht=f(A,[["render",Et]]);export{Ht as default};
