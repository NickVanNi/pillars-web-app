(this.webpackJsonpwebpage=this.webpackJsonpwebpage||[]).push([[0],{10:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),r=a.n(s),c=a(11),i=a.n(c),o=(a(19),a(10),a(20),a(12)),l=a(4),h=a(5),d=a(3),u=a(7),b=a(6),p=a(2),j=a.n(p),m={width:"100%",backgroundColor:"grey"},x={width:"100%",backgroundColor:"#b1000d",textAlign:"center",lineHeight:"175%",color:"white",height:"100%",transition:"width 1s"},v=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).props=e,n.state={currentHp:n.props.maxHp},n.changeHealth=n.changeHealth.bind(Object(d.a)(n)),n}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"d-flex flex-row",children:[Object(n.jsx)("button",{className:"mr-1",onClick:function(){return e.changeHealth(-5)},children:"-5"}),Object(n.jsx)("button",{className:"mr-1",onClick:function(){return e.changeHealth(-1)},children:"-1"}),Object(n.jsx)("div",{id:"",style:m,children:Object(n.jsx)("div",{id:"progressSection",style:x,children:this.state.currentHp})}),Object(n.jsx)("button",{className:"ml-1",onClick:function(){return e.changeHealth(1)},children:"+1"}),Object(n.jsx)("button",{className:"ml-1",onClick:function(){return e.changeHealth(5)},children:"+5"})]})}},{key:"changeHealth",value:function(e){var t=this.props.maxHp;this.state.currentHp+e>t?(j()("#progressSection").width("100%"),j()("#progressSection").css("background-color","purple")):(j()("#progressSection").width("".concat((this.state.currentHp+e)/t*100,"%")),j()("#progressSection").css("background-color","#b1000d")),this.setState((function(t){return{currentHp:t.currentHp+e}}))}}]),a}(r.a.Component),O=a(13),g=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).props=e,n.state={roll:""},n.rollStat=n.rollStat.bind(Object(d.a)(n)),n}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.statValue,t=this.props.name,a=Object(O.a)(Array(e));return Object(n.jsxs)("div",{className:"d-flex flex-row statRow",onClick:this.rollStat,children:[Object(n.jsx)("div",{className:"text-right col-2",children:t}),a.map((function(e){return Object(n.jsx)("div",{className:"mr-1 my-1 statPip"},e)})),Object(n.jsx)("div",{className:"ml-5 text-right",id:"",children:this.state.roll})]})}},{key:"rollStat",value:function(){var e=this,t=this.props.statValue,a=Math.floor(6*Math.random())+1+t;this.setState({roll:Object(n.jsxs)("div",{className:"d-flex flex-row",children:[Object(n.jsx)("div",{className:"spinText",children:"\ud83c\udfb2"}),"+",t]})}),setTimeout((function(){e.setState({roll:a})}),2e3),setTimeout((function(){e.setState({roll:""})}),6e3)}}]),a}(r.a.Component),f=a.p+"static/media/canvas.732b7ab8.jpg",k=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).props=e,n.state={select:"",input:"",inputField:""},n.handleInputChange=n.handleInputChange.bind(Object(d.a)(n)),n.getStatIfInJson=n.getStatIfInJson.bind(Object(d.a)(n)),n}return Object(h.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(o.a)({},n,a))}},{key:"getStatIfInJson",value:function(){var e=this.state.inputField;return this.props.characterJson.stats[e]}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"m-2 p-2 border border-dark",style:{backgroundImage:"url(".concat(f)},children:[Object(n.jsx)("h1",{className:"text-center",children:this.props.characterJson.name}),Object(n.jsx)(v,{maxHp:this.props.characterJson.stats.maxHp}),Object(n.jsx)(g,{name:"Defense",statValue:this.props.characterJson.stats.defense}),Object(n.jsxs)("div",{className:"d-flex flex-column my-4",children:[Object(n.jsx)(g,{name:"Nimble",statValue:this.props.characterJson.stats.nimble}),Object(n.jsx)(g,{name:"Mind",statValue:this.props.characterJson.stats.mind}),Object(n.jsx)(g,{name:"Brawn",statValue:this.props.characterJson.stats.brawn})]}),Object(n.jsx)("div",{className:"d-flex flex-row",children:Object(n.jsx)("div",{className:"text-right",children:"actions: "})}),Object(n.jsx)("div",{className:"progress",children:Object(n.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated bg-secondary",role:"progressbar",style:{width:"33%"},"aria-valuenow":"10","aria-valuemin":"0","aria-valuemax":"100"})}),Object(n.jsx)("input",{name:"inputField",type:"text",value:this.state.inputField,onChange:this.handleInputChange}),Object(n.jsx)("div",{children:this.getStatIfInJson()}),Object(n.jsxs)("select",{name:"select",type:"text",value:this.state.select,onChange:this.handleInputChange,children:[Object(n.jsx)("option",{value:""}),Object(n.jsx)("option",{value:"attack",children:"attack"}),Object(n.jsx)("option",{value:"block",children:"block"}),Object(n.jsx)("option",{value:"hinder",children:"hinder"}),Object(n.jsx)("option",{value:"help",children:"help"}),Object(n.jsx)("option",{value:"study",children:"study"})]}),Object(n.jsx)("div",{children:this.state.select})]})}}]),a}(r.a.Component),y={character_id:67,name:"Djee-Wei",stats:{maxHp:28,characterLevel:3,nimble:0,brawn:3,mind:1,armor:"medium",defense:2,speed:5},pillars:["Indominable Will","Arts and Wonder"],passives:[{name:"earthen form (defense)",description:"<i>Your body is composed of dirt and stone.</i> <b>+1 defense</b>",pointCost:2}],actives:[{name:"Heavy Throw",description:"<i>You lift a stone, compacted earth, or heavy object, and throw it.</i> <b>range: 3. dmg: 4d4 bludgeoning.</b>",pointCost:2,actions:3}],abilityPoints:12};var w=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(k,{characterJson:y})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,26)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};a(21),a(22);i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),C()}},[[24,1,2]]]);
//# sourceMappingURL=main.1e42f968.chunk.js.map