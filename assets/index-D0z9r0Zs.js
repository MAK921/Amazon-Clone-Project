import{j as e,b as q,L as g,r as l,A as J,S as X,C as Z,B as ee,O as se,u as te,c as ne,d as O,e as M,f as R,I as re,h as ae,F as ce,i as K,k as ie,l as oe,m as le,n as N,E as de,o as he}from"./react-vendor-DODQmM8I.js";import{n as ue,R as pe,d as B,f as xe,g as me,e as je,h as ge,i as Y,s as _e,q as fe,o as ye,j as ve,k as Ne,l as be,m as Ee}from"./vendor-fLl4jRug.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const Ae="_hero_img_1j8js_1",Se={hero_img:Ae},Ce="/assets/10001-bl35EseN.jpg",we="/assets/10002-Fp0oaH3y.jpg",Pe="/assets/10003-CO6XiwvK.jpg",ze="/assets/10004-BPr44Ttk.jpg",Ie="/assets/10005-CkxozhJb.jpg",Be=[Ce,we,Pe,ze,Ie];function Re(){return e.jsxs("div",{children:[" ",e.jsx(q.Carousel,{autoPlay:!0,infiniteLoop:!0,showIndicators:!1,showThumbs:!1,children:Be.map((s,t)=>e.jsx("img",{src:s,alt:""},t))}),e.jsx("div",{className:Se.hero_img})]})}const Te=[{title:"Electronics",name:"electronics",imgLink:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"},{title:"Discover fashion trends",name:"women's clothing",imgLink:"https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2023/March/mp_20230219_ff_desktopsinglecategory_desktop_379x304_1._SY304_CB612639047_.jpg"},{title:"Men's Clothing",name:"men's Clothing",imgLink:"https://m.media-amazon.com/images/I/618bcm65ksL._UL480_FMwebp_QL65_.jpg"},{title:"Jewelery",name:"jewelery",imgLink:"https://m.media-amazon.com/images/I/71r7eWuCsaL._AC_UL480_FMwebp_QL65_.jpg"}],Le="_category_tto14_1",Oe="_category_container_tto14_53",$={category:Le,category_container:Oe};function De({data:s}){return e.jsx("div",{className:$.category,children:e.jsxs(g,{to:`/category/${s.name}`,children:[e.jsx("span",{children:e.jsx("h2",{children:s.title})}),e.jsx("img",{src:s.imgLink,alt:s.title}),e.jsx("p",{children:"Shop Now"})]})})}function ke(){return e.jsx("section",{className:$.category_container,children:Te.map(s=>e.jsx(De,{data:s},s.title))})}const Me="_card_container_6hxxt_11",Fe="_button_6hxxt_39",Ue="_rating_6hxxt_103",Ke="_description_6hxxt_115",Ye="_price_6hxxt_127",$e="_products_container_6hxxt_137",Ge="_product_flexed_6hxxt_155",y={card_container:Me,button:Fe,rating:Ue,description:Ke,price:Ye,products_container:$e,product_flexed:Ge},D=({amount:s})=>{const t=ue(s).format("$0,0.00");return e.jsx("div",{children:t})},m={ADD_TO_BASKET:"ADD_TO_BASKET",SET_USER:"SET_USER",REMOVE_FROM_BASKET:"REMOVE_FROM_BASKET",EMPTY_BASKET:"EMPTY_BASKET"},T={basket:[],user:null},L=(s,t)=>{switch(t.type){case m.ADD_TO_BASKET:if(s.basket.find(i=>i.id===t.item.id)){const i=s.basket.map(n=>n.id===t.item.id?{...n,amount:n.amount+1}:n);return{...s,basket:i}}else return{...s,basket:[...s.basket,{...t.item,amount:1}]};case m.REMOVE_FROM_BASKET:{const r=s.basket.findIndex(n=>n.id===t.id);let i=[...s.basket];return r>=0&&(i[r].amount>1?i[r]={...i[r],amount:i[r].amount-1}:i.splice(r,1)),{...s,basket:i}}case m.EMPTY_BASKET:return{...s,basket:[]};case m.SET_USER:return{...s,user:t.user};default:return s}},v=l.createContext(),He=({children:s})=>{const[t,r]=l.useReducer(L,T);return e.jsx(v.Provider,{value:l.useReducer(L,T),children:s})};function S({product:s,renderDes:t,renderAdd:r,flex:i}){const{image:n,title:a,id:c,rating:o,price:p,description:b}=s,[E,A]=l.useContext(v),d=()=>{A({type:m.ADD_TO_BASKET,item:{image:n,title:a,id:c,rating:o,price:p,description:b}})};return e.jsxs("div",{className:`${y.card_container} ${i?y.product_flexed:""}`,children:[e.jsx(g,{to:`/products/${c}`,children:e.jsx("img",{src:n,alt:a,className:y.image})}),e.jsxs("div",{children:[e.jsx("h3",{className:y.title,children:a}),t&&e.jsx("p",{className:y.description,children:b}),e.jsxs("div",{className:y.rating,children:[e.jsx(pe,{value:(o==null?void 0:o.rate)||0,precision:.1}),e.jsx("small",{children:(o==null?void 0:o.count)||0})]}),e.jsx("div",{className:y.price,children:e.jsx(D,{amount:p})}),r&&e.jsx("button",{className:y.button,onClick:d,children:"Add to cart"})]})]})}function Qe(){const[s,t]=l.useState([]);return l.useEffect(()=>{B.get("https://fakestoreapi.com/products").then(r=>{t(r.data)}).catch(r=>{console.log(r)})},[]),e.jsx("section",{className:y.products_container,children:s.map(r=>e.jsx(S,{renderAdd:!0,product:r},r.id))})}const Ve="/assets/logo2-wfuuXLl9.png";function We(){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"footer",children:e.jsx("div",{className:"disclaimer-area",children:e.jsxs("p",{className:"disclaimer-desc",children:[e.jsx("b",{children:"Disclaimer:"})," This Amazon clone project is a mere simulation and is not affiliated with Amazon in any way."]})})}),e.jsxs("div",{className:"extra-data",children:[e.jsxs("div",{className:"link-section",children:[e.jsxs("div",{className:"first-row",children:[e.jsx("p",{className:"bold",children:"Get to Know Us"}),e.jsx("p",{children:"Careers"}),e.jsx("p",{children:"Amazon Newsletter"}),e.jsx("p",{children:"About Amazon"}),e.jsx("p",{children:"Accessibility"}),e.jsx("p",{children:"Sustainability"}),e.jsx("p",{children:"Press Center"}),e.jsx("p",{children:"Investor Relations"}),e.jsx("p",{children:"Amazon Devices"}),e.jsx("p",{children:"Amazon Science"})]}),e.jsxs("div",{className:"second-row",children:[e.jsx("p",{className:"bold",children:"Make Money with Us"}),e.jsx("p",{children:"Sell on Amazon"}),e.jsx("p",{children:"Sell apps on Amazon"}),e.jsx("p",{children:"Supply to Amazon"}),e.jsx("p",{children:"Protect & Build Your Brand"}),e.jsx("p",{children:"Become an Affiliate"}),e.jsx("p",{children:"Become a Delivery Driver"}),e.jsx("p",{children:"Start a Package Delivery Business"}),e.jsx("p",{children:"Advertise Your Products"}),e.jsx("p",{children:"Self-Publish with Us"})]}),e.jsxs("div",{className:"third-row",children:[e.jsx("p",{className:"bold",children:"Amazon Payment Products"}),e.jsx("p",{children:"Amazon Visa"}),e.jsx("p",{children:"Amazon Store Card"}),e.jsx("p",{children:"Amazon Secured Card"}),e.jsx("p",{children:"Amazon Business Card"}),e.jsx("p",{children:"Shop with Points"}),e.jsx("p",{children:"Credit Card Marketplace"}),e.jsx("p",{children:"Reload Your Balance"}),e.jsx("p",{children:"Gift Cards"}),e.jsx("p",{children:"Amazon Currency Converter"})]}),e.jsxs("div",{className:"fourth-row",children:[e.jsx("p",{className:"bold",children:"Let Us Help You"}),e.jsx("p",{children:"Your Account"}),e.jsx("p",{children:"Your Orders"}),e.jsx("p",{children:"Shipping Rates & Policies"}),e.jsx("p",{children:"Amazon Prime"}),e.jsx("p",{children:"Returns & Replacements"}),e.jsx("p",{children:"Manage Your Content and Devices"}),e.jsx("p",{children:"Recalls and Product Safety Alerts"}),e.jsx("p",{children:"Registry & Gift List"}),e.jsx("p",{children:"Help"})]})]}),e.jsxs("div",{className:"developer",children:[e.jsx("img",{src:Ve,className:"amazon-img"}),e.jsxs("div",{className:"dev-data",children:[e.jsx("p",{children:"© 2025 | Developed by "}),e.jsx("a",{className:"dev-link",href:"https://mellifluous-centaur-dd7f39.netlify.app/",target:"_blank",children:e.jsx("p",{children:"Abera Tefera"})})]})]})]})]})}function qe(){return e.jsxs(e.Fragment,{children:[e.jsx(Re,{}),e.jsx(ke,{}),e.jsx(Qe,{}),e.jsx(We,{})]})}const Je="_payment_header_4z0gb_1",Xe="_flex_4z0gb_23",Ze="_payment_card_container_4z0gb_59",es="_payment_price_4z0gb_69",ss="_payment_details_4z0gb_89",ts="_loading_4z0gb_133",_={payment_header:Je,flex:Xe,payment_card_container:Ze,payment_price:es,payment_details:ss,loading:ts};function ns(){return e.jsx("div",{className:"Lowerheader_container",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx(J,{}),e.jsx("p",{children:"All"})]}),e.jsx("li",{children:"Today's Deal"}),e.jsx("li",{children:"Customer Service"}),e.jsx("li",{children:"Registory"}),e.jsx("li",{children:"Gift Cards"}),e.jsx("li",{children:"Sell"})]})})}const rs={apiKey:"AIzaSyDG_nPGR_uIf55BUv5edMs1_Ro2MgBpWUI",authDomain:"clone-6dc63.firebaseapp.com",projectId:"clone-6dc63",storageBucket:"clone-6dc63.firebasestorage.app",messagingSenderId:"126010819578",appId:"1:126010819578:web:8b2a6e511eaaa0967d5a43"},G=xe.initializeApp(rs),I=me(G),H=je(G),as=()=>{var n;const[{basket:s,user:t},r]=l.useContext(v),i=s==null?void 0:s.reduce((a,c)=>a+((c==null?void 0:c.amount)||0),0);return e.jsxs("section",{className:"fixed2",children:[e.jsxs("section",{className:"header",children:[e.jsxs("div",{className:"header_logo-delivery",children:[e.jsx(g,{to:"/",className:"header_logo",children:e.jsx("img",{src:"https://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:"Amazon Logo"})}),e.jsxs(g,{to:"/delivery",className:"header_delivery",children:[e.jsx("span",{children:e.jsx(X,{})}),e.jsx("p",{children:"Delivered to"}),e.jsx("span",{children:"Ethiopia"})]})]}),e.jsxs("div",{className:"header_search",children:[e.jsx("select",{name:"category",id:"category",children:e.jsx("option",{value:"",children:"All"})}),e.jsx("input",{type:"text",placeholder:"Search product"}),e.jsx("button",{type:"submit",className:"header_search-button",children:e.jsx(Z,{})})]}),e.jsxs("nav",{className:"header_nav",children:[e.jsxs("div",{className:"header_language",children:[e.jsx(g,{to:"/",children:e.jsx("img",{src:"https://static.vecteezy.com/system/resources/previews/029/089/312/non_2x/united-state-of-america-usa-flag-transparent-pattern-template-free-png.png",alt:"USA flag"})}),e.jsx("select",{name:"language",id:"language",children:e.jsx("option",{value:"EN",children:"EN"})})]}),e.jsx(g,{to:t?"/":"/auth",children:e.jsx("div",{className:"sign_in",children:t?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Hello ",(n=t==null?void 0:t.email)==null?void 0:n.split("@")[0]]}),e.jsx("span",{onClick:()=>I.signOut(),children:"Sign Out"})]}):e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Hello, Sign In"}),e.jsx("span",{children:"Account & Lists"})]})})}),e.jsxs(g,{to:"/orders",className:"header_orders",children:[e.jsx("p",{children:"Returns"}),e.jsx("span",{children:"& Orders"})]}),e.jsxs(g,{to:"/cart",className:"header_cart",children:[e.jsx(ee,{size:35}),e.jsx("span",{children:i})]})]})]}),e.jsx(ns,{})]})};function cs(){return e.jsxs(e.Fragment,{children:[e.jsx(as,{}),e.jsx(se,{})]})}const is=B.create({baseURL:"https://amazon-backend-gfvo.onrender.com"});function os(){const[{user:s,basket:t},r]=l.useContext(v);console.log(s);const i=t==null?void 0:t.reduce((h,u)=>h+((u==null?void 0:u.amount)||0),0),n=t==null?void 0:t.reduce((h,u)=>h+u.price*u.amount,0),[a,c]=l.useState(null),[o,p]=l.useState(!1),b=te(),E=ne(),A=O(),d=h=>{var u;console.log(h),c(((u=h==null?void 0:h.error)==null?void 0:u.message)||"")},z=async h=>{var u;h.preventDefault(),p(!0);try{const C=(u=(await is.post(`/payment/create?total=${n*100}`)).data)==null?void 0:u.clientSecret;if(!C)throw new Error("Failed to get client secret");const w=E.getElement(M);if(!w)throw new Error("Card element not found");const{paymentIntent:x,error:k}=await b.confirmCardPayment(C,{payment_method:{card:w}});if(k)throw new Error(k.message);if(!x)throw new Error("Payment failed");const W=ge(Y(H,"users",s.uid,"orders"),x.id);await _e(W,{basket:t,amount:x.amount,created:x.created}),r({type:"EMPTY_BASKET"}),p(!1),A("/orders",{state:{msg:"You have placed a new order"}})}catch(j){console.error("Payment error:",j),c(j.message),p(!1)}};return e.jsxs("div",{children:[e.jsxs("div",{className:_.payment_header,children:["Checkout (",i,") items"]}),e.jsxs("section",{className:_.payment_header,children:[e.jsxs("div",{className:_.flex,children:[e.jsx("h3",{children:"Delivery Address"}),e.jsxs("div",{children:[e.jsx("div",{children:s==null?void 0:s.email}),e.jsx("div",{children:"27404 Greeley Rd, Maryland"}),e.jsx("div",{children:"Hyattsville, MD 20785"})]})]}),e.jsx("hr",{}),e.jsxs("div",{className:_.flex,children:[e.jsx("h3",{children:"Review items and delivery"}),e.jsx("div",{children:t==null?void 0:t.map(h=>e.jsx(S,{product:h,flex:!0},h.id))})]}),e.jsx("hr",{}),e.jsxs("div",{className:_.flex,children:[e.jsx("h3",{children:"Payment Methods"}),e.jsx("div",{className:_.payment_card_container,children:e.jsx("div",{className:_.payment_details,children:e.jsxs("form",{onSubmit:z,children:[a&&e.jsx("small",{style:{color:"red"},children:a}),e.jsx(M,{onChange:d}),e.jsxs("div",{className:_.payment_price,children:[e.jsx("div",{children:e.jsxs("span",{style:{display:"flex",gap:"10px"},children:[e.jsx("p",{children:"Total Order |"}),e.jsx(D,{amount:n})]})}),e.jsx("button",{type:"submit",disabled:o||!b||!E,children:o?e.jsxs("div",{className:_.loading,children:[e.jsx(R,{color:"grey",size:12}),e.jsx("p",{children:"Please Wait..."})]}):"Pay Now"})]})]})})})]})]})]})}const ls="_container_1paqb_1",ds="_order_container_1paqb_11",F={container:ls,order_container:ds};function hs(){const[{user:s},t]=l.useContext(v),[r,i]=l.useState([]);return l.useEffect(()=>{if(s){const n=fe(Y(H,"users",s.uid,"orders"),ye("created","desc")),a=ve(n,c=>{console.log(c),i(c.docs.map(o=>({id:o.id,data:o.data()})))});return()=>a()}else i([])},[s]),e.jsx("section",{className:F.container,children:e.jsxs("div",{className:F.order_container,children:[e.jsx("h2",{children:"User Orders"}),(r==null?void 0:r.length)===0&&e.jsx("div",{style:{padding:"20px"},children:"You do not have orders yet."}),e.jsx("div",{children:r==null?void 0:r.map(n=>{var a,c;return e.jsxs("div",{children:[e.jsx("hr",{}),e.jsxs("p",{children:["Order ID: ",n.id]}),(c=(a=n.data)==null?void 0:a.basket)==null?void 0:c.map(o=>e.jsx(S,{product:o,flex:!0},o.id))]},n.id)})})]})})}const us="_container_3i16o_1",ps="_cart_product_3i16o_21",xs="_btn_container_3i16o_31",ms="_btn_3i16o_31",js="_subtotal_3i16o_71",gs="_cart_container_3i16o_79",f={container:us,cart_product:ps,btn_container:xs,btn:ms,subtotal:js,cart_container:gs};function _s(){const[{basket:s,user:t},r]=l.useContext(v),i=s==null?void 0:s.reduce((c,o)=>c+o.price*o.amount,0);console.log(s);const n=c=>{r({type:m.ADD_TO_BASKET,item:c})},a=c=>{r({type:m.REMOVE_FROM_BASKET,id:c})};return e.jsx(e.Fragment,{children:e.jsxs("section",{className:f.container,children:[e.jsxs("div",{className:f.cart_container,children:[e.jsx("h2",{children:"Hello "}),e.jsx("h3",{children:"Your Shopping Basket"}),e.jsx("hr",{}),(s==null?void 0:s.length)==0?e.jsx("p",{children:"Oops! No items in your cart"}):s==null?void 0:s.map((c,o)=>e.jsxs("section",{className:f.cart_product,children:[e.jsx(S,{product:c,renderDes:!0,renderAdd:!1,flex:!0}),e.jsxs("div",{className:f.btn_container,children:[e.jsx("button",{className:f.btn,onClick:()=>n(c),children:e.jsx(re,{size:25})}),e.jsx("span",{children:c.amount}),e.jsx("button",{className:f.btn,onClick:()=>a(c.id),children:e.jsx(ae,{size:25})})]})]},c.id||o))]}),(s==null?void 0:s.length)!==0&&e.jsxs("div",{className:f.subtotal,children:[e.jsxs("div",{children:[e.jsxs("p",{children:["Subtotal (",s.length," items)"]}),e.jsx(D,{amount:i})]}),e.jsxs("span",{className:f.gift_option,children:[e.jsx("input",{type:"checkbox"}),e.jsx("small",{children:"This order contains a gift"})]}),e.jsx(g,{to:"/payments",className:f.checkout_button,children:"Continue to checkout"})]})]})})}function Q(){return e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"50vh"},children:e.jsx(ce,{color:"#36d7b7"})})}const V="https://fakestoreapi.com";function fs(){const{productId:s}=K(),[t,r]=l.useState(!1),[i,n]=l.useState({});return l.useEffect(()=>{r(!0),B.get(`${V}/products/${s}`).then(a=>{n(a.data),r(!1)}).catch(a=>{console.error("Error fetching product data:",a),r(!1)})},[s]),console.log(i),e.jsx(e.Fragment,{children:t?e.jsx(Q,{}):e.jsx(S,{product:i,flex:!0,renderDes:!0,renderAdd:!0})})}const ys="_products_container_sdxty_1",vs={products_container:ys};function Ns(){const[s,t]=l.useState([]),[r,i]=l.useState(!0),{categoryName:n}=K();return l.useEffect(()=>{n&&(async()=>{try{const c=await B.get(`${V}/products/category/${n}`);t(c.data)}catch(c){console.error(c)}finally{i(!1)}})()},[n]),e.jsx(e.Fragment,{children:e.jsxs("section",{children:[e.jsx("h1",{style:{padding:"30px"},children:"Results"}),e.jsxs("p",{style:{padding:"30px"},children:["Category / ",n]}),e.jsx("hr",{}),r?e.jsx(Q,{}):e.jsx("div",{className:vs.products_container,children:s.map(a=>e.jsx(S,{product:a,renderDes:!1,renderAdd:!0},a.id))})]})})}const bs="_login_166b8_1",Es="_login_container_166b8_29",As="_login_signInButton_166b8_109",Ss="_login_registorButton_166b8_147",P={login:bs,login_container:Es,login_signInButton:As,login_registorButton:Ss};function Cs({onClose:s}){var h,u;const[t,r]=l.useState(""),[i,n]=l.useState(""),[a,c]=l.useState(""),[o,p]=l.useState({signIn:!1,signUp:!1}),[{user:b},E]=l.useContext(v),A=O(),d=ie();console.log(d);const z=async j=>{var C,w;if(j.preventDefault(),j.target.name==="signin"){p({...o,signIn:!0});try{const x=await Ne(I,t,i);E({type:m.SET_USER,user:x.user}),p({...o,signIn:!1}),A(((C=d==null?void 0:d.state)==null?void 0:C.redirect)||"/")}catch(x){c(x.message),p({...o,signIn:!1})}}else{p({...o,signUp:!0});try{const x=await be(I,t,i);E({type:m.SET_USER,user:x.user}),p({...o,signUp:!1}),A(((w=d==null?void 0:d.state)==null?void 0:w.redirect)||"/")}catch(x){c(x.message),p({...o,signUp:!1})}}};return e.jsxs("section",{className:P.login,children:[e.jsx(g,{to:"/",children:e.jsx("img",{src:"https://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:"Amazon Logo"})}),e.jsxs("div",{className:P.login_container,children:[e.jsx("h1",{children:"Sign In"}),((h=d==null?void 0:d.state)==null?void 0:h.msg)&&e.jsx("small",{style:{padding:"5px",textAlign:"center",color:"red",fontWeight:"bold"},children:(u=d==null?void 0:d.state)==null?void 0:u.msg}),e.jsxs("form",{children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{type:"email",id:"email",value:t,onChange:j=>r(j.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsx("input",{type:"password",id:"password",value:i,onChange:j=>n(j.target.value)})]}),e.jsx("button",{type:"submit",name:"signin",onClick:z,className:P.login_signInButton,children:o.signIn?e.jsx(R,{color:"#000",size:15}):"Sign In"})]}),a&&e.jsx("p",{className:P.error,children:a}),e.jsx("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our privacy notice, cookies Notice, and Interests-Based Ads Notice."}),e.jsx("button",{type:"button",name:"signUp",onClick:z,className:P.login_registorButton,children:o.signUp?e.jsx(R,{color:"#000",size:15}):"Create Your Amazon Account"}),a&&e.jsx("small",{style:{paddingTop:"5px",color:"red"},children:a})]})]})}const U=({children:s,msg:t,redirect:r})=>{const i=O(),[{user:n}]=l.useContext(v);return l.useEffect(()=>{n||i("/auth",{state:{msg:t,redirect:r}})},[n,i,t,r]),n?e.jsx(e.Fragment,{children:s}):null},ws=Ee("pk_test_51QxdbmLmaQMZtqxUgWOzXQaOT7Ujgl1cmjasHk2vOyEuK3rJxV1Fnx5xzPaHB7GQTesie00brDJTs6DDxyscIzr500HHTCa7Gj");function Ps(){return e.jsx(oe,{children:e.jsx(le,{children:e.jsxs(N,{path:"/",element:e.jsx(cs,{}),children:[e.jsx(N,{path:"/",element:e.jsx(qe,{})}),e.jsx(N,{path:"/auth",element:e.jsx(Cs,{})}),e.jsx(N,{path:"/payments",element:e.jsx(U,{msg:"You must log in to access payments",redirect:"/payments",children:e.jsx(de,{stripe:ws,children:e.jsx(os,{})})})}),e.jsx(N,{path:"/orders",element:e.jsx(U,{msg:"You must log in to view your orders",redirect:"/orders",children:e.jsx(hs,{})})}),e.jsx(N,{path:"/products/:productId",element:e.jsx(fs,{})}),e.jsx(N,{path:"/category/:categoryName",element:e.jsx(Ns,{})}),e.jsx(N,{path:"/cart",element:e.jsx(_s,{})})]})})})}function zs(){const[{user:s},t]=l.useContext(v);return l.useEffect(()=>{I.onAuthStateChanged(r=>{t(r?{type:m.SET_USER,user:r}:{type:m.SET_USER,user:null})})},[]),e.jsx(e.Fragment,{children:e.jsx(Ps,{})})}he.createRoot(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(He,{reducer:L,initialState:T,children:e.jsx(zs,{})})}));
