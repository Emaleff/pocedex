(function(){"use strict";var e={550:function(e,o,n){var t=n(9242),a=n(3396);function c(e,o,n,t,c,r){const s=(0,a.up)("the-header"),i=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(s),(0,a.Wm)(i)])}var r=n.p+"img/logo.b164a226.png";const s=e=>((0,a.dD)("data-v-77c51712"),e=e(),(0,a.Cn)(),e),i={class:"header"},l=s((()=>(0,a._)("div",{class:"container header__container"},[(0,a._)("img",{src:r,alt:"",class:"logo header__logo"})],-1))),m=[l];function p(e,o,n,t,c,r){return(0,a.wg)(),(0,a.iD)("header",i,m)}var u={name:"the-header"},d=n(89);const _=(0,d.Z)(u,[["render",p],["__scopeId","data-v-77c51712"]]);var v=_,g={components:{TheHeader:v}};const f=(0,d.Z)(g,[["render",c]]);var P=f,h=n(2483);function w(e,o,n,t,c,r){const s=(0,a.up)("the-pocemons-list");return(0,a.wg)(),(0,a.j4)(s)}const y={key:1,class:"container pocemon-list__container"},b={ref:"observer",class:"observer"};function k(e,o,n,t,c,r){const s=(0,a.up)("the-big-loader"),i=(0,a.up)("pocemon-card"),l=(0,a.up)("SmallLoader");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r.isLoading?((0,a.wg)(),(0,a.iD)("div",y,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.getPocemons,(e=>((0,a.wg)(),(0,a.j4)(i,{key:e.id,pocemon:e},null,8,["pocemon"])))),128))])):((0,a.wg)(),(0,a.j4)(s,{key:0})),e.isSmallLoader?((0,a.wg)(),(0,a.j4)(l,{key:2})):(0,a.kq)("",!0),(0,a._)("div",b,null,512)],64)}var L=n(7139);const C={class:"pocemon__card"},D={class:"pocemon__img-wrapp"},j=["src"],O={class:"pocemon__number"},S={class:"pocemon__name"};function I(e,o,n,t,c,r){const s=(0,a.up)("router-link"),i=(0,a.up)("pocemon-type");return(0,a.wg)(),(0,a.iD)("div",C,[(0,a.Wm)(s,{to:{name:"pocemonPage",params:{id:n.pocemon.id}}},{default:(0,a.w5)((()=>[(0,a._)("div",D,[(0,a._)("img",{src:n.pocemon.sprites.front_default,alt:"",class:"pocemon__img"},null,8,j)])])),_:1},8,["to"]),(0,a._)("div",O,"# "+(0,L.zw)(n.pocemon.id),1),(0,a._)("div",S,(0,L.zw)(n.pocemon.name),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.pocemon.types,(e=>((0,a.wg)(),(0,a.j4)(i,{types:e,key:e.slot},null,8,["types"])))),128))])}function Z(e,o,n,t,c,r){return(0,a.wg)(),(0,a.iD)("div",{class:(0,L.C_)(["pocemon__type",n.types.type.name])},(0,L.zw)(n.types.type.name),3)}var x={props:{types:{type:Object,reqired:!0}}};const T=(0,d.Z)(x,[["render",Z],["__scopeId","data-v-14256242"]]);var F=T,q={name:"PocemonCard",components:{PocemonType:F},props:{pocemon:{type:Object,required:!0}}};const z=(0,d.Z)(q,[["render",I],["__scopeId","data-v-3263622e"]]);var H=z,M=n(65);const W=e=>((0,a.dD)("data-v-1131c3ca"),e=e(),(0,a.Cn)(),e),Y={class:"loader"},K=W((()=>(0,a._)("div",{class:"heart-loader"},null,-1))),$=[K];function B(e,o,n,t,c,r){return(0,a.wg)(),(0,a.iD)("div",Y,$)}var E={};const U=(0,d.Z)(E,[["render",B],["__scopeId","data-v-1131c3ca"]]);var A=U;const G=e=>((0,a.dD)("data-v-3dfb0a0c"),e=e(),(0,a.Cn)(),e),J={class:"circle"},N=G((()=>(0,a._)("div",null,null,-1))),Q=G((()=>(0,a._)("div",null,null,-1))),R=G((()=>(0,a._)("div",null,null,-1))),V=G((()=>(0,a._)("div",null,null,-1))),X=G((()=>(0,a._)("div",null,null,-1))),ee=[N,Q,R,V,X];function oe(e,o,n,t,c,r){return(0,a.wg)(),(0,a.iD)("div",J,ee)}var ne={};const te=(0,d.Z)(ne,[["render",oe],["__scopeId","data-v-3dfb0a0c"]]);var ae=te,ce={name:"ThePocemonsList",components:{PocemonCard:H,TheBigLoader:A,SmallLoader:ae},computed:{...(0,M.Se)(["getPocemons","isFullPocemons","isSmallLoader"]),isLoading(){let e=!1;return this.getPocemons.length>0&&(e=!0),e}},methods:{...(0,M.nv)(["fetchPocemons","loadMorePocemons","loadPocemons"])},mounted(){let e={rootMargin:"5px",threshold:.5},o=e=>{e[0].isIntersecting&&!this.isFullPocemons&&this.loadPocemons()},n=new IntersectionObserver(o,e);n.observe(this.$refs.observer)}};const re=(0,d.Z)(ce,[["render",k],["__scopeId","data-v-02fd1ba0"]]);var se=re,ie={name:"TheMain",components:{ThePocemonsList:se}};const le=(0,d.Z)(ie,[["render",w]]);var me=le;function pe(e,o,n,t,c,r){const s=(0,a.up)("current-pocemon-card");return(0,a.wg)(),(0,a.j4)(s,{id:n.id},null,8,["id"])}const ue=e=>((0,a.dD)("data-v-a88b8346"),e=e(),(0,a.Cn)(),e),de={class:"container pocemon__container"},_e=ue((()=>(0,a._)("svg",{width:"19",height:"12",viewBox:"0 0 19 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z"})],-1))),ve=ue((()=>(0,a._)("span",null," Back",-1))),ge={class:"pocemon__wrapper"},fe={class:"pocemon__img-wrapper"},Pe=["src"],he={class:"pocemon__id-and-name"},we={class:"pocemon__id"},ye={class:"pocemon__name"},be={class:"pocemon__types-wrapper"},ke={class:"pocemon__stats-wrapp"};function Le(e,o,n,c,r,s){const i=(0,a.up)("router-link"),l=(0,a.up)("pocemon-type"),m=(0,a.up)("pocemon-stats");return(0,a.wg)(),(0,a.iD)("div",de,[(0,a.Wm)(i,{to:{name:"main"},class:"back"},{default:(0,a.w5)((()=>[_e,ve])),_:1}),e.pocemon?((0,a.wg)(),(0,a.j4)(t.uT,{key:0,appear:"",name:"card"},{default:(0,a.w5)((()=>[(0,a._)("div",ge,[(0,a._)("div",fe,[e.pocemon.sprites?((0,a.wg)(),(0,a.iD)("img",{key:0,src:e.pocemon.sprites.front_default,alt:""},null,8,Pe)):(0,a.kq)("",!0)]),(0,a._)("div",he,[(0,a._)("span",we," #"+(0,L.zw)(e.pocemon.id),1),(0,a._)("span",ye,(0,L.zw)(e.pocemon.name),1)]),(0,a._)("div",be,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.pocemon.types,(e=>((0,a.wg)(),(0,a.j4)(l,{types:e,key:e.slot},null,8,["types"])))),128))]),(0,a._)("div",ke,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.pocemon.stats,(e=>((0,a.wg)(),(0,a.j4)(m,{stat:e,key:e.stat.name},null,8,["stat"])))),128))])])])),_:1})):(0,a.kq)("",!0)])}const Ce={class:"pocemon__stats"},De={class:"pocemon__stat-name"},je={class:"pocemon__stat-count"};function Oe(e,o,n,t,c,r){return(0,a.wg)(),(0,a.iD)("div",Ce,[(0,a._)("span",De,(0,L.zw)(n.stat.stat.name),1),(0,a._)("span",je,(0,L.zw)(n.stat.base_stat),1)])}var Se={props:{stat:{type:Object,required:!0}}};const Ie=(0,d.Z)(Se,[["render",Oe],["__scopeId","data-v-86ca4240"]]);var Ze=Ie,xe={components:{PocemonType:F,PocemonStats:Ze},methods:{...(0,M.nv)(["fetchCurrentPocemon"])},computed:{...(0,M.Se)({pocemon:"getCurrentPocemon"})},created(){this.fetchCurrentPocemon(this.id)},props:{id:{type:String,required:!0}}};const Te=(0,d.Z)(xe,[["render",Le],["__scopeId","data-v-a88b8346"]]);var Fe=Te,qe={components:{CurrentPocemonCard:Fe},computed:{...(0,M.Se)(["getCurrentPocemon"])},props:{id:{type:String}}};const ze=(0,d.Z)(qe,[["render",pe]]);var He=ze,Me=n.p+"img/404.c0e6e33f.jpg";const We=e=>((0,a.dD)("data-v-724ca9b0"),e=e(),(0,a.Cn)(),e),Ye={class:"container not-found__container"},Ke=We((()=>(0,a._)("h2",{class:"not-found__title"},"Страница не найдена",-1))),$e=We((()=>(0,a._)("img",{src:Me,alt:"",class:"not-found__image"},null,-1))),Be=(0,a.Uk)("На главную");function Ee(e,o,n,t,c,r){const s=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",Ye,[Ke,$e,(0,a.Wm)(s,{to:{name:"main"},class:"not-found__back"},{default:(0,a.w5)((()=>[Be])),_:1})])}var Ue={};const Ae=(0,d.Z)(Ue,[["render",Ee],["__scopeId","data-v-724ca9b0"]]);var Ge=Ae;const Je=[{path:"/",name:"main",component:me},{path:"/:id",name:"pocemonPage",component:He,props:!0,beforeEnter:(e,o,n)=>{parseInt(e.params.id)&&e.params.id>0&&e.params.id<=904?n():n("/notFound")}},{path:"/notFound",name:"notFound",component:Ge}],Ne=(0,h.p7)({history:(0,h.PO)("/pocedex/"),routes:Je});var Qe=Ne,Re=(n(7658),n(1703),n(6265)),Ve=n.n(Re);const Xe={state(){return{allPocemons:[],currentPocemon:{},fullPocemons:!1,startPocemonPage:1,lastPocemonPage:20,limit:904,countPocemonsPage:20,smallLoader:!1}},getters:{getPocemons(e){return e.allPocemons},getCurrentPocemon(e){return e.currentPocemon},isFullPocemons(e){return e.fullPocemons},isSmallLoader(e){return e.smallLoader}},actions:{async loadPocemons(e){e.commit("updateSmallLoader",!0);let o=[];if(e.state.lastPocemonPage<900){for(let n=e.state.startPocemonPage;n<=e.state.lastPocemonPage;n++){const{data:e}=await Ve().get(`https://pokeapi.co/api/v2/pokemon/${n}`);o.push(e)}e.commit("updateCountPocemonPage"),e.commit("addPocemons",o)}else{for(let n=e.state.startPocemonPage;n<=e.state.limit;n++){const{data:e}=await Ve().get(`https://pokeapi.co/api/v2/pokemon/${n}`);o.push(e)}e.commit("addPocemons",o),e.commit("updateFullPocemons"),e.commit("updateSmallLoader",!1)}},async fetchCurrentPocemon(e,o){if(parseInt(o)&&o>0&&o<=904)try{const{data:n}=await Ve().get(`https://pokeapi.co/api/v2/pokemon/${o}`);e.commit("updateCurrentPocemons",n)}catch(n){throw new Error(n)}}},mutations:{updatePocemons(e,o){e.allPocemons=o},updateCurrentPocemons(e,o){e.currentPocemon=o},addPocemons(e,o){e.allPocemons=[...e.allPocemons,...o]},updateFullPocemons(e){e.fullPocemons=!0},updateCountPocemonPage(e){e.startPocemonPage+=e.countPocemonsPage,e.lastPocemonPage+=e.countPocemonsPage},updateSmallLoader(e,o){e.smallLoader=o}}};var eo=Xe,oo=(0,M.MT)({state:{},getters:{},mutations:{},actions:{},modules:{pocemons:eo}});(0,t.ri)(P).use(oo).use(Qe).mount("#app")}},o={};function n(t){var a=o[t];if(void 0!==a)return a.exports;var c=o[t]={exports:{}};return e[t](c,c.exports,n),c.exports}n.m=e,function(){var e=[];n.O=function(o,t,a,c){if(!t){var r=1/0;for(m=0;m<e.length;m++){t=e[m][0],a=e[m][1],c=e[m][2];for(var s=!0,i=0;i<t.length;i++)(!1&c||r>=c)&&Object.keys(n.O).every((function(e){return n.O[e](t[i])}))?t.splice(i--,1):(s=!1,c<r&&(r=c));if(s){e.splice(m--,1);var l=a();void 0!==l&&(o=l)}}return o}c=c||0;for(var m=e.length;m>0&&e[m-1][2]>c;m--)e[m]=e[m-1];e[m]=[t,a,c]}}(),function(){n.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(o,{a:o}),o}}(),function(){n.d=function(e,o){for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){n.p="/pocedex/"}(),function(){var e={143:0};n.O.j=function(o){return 0===e[o]};var o=function(o,t){var a,c,r=t[0],s=t[1],i=t[2],l=0;if(r.some((function(o){return 0!==e[o]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(i)var m=i(n)}for(o&&o(t);l<r.length;l++)c=r[l],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(m)},t=self["webpackChunkpocedex"]=self["webpackChunkpocedex"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(550)}));t=n.O(t)})();
//# sourceMappingURL=app.e022db1a.js.map