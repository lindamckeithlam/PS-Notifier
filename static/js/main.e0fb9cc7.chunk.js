(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,n){},153:function(e,t,n){},163:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=n(71),s=n(26),l=n(72),u=n(41),p=n.n(u),f=n(54),h=n.n(f),d=n(73),m=n(74),b=n.n(m),v=n(75),g=n.n(v),O="SET_NOTIFICATIONS",w="LAST_CHANGELOG_DATE";var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(l.a)({},e,{notifications:t.value});default:return e}},E=n(76),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(s.createStore)(j,e,Object(E.composeWithDevTools)(Object(s.applyMiddleware)(i.a)))},k=(n(149),n(27)),N=n(16),C=n(33),S=n(28),A=n(32),x=n(31),I=(n(153),n(35)),T=n(6),G=n(187),W=n(188),_=n(193),D=n(189),M=n(190),P=n(191),B=n(192),J=n(78),L=function(e){function t(){return Object(k.a)(this,t),Object(C.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(B.a,{anchor:"right",open:this.props.open,onClose:this.props.onClose},r.a.createElement("div",{className:e.root},r.a.createElement(J.a,{id:"11af66c06ead3f46d205bd432aab0358"})))}}]),t}(r.a.Component),q=Object(T.a)(function(e){return{root:{width:"50vw"}}})(L),F=function(e){function t(){var e,n;Object(k.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(C.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).state={drawerOpen:!1},n}return Object(A.a)(t,e),Object(N.a)(t,[{key:"clearNotifications",value:function(){this.props.clearNotifications()}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.grow},r.a.createElement(G.a,{position:"static"},r.a.createElement(W.a,null,r.a.createElement(D.a,{className:t.title,variant:"h6",noWrap:!0},"PS-Notifier"),r.a.createElement("div",{className:t.grow}),r.a.createElement("div",{className:t.notificationSection},r.a.createElement(_.a,{edge:"end","aria-haspopup":"true",onClick:function(){return e.setState({drawerOpen:!0})},color:"inherit"},r.a.createElement(M.a,{badgeContent:this.props.notifications,color:"secondary"},r.a.createElement(P.a,{alt:"Profile Picture",src:"https://avatars3.githubusercontent.com/u/35122889?s=400&v=4"})))))),r.a.createElement(q,{open:this.state.drawerOpen,onClose:function(){e.props.clearNotifications(),e.setState({drawerOpen:!1})}}))}}]),t}(r.a.Component),H=Object(x.b)(function(e){return{notifications:e.notifications}},function(e){return{clearNotifications:function(){return e(function(e){return e({type:O,value:0})})}}})(Object(T.a)(function(e){return{grow:{flexGrow:1},title:Object(I.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),notificationSection:Object(I.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"})}})(F)),$=function(e){function t(){return Object(k.a)(this,t),Object(C.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchChangelog()}},{key:"render",value:function(){return r.a.createElement(x.a,{store:this.props.store},r.a.createElement("div",{className:"App"},r.a.createElement(H,null),r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:"https://images.vectorhq.com/images/previews/634/kung-fu-panda-psd-435887.png",className:"App-logo",alt:"logo"}),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"See More on Github"))))}}]),t}(r.a.Component),z=Object(x.b)(null,function(e){return{fetchChangelog:function(){return e(function(){var e=Object(d.a)(h.a.mark(function e(t,n){var a,r,o,c,i;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.github.com/gists/11af66c06ead3f46d205bd432aab0358");case 3:a=e.sent,r=g()(a,"data.files['ps-notifier-changelog.md'].content",""),o=r.match(/\d{4}-\d{2}-\d{2}/g),c=localStorage.getItem(w),i=c?o.indexOf(c):o.length,t({type:O,value:i}),n=o[0],localStorage.setItem(w,n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}var n},e,null,[[0,12]])}));return function(t,n){return e.apply(this,arguments)}}())}}})($);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=y(p.a);c.a.render(r.a.createElement(z,{store:K}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},41:function(e,t){e.exports={notifications:0}},84:function(e,t,n){e.exports=n(163)}},[[84,1,2]]]);
//# sourceMappingURL=main.e0fb9cc7.chunk.js.map