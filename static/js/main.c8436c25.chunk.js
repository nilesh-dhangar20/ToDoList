(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(7),a=c.n(s),l=(c(13),c(8)),r=c(6),o=c(3),d=(c(14),c(15),c(0)),j=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(function(){var e=localStorage.getItem("list");return console.log(e),e?JSON.parse(localStorage.getItem("list")):[]}()),a=Object(o.a)(s,2),j=a[0],m=a[1],u=Object(n.useState)(!0),b=Object(o.a)(u,2),f=b[0],O=b[1],h=Object(n.useState)(null),x=Object(o.a)(h,2),g=x[0],p=x[1],v=function(){if(c)if(c&&!f)m(j.map((function(e){return e.id===g?Object(r.a)(Object(r.a)({},e),{},{name:c}):e}))),i(""),O(!0);else{var e={id:(new Date).getTime().toString(),name:c};m([].concat(Object(l.a)(j),[e])),i("")}else alert("please write items first")};Object(n.useEffect)((function(){localStorage.setItem("list",JSON.stringify(j))}),[j]);return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container mt-5 text-center",children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-md-10 input_items",children:[Object(d.jsx)("h1",{className:"text-white",children:"List your Items Here"}),Object(d.jsxs)("div",{className:" col input_items_div d-flex align-items-center justify-content-center",children:[Object(d.jsx)("input",{type:"text",className:"todo_input mt-4 pt-2 pb-2 ",placeholder:"  add your item",value:c,onChange:function(e){i(e.target.value)}}),f?Object(d.jsx)("i",{className:"fas fa-plus add-btn text-black add_icons pt-4",title:"add item",onClick:v}):Object(d.jsx)("i",{className:"fas fa-edit add-btn me-1  add_icons text-black pt-4",title:"edit items",onClick:v})]})]})}),Object(d.jsx)("div",{className:"row ",children:j.map((function(e,t){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"col col-md-10 show_items_list",children:Object(d.jsxs)("div",{className:" col-md-4 offset-md-4 showlist d-flex align-items-center justify-content-center mt-3",children:[Object(d.jsx)("h3",{className:" me-3",children:e.name}),Object(d.jsx)("i",{className:"fas fa-edit add-btn me-2 edit_icon",title:"edit items",onClick:function(){return function(e){var t=j.find((function(t){return t.id===e}));O(!1),i(t.name),p(e)}(e.id)},children:" "}),Object(d.jsx)("i",{className:"fas fa-trash-alt add-btn delete_icon ",title:"delete item",onClick:function(){return function(e){var t=j.filter((function(t){return e!==t.id}));m(t)}(e.id)}})]})})})}))}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col col-md-10",children:Object(d.jsx)("button",{className:"btn mt-3  todo_button",onClick:function(){m([]),O(!0)},children:"clear All"})})})]})})},m=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(j,{})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),u()}},[[17,1,2]]]);
//# sourceMappingURL=main.c8436c25.chunk.js.map