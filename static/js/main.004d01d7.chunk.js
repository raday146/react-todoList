(this["webpackJsonptodolist-exercise"]=this["webpackJsonptodolist-exercise"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(2),s=a.n(n),o=a(10),i=a.n(o),c=(a(16),a(3)),d=a(4),l=a(6),r=a(5),h=a(7),u=a(11),b=a(1),j=a(8),p=(a(17),a(0)),m=function(t){Object(l.a)(a,t);var e=Object(r.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).state={isEditing:!1,task:n.props.task},n.handleRemove=n.handleRemove.bind(Object(b.a)(n)),n.toggleForm=n.toggleForm.bind(Object(b.a)(n)),n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleUpdate=n.handleUpdate.bind(Object(b.a)(n)),n.handleToggle=n.handleToggle.bind(Object(b.a)(n)),n}return Object(d.a)(a,[{key:"handleToggle",value:function(t){this.props.toggleTodo(this.props.id)}},{key:"handleRemove",value:function(){this.props.removeItem(this.props.id)}},{key:"toggleForm",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleUpdate",value:function(t){t.preventDefault(),this.props.updateTodo(this.props.id,this.state.task),this.setState({isEditing:!1})}},{key:"handleChange",value:function(t){this.setState(Object(j.a)({},t.target.name,t.target.value))}},{key:"render",value:function(){return this.state.isEditing?Object(p.jsx)("div",{className:"Todo",children:Object(p.jsxs)("form",{className:"Todo-edit-form",onSubmit:this.handleUpdate,children:[Object(p.jsx)("input",{type:"text",value:this.state.task,name:"task",onChange:this.handleChange}),Object(p.jsx)("button",{children:"Save"})]})}):Object(p.jsxs)("div",{className:"Todo",children:[Object(p.jsxs)("li",{className:this.props.completed?"Todo-task completed":"Todo-task",onClick:this.handleToggle,children:[" ",this.props.task," "]}),Object(p.jsxs)("div",{className:"Todo-buttons",children:[Object(p.jsx)("button",{onClick:this.toggleForm,children:Object(p.jsx)("li",{className:"fas fa-pen"})}),Object(p.jsx)("button",{onClick:this.handleRemove,children:Object(p.jsx)("li",{className:"fas fa-trash"})})]})]})}}]),a}(n.Component),O=a(24),g=(a(19),function(t){Object(l.a)(a,t);var e=Object(r.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).state={task:""},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(b.a)(n)),n}return Object(d.a)(a,[{key:"handleChange",value:function(t){this.setState(Object(j.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.props.createTodo(Object(h.a)(Object(h.a)({},this.state),{},{id:Object(O.a)(),completed:!1})),this.setState({task:""})}},{key:"render",value:function(){return Object(p.jsxs)("form",{className:"NewTodoForm",onSubmit:this.handleSubmit,children:[Object(p.jsx)("label",{htmlFor:"task",children:"New Todo"}),Object(p.jsx)("input",{type:"text",placeholder:"New Todo",id:"task",value:this.state.task,name:"task",onChange:this.handleChange}),Object(p.jsx)("button",{children:"Add Todo"})]})}}]),a}(n.Component)),v=(a(20),function(t){Object(l.a)(a,t);var e=Object(r.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).state={todos:[]},n.create=n.create.bind(Object(b.a)(n)),n.removeItem=n.removeItem.bind(Object(b.a)(n)),n.update=n.update.bind(Object(b.a)(n)),n.toggleCompleted=n.toggleCompleted.bind(Object(b.a)(n)),n}return Object(d.a)(a,[{key:"create",value:function(t){this.setState({todos:[].concat(Object(u.a)(this.state.todos),[t])})}},{key:"removeItem",value:function(t){this.setState({todos:this.state.todos.filter((function(e){return e.id!==t}))})}},{key:"update",value:function(t,e){var a=this.state.todos.map((function(a){return a.id===t?Object(h.a)(Object(h.a)({},a),{},{task:e}):a}));this.setState({todos:a})}},{key:"toggleCompleted",value:function(t){var e=this.state.todos.map((function(e){return e.id===t?Object(h.a)(Object(h.a)({},e),{},{completed:!e.completed}):e}));this.setState({todos:e})}},{key:"render",value:function(){var t=this,e=this.state.todos.map((function(e){return Object(p.jsx)(m,{id:e.id,task:e.task,removeItem:t.removeItem,updateTodo:t.update,completed:e.completed,toggleTodo:t.toggleCompleted},e.id)}));return Object(p.jsxs)("div",{className:"TodoList",children:[Object(p.jsxs)("h1",{children:["Todo List! ",Object(p.jsx)("span",{children:"A simple Todo List App."})]}),Object(p.jsx)("ul",{children:e}),Object(p.jsx)(g,{createTodo:this.create})]})}}]),a}(n.Component)),f=(a(21),function(t){Object(l.a)(a,t);var e=Object(r.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(v,{})})}}]),a}(n.Component)),k=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,o=e.getLCP,i=e.getTTFB;a(t),n(t),s(t),o(t),i(t)}))};i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root")),k()}],[[22,1,2]]]);
//# sourceMappingURL=main.004d01d7.chunk.js.map