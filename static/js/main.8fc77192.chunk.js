(this.webpackJsonpreact_portfolio=this.webpackJsonpreact_portfolio||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(6),r=a.n(s),i=a(2),o=a(0);var l=function(e){var t=e.setNavState;return Object(o.jsx)("nav",{className:"nav-bar",children:Object(o.jsxs)("ul",{className:"flex-row",children:[Object(o.jsx)("li",{className:"nav-bar-item",children:Object(o.jsx)("a",{href:"#about",onClick:function(){return t("Bio")},children:"About me"})}),Object(o.jsx)("li",{className:"nav-bar-item",children:Object(o.jsx)("a",{href:"#projects",onClick:function(){return t("Projects")},children:"Projects"})}),Object(o.jsx)("li",{className:"nav-bar-item",children:Object(o.jsx)("a",{href:"#resume",onClick:function(){return t("Resume")},children:"Resume"})}),Object(o.jsx)("li",{className:"nav-bar-item",children:Object(o.jsx)("a",{href:"#contact",onClick:function(){return t("Contact")},children:"Contact Me"})})]})})};var j=function(e){var t=e.setNavState;return Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsxs)("div",{className:"title-card",children:[Object(o.jsx)("h1",{children:"Joshua Wood"}),Object(o.jsx)("p",{children:"Web Developer"})]}),Object(o.jsx)("hr",{}),Object(o.jsx)(l,{setNavState:t})]})};var u=function(){return Object(o.jsx)("footer",{className:"App-footer",children:"Joshua Wood \xa92021"})};var d=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"About Me:"}),Object(o.jsxs)("div",{id:"bio-block",children:[Object(o.jsx)("img",{alt:"",src:"../../../assets/images/Me.jpg"}),Object(o.jsx)("p",{className:"content-block",children:"Hello! I am full-stack web developer in training! I am currently taking classes and expect to graduate in August 2021. You can see some examples of my work in the Projects tab."})]})]})},m=[{name:"Chicago Art Wayfinder",desc:"A page for exploring art!",github:"https://github.com/Joshuawd190/Chicago-Art-Wayfinder",link:"https://joshuawd190.github.io/Chicago-Art-Wayfinder/",tech:"HTML, CSS, Javascript, Materialize",img:"wayfinder",imgname:"Chicago-Art-Wayfinder-Home.png"},{name:"Dolphin Group",desc:"Inventory tracking and e-commerce",github:"https://github.com/Joshuawd190/Dolphin-Group",link:"https://joshuawd190-dolphin-group.herokuapp.com/",tech:"MySQL, Sequelize, Express, Handlebars, Bulma, HTML, Javascript",img:"dolphin",imgname:"Dolphin-Group.png"},{name:"Dev Me Up!",desc:"Linkin meets Tinder",github:"https://github.com/Joshuawd190/Dev-it-to-You",link:"https://mysterious-temple-90706.herokuapp.com/",tech:"React, Node.js, Material-UI, MongoDB, Mongoose, Graphql, Apollo Server Express, ExpressJS",img:"Saucer",imgname:"Dev-Me-Up.png"}];a.p,a.p;var b=function(e){var t=e.name,a=e.desc,c=e.github,n=e.link,s=e.tech,r=e.img;return Object(o.jsxs)("div",{className:"project-container",children:[Object(o.jsx)("img",{alt:"",src:r}),Object(o.jsx)("h3",{children:t}),Object(o.jsxs)("p",{className:"hide",children:[a," ","\n"," Built using: ",s]}),Object(o.jsxs)("div",{className:"project-links",children:[Object(o.jsx)("a",{href:c,className:"hide",children:"Repository"}),Object(o.jsx)("a",{href:n,className:"hide",children:"Deployed"})]})]})};var h=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Projects:"}),Object(o.jsx)("div",{className:"flex-row gap",children:m.map((function(e,t){var a=e.name,c=e.desc,n=e.github,s=e.link,r=e.tech,i=e.img;return Object(o.jsx)(b,{name:a,desc:c,github:n,link:s,tech:r,img:i},t+a)}))})]})};var p=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Resume:"}),Object(o.jsx)("p",{className:"content-block",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'})]})},x=a(3),O=a(5);var v=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),l=r[0],j=r[1],u=a.name,d=a.email,m=a.message,b=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."));l||(n(Object(O.a)(Object(O.a)({},a),{},Object(x.a)({},e.target.name,e.target.value))),console.log("Handle Form",a))};return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Contact Me:"}),Object(o.jsx)("div",{className:"content-block",children:Object(o.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),l||console.log("Submit Form",a)},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",name:"name",defaultValue:u,onBlur:b})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email address: "}),Object(o.jsx)("input",{type:"email",name:"email",defaultValue:d,onBlur:b})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message: "}),Object(o.jsx)("textarea",{name:"message",rows:"5",defaultValue:m,onBlur:b})]}),l&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:l})}),Object(o.jsx)("button",{type:"submit",className:"contact-btn",children:"Submit"})]})})]})};var g=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{className:"content-block",children:"This page was not found"})})};var f=function(e){var t=e.NavState;return Object(o.jsx)("main",{className:"main-content",children:function(e){switch(e){case"Bio":return Object(o.jsx)(d,{});case"Projects":return Object(o.jsx)(h,{});case"Resume":return Object(o.jsx)(p,{});case"Contact":return Object(o.jsx)(v,{});default:return Object(o.jsx)(g,{})}}(t)})};var N=function(){var e=Object(c.useState)("Bio"),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{setNavState:n}),Object(o.jsx)(f,{NavState:a}),Object(o.jsx)(u,{})]})};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.8fc77192.chunk.js.map