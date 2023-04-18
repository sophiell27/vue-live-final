import{f as _}from"./frontStore-aaacdf07.js";import{m as b,_ as y,r as u,o as d,c as m,F as w,a as L,n as V,b as a,w as i,d as l,t as k,e as B,M as P,f as e,g as j,v as N,h as x,i as M,j as v}from"./index-b4ff87b5.js";import{P as T}from"./PillBtnComponent-b4e96a50.js";import{_ as z}from"./lodash-438edc0f.js";import{_ as R}from"./Logo-990baef8.js";import"./sweetalert2.all-d8776a3a.js";const O={data(){return{}},computed:{...b(_,["categories","currentCategory"])}},F={class:"flex flex-col items-center text-fog-500 text-sm md:bg-fog-100 md:text-lg md:rounded-lg",ref:"categoryList"};function E(s,t,g,p,c,o){const f=u("RouterLink");return d(),m("ul",F,[(d(!0),m(w,null,L(s.categories,(r,n)=>(d(),m("li",{class:V(["py-2 ml-4 hover:text-highlight md:ml-0 md:px-6 whitespace-nowrap",{"text-highlight":r===s.currentCategory}]),key:"cat"+r},[a(f,{to:n===0?"/products":`/products/category/${r}`,class:"",onClick:t[0]||(t[0]=C=>s.$emit("toggleMenu"))},{default:i(()=>[l(k(r),1)]),_:2},1032,["to"])],2))),128))],512)}const U=y(O,[["render",E]]),D={data(){return{searchModal:{},searchValue:"",filteredValue:[]}},computed:{...b(_,["products"])},methods:{...B(_,["getProducts"]),showSearchModal(){this.searchValue="",this.filteredValue=[],this.searchModal.show()},searchFilter:z.debounce(function(){const t=this.searchValue;(async()=>await this.getProducts())(),this.filteredValue=this.products.filter(g=>g.title.includes(t))},500)},mounted(){this.searchModal=new P(this.$refs.searchModal)}},q={tabindex:"-1","aria-hidden":"true",class:"fixed top-0 left-0 right-0 z-[100] hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full !items-start",ref:"searchModal"},A={class:"relative w-full md:max-w-2xl max-h-full top-24"},K={class:"relative bg-white rounded-lg shadow"},Y={class:"px-6 py-4 border-b rounded-t mb-auto"},G={class:"relative w-full bg-fog-100 rounded-lg2 flex items-center p-2"},H=e("span",{class:"material-symbols-outlined"}," search ",-1),I={class:"p-6"},J={class:"my-4 space-y-3 lg:text-lg"},Q={class:"flex-1 ml-3 whitespace-nowrap"};function W(s,t,g,p,c,o){const f=u("RouterLink");return d(),m("div",q,[e("div",A,[e("div",K,[e("div",Y,[e("div",G,[H,j(e("input",{type:"search",id:"search-dropdown",class:"block p-2.5 w-full z-20 text-sm text-fog-500 rounded-r-lg border-0 bg-transparent focus:ring-0 lg:text-lg",placeholder:"油畫、T shirt、手機殼 ... ","onUpdate:modelValue":t[0]||(t[0]=r=>c.searchValue=r),onKeyup:t[1]||(t[1]=(...r)=>o.searchFilter&&o.searchFilter(...r)),required:""},null,544),[[N,c.searchValue]])])]),e("div",I,[e("ul",J,[(d(!0),m(w,null,L(c.filteredValue,r=>(d(),m("li",{key:r.id},[a(f,{to:`/products/category/${r.category}/product/${r.id}`,class:"flex items-center p-3 text-base text-fog-500 rounded-lg bg-gray-50 hover:bg-fog-200 group hover:shadow",onClick:t[2]||(t[2]=n=>c.searchModal.hide())},{default:i(()=>[e("span",Q,k(r.title),1)]),_:2},1032,["to"])]))),128))])])])])],512)}const X=y(D,[["render",W]]),Z={data(){return{}},components:{PillBtnComponent:T,SearchModal:X,CategoryMenuCompoent:U},computed:{...b(_,["cartlength","products","isLoading","fullPage","loginStatus"])},methods:{...B(_,["getCarts","getProducts","logout"]),toggleBurger(){this.$refs.mainOverlay.classList.toggle("hidden")},clickMainOverlay(s){s.target===this.$refs.mainOverlay&&this.toggleBurger()},changeNavbg(){const{headerTop:s,header:t,mainLogo:g}=this.$refs;let p="add",c="remove",o=200;this.$route.fullPath!=="/"&&(o=50),window.pageYOffset<o&&(p="remove",c="add"),s.classList[p]("bg-fog-100"),t.classList[c]("bg-transparent"),t.classList[p]("h-12","-mt-1","md:h-14","md:-mt-5"),t.classList[c]("md:h-auto","md:-mt-0"),g.classList[p]("h-10","md:h-14","flex","mt-auto","md:w-38"),g.classList[c]("h-12","md:h-21","flex-none","md:w-60")},showSearchModal(){this.$refs.searchModal.showSearchModal()}},mounted(){this.getCarts(),window.addEventListener("scroll",this.changeNavbg),window.addEventListener("click",this.clickMainOverlay)},beforeUnmount(){window.removeEventListener("scroll",this.changeNavbg),window.removeEventListener("click",this.clickMainOverlay)}},ee={class:"min-h-screen flex flex-col justify-start overflow-x-hidden"},te={class:"relative"},se=e("div",{class:"container"},[e("a",{href:"#",class:"text-sm flex items-center justify-center text-dark"},[l("訂單金額 "),e("span",{class:"font-extrabold font-inter"},"NT$ 900"),l("，即可享有免運服務 "),e("span",{class:"material-symbols-outlined text-xl"}," chevron_right ")])],-1),oe={class:"z-40 fixed top-0 left-0 right-0 mt-9",ref:"headerTop"},le={class:"z-50",ref:"header"},re={class:"container"},ae={class:"flex justify-between items-center px-6 md:px-0"},ne={class:"flex items-center"},ie=e("span",{class:"material-symbols-sharp h-3 w-4.5"}," menu ",-1),de=[ie],ce={class:"my-3"},he={href:"#",class:"block w-[130px] h-12 whitespace-nowrap overflow-hidden indent-[101%] bg-logo bg-no-repeat bg-contain text-transparent md:w-60 md:h-21 flex-none hover:opacity-70",ref:"mainLogo"},me={class:"hidden absolute top-0 bottom-0 left-0 right-0 z-50 bg-dark/10 w-full h-screen md:static md:bg-transparent md:block md:h-auto md:w-auto",ref:"mainOverlay"},ue={class:"top-7 left-0 text-lg font-bold text-fog-500 bg-white pl-4 pr-6 pt-3 w-3/4 h-screen md:block md:w-auto md:h-auto md:pt-0 md:bg-transparent",id:"nav",ref:"burgerNav"},ge={class:"flex justify-between items-center mb-2 md:hidden"},pe=e("img",{src:R,alt:"logo",class:"h-12 w-[130px]"},null,-1),fe={class:"flex flex-col items-center md:flex-row"},_e={class:"group hover:text-highlight md:relative md:after:content-[''] md:after:absolute md:after:top-1/2 md:after:-translate-y-1/2 md:after:right-0 md:after:w-1 md:after:h-1 md:after:bg-secondary md:after:rounded-full md:px-4 lg:px-9"},xe={class:"hidden group-hover:block md:absolute md:left-0 md:right-0"},ve={key:0,class:"block py-4 md:py-1 hover:text-highlight px-4 lg:px-9"},be={class:"block py-4 md:py-1 hover:text-highlight md:hidden"},ye={class:"flex items-start"},we={class:"relative pr-4"},ke={class:"hidden md:block md:pr-4 hover:text-highlight"},Ce=e("span",{class:"material-symbols-outlined leading-none"}," person ",-1),Me=e("span",{class:"font-bold"},"登出",-1),Le=e("span",{class:"material-symbols-outlined leading-none"}," person ",-1),Be=e("span",{class:"font-bold"},"登入／註冊",-1),$e={class:"hover:-rotate-12 hover:text-highlight"},Se={class:"material-symbols-outlined leading-none relative"},Ve={key:0,class:"absolute top-0 right-0 -translate-y-1/3 translate-x-1/2 w-6 h-6 bg-dark rounded-full text-white flex justify-center items-center"},Pe={class:"text-[8px] font-inter"},je={class:"mt-[92px] md:mt-[144px]"},Ne={class:"mt-auto"},Te={class:"mt-10 md:mt-20 py-6 px-13 bg-footerCtaBg-sm bg-100 bg-center bg-dark flex flex-col items-center"},ze={class:"relative z-20"},Re=e("h2",{class:"text-4.5 font-bold mb-6 text-white md:text-h2"},[l(" 超過"),e("span",{class:"text-primary text-h2 px-1 align-middle md:text-h1"},"90%"),l("的顧客都選擇我們 "),e("br"),l(" 您也值得擁有最優質的購物體驗！ ")],-1),Oe={class:"flex justify-center"},Fe=e("span",{"data-aos":"flip-down","data-aos-delay":"300"},"立即加入會員",-1),Ee={class:"bg-fog-200 px-11 pt-8 pb-4"},Ue={class:"container"},De={class:"text-h6 flex flex-col gap-y-6 items-center mb-6 md:flex-row md:justify-center md:gap-0"},qe=e("p",{class:"text-fog-500 text-sm text-center"},[l("此網站僅做為前端 "),e("span",{class:"text-xs"},"Side Project"),l(" 作品練習， "),e("br"),l("不做商業用途，謝謝。 ")],-1);function Ae(s,t,g,p,c,o){const f=u("LoadingComponent"),r=u("SearchModal"),n=u("RouterLink"),C=u("CategoryMenuCompoent"),$=u("RouterView"),S=u("PillBtnComponent");return d(),m(w,null,[a(f,{active:s.isLoading,"onUpdate:active":t[0]||(t[0]=h=>s.isLoading=h),"can-cancel":!0,"is-full-page":s.fullPage},null,8,["active","is-full-page"]),e("div",ee,[a(r,{ref:"searchModal"},null,512),e("div",te,[a(n,{to:"/products",class:"bg-primary py-1 fixed top-0 left-0 right-0 z-30 hover:opacity-60"},{default:i(()=>[se]),_:1}),e("div",oe,[e("div",le,[e("div",re,[e("header",ae,[e("div",ne,[e("button",{type:"button",class:"mr-4 hover:text-highlight md:hidden",onClick:t[1]||(t[1]=(...h)=>o.toggleBurger&&o.toggleBurger(...h))},de),e("h1",ce,[e("a",he,"遍地黃金",512)]),e("div",me,[e("nav",ue,[e("div",ge,[pe,e("button",{type:"button",class:"material-symbols-outlined",onClick:t[2]||(t[2]=(...h)=>o.toggleBurger&&o.toggleBurger(...h))}," close ")]),e("ul",fe,[e("li",_e,[a(n,{to:"/products",class:"block py-4 md:py-1",onClick:o.toggleBurger},{default:i(()=>[l("產品一覽")]),_:1},8,["onClick"]),e("div",xe,[a(C,{onToggleMenu:o.toggleBurger},null,8,["onToggleMenu"])])]),s.loginStatus?(d(),m("li",ve,[a(n,{to:"/user/orders/1",onClick:x(o.toggleBurger,["prevent"])},{default:i(()=>[l("查詢訂單")]),_:1},8,["onClick"])])):M("",!0),e("li",be,[s.loginStatus?(d(),m("a",{key:1,href:"#",onClick:[t[3]||(t[3]=x((...h)=>o.toggleBurger&&o.toggleBurger(...h),["prevent"])),t[4]||(t[4]=(...h)=>s.logout&&s.logout(...h))],class:"text-secondary"},"登出")):(d(),v(n,{key:0,to:"/login",onClick:x(o.toggleBurger,["prevent"])},{default:i(()=>[l("登入 / 註冊")]),_:1},8,["onClick"]))])])],512)],512)]),e("ul",ye,[e("li",we,[e("button",{type:"button",class:"hover:text-highlight material-symbols-outlined hover:scale-110",ref:"searchButton",onClick:t[5]||(t[5]=(...h)=>o.showSearchModal&&o.showSearchModal(...h))}," search ",512)]),e("li",ke,[s.loginStatus?(d(),v(n,{key:0,to:"/",class:"flex items-center text-secondary",onClick:s.logout},{default:i(()=>[Ce,Me]),_:1},8,["onClick"])):(d(),v(n,{key:1,to:"/login",class:"flex items-center md:px-2 hover:opacity-70"},{default:i(()=>[Le,Be]),_:1}))]),e("li",$e,[a(n,{to:"/user/carts",class:"md:pl-2 hover:opacity-70"},{default:i(()=>[e("span",Se,[l(" shopping_cart "),s.loginStatus&&s.cartlength?(d(),m("div",Ve,[e("p",Pe,k(s.cartlength),1)])):M("",!0)])]),_:1})])])])])],512)],512)]),e("div",je,[a($)]),e("footer",Ne,[e("div",Te,[e("div",ze,[Re,e("div",Oe,[a(S,{dynamicPath:"/register"},{default:i(()=>[Fe]),_:1})])])]),e("section",Ee,[e("div",Ue,[e("ul",De,[e("li",null,[a(n,{to:"/aboutUs",class:"md:pr-6 md:border-r-2 md:border-r-fog-300 hover:opacity-70"},{default:i(()=>[l("關於我們 ")]),_:1})]),e("li",null,[a(n,{to:"/contactUs",class:"md:px-6 md:border-r-2 md:border-r-fog-300 hover:opacity-70"},{default:i(()=>[l("聯絡我們 ")]),_:1})]),e("li",null,[a(n,{to:"/freight&refund",class:"md:px-6 md:border-r-2 md:border-r-fog-300 hover:opacity-70"},{default:i(()=>[l("運費 / 退貨說明 ")]),_:1})]),e("li",null,[a(n,{to:"/privacy",class:"md:pl-6 hover:opacity-70"},{default:i(()=>[l("私隱條款")]),_:1})])]),qe])])])])],64)}const Qe=y(Z,[["render",Ae]]);export{Qe as default};
