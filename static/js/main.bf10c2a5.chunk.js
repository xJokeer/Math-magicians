(this["webpackJsonpmath-magicians"]=this["webpackJsonpmath-magicians"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){t.exports={home:"Home_home__1sOyb"}},19:function(t,e,n){t.exports={main:"Quotes_main__1n7Z6"}},27:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(17),l=n.n(o),i=(n(27),n(15),n(10)),s=n(2),r=n(22),j=n(4),b=n(13),u=n.n(b);function m(t,e,n){var a=u()(t),c=u()(e);if("+"===n)return a.plus(c).toString();if("-"===n)return a.minus(c).toString();if("*"===n)return a.times(c).toString();if("\xf7"===n)try{return a.div(c).toString()}catch(o){return"Can't divide by 0."}if("%"===n)try{return a.mod(c).toString()}catch(o){return"Can't divide by 0."}throw Error("Unknown operation '".concat(n,"'"))}var d=n(0),x=function(){var t=Object(a.useState)({total:0,next:null,operation:null}),e=Object(r.a)(t,2),n=e[0],c=e[1],o=n.next,l=n.total,i=n.operation,s=function(t){t.preventDefault(),c((function(e){return n=e,"AC"===(a=t.target.name)?{total:0,next:null,operation:null}:a.match(/[0-9]+/)?"0"===a&&"0"===n.next?{total:null,next:0}:n.operation?n.next?Object(j.a)(Object(j.a)({},n),{},{next:n.next+a}):Object(j.a)(Object(j.a)({},n),{},{next:a}):n.next?"0"===n.next?{next:a,total:null}:{next:n.next+a,total:null}:{next:a,total:null}:"."===a?n.next?n.next.includes(".")?Object(j.a)({},n):Object(j.a)(Object(j.a)({},n),{},{next:"".concat(n.next,".")}):n.operation?{next:"0."}:n.total?n.total.includes(".")?{}:{total:"".concat(n.total,".")}:{total:"0."}:"="===a?n.next&&n.operation?{total:m(n.total,n.next,n.operation),next:null,operation:null}:{}:"+/-"===a?n.next?Object(j.a)(Object(j.a)({},n),{},{next:(-1*parseFloat(n.next)).toString()}):n.total?Object(j.a)(Object(j.a)({},n),{},{total:(-1*parseFloat(n.total)).toString()}):{}:n.next||!n.total||n.operation?n.operation?n.total&&!n.next?Object(j.a)(Object(j.a)({},n),{},{operation:a}):{total:m(n.total,n.next,n.operation),next:null,operation:a}:n.next?{total:n.next,next:null,operation:a}:Object(j.a)(Object(j.a)({},n),{},{operation:a}):Object(j.a)(Object(j.a)({},n),{},{operation:a});var n,a}))};return Object(d.jsxs)("div",{id:"main",className:"main",children:[Object(d.jsx)("form",{name:"form",children:Object(d.jsx)("input",{type:"text",id:"result",value:(0===l&&null===o?0:0!==l&&null!==l?l:"")+(i||"")+(o||""),disabled:!0})}),Object(d.jsx)("div",{id:"operations",className:"operations",children:Object(d.jsxs)("div",{id:"gridDiv",className:"grid",children:[Object(d.jsx)("button",{type:"button",onClick:s,name:"AC",className:"calComp",children:"AC"}),Object(d.jsx)("button",{type:"button",onClick:s,name:"+/-",className:"calComp",children:"+/-"}),Object(d.jsx)("button",{type:"button",onClick:s,name:"%",className:"calComp",children:"%"}),Object(d.jsx)("button",{type:"button",onClick:s,name:"\xf7",className:"opeComp",children:"\xf7"}),Object(d.jsx)("button",{type:"button",onClick:s,name:"7",className:"calComp",children:"7"}),Object(d.jsx)("button",{type:"button",onClick:s,name:"8",className:"calComp",children:"8"}),Object(d.jsx)("button",{type:"button",onClick:s,name:"9",className:"calComp",children:"9"}),Object(d.jsx)("button",{type:"button",onClick:s,name:"*",className:"opeComp",children:"*"}),Object(d.jsx)("button",{type:"button",onClick:s,name:"4",className:"calComp",children:"4"}),Object(d.jsx)("button",{type:"button",onClick:s,name:"5",className:"calComp",children:"5"}),Object(d.jsx)("button",{type:"button",onClick:s,name:"6",className:"calComp",children:"6"}),Object(d.jsx)("button",{type:"button",onClick:s,name:"-",className:"opeComp",children:"-"}),Object(d.jsx)("button",{type:"button",onClick:s,name:"1",className:"calComp",children:"1"}),Object(d.jsx)("button",{type:"button",onClick:s,name:"2",className:"calComp",children:"2"}),Object(d.jsx)("button",{type:"button",onClick:s,name:"3",className:"calComp",children:"3"}),Object(d.jsx)("button",{type:"button",onClick:s,name:"+",className:"opeComp",children:"+"}),Object(d.jsx)("button",{type:"button",onClick:s,name:"0",className:"calComp num0",children:"0"}),Object(d.jsx)("button",{type:"button",onClick:s,name:".",className:"calComp",children:"."}),Object(d.jsx)("button",{type:"button",onClick:s,name:"=",className:"opeComp",children:"="})]})})]})},h=n(18),p=n.n(h);var O=function(){return Object(d.jsxs)("div",{className:p.a.home,children:[Object(d.jsx)("h4",{children:" Welcome to our page"}),Object(d.jsx)("p",{children:'"Good Christians should beware of mathematicians and of all those who are used to making prophecies, even when these prophecies are fulfilled, because there is a danger that mathematicians have made a pact with the devil to cloud the spirit and plunge men into hell.\xbb. San Agustin'})]})},C=n(19),y=n.n(C),f=function(){return Object(d.jsx)("div",{className:y.a.main,children:Object(d.jsx)("p",{children:'"No human investigation can be called science if it does not pass through mathematical tests" -Leonardo Da Vinci.'})})};var g=function(){var t=[{display:"flex",justifyContent:"space-around"},{margin:"20px"},{listStyle:"none",display:"flex"},{textDecoration:"none",fontFamily:"Franklin Gothic Medium",color:"wheat"},{display:"flex",flexDirection:"column",alignItems:"center"},{fontFamily:"Franklin Gothic Medium"}];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{style:t[4],children:[Object(d.jsxs)("div",{style:t[0],children:[Object(d.jsx)("h1",{style:t[5],children:" Math Magicians"}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{style:t[2],children:[Object(d.jsx)("li",{style:t[1],children:Object(d.jsx)(i.b,{style:t[3],to:"/",children:"Home"})}),Object(d.jsx)("li",{style:t[1],children:Object(d.jsx)(i.b,{style:t[3],to:"/calculator",children:"Calculator"})}),Object(d.jsx)("li",{style:t[1],children:Object(d.jsx)(i.b,{style:t[3],to:"/quotes",children:"Quotes"})})]})})]}),Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{path:"/calculator",children:Object(d.jsx)(x,{})}),Object(d.jsx)(s.a,{path:"/quotes",children:Object(d.jsx)(f,{})}),Object(d.jsx)(s.a,{path:"/",children:Object(d.jsx)(O,{})})]})]})}),Object(d.jsx)("footer",{children:Object(d.jsx)("div",{children:Object(d.jsxs)("p",{children:["Designed by",Object(d.jsx)("a",{style:t[3],target:"_blank",href:"https://github.com/xJokeer",rel:"noreferrer",children:" @xJokeer"})]})})})]})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,l=e.getTTFB;n(t),a(t),c(t),o(t),l(t)}))};l.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),k()}},[[34,1,2]]]);
//# sourceMappingURL=main.bf10c2a5.chunk.js.map