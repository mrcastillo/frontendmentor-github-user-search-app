(this["webpackJsonpfrontendmentor-github-user-search-app"]=this["webpackJsonpfrontendmentor-github-user-search-app"]||[]).push([[0],{23:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),i=a(17),r=a.n(i),l=(a(23),a(3)),o=a.p+"static/media/icon-moon.cce754ce.svg",n=a.p+"static/media/icon-sun.f28a8996.svg",p=a(0);var j=function(){var e=Object(c.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches),t=Object(l.a)(e,2),a=t[0],s=t[1],i=document.querySelector("html");return Object(p.jsx)("div",{className:"app-menu-container",children:Object(p.jsxs)("div",{className:"app-menu",children:[Object(p.jsx)("div",{className:"app-menu-brand",children:Object(p.jsx)("h1",{children:"devfinder"})}),Object(p.jsxs)("div",{onClick:function(e){e.preventDefault(),"dark-theme"===i.className?(i.className="light-theme",s(!1)):(i.className="dark-theme",s(!0))},className:"app-menu-theme-selector",children:[Object(p.jsx)("p",{children:a?"LIGHT":"DARK"}),Object(p.jsx)("div",{className:"app-menu-selector",children:Object(p.jsx)("img",{src:a?n:o,alt:"color-theme-icon"})})]})]})})},d=a.p+"static/media/icon-search.0cc0c984.svg",b=a(5),h=function(e,t){switch(t.type){case"GET_PROFILE":var a=t.userProfile.data;return Object(b.a)(Object(b.a)({},a),{},{state:e,error:!1});case"DEFAULT_PROFILE":return console.log(e,"Defualt profile"),t.octocat;case"NO_PROFILE":return Object(b.a)(Object(b.a)({},e),{},{error:!0})}},u=a(4),m=a.n(u),O=a(8),f=a(18),v=a.n(f),x={login:"octocat",id:583231,node_id:"MDQ6VXNlcjU4MzIzMQ==",avatar_url:a.p+"static/media/icon-avatar.a0975fa3.svg",gravatar_id:"",url:"https://api.github.com/users/octocat",html_url:"https://github.com/octocat",followers_url:"https://api.github.com/users/octocat/followers",following_url:"https://api.github.com/users/octocat/following{/other_user}",gists_url:"https://api.github.com/users/octocat/gists{/gist_id}",starred_url:"https://api.github.com/users/octocat/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/octocat/subscriptions",organizations_url:"https://api.github.com/users/octocat/orgs",repos_url:"https://api.github.com/users/octocat/repos",events_url:"https://api.github.com/users/octocat/events{/privacy}",received_events_url:"https://api.github.com/users/octocat/received_events",type:"User",site_admin:!1,name:"The Octocat",company:"@github",blog:"https://github.blog",location:"San Francisco",email:null,hireable:null,bio:null,twitter_username:null,public_repos:8,public_gists:8,followers:4004,following:9,created_at:"2011-01-25T18:44:36Z",updated_at:"2021-08-23T14:28:41Z",error:!1},g=function(){var e=Object(O.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"DEFAULT_PROFILE",octocat:x});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(O.a)(m.a.mark((function e(t,a){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v()("https://api.github.com/users/".concat(a));case 3:c=e.sent,t({type:"GET_PROFILE",userProfile:c}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"NO_PROFILE"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),w=Object(c.createContext)(),_=function(e){var t=Object(c.useReducer)(h,{}),a=Object(l.a)(t,2),s=a[0],i=a[1];return Object(c.useEffect)((function(){g(i)}),[]),Object(p.jsx)(w.Provider,{value:{profile:s,dispatch:i},children:e.children})};var y=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],i=Object(c.useContext)(w),r=i.profile,o=i.dispatch;return Object(p.jsx)("div",{className:"app-search-container",children:Object(p.jsx)("div",{className:"app-search",children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("I just got clicked!"),N(o,a)},children:[Object(p.jsx)("div",{className:"app-search-glass",children:Object(p.jsx)("img",{src:d,alt:"search icon"})}),Object(p.jsxs)("div",{className:"app-search-text",children:[Object(p.jsx)("input",{value:a,onChange:function(e){var t=e.target.value;s(t)},placeholder:"Search Github username...",type:"text",id:"search",name:"n-search"}),Object(p.jsx)("div",{id:"search-err",style:{visibility:r.error?"visible":"hidden",display:r.error?"initial":"none"},children:Object(p.jsx)("p",{children:"No Results"})})]}),Object(p.jsx)("div",{className:"app-search-button",children:Object(p.jsx)("button",{type:"submit",children:"Search"})})]})})})},F=a.p+"static/media/icon-location.f11c5487.svg",D=a.p+"static/media/icon-website.b7923f6c.svg",T=a.p+"static/media/icon-twitter.f6a2a695.svg",k=a.p+"static/media/icon-company.6f78ffb3.svg";var E=function(){var e=Object(c.useContext)(w).profile,t=new Date(e.created_at),a=new Date(e.updated_at),s=["Jan","Feb","Mar","Apr","May","June","July","August","September","October","November","December"];return Object(p.jsx)("div",{className:"app-profile-container",children:Object(p.jsxs)("div",{className:"app-profile-wrapper",children:[Object(p.jsx)("div",{className:"app-profile-info-avatar-lg",children:Object(p.jsx)("img",{src:e.avatar_url,alt:"profile avatar"})}),Object(p.jsxs)("div",{className:"app-profile-info-lg",children:[Object(p.jsxs)("div",{className:"app-profile-info",children:[Object(p.jsx)("div",{className:"app-profile-info-avatar",children:Object(p.jsx)("img",{src:e.avatar_url,alt:"profile avatar"})}),Object(p.jsxs)("div",{className:"app-profile-info-text",children:[Object(p.jsx)("h3",{id:"name",children:e.name}),Object(p.jsxs)("a",{href:"/",id:"login",children:["@",e.login]}),Object(p.jsxs)("p",{id:"joined",children:["Joined ",t.getDate()," ",s[t.getMonth()]," ",t.getFullYear()]})]})]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"app-profile-lorem-ipsum",children:Object(p.jsxs)("p",{children:[e.name?e.name:"This"," is a Github User with the login name ",Object(p.jsx)("span",{className:"highlight",children:e.login}),". The user has created ",Object(p.jsx)("span",{className:"highlight",children:e.public_repos})," public repos, and has ",Object(p.jsx)("span",{className:"highlight",children:e.followers})," profile followers. Their last update was at ",Object(p.jsxs)("span",{className:"highlight",children:[s[a.getMonth()],", ",a.getDate(),"  ",a.getFullYear()," at ",a.getHours(),":",a.getMinutes()]})," military time."]})}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:"app-profile-stats-wrapper",children:[Object(p.jsxs)("div",{className:"app-profile-stat",children:[Object(p.jsx)("p",{children:"Repos"}),Object(p.jsx)("p",{children:e.public_repos})]}),Object(p.jsxs)("div",{className:"app-profile-stat app-profile-stat-mid",children:[Object(p.jsx)("p",{children:"Followers"}),Object(p.jsx)("p",{children:e.followers})]}),Object(p.jsxs)("div",{className:"app-profile-stat",children:[Object(p.jsx)("p",{children:"Following"}),Object(p.jsx)("p",{children:e.following})]})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:"app-profile-social-wrapper",children:[Object(p.jsxs)("div",{id:"profile-location-wrapper",className:"app-profile-social ".concat(e.location?"":"app-profile-social-not-available"),children:[Object(p.jsx)("div",{className:"app-profile-social-img",children:Object(p.jsx)("img",{src:F,alt:"location-icon"})}),Object(p.jsx)("div",{className:"app-profile-social-text",children:Object(p.jsx)("p",{children:e.location?e.location:"Not Available"})})]}),Object(p.jsxs)("div",{id:"profile-blog-wrapper",className:"app-profile-social ".concat(e.blog?"":"app-profile-social-not-available"),children:[Object(p.jsx)("div",{className:"app-profile-social-img",children:Object(p.jsx)("img",{src:D,alt:"social-icon"})}),Object(p.jsx)("div",{className:"app-profile-social-text",children:Object(p.jsx)("p",{children:e.blog?e.blog:"Not Available"})})]}),Object(p.jsxs)("div",{id:"profile-twitter-wrapper",className:"app-profile-social ".concat(e.twitter_username?"":"app-profile-social-not-available"),children:[Object(p.jsx)("div",{className:"app-profile-social-img",children:Object(p.jsx)("img",{src:T,alt:"twitter-icon"})}),Object(p.jsx)("div",{className:"app-profile-social-text",children:Object(p.jsx)("p",{children:e.twitter_username?e.twitter_username:"Not Available"})})]}),Object(p.jsxs)("div",{id:"profile-company-wrapper",className:"app-profile-social ".concat(e.company?"":"app-profile-social-not-available"),children:[Object(p.jsx)("div",{className:"app-profile-social-img",children:Object(p.jsx)("img",{src:k,alt:"profile-icon"})}),Object(p.jsx)("div",{className:"app-profile-social-text",children:Object(p.jsx)("p",{children:e.company?e.company:"Not Available"})})]})]})]})]})})};var S=function(){var e=Object(c.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches);return document.querySelector("html").setAttribute("class","".concat(e?"dark-theme":"light-theme")),Object(p.jsx)(_,{children:Object(p.jsxs)("div",{className:"app-container",children:[Object(p.jsx)(j,{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(y,{}),Object(p.jsx)("br",{}),Object(p.jsx)(E,{})]})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root")),I()}},[[45,1,2]]]);
//# sourceMappingURL=main.578efa3f.chunk.js.map