"use strict";(self.webpackChunkpayriva=self.webpackChunkpayriva||[]).push([[316],{1617:(e,t,a)=>{a.d(t,{A:()=>n});a(5043);var i=a(5475),s=a(579);const n=e=>{let{data:t}=e;return(0,s.jsxs)("div",{className:"blog",children:[(0,s.jsx)("div",{className:"thumbnail",children:(0,s.jsx)(i.N_,{to:`/payriva/blog-details/${t.id}`,className:"image",children:(0,s.jsx)("img",{src:"/payriva"+t.image,alt:"Blog Image"})})}),(0,s.jsxs)("div",{className:"info",children:[(0,s.jsxs)("ul",{className:"meta",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("i",{className:"far fa-calendar"}),t.date]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("i",{className:"far fa-eye"}),t.view]})]}),(0,s.jsx)("h3",{className:"title",children:(0,s.jsx)(i.N_,{to:`/payriva/blog-details/${t.id}`,children:t.title})}),(0,s.jsxs)(i.N_,{to:`/payriva/blog-details/${t.id}`,className:"link",children:[" ",(0,s.jsx)("mark",{children:"Read More"})," "]})]})]})}},2043:(e,t,a)=>{a.d(t,{A:()=>l});var i=a(5043),s=a(5751),n=a(6201),r=a.n(n),o=a(579);const l=e=>{let{data:t}=e;const[a,n]=(0,i.useState)(!1);return(0,o.jsxs)("div",{className:"funfact",children:[(0,o.jsx)("div",{className:"number",children:(0,o.jsx)(r(),{onChange:e=>{e&&n(!0)},offset:{top:10},delayedCall:!0,children:(0,o.jsx)(s.Ay,{end:a?t.number:0})})}),(0,o.jsx)("h6",{className:"text",children:t.text})]})}},2806:(e,t,a)=>{a.d(t,{A:()=>l});a(5043);var i=a(7619),s=a.n(i),n=a(5475),r=a(579);const o=e=>{let{data:t,classOption:a}=e;return(0,r.jsxs)("div",{className:`icon-box text-center ${a}`,children:[(0,r.jsx)("div",{className:"icon",children:(0,r.jsx)(s(),{id:`servicesvg-${t.id}`,option:{file:t.icon,animTimingFunction:"EASE",type:"oneByOne",delay:80}})}),(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)("h3",{className:"title",children:t.title}),(0,r.jsx)("div",{className:"desc",children:(0,r.jsx)("p",{id:"para",children:t.desc})}),(0,r.jsx)(n.N_,{to:t.link,className:"link",id:"link",children:t.pageLink})]})]})};o.defaultProps={classOption:"icon-box text-center"};const l=o},1057:(e,t,a)=>{a.d(t,{A:()=>n});a(5043);var i=a(579);const s=e=>{let{title:t,subTitle:a,titleOption:s,headingOption:n}=e;return(0,i.jsxs)("div",{className:`section-title ${s}`,"data-aos":"fade-up",children:[(0,i.jsx)("h2",{className:`title ${n}`,dangerouslySetInnerHTML:{__html:t}}),(0,i.jsx)("p",{className:"sub-title",children:a})]})};s.defaultProps={titleOption:"text-center",headingOption:"title"};const n=s},827:(e,t,a)=>{a.d(t,{A:()=>n});a(5043);var i=a(579);const s=e=>{let{subTitle:t,title:a,classOption:s}=e;return(0,i.jsxs)("div",{className:`section-title-two ${s}`,"data-aos":"fade-up",children:[(0,i.jsx)("span",{className:"sub-title",children:t}),(0,i.jsx)("h3",{className:"title",dangerouslySetInnerHTML:{__html:a}})]})};s.defaultProps={classOption:"section-title-two"};const n=s},7130:(e,t,a)=>{a.d(t,{A:()=>l});a(5043);var i=a(109),s=a(1617),n=a(1057),r=a(579);const o=e=>{let{SectionBgColor:t}=e;return(0,r.jsx)("div",{className:`section section-padding-t90-b100 ${t}`,children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(n.A,{title:"We are a full-service creative agency",subTitle:"Our team of designers, developers and creatives are perfectionists\r who love what they do and love"}),(0,r.jsx)("div",{className:"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6",children:i&&i.slice(0,3).map(((e,t)=>(0,r.jsx)("div",{className:"col mb-6","data-aos":"fade-up",children:(0,r.jsx)(s.A,{data:e},t)},t)))})]})})};o.defaultProps={SectionBgColor:"section section-padding-t90-b100"};const l=o},7801:(e,t,a)=>{a.d(t,{A:()=>p});var i=a(5043);const s=JSON.parse('[{"id":1,"image":"images/brand/client-logo-01.png"},{"id":2,"image":"images/brand/client-logo-02.png"},{"id":3,"image":"images/brand/client-logo-03.png"},{"id":4,"image":"images/brand/client-logo-04.png"},{"id":5,"image":"images/brand/client-logo-05.png"},{"id":6,"image":"images/brand/client-logo-06.png"}]');var n=a(5475),r=a(579);const o=e=>{let{data:t}=e;return(0,r.jsx)("div",{className:"brand",children:(0,r.jsx)(n.N_,{to:"/payriva/",children:(0,r.jsx)("img",{src:"/payriva"+t.image,alt:"logo image"})})})};var l=a(3024),d=a(7601),c=a(4671);const g=(0,i.forwardRef)(((e,t)=>{let{options:a,prevIcon:i,nextIcon:s,children:n,className:o,navClass:g,navStyle:h,navPosition:m,dotStyle:p,dotPosition:u}=e;const w=void 0!==(null===a||void 0===a?void 0:a.modules)?a.modules:[],b=`prev-${g||"swiper-nav"}`,v=`next-${g||"swiper-nav"}`,y={slidesPerView:3,spaceBetween:30,loop:!1,autoplay:{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{},...a,modules:[d.Vx,d.dK,d.Jq,d.Ij,...w],navigation:!(null===a||void 0===a||!a.navigation)&&{prevEl:`.${b}`,nextEl:`.${v}`},pagination:!(null===a||void 0===a||!a.pagination)&&{clickable:!0}};return(0,r.jsxs)("div",{className:(0,l.A)(o,"swiper-wrap position-relative",y.navigation&&h&&`nav-style-${h}`,y.navigation&&m&&`nav-position-${m}`,y.pagination&&p&&`dot-style-${p}`,y.pagination&&u&&`dot-position-${u}`),ref:t,children:[(0,r.jsx)(c.RC,{...y,children:n}),(null===y||void 0===y?void 0:y.navigation)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{type:"button",className:`swiper-btn swiper-btn-prev ${b}`,children:(0,r.jsx)("i",{className:(0,l.A)(i,"icon")})}),(0,r.jsx)("button",{type:"button",className:`swiper-btn swiper-btn-next ${v}`,children:(0,r.jsx)("i",{className:(0,l.A)(s,"icon")})})]})]})}));g.defaultProps={prevIcon:"fa fa-angle-left",nextIcon:"fa fa-angle-right",navStyle:1,navPosition:1,dotStyle:1,dotPosition:1},g.displayName="SwiperSlider";const h=g,m=e=>{let{classOption:t}=e;return(0,r.jsx)("div",{className:`brand-section section ${t}`,children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-lg-12","data-aos":"fade-up",children:(0,r.jsx)("div",{className:"brand-wrapper",children:(0,r.jsx)("div",{className:"brand-list",children:(0,r.jsx)(h,{className:"brand-carousel",options:{spaceBetween:30,slidesPerView:6,loop:!0,breakpoints:{1200:{slidesPerView:6},992:{slidesPerView:5},768:{slidesPerView:5},576:{slidesPerView:4},320:{slidesPerView:2}}},children:s&&s.map(((e,t)=>(0,r.jsx)(c.qr,{children:(0,r.jsx)(o,{data:e},t)},t)))})})})})})})})};m.defaultProps={classOption:"brand-section section section-padding-bottom"};const p=m},8731:(e,t,a)=>{a.d(t,{A:()=>o});a(5043);var i=a(6718),s=a(2043),n=a(579);const r=e=>{let{classOption:t}=e;return(0,n.jsx)("div",{className:`section section-padding-bottom ${t}`,children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-lg-12 mx-auto",children:(0,n.jsx)("div",{className:"row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6",children:i&&i.map(((e,t)=>(0,n.jsx)("div",{className:"col mb-6","data-aos":"fade-up",children:(0,n.jsx)(s.A,{data:e},t)},t)))})})})})})};r.defaultProps={classOption:"section section-padding-bottom"};const o=r},5218:(e,t,a)=>{a.d(t,{A:()=>b});var i=a(5043),s=a(1057),n=a(2604),r=a.n(n),o=a(9437),l=a.n(o),d=a(2030);const c=(e,t,a,s,n)=>{const[o,c]=(0,i.useState)([]);return(0,i.useEffect)((()=>{const i=e.map((e=>e.categories.map((e=>e)))),o=(0,d.Ge)(i,1/0),g=[...new Set(o)];c(g);const h=document.querySelector(t);r()(h,(()=>{const e=h.querySelectorAll(a);let t=1;for(;t<e.length;)e[t].classList.add("grid-width-2"),t+=4;let i=new(l())(h,{itemSelector:a});const r=document.querySelector(s);document.querySelectorAll(n).forEach((e=>{e.addEventListener("click",(t=>{const a=e.dataset.filter;r.querySelector(".is-checked").classList.remove("is-checked"),t.target.classList.add("is-checked"),i.arrange({filter:a})}))}))}))}),[]),{categories:o}};var g=a(579);const h=e=>{let{categories:t,classOption:a}=e;return(0,g.jsxs)("div",{className:`messonry-button ${a}`,children:[(0,g.jsx)("button",{"data-filter":"*",className:"is-checked",children:(0,g.jsx)("span",{className:"filter-text",children:"All"})}),t.map(((e,t)=>(0,g.jsx)("button",{"data-filter":`.${(0,d.Yv)(e)}`,children:(0,g.jsx)("span",{className:"filter-text",children:e})},t)))]})};h.defaultProps={classOption:"text-lg-end text-start mb-lg-13 mb-md-13 mb-6"};const m=h;var p=a(5475);const u=e=>{let{portfolio:t}=e;return(0,g.jsxs)("div",{className:"single-portfolio",children:[(0,g.jsx)("div",{className:"thumbnail",children:(0,g.jsx)("img",{className:"img-fluid",src:t.homeImage,alt:"Portfolio-01"})}),(0,g.jsx)("div",{className:"content",children:(0,g.jsx)("h5",{className:"title",children:(0,g.jsxs)(p.N_,{to:`/payriva/work-details/${t.id}`,children:[`${t.title.slice(0,22)}...`," ",(0,g.jsx)("img",{src:"/payriva/images/icons/arrow-up-right.svg",alt:""})]})})})]})};var w=a(1105);const b=()=>{const{categories:e}=c(w,".mesonry-list",".masonry-grid",".messonry-button",".messonry-button button");return(0,g.jsx)("div",{className:"section section-padding-t90 ag-masonary-wrapper","data-bg-color":"#f8faff",children:(0,g.jsxs)("div",{className:"container-fluid px-0",children:[(0,g.jsx)(s.A,{title:"Great even greater creative works",subTitle:"Get your company heading in the right direction with our digital\r marketing strategist"}),(0,g.jsx)(m,{classOption:"messonry-button text-center mb-lg-13 mb-md-13 mb-6",categories:e,"data-aos":"fade-up"}),(0,g.jsxs)("div",{className:"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-0 mesonry-list",children:[(0,g.jsx)("div",{className:"resizer col"}),w&&w.map((e=>(0,g.jsx)("div",{className:`col masonry-grid ${e.categories.map((e=>(0,d.Yv)(e))).join(" ")}`,children:(0,g.jsx)(u,{portfolio:e})},e.id)))]})]})})}},6189:(e,t,a)=>{a.d(t,{A:()=>s});a(5043);var i=a(579);const s=()=>(0,i.jsxs)("div",{className:"believe-parent",children:[(0,i.jsxs)("div",{className:"believe",children:[(0,i.jsx)("div",{className:"believe-head",children:(0,i.jsx)("h1",{children:"What we believe."})}),(0,i.jsx)("div",{className:"believe-content",children:(0,i.jsxs)("p",{children:["Often, the true value of an idea is not the idea itself. Rather, it is the intent or the ",(0,i.jsx)("b",{children:"WHY"})," that led to the creation of it. This is at the core of Payriva ethos \u2013 a set of beliefs we try to get better at every day. We believe we can build the Best in class products and solutions out of India, with the Happiest of team members, and run a highly successful business, Quietly. Building something Great takes time and we are comfortable with that."]})})]}),(0,i.jsx)("div",{className:"believe-img"})]})},2250:(e,t,a)=>{a.d(t,{A:()=>o});a(5043);var i=a(4696),s=a(2806),n=(a(1057),a(579));const r=e=>{let{classOption:t}=e;return(0,n.jsx)("div",{className:`section section-padding-t90-b100 ${t}`,children:(0,n.jsxs)("div",{className:"service",children:[(0,n.jsxs)("div",{className:"service-content",children:[(0,n.jsx)("h2",{children:"Our Products !"}),(0,n.jsxs)("h3",{children:["Low-code platform suite to ",(0,n.jsx)("br",{})," accelerate your digital journey."]}),(0,n.jsx)("p",{children:"Let\u2019s not reinvent the wheel. From Virtual Assistants to Data Management to Insights, build on top of our platform accelerators to deliver business applications at scale, at speed."})]}),(0,n.jsx)("div",{className:"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6 iconrow",children:i&&i.slice(0,3).map(((e,t)=>(0,n.jsx)("div",{className:"col mb-6","data-aos":"fade-up",children:(0,n.jsx)(s.A,{classOption:"box-border",data:e},t)},t)))})]})})};r.defaultProps={classOption:"section section-padding-t90-b100"};const o=r},2030:(e,t,a)=>{function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return t>0?e.reduce(((e,a)=>e.concat(Array.isArray(a)?i(a,t-1):a)),[]):e.slice()}a.d(t,{C9:()=>r,Ge:()=>i,Vd:()=>n,Yv:()=>s,ZN:()=>o});const s=function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")};function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return new Promise((function(a){e.style.height=e.offsetHeight+"px",e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.offsetHeight=0,e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout((function(){e.style.display="none",e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),a(!1)}),t)}))}function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return new Promise((function(){e.style.removeProperty("display");let a=window.getComputedStyle(e).display;"none"===a&&(a="block"),e.style.display=a;let i=e.offsetHeight;e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight=0,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=i+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout((function(){e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property")}),t)}))}function o(e,t){var a;for(a=0;a<t.length;a++)if(console.log(),t[a].slug===e.slug)return a;return-1}},109:e=>{e.exports=JSON.parse('[{"id":1,"image":"images/blog/370/blog-1.jpg","largeImage":"images/blog/770/blog-2.jpg","author":"Written by Admin","date":"10 Oct 2020","view":"70 views","categories":["Marketing","UX Design"],"title":"How your sales can work together in account-based marketing","excerpt":"We have always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","body":["<p><strong>We have always known the power of digital, and we have mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that busine- sses have been talking about for so long, and those colleagues are turning to us in Marketing to provide guidance.</strong></p>","<p>Even if it is a brave new world for everyone else, for marketers it is another day in the proverbial office.</p>","<p>Now, the digital evolution is resonating across organizations. The pandemic has shifted internal structures and changed relationships with customers, and as a result marketers have become more valuable than ever.</p>","<p><strong>The Shift Inside Organizations: Marketers Become Indispensable in a Digital World.</strong></p>","<p>Marketing has often been known as the department that makes PowerPoints and polishes websites. That was not ever close to the whole truth, of course, but past company structures \u2014 in which Marketing always played second fiddle to Sales \u2014 allowed that falsehood to persist.</p>","<p>The pandemic has transformed what the marketing team means to an organization: It is given us agency. It is upended the customer journey. It is redefined how sales and marketing teams should interact. And it is forced businesses to see the value that marketers provide in a digital world.</p>"],"tags":["App","Branding","Development","Design"]},{"id":2,"image":"images/blog/370/blog-2.jpg","largeImage":"images/blog/770/blog-1.jpg","author":"Written by Admin","date":"10 Oct 2020","view":"70 views","categories":["App","Startup"],"title":"The six things marketers need to understand about DTC marketing","excerpt":"Beautiful and usable design can be the deciding factor between a successful and a failing business. Great designers are treated like superstars. And it\u2019s so fulfilling to design beautiful things that people love to use.","body":["<p><strong>We have always known the power of digital, and we have mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that busine- sses have been talking about for so long, and those colleagues are turning to us in Marketing to provide guidance.</strong></p>","<p>Even if it is a brave new world for everyone else, for marketers it is another day in the proverbial office.</p>","<p>Now, the digital evolution is resonating across organizations. The pandemic has shifted internal structures and changed relationships with customers, and as a result marketers have become more valuable than ever.</p>","<p><strong>The Shift Inside Organizations: Marketers Become Indispensable in a Digital World.</strong></p>","<p>Marketing has often been known as the department that makes PowerPoints and polishes websites. That was not ever close to the whole truth, of course, but past company structures \u2014 in which Marketing always played second fiddle to Sales \u2014 allowed that falsehood to persist.</p>","<p>The pandemic has transformed what the marketing team means to an organization: It is given us agency. It is upended the customer journey. It is redefined how sales and marketing teams should interact. And it is forced businesses to see the value that marketers provide in a digital world.</p>"],"tags":["App","Branding","Development","Design"]},{"id":3,"image":"images/blog/370/blog-3.jpg","largeImage":"images/blog/770/blog-3.jpg","author":"Written by Admin","date":"10 Oct 2020","view":"70 views","categories":["UX Design","Marketing"],"title":"Eleven top tips for developing agile marketing","excerpt":"Beautiful and usable design can be the deciding factor between a successful and a failing business. Great designers are treated like superstars. And it\u2019s so fulfilling to design beautiful things that people love to use.","body":["<p><strong>We have always known the power of digital, and we have mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that busine- sses have been talking about for so long, and those colleagues are turning to us in Marketing to provide guidance.</strong></p>","<p>Even if it is a brave new world for everyone else, for marketers it is another day in the proverbial office.</p>","<p>Now, the digital evolution is resonating across organizations. The pandemic has shifted internal structures and changed relationships with customers, and as a result marketers have become more valuable than ever.</p>","<p><strong>The Shift Inside Organizations: Marketers Become Indispensable in a Digital World.</strong></p>","<p>Marketing has often been known as the department that makes PowerPoints and polishes websites. That was not ever close to the whole truth, of course, but past company structures \u2014 in which Marketing always played second fiddle to Sales \u2014 allowed that falsehood to persist.</p>","<p>The pandemic has transformed what the marketing team means to an organization: It is given us agency. It is upended the customer journey. It is redefined how sales and marketing teams should interact. And it is forced businesses to see the value that marketers provide in a digital world.</p>"],"tags":["App","Branding","Development","Design"]},{"id":4,"image":"images/blog/370/blog-4.jpg","largeImage":"images/blog/770/blog-3.jpg","author":"Written by Admin","date":"10 Oct 2020","view":"70 views","categories":["Startup","UX Design","Marketing"],"title":"How your sales can work together in account-based marketing","excerpt":"Beautiful and usable design can be the deciding factor between a successful and a failing business. Great designers are treated like superstars. And it\u2019s so fulfilling to design beautiful things that people love to use.","body":["<p><strong>We have always known the power of digital, and we have mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that busine- sses have been talking about for so long, and those colleagues are turning to us in Marketing to provide guidance.</strong></p>","<p>Even if it is a brave new world for everyone else, for marketers it is another day in the proverbial office.</p>","<p>Now, the digital evolution is resonating across organizations. The pandemic has shifted internal structures and changed relationships with customers, and as a result marketers have become more valuable than ever.</p>","<p><strong>The Shift Inside Organizations: Marketers Become Indispensable in a Digital World.</strong></p>","<p>Marketing has often been known as the department that makes PowerPoints and polishes websites. That was not ever close to the whole truth, of course, but past company structures \u2014 in which Marketing always played second fiddle to Sales \u2014 allowed that falsehood to persist.</p>","<p>The pandemic has transformed what the marketing team means to an organization: It is given us agency. It is upended the customer journey. It is redefined how sales and marketing teams should interact. And it is forced businesses to see the value that marketers provide in a digital world.</p>"],"tags":["App","Branding","Development","Design"]},{"id":5,"image":"images/blog/370/blog-5.jpg","largeImage":"images/blog/770/blog-3.jpg","author":"Written by Admin","date":"10 Oct 2020","view":"70 views","categories":["Startup","Marketing"],"title":"The six things marketers need to understand about DTC marketing","excerpt":"Beautiful and usable design can be the deciding factor between a successful and a failing business. Great designers are treated like superstars. And it\u2019s so fulfilling to design beautiful things that people love to use.","body":["<p><strong>We have always known the power of digital, and we have mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that busine- sses have been talking about for so long, and those colleagues are turning to us in Marketing to provide guidance.</strong></p>","<p>Even if it is a brave new world for everyone else, for marketers it is another day in the proverbial office.</p>","<p>Now, the digital evolution is resonating across organizations. The pandemic has shifted internal structures and changed relationships with customers, and as a result marketers have become more valuable than ever.</p>","<p><strong>The Shift Inside Organizations: Marketers Become Indispensable in a Digital World.</strong></p>","<p>Marketing has often been known as the department that makes PowerPoints and polishes websites. That was not ever close to the whole truth, of course, but past company structures \u2014 in which Marketing always played second fiddle to Sales \u2014 allowed that falsehood to persist.</p>","<p>The pandemic has transformed what the marketing team means to an organization: It is given us agency. It is upended the customer journey. It is redefined how sales and marketing teams should interact. And it is forced businesses to see the value that marketers provide in a digital world.</p>"],"tags":["App","Branding","Development","Design"]},{"id":6,"image":"images/blog/370/blog-6.jpg","largeImage":"images/blog/770/blog-3.jpg","author":"Written by Admin","date":"10 Oct 2020","view":"70 views","categories":["Startup","UX Design"],"title":"Eleven top tips for developing agile marketing","excerpt":"Beautiful and usable design can be the deciding factor between a successful and a failing business. Great designers are treated like superstars. And it\u2019s so fulfilling to design beautiful things that people love to use.","body":["<p><strong>We have always known the power of digital, and we have mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that busine- sses have been talking about for so long, and those colleagues are turning to us in Marketing to provide guidance.</strong></p>","<p>Even if it is a brave new world for everyone else, for marketers it is another day in the proverbial office.</p>","<p>Now, the digital evolution is resonating across organizations. The pandemic has shifted internal structures and changed relationships with customers, and as a result marketers have become more valuable than ever.</p>","<p><strong>The Shift Inside Organizations: Marketers Become Indispensable in a Digital World.</strong></p>","<p>Marketing has often been known as the department that makes PowerPoints and polishes websites. That was not ever close to the whole truth, of course, but past company structures \u2014 in which Marketing always played second fiddle to Sales \u2014 allowed that falsehood to persist.</p>","<p>The pandemic has transformed what the marketing team means to an organization: It is given us agency. It is upended the customer journey. It is redefined how sales and marketing teams should interact. And it is forced businesses to see the value that marketers provide in a digital world.</p>"],"tags":["App","Branding","Development","Design"]}]')},6718:e=>{e.exports=JSON.parse('[{"id":1,"number":20,"text":"Years Experience"},{"id":2,"number":15,"text":"Active Projects"},{"id":3,"number":130,"text":"Projects Done"},{"id":4,"number":200,"text":"Satisfied Clients"}]')},4696:e=>{e.exports=JSON.parse('[{"id":"1","icon":"images/svg/linea/linea-basic-target.svg","title":"Branding","desc":"First impressions count! Make sure your brand works for you. We offer digital marketing.","pageLink":"Learn More","link":"service"},{"id":"2","icon":"images/svg/linea/linea-basic-picture-multiple.svg","title":"UX Design","desc":"First impressions count! Make sure your brand works for you. We offer digital marketing.","pageLink":"Learn More","link":"service"},{"id":"3","icon":"images/svg/linea/linea-basic-picture.svg","title":"Strategy","desc":"First impressions count! Make sure your brand works for you. We offer digital marketing.","pageLink":"Learn More","link":"service"},{"id":"4","icon":"images/svg/linea/linea-ecommerce-cart-plus.svg","title":"Ecommerce","desc":"Our web design services can help rediscover your business\u2019 image in the internet marketplace.","pageLink":"Learn More","link":"service"},{"id":"5","icon":"images/svg/linea/linea-basic-gear.svg","title":"Development","desc":"Our web design services can help rediscover your business\u2019 image in the internet marketplace.","pageLink":"Learn More","link":"service"},{"id":"6","icon":"images/svg/linea/linea-basic-display.svg","title":"Marketing","desc":"Our web design services can help rediscover your business\u2019 image in the internet marketplace.","pageLink":"Learn More","link":"service"}]')},1105:e=>{e.exports=JSON.parse('[{"id":1,"homeImage":"./images/portfolio/portfolio-1.jpg","image":"images/project/project-1.jpg","title":"Payriva Development: An outstanding payment app","date":"28 Sep 2007","client":"HighGrove Partners","categories":["app","development"],"awards":["2015 Digital World Awards 2016 Finale Awards"],"excerpt":"Quickly analyzing the digital business landscape, we create effective action plans and design optimal strategies.","body":["<p>Digital marketing encompasses all marketing efforts that use an electronic device or the internet. Businesses leverage digital channels such as search engines, social media, email, and their websites to connect with current and prospective customers.</p>","<p>It is. In fact, \u201cconstant\u201d internet usage among adults increased by 5% in just the last three years, according to Pew Research. And although we say it a lot, the way people shop and buy really has changed along with it \u2014 meaning offline marketing isn\u2019t as effective as it used to be.</p>","<p>Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means you need to meet them where they are already spending time: on the internet. (Source: blog.hubspot.com)</p>"],"btn":{"text":"Go to link","link":"/"},"largeImage":"images/project/work-details-1.jpg","subContent":{"title":"Digital Marketing.","text":"Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means you need to meet them where they are already spending time: on the internet. A seasoned inbound marketer might say inbound marketing and digital marketing are virtually the same thing, but there are some minor differences. And conversations with marketers and business owners in the U.S., U.K., Asia, Australia, and New Zealand, I\'ve learned a lot about how those small differences are being observed across the world."},"gallery":{"imageOne":"images/project/work-details-2.jpg","imageTwo":"images/project/work-details-3.jpg","imageThree":"images/project/work-details-4.jpg"}},{"id":2,"homeImage":"./images/portfolio/portfolio-2.jpg","image":"images/project/project-2.jpg","title":"Dashboards UI Kit open-source set of ready-to-use templates","date":"28 Sep 2007","client":"HighGrove Partners","categories":["marketing","software"],"awards":["2015 Digital World Awards 2016 Finale Awards"],"excerpt":"Quickly analyzing the digital business landscape, we create effective action plans and design optimal strategies.","body":["<p>Digital marketing encompasses all marketing efforts that use an electronic device or the internet. Businesses leverage digital channels such as search engines, social media, email, and their websites to connect with current and prospective customers.</p>","<p>It is. In fact, \u201cconstant\u201d internet usage among adults increased by 5% in just the last three years, according to Pew Research. And although we say it a lot, the way people shop and buy really has changed along with it \u2014 meaning offline marketing isn\u2019t as effective as it used to be.</p>","<p>Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means you need to meet them where they are already spending time: on the internet. (Source: blog.hubspot.com)</p>"],"btn":{"text":"Go to link","link":"/"},"largeImage":"images/project/work-details-1.jpg","subContent":{"title":"Digital Marketing.","text":"Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means you need to meet them where they are already spending time: on the internet. A seasoned inbound marketer might say inbound marketing and digital marketing are virtually the same thing, but there are some minor differences. And conversations with marketers and business owners in the U.S., U.K., Asia, Australia, and New Zealand, I\'ve learned a lot about how those small differences are being observed across the world."},"gallery":{"imageOne":"images/project/work-details-2.jpg","imageTwo":"images/project/work-details-3.jpg","imageThree":"images/project/work-details-4.jpg"}},{"id":3,"homeImage":"./images/portfolio/portfolio-3.jpg","image":"images/project/project-3.jpg","title":"Project You X Ventures Studio. Toronto, Canada","date":"28 Sep 2007","client":"HighGrove Partners","categories":["app","software","marketing"],"awards":["2015 Digital World Awards 2016 Finale Awards"],"excerpt":"Quickly analyzing the digital business landscape, we create effective action plans and design optimal strategies.","body":["<p>Digital marketing encompasses all marketing efforts that use an electronic device or the internet. Businesses leverage digital channels such as search engines, social media, email, and their websites to connect with current and prospective customers.</p>","<p>It is. In fact, \u201cconstant\u201d internet usage among adults increased by 5% in just the last three years, according to Pew Research. And although we say it a lot, the way people shop and buy really has changed along with it \u2014 meaning offline marketing isn\u2019t as effective as it used to be.</p>","<p>Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means you need to meet them where they are already spending time: on the internet. (Source: blog.hubspot.com)</p>"],"btn":{"text":"Go to link","link":"/"},"largeImage":"images/project/work-details-1.jpg","subContent":{"title":"Digital Marketing.","text":"Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means you need to meet them where they are already spending time: on the internet. A seasoned inbound marketer might say inbound marketing and digital marketing are virtually the same thing, but there are some minor differences. And conversations with marketers and business owners in the U.S., U.K., Asia, Australia, and New Zealand, I\'ve learned a lot about how those small differences are being observed across the world."},"gallery":{"imageOne":"images/project/work-details-2.jpg","imageTwo":"images/project/work-details-3.jpg","imageThree":"images/project/work-details-4.jpg"}},{"id":4,"homeImage":"./images/portfolio/portfolio-4.jpg","image":"images/project/project-4.jpg","title":"Launching a new campaign this month, Nike by you","date":"28 Sep 2007","client":"HighGrove Partners","categories":["development","ux design","marketing"],"awards":["2015 Digital World Awards 2016 Finale Awards"],"excerpt":"Quickly analyzing the digital business landscape, we create effective action plans and design optimal strategies.","body":["<p>Digital marketing encompasses all marketing efforts that use an electronic device or the internet. Businesses leverage digital channels such as search engines, social media, email, and their websites to connect with current and prospective customers.</p>","<p>It is. In fact, \u201cconstant\u201d internet usage among adults increased by 5% in just the last three years, according to Pew Research. And although we say it a lot, the way people shop and buy really has changed along with it \u2014 meaning offline marketing isn\u2019t as effective as it used to be.</p>","<p>Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means you need to meet them where they are already spending time: on the internet. (Source: blog.hubspot.com)</p>"],"btn":{"text":"Go to link","link":"/"},"largeImage":"images/project/work-details-1.jpg","subContent":{"title":"Digital Marketing.","text":"Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means you need to meet them where they are already spending time: on the internet. A seasoned inbound marketer might say inbound marketing and digital marketing are virtually the same thing, but there are some minor differences. And conversations with marketers and business owners in the U.S., U.K., Asia, Australia, and New Zealand, I\'ve learned a lot about how those small differences are being observed across the world."},"gallery":{"imageOne":"images/project/work-details-2.jpg","imageTwo":"images/project/work-details-3.jpg","imageThree":"images/project/work-details-4.jpg"}},{"id":5,"homeImage":"./images/portfolio/portfolio-5.jpg","image":"images/project/project-5.jpg","title":"Branding and photography. Mother Nature: Summer","date":"28 Sep 2007","client":"HighGrove Partners","categories":["app","ux design"],"awards":["2015 Digital World Awards 2016 Finale Awards"],"excerpt":"Quickly analyzing the digital business landscape, we create effective action plans and design optimal strategies.","body":["<p>Digital marketing encompasses all marketing efforts that use an electronic device or the internet. Businesses leverage digital channels such as search engines, social media, email, and their websites to connect with current and prospective customers.</p>","<p>It is. In fact, \u201cconstant\u201d internet usage among adults increased by 5% in just the last three years, according to Pew Research. And although we say it a lot, the way people shop and buy really has changed along with it \u2014 meaning offline marketing isn\u2019t as effective as it used to be.</p>","<p>Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means you need to meet them where they are already spending time: on the internet. (Source: blog.hubspot.com)</p>"],"btn":{"text":"Go to link","link":"/"},"largeImage":"images/project/work-details-1.jpg","subContent":{"title":"Digital Marketing.","text":"Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means you need to meet them where they are already spending time: on the internet. A seasoned inbound marketer might say inbound marketing and digital marketing are virtually the same thing, but there are some minor differences. And conversations with marketers and business owners in the U.S., U.K., Asia, Australia, and New Zealand, I\'ve learned a lot about how those small differences are being observed across the world."},"gallery":{"imageOne":"images/project/work-details-2.jpg","imageTwo":"images/project/work-details-3.jpg","imageThree":"images/project/work-details-4.jpg"}},{"id":6,"homeImage":"./images/portfolio/portfolio-6.jpg","image":"images/project/project-6.jpg","title":"Modern and unique design for a furniture application","date":"28 Sep 2007","client":"HighGrove Partners","categories":["app","ux design","software"],"awards":["2015 Digital World Awards 2016 Finale Awards"],"excerpt":"Quickly analyzing the digital business landscape, we create effective action plans and design optimal strategies.","body":["<p>Digital marketing encompasses all marketing efforts that use an electronic device or the internet. Businesses leverage digital channels such as search engines, social media, email, and their websites to connect with current and prospective customers.</p>","<p>It is. In fact, \u201cconstant\u201d internet usage among adults increased by 5% in just the last three years, according to Pew Research. And although we say it a lot, the way people shop and buy really has changed along with it \u2014 meaning offline marketing isn\u2019t as effective as it used to be.</p>","<p>Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means you need to meet them where they are already spending time: on the internet. (Source: blog.hubspot.com)</p>"],"btn":{"text":"Go to link","link":"/"},"largeImage":"images/project/work-details-1.jpg","subContent":{"title":"Digital Marketing.","text":"Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means you need to meet them where they are already spending time: on the internet. A seasoned inbound marketer might say inbound marketing and digital marketing are virtually the same thing, but there are some minor differences. And conversations with marketers and business owners in the U.S., U.K., Asia, Australia, and New Zealand, I\'ve learned a lot about how those small differences are being observed across the world."},"gallery":{"imageOne":"images/project/work-details-2.jpg","imageTwo":"images/project/work-details-3.jpg","imageThree":"images/project/work-details-4.jpg"}}]')}}]);
//# sourceMappingURL=316.83c1a968.chunk.js.map