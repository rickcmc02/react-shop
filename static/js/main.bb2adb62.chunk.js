(this["webpackJsonpshoes-shop"]=this["webpackJsonpshoes-shop"]||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(29),i=n(0),r=n.n(i),s=n(13),a=n.n(s),j=(n(56),n(57),n(40)),d=(n(58),n(59),n(7)),o=n(77),l=n(78),h=n(76),b=n(19),u=n(2),O=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(o.a,{bg:"light",expand:"lg",children:[Object(u.jsx)(o.a.Brand,{href:"/",children:"Shoes shop"}),Object(u.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)(l.a,{className:"ml-auto",children:[Object(u.jsx)(l.a.Link,{as:b.b,to:"/",children:"Home"}),Object(u.jsx)(l.a.Link,{as:b.b,to:"/detail",children:"Detail"}),Object(u.jsxs)(h.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(u.jsx)(h.a.Item,{href:"#action/3.1",children:"Action"}),Object(u.jsx)(h.a.Item,{href:"#action/3.2",children:"Another action"}),Object(u.jsx)(h.a.Item,{href:"#action/3.3",children:"Something"}),Object(u.jsx)(h.a.Divider,{}),Object(u.jsx)(h.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})})},x=n(74),p=n(50),f=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(x.a,{className:"background",children:[Object(u.jsx)("h1",{children:"20% Season OFF"}),Object(u.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(u.jsx)("p",{children:Object(u.jsx)(p.a,{variant:"primary",children:"Learn more"})})]})})},m=function(e){var t=Object(d.f)();return Object(u.jsxs)("div",{className:"col-md-4",onClick:function(){t.push("/detail/"+e.shoes.id)},children:[Object(u.jsx)("img",{src:"../shoe_img/shoes"+(e.shoes.id+1)+".jpg",width:"100%"}),Object(u.jsx)("h4",{children:e.shoes.title}),Object(u.jsx)("p",{children:e.shoes.price})]})},v=function(e){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:e.shoes.map((function(t,n){return Object(u.jsx)(m,{shoes:e.shoes[n],i:n},n)}))})})})},y=[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4},{id:3,title:"Flowey",content:"only 5 inches",price:1e5},{id:4,title:"Baby shoes",content:"for less than 6",price:8e4},{id:5,title:"Red Herring",content:"Born in Italy",price:14e4}],g=n(75),k=n(32);var C=Object(k.b)((function(e){return{state:e.reducer,alertOpen:e.reducer2}}))((function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(g.a,{responsive:"sm",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"Product Name"}),Object(u.jsx)("th",{children:"Quantity"}),Object(u.jsx)("th",{children:"Quantity Change"})]})}),Object(u.jsx)("tbody",{children:e.state.map((function(t,n){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.id}),Object(u.jsx)("td",{children:t.name}),Object(u.jsx)("td",{children:t.quan}),Object(u.jsxs)("td",{children:[Object(u.jsx)("button",{onClick:function(){e.dispatch({type:"quanAdd",payload:t.id})},children:" +"}),Object(u.jsx)("button",{onClick:function(){e.dispatch({type:"quanSub",payload:t.id})},children:" -"})]})]},n)}))})]}),!0===e.alertOpen?Object(u.jsxs)("div",{className:"inventory-alert",children:[Object(u.jsx)("h4",{children:"20% OFF NOW"}),Object(u.jsx)("button",{onClick:function(){e.dispatch({type:"alertClose"})},children:"close"})]}):null]})})),S=Object(i.lazy)((function(){return n.e(3).then(n.bind(null,82))}));var q=function(){var e=Object(i.useState)(y),t=Object(j.a)(e,2),n=t[0],c=(t[1],Object(i.useState)([12,11,7,2,50,40])),r=Object(j.a)(c,2),s=r[0],a=r[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(O,{}),Object(u.jsxs)(d.c,{children:[Object(u.jsxs)(d.a,{exact:!0,path:"/",children:[Object(u.jsx)(f,{}),Object(u.jsx)(v,{shoes:n})]}),Object(u.jsx)(d.a,{path:"/detail/:id",children:Object(u.jsx)(i.Suspense,{fallback:Object(u.jsx)("h4",{children:"Loading..."}),children:Object(u.jsx)(S,{shoes:n,stock:s,stockChange:a})})}),Object(u.jsx)(d.a,{path:"/cart",children:Object(u.jsx)(C,{})})]})]})},F=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,81)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))},B=n(28),N=[{id:0,name:"Cool shoes",quan:2}];var I=Object(B.c)(Object(B.b)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;if("productAdd"===t.type){var n=e.findIndex((function(e){return e.id===t.payload.id}));if(n>=0){var i=Object(c.a)(e);return i[n].quan++,i}var r=Object(c.a)(e);return r.push(t.payload),r}if("quanAdd"===t.type){var s=Object(c.a)(e);return s[0].quan++,s}if("quanSub"===t.type){var a=Object(c.a)(e);return a[t.payload].quan>1?a[t.payload].quan--:alert("minimum quantity"),a}return e},reducer2:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"alertClose"===t.type?e=!1:e}}));a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(b.a,{children:Object(u.jsx)(k.a,{store:I,children:Object(u.jsx)(q,{})})})}),document.getElementById("root")),F()}},[[69,1,2]]]);
//# sourceMappingURL=main.bb2adb62.chunk.js.map