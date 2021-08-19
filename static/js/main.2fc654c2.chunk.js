(this.webpackJsonpreact_portfolio=this.webpackJsonpreact_portfolio||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var c=a(1),i=a.n(c),n=a(6),r=a.n(n),s=a(2),o=a(0);var l=function(e){var t=e.setNavState;return Object(o.jsx)("nav",{className:"nav-bar",children:Object(o.jsxs)("ul",{className:"flex-row",children:[Object(o.jsx)("li",{className:"nav-bar-item",children:Object(o.jsx)("a",{href:"#about",onClick:function(){return t("Bio")},children:"About me"})}),Object(o.jsx)("li",{className:"nav-bar-item",children:Object(o.jsx)("a",{href:"#projects",onClick:function(){return t("Projects")},children:"Projects"})}),Object(o.jsx)("li",{className:"nav-bar-item",children:Object(o.jsx)("a",{href:"#resume",onClick:function(){return t("Resume")},children:"Resume"})}),Object(o.jsx)("li",{className:"nav-bar-item",children:Object(o.jsx)("a",{href:"#contact",onClick:function(){return t("Contact")},children:"Contact Me"})})]})})};var u=function(e){var t=e.setNavState;return Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsxs)("div",{className:"title-card",children:[Object(o.jsx)("h1",{children:"Joshua Wood"}),Object(o.jsx)("p",{children:"Web Developer"})]}),Object(o.jsx)("hr",{}),Object(o.jsx)(l,{setNavState:t})]})};var j=function(){return Object(o.jsx)("footer",{className:"App-footer",children:"Joshua Wood \xa92021"})};var d=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"About Me:"}),Object(o.jsxs)("div",{id:"bio-block",children:[Object(o.jsx)("img",{alt:"",src:"https://via.placeholder.com/150"}),Object(o.jsx)("p",{className:"content-block",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'})]})]})},m=[{name:"Chicago Art Wayfinder",desc:"A page for exploring art!",github:"https://github.com/Joshuawd190/Chicago-Art-Wayfinder",link:"https://joshuawd190.github.io/Chicago-Art-Wayfinder/",tech:"HTML, CSS, Javascript, Materialize",img:"Chicago-Art-Wayfinder-Home.png"},{name:"Dolphin Group",desc:"Inventory tracking and e-commerce",github:"https://github.com/Joshuawd190/Dolphin-Group",link:"https://joshuawd190-dolphin-group.herokuapp.com/",tech:"MySQL, Sequelize, Express, Handlebars, Bulma, HTML, Javascript",img:"Dolphin-Group.png"}];var b=function(e){var t=e.name,a=e.desc,c=e.github,i=e.link,n=e.tech,r=e.img;return Object(o.jsxs)("div",{className:"project-container",children:[Object(o.jsx)("img",{alt:"",src:"%PUBLIC_URL%/images/".concat(r)}),Object(o.jsx)("h3",{children:t}),Object(o.jsxs)("p",{className:"hide",children:[a," ","\n"," Built using: ",n]}),Object(o.jsxs)("div",{className:"project-links",children:[Object(o.jsx)("a",{href:c,className:"hide",children:"Repository"}),Object(o.jsx)("a",{href:i,className:"hide",children:"Deployed"})]})]})};var h=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Projects:"}),Object(o.jsx)("div",{className:"flex-row gap",children:m.map((function(e,t){var a=e.name,c=e.desc,i=e.github,n=e.link,r=e.tech,s=e.img;return Object(o.jsx)(b,{name:a,desc:c,github:i,link:n,tech:r,img:s},t+a)}))})]})};var x=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Resume:"}),Object(o.jsx)("p",{className:"content-block",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'})]})},p=a(3),O=a(5);var v=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(""),r=Object(s.a)(n,2),l=r[0],u=r[1],j=a.name,d=a.email,m=a.message,b=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);u(t?"":"Your email is invalid.")}else e.target.value.length?u(""):u("".concat(e.target.name," is required."));l||(i(Object(O.a)(Object(O.a)({},a),{},Object(p.a)({},e.target.name,e.target.value))),console.log("Handle Form",a))};return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Contact Me:"}),Object(o.jsx)("div",{className:"content-block",children:Object(o.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),l||console.log("Submit Form",a)},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",name:"name",defaultValue:j,onBlur:b})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email address: "}),Object(o.jsx)("input",{type:"email",name:"email",defaultValue:d,onBlur:b})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message: "}),Object(o.jsx)("textarea",{name:"message",rows:"5",defaultValue:m,onBlur:b})]}),l&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:l})}),Object(o.jsx)("button",{type:"submit",className:"contact-btn",children:"Submit"})]})})]})};var f=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{className:"content-block",children:"This page was not found"})})};var g=function(e){var t=e.NavState;return Object(o.jsx)("main",{className:"main-content",children:function(e){switch(e){case"Bio":return Object(o.jsx)(d,{});case"Projects":return Object(o.jsx)(h,{});case"Resume":return Object(o.jsx)(x,{});case"Contact":return Object(o.jsx)(v,{});default:return Object(o.jsx)(f,{})}}(t)})};var N=function(){var e=Object(c.useState)("Bio"),t=Object(s.a)(e,2),a=t[0],i=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(u,{setNavState:i}),Object(o.jsx)(g,{NavState:a}),Object(o.jsx)(j,{})]})};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.2fc654c2.chunk.js.map