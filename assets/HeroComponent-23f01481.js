import{g as a,S as r,C as d,_ as g,B as h,r as p,o as c,c as m,b as i,h as o,d as b,w,e as x}from"./index-23a0601b.js";import{_ as u}from"./dog-a3e5cb0f.js";const f="/vue-live-final/assets/dogBall-2ac0c2b5.svg",W="/vue-live-final/assets/All-About-Golden-Retrievers-text-a458f637.svg";a.registerPlugin(r,d);const _={data(){return{windowWidth:window.innerWidth,resizeHeight:Number,resizeDogWidth:Number,resizeDogHeight:Number,dogTop:Number,dogRight:Number,ballWidth:Number,ballTop:Number,ballLeft:Number}},watch:{windowWidth(t,l){let s=.96;this.windowWidth>=768&&(s=2.4),this.resizeHeight=t/s,this.resizeImg()}},methods:{handleResize(){this.windowWidth=window.innerWidth},resizeImg(){let t;this.windowWidth<768?t=.96:t=2.4,this.resizeHeight=this.windowWidth/t,this.dogHeight=this.resizeDogWidth*1.04,this.windowWidth<768?(this.dogTop=this.resizeHeight*.5,this.dogRight=this.windowWidth*.083,this.resizeDogWidth=this.windowWidth*.99,this.ballLeft=this.windowWidth*.794,this.ballTop=this.resizeHeight*.794):this.windowWidth>=768&&(this.resizeDogWidth=this.windowWidth*.535,this.dogTop=this.resizeHeight*.28,this.dogRight=this.windowWidth*.223,this.ballLeft=this.windowWidth*.65,this.ballTop=this.resizeHeight*.74),this.ballWidth=this.resizeDogWidth*.28},async dogAnimate(){this.$gsap.timeline({ScrollTrigger:{trigger:this.$refs.heroDoggie,start:"top top",end:"bottom center",scrub:!0}}).set(".ball, .heroDoggie, .banner ",{opacity:0}).fromTo(".banner",{opacity:50,y:-400},{y:0,opacity:100}).fromTo(".heroDoggie",{x:-200,rotation:10},{x:0,opacity:100,rotation:0,duration:1.5},"<").from(".ball",{opacity:0,x:200,rotation:360,duration:1.5,ease:h.easeOut}).from(".heroDoggie",{y:20,ease:h.easeOut,delay:.25},"<")}},mounted(){window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",r.update);let t;this.windowWidth<768?t=.96:t=2.4,this.resizeHeight=this.windowWidth/t,this.resizeImg(),(async()=>await this.dogAnimate())()},beforeUnmount(){window.removeEventListener("resize",this.handleResize)}},z={class:"relative w-full"},v={class:"banner container pt-[96px] md:pt-[172px] xl:pt-[216px] relative"},y=x('<img src="'+W+'" alt="" class="h-14 w-auto mb-4 lg:h-24"><h2 class="font-bold mb-4 text-4.5 lg:text-h4 xl:mb-16 xl:text-h2"> 讓您輕鬆一次購足 <br class="mb-1 md:hidden"> 高品質的<span class="bg-secondary text-white p-1">黃金獵犬精品</span><br class="mb-1"><span>享受免運優惠！</span></h2>',2),D=i("button",{type:"button",class:"btn flex items-center text-sm md:text-h6 lg:btn-md xl:btn-lg"},[i("span",{class:"pl-1 lg:pl-2"},"大家都買什麼"),i("span",{class:"material-symbols-outlined ml-3 text-base lg:text-2xl"}," chevron_right ")],-1);function H(t,l,s,T,e,N){const n=p("RouterLink");return c(),m("div",{class:"hero -z-20 relative bg-hero-pattern-sm -mt-[96px] md:-mt-[172px] md:bg-banner-lg mb-6 bg-no-repeat bg-cover max-h-[100vh-36px] md:static md:bg-contain md:mb-12 xl:-mt-[216px] overflow-hidden",style:o({"min-height":`${e.resizeHeight}px`})},[i("div",z,[i("img",{src:u,alt:"",class:"heroDoggie absolute",style:o({width:`${e.resizeDogWidth}px`,height:`${e.resizeDogHeight}px`,top:`${e.dogTop}px`,right:`${e.dogRight}px`}),ref:"heroDoggie"},null,4),i("img",{src:f,alt:"",class:"ball absolute",style:o({width:`${e.ballWidth}px`,height:`${e.ballWidth}px`,top:`${e.ballTop}px`,left:`${e.ballLeft}px`})},null,4)]),i("div",v,[y,b(n,{to:"/products"},{default:w(()=>[D]),_:1})])],4)}const S=g(_,[["render",H]]);export{S as H};