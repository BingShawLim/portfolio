(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/1me.c531bf7a.JPG"},41:function(e,t,a){e.exports=a.p+"static/media/picpicland.89eef03d.JPG"},42:function(e,t,a){e.exports=a.p+"static/media/memoritor.7b6129e2.JPG"},43:function(e,t,a){e.exports=a.p+"static/media/writeMEN.7ce10e40.jpeg"},44:function(e,t,a){e.exports=a.p+"static/media/mello.617af4ba.JPG"},45:function(e,t,a){e.exports=a.p+"static/media/nomster.35ef7448.JPG"},46:function(e,t,a){e.exports=a.p+"static/media/kidultv.b8660d66.JPG"},47:function(e,t,a){e.exports=a.p+"static/media/reactnote.2bde2460.JPG"},48:function(e,t,a){e.exports=a.p+"static/media/catchotday.2217102c.JPG"},49:function(e,t,a){e.exports=a.p+"static/media/whiteboard-hooks.34b59e42.jpeg"},50:function(e,t,a){e.exports=a.p+"static/media/todo-mongodb.2659c0d0.jpeg"},51:function(e,t,a){e.exports=a.p+"static/media/movieBookReact.c1db322a.jpeg"},56:function(e,t,a){e.exports=a(73)},61:function(e,t,a){},62:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(25),l=a.n(o),r=(a(61),a(6)),c=a(9),s=a(8),m=a(7),u=a(23),d=a(17),p=a(11),h=a(24),g=a(55),b=(a(62),a(63),a(13)),f=a(15);var k=function(){return n.a.createElement("footer",{className:"mt-5"},n.a.createElement(p.a,{fluid:!0},n.a.createElement(b.a,{className:"border-top justify-content-between p-3"},n.a.createElement(f.a,{className:"p-0",md:3,sm:12},"Bing Shaw Lim"),n.a.createElement(f.a,{className:"p-0 d-flex justify-content-end",md:3},"made by Bing with React."))))},E=a(40);var w=function(e){return n.a.createElement(E.a,{className:"bg-transparent jumbotron-fluid p-0"},n.a.createElement(p.a,{fluid:!0},n.a.createElement(b.a,{className:"justify-content-center py-3"},n.a.createElement(f.a,{md:8,sm:12},e.title&&n.a.createElement("h1",{className:"display-3 font-weight-bolder"},e.title),e.subTitle&&n.a.createElement("h3",{className:"font-weight-light"},e.subTitle),e.words&&n.a.createElement("h3",{className:"lead font-weight-light"},e.words)))))},v=a(20),S=a(36),y=a(32);var R=function(e){var t=Object(S.b)({opacity:1,from:{opacity:0}});return n.a.createElement(S.a.div,{className:"my-card-info",style:t},n.a.createElement("p",{className:"my-card-title"},e.title),n.a.createElement(y.a,{pill:!0,variant:"dark"},n.a.createElement("a",{href:e.gitLink,target:"-blank",rel:"noopener noreferrer",style:{color:"white"}},"Go to Repository")),n.a.createElement("p",{className:"my-card-sub-title"},e.subTitle),e.tools.map((function(e){return n.a.createElement(y.a,{style:{marginRight:"3px"},variant:"light"},e)})),n.a.createElement("br",null),n.a.createElement("a",{href:e.link,target:"-blank",rel:"noopener noreferrer"},"View Project"))};var T=function(e){return n.a.createElement("div",{className:"d-inline-block my-card",onClick:function(t){return e.click(e.item)}},n.a.createElement("img",{className:"my-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&n.a.createElement(R,{title:e.item.title,subTitle:e.item.subTitle,tools:e.item.tools,gitLink:e.item.gitLink,link:e.item.link}))},A=a(41),L=a.n(A),B=a(42),N=a.n(B),j=a(43),J=a.n(j),C=a(44),P=a.n(C),x=a(45),I=a.n(x),O=a(46),M=a.n(O),G=a(47),V=a.n(G),D=a(48),H=a.n(D),W=a(49),Y=a.n(W),U=a(50),F=a.n(U),K=a(51),Q=a.n(K),_=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).cardClickHandler=function(e,t){var a=Object(v.a)(i.state.projects);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),i.setState({projects:a})},i.makeCards=function(e){return e.map((function(e){return n.a.createElement(T,{item:e,click:function(t){return i.cardClickHandler(e.id,t)},key:e.id})}))},i.state={projects:[{id:0,title:"Catch of the Day",subTitle:"A fish market platform built with React.",tools:["JAVASCRIPT","REACT","FIREBASE"],imgSrc:H.a,gitLink:"https://github.com/BingShawLim/catchoftheday1",link:"https://catch-of-the-day-react-virid.now.sh",selected:!1},{id:1,title:"The Memoritor",subTitle:"Flip Card matching memory game made with pure JS,longterm learning project.",tools:["JAVASCRIPT","RAIL"],imgSrc:N.a,gitLink:"https://github.com/BingShawLim/thememoritor",link:"https://the-memoritor-bingshaw.herokuapp.com",selected:!1},{id:2,title:"White-Board!",subTitle:"simple Painting app creact with React, using Hooks.",tools:["HTML5","JAVASCRIPT","REACT","REACT-HOOKS"],imgSrc:Y.a,gitLink:"https://github.com/BingShawLim/white-board-hooks",link:"https://white-board-hooks.herokuapp.com",selected:!1},{id:3,title:"React Note App",subTitle:"A note app made with React",tools:["JAVASCRIPT","REACT","RAIL"],imgSrc:V.a,gitLink:"https://github.com/BingShawLim/react-note-re",link:"https://react-note-re.herokuapp.com",selected:!1},{id:4,title:"Write.MEN",subTitle:"A blog platform to let people write again.",tools:["JAVASCRIPT","MongoDB","Node JS","Express JS"],imgSrc:J.a,gitLink:"https://github.com/BingShawLim/write-men",link:"https://write-men.herokuapp.com",selected:!1},{id:5,title:"Mello",subTitle:"A Trello clone made with JavaScript and jQuery",tools:["JAVASCRIPT","JQUERY","RAIL"],imgSrc:P.a,gitLink:"https://github.com/BingShawLim/mello-rails",link:"https://mello-rails-bshaw.herokuapp.com/boards",selected:!1},{id:6,title:"Nomster",subTitle:"A Yelp clone made with Ruby on Rails.",tools:["RUBY","RAIL","BOOTSTRAP"],imgSrc:I.a,gitLink:"https://github.com/BingShawLim/nomster.1",link:"https://bing-nomster-v2.herokuapp.com",selected:!1},{id:7,title:"Kidultv",subTitle:"A video Learning Platform made with Ruby on Rails and Javascript",tools:["JAVASCRIPT","RUBY","RAIL","BOOTSTRAP"],imgSrc:M.a,gitLink:"https://github.com/BingShawLim/kidultv",link:"https://kidultv-1.herokuapp.com",selected:!1},{id:8,title:"Movie Book",subTitle:"A basic movie searching app creacted with ReactJS.",tools:["JAVASCRIPT","REACT","TMDB API"],imgSrc:Q.a,gitLink:"https://github.com/BingShawLim/movie-book-react",link:"https://movie-book-react.herokuapp.com/",selected:!1},{id:9,title:"todo-mongoDB",subTitle:"A practice project to learn MongoDB and ExpressJS.",tools:["JAVASCRIPT","ExpressJS","MongoDB"],imgSrc:F.a,gitLink:"https://github.com/BingShawLim/todo-mongoDB",link:"https://todo-app-learn-express-mongodb.herokuapp.com",selected:!1},{id:10,title:"PicPicLand",subTitle:"A Ruby on Rails instagram look alike project.",tools:["RUBY","RAIL","BOOTSTRAP"],imgSrc:L.a,gitLink:"https://github.com/BingShawLim/picpicland",link:"https://picpicland-01.herokuapp.com",selected:!1}]},i}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement(p.a,{fluid:!0},n.a.createElement(b.a,{className:"justify-content-around"},this.makeCards(this.state.projects)))}}]),a}(i.Component);var q=function(e){return n.a.createElement("div",null,n.a.createElement(w,{title:e.title,subTitle:e.subTitle,words:e.words}),n.a.createElement(_,null))},$=a(33),z=a.n($);var X=function(e){return n.a.createElement("div",null,n.a.createElement(p.a,{fluid:!0},n.a.createElement(b.a,{className:"justify-content-center"},n.a.createElement(f.a,{md:8},e.children))))};var Z=function(e){return n.a.createElement("div",null,n.a.createElement(w,{title:e.title}),n.a.createElement(X,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",null,n.a.createElement("h3",null,"Front-End Web Developer with Graphic Design experience and fluency in Chinese."),n.a.createElement("p",null,"Recently developed skills in HTML5, CSS3, Bootstrap, JavaScript, ReactJS, Redux, JQuery, Ruby, Ruby on Rails, Firebase and PostgreSQL."),n.a.createElement("p",null,"I am constantly learning about new tools and techniques, while enhancing my ReactJS knowledge by building different projects and gaining backend database skills. "),n.a.createElement("p",null,"Known as a quick learner and excellent problem solver. Passionate about developing web applications and responsive websites. A team player with the ability to grow myself and my team."),n.a.createElement("p",null,"I hope to work for a company that values my skill set and that looks for individuals who can think outside the box, for solutions to real-world problems, and evolving and growing with a diverse team.")),n.a.createElement("div",{className:"my-profile"},n.a.createElement("img",{className:"my-profile-image",src:z.a,alt:z.a})))))},ee=a(52),te=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(w,{title:this.props.title}),n.a.createElement(X,null,n.a.createElement("div",{className:"container"},n.a.createElement("p",{className:"title font-weight-bolder"},"My LinkedIn:"),n.a.createElement("a",{href:"https://www.linkedin.com/in/bing-shaw-lim/",className:"links font-weight-bolder",target:"_blank"},"Bing Shaw Lim")),n.a.createElement("div",{className:"container"},n.a.createElement("p",{className:"title font-weight-bolder"},"My GitHub:"),n.a.createElement("a",{href:"https://github.com/BingShawLim",className:"links font-weight-bolder",target:"_blank"},"BingShawLim")),n.a.createElement("div",{className:"container"},n.a.createElement("p",{className:"title font-weight-bolder"},"Email Me:"),n.a.createElement("a",{href:"mailto: shaw.a.muvee@gmail.com",className:"links font-weight-bolder"},"shaw.a.muvee@gmail.com")),n.a.createElement("div",{className:"container"},n.a.createElement(ee.a,{href:"https://drive.google.com/file/d/11sJcIWkGU32g83JKcoCoWek28V-dsvRL/view?usp=sharing",className:"btn btn-dark",target:"_blank"},"View My Resume"))))}}]),a}(n.a.Component),ae=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={name:"Bing Shaw Lim",headerLink:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Learn, Create, Repeat.",subTitle:"Beyond Yesterday",words:"Check My Projects Below"},about:{title:"Hi, I am Bing."},contact:{title:"Let's Talk!"}},i}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(u.a,null,n.a.createElement(p.a,{className:"p-0",fluid:!0},n.a.createElement(h.a,{className:"border-bottom",bg:"transparent",expand:"lg"},n.a.createElement(h.a.Brand,null,"Bing Shaw Lim"),n.a.createElement(h.a.Toggle,{"aria-controls":"navbar-toggle"}),n.a.createElement(h.a.Collapse,{id:"navbar-toggle"},n.a.createElement(g.a,{className:"ml-auto"},n.a.createElement(u.b,{className:"nav-link",to:"/portfolio"},"MyProject"),n.a.createElement(u.b,{className:"nav-link",to:"/portfolio/about"},"AboutMe"),n.a.createElement(u.b,{className:"nav-link",to:"/portfolio/contact"},"Contact")))),n.a.createElement(d.a,{path:"/",exact:!0,render:function(){return n.a.createElement(q,{title:e.state.home.title,subTitle:e.state.home.subTitle,words:e.state.home.words})}}),n.a.createElement(d.a,{path:"/portfolio",exact:!0,render:function(){return n.a.createElement(q,{title:e.state.home.title,subTitle:e.state.home.subTitle,words:e.state.home.words})}}),n.a.createElement(d.a,{path:"/portfolio/about",exact:!0,render:function(){return n.a.createElement(Z,{title:e.state.about.title,subTitle:e.state.about.subTitle})}}),n.a.createElement(d.a,{path:"/portfolio/contact",exact:!0,render:function(){return n.a.createElement(te,{title:e.state.contact.title})}}),n.a.createElement(k,null)))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(72);l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.d5cadbd0.chunk.js.map