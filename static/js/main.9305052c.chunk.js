(this["webpackJsonpmlm-laning"]=this["webpackJsonpmlm-laning"]||[]).push([[0],{101:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),s=t.n(l),c=(t(65),t(7)),i=t(2),o=t(1),m=t(11),d=(t(74),t(75),t(76),t(77),t(5)),u=t.n(d),p=t(22),f=t.n(p),E=(t(78),t(79),t(46)),h=t.n(E),g=t(47),v=t.n(g),b=t(48),w=t.n(b),N=t(49),y=t.n(N),x=t(50),k=t.n(x),P=t(51),C=t.n(P),S=t(52),O=t.n(S),_=t(53),I=t.n(_),T=t(54),L=t.n(T),U=t(55),M=t.n(U),q=t(56),z=t.n(q),j=t(57),A=t.n(j),B=(t(80),t(4)),R=t.n(B),G=t(15),D=t(14),$=t.n(D),F=t(58),V=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,W=function(e){return V.test(e)},H=function(e){var a=e.regAuthModal,t=(e.setRegisterSuccessModal,e.setRegAuthModal),n=e.defaultValue,l=r.a.useState({}),s=Object(i.a)(l,2),c=s[0],m=s[1],d=r.a.useState(!1),p=Object(i.a)(d,2),f=p[0],E=p[1],h=Object(G.a)(),g=h.register,v=h.handleSubmit,b=h.errors,w=h.watch;h.setError,h.clearError,h.getValues;console.log(b,"v");var N=function(){m({})},y=Object(o.d)();return console.log(y,"ttttttttttttttttt"),r.a.createElement("form",{onSubmit:v((function(e){var a=e.referral_link;delete e.referral_link,E(!0),$.a.post("/api/register",Object(F.a)({},e),{params:{referral:a}}).then((function(e){window.location.href="http://crowd-growing.com/login",t(null),E(!1)})).catch((function(e){E(!1),e.response&&e.response.data&&m(e.response.data)}))})),id:"register-form",action:"https://phpoll.com/register/process",method:"post",role:"form",style:{display:"register"===a?"block":"none"}},f&&r.a.createElement("img",{className:"loader",src:"https://cdn.dribbble.com/users/1028334/screenshots/2874977/canalol.gif"}),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Sponsor "),r.a.createElement("input",{type:"text",name:"referral_link",defaultValue:n,tabindex:"1",class:"form-control",placeholder:"Sponsor Name",ref:g()}),r.a.createElement("div",{class:"invalid-feedback"})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Full Name"),r.a.createElement("input",{type:"text",name:"name",tabindex:"1",class:"form-control",placeholder:"Full Name",className:u()("form-control",{"is-invalid":b.name||c.name}),ref:g({required:!0,minLength:2}),onChange:N}),r.a.createElement("div",{class:"invalid-feedback"},c.name||"Full Name must be at least 2 characters in length.")),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",name:"username",tabindex:"1",class:"form-control",placeholder:"Username",className:u()("form-control",{"is-invalid":b.username||c.username}),ref:g({required:!0,minLength:5}),onChange:N}),r.a.createElement("div",{class:"invalid-feedback"},c.username||"Username must be at least 5 characters in length.")),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",name:"email",tabindex:"1",className:u()("form-control",{"is-invalid":b.email||c.email}),placeholder:"Email Address",ref:g({validate:{email:W},required:!0}),onChange:N}),r.a.createElement("div",{class:"invalid-feedback"},c.email||"wrong email format")),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",name:"password",id:"password",tabindex:"2",className:u()("form-control",{"is-invalid":b.password||c.password}),placeholder:"Password",ref:g({required:!0,minLength:8}),onChange:N}),r.a.createElement("div",{class:"invalid-feedback"},c.username||"Password must be at least 8 characters in length.")),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Re-Password"),r.a.createElement("input",{type:"password",name:"confirmPassword",id:"password",tabindex:"2",className:u()("form-control",{"is-invalid":b.confirmPassword}),placeholder:"Re-Password",ref:g({required:!0,minLength:8,validate:{confirm:function(e){return e===w("password")}}}),onChange:N}),b.confirmPassword&&r.a.createElement("div",{className:"invalid-feedback"}," ","minLength"===b.confirmPassword.type?"enter minimum 8":"confirm"===b.confirmPassword.type?"Passwords do not match":"Password is required"," ")),r.a.createElement("div",{class:"checkBoxWrapper "},r.a.createElement("label",null,r.a.createElement("input",{name:"TandC",type:"checkbox",className:u()("",{hasError:b.TandC}),ref:g({required:!0})}),r.a.createElement("a",{href:"#"},"I agree with the T&C ")),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{name:"Police",type:"checkbox",className:u()("",{hasError:b.Police}),ref:g({required:!0})}),r.a.createElement("a",{href:"#"},"I agree with the Privacy policy  ")),r.a.createElement("label",null,r.a.createElement("input",{name:"Citizen",type:"checkbox",className:u()("",{hasError:b.Citizen}),ref:g({required:!0})}),r.a.createElement("span",null,"I confirm that I\u2019m not an US or Canadian citizen   "))),r.a.createElement("div",{class:"form-group"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-sm-12 col-sm-offset-3"},r.a.createElement("input",{disabled:f,type:"submit",name:"register-submit",id:"register-submit",tabindex:"4",class:"form-control mt-3 w-100 btn btn-register",value:"Register Now"})))))},J=function(e){e.regAuthModal;var a=e.setRegisterSuccessModal,t=e.setRegAuthModal,n=(e.defaultValue,r.a.useState({})),l=Object(i.a)(n,2),s=l[0],c=l[1],m=r.a.useState(!1),d=Object(i.a)(m,2),p=d[0],f=d[1],E=Object(G.a)(),h=E.register,g=E.handleSubmit,v=E.errors;E.setError,E.clearError,E.getValues;console.log(v,"v");Object(o.d)();return r.a.createElement("form",{onSubmit:g((function(e){f(!0),$.a.post("api/password/create",e).then((function(n){console.log(e),a("resetPass"),t(null),f(!1)})).catch((function(e){f(!1),e.response&&e.response.data?c({email:e.response.data.message}):c({email:"server error :/"})}))})),id:"register-form",action:"https://phpoll.com/register/process",method:"post",role:"form"},p&&r.a.createElement("img",{className:"loader",src:"https://cdn.dribbble.com/users/1028334/screenshots/2874977/canalol.gif"}),r.a.createElement("lable",{style:{color:"#fff"}},"Enter email address"),r.a.createElement("div",{class:"form-group"},r.a.createElement("input",{type:"email",name:"email",tabindex:"1",className:u()("form-control",{"is-invalid":v.email||s.email}),placeholder:"Email Address",ref:h({validate:{email:W},required:!0}),onChange:function(){c({})}}),r.a.createElement("div",{class:"invalid-feedback"},s.email||"wrong email format")),r.a.createElement("div",{class:"form-group"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-sm-12 col-sm-offset-3"},r.a.createElement("input",{disabled:p,type:"submit",name:"register-submit",id:"register-submit",tabindex:"4",class:"form-control w-100 mt-4 btn btn-register",value:"reset password"})))))},Q=function(e){e.regAuthModal;var a=e.setRegisterSuccessModal,t=e.setRegAuthModal,n=(e.defaultValue,r.a.useState({})),l=Object(i.a)(n,2),s=(l[0],l[1]),c=r.a.useState(!1),m=Object(i.a)(c,2),d=m[0],p=m[1],f=Object(G.a)(),E=f.register,h=f.handleSubmit,g=f.errors,v=(f.setError,f.watch),b=(f.clearError,f.getValues,Object(o.d)());console.log(g,"v");var w=function(){s({})};return r.a.createElement("form",{onSubmit:h((function(e){p(!0);var n=b.location.pathname.replace("find","reset");$.a.post(n,{password:e.mewPassword}).then((function(n){window.location.href="http://crowd-growing.com/login",console.log(e),a("changePassword"),t(null),p(!1)})).catch((function(e){p(!1),e.response&&e.response.data&&s(e.response.data)}))})),id:"register-form",action:"https://phpoll.com/register/process",method:"post",role:"form"},d&&r.a.createElement("img",{className:"loader",src:"https://cdn.dribbble.com/users/1028334/screenshots/2874977/canalol.gif"}),r.a.createElement("label",null,"change password"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",name:"mewPassword",id:"password",tabindex:"2",className:u()("form-control",{"is-invalid":g.mewPassword}),placeholder:"new password",ref:E({required:!0,minLength:9}),onChange:w}),g.mewPassword&&r.a.createElement("div",{className:"invalid-feedback"}," ","minLength"===g.mewPassword.type?"enter minimum 8":"password is required"," ")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"change password"),r.a.createElement("input",{type:"password",name:"repeatPassword",id:"password",tabindex:"2",className:u()("form-control mb-3",{"is-invalid":g.repeatPassword}),placeholder:" Repeat Password",ref:E({required:!0,minLength:8,validate:{confirm:function(e){return e===v("mewPassword")}}}),onChange:w}),g.repeatPassword&&r.a.createElement("div",{className:"invalid-feedback"}," ","minLength"===g.repeatPassword.type?"enter minimum 8":"confirm"===g.repeatPassword.type?"not equal":"password is required"," ")),r.a.createElement("div",{class:"form-group"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-sm-12 col-sm-offset-3"},r.a.createElement("input",{disabled:d,type:"submit",name:"register-submit",id:"register-submit",tabindex:"4",class:"form-control btn btn-register w-100",value:"CHANGE PASSWORD"})))))};var X=Object(o.e)((function(){var e=Object(G.a)(),a=e.register,t=e.handleSubmit,n=e.errors,l=(e.setError,e.clearError,e.getValues,r.a.useState(!1)),s=Object(i.a)(l,2),d=s[0],p=s[1],E=r.a.useState(!1),g=Object(i.a)(E,2),b=g[0],N=g[1],x=r.a.useState(null),P=Object(i.a)(x,2),S=P[0],_=P[1],T=r.a.useState(null),U=Object(i.a)(T,2),q=U[0],j=U[1],B=r.a.useState(null),D=Object(i.a)(B,2),F=D[0],V=(D[1],r.a.useState(null)),W=Object(i.a)(V,2),X=W[0],Y=W[1],K=Object(o.d)();console.log(o.d,"hhh",K),r.a.useEffect((function(){console.log(K.location.search.split("=")[0]),"?referral"===K.location.search.split("=")[0]&&(_("register"),j(K.location.search.split("=")[1])),console.log(K,"history"),K.location.pathname.includes("api/password/find/")&&_("changePassword")}),[]);var Z=function(){Y(null)};return r.a.createElement("div",{className:"App"},b&&r.a.createElement("div",{className:"rt-container"},r.a.createElement("div",{className:"col-rt-12"},r.a.createElement("div",{className:"Scriptcontent"},r.a.createElement("div",{id:"card",className:"animated fadeIn"},r.a.createElement("div",{id:"upper-side"}),r.a.createElement("div",{id:"lower-side"},"resetPass"===b?r.a.createElement("p",{id:"message"},"password reset link send on you email address"):"changePassword"===b?r.a.createElement("p",null,"Password changed successfully "):"",r.a.createElement("a",{href:"#",onClick:function(){N(!1),K.push("/")},id:"contBtn"},"close")))))),S&&r.a.createElement("div",{onClick:function(){return _(!1)},className:"container registerContainer"},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"row"},r.a.createElement("div",{className:"col-md-12 col-md-offset-3"},r.a.createElement("div",{className:"panel panel-login"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("a",{onClick:function(){_("login")},href:"#",className:"login"===S?"active":"",id:"login-form-link"},"Login")),r.a.createElement("div",{className:"col-6"},r.a.createElement("a",{onClick:function(){_("register")},href:"#",className:"register"===S?"active":"",id:"register-form-link"},"Register"))),r.a.createElement("hr",null)),r.a.createElement("div",{className:"panel-body"},r.a.createElement("div",{className:"LoginHeader"},r.a.createElement("img",{src:f.a}),r.a.createElement("h5",null,"Crowd Growing ")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},"login"===S?r.a.createElement("form",{onSubmit:t((function(e){$.a.post("/api/login",e).then((function(e){e.data.access_token?(1==e.data.user.fa_status?window.location.href="http://crowd-growing.com/2fa":window.location.href="http://crowd-growing.com/login",_(null)):Y("incorrect user or password")})).catch((function(e){e.response&&e.response.data?Y(e.response.data&&e.response.data.message):Y("server error :/")}))})),id:"login-form",action:"https://phpoll.com/login/process",method:"post",role:"form"},X&&r.a.createElement("div",{className:"text-center",style:{color:"red"}},X),r.a.createElement("div",{className:"form-group is-invalid"},r.a.createElement("label",null,"Username or Email"),r.a.createElement("input",{type:"text",name:"email",id:"username",tabindex:"1",placeholder:"Username or Email",className:u()("form-control",{"is-invalid":n.email}),ref:a({required:!0}),onChange:Z}),r.a.createElement("div",{className:"invalid-feedback"},"username is or email is required")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",name:"password",id:"password",tabindex:"2",className:u()("form-control",{"is-invalid":n.password}),placeholder:"Password",ref:a({required:!0}),onChange:Z}),r.a.createElement("div",{className:"invalid-feedback"},"password is required")),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"text-center text-right"},r.a.createElement("a",{href:"#",onClick:function(){_("resetPassword")},tabindex:"5",className:"forgot-password d-block text-right mr-1"},"Forgot Password?"))))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-sm-offset-3"},r.a.createElement("button",{className:"w-100 mt-4 form-control btn btn-login"}," ","Log In"))))):"resetPassword"===S?r.a.createElement(J,Object(c.a)({setRegisterSuccessModal:function(e){return N(e)},setRegAuthModal:function(e){return _(e)}},"setRegisterSuccessModal",(function(e){return N(e)}))):"changePassword"===S?r.a.createElement(Q,{token:F}):r.a.createElement(H,{defaultValue:q,regAuthModal:S,setRegAuthModal:function(e){return _(e)},setRegisterSuccessModal:function(e){return N(e)}})),r.a.createElement("a",{href:"https://t.me/crowdgrowing",target:"_blank",className:"btn-floating mx-auto  mt-4 btn  telegramLink btn-tw mx-1 waves-effect waves-light"},r.a.createElement("i",{class:"fab fa-telegram"})," Join channel"))))))),r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"headerWrapper"},r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:""},r.a.createElement("img",{height:"50",src:f.a}))),r.a.createElement("div",{onClick:function(){return p(!d)},className:"d-block d-lg-none burger pr-3 "},r.a.createElement("i",{className:"fas fa-bars "})),r.a.createElement("div",{className:d?"menu openBurgerMenu d-lg-block":"menu  d-lg-block"},r.a.createElement("ul",{className:"list-unstyled list-inline"},r.a.createElement("li",null,r.a.createElement(m.Link,{activeClass:"active",to:"aboutUs",spy:!0,smooth:!0,duration:500,onClick:function(){return p(!1)}},"About US")),r.a.createElement("li",null,r.a.createElement(m.Link,{activeClass:"active",to:"OurGoals",spy:!0,smooth:!0,duration:500,onClick:function(){return p(!1)}},"Goals and Missions")),r.a.createElement("li",null,r.a.createElement(m.Link,{activeClass:"active",to:"BUSINESS_MODEL",spy:!0,smooth:!0,duration:500,onClick:function(){return p(!1)}},"Business Model")),r.a.createElement("li",null,r.a.createElement(m.Link,{activeClass:"active",to:"lifCircle",spy:!0,smooth:!0,duration:500,onClick:function(){return p(!1)}},"Life circle"," ")),r.a.createElement("li",null,r.a.createElement(m.Link,{activeClass:"active",to:"profits",spy:!0,smooth:!0,duration:500,onClick:function(){return p(!1)}},"How to make Profits")),r.a.createElement("li",null,r.a.createElement(m.Link,{activeClass:"active",to:"Products",spy:!0,smooth:!0,duration:500,onClick:function(){return p(!1)}},"Products")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(e){e.preventDefault(),_("register")},className:"navBtn",href:""},"Get Started"))))))),r.a.createElement("div",{className:"section1"},r.a.createElement("video",{loop:!0,muted:!0,autoPlay:!0,className:" d-lg-block",id:"myVideo"},r.a.createElement("source",{src:A.a,type:"video/mp4"}),"Your browser does not support HTML5 video.")),r.a.createElement(m.Element,{name:"aboutUs",className:"aboutUs"},r.a.createElement("div",{className:"container"},r.a.createElement(R.a,{animateOnce:!0,animateIn:"animate__fadeInUp"},r.a.createElement("div",{className:"left"},r.a.createElement("h2",null,"About Us"),r.a.createElement("p",null,"Crowd Growing is an association of influential investors and investment groups from Europe and South East Asia, who share the goal to become market leader in the global CBD market. Through our collected years\u2019 of experience investing in this market, we have developed and structured a unique concept that enables us to achieve profits on a much faster basis than many of our competitors in this field. Together with our cooperation partners this concept has been tested and perfected over the past 2 years and is now ready to be offered in this form to the global market. Each and every one of our partners is a global player with many years of experience in the growing and distribution of CBD products. Based on that, we can assure on the one hand a great end product and on the other a professional business execution from an investors point of view"))),r.a.createElement(R.a,{animateOnce:!0,animateIn:"animate__zoomIn"},r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:y.a})))))),r.a.createElement(m.Element,{name:"OurGoals",className:"OurGoals"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"content"},r.a.createElement(R.a,{animateOnce:!0,animateIn:"animate__fadeInUp"},r.a.createElement("div",{className:"text-box"},r.a.createElement("h2",null,"Our Goals and Vision"),r.a.createElement("p",null,"We strongly believe, that business development and strategic planning are always the key to success."," "),r.a.createElement("p",null,"Therefore, we would summarize the goals and vision of Crowd Growing in the following 3 points:"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement(R.a,{animateOnce:!0,animateIn:"animate__zoomInDown"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{width:"150",src:h.a}),r.a.createElement("p",null,"Sustainability combined with profitability")))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement(R.a,{animateOnce:!0,delay:500,animateIn:"animate__zoomInDown"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{width:"150",src:v.a}),r.a.createElement("p",null,"Create value through perfect execution of business tasks")))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement(R.a,{delay:1e3,animateOnce:!0,animateIn:"animate__zoomInDown"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{width:"150",src:w.a}),r.a.createElement("p",null,"Improve people\u2019s health by supporting the global distribution of CBD")))))))),r.a.createElement(m.Element,{name:"BUSINESS_MODEL",className:"BUSINESS_MODEL"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"content "},r.a.createElement(R.a,{animateOnce:!0,animateIn:"animate__fadeInUp"},r.a.createElement("div",{className:"left"},r.a.createElement("h2",null,"Business Model"),r.a.createElement("p",null,"Crowd Growing is based on a strategy and philosophy that has been put in place together with our strategic cooperation partners in the field of growth and distribution of medical cannabis.",r.a.createElement("br",null),"In an exclusive first funding stage, Crowd Growing managed to accumulate approximately 10 million USD in venture capital from high net worth individuals and investors. This allowed us to create a state of the art cannabis manufacturing strategy.",r.a.createElement("br",null),"The fundament of this successful strategy lays in the simplification of repeating processes in order to achieve the best possible outcome. ",r.a.createElement("br",null),"After numerous tests and trials we managed to create a one of a kind growing cycle, a socalled \u201cGrowing Street\u201d. This cycle distinguish itself, that we plant new plants and harvest old plants on a daily basis. For that reason, we established different working groups, each specialized on only a few tasks, which are repeated continuously on a daily basis."))),r.a.createElement(R.a,{animateOnce:!0,animateIn:"animate__rotateInDownRight"},r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:k.a}))))))),r.a.createElement(m.Element,{name:"lifCircle",className:"lifCircle"},r.a.createElement("div",{className:"container"},r.a.createElement(R.a,{animateOnce:!0,animateIn:"animate__fadeInUp"},r.a.createElement("div",null,r.a.createElement("h2",null,"Life Cycle of a Plant "),r.a.createElement("p",null,"Our growing street is divided into 5 steps. Each one of those steps strictly has its own working group assigned."))),r.a.createElement("div",{className:"circleContainer "},r.a.createElement("div",{className:" circle circle1"},r.a.createElement(R.a,{animateOnce:!0,animateIn:"animate__slideInLeft"},r.a.createElement("div",{className:"vertical"}),r.a.createElement("div",{className:"horizontal"}),r.a.createElement("img",{src:O.a}),r.a.createElement("div",{className:"textBox stepOne"},r.a.createElement("h6",null,"Step 1\u2013Cuttings"),r.a.createElement("div",null,"Preparation of own feminized genetics focus on good look, smell and taste"),r.a.createElement("div",null,"Selection of good and stable genetic Processing of seedlings or clones of the mother plants")))),r.a.createElement("div",{className:" circle circle2"},r.a.createElement(R.a,{animateOnce:!0,delay:300,animateIn:"animate__slideInUp"},r.a.createElement("img",{src:I.a}),r.a.createElement("div",{className:"vertical"}),r.a.createElement("div",{className:"horizontal"}),r.a.createElement("div",{className:"textBox  stepFour"},r.a.createElement("h6",null,"Step 2\u2013Vegetation"),r.a.createElement("div",null,"Growth of the plant until the flowering start (18h light /6h dark) \u2013 Process time: 4-5 weeks")))),r.a.createElement("div",{className:" circle circle3"},r.a.createElement(R.a,{animateOnce:!0,delay:600,animateIn:"animate__slideInDown"},r.a.createElement("div",{className:"vertical"}),r.a.createElement("div",{className:"horizontal"}),r.a.createElement("img",{src:L.a}),r.a.createElement("div",{className:"textBox stepThree"},r.a.createElement("h6",null,"Step 3\u2013Flowering"),r.a.createElement("div",null,"After 4-5 weeks lightning gets switched to 12h light/ 12h dark in order to transform the plant into the flowering stage. This process takes 3-4 weeks")))),r.a.createElement("div",{className:" circle circle4"},r.a.createElement(R.a,{animateOnce:!0,delay:900,animateIn:"animate__slideInUp"},r.a.createElement("div",{className:"vertical"}),r.a.createElement("div",{className:"horizontal"}),r.a.createElement("img",{src:M.a}),r.a.createElement("div",{className:"textBox stepFour"},r.a.createElement("h6",null,"Step 4\u2013Harvesting drying, trimming"),r.a.createElement("div",null,"After this previous 8 week process, the harvesting time begins. The whole harvest is processed and completed within one day"),r.a.createElement("div",null,"Drying and fermenting of the flowers in a vacuum closed drying chamber.")))),r.a.createElement("div",{className:" circle circle5"},r.a.createElement(R.a,{animateOnce:!0,delay:1200,animateIn:"animate__slideInDown"},r.a.createElement("img",{src:z.a}),r.a.createElement("div",{className:"vertical"}),r.a.createElement("div",{className:"horizontal"}),r.a.createElement("div",{className:"textBox stepThree"},r.a.createElement("h6",null,"Step 5\u2013Packaging and sale"),r.a.createElement("div",null,"Before the product can be distributed a laboratory test is required."))))))),r.a.createElement(m.Element,{name:"profits",className:"profits"},r.a.createElement("div",{className:"container"},r.a.createElement(R.a,{animateOnce:!0,animateIn:"animate__fadeInUp"},r.a.createElement("div",{className:"left"},r.a.createElement("h2",null,"How to make Profit with Us "),r.a.createElement("p",null,"The big advantage for customers of Crowd Growing is that they can easily profit from the cannabis market. Crowd Growing enables them to profit with the same leverage that normally only big investors in this market have, as they provide the necessary infrastructure. Crowd Growing provides the complete chain of logistics and hosts the customers\u2018 equipment. This provides each customer the opportunity to become a part of a big player in this market without the need of their own products, facilities or expertise."))),r.a.createElement("div",{className:"right"},r.a.createElement(R.a,{animateOnce:!0,animateIn:"animate__zoomIn"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:C.a})))))),r.a.createElement(m.Element,{name:"Products",className:"Products"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"content"},r.a.createElement(R.a,{animateOnce:!0,animateIn:"animate__fadeInUp"},r.a.createElement("div",{className:"left"},r.a.createElement("h2",null,"Products"),r.a.createElement("p",null,"We have decided to create the lowest possible entry barrier for new customers. Therefore we can guarantee that even with the smallest investment, profit will be generated. ",r.a.createElement("br",null),"Starting with an investment in growing equipment from 100$ you will be considered as a beginner. From a 1,000$ investment you will be considered as an Advanced and starting from 2,500$ you will be considered as a Professional. Nevertheless, which amount a customer invests, he will have a monthly profit of up to 8-10%.",r.a.createElement("br",null),"Starting from 10,000$ you will be considered as a Founder. Founders earn 8-10% per month+ an extra 1-3% monthly profit share of the entire harvest from the past month. While the profits are shared on a weekly basis, the 1-3% extra profit share for our founders are shared always at the end of every month."),r.a.createElement("div",null,"*Please note, that you are purchasing growing equipment, which is not bound to any interest rates or guaranteed profits.",r.a.createElement("br",null),r.a.createElement("br",null),"**Please note, that the profits may vary due to different quality of the harvested product, different sales price, etc"))),r.a.createElement("div",{className:"right d-flex flex-column"},r.a.createElement(R.a,{animateOnce:!0,animateIn:"animate__slideInRight"},r.a.createElement("div",{className:" Starter investTypes"},r.a.createElement("div",{className:"pricing card-group flex-column flex-md-row mb-1"},r.a.createElement("div",{className:"card card-pricing border-0 bg-white text-center mb-1"},r.a.createElement("div",{className:"card-body px-lg-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",{className:"text-uppercase ls-1 text-dark py-3 mb-0 text-center"},"Starter"))),r.a.createElement("div",{className:"display-2 text-dark text-center"},r.a.createElement("div",{className:"pricesLine mt-4"},r.a.createElement("div",{className:"linContainer"},r.a.createElement("div",{className:"startPrice"},"$100"),r.a.createElement("div",{className:"endPrice"},"$999"),r.a.createElement("div",{className:"leftTube Tube"},r.a.createElement("i",{className:"far fa-check-circle"})),r.a.createElement("div",{className:"centralLine"}),r.a.createElement("div",{className:"rightTube Tube"},r.a.createElement("i",{className:"far fa-check-circle"}))))),r.a.createElement("div",{className:"text-left text"},"Monthly profit 8% \u2013 10% ",r.a.createElement("br",null)," Weekly profit share"))))),r.a.createElement("div",{className:" Advanced investTypes"},r.a.createElement("div",{className:"pricing card-group flex-column flex-md-row mb-1 "},r.a.createElement("div",{className:"card card-pricing border-0 bg-white text-center mb-1"},r.a.createElement("div",{className:"card-body px-lg-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",{className:"text-uppercase ls-1 text-dark py-3 mb-0 text-center"},"Advanced"))),r.a.createElement("div",{className:"display-2 text-dark text-center"},r.a.createElement("div",{className:"pricesLine mt-4"},r.a.createElement("div",{className:"linContainer"},r.a.createElement("div",{className:"startPrice"},"1,000$ "),r.a.createElement("div",{className:"endPrice"},"2,499$ "),r.a.createElement("div",{className:"leftTube Tube"},r.a.createElement("i",{className:"far fa-check-circle"})),r.a.createElement("div",{className:"centralLine"}),r.a.createElement("div",{className:"rightTube Tube"},r.a.createElement("i",{className:"far fa-check-circle"}))))),r.a.createElement("div",{className:"text-left text"},"Monthly profit 8% \u2013 10% ",r.a.createElement("br",null)," Weekly profit share"))))),r.a.createElement("div",{className:" Pro investTypes"},r.a.createElement("div",{className:"pricing card-group flex-column flex-md-row mb-1"},r.a.createElement("div",{className:"card card-pricing border-0 bg-white text-center mb-1"},r.a.createElement("div",{className:"card-body px-lg-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",{className:"text-uppercase ls-1 text-dark py-3 mb-0 text-center"},"Professional"))),r.a.createElement("div",{className:"display-2 text-dark text-center"},r.a.createElement("div",{className:"pricesLine mt-4"},r.a.createElement("div",{className:"linContainer"},r.a.createElement("div",{className:"startPrice"},"2,500$"),r.a.createElement("div",{className:"endPrice"},"9,999$"),r.a.createElement("div",{className:"leftTube Tube"},r.a.createElement("i",{className:"far fa-check-circle"})),r.a.createElement("div",{className:"centralLine"}),r.a.createElement("div",{className:"rightTube Tube"},r.a.createElement("i",{className:"far fa-check-circle"}))))),r.a.createElement("div",{className:"text-left text "},"Monthly profit 8% \u2013 10% ",r.a.createElement("br",null)," Weekly profit share"))))),r.a.createElement("div",{className:" Founder investTypes"},r.a.createElement("div",{className:"pricing card-group flex-column flex-md-row mb-3"},r.a.createElement("div",{className:"card card-pricing border-0 bg-white text-center mb-1"},r.a.createElement("div",{className:"card-body px-lg-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",{className:"text-uppercase ls-1 text-dark py-3 mb-0 text-center"},"Founder"))),r.a.createElement("div",{className:"display-2 text-dark text-center"},r.a.createElement("div",{className:"pricesLine mt-4"},r.a.createElement("div",{className:"linContainer"},r.a.createElement("div",{className:"startPrice"},"10,000$"),r.a.createElement("div",{className:"endPrice"},"100,000$"),r.a.createElement("div",{className:"leftTube Tube"},r.a.createElement("i",{className:"far fa-check-circle"})),r.a.createElement("div",{className:"centralLine"}),r.a.createElement("div",{className:"rightTube Tube"},r.a.createElement("i",{className:"far fa-check-circle"}))))),r.a.createElement("div",{className:"text-left text"},"Monthly profit 8% \u2013 10% ",r.a.createElement("br",null),"Weekly profit share ",r.a.createElement("br",null),"extra 1% \u2013 3% monthly")))))))))),r.a.createElement("footer",{className:"footer page-footer font-small special-color-dark pt-4"},r.a.createElement("a",{href:""},r.a.createElement("img",{height:"50",src:f.a})),r.a.createElement("ul",{className:"list-unstyled list-inline text-center"},r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://www.facebook.com/groups/340100750743245",target:"_blank",className:"btn-floating btn-fb mx-1 waves-effect waves-light"},r.a.createElement("i",{className:"fab fa-facebook-f"}," "))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://t.me/crowdgrowing",target:"_blank",className:"btn-floating btn-tw mx-1 waves-effect waves-light"},r.a.createElement("i",{class:"fab fa-telegram"}))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://www.youtube.com/channel/UCFXf8dvgTlnrfE23eTblBkQ?",target:"_blank",className:"btn-floating btn-gplus mx-1 waves-effect waves-light"},r.a.createElement("i",{class:"fab fa-youtube"})))),r.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2020 Copyright:",r.a.createElement("a",{href:"https://crowdgrowing.com/"}," crowdgrowing.com "))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=t(28);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y.a,null,r.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},22:function(e,a,t){e.exports=t.p+"static/media/pic-19.ce60862e.png"},46:function(e,a,t){e.exports=t.p+"static/media/pic-24.efcae9e8.png"},47:function(e,a,t){e.exports=t.p+"static/media/pic-25.7e10305d.png"},48:function(e,a,t){e.exports=t.p+"static/media/pic-26.3af56525.png"},49:function(e,a,t){e.exports=t.p+"static/media/pic-32.834fd84f.png"},50:function(e,a,t){e.exports=t.p+"static/media/pic-27.916a0e28.png"},51:function(e,a,t){e.exports=t.p+"static/media/pic-1711.764a35b0.png"},52:function(e,a,t){e.exports=t.p+"static/media/Untitled-3p-14.12dcc50f.png"},53:function(e,a,t){e.exports=t.p+"static/media/Untitled-3p-15.d335dcea.png"},54:function(e,a,t){e.exports=t.p+"static/media/Untitled-3p-16.d9c97c28.png"},55:function(e,a,t){e.exports=t.p+"static/media/Untitled-3p-17.b7cc1f71.png"},56:function(e,a,t){e.exports=t.p+"static/media/Untitled-3p-18.f50c4316.png"},57:function(e,a,t){e.exports=t.p+"static/media/videoSection.3300a1e2.mp4"},60:function(e,a,t){e.exports=t(101)},65:function(e,a,t){},74:function(e,a,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){e.exports=t.p+"static/media/pic-17.949c83bd.png"},79:function(e,a,t){e.exports=t.p+"static/media/pic-18.64fbb524.png"}},[[60,1,2]]]);
//# sourceMappingURL=main.9305052c.chunk.js.map