"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[959],{713:function(e,r,n){n.d(r,{Bt:function(){return l},Hq:function(){return d},LC:function(){return u},Mc:function(){return o},Q2:function(){return c}});var t=n(861),a=n(757),i=n.n(a),s=n(294);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDliZTVjNjAxNDI4YTU0MjQzOTk3MDkzMzhmNjM0YiIsInN1YiI6IjY1OTkyMDg1N2Q1NTA0MDBmMTgxNmIzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jXzzT6z1lvrxxvZ43z_edMdVsZdaEliii-de-g5eINI";var c=function(){var e=(0,t.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/all/day");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(i().mark((function e(r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(r));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(i().mark((function e(r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(r,"/credits"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(i().mark((function e(r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(r,"/reviews"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(i().mark((function e(r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?query=".concat(r));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},639:function(e,r,n){n.d(r,{a:function(){return s}});var t=n(154),a="Loader_loader__+lRPl",i=n(184),s=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.Ll,{height:"80",width:"80",color:"#3f51b5",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:a,visible:!0})})}},959:function(e,r,n){n.r(r),n.d(r,{default:function(){return v}});var t=n(861),a=n(439),i=n(757),s=n.n(i),c=n(689),o=n(713),u=n(791),l=n(87),d={wrap:"MovieInfo_wrap__gdnB2",movie_wrap:"MovieInfo_movie_wrap__Yg7Zn",go_back:"MovieInfo_go_back__z5sng"},p=n(184),f=function(e){var r,n,t=e.info,a=t.title,i=t.poster_path,s=t.release_date,o=t.vote_average,f=t.overview,h=t.genres,v=(0,c.TH)(),x=(0,u.useRef)(null!==(r=null===(n=v.state)||void 0===n?void 0:n.from)&&void 0!==r?r:"/"),m=h.map((function(e){return e.name})).join(" ");return(0,p.jsxs)("div",{className:d.wrap,children:[(0,p.jsx)(l.OL,{to:x.current,className:d.go_back,children:"Go back"}),(0,p.jsxs)("div",{className:d.movie_wrap,children:[(0,p.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w500/".concat(i):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:"poster",width:400,height:550}),(0,p.jsxs)("div",{className:d.info_wrap,children:[(0,p.jsxs)("h2",{children:[a," (",s.slice(0,4),")"]}),(0,p.jsxs)("p",{children:["User score: ",(10*o).toFixed(0),"%"]}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:f}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("p",{children:m})]})]}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("h3",{children:"Additional information"}),(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{to:"reviews",children:"Reviews"})})]}),(0,p.jsx)(u.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading..."}),children:(0,p.jsx)(c.j3,{})})]})},h=n(639),v=function(){var e=(0,u.useState)(),r=(0,a.Z)(e,2),n=r[0],i=r[1],l=(0,c.UO)().movieId,d=(0,u.useState)(!1),v=(0,a.Z)(d,2),x=v[0],m=v[1],j=(0,u.useState)(!1),w=(0,a.Z)(j,2),g=w[0],_=w[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),e.next=4,(0,o.Mc)(l);case 4:r=e.sent,i(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),m(!0);case 11:return e.prev=11,_(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[l]),(0,p.jsxs)(p.Fragment,{children:[g&&(0,p.jsx)(h.a,{}),x&&(0,p.jsx)("h2",{children:"Something went wrong"}),n&&(0,p.jsx)(f,{info:n})]})}}}]);
//# sourceMappingURL=959.c95e7f0c.chunk.js.map