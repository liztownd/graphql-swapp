(this.webpackJsonpgswapp=this.webpackJsonpgswapp||[]).push([[0],{35:function(e,n,t){},36:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c,r,a=t(6),i=t.n(a),s=t(28),l=t.n(s),o=t(55),d=t(57),j=t(54),h=(t(35),t(25)),u=t(58),b=(t(36),t(2)),p=function(e){var n=e.title,t=e.subtitle;return Object(b.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"display-4",children:n}),Object(b.jsx)("p",{className:"lead",children:t})]})})},O=t(23),m=t(56),f=Object(m.a)(c||(c=Object(O.a)(["\nquery{\n\tallPeople{\n    people{\n      name \n      id\n        }\n      }\n    }\n\n"]))),x=Object(m.a)(r||(r=Object(O.a)(["\nquery Person ($id: string){\n\tperson (id: $id){\n      name \n    \tfilmConnection{\n        films{\n          id\n          title\n          characterConnection{\n            characters{\n              name\n              id\n            }\n          }\n        }\n      }\n        }\n      }\n"]))),v=function(e){var n=e.newId,t=e.getNewId,c=Object(u.a)(x,{variables:{newId:n}}),r=c.error,a=c.data,i=a.person.filmConnection.films;return Object(b.jsx)("div",{children:r?Object(b.jsx)("p",{children:"Error! Check your spelling!"}):Object(b.jsxs)("div",{children:[Object(b.jsxs)("h2",{children:["Films ",a.person.name," appears in:"]}),i.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{id:e.id,children:e.title},e.id),Object(b.jsx)("h4",{children:"Other characters also in this film:"}),Object(b.jsx)("p",{className:"small",children:"Click a name to run a search for that character!"}),e.character.Connection.characters.map((function(e){return Object(b.jsx)("p",{onClick:function(n){return[n.preventDefault(),t(e.id)]},children:e.name},e.id)}))]})}))]})})};var g=function(){var e=Object(a.useRef)(null);e&&e.current&&(e.current.value="");var n=Object(a.useState)(),t=Object(h.a)(n,2),c=t[0],r=t[1],i=Object(a.useState)("cGVvcGxlOjE="),s=Object(h.a)(i,2),l=s[0],o=s[1],d=Object(u.a)(f).data;d&&(r(d),console.log("all people",c));var j={newId:l,getNewId:function(e){o(e)}},O="GraphQL Star Wars App",m="Find all the movies your favorite character appeared in.";return Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{title:O,subtitle:m}),Object(b.jsxs)("div",{className:"container-md",children:[Object(b.jsx)("h2",{children:"Search for a character:"}),Object(b.jsxs)("div",{className:"input-group mb-3",children:[Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Search Character","aria-label":"search","aria-describedby":"search",ref:e}),Object(b.jsx)("div",{className:"input-group-append",children:Object(b.jsx)("button",{className:"btn btn-outline-secondary",type:"button",id:"search",onClick:function(n){return function(e,n){e.preventDefault();var t=c.people,r=t.findIndex((function(e){return e.name===n})),a=t[r].id;o(a),console.log("newId",l)}(n,e.current.value)},children:"Search"})}),Object(b.jsx)(v,{newId:j.newId,getNewId:j.getNewId})]})]})]})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,60)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),a(e),i(e)}))},C=new o.a({uri:"http://graphql.org/swapi-graphql",cache:new d.a,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"DELETE, POST, GET, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"},credentials:"omit"});l.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(j.a,{client:C,children:Object(b.jsx)(g,{})})}),document.getElementById("root")),w()}},[[40,1,2]]]);
//# sourceMappingURL=main.bff0b090.chunk.js.map