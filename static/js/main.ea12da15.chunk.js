(this["webpackJsonpreact-pokedex"]=this["webpackJsonpreact-pokedex"]||[]).push([[0],{101:function(e,a,t){"use strict";t.r(a);var n,c,s=t(0),r=t.n(s),o=t(33),l=t.n(o),i=t(6),m=t(12),A=t(5),g=t(20),d=t(56),h=t(7),E=h.a.nav(n||(n=Object(i.a)(["\n  background-color: #000 !important;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),p=Object(h.a)(m.b)(c||(c=Object(i.a)(["\n  color: black;\n  background-color: white;\n  border: 2px solid gray;\n  padding: 0.2rem 0.7rem;\n  text-decoration: none;\n\n  &:visited,\n  &:link {\n    text-decoration: none;\n  }\n\n  &:active {\n    transform: scale(1.05);\n  }\n"])));function B(e){e.inGame,e.handleSetInGame;var a=Object(A.g)("/pokemongame");return r.a.createElement(E,{className:"navbar navbar-expand-md navbar-dark fixed-top p-4 w-100"},r.a.createElement(m.b,{to:"/",className:"navbar-brand align-items-center text-uppercase"},r.a.createElement("span",{className:"h2"},"Pok\xe9dex")),!a&&r.a.createElement(p,{to:"/pokemongame",className:"rounded text-uppercase"},"Play Game"))}var u,C,w,Q,v,I=t(13),k=t.n(I),b=t(14),f=t(18),N=t.n(f),F=t(22),D=t(35),R=t.n(D),G=h.a.img(u||(u=Object(i.a)(["\n  width: 5.5em;\n  height: 5.5em;\n"]))),x=h.a.div(C||(C=Object(i.a)(["\n  width: 100%;\n  height: auto;\n  margin: 0 auto;\n\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  &:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n\n  -moz-user-select: none;\n  -website-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -o-user-select: none;\n"]))),S=Object(h.a)(m.b)(w||(w=Object(i.a)(["\n  text-decoration: none;\n  color: black;\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n"])));function O(e){var a=e.name,t=e.url,n=Object(s.useState)(""),c=Object(b.a)(n,2),o=c[0],l=c[1],i=Object(s.useState)(""),m=Object(b.a)(i,2),g=m[0],d=m[1],h=Object(s.useState)(""),E=Object(b.a)(h,2),p=E[0],B=E[1],u=Object(s.useState)(!0),C=Object(b.a)(u,2),w=C[0],Q=C[1],v=Object(s.useState)(!1),I=Object(b.a)(v,2),f=I[0],D=I[1],O=Object(A.f)();return Object(s.useEffect)((function(){var e,a=t.split("/")[t.split("/").length-2],n="".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((e=a)<=999?"00".concat(e).slice(-3):e,".png");l(n),d(a),function(){var e=Object(F.a)(N.a.mark((function e(){var t,n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://pokeapi.co/api/v2/pokemon/".concat(a,"/"),e.next=3,k.a.get(t);case 3:n=e.sent,c=n.data,B(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[g,t]),r.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 mb-5"},r.a.createElement(S,{to:"pokemon/".concat(g)},r.a.createElement(x,{className:"card"},r.a.createElement("h5",{className:"card-header"},"#",g),w?r.a.createElement("img",{src:R.a,alt:"spinner",onLoad:function(){return Q(!1)},style:{width:"5em",height:"5em"},className:"card-img-top rounded mx-auto d-block mt-2"}):r.a.createElement(G,{className:"card-img-top rounded mx-auto mt-2",src:o,onLoad:function(){return Q(!1)},onError:function(){return D(!0)},style:f?{display:"none"}:w?null:{display:"block"}}),r.a.createElement("div",{className:"class-body mx-auto"},r.a.createElement("h4",{className:"card-title"},a.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")),"/pokemongame"===O.pathname&&r.a.createElement("p",{className:" card-text text-muted pb-3"},"Exp:"," ",r.a.createElement("span",{className:"text-info"},p.base_experience))))))}var Y=h.a.input(Q||(Q=Object(i.a)(["\n  width: 100%;\n  max-width: 28rem;\n  text-indent: 10px;\n  outline: none;\n"]))),j=h.a.button(v||(v=Object(i.a)(["\n  display: none;\n"])));function y(e){return r.a.createElement("div",{className:"text-center p-5"},r.a.createElement(Y,{type:"search",value:e.search,placeholder:"Search Pok\xe9mon",onChange:function(a){return e.setSearch(a.target.value)}}),r.a.createElement(j,{type:"submit"},"Search"))}function M(e){var a=e.pokemon,t=Object(s.useState)(""),n=Object(b.a)(t,2),c=n[0],o=n[1],l=0===c.length?a:a.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return r.a.createElement("div",{className:"container pt-4 pb-4"},r.a.createElement(y,{search:c,setSearch:o}),a?r.a.createElement("div",{className:"row pt-4"},l.map((function(e){return r.a.createElement(O,{key:e.name,name:e.name,url:e.url})}))):r.a.createElement("h1",null,"Loading..."))}function J(){var e=Object(g.useQuery)("get-pokemon",(function(){return k.a.get("https://pokeapi.co/api/v2/pokemon/?limit=151").then((function(e){return e.data.results}))})).data,a=void 0===e?[]:e;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(M,{pokemon:a})))}var U,H,K,L,W,Z=t(60),V=t(61),T=t(64),q=t(63),X=Object(h.a)(m.c)(U||(U=Object(i.a)(["\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n"]))),P={bug:"B1C12E",dark:"4F3A2D",dragon:"755EDF",electric:"FCBC17",fairy:"F4B1F4",fighting:"823551D",fire:"E73B0C",flying:"A3B3F7",ghost:"6060B2",grass:"74C236",ground:"D3B357",ice:"A3E7FD",normal:"C8C4BC",poison:"934594",psychic:"ED4882",rock:"B9A156",steel:"B5B5C3",water:"3295F6"},z=function(e){Object(T.a)(t,e);var a=Object(q.a)(t);function t(){var e;Object(Z.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).state={name:"",pokemonIndex:"",imageUrl:"",imageLoading:!0,types:[],description:"",stats:{hp:"",attack:"",defense:"",speed:"",specialAttack:"",specialDefense:""},height:"",weight:"",eggGroup:"",abilities:"",genderRatioMale:"",genderRatioFemale:"",evs:"",hatchSteps:"",themeColor:""},e}return Object(V.a)(t,[{key:"componentDidMount",value:function(){var e=Object(F.a)(N.a.mark((function e(){var a,t,n,c,s,r,o,l,i,m,A,g,d,h,E,p,B,u,C,w=this;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.pokemonIndex,t="https://pokeapi.co/api/v2/pokemon/".concat(a,"/"),n="https://pokeapi.co/api/v2/pokemon-species/".concat(a,"/"),e.next=5,k.a.get(t);case 5:return c=e.sent,s=c.data.name,r=function(e){return e<=999?"00".concat(e).slice(-3):e},"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/",o="".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat(r(a),".png"),"",l="".hp,i="".attack,m="".defense,A="".speed,g="".specialAttack,d="".specialDefense,c.data.stats.map((function(e){switch(e.stat.name){case"hp":l=e.base_stat;break;case"attack":i=e.base_stat;break;case"defense":m=e.base_stat;break;case"speed":A=e.base_stat;break;case"special-attack":g=e.base_stat;break;case"special-defense":d=e.base_stat}return!0})),h=Math.round(100*(.328084*c.data.height+1e-5))/100,E=Math.round(100*(.220462*c.data.weight+1e-5))/100,p=c.data.types.map((function(e){return e.type.name})),B="".concat(P[p[p.length-1]]),u=c.data.abilities.map((function(e){return e.ability.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")})).join(", "),C=c.data.stats.filter((function(e){return e.effort>0})).map((function(e){return"".concat(e.effort," ").concat(e.stat.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" "))})).join(", "),e.next=20,k.a.get(n).then((function(e){var t="";e.data.flavor_text_entries.some((function(e){return"en"===e.language.name&&(t=e.flavor_text,!0)}));var n=e.data.gender_rate,c=12.5*n,r=12.5*(8-n),Q=Math.round(100/255*e.data.capture_rate),v=e.data.egg_groups.map((function(e){return e.name.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")})).join(", "),I=255*(e.data.hatch_counter+1);w.setState({description:t,genderRatioFemale:c,genderRatioMale:r,catchRate:Q,eggGroups:v,hatchSteps:I,imageUrl:o,pokemonIndex:a,name:s,types:p,stats:{hp:l,attack:i,defense:m,speed:A,specialAttack:g,specialDefense:d},themeColor:B,height:h,weight:E,abilities:u,evs:C})}));case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid pt-5 "},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5"},r.a.createElement("h4",null,"#",this.state.pokemonIndex)),r.a.createElement("div",{className:"col-5"},r.a.createElement("div",{className:"float-center"},this.state.types.map((function(e){return r.a.createElement("span",{key:e,className:"badge mr-1",style:{backgroundColor:"#".concat(P[e]),color:"white"}},e.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" "))})))),r.a.createElement("div",{className:"col-2"},r.a.createElement(X,{to:"/",className:"text-uppercase float-right"},"< Back")))),r.a.createElement("div",{className:"card-body p-5"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:" col-md-4 "},this.state.imageLoading?r.a.createElement("img",{src:R.a,alt:"spinner",onLoad:function(){return e.setState({imageLoading:!1})},style:{width:"5em",height:"5em"},className:"card-img-top rounded mx-auto d-block mt-2"}):r.a.createElement("img",{src:this.state.imageUrl,className:"card-img-top rounded mx-auto ",onLoad:function(){return e.setState({imageLoading:!1})},alt:this.state.name})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("h3",{className:"mx-auto"},this.state.name.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statTitleWidth)},"HP"),r.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statBarWidth)},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar ",role:"progressbar",style:{width:"".concat(this.state.stats.hp,"%"),backgroundColor:"#".concat(this.state.themeColor)},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,this.state.stats.hp))))),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statTitleWidth)},"Attack"),r.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statBarWidth)},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.stats.attack,"%"),backgroundColor:"#".concat(this.state.themeColor)},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,this.state.stats.attack))))),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statTitleWidth)},"Defense"),r.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statBarWidth)},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar ",role:"progressbar",style:{width:"".concat(this.state.stats.defense,"%"),backgroundColor:"#".concat(this.state.themeColor)},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,this.state.stats.defense))))),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statTitleWidth)},"Speed"),r.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statBarWidth)},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.stats.speed,"%"),backgroundColor:"#".concat(this.state.themeColor)},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,this.state.stats.speed))))),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statTitleWidth)},"Sp Attack"),r.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statBarWidth)},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar ",role:"progressbar",style:{width:"".concat(this.state.stats.specialAttack,"%"),backgroundColor:"#".concat(this.state.themeColor)},"aria-valuenow":this.state.stats.specialAttack,"aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,this.state.stats.specialAttack))))),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statTitleWidth)},"Sp Defense"),r.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statBarWidth)},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar ",role:"progressbar",style:{width:"".concat(this.state.stats.specialDefense,"%"),backgroundColor:"#".concat(this.state.themeColor)},"aria-valuenow":this.state.stats.specialDefense,"aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,this.state.stats.specialDefense))))))),r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col"},r.a.createElement("p",{className:""},this.state.description)))),r.a.createElement("hr",null),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title text-center"},"Profile"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h6",{className:"float-right"},"Height:")),r.a.createElement("div",{className:"col-6"},r.a.createElement("h6",{className:"float-left"},this.state.height," ft.")),r.a.createElement("div",{className:"col-6"},r.a.createElement("h6",{className:"float-right"},"Weight:")),r.a.createElement("div",{className:"col-6"},r.a.createElement("h6",{className:"float-left"},this.state.weight," lbs")),r.a.createElement("div",{className:"col-6"},r.a.createElement("h6",{className:"float-right"},"Catch Rate:")),r.a.createElement("div",{className:"col-6"},r.a.createElement("h6",{className:"float-left"},this.state.catchRate,"%")),r.a.createElement("div",{className:"col-6"},r.a.createElement("h6",{className:"float-right"},"Gender Ratio:")),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.genderRatioFemale,"%"),backgroundColor:"#c2185b"},"aria-valuenow":"15","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,this.state.genderRatioFemale)),r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.genderRatioMale,"%"),backgroundColor:"#1976d2"},"aria-valuenow":"30","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,this.state.genderRatioMale)))))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h6",{className:"float-right"},"Egg Groups:")),r.a.createElement("div",{className:"col-6"},r.a.createElement("h6",{className:"float-left"},this.state.eggGroups," ")),r.a.createElement("div",{className:"col-6"},r.a.createElement("h6",{className:"float-right"},"Hatch Steps:")),r.a.createElement("div",{className:"col-6"},r.a.createElement("h6",{className:"float-left"},this.state.hatchSteps)),r.a.createElement("div",{className:"col-6"},r.a.createElement("h6",{className:"float-right"},"Abilities:")),r.a.createElement("div",{className:"col-6"},r.a.createElement("h6",{className:"float-left"},this.state.abilities)),r.a.createElement("div",{className:"col-6"},r.a.createElement("h6",{className:"float-right"},"EVs:")),r.a.createElement("div",{className:"col-6"},r.a.createElement("h6",{className:"float-left"},this.state.evs)))))),r.a.createElement("div",{className:"card-footer text-muted text-center"},"Powered By"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://pokeapi.co/",className:"card-link"},"PokeAPI.co"))))}}]),t}(s.Component),_=t(30),$=h.a.div(H||(H=Object(i.a)(["\n  background-color: #fefbff;\n  border-radius: 50%;\n"]))),ee=Object(h.a)(m.b)(K||(K=Object(i.a)(["\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n"]))),ae=h.a.h2(L||(L=Object(i.a)(["\n  font-size: 2.5rem;\n  color: red;\n  text-transform: uppercase;\n"]))),te=h.a.span(W||(W=Object(i.a)(["\n  font-weight: bold;\n"])));function ne(){var e=Object(s.useState)([]),a=Object(b.a)(e,2),t=a[0],n=a[1],c=Object(s.useState)([]),o=Object(b.a)(c,2),l=o[0],i=o[1],m=Object(g.useQuery)("get-pokemon",(function(){return k.a.get("https://pokeapi.co/api/v2/pokemon/?limit=151").then((function(e){return e.data.results}))})).data,A=void 0===m?[]:m,d=Object(g.useQuery)(["get-detailed-pokemon",[].concat(Object(_.a)(t),Object(_.a)(l)).map((function(e){return e.name}))],Object(F.a)(N.a.mark((function e(){var a,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e){var a=e.url;return k.a.get(a).then((function(e){return e.data}))})));case 2:return a=e.sent,e.next=5,Promise.all(l.map((function(e){var a=e.url;return k.a.get(a).then((function(e){return e.data}))})));case 5:return n=e.sent,e.abrupt("return",{userPokemon:a,compPokemon:n});case 7:case"end":return e.stop()}}),e)}))),{initialData:{userPokemon:[],compPokemon:[]}}).data,h=d.userPokemon,E=d.compPokemon;Object(s.useEffect)((function(){var e=function(){for(var e=[],a=0;a<3;a++){var t=Math.floor(Math.random()*A.length-1)+1,n=A[t];e.push(n)}if(void 0!==e)return e};A.length>0&&(n(e()),i(e()))}),[A]);var p=h.reduce((function(e,a){return e+a.base_experience}),0),B=E.reduce((function(e,a){return e+a.base_experience}),0),u=p>B;return r.a.createElement($,{className:"container p-2"},r.a.createElement(ee,{to:"/",className:"text-light text-uppercase"},"< Back"),r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",{className:"text-uppercase display-4 p-1"},"Your Hand"),r.a.createElement("h3",null,"Total Exp: ",r.a.createElement(te,null,p)),r.a.createElement(ae,null,u?"Winner!":""),r.a.createElement("div",{className:"d-flex align-items-center justify-content-center"},t[0]&&Object(_.a)(t).map((function(e){return r.a.createElement(O,{key:e.name,name:e.name,url:e.url})}))),r.a.createElement("hr",null),r.a.createElement("h2",{className:"text-uppercase display-4 p-1"},"Computer Hand"),r.a.createElement("h3",null,"Total Exp: ",r.a.createElement(te,null,B)),r.a.createElement(ae,{className:""},u?"":"Winner!"),r.a.createElement("div",{className:"d-flex align-items-center justify-content-center"},l[0]&&Object(_.a)(l).map((function(e){return r.a.createElement(O,{key:e.name,name:e.name,url:e.url})})))))}var ce,se=t(62),re=t.n(se),oe=h.a.div(ce||(ce=Object(i.a)(["\n  background: url(",');\n  background-size: cover;\n  background-attachment: fixed;\n  /* background-position: center; */\n  /* background-repeat: no-repeat; */\n  background-repeat: repeat;\n\n  padding-top: 6rem;\n  min-height: 100vh;\n  font-family: "VT323", monospace;\n  font-size: 1.5rem;\n'])),re.a),le=new g.QueryClient;function ie(){return r.a.createElement(g.QueryClientProvider,{client:le},r.a.createElement(d.ReactQueryDevtools,null),r.a.createElement(m.a,{basename:"/react-pokedex"},r.a.createElement(oe,null,r.a.createElement(B,null),r.a.createElement("div",{className:"container"},r.a.createElement(A.c,null,r.a.createElement(A.a,{exact:!0,path:"/",component:J}),r.a.createElement(A.a,{exact:!0,path:"/pokemon/:pokemonIndex",component:z}),r.a.createElement(A.a,{exact:!0,path:"/pokemongame",component:ne}))))))}t(100);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root"))},35:function(e,a){e.exports="data:image/gif;base64,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"},62:function(e,a,t){e.exports=t.p+"static/media/bg.6b06a7bd.jpg"},73:function(e,a,t){e.exports=t(101)}},[[73,1,2]]]);
//# sourceMappingURL=main.ea12da15.chunk.js.map