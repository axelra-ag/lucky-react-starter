(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(n,e,t){n.exports=t(65)},65:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(12),o=t.n(c),l=t(21),i=t(1),u=t(2);function d(){var n=Object(i.a)(["\n  @import url(",");\n  html {\n    font-family: ",";\n  }\n  body {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    line-height: 1;\n    font-weight: inherit;\n    font-style: inherit;\n    font-size: 100%;\n    font-family: inherit;\n    outline: none;\n  }\n  h1, h2, h3, h4, h5, h6, p {\n    color: ",";\n    font-weight: 100;\n    line-height: 1.4;\n  }\n  \n  h1 {\n   font-size: calc(22.28px + 2vmin);\n  }\n  \n  p {\n    word-break: break-word;\n    line-height: 1.4;\n  }\n"]);return d=function(){return n},n}var s,m,f,p={fontFamily:"Gothic A1, sans-serif",googleUrl:"https://fonts.googleapis.com/css?family=Gothic+A1:200,400,700",boxShadow:"0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08)"};!function(n){n.PRIMARY="#f38181",n.SECONDARY="#fce38a",n.TERTRIARY="#eaffd0",n.FOURTH="#95e1d3",n.WHITE="#fff",n.BLACK="#000"}(s||(s={})),function(n){n._WHITE="#fff",n._100="#f6f9fc",n._200="#e9ecef",n._300="#dee2e6",n._400="#ced4da",n._500="#adb5bd",n._600="#8898aa",n._700="#525f7f",n._800="#32325d",n._900="#212529",n._BLACK="#000"}(m||(m={})),function(n){n.INFO="#11cdef",n.SUCCESS="#2ece89",n.WARNING="#fb6240",n.ERROR="#f5365c"}(f||(f={}));var h,v=Object(u.b)(d(),p.googleUrl,function(n){return n.theme.fontFamily},s.PRIMARY),E=t(22);function g(){var n=Object(i.a)([""]);return g=function(){return n},n}!function(n){n[n.IMAGE=0]="IMAGE",n[n.LOGO=1]="LOGO"}(h||(h={}));var b=u.d.img(g()),O=function(n){var e=n.source,t=n.style,a=n.assetType,c=Object(E.a)(n,["source","style","assetType"]),o="".concat(function(n){switch(n){case h.IMAGE:return"./../assets/images";case h.LOGO:return"./../assets/logos";default:return"./../assets"}}(a),"/").concat(e);return r.a.createElement(b,Object.assign({style:t,src:o},c))},x=t(20),y=t(11),j=t(13),R=t(14),w=t(16),T=t(15),A=t(17);function L(){var n=Object(i.a)(["\n  &:first-of-type {\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n  }\n  &:last-of-type {\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n  }\n  padding: 1.2rem;\n  flex: 1;\n  background: ",";\n"]);return L=function(){return n},n}function P(){var n=Object(i.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return P=function(){return n},n}function k(){var n=Object(i.a)([""]);return k=function(){return n},n}var I,Y=u.d.div(k()),H=u.d.div(P()),S=u.d.div(L(),function(n){return n.background}),C=function(n){function e(){var n,t;Object(j.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(w.a)(this,(n=Object(T.a)(e)).call.apply(n,[this].concat(r)))).state={},t}return Object(A.a)(e,n),Object(R.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(Y,null,r.a.createElement("h1",null,"Heading H1"),r.a.createElement("h2",null,"Heading H2"),r.a.createElement("h3",null,"Heading H3"),r.a.createElement("h4",null,"Heading H4"),r.a.createElement("h5",null,"Heading H5"),r.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"," "),r.a.createElement("h2",null,"Colors Palette "),r.a.createElement(H,null,r.a.createElement(S,{background:s.PRIMARY}),r.a.createElement(S,{background:s.SECONDARY}),r.a.createElement(S,{background:s.TERTRIARY}),r.a.createElement(S,{background:s.FOURTH})),r.a.createElement("h2",null,"Gray Scale"),r.a.createElement(H,null,r.a.createElement(S,{background:m._100}),r.a.createElement(S,{background:m._200}),r.a.createElement(S,{background:m._300}),r.a.createElement(S,{background:m._400}),r.a.createElement(S,{background:m._500}),r.a.createElement(S,{background:m._600}),r.a.createElement(S,{background:m._700}),r.a.createElement(S,{background:m._800}),r.a.createElement(S,{background:m._900})))}}]),e}(a.Component),D=t(28),M=t.n(D),_=t(36);!function(n){n.LOADING_TODOS="LOADING_TODOS",n.FETCHED_TODOS="FETCHED_TODOS",n.ERROR_TODOS="ERROR_TODOS"}(I||(I={}));var G,z=function(){return!0};!function(n){n.GET="GET",n.POST="POST",n.PUT="PUT",n.DELETE="DELETE"}(G||(G={}));function U(){var n=Object(i.a)(["\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n  & div {\n    position: absolute;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: ",";\n    animation: "," 1.2s linear infinite;\n  }\n  & div:nth-child(1) {\n    top: 6px;\n    left: 6px;\n    animation-delay: 0s;\n  }\n  & div:nth-child(2) {\n    top: 6px;\n    left: 26px;\n    animation-delay: -0.4s;\n  }\n  & div:nth-child(3) {\n    top: 6px;\n    left: 45px;\n    animation-delay: -0.8s;\n  }\n  & div:nth-child(4) {\n    top: 26px;\n    left: 6px;\n    animation-delay: -0.4s;\n  }\n  & div:nth-child(5) {\n    top: 26px;\n    left: 26px;\n    animation-delay: -0.8s;\n  }\n  & div:nth-child(6) {\n    top: 26px;\n    left: 45px;\n    animation-delay: -1.2s;\n  }\n  & div:nth-child(7) {\n    top: 45px;\n    left: 6px;\n    animation-delay: -0.8s;\n  }\n  & div:nth-child(8) {\n    top: 45px;\n    left: 26px;\n    animation-delay: -1.2s;\n  }\n  & div:nth-child(9) {\n    top: 45px;\n    left: 45px;\n    animation-delay: -1.6s;\n  }\n"]);return U=function(){return n},n}function N(){var n=Object(i.a)(["\n    0%, 100% {\n        opacity: 1;\n    }\n    50% {\n        opacity: 0.5;\n    }\n"]);return N=function(){return n},n}var F=Object(u.e)(N()),B=u.d.div(U(),function(n){return n.color},F),Z=function(n){var e=n.color;return r.a.createElement(B,{color:e},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},W=t(37),X=t.n(W),K=function(n,e){return X()(e).rgb().alpha(n).string()};function J(){var n=Object(i.a)(["\n  background: ",";\n  color: ",";\n  padding: 4px 3px;\n  border-radius: 4px;\n  font-size: 12px;\n  margin-left: auto;\n  margin-right: 0.5em;\n"]);return J=function(){return n},n}function V(){var n=Object(i.a)(["\n  margin: 0 1rem;\n  color: ",";\n"]);return V=function(){return n},n}function $(){var n=Object(i.a)(["\n  &:hover {\n    box-shadow: ",";\n  }\n  transition: 0.2s ease-in-out;\n  padding: 0.2rem 1.5rem;\n  border: 1px solid ",";\n  border-radius: 4px;\n  margin: 0.3rem 0;\n  display: flex;\n  align-items: center;\n  color: ",";\n"]);return $=function(){return n},n}function q(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  max-height: 300px;\n  overflow: scroll;\n  width: 100%;\n  margin-bottom: 1em;\n"]);return q=function(){return n},n}function Q(){var n=Object(i.a)(["\n  border: 1px solid ",";\n  padding: 1rem;\n  border-radius: 5px;\n  color: ",";\n  margin-top: auto;\n"]);return Q=function(){return n},n}function nn(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  flex: 1;\n"]);return nn=function(){return n},n}var en=u.d.div(nn()),tn=u.d.div(Q(),s.BLACK,s.BLACK),an=u.d.div(q()),rn=u.d.div($(),p.boxShadow,m._200,s.PRIMARY),cn=u.d.p(V(),s.BLACK),on=u.d.div(J(),function(n){return n.completed?K(.15,f.SUCCESS):K(.15,f.WARNING)},function(n){return n.completed?f.SUCCESS:f.WARNING}),ln=function(n){var e=n.todo;return r.a.createElement(rn,{key:e.id},e.id," ","  ",r.a.createElement(cn,null,e.title),r.a.createElement(on,{completed:e.completed},e.completed?"done":"todo"))},un=function(n){function e(){var n,t;Object(j.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(w.a)(this,(n=Object(T.a)(e)).call.apply(n,[this].concat(r)))).state={},t}return Object(A.a)(e,n),Object(R.a)(e,[{key:"render",value:function(){var n=this,e=this.props,t=e.loading,a=e.todos;return r.a.createElement(en,null,r.a.createElement("h2",null,"Redux with Typescript is nice :)"),0===a.length&&!t&&r.a.createElement("p",null,"For each redux element in our application, we create three different files (in order to have everything nicely decoupled (and thus easier to maintain):",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"actions.tsx")),r.a.createElement("li",null,r.a.createElement("code",null,"reducer.tsx")),r.a.createElement("li",null,r.a.createElement("code",null,"types.tsx")))),t&&r.a.createElement(Z,{color:s.PRIMARY}),a.length>0&&r.a.createElement(an,null,a.map(function(n){return r.a.createElement(ln,{todo:n})})),r.a.createElement(tn,{onClick:function(){n.props.fetchTodos()}},"Try me!"))}}]),e}(a.Component),dn=Object(l.b)(function(n){return{todos:n.todos.todos,loading:n.todos.loading}},function(n){return{fetchTodos:function(){n(function(){var n=Object(_.a)(M.a.mark(function n(e){return M.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:I.LOADING_TODOS,loading:!0}),n.next=3,new Promise(function(n){return setTimeout(n,2e3)});case 3:fetch("".concat(z()?"":"https://jsonplaceholder.typicode.com","/todos"),(t=G.GET,{method:t,headers:{"Content-Type":"application/json"}})).then(function(n){return n.json()}).then(function(n){e({type:I.FETCHED_TODOS,loading:!1,todos:n})}).catch(function(n){console.log(n),e({type:I.ERROR_TODOS,error:n,loading:!1})});case 4:case"end":return n.stop()}var t},n)}));return function(e){return n.apply(this,arguments)}}())}}})(un);function sn(){var n=Object(i.a)(["\n  &:hover {\n    transform: ",";\n  }\n  transition: 0.25s all;\n  cursor: ",";\n  width: ","px;\n  height: ","px;\n  vertical-align: middle;\n  fill: ",";\n  z-index: 100;\n"]);return sn=function(){return n},n}var mn,fn=u.d.svg(sn(),function(n){return n.move?"translateY(2px)":null},function(n){return n.pointer?"pointer":"default"},function(n){return n.width},function(n){return n.height},function(n){return n.color?n.color:null});!function(n){n.TYPOGRAPHY="TYPOGRAPHY",n.REDUX="REDUX",n.PICTURE="PICTURE"}(mn||(mn={}));var pn=function(n){var e=n.name,t=Object(E.a)(n,["name"]);switch(e){case mn.TYPOGRAPHY:return r.a.createElement(fn,Object.assign({},t,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 144 144"}),r.a.createElement("g",null,r.a.createElement("path",{d:"M32.5,78.3h17.4l-8.6-25.5L32.5,78.3z M35.3,76.3L41.2,59l5.9,17.3H35.3z"}),r.a.createElement("path",{d:"M98.1,63.5c-3.3,0-6,1.1-8,3.3l0,0c-2,2.2-3,5.2-3,8.9c0,3.8,1,6.8,3,8.9c2,2.2,4.7,3.3,8,3.3c3.2,0,5.9-1.1,8-3.4   c2.1-2.2,3.1-5.2,3.1-8.8c0-3.7-1-6.7-3.1-8.9C104.1,64.6,101.4,63.5,98.1,63.5z M104.7,83.1c-1.7,1.8-3.8,2.7-6.6,2.7   c-2.8,0-4.9-0.9-6.6-2.6c-1.7-1.8-2.5-4.3-2.5-7.6c0-3.2,0.8-5.8,2.5-7.6c1.7-1.8,3.8-2.6,6.6-2.6c2.7,0,4.8,0.9,6.6,2.7   c1.7,1.8,2.6,4.3,2.6,7.5C107.3,78.8,106.4,81.3,104.7,83.1z"}),r.a.createElement("path",{d:"M144,41.8v-2H34.5l3.4-9.3h66.8v-2H38.7L49.2,0.1L47.1,0L36.6,28.5H0v2h35.8L10.4,99.6h17L31,89h20.4L55,99.6h15l3.6,9.9H0   v2h74.4l8.3,22.6l1.9-0.7l-8.1-21.9h44.7V144h2v-32.5H144v-2h-20.7v-9.9V53.3v-1.6h-16v5.7c-1.1-1.4-2.5-2.7-4.1-3.7l0,0   c-2.7-1.7-5.9-2.5-9.6-2.5c-4,0-7.6,1-10.7,3c-3.1,2-5.6,4.9-7.4,8.6c-1.8,3.7-2.7,8-2.7,13c0,4.9,0.9,9.3,2.7,13   c1.8,3.7,4.3,6.6,7.4,8.6c3.1,2,6.7,3,10.7,3c3.7,0,6.9-0.9,9.6-2.5c1.6-1,3-2.2,4.1-3.7v5.7h14v9.9H75.8L66.4,84l0,0L50.8,41.8   H144z M109.3,97.6v-7.3l-1.9-0.4c-1.1,2.5-2.9,4.6-5.2,6.1c-2.4,1.5-5.2,2.2-8.5,2.2c-3.6,0-6.8-0.9-9.6-2.7   c-2.8-1.8-5.1-4.4-6.7-7.8c-1.7-3.4-2.5-7.5-2.5-12.1c0-4.7,0.8-8.7,2.5-12.1c1.6-3.4,3.9-6,6.7-7.7c2.8-1.8,6.1-2.7,9.6-2.7   c3.3,0,6.2,0.8,8.5,2.2c2.3,1.5,4.1,3.5,5.2,6.1l1.9-0.4v-7.3h12v44H109.3z M69,97l0.2,0.6H56.4L52.8,87H29.6l-3.6,10.6H13.3   l20.6-55.8h14.8L69,97z"})));case mn.REDUX:return r.a.createElement(fn,Object.assign({},t,{x:"0px",y:"0px",viewBox:"0 0 100 100"}),r.a.createElement("g",{transform:"translate(0,-952.36218)"},r.a.createElement("path",{d:"m 28.5625,962.42473 c -0.6903,0 -1.2813,0.59103 -1.2813,1.28125 l 0,34.21875 c -1.0541,0.0681 -2.0882,0.19411 -3.0937,0.40625 a 1.0856908,1.0856908 0 0 0 -0.8438,1.15625 c 0,0 0.095,1.27077 -0.031,2.59377 -0.063,0.6615 -0.1966,1.3153 -0.375,1.7812 -0.1783,0.4659 -0.3542,0.6536 -0.4376,0.6875 -0.084,0.034 -0.3596,0.053 -0.8124,-0.1562 -0.4528,-0.2089 -1.0244,-0.602 -1.5313,-1.0313 -1.0138,-0.8584 -1.8125,-1.8437 -1.8125,-1.8437 a 1.0856908,1.0856908 0 0 0 -1.4375,-0.2188 c -2.6995,1.712 -5.0056,3.9791 -6.75,6.6563 a 1.0856908,1.0856908 0 0 0 0.2187,1.4375 c 0,0 0.9666,0.819 1.8126,1.8437 0.423,0.5124 0.7968,1.0758 1,1.5313 0.2035,0.4555 0.1912,0.7294 0.1562,0.8125 -0.035,0.083 -0.2194,0.2648 -0.6875,0.4375 -0.4681,0.1726 -1.1191,0.2886 -1.7813,0.3437 -1.3244,0.1104 -2.5937,0 -2.5937,0 a 1.0856908,1.0856908 0 0 0 -1.1563,0.8438 c -0.3513,1.5689 -0.5312,3.2013 -0.5312,4.875 0,1.5789 0.1553,3.1379 0.4688,4.625 a 1.0856908,1.0856908 0 0 0 1.1562,0.8437 c 0,0 1.2704,-0.095 2.5938,0.031 0.6619,0.063 1.315,0.1967 1.7812,0.375 0.4662,0.1784 0.6535,0.354 0.6875,0.4375 0.034,0.084 0.021,0.3595 -0.1875,0.8125 -0.2089,0.453 -0.5707,1.0241 -1,1.5313 -0.8585,1.0144 -1.8438,1.8125 -1.8438,1.8125 a 1.0856908,1.0856908 0 0 0 -0.2187,1.4375 c 1.712,2.6992 3.98,4.9749 6.6563,6.7187 a 1.0856908,1.0856908 0 0 0 1.4062,-0.1875 c 0,0 0.8502,-0.9665 1.875,-1.8125 0.5124,-0.4229 1.0755,-0.7966 1.5312,-1 0.4556,-0.2033 0.6982,-0.1912 0.7813,-0.1562 0.083,0.035 0.2959,0.2194 0.4687,0.6875 0.1727,0.4681 0.2886,1.119 0.3438,1.7812 0.1103,1.3245 0,2.5938 0,2.5938 a 1.0856908,1.0856908 0 0 0 0.8438,1.1562 c 1.5676,0.3508 3.2001,0.5313 4.875,0.5313 1.5809,0 3.1068,-0.1551 4.5937,-0.4688 a 1.0856908,1.0856908 0 0 0 0.875,-1.1562 c 0,0 -0.095,-1.2708 0.031,-2.5938 0.063,-0.6615 0.1654,-1.3153 0.3437,-1.7812 0.1783,-0.4659 0.3853,-0.6536 0.4687,-0.6875 0.083,-0.034 0.3598,-0.021 0.8126,0.1875 0.4528,0.2089 0.993,0.5708 1.5,1 1.0138,0.8584 1.8437,1.8437 1.8437,1.8437 a 1.0856908,1.0856908 0 0 0 1.4063,0.2188 c 2.6992,-1.7119 5.006,-3.9791 6.75,-6.6563 a 1.0856908,1.0856908 0 0 0 -0.1876,-1.4375 c 0,0 -0.9664,-0.8189 -1.8124,-1.8437 -0.423,-0.5124 -0.828,-1.0758 -1.0313,-1.5313 -0.2033,-0.4555 -0.1915,-0.6981 -0.1563,-0.7812 0.035,-0.083 0.2194,-0.2961 0.6876,-0.4688 0.4682,-0.1726 1.1502,-0.2885 1.8124,-0.3437 1.3243,-0.1104 2.5938,0 2.5938,0 a 1.0856908,1.0856908 0 0 0 1.1562,-0.8438 c 0.1935,-0.865 0.3494,-1.7561 0.4376,-2.6562 l 41.1874,0 c 0.6903,0 1.2813,-0.591 1.2813,-1.2813 l 0,-57.31247 c 0,-0.69022 -0.5908,-1.28125 -1.2813,-1.28125 l -63.5624,0 z m 0.875,2.15625 61.7812,0 0,55.53122 -40.1875,0 c 0,-0.01 0,-0.021 0,-0.031 0,-1.5789 -0.155,-3.1064 -0.4687,-4.5937 a 1.0856908,1.0856908 0 0 0 -1.1563,-0.875 c 0,0 -1.27,0.095 -2.5937,-0.031 -0.6618,-0.063 -1.3151,-0.1967 -1.7813,-0.375 -0.4662,-0.1783 -0.6535,-0.354 -0.6875,-0.4375 -0.034,-0.084 -0.053,-0.3595 0.1562,-0.8125 0.2089,-0.453 0.602,-1.0241 1.0313,-1.5313 0.8586,-1.0144 1.8437,-1.8125 1.8437,-1.8125 a 1.0856908,1.0856908 0 0 0 0.2188,-1.4062 c -1.7121,-2.6992 -3.9796,-5.0062 -6.6562,-6.75 a 1.0856908,1.0856908 0 0 0 -1.4376,0.1875 c 0,0 -0.8189,0.9665 -1.8437,1.8125 -0.5124,0.423 -1.0759,0.8279 -1.5313,1.0312 -0.4556,0.2034 -0.7291,0.1913 -0.8124,0.1563 -0.083,-0.035 -0.2649,-0.2194 -0.4376,-0.6875 -0.1728,-0.4681 -0.2885,-1.1503 -0.3437,-1.8125 -0.1103,-1.3245 0,-2.59377 0,-2.59377 a 1.0856908,1.0856908 0 0 0 -0.8437,-1.15625 c -1.3725,-0.30711 -2.7949,-0.46068 -4.25,-0.5 l 0,-33.3125 z m 21.75,12.5625 c -0.7637,0 -1.4376,0.63089 -1.4376,1.40625 l 0,23.87497 c 0,0.7754 0.674,1.375 1.4376,1.375 l 2.75,0 0,2.375 c 0,0.7678 0.6384,1.4063 1.4062,1.4063 l 14.1875,0 c 0.7676,0 1.4063,-0.6385 1.4063,-1.4063 l 0,-23.87497 c 0,-0.76779 -0.6387,-1.40625 -1.4063,-1.40625 l -2.7813,0 0,-2.34375 c 0,-0.77536 -0.6426,-1.40625 -1.4062,-1.40625 l -14.1562,0 z m 0,1.34375 14.1562,0 c 0.054,0 0.062,0.0201 0.062,0.0625 l 0,2.34375 -10.0625,0 c -0.7768,0.0148 -1.3075,0.75438 -1.4062,1.40625 l 0,0.0312 0,20.15627 -2.75,0 c -0.055,0 -0.094,-0.02 -0.094,-0.062 l 0,-23.87502 c 0,-0.0426 0.039,-0.0625 0.094,-0.0625 z m 4.1562,3.75 14.1875,0 c 0.05,0 0.062,0.0122 0.062,0.0625 l 0,23.87497 c 0,0.05 -0.013,0.062 -0.062,0.062 l -14.1875,0 c -0.05,0 -0.062,-0.012 -0.062,-0.062 l 0,-2.375 0,-21.49997 c 0.01,-0.0415 0.03,-0.0595 0.062,-0.0625 z m -26.5312,17.78127 c 1.2228,0 2.4011,0.1966 3.5624,0.4062 -0.029,0.5448 -0.1152,0.9058 -0.031,1.9063 0.065,0.779 0.2172,1.6081 0.5,2.375 0.2828,0.7668 0.7336,1.5619 1.625,1.9375 0.8913,0.3756 1.7849,0.1456 2.5312,-0.1875 0.7463,-0.3331 1.4285,-0.8149 2.0313,-1.3125 0.777,-0.6414 1.0061,-0.9432 1.375,-1.3438 1.8765,1.3392 3.4941,2.983 4.8125,4.875 -0.4051,0.364 -0.693,0.6059 -1.3438,1.375 -0.5052,0.5967 -1.0014,1.2578 -1.3437,2 -0.3423,0.7423 -0.5523,1.6354 -0.1875,2.5313 0.3649,0.896 1.1427,1.3642 1.9062,1.6562 0.7636,0.2921 1.5966,0.4257 2.375,0.5 0.9998,0.095 1.3611,0.054 1.9063,0.031 0.1817,1.085 0.3437,2.1751 0.3437,3.3125 0,1.2228 -0.1966,2.4011 -0.4062,3.5625 -0.5448,-0.029 -0.9056,-0.083 -1.9062,0 -0.779,0.065 -1.608,0.186 -2.375,0.4688 -0.7669,0.2828 -1.5619,0.7649 -1.9376,1.6562 -0.3757,0.8913 -0.1456,1.785 0.1876,2.5313 0.3333,0.7463 0.8149,1.3972 1.3124,2 0.6414,0.7769 0.9432,1.0061 1.3438,1.375 -1.3445,1.8847 -3.0036,3.5219 -4.9062,4.8437 -0.3638,-0.405 -0.5751,-0.7241 -1.3438,-1.375 -0.5964,-0.505 -1.258,-1.0014 -2,-1.3437 -0.742,-0.3423 -1.6353,-0.5521 -2.5312,-0.1875 -0.8959,0.3646 -1.3642,1.1429 -1.6563,1.9062 -0.2921,0.7633 -0.4257,1.5969 -0.5,2.375 -0.095,0.9994 -0.053,1.3612 -0.031,1.9063 -1.0854,0.1825 -2.1749,0.3437 -3.3124,0.3437 -1.2219,0 -2.4005,-0.1958 -3.5626,-0.4062 0.029,-0.5448 0.083,-0.9058 0,-1.9063 -0.065,-0.779 -0.1859,-1.5769 -0.4687,-2.3437 -0.2828,-0.7669 -0.7649,-1.5619 -1.6563,-1.9375 -0.8913,-0.3756 -1.7849,-0.1769 -2.5312,0.1562 -0.7463,0.3332 -1.3972,0.8149 -2,1.3125 -0.777,0.6414 -1.0061,0.9432 -1.375,1.3438 -1.8781,-1.3396 -3.5247,-2.9817 -4.8438,-4.875 0.405,-0.364 0.7239,-0.5747 1.375,-1.3438 0.5051,-0.5967 1.0015,-1.289 1.3438,-2.0312 0.3423,-0.7423 0.5522,-1.6354 0.1875,-2.5313 -0.3649,-0.896 -1.1429,-1.3641 -1.9063,-1.6562 -0.7635,-0.2921 -1.5967,-0.4257 -2.375,-0.5 -0.9999,-0.095 -1.3609,-0.054 -1.9062,-0.031 -0.1817,-1.0844 -0.3438,-2.1751 -0.3438,-3.3125 0,-1.2228 0.1966,-2.4005 0.4063,-3.5625 0.5485,0.028 0.8909,0.082 1.875,0 0.7791,-0.065 1.6082,-0.1859 2.375,-0.4688 0.7668,-0.2828 1.5619,-0.7336 1.9375,-1.625 0.3756,-0.8913 0.1771,-1.8162 -0.1562,-2.5625 -0.3332,-0.7463 -0.8151,-1.3972 -1.3126,-2 -0.6414,-0.7769 -0.9431,-1.0061 -1.3437,-1.375 1.344,-1.8838 3.0053,-3.491 4.9063,-4.8125 0.368,0.4082 0.5614,0.7078 1.3124,1.3438 0.5962,0.505 1.2894,1.0014 2.0313,1.3437 0.7419,0.3424 1.6357,0.5521 2.5313,0.1875 0.8959,-0.3646 1.3641,-1.1429 1.6562,-1.9062 0.2921,-0.7633 0.4257,-1.5968 0.5,-2.375 0.095,-0.9994 0.053,-1.3612 0.031,-1.9063 1.0849,-0.1817 2.1742,-0.3437 3.3126,-0.3437 z m 0,7.4687 c -6.9419,0 -12.5938,5.652 -12.5938,12.5938 0,6.9418 5.652,12.5937 12.5938,12.5937 6.9418,0 12.5937,-5.6519 12.5937,-12.5937 0,-6.9418 -5.6519,-12.5938 -12.5937,-12.5938 z m 0,2.0938 c 5.8216,0 10.5312,4.6783 10.5312,10.5 0,5.8217 -4.7095,10.5312 -10.5312,10.5312 -5.8217,0 -10.5313,-4.7095 -10.5313,-10.5312 0,-5.8217 4.7096,-10.5 10.5313,-10.5 z m 0,0.9375 c -5.2698,0 -9.5626,4.2928 -9.5626,9.5625 0,5.2696 4.2929,9.5625 9.5626,9.5625 5.2697,0 9.5624,-4.2929 9.5624,-9.5625 0,-5.2697 -4.2928,-9.5625 -9.5624,-9.5625 z m 0,2.1875 c 4.0961,0 7.375,3.2787 7.375,7.375 0,4.0963 -3.2789,7.4062 -7.375,7.4062 -4.0962,0 -7.4063,-3.3099 -7.4063,-7.4062 0,-4.0963 3.3101,-7.375 7.4063,-7.375 z",stroke:"none",visibility:"visible",display:"inline",overflow:"visible"})));case mn.PICTURE:return r.a.createElement(fn,Object.assign({},t,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128",x:"0px",y:"0px"}),r.a.createElement("path",{d:"M32.9248,22.40308,12.60236,28.44641a3.99982,3.99982,0,0,0-2.69366,4.97491l9.86859,33.16,2.08661-7.0116L13.74249,32.2804l17.81982-5.29907Z"}),r.a.createElement("path",{d:"M15.6322,80.50946l2.08673-7.01166L3.86078,26.93213l30.40717-9.0423,1.36249-4.57819L2.72058,23.09814A3.99985,3.99985,0,0,0,.02692,28.073Z"}),r.a.createElement("path",{d:"M81.57129,6.01044,86.1499,7.372,84.80713,2.86A3.99571,3.99571,0,0,0,79.83313.167L70.87708,2.83026l7.01648,2.08649L80.97327,4.001Z"}),r.a.createElement("path",{d:"M127.37823,25.02759a3.99987,3.99987,0,0,0-2.37732-1.92944L47.88843.167A3.99571,3.99571,0,0,0,42.91443,2.86L14.02692,99.92694a3.99995,3.99995,0,0,0,2.69366,4.97491L93.83313,127.833a3.99571,3.99571,0,0,0,4.974-2.69305l28.88745-97.067A3.99971,3.99971,0,0,0,127.37823,25.02759ZM94.97327,123.999,17.86078,101.06787,46.74829,4.001l77.11249,22.93115Z"}),r.a.createElement("path",{d:"M51.02631,38.49487l3.487,2.00531a.72828.72828,0,0,1,.09454,1.19574l-3.21429,2.61487a.72738.72738,0,0,0,.44629,1.29248.80448.80448,0,0,0,.09344-.00555l3.9884-.47113a.74674.74674,0,0,1,.08746-.00519.72574.72574,0,0,1,.6936.92535l-1.11017,3.91309a.72729.72729,0,0,0,.702.92865.70909.70909,0,0,0,.48157-.19189l3.03723-2.75549a.7234.7234,0,0,1,1.1676.28882l1.37006,3.77167a.70716.70716,0,0,0,.67786.47729.7155.7155,0,0,0,.71112-.568l.91724-4.05908a.72758.72758,0,0,1,.71039-.56848.71648.71648,0,0,1,.3938.11829l3.39337,2.21765a.71673.71673,0,0,0,.39514.12152.73153.73153,0,0,0,.66827-1.01923l-1.61859-3.78064a.72872.72872,0,0,1,.62311-1.0141l4.12744-.25647a.72827.72827,0,0,0,.3183-1.35712l-3.487-2.00531a.72828.72828,0,0,1-.09454-1.19574l3.21429-2.61487a.72743.72743,0,0,0-.44635-1.29254.79022.79022,0,0,0-.09338.00555l-3.9884.47119a.74674.74674,0,0,1-.08746.00519.72569.72569,0,0,1-.6936-.92535l1.11017-3.91309a.72732.72732,0,0,0-.70209-.92871.70919.70919,0,0,0-.48157.19189L64.88141,32.867a.72338.72338,0,0,1-1.1676-.28888l-1.37012-3.77161a.70714.70714,0,0,0-.6778-.47736.71545.71545,0,0,0-.71112.56805l-.91724,4.059a.72753.72753,0,0,1-.71039.56848.716.716,0,0,1-.3938-.11829L55.54,31.18878a.7171.7171,0,0,0-.39508-.12146.73149.73149,0,0,0-.66833,1.01917l1.61859,3.7807a.72866.72866,0,0,1-.62311,1.014l-4.1275.25647A.72831.72831,0,0,0,51.02631,38.49487Zm8.42474.13977a4.7182,4.7182,0,0,0,.5119-1.15179,4.70127,4.70127,0,0,0,2.27509-.9516,4.70906,4.70906,0,0,0,2.158.52441l.05878-.00037a4.67384,4.67384,0,0,0,1.44971,1.72107,4.7348,4.7348,0,0,0,.158,2.40314,4.719,4.719,0,0,0-1.33057,2.14575,4.7009,4.7009,0,0,0-2.27515.9516,4.7107,4.7107,0,0,0-2.15729-.52441h-.00073l-.05865.00037a4.67252,4.67252,0,0,0-1.44977-1.72107,4.73352,4.73352,0,0,0-.1579-2.4032A4.717,4.717,0,0,0,59.451,38.63464Z"}),r.a.createElement("path",{d:"M28.18994,84.30115a4.00008,4.00008,0,0,0,2.37738,1.9295L92.44769,104.6322a3.99571,3.99571,0,0,0,4.974-2.69305l20.39117-68.51782a3.99995,3.99995,0,0,0-2.69366-4.97491L53.23883,10.04486a3.99571,3.99571,0,0,0-4.974,2.69305L27.87366,81.25574A3.99964,3.99964,0,0,0,28.18994,84.30115Zm23.90869-70.4223L113.97906,32.2804,99.66095,80.39172l-.97736-2.95447a2.0002,2.0002,0,0,0-2.92969-1.08594L92.3,78.4295l-6.0647-31.91266a2.00047,2.00047,0,0,0-3.26465-1.1474l-22.063,18.86493-2.68848-3.58685a1.99812,1.99812,0,0,0-2.79687-.40332L48.93811,65.085l-3.22229-5.76855a1.99988,1.99988,0,0,0-2.76074-.748l-5.039,2.96631ZM36.24121,67.16248l6.98-4.10876,3.33691,5.97351c.01123.02.0285.03387.04028.05341a1.04005,1.04005,0,0,0,.24933.33075c.023.02466.04382.05084.06787.07416a1.97855,1.97855,0,0,0,.84357.486c.02435.0069.04852.0119.07312.01788a1.99365,1.99365,0,0,0,.43652.05731c.01263.00024.02472.00488.03735.00488l.0177-.0022a1.97488,1.97488,0,0,0,.91565-.23578c.01294-.0069.027-.00873.03979-.01593.03009-.01678.054-.03979.08282-.05792.04547-.02863.09363-.04993.13739-.0827l6.71582-5.01355,2.65942,3.548,3.63745,7.39325a2.00006,2.00006,0,1,0,3.58936-1.76562l-3.03485-6.16754,19.88251-17.001,5.69714,29.97729L77.2793,87.46741a2.00018,2.00018,0,0,0,2.0625,3.42767l16.33008-9.826,1.7998,5.43842a1.98012,1.98012,0,0,0,.23132.46332l-4.11511,13.82745L31.70746,82.39667Z"}));default:return r.a.createElement("h3",null,"Icon Not Found")}};pn.defaultProps={move:!0,pointer:!1,color:"inherit",style:{width:30}};var hn=pn;function vn(){var n=Object(i.a)(["\n      ",";\n    "]);return vn=function(){return n},n}function En(){var n=Object(i.a)(["\n  /* Medium devices (landscape tablets, 768px and up) */\n  @media only screen and (min-width: 992px) {\n    ",";\n  }\n"]);return En=function(){return n},n}function gn(){var n=Object(i.a)(["\n      ",";\n    "]);return gn=function(){return n},n}function bn(){var n=Object(i.a)(["\n  /* Extra small devices (phones, 600px and down) */\n  @media only screen and (max-width: 600px) {\n    ",";\n  }\n"]);return bn=function(){return n},n}var On,xn=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return Object(u.c)(bn(),Object(u.c)(gn(),e))};function yn(){var n=Object(i.a)(["\n    display: none;\n  "]);return yn=function(){return n},n}function jn(){var n=Object(i.a)(["\n  ",";\n"]);return jn=function(){return n},n}function Rn(){var n=Object(i.a)(["\n  &:hover {\n    transform: translateY(2px);\n  }\n  border-radius: 5px;\n  transition: 0.25s all;\n  position: relative;\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  padding: 1rem;\n  color: ","\n  background-color: #fff;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n  margin: 0 10px;\n  cursor: pointer;\n\n  &."," {\n    & "," {\n      & > svg {\n        fill: #fff;\n      }\n    }\n    background-color: ",";\n    color: #fff;\n  }\n"]);return Rn=function(){return n},n}function wn(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return wn=function(){return n},n}function Tn(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n"]);return Tn=function(){return n},n}!function(n){n.TYPOGRAPHY="/typography",n.REDUX="/redux",n.PICTURES="/pictures"}(On||(On={}));var An=u.d.div(Tn()),Ln=u.d.div(wn()),Pn=Object(u.d)(x.b)(Rn(),s.PRIMARY,function(n){return n.activeClassName},Ln,s.PRIMARY),kn=u.d.small(jn(),xn(yn()));Pn.defaultProps={activeClassName:"active"};var In=function(){return r.a.createElement(An,null,r.a.createElement(Pn,{to:String(On.TYPOGRAPHY)},r.a.createElement(Ln,null,r.a.createElement(hn,{name:mn.TYPOGRAPHY,color:s.PRIMARY}),r.a.createElement(kn,null,"Typography"))),r.a.createElement(Pn,{to:String(On.REDUX)},r.a.createElement(Ln,null,r.a.createElement(hn,{name:mn.REDUX,color:s.PRIMARY}),r.a.createElement(kn,null,"Redux"))),r.a.createElement(Pn,{to:String(On.PICTURES)},r.a.createElement(Ln,null,r.a.createElement(hn,{name:mn.PICTURE,color:s.PRIMARY}),r.a.createElement(kn,null,"Pictures"))))};function Yn(){var n=Object(i.a)([""]);return Yn=function(){return n},n}var Hn=u.d.div(Yn()),Sn=function(n){function e(){var n,t;Object(j.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(w.a)(this,(n=Object(T.a)(e)).call.apply(n,[this].concat(r)))).state={},t}return Object(A.a)(e,n),Object(R.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(Hn,null,r.a.createElement("h2",null,"Render images with custom React Components:)"),r.a.createElement(O,{source:"lion.jpg",assetType:h.IMAGE,style:{width:"100%",borderRadius:5}}))}}]),e}(a.Component);function Cn(){var n=Object(i.a)(["\n   width: 550px;\n  "]);return Cn=function(){return n},n}function Dn(){var n=Object(i.a)(["\n   width: 260px;\n   "]);return Dn=function(){return n},n}function Mn(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 2em 0;\n  min-height: 300px;\n  border: 1px solid ",";\n  border-radius: 5px;\n  width: 500px;\n  padding: 2rem;\n\n  ",";\n  ",";\n"]);return Mn=function(){return n},n}function _n(){var n=Object(i.a)([""]);return _n=function(){return n},n}var Gn=u.d.div(_n()),zn=u.d.div(Mn(),m._200,xn(Dn()),function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return Object(u.c)(En(),Object(u.c)(vn(),e))}(Cn())),Un=function(){return r.a.createElement(Gn,null,r.a.createElement(x.a,null,r.a.createElement(In,null),r.a.createElement(zn,null,r.a.createElement(y.d,null,r.a.createElement(y.b,{component:C,path:String(On.TYPOGRAPHY),exact:!0}),r.a.createElement(y.b,{component:dn,path:String(On.REDUX),exact:!0}),r.a.createElement(y.b,{component:Sn,path:String(On.PICTURES),exact:!0}),r.a.createElement(y.b,{exact:!0,path:"*",render:function(){return r.a.createElement(y.a,{to:"/".concat("/typography")})}})))))};function Nn(){var n=Object(i.a)(["\n 0% {\n    transform: translateY(-500px);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n  38% {\n    transform: translateY(0);\n    animation-timing-function: ease-out;\n    opacity: 1;\n  }\n  55% {\n    transform: translateY(-65px);\n    animation-timing-function: ease-in;\n  }\n  72% {\n    transform: translateY(0);\n    animation-timing-function: ease-out;\n  }\n  81% {\n    transform: translateY(-28px);\n    animation-timing-function: ease-in;\n  }\n  90% {\n    transform: translateY(0);\n    animation-timing-function: ease-out;\n  }\n  95% {\n    transform: translateY(-8px);\n    animation-timing-function: ease-in;\n  }\n  100% {\n    transform: translateY(0);\n    animation-timing-function: ease-out;\n  }\n"]);return Nn=function(){return n},n}var Fn=Object(u.e)(Nn());function Bn(){var n=Object(i.a)(["\n  max-width: 100%;\n  height: auto;\n  width: 40px;\n  filter: grayscale(1);\n"]);return Bn=function(){return n},n}function Zn(){var n=Object(i.a)(["\n  color: ",";\n  font-weight: 100;\n  font-size: calc(18px + 2vmin);\n"]);return Zn=function(){return n},n}function Wn(){var n=Object(i.a)(["\n  margin-top: 2em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Wn=function(){return n},n}function Xn(){var n=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  min-height: 100vh;\n  animation: "," 1s both;\n"]);return Xn=function(){return n},n}var Kn=u.d.div(Xn(),Fn),Jn=u.d.header(Wn()),Vn=u.d.h1(Zn(),s.PRIMARY),$n=Object(u.d)(O)(Bn()),qn=function(){return r.a.createElement(Kn,null,r.a.createElement(Jn,null,r.a.createElement($n,{source:"/logo.png",assetType:h.LOGO}),r.a.createElement(Vn,null,"Have fun with React :-)")),r.a.createElement(Un,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Qn=t(10),ne=t(39),ee=t(40),te=t(23),ae={todos:[],loading:!1},re=function(){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case I.LOADING_TODOS:return Object(te.a)({},n,{loading:e.loading});case I.FETCHED_TODOS:return console.log("ajisfjoa"),Object(te.a)({},n,{todos:e.todos,loading:e.loading});case I.ERROR_TODOS:return Object(te.a)({},n,{error:e.error,loading:e.loading});default:return n}}},ce=Object(Qn.combineReducers)({todos:re()}),oe=Object(Qn.createStore)(ce,Object(ee.composeWithDevTools)(Object(Qn.applyMiddleware)(ne.a)));o.a.render(r.a.createElement(function(){return r.a.createElement(a.Fragment,null,r.a.createElement(u.a,{theme:p},r.a.createElement(v,null)),r.a.createElement(l.a,{store:oe},r.a.createElement(qn,null)))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.beba1ecf.chunk.js.map