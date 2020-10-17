(this["webpackJsonpredux-vs-apollo"]=this["webpackJsonpredux-vs-apollo"]||[]).push([[0],{125:function(e,t,a){e.exports=a(139)},139:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),c=a.n(r),d=a(38),i=a(48),l=a(30),u=function(e,t){switch(t.type){case"ADD_TODO":var a={id:e.todos.length,todo:t.payload,complete:!1};return Object(l.a)({},e,{todos:[].concat(Object(i.a)(e.todos),[a])});case"UPDATE_TODO":var n=e.todos.map((function(e){return e.id===t.payload&&(e.complete=!e.complete),e}));return Object(l.a)({},e,{todos:n});case"DELETE_TODO":var o=e.todos.filter((function(e){return e.id!==t.payload}));return Object(l.a)({},e,{todos:o});default:return e}},s=Object(n.createContext)(),m=function(e){var t=Object(n.useReducer)(u,{todos:[]}),a=Object(d.a)(t,2),r=a[0],c=a[1];return o.a.createElement(s.Provider,{value:{todos:r.todos,addTodo:function(e){c({type:"ADD_TODO",payload:e})},updateTodo:function(e){c({type:"UPDATE_TODO",payload:e})},deleteTodo:function(e){c({type:"DELETE_TODO",payload:e})}}},e.children)},p=a(62),E=a(35),f=a(107),h=a(108),O=a(109),v=new function e(){Object(O.a)(this,e),this.todos=[]},b={todoState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":var a={id:e.todos.length,todo:t.payload,complete:!1};return Object(l.a)({},e,{todos:[].concat(Object(i.a)(e.todos),[a])});case"UPDATE_TODO":var n=e.todos.map((function(e){return e.id===t.payload&&(e.complete=!e.complete),e}));return Object(l.a)({},e,{todos:n});case"DELETE_TODO":var o=e.todos.filter((function(e){return e.id!==t.payload}));return Object(l.a)({},e,{todos:o});default:return e}}},y=Object(E.combineReducers)(b),D=[h.a],g=Object(E.createStore)(y,{},Object(f.composeWithDevTools)(E.applyMiddleware.apply(void 0,D))),j=a(43),T=a(116),x=a(55),w={todos:[]},A=a(42),_=a(22),U=a.n(_);function C(){var e=Object(A.a)(["\n  query getTodos {\n    todos @client {\n      id\n      todo\n      complete\n    }\n  }\n"]);return C=function(){return e},e}var k=U()(C()),B={addTodo:function(e,t,a){var n=a.cache,o=n.readQuery({query:k}),r={id:o.todos.length,__typename:"todoItem",todo:t.todo,complete:!1};n.writeData({data:{todos:[].concat(Object(i.a)(o.todos),[r])}})},updateTodo:function(e,t,a){var n=a.cache,o=n.readQuery({query:k}).todos.map((function(e){return e.id===t.id&&(e.complete=!e.complete),e}));n.writeData({data:{todos:o}})},deleteTodo:function(e,t,a){var n=a.cache,o=n.readQuery({query:k}).todos.filter((function(e){return e.id!==t.id}));n.writeData({data:{todos:o}})}},I=new T.a({cache:new x.a,resolvers:{Mutation:Object(l.a)({},B)}});I.writeData({data:Object(l.a)({},w)});var S=I,$=a(181),M=a(171),P=a(78),W=a(45),q=a(111),R=a.n(q),L=a(175),Q=a(46),J=a(177),N=a(182),z=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),r=a[0],c=a[1],i=e.handleAdd;return o.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),""!==r&&(i(r),c(""))}(e)}},o.a.createElement(M.a,{container:!0,spacing:1},o.a.createElement(M.a,{item:!0,xs:9},o.a.createElement(N.a,{placeholder:"to do...",value:r,onChange:function(e){return c(e.target.value)},fullWidth:!0})),o.a.createElement(M.a,{item:!0,xs:3},o.a.createElement(J.a,{variant:"outlined",color:"primary",disabled:""===r,fullWidth:!0},"Add"))))},F=a(176),G=a(178),H=a(180),K=a(179),V=a(112),X=a.n(V),Y=function(e){var t=e.todo,a=e.handleUpdate,n=e.handleDelete,r={textDecoration:t.complete?"line-through":"none"};return o.a.createElement(G.a,{button:!0,onClick:function(){return a(t.id)}},o.a.createElement(K.a,{primary:t.todo,style:r}),o.a.createElement(H.a,{onClick:function(){return n(t.id)}},o.a.createElement(X.a,null)))},Z=function(e){var t=e.todos,a=e.handleUpdate,n=e.handleDelete;return o.a.createElement(F.a,null,t.map((function(e){return o.a.createElement(Y,{key:e.id,todo:e,handleUpdate:a,handleDelete:n})})))},ee=function(){var e=Object(n.useContext)(s),t=e.todos,a=e.addTodo,r=e.updateTodo,c=e.deleteTodo,d=Object(Q.a)();return o.a.createElement(L.a,{variant:"outlined",style:{padding:"".concat(d.spacing(2),"px")}},o.a.createElement(M.a,{container:!0,spacing:2,justify:"center"},o.a.createElement(M.a,{item:!0},o.a.createElement(W.Icon,{icon:R.a,width:"50",height:"50"}))),o.a.createElement(P.a,{component:"h2",variant:"h5",align:"center",gutterBottom:!0},"React.Context",o.a.createElement(z,{handleAdd:function(e){a(e)}}),o.a.createElement(Z,{todos:t,handleUpdate:function(e){r(e)},handleDelete:function(e){c(e)}})))},te=a(113),ae=a.n(te),ne=function(){var e=Object(p.c)((function(e){return e.todoState.todos})),t=Object(p.b)(),a=Object(Q.a)();return o.a.createElement(L.a,{variant:"outlined",style:{padding:"".concat(a.spacing(2),"px")}},o.a.createElement(M.a,{container:!0,spacing:2,justify:"center"},o.a.createElement(M.a,{item:!0},o.a.createElement(W.Icon,{icon:ae.a,width:"50",height:"50"}))),o.a.createElement(P.a,{component:"h2",variant:"h5",align:"center",gutterBottom:!0},"Redux",o.a.createElement(z,{handleAdd:function(e){t({type:"ADD_TODO",payload:e})}}),o.a.createElement(Z,{todos:e,handleUpdate:function(e){t({type:"UPDATE_TODO",payload:e})},handleDelete:function(e){t({type:"DELETE_TODO",payload:e})}})))};function oe(){var e=Object(A.a)(["\n  mutation deleteTodo($id: ID!) {\n    deleteTodo(id: $id) @client\n  }\n"]);return oe=function(){return e},e}function re(){var e=Object(A.a)(["\n  mutation updateTodo($id: ID!) {\n    updateTodo(id: $id) @client\n  }\n"]);return re=function(){return e},e}function ce(){var e=Object(A.a)(["\n  mutation addTodo($todo: String!) {\n    addTodo(todo: $todo) @client\n  }\n"]);return ce=function(){return e},e}function de(){var e=Object(A.a)(["\n  query getTodos {\n    todos @client {\n      id\n      todo\n      complete\n    }\n  }\n"]);return de=function(){return e},e}var ie=U()(de()),le=U()(ce()),ue=U()(re()),se=U()(oe()),me=a(114),pe=a.n(me),Ee=function(){var e=Object(j.useQuery)(ie),t=e.data,a=(e.loading,Object(j.useMutation)(le)),n=Object(d.a)(a,1)[0],r=Object(j.useMutation)(ue),c=Object(d.a)(r,1)[0],i=Object(j.useMutation)(se),l=Object(d.a)(i,1)[0],u=Object(Q.a)();return o.a.createElement(L.a,{variant:"outlined",style:{padding:"".concat(u.spacing(2),"px")}},o.a.createElement(M.a,{container:!0,spacing:2,justify:"center"},o.a.createElement(M.a,{item:!0},o.a.createElement(W.Icon,{icon:pe.a,width:"50",height:"50"}))),o.a.createElement(P.a,{component:"h2",variant:"h5",align:"center",gutterBottom:!0},"Apollo Client",o.a.createElement(z,{handleAdd:function(e){n({variables:{todo:e}})}}),o.a.createElement(Z,{todos:t.todos,handleUpdate:function(e){c({variables:{id:e}})},handleDelete:function(e){l({variables:{id:e}})}})))};var fe=function(){return o.a.createElement("div",{className:"App"},o.a.createElement($.a,{maxWidth:"xl",style:{paddingTop:"24px",paddingBottom:"24px"}},o.a.createElement(P.a,{component:"h1",variant:"h3",align:"center",gutterBottom:!0},"Context vs Redux vs Apollo"),o.a.createElement(M.a,{container:!0,spacing:2},o.a.createElement(M.a,{item:!0,xs:12,sm:12,md:4},o.a.createElement(m,null,o.a.createElement(ee,null))),o.a.createElement(M.a,{item:!0,xs:12,sm:12,md:4},o.a.createElement(p.a,{store:g},o.a.createElement(ne,null))),o.a.createElement(M.a,{item:!0,xs:12,sm:12,md:4},o.a.createElement(j.ApolloProvider,{client:S},o.a.createElement(Ee,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[125,1,2]]]);
//# sourceMappingURL=main.270ac80c.chunk.js.map