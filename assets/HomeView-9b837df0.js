import{f as n}from"./frontStore-874515a5.js";import{_ as r,k as i,B as w,l as k,r as l,o as m,c as p,f as t,b as s,w as a,d as e,p as g,S as j,e as P,m as I}from"./index-10c4a326.js";import{P as u}from"./PillBtnComponent-f398647c.js";import{_ as $}from"./dog-a3e5cb0f.js";import{P as A}from"./ProductListComponent-a9ff79a6.js";import"./sweetalert2.all-b5a5b749.js";const B="/vue-live-final/assets/All-About-Golden-Retrievers-text-a458f637.svg",C="/vue-live-final/assets/dogBall-2ac0c2b5.svg",N={components:{PillBtnComponent:u},methods:{dogAnimate(){i.timeline({repeat:-1,repeatDelay:2}).set(".dogAni, .ballAni",{opacity:0}).fromTo(".dogAni",{x:-200,rotation:10},{x:0,opacity:100,rotation:0,duration:1.5},"<").from(".ballAni",{opacity:0,x:200,rotation:360,duration:1.5,ease:w.easeOut}).from(".dogAni",{y:20,ease:k.easeOut},"<")}},mounted(){this.dogAnimate()}},R={class:"bg-[url('@/assets/images/layout/mainBanner-sm.svg')] bg-cover -mt-24 pb-[184px] mb-6 overflow-hidden md:-mt-[108px] md:bg-[url('@/assets/images/layout/mainBanner-lg.svg')]"},S={class:"container pt-48"},T=g('<img src="'+B+'" alt="All about golden retrievers" class="w-[200px] mb-4 lg:w-[340px] lg:mb-8"><h3 class="text-lg font-bold mb-4 lg:text-h2 lg:mb-16">讓您輕鬆一次購足 <br class="mb-1 md:hidden">高品質的<span class="px-1 ml-1 bg-secondary text-white inline-block">黃金獵犬精品</span><br class="mb-2"> 享受免運優惠！ </h3>',2),H={class:"relative z-10"},D=t("div",{class:"w-full relative"},[t("img",{src:$,alt:"dog image",class:"dogAni absolute -left-10 -top-20 w-[400px] overflow-hidden md:w-[500px] md:left-10 md:-top-32 lg:w-[600px] lg:left-52"}),t("img",{src:C,alt:"football image",class:"ballAni absolute top-20 left-[300px] w-[135px] md:w-44 md:left-96 lg:left-[700px]"})],-1);function L(c,_,h,x,f,b){const d=l("PillBtnComponent");return m(),p("section",R,[t("div",S,[T,t("div",H,[s(d,null,{default:a(()=>[e(" 大家都買什麼 ")]),_:1})]),D])])}const V=r(N,[["render",L]]),O="/vue-live-final/assets/cat-asseccary-e5f58140.svg",Q="/vue-live-final/assets/cat-homeDecro-d845829f.svg",W="/vue-live-final/assets/cat-bedding-a35cc005.svg",U="/vue-live-final/assets/cat-tech-da980602.svg",E="/vue-live-final/assets/cat-clothing-c854a373.svg",G="/vue-live-final/assets/cat-petstuff-776ffa50.svg",X="/vue-live-final/assets/news-lg-ff4de522.svg",z="/vue-live-final/assets/news-sm-f272f24e.svg",J="/vue-live-final/assets/dogAndHumanImg-sm-05870157.jpg",q="/vue-live-final/assets/dogAndHumanImg-lg-e03e6a5c.jpg",F="/vue-live-final/assets/proImg1-4afa3db7.svg",K="/vue-live-final/assets/proImg2-25637624.svg",Y="/vue-live-final/assets/proImg3-505caaeb.svg",M="/vue-live-final/assets/proImg4-bb67fe0d.svg",Z="/vue-live-final/assets/recomImg1-caeb349d.svg",tt="/vue-live-final/assets/recomImg2-5a7861a0.svg",st="/vue-live-final/assets/recomImg3-8bce16e7.svg",at="/vue-live-final/assets/recomImg4-37bb5ba9.svg",ot="/vue-live-final/assets/recomImg5-2936a98f.svg",et="/vue-live-final/assets/recomImg6-3626cdcb.svg";i.registerPlugin(j);const lt={data(){return{windowWidth:window.innerWidth}},components:{HeroComponent:V,ProductListComponent:A,PillBtnComponent:u},methods:{...P(n,["getProducts"])},computed:{...I(n,["products","getNewProducts"])},mounted(){this.getProducts()}},ct={class:"container"},dt={class:"mb-6"},nt=t("h2",{class:"titleDash text-h4 text-center text-dark pb-5 mb-7"}," 產品類別",-1),rt={class:"px-6"},it={class:"grid grid-cols-6 md:mb-15"},mt={class:"col-span-2 py-3 px-7 rounded-2.5xl hover:bg-primary hover:text-dark md:px-15 xl:col-span-1 mx-auto"},pt=t("img",{src:O,alt:"category icon",class:"categoryImg","data-aos":"fade-down","data-aos-delay":"300"},null,-1),gt=t("h3",{class:"text-lg whitespace-nowrap","data-aos":"fade-up","data-aos-delay":"300"},"配件配飾",-1),ut={class:"col-span-2 py-3 px-7 rounded-2.5xl hover:bg-primary hover:text-dark md:px-15 xl:col-span-1 mx-auto"},_t=t("img",{src:Q,alt:"category icon",class:"categoryImg","data-aos":"fade-down","data-aos-delay":"300"},null,-1),ht=t("h3",{class:"text-lg whitespace-nowrap","data-aos":"fade-up","data-aos-delay":"300"},"居家配件",-1),xt={class:"col-span-2 py-3 px-7 rounded-2.5xl hover:bg-primary hover:text-dark md:px-15 xl:col-span-1 mx-auto"},ft=t("img",{src:W,alt:"category icon",class:"categoryImg","data-aos":"fade-down","data-aos-delay":"300"},null,-1),bt=t("h3",{class:"text-lg whitespace-nowrap","data-aos":"fade-up","data-aos-delay":"300"},"床上用品",-1),vt={class:"col-span-2 py-3 px-7 rounded-2.5xl hover:bg-primary hover:text-dark md:px-15 xl:col-span-1 mx-auto"},yt=t("img",{src:U,alt:"category icon",class:"categoryImg","data-aos":"fade-down","data-aos-delay":"300"},null,-1),wt=t("h3",{class:"text-lg whitespace-nowrap","data-aos":"fade-up","data-aos-delay":"300"},"科技配件",-1),kt={class:"col-span-2 py-3 px-7 rounded-2.5xl hover:bg-primary hover:text-dark md:px-15 xl:col-span-1 mx-auto"},jt=t("img",{src:E,alt:"category icon",class:"categoryImg","data-aos":"fade-down","data-aos-delay":"300"},null,-1),Pt=t("h3",{class:"text-lg whitespace-nowrap","data-aos":"fade-up","data-aos-delay":"300"},"衣物大全",-1),It={class:"col-span-2 py-3 px-7 rounded-2.5xl hover:bg-primary hover:text-dark md:px-15 xl:col-span-1 mx-auto"},$t=t("img",{src:G,alt:"category icon",class:"categoryImg","data-aos":"fade-down","data-aos-delay":"300"},null,-1),At=t("h3",{class:"text-lg whitespace-nowrap","data-aos":"fade-up","data-aos-delay":"300"},"有狗亂入",-1),Bt=t("img",{src:X,alt:"news image",class:"hidden w-full h-auto mb-6 md:mb-12 md:block","data-aos":"fade-right","data-aos-delay":"300"},null,-1),Ct=t("img",{src:z,alt:"news image",class:"block w-full h-auto mb-6 md:mb-12 md:hidden","data-aos":"fade-right","data-aos-delay":"300"},null,-1),Nt={class:"mb-6 md:mb-12"},Rt=t("h2",{class:"titleDash text-h4 text-center text-dark pb-5 mb-4"}," 最新上架",-1),St={class:"flex justify-center"},Tt=t("img",{src:J,alt:"dog image",class:"md:hidden mb-14 w-full"},null,-1),Ht=t("img",{src:q,alt:"human and dog image",class:"hidden md:block mb-14 w-full"},null,-1),Dt={class:"container"},Lt=g('<section class="mb-12"><h2 class="titleDash text-h4 text-center text-dark pb-5 mb-4"> 我們願意承諾您</h2><ul class="rounded-lg2 shadow-lg2 bg-white pt-8 pb-11 px-13 grid grid-cols-12 gap-y-9 md:gap-x-9 lg:gap-x-4"><li class="col-span-12 md:col-start-2 md:col-span-5 xl:col-start-0 xl:col-span-3" data-aos="fade-up-right" data-aos-delay="100"><img src="'+F+'" alt="dog image" class="mx-auto"><h4 class="-translate-y-2/3 text-center bg-secondary text-white text-lg py-2 px-10 rounded-lg2"> 分享生活實用好物</h4></li><li class="col-span-12 md:col-span-5 xl:col-span-3" data-aos="fade-up-left" data-aos-delay="100"><img src="'+K+'" alt="dog image" class="mx-auto"><h4 class="-translate-y-2/3 text-center bg-secondary text-white text-lg py-2 px-10 rounded-lg2"> 商品如實描述</h4></li><li class="col-span-12 md:col-start-2 md:col-span-5 xl:col-start-0 xl:col-span-3" data-aos="fade-up-right"><img src="'+Y+'" alt="dog image" class="mx-auto"><h4 class="-translate-y-2/3 text-center bg-secondary text-white text-lg py-2 px-10 rounded-lg2"> 滿 NT$ 900 免運 </h4></li><li class="col-span-12 md:col-span-5 xl:col-span-3" data-aos="fade-up-left"><img src="'+M+'" alt="dog image" class="mx-auto"><h4 class="-translate-y-2/3 text-center bg-secondary text-white text-lg py-2 px-10 rounded-lg2"> 售後無憂有保障</h4></li></ul></section>',1),Vt={class:""},Ot=t("h2",{class:"titleDash text-h4 text-center text-dark pb-5 mb-7"}," 顧客好評推薦",-1),Qt={class:"grid grid-cols-2 gap-4 md:gap-6"},Wt={class:"col-span-2 bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 lg:col-span-1 md:px-4 hover:opacity-70","data-aos":"flip-up"},Ut=t("img",{src:Z,alt:"customer pic",class:"w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0 md:ml-0"},null,-1),Et=t("div",null,[t("h2",{class:"text-lg flex items-center justify-center mb-2 md:justify-start"},[t("span",{class:"pr-4 border-r-2 border-r-fog-200 font-bold"},"阿金"),e(),t("span",{class:"text-fog-400 text-h6 ml-4"},"柚木底座黃金頭像刻畫")]),t("p",{class:"text-sm text-dark"}," 非常滿意！雕刻技術非常精湛，顏色也非常漂亮。整體來說，這是一件非常精美的藝術品，值得收藏～實物比圖片更有質感！感覺值了～ ")],-1),Gt={class:"col-span-2 bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 lg:col-span-1 md:px-4 hover:opacity-70 md:flex md:justify-start","data-aos":"flip-up"},Xt=t("img",{src:tt,alt:"customer pic",class:"w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0 md:ml-0"},null,-1),zt=t("div",null,[t("h2",{class:"text-lg flex items-center justify-center mb-2 md:justify-start"},[t("span",{class:"pr-4 border-r-2 border-r-fog-200 font-bold"},"旺財媽媽"),e(),t("span",{class:"text-fog-400 text-h6 ml-4"},"藝術風 iPhone 14 pro 手機殼")]),t("p",{class:"text-sm text-dark"}," 對於藝術風iPhone 14 Pro手機殼給予高度評價。手機殼的設計非常獨特，充滿藝術感，而且質感也很好。此外，手機殼的保護性能也非常出色，可以有效保護手機不受損。 ")],-1),Jt={class:"col-span-2 bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 lg:col-span-1 md:px-4 hover:opacity-70","data-aos":"flip-up"},qt=t("img",{src:st,alt:"customer pic",class:"w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0 md:ml-0"},null,-1),Ft=t("div",null,[t("h2",{class:"text-lg flex items-center justify-center mb-2 md:justify-start"},[t("span",{class:"pr-4 border-r-2 border-r-fog-200 font-bold"},"麻糬爸爸"),e(),t("span",{class:"text-fog-400 text-h6 ml-4"},"全人手繪畫黃金油畫")]),t("p",{class:"text-sm text-dark"}," 油畫非常精美，色彩鮮豔，繪畫技巧精湛，能夠看出畫家花了很多時間和精力。這不僅僅是一件藝術品，更是一個擁有深刻意義的作品。雖然油畫沒有連框，但是絲毫不影響畫作的美感，非常滿意。 ")],-1),Kt={class:"col-span-2 bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 lg:col-span-1 md:px-4 hover:opacity-70","data-aos":"flip-up"},Yt=t("img",{src:at,alt:"customer pic",class:"w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0 md:ml-0"},null,-1),Mt=t("div",null,[t("h2",{class:"text-lg flex items-center justify-center mb-2 md:justify-start"},[t("span",{class:"pr-4 border-r-2 border-r-fog-200 font-bold"},"QQQ"),e(),t("span",{class:"text-fog-400 text-h6 ml-4"},"簡約水彩黃金圖案購物袋")]),t("p",{class:"text-sm text-dark"}," 讚讚讚，什麼都很好買欸。 ")],-1),Zt={class:"col-span-2 bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 lg:col-span-1 md:px-4 hover:opacity-70","data-aos":"flip-up"},ts=t("img",{src:ot,alt:"customer pic",class:"w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0 md:ml-0"},null,-1),ss=t("div",null,[t("h2",{class:"text-lg flex items-center justify-center mb-2 md:justify-start"},[t("span",{class:"pr-4 border-r-2 border-r-fog-200 font-bold"},"索菲亞"),e(),t("span",{class:"text-fog-400 text-h6 ml-4"},"華麗風格 iPhone 14 pro 手機殼")]),t("p",{class:"text-sm text-dark"}," 還沒有養狗，但能夠擁有可愛黃金的產品也好滿足！ ")],-1),as={class:"col-span-2 bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 lg:col-span-1 md:px-4 hover:opacity-70","data-aos":"flip-up"},os=t("img",{src:et,alt:"customer pic",class:"w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0 md:ml-0"},null,-1),es=t("div",null,[t("h2",{class:"text-lg flex items-center justify-center mb-2 md:justify-start"},[t("span",{class:"pr-4 border-r-2 border-r-fog-200 font-bold"},"胖子"),e(),t("span",{class:"text-fog-400 text-h6 ml-4"},"單一尺吋簡潔黃金全身T shirt")]),t("p",{class:"text-sm text-dark"}," 感謝網站提供專業的意見，T shirt穿上好合適，讚 ")],-1);function ls(c,_,h,x,f,b){const d=l("HeroComponent"),o=l("RouterLink"),v=l("ProductListComponent"),y=l("PillBtnComponent");return m(),p("main",null,[s(d),t("div",ct,[t("section",dt,[nt,t("div",rt,[t("ul",it,[t("li",mt,[s(o,{to:"products/category/配件配飾"},{default:a(()=>[pt,gt]),_:1})]),t("li",ut,[s(o,{to:"products/category/居家配件"},{default:a(()=>[_t,ht]),_:1})]),t("li",xt,[s(o,{to:"products/category/床上用品"},{default:a(()=>[ft,bt]),_:1})]),t("li",vt,[s(o,{to:"products/category/科技配件"},{default:a(()=>[yt,wt]),_:1})]),t("li",kt,[s(o,{to:"products/category/衣物大全"},{default:a(()=>[jt,Pt]),_:1})]),t("li",It,[s(o,{to:"products/category/有狗亂入"},{default:a(()=>[$t,At]),_:1})])])])]),s(o,{to:"/products",class:"relative"},{default:a(()=>[Bt,Ct]),_:1}),t("section",Nt,[Rt,s(v,{products:c.getNewProducts},null,8,["products"]),t("div",St,[s(y,{dynamicPath:"/products"},{default:a(()=>[e(" 看更多產品 ")]),_:1})])])]),Tt,Ht,t("div",Dt,[Lt,t("section",Vt,[Ot,t("ul",Qt,[t("li",Wt,[s(o,{to:"/products/category/居家配件/product/-NR4OVodQaSel9f3YUEz",class:"md:flex md:justify-start"},{default:a(()=>[Ut,Et]),_:1})]),t("li",Gt,[s(o,{to:"/products/category/科技配件/product/-NR3OicxXxWeJSTesceW",class:"md:flex md:justify-start"},{default:a(()=>[Xt,zt]),_:1})]),t("li",Jt,[s(o,{to:"/products/category/居家配件/product/-NR3nAQiL9wk2cxJuPOs",class:"md:flex md:justify-start"},{default:a(()=>[qt,Ft]),_:1})]),t("li",Kt,[s(o,{to:"/products/category/配件配飾/product/-NPgGEI44BIK6eUHna2C",class:"md:flex md:justify-start"},{default:a(()=>[Yt,Mt]),_:1})]),t("li",Zt,[s(o,{to:"/products/category/科技配件/product/-NR3nntTFRjRIB61p5Xm",class:"md:flex md:justify-start"},{default:a(()=>[ts,ss]),_:1})]),t("li",as,[s(o,{to:"/products/category/衣物大全/product/-NR3pf06yXUiGU34qnwp",class:"md:flex md:justify-start"},{default:a(()=>[os,es]),_:1})])])])])])}const ps=r(lt,[["render",ls]]);export{ps as default};
