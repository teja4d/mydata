(this.webpackJsonpteja=this.webpackJsonpteja||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n.n(i),s=n(25),a=n.n(s),r=(n(38),n(10)),o=n(13),l=n(26),j=n.n(l),d=(n(39),n(1));function h(e){var t=e.menuClicked;return Object(d.jsxs)("div",{className:"menu",onClick:t,children:[Object(d.jsx)("div",{className:"menu-bar"}),Object(d.jsx)("div",{className:"menu-bar"}),Object(d.jsx)("div",{className:"menu-bar"})]})}var b=n(27),u=n(28),x=n(14),p=n(29),m=[{tittle:"Home",icon:Object(d.jsx)(b.a,{}),path:"/home",description:"Home Page"},{tittle:"About Me",icon:Object(d.jsx)(u.a,{}),path:"/about",description:"Who is this guy ?"},{tittle:"Skills",icon:Object(d.jsx)(x.d,{}),path:"/skills",description:"My skill set"},{tittle:"Experience",icon:Object(d.jsx)(x.b,{}),path:"/experience",description:"My Experience"},{tittle:"Projects",icon:Object(d.jsx)(p.a,{}),path:"/projects",description:"Cool projects I have done"},{tittle:"Education",icon:Object(d.jsx)(x.c,{}),path:"/education",description:"My Education and other stuff"},{tittle:"About you",icon:Object(d.jsx)(x.a,{}),path:"/aboutyou",description:"Want to see your details ?"}],O=n(0);n(41);function v(e){var t=e.showTitle,n=e.menuClicked,i=window.innerWidth>480?"relative":"fixed";return Object(d.jsx)("div",{className:"side-bar",style:{position:i},children:Object(d.jsxs)("div",{className:"sidebar-list",children:[Object(d.jsx)(h,{menuClicked:n}),m.map((function(e,n){return Object(d.jsx)("div",{className:"sidebar-box",children:Object(d.jsxs)(o.b,{to:e.path,className:"sidebar-item",children:[Object(d.jsx)(O.b.Provider,{value:{color:"rgb(247, 73, 51)"},children:Object(d.jsx)("i",{className:"sidebar-icon",children:e.icon})}),t?Object(d.jsx)("div",{children:Object(d.jsx)("h1",{className:"sidebar-title",children:e.tittle})}):null]},n)})}))]})})}var f=n(3);n(42);function g(e){var t=e.itemClicked;return Object(d.jsx)("div",{className:"about-container",children:Object(d.jsxs)("div",{onClick:t,className:"about-wrapper",children:[Object(d.jsx)("h3",{className:"about-title",children:"About Teja"}),Object(d.jsxs)("p",{className:"about-text",children:["Teja loves when someone call him Teja4D.He is an ",Object(d.jsx)("span",{children:" introvert "}),"who is ",Object(d.jsx)("span",{children:" fun loving,friendly"})," and with a decent knowledge in ",Object(d.jsx)("span",{children:"latest technologies"}),". He is a highly motivated ",Object(d.jsx)("span",{children:"self learner "})," and fond in learning ",Object(d.jsx)("span",{children:"new technologies"}),". He loves using his ",Object(d.jsx)("span",{children:"mobile"})," in his free time and a lazy guy who belives that everything can be done with a mobile. In his free time you find him doing ",Object(d.jsx)("span",{children:"mobile rooting"}),",exploring the latest ",Object(d.jsx)("span",{children:"tech gadgets"}),". He is a type of guy who wants learn and do by his own. "]}),Object(d.jsxs)("p",{className:"about-fav",children:["He beleives in ",Object(d.jsx)("span",{children:"Destination \u2194 Determination"})]}),Object(d.jsxs)("p",{className:"about-fav",children:["Loves watching  ",Object(d.jsx)("span",{children:"Wrestling"})]})]})})}n(43);function w(e){var t=e.itemClicked;return Object(d.jsx)("div",{onClick:t,children:Object(d.jsx)("h3",{style:{color:"yellowgreen",background:"linear-gradient(to bottom,#1a1f1e , #131b1b)",width:"100vw",minHeight:"100vh",position:"fixed",margin:"0",fontSize:"16px",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Courier"},children:"This Page is under development !"})})}function y(e){var t=e.itemClicked;return Object(d.jsx)("div",{onClick:t,children:Object(d.jsx)("h3",{style:{color:"yellowgreen",background:"linear-gradient(to bottom,#1a1f1e , #131b1b)",width:"100vw",minHeight:"100vh",position:"fixed",margin:"0",fontSize:"16px",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Courier"},children:"This Page is under development !"})})}var k=n(21),C=n.n(k),N=n(30),S=n(31),T=n.n(S),H=n(32);n(89);function I(e){var t=e.itemClicked,n=Object(i.useState)({}),c=Object(r.a)(n,2),s=c[0],a=c[1],o=Object(i.useState)({}),l=Object(r.a)(o,2),j=l[0],h=l[1],b=Object(i.useState)(!1),u=Object(r.a)(b,2),x=u[0],p=u[1],m=(new T.a).parse(window.navigator.userAgent),v=window.matchMedia("(prefers-color-scheme: dark)").matches,f=window.navigator.connection,g=window.navigator.deviceMemory,w=window.innerHeight,y=window.innerWidth,k=y>480?"10px 32px":"10px 12px",S=window.screen.orientation.angle,I=window.screen.orientation.type.indexOf("landscape")>-1?"landscape":"portrait";window.document.referrer;return Object(i.useEffect)((function(){var e=function(){var e=Object(N.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ipapi.co/json/").then((function(e){return e.json()})).then(p(!0)).then((function(e){return a(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),navigator.getBattery().then((function(e){return h(e)}))}),[]),Object(d.jsx)("div",{children:x?Object(d.jsx)("div",{className:"aboutyou-container",children:Object(d.jsxs)("div",{className:"aboutyou-wrapper",style:{padding:k},onClick:t,children:[Object(d.jsx)("h3",{className:"aboutyou-title",children:"About You"}),Object(d.jsxs)("div",{className:"about-text",children:[Object(d.jsxs)("p",{children:["Hi visitor, You seem to be accessing my website from the ip address \ud83d\udce1 ",Object(d.jsx)("span",{children:s.ip}),", your internet service provider is"," ",Object(d.jsx)("span",{children:s.org})]}),Object(d.jsxs)("p",{children:["I see that you are using a"," ",Object(d.jsxs)("span",{children:[m.device.brand,"\xa0",m.device.type]}),"\xa0\ud83d\udcbb\xa0 specifically a"," ",Object(d.jsxs)("span",{children:[m.client.name," browser \ud83c\udf10"]}),", which is on version \ud83d\udea5",Object(d.jsx)("span",{children:m.client.version})]}),Object(d.jsxs)("p",{children:["Your OS \ud83d\udcbf seems to be ",Object(d.jsx)("span",{children:m.os.name}),", which is on version \ud83d\udea5",Object(d.jsx)("span",{children:m.os.version}),"\xa0having at least"," ",Object(d.jsxs)("span",{children:[g,"GB"]})," of RAM"]}),Object(d.jsxs)("p",{children:["I sense that you are currently at \xa0\ud83c\udf0e",Object(d.jsxs)("span",{children:[s.latitude,"\xb0"]})," latitude and\xa0\ud83c\udf0e",Object(d.jsxs)("span",{children:[s.longitude,"\xb0"]})," longitude, which is around \ud83d\uddfa\ufe0f",Object(d.jsxs)("span",{children:[s.city,","]}),"\xa0",Object(d.jsxs)("span",{children:[s.region,","]}),"\xa0",Object(d.jsx)("span",{children:s.country_name})," with the \ud83c\udfd9 zipcode"," ",Object(d.jsx)("span",{children:s.postal})]}),Object(d.jsxs)("p",{children:["Your device's screen \u2195\ufe0f height is ",Object(d.jsx)("span",{children:w}),"\xa0pixels and screen \u2194\ufe0f width is ",Object(d.jsx)("span",{children:y}),"\xa0pixels,"," ","Your device is currently in the ",Object(d.jsx)("span",{children:I}),"\xa0","landscape"===I?"\ud83d\udda5":"\ud83d\udcf1","\xa0mode"," ","and seems to be tilted at a ",Object(d.jsxs)("span",{children:[S,"\xb0"]}),"angle"]}),Object(d.jsxs)("p",{children:["Your battery \ud83d\udd0b seems to be having"," ",Object(d.jsxs)("span",{children:[Math.round(100*j.level),"%"]}),"\xa0charge and is currently "," ",Object(d.jsxs)("span",{children:[j.charging?"is \ud83d\udd0c":"not"," "]}),"charging"]}),Object(d.jsxs)("p",{children:["Your network speed \ud83c\udfc3\ud83c\udffe\u200d\u2642\ufe0f seems to be around"," ",Object(d.jsxs)("span",{children:[f.downlink,"\xa0mbps \u26a1\ufe0f"]}),"\xa0which is effectively a\xa0",Object(d.jsx)("span",{children:f.effectiveType}),"\xa0connection \ud83d\udd17"]}),Object(d.jsxs)("p",{children:["Your browser/device is set to\xa0",Object(d.jsxs)("span",{children:[v?"dark\ud83c\udf1a":"light\ud83c\udf1e"," mode"]}),"\xa0"]})]})]})}):Object(d.jsx)(O.b.Provider,{value:{color:"rgb(247, 73, 51)"},children:Object(d.jsx)("div",{children:Object(d.jsx)(H.a,{})})})})}function P(e){var t=e.itemClicked;return Object(d.jsx)("div",{onClick:t,children:Object(d.jsx)("h3",{style:{color:"yellowgreen",background:"linear-gradient(to bottom,#1a1f1e , #131b1b)",width:"100vw",position:"fixed",minHeight:"100vh",margin:"0",fontSize:"16px",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Courier"},children:"This Page is under development !"})})}function M(e){var t=e.itemClicked;return Object(d.jsx)("div",{onClick:t,children:Object(d.jsx)("h3",{style:{color:"yellowgreen",background:"linear-gradient(to bottom,#1a1f1e , #131b1b)",width:"100vw",position:"fixed",minHeight:"100vh",margin:"0",fontSize:"16px",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Courier"},children:"This Page is under development !"})})}n(90);var z=n(22),D=n.n(z);n.p,n(91);function F(){return Object(d.jsx)("div",{className:"content-container",children:Object(d.jsxs)(D.a,{avgTypingDelay:90,children:[Object(d.jsx)("h1",{className:"welcome-text",children:"Welcome to My Digital Garden"}),Object(d.jsx)("h1",{className:"typer-text-start",children:"I'm a Student"}),Object(d.jsx)(D.a.Backspace,{count:13,delay:1e3}),Object(d.jsx)("h1",{className:"typer-text-end",children:"I \u2764\ufe0f Programming"})]})})}n.p,n(92);function Y(){return Object(d.jsx)("div",{className:"image",children:Object(d.jsx)("div",{className:"image-container",children:Object(d.jsx)("div",{className:"image-box"})})})}var A=n(33),W=n(16);n(98);function E(){var e=[{icon:W.a,url:"https://www.facebook.com/teja4D"},{icon:W.c,url:"https://www.linkedin.com/in/teja4d/"},{icon:W.b,url:"https://github.com/Teja4d"},{icon:W.d,url:"https://twitter.com/teja4d"}],t=function(){navigator.vibrate(80)};return Object(d.jsx)("div",{className:"icon-container",children:Object(d.jsx)("div",{className:"icon-wrapper",children:[].concat(e).map((function(e,n){return Object(d.jsx)("a",{href:e.url,style:{color:"inherit"},children:Object(d.jsx)(A.a,{className:"list-items",onClick:t,icon:e.icon,size:"2x"})},n)}))})})}function B(e){var t=e.itemClicked;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"home-page",onClick:t,children:Object(d.jsxs)("div",{className:"home-wrapper",children:[Object(d.jsx)(Y,{}),Object(d.jsx)("h4",{className:"content-title",children:"--Dharma Teja Vytla--"}),Object(d.jsx)("h4",{className:"support-letter",children:"as"}),Object(d.jsx)("h4",{className:"nick-name",children:"Teja4D"}),Object(d.jsx)(E,{}),Object(d.jsx)(F,{})]})})})}function L(e){var t=e.clickedOutside;return Object(d.jsxs)(f.c,{children:[Object(d.jsx)(f.a,{path:"/",element:Object(d.jsx)(B,{itemClicked:t})}),Object(d.jsx)(f.a,{path:"home",element:Object(d.jsx)(B,{itemClicked:t})}),Object(d.jsx)(f.a,{exact:!0,path:"about",element:Object(d.jsx)(g,{itemClicked:t})}),Object(d.jsx)(f.a,{path:"education",element:Object(d.jsx)(w,{itemClicked:t})}),Object(d.jsx)(f.a,{path:"experience",element:Object(d.jsx)(y,{itemClicked:t})}),Object(d.jsx)(f.a,{path:"skills",element:Object(d.jsx)(P,{itemClicked:t})}),Object(d.jsx)(f.a,{path:"projects",element:Object(d.jsx)(M,{itemClicked:t})}),Object(d.jsx)(f.a,{path:"aboutyou",element:Object(d.jsx)(I,{itemClicked:t})})]})}n(99);function G(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],s=window.innerWidth,a=function(){c(!n)};return Object(d.jsxs)(o.a,{children:[Object(d.jsx)(j.a,{innerSize:12,outerSize:12,color:"247, 73, 51",outerAlpha:.2,innerScale:.7,outerScale:3}),Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsx)("div",{children:s>480||n?Object(d.jsx)(v,{menuClicked:a,showTitle:n}):Object(d.jsx)(h,{menuClicked:a})}),Object(d.jsx)("div",{style:{"overflow-x":"hidden"},children:Object(d.jsx)(L,{clickedOutside:function(){c(!1)}})})]})]})}var J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,102)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(G,{})}),document.getElementById("root")),J()},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.cbd3f11d.chunk.js.map