(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(3),i=c.n(a),o=(c(10),c(11),c(0)),l=function(){return Object(o.jsx)("input",{className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0})},d=c(4),j=c(5),r=(c(13),c(19)),b=function(e){var t=e.label,c=e.active,s=e.editing,n=e.id,a=Object(r.a)(new Date,{includeSeconds:!0},{addSuffix:!0}),i=c?"active":"completed";return s&&(i="editing"),Object(o.jsxs)("li",{className:i,children:[Object(o.jsxs)("div",{className:"view",children:[Object(o.jsx)("input",{className:"toggle",type:"checkbox"}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{className:"description",children:t}),Object(o.jsxs)("span",{className:"created",children:["created ",a," ago"]})]}),Object(o.jsx)("button",{className:"icon icon-edit"}),Object(o.jsx)("button",{className:"icon icon-destroy"})]}),Object(o.jsx)("input",{type:"text",className:"edit",defaultValue:"Editing task"})]},n)},u=(c(14),["id"]),h=function(e){var t=e.todos.map((function(e){var t=e.id,c=Object(j.a)(e,u);return Object(o.jsx)(b,Object(d.a)({},c),t)}));return Object(o.jsx)("section",{className:"main",children:Object(o.jsx)("ul",{className:"todo-list",children:t})})},x=(c(15),function(){return Object(o.jsxs)("ul",{className:"filters",children:[Object(o.jsx)("li",{children:Object(o.jsx)("button",{className:"selected",children:"All"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{children:"Active"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{children:"Completed"})})]})}),O=(c(16),function(){return Object(o.jsxs)("footer",{className:"footer",children:[Object(o.jsx)("span",{className:"todo-count",children:"1 items left"}),Object(o.jsx)(x,{}),Object(o.jsx)("button",{className:"clear-completed",children:"Clear completed"})]})}),m=function(){var e=[{label:"Completed task",active:!1,editing:!1,id:Math.floor(1e3*Math.random())+1},{label:"Editing task",active:!0,editing:!0,id:Math.floor(1e3*Math.random())+1},{label:"Active task",active:!0,editing:!1,id:Math.floor(1e3*Math.random())+1}];return Object(o.jsxs)("section",{className:"todoapp",children:[Object(o.jsxs)("header",{className:"header",children:[Object(o.jsx)("h1",{children:"todos"}),Object(o.jsx)(l,{})]}),Object(o.jsx)(h,{todos:e}),Object(o.jsx)(O,{})]})};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.40f7c966.chunk.js.map