import{o as a,c as s,a as e,F as d,r as h,t as u,b as o,w as g,u as r,X as v,d as p,Y as w,V as k,e as x}from"./index-8BXeOenW.js";function A(i,t){return a(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"fill-rule":"evenodd",d:"M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z","clip-rule":"evenodd"})])}function y(i,t){return a(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{d:"M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"})])}const B={class:"bg-white"},$={class:"pb-24 pt-6 px-4 sm:px-6 lg:px-8"},T={class:"hidden lg:block"},Y=e("h3",{class:"sr-only"},"Categories",-1),C={role:"list",class:"space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"},S=["href"],L={class:"-my-3 flow-root"},z={class:"font-medium text-gray-900"},P={class:"ml-6 flex items-center"},j={class:"space-y-4"},E=["id","name","value","checked"],N=["for"],G={__name:"ProductFiltter",setup(i){const t=[{name:"Totes",href:"#"},{name:"Backpacks",href:"#"},{name:"Travel Bags",href:"#"},{name:"Hip Bags",href:"#"},{name:"Laptop Sleeves",href:"#"}],f=[{id:"color",name:"Color",options:[{value:"white",label:"White",checked:!1},{value:"beige",label:"Beige",checked:!1},{value:"blue",label:"Blue",checked:!0},{value:"brown",label:"Brown",checked:!1},{value:"green",label:"Green",checked:!1},{value:"purple",label:"Purple",checked:!1}]},{id:"category",name:"Category",options:[{value:"new-arrivals",label:"New Arrivals",checked:!1},{value:"sale",label:"Sale",checked:!1},{value:"travel",label:"Travel",checked:!0},{value:"organization",label:"Organization",checked:!1},{value:"accessories",label:"Accessories",checked:!1}]},{id:"size",name:"Size",options:[{value:"2l",label:"2L",checked:!1},{value:"6l",label:"6L",checked:!1},{value:"12l",label:"12L",checked:!1},{value:"18l",label:"18L",checked:!1},{value:"20l",label:"20L",checked:!1},{value:"40l",label:"40L",checked:!0}]}];return(_,c)=>(a(),s("div",B,[e("section",$,[e("form",T,[Y,e("ul",C,[(a(),s(d,null,h(t,l=>e("li",{key:l.name},[e("a",{href:l.href},u(l.name),9,S)])),64))]),(a(),s(d,null,h(f,l=>o(r(k),{as:"div",key:l.id,class:"border-b border-gray-200 py-6"},{default:g(({open:b})=>[e("h3",L,[o(r(v),{class:"flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"},{default:g(()=>[e("span",z,u(l.name),1),e("span",P,[b?(a(),p(r(A),{key:1,class:"h-5 w-5","aria-hidden":"true"})):(a(),p(r(y),{key:0,class:"h-5 w-5","aria-hidden":"true"}))])]),_:2},1024)]),o(r(w),{class:"pt-6"},{default:g(()=>[e("div",j,[(a(!0),s(d,null,h(l.options,(n,m)=>(a(),s("div",{key:n.value,class:"flex items-center"},[e("input",{id:`filter-${l.id}-${m}`,name:`${l.id}[]`,value:n.value,type:"checkbox",checked:n.checked,class:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"},null,8,E),e("label",{for:`filter-${l.id}-${m}`,class:"ml-3 text-sm text-gray-600"},u(n.label),9,N)]))),128))])]),_:2},1024)]),_:2},1024)),64))])])]))}},M={class:"grid grid-cols-4 gap-x-8 gap-y-10 py-16"},V={class:"aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75"},F=["src","alt"],I=["href"],K=e("span",{class:"absolute inset-0 z-10","aria-hidden":"true"},null,-1),Q=e("p",{"aria-hidden":"true",class:"mt-1"},"Shop now",-1),U={__name:"ProductList",setup(i){const t=[{name:"New Arrivals",href:"#",imageSrc:"https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",imageAlt:"Models sitting back to back, wearing Basic Tee in black and bone."},{name:"Basic Tees",href:"#",imageSrc:"https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",imageAlt:"Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."},{name:"尼氨全消光半衬双面布反面磨毛",href:"#",imageSrc:"http://30612580.s21i.faiusr.com/4/3/ABUIABAEGAAgofTKpQYoztrMkAEwoAY4oAY!700x700!600x600.png.webp",imageAlt:"Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."},{name:"尼氨抗菌健康布",href:"#",imageSrc:"http://30612580.s21i.faiusr.com/4/3/ABUIABAEGAAg-PTKpQYonI-s8AYwoAY4oAY!700x700!600x600.png.webp",imageAlt:"Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."},{name:"尼氨细楼梯布",href:"#",imageSrc:"http://30612580.s21i.faiusr.com/4/3/ABUIABAEGAAg3PTKpQYosZ650wYwoAY4oAY!700x700!600x600.png.webp",imageAlt:"Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."}];return(f,_)=>(a(),s("div",M,[(a(),s(d,null,h(t,c=>e("div",{key:c.name,class:"group relative text-base sm:text-sm"},[e("div",V,[e("img",{src:c.imageSrc,alt:c.imageAlt,class:"object-cover object-center"},null,8,F)]),e("a",{href:c.href,class:"mt-6 block font-medium text-gray-900"},[K,x(" "+u(c.name),1)],8,I),Q])),64))]))}},Z={class:"grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4"},H={class:"lg:col-span-3"},O={__name:"Products",setup(i){return(t,f)=>(a(),s("div",Z,[o(G),e("div",H,[o(U)])]))}};export{O as default};
