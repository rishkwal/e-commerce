(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{93:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a(13),c=a.n(r),o=a(12),i=a.n(o),s=a(23),d=a(25),l=a(116),u=a(110),p=a(111),j=a(112),b=a(113),m=a(114),h=a(121),x=a(115),f=a(108),g=Object(f.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),O=a(3);var v=function(t){var e=t.product,a=t.onAddToCart,n=g();return Object(O.jsxs)(u.a,{className:n.root,children:[Object(O.jsx)(p.a,{className:n.media,image:e.media.source}),Object(O.jsxs)(j.a,{children:[Object(O.jsxs)("div",{className:n.cardContent,children:[Object(O.jsx)(b.a,{variant:"h5",gutterBottom:!0,children:e.name}),Object(O.jsx)(b.a,{variant:"h5",gutterBottom:!0,children:e.price.formatted_with_symbol})]}),Object(O.jsx)(b.a,{dangerouslySetInnerHTML:{__html:e.description},variant:"body2",color:"textSecondary"})]}),Object(O.jsx)(m.a,{disableSpacing:!0,clasName:n.cardActions,children:Object(O.jsx)(h.a,{"aria-label":"Add to Cart",onClick:function(){return a(e.id,1)},children:Object(O.jsx)(x.a,{})})})]})},w=Object(f.a)((function(t){return{toolbar:t.mixins.toolbar,content:{flexGrow:1,backgroundColor:t.palette.background.default,padding:t.spacing(3)},root:{flexGrow:1}}})),y=function(t){var e=t.products,a=t.onAddToCart,n=w();return Object(O.jsxs)("main",{className:n.content,children:[Object(O.jsx)("div",{className:n.toolbar}),Object(O.jsx)(l.a,{container:!0,justify:"center",spacing:4,children:e.map((function(t){return Object(O.jsx)(l.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(O.jsx)(v,{product:t,onAddToCart:a})},t.id)}))})]})},C=a(117),k=a(118),N=a(119),I=a(120),R=a.p+"static/media/color_logo_transparent.0550e209.png",_=a(20),A=a(10),B=Object(f.a)((function(t){return{appBar:Object(_.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},t.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(_.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(_.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(A.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(A.b)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(_.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}})),S=function(t){var e=t.totalItems,a=B();return Object(O.jsx)(C.a,{position:"fixed",className:a.appBar,color:"inherit",children:Object(O.jsxs)(k.a,{children:[Object(O.jsxs)(b.a,{variant:"h6",className:a.title,color:"inherit",children:[Object(O.jsx)("img",{src:R,alt:"RishKart.js",height:"25px",className:a.image}),"RishKart"]}),Object(O.jsx)("div",{className:a.grow}),Object(O.jsx)("div",{className:a.button,children:Object(O.jsx)(h.a,{"aria-label":"Show Cart Items",color:"inherit",children:Object(O.jsx)(N.a,{badgeContent:e,color:"secondary",children:Object(O.jsx)(I.a,{})})})})]})})},T=a(43),G=new(a.n(T).a)("pk_23681ab79885a78024674ba26043dac4b03da0ac878d0",!0);var L=function(){var t=Object(n.useState)([]),e=Object(d.a)(t,2),a=e[0],r=e[1],c=Object(n.useState)({}),o=Object(d.a)(c,2),l=o[0],u=o[1],p=function(){var t=Object(s.a)(i.a.mark((function t(){var e,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.products.list();case 2:e=t.sent,a=e.data,r(a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(s.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=u,t.next=3,G.cart.retrieve();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(s.a)(i.a.mark((function t(e,a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.cart.add(e,a);case 2:n=t.sent,u(n.cart);case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){p(),j()}),[]),console.log(a),console.log(l),Object(O.jsxs)("div",{children:[Object(O.jsx)(S,{totalItems:l.total_items}),Object(O.jsx)(y,{products:a,onAddToCart:b})]})};c.a.render(Object(O.jsx)(L,{}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.8797233c.chunk.js.map