"use strict";(self["webpackChunkvue_week8_final"]=self["webpackChunkvue_week8_final"]||[]).push([[758],{6758:function(t,e,a){a.r(e),a.d(e,{default:function(){return S}});var s=a(6252),i=a(3577),o=a(9963);const l={class:"container mt-md-5 mt-3 mb-7"},r={class:"row",style:{"margin-top":"5rem"}},n={class:"col-md-3"},d={class:"accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-0"},c={class:"card border-0"},u=(0,s._)("div",{class:"card-header px-0 py-4 bg-white",id:"headingOne","data-bs-toggle":"collapse","data-bs-target":"#collapseOne"},[(0,s._)("h4",{class:"mx-auto"},"商品分類")],-1),p={id:"collapseOne",class:"collapse show","aria-labelledby":"headingOne"},g={class:"card-body py-0"},h={class:"list-group list-unstyled",style:{border:"0px"}},m=(0,s.Uk)("所有商品"),_=(0,s.Uk)("上衣"),b=(0,s.Uk)("外套"),w=(0,s.Uk)("訂製鞋款"),v=(0,s.Uk)("飾品/配件"),k={class:"col-md-9"},y={class:"row g-2 row-cols-1 row-cols-md-3 row-cols-lg-3"},f={class:"card border-0 m-2 position-relative"},P=["alt"],x={class:"mb-0 mt-3",style:{overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},$={class:"d-flex justify-content-between mb-1"},C={class:"text-muted"},W=["onClick","disabled"];function D(t,e,a,D,L,U){const q=(0,s.up)("Loading"),z=(0,s.up)("router-link"),I=(0,s.up)("Pagination");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",l,[(0,s.Wm)(q,{active:L.isLoading},null,8,["active"]),(0,s._)("div",r,[(0,s._)("div",n,[(0,s._)("div",d,[(0,s._)("div",c,[u,(0,s._)("div",p,[(0,s._)("div",g,[(0,s._)("ul",h,[(0,s._)("li",null,[(0,s.Wm)(z,{to:"/products",class:"list-group-item list-group-item-action border-0"},{default:(0,s.w5)((()=>[m])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(z,{to:{path:"/products",query:{category:"Top"}},class:"list-group-item list-group-item-action border-0"},{default:(0,s.w5)((()=>[_])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(z,{to:{path:"/products",query:{category:"Outer"}},class:"list-group-item list-group-item-action border-0"},{default:(0,s.w5)((()=>[b])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(z,{to:{path:"/products",query:{category:"Shoes"}},class:"list-group-item list-group-item-action border-0"},{default:(0,s.w5)((()=>[w])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(z,{to:{path:"/products",query:{category:"Accessory"}},class:"list-group-item list-group-item-action border-0"},{default:(0,s.w5)((()=>[v])),_:1})])])])])])])]),(0,s._)("div",k,[(0,s._)("div",y,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(L.products,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"col mb-4",key:t.id},[(0,s._)("div",f,[(0,s.Wm)(z,{to:`/product/${t.id}`},{default:(0,s.w5)((()=>[(0,s._)("div",{style:(0,i.j5)([{backgroundImage:`url(${t.imageUrl})`},{height:"355px","background-size":"cover","background-position":"center center"}]),alt:t.title},null,12,P)])),_:2},1032,["to"]),(0,s._)("h5",x,[(0,s.Wm)(z,{class:"text-decoration-none fw-bold",to:`/product/${t.id}`},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.title),1)])),_:2},1032,["to"])]),(0,s._)("div",$,[(0,s._)("small",C,[(0,s._)("del",null,"NT$"+(0,i.zw)(t.origin_price),1)]),(0,s._)("strong",null,"NT$"+(0,i.zw)(t.price),1)]),(0,s._)("button",{class:"btn btn-secondary fw-bold text-white",onClick:(0,o.iM)((e=>U.addToCart(t.id)),["prevent"]),disabled:L.status.loadingItem===t.id}," 加入購物車 ",8,W)])])))),128))])])])]),(0,s.Wm)(I,{pages:L.pagination,onEmitPages:U.getProducts},null,8,["pages","onEmitPages"])],64)}const L={"aria-label":"Page navigation example"},U={class:"pagination justify-content-center"},q=(0,s._)("span",{"aria-hidden":"true"},"«",-1),z=[q],I={key:0,class:"page-link"},O=["onClick"],T=(0,s._)("span",{"aria-hidden":"true"},"»",-1),M=[T];function j(t,e,a,l,r,n){return(0,s.wg)(),(0,s.iD)("nav",L,[(0,s._)("ul",U,[(0,s._)("li",{class:(0,i.C_)([{disabled:!a.pages.has_pre},"page-item"])},[(0,s._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,o.iM)((t=>n.updatePage(a.pages.current_page-1)),["prevent"]))},z)],2),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.pages.total_pages,(t=>((0,s.wg)(),(0,s.iD)("li",{class:(0,i.C_)(["page-item",{active:a.pages.current_page===t}]),key:t},[t===a.pages.current_page?((0,s.wg)(),(0,s.iD)("span",I,(0,i.zw)(t),1)):((0,s.wg)(),(0,s.iD)("a",{key:1,class:"page-link",href:"#",onClick:(0,o.iM)((e=>n.updatePage(t)),["prevent"])},(0,i.zw)(t),9,O))],2)))),128)),(0,s._)("li",{class:(0,i.C_)(["page-item",{disabled:!a.pages.has_next}])},[(0,s._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,o.iM)((t=>n.updatePage(a.pages.current_page+1)),["prevent"]))},M)],2)])])}var H={props:["pages"],methods:{updatePage(t){this.$emit("emitPages",t)}}},N=a(3744);const Y=(0,N.Z)(H,[["render",j]]);var Z=Y,E=a(9868),K={data(){return{products:[],id:"",pagination:{},currentPage:1,isLoading:!1,status:{loadingItem:""}}},watch:{$route(){this.getProducts()}},components:{Pagination:Z},methods:{getProducts(t=1){this.isLoading=!0;const{category:e}=this.$route.query;let a=`https://vue3-course-api.hexschool.io/v2/api/luku612150/products?page=${t}`;e&&(a=`https://vue3-course-api.hexschool.io/v2/api/luku612150/products?page=${t}&category=${e}`),this.$http.get(a).then((t=>{this.isLoading=!1,this.products=t.data.products,this.pagination=t.data.pagination}))},addToCart(t){this.isLoading=!0,this.status.loadingItem=t;const e="https://vue3-course-api.hexschool.io/v2/api/luku612150/cart ",a={product_id:t,qty:1};this.$http.post(e,{data:a}).then((t=>{this.isLoading=!1,this.$swal(t.data.message),E.Z.emit("get-cart"),this.status.loadingItem=""}))}},mounted(){this.getProducts()}};const A=(0,N.Z)(K,[["render",D]]);var S=A}}]);
//# sourceMappingURL=758.2e6fb5a6.js.map