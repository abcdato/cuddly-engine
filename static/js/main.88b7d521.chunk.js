(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(10),i=n.n(c),l=n(8),r=n(6),s=n(7),d=n(2),u=n(3),b=n(5),h=n(4),f=(n(16),n(0)),j=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={label:""},e.onChange=function(t){e.setState({label:t.target.value})},e.onSubmit=function(t){t.preventDefault(),""!==e.state.label.trim()?(e.props.handleAdd(e.state.label),e.setState({label:""})):e.setState({label:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)("form",{onSubmit:this.onSubmit,children:Object(f.jsx)("input",{className:"new-todo",placeholder:"What needs to be done?",value:this.state.label,onChange:this.onChange})})}}]),n}(a.Component),g=n(11),p=n(26),m=(n(18),function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={label:e.props.label},e.onChange=function(t){e.setState({label:t.target.value})},e.onSubmit=function(t){t.preventDefault(),""!==e.state.label.trim()?(e.props.handleEdit(e.props.id,e.state.label),e.props.onToggleEditing(e.props.id)):e.props.handleDelete()},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.handleDelete,a=e.onToggleDone,o=e.onToggleEditing,c=e.done,i=e.editing,l=e.creationDate,r=Object(p.a)(l,{includeSeconds:!0}),s=c?"completed":i?"editing":"active";return Object(f.jsxs)("li",{className:s,children:[Object(f.jsxs)("div",{className:"view",children:[Object(f.jsx)("input",{className:"toggle",type:"checkbox",checked:c,onChange:a}),Object(f.jsxs)("label",{children:[Object(f.jsx)("span",{className:"description",children:t}),Object(f.jsxs)("span",{className:"created",children:["created ",r," ago"]})]}),Object(f.jsx)("button",{className:"icon icon-edit",onClick:o}),Object(f.jsx)("button",{className:"icon icon-destroy",onClick:n})]}),Object(f.jsx)("form",{onSubmit:this.onSubmit,children:Object(f.jsx)("input",{type:"text",className:"edit",value:this.state.label,onChange:this.onChange})})]})}}]),n}(a.Component)),O=(n(19),["id"]),v=function(e){var t=e.todos,n=e.handleDelete,a=e.handleEdit,o=e.onToggleDone,c=e.onToggleEditing,i=t.map((function(e){var t=e.id,i=Object(g.a)(e,O);return Object(f.jsx)(m,Object(r.a)(Object(r.a)({id:t},i),{},{handleDelete:function(){return n(t)},handleEdit:a,onToggleDone:function(){return o(t)},onToggleEditing:function(){return c(t)}}),t)}));return Object(f.jsx)("section",{className:"main",children:Object(f.jsx)("ul",{className:"todo-list",children:i})})},x=(n(20),function(e){var t=e.filter,n=e.onFilterChange,a=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"completed",label:"Completed"}].map((function(e){var a=e.name,o=e.label,c=t===a?"selected":null;return Object(f.jsx)("li",{children:Object(f.jsx)("button",{className:c,onClick:function(){return n(a)},children:o})},a)}));return Object(f.jsx)("ul",{className:"filters",children:a})}),D=(n(21),function(e){var t=e.itemsLeft,n=e.clearCompleted,a=e.filter,o=e.onFilterChange;return Object(f.jsxs)("footer",{className:"footer",children:[Object(f.jsxs)("span",{className:"todo-count",children:[t," items left"]}),Object(f.jsx)(x,{filter:a,onFilterChange:o}),Object(f.jsx)("button",{className:"clear-completed",onClick:n,children:"Clear completed"})]})}),C=n(27),k=(n(22),function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={todoData:[e.createTask("First task"),e.createTask("Second task"),e.createTask("Third task")],filter:"all"},e.handleDelete=function(t){e.setState((function(e){return{todoData:e.todoData.filter((function(e){return e.id!==t}))}}))},e.addEditedItem=function(t,n){e.setState((function(e){var a=e.todoData,o=Object(s.a)(a),c=o.findIndex((function(e){return e.id===t}));return o[c]=n,{todoData:o}}))},e.handleAdd=function(t){var n=e.createTask(t);e.setState((function(e){var t=e.todoData;return{todoData:[].concat(Object(s.a)(t),[n])}}))},e.handleEdit=function(t,n){e.setState((function(e){var a=e.todoData;return{todoData:Object(s.a)(a).map((function(e){return e.id===t&&(e.label=n),e}))}}))},e.onToggleDone=function(t){e.setState((function(n){var a=n.todoData;return{todoData:e.toggleProp(a,t,"done")}}))},e.onToggleEditing=function(t){e.setState((function(n){var a=n.todoData;return{todoData:e.toggleProp(a,t,"editing")}}))},e.onFilterChange=function(t){e.setState({filter:t})},e.clearCompleted=function(){e.setState((function(e){return{todoData:e.todoData.filter((function(e){return!e.done}))}}))},e}return Object(u.a)(n,[{key:"createTask",value:function(e){return{label:e,done:!1,editing:!1,creationDate:new Date,id:Object(C.a)()}}},{key:"toggleProp",value:function(e,t,n){var a=e.findIndex((function(e){return e.id===t})),o=e[a],c=Object(r.a)(Object(r.a)({},o),{},Object(l.a)({},n,!o[n]));return[].concat(Object(s.a)(e.slice(0,a)),[c],Object(s.a)(e.slice(a+1)))}},{key:"filterTasks",value:function(e,t){switch(t){default:return e;case"active":return e.filter((function(e){return!e.done}));case"completed":return e.filter((function(e){return e.done}))}}},{key:"render",value:function(){var e=this.state,t=e.todoData,n=e.filter,a=t.filter((function(e){return e.done})).length,o=t.length-a,c=this.filterTasks(t,n);return Object(f.jsxs)("section",{className:"todoapp",children:[Object(f.jsxs)("header",{className:"header",children:[Object(f.jsx)("h1",{children:"todos"}),Object(f.jsx)(j,{handleAdd:this.handleAdd})]}),Object(f.jsx)(v,{todos:c,handleDelete:this.handleDelete,handleEdit:this.handleEdit,addEditedItem:this.addEditedItem,onToggleDone:this.onToggleDone,onToggleEditing:this.onToggleEditing}),Object(f.jsx)(D,{itemsLeft:o,clearCompleted:this.clearCompleted,filter:n,onFilterChange:this.onFilterChange})]})}}]),n}(a.Component));i.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.88b7d521.chunk.js.map