(function(t){function e(e){for(var r,n,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(r=!1)}r&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},s={app:0},i=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"030b":function(t,e,a){},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Nova fatura")]),t._v(" | "),a("router-link",{attrs:{to:"/previousinvoices"}},[t._v("Faturas anteriores")])],1),a("router-view")],1)},i=[],n=(a("034f"),a("2877")),o={},c=Object(n["a"])(o,s,i,!1,null,null,null),l=c.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home mt-4"},[a("h1",{staticClass:"mb-4 title"},[t._v("Importe sua fatura em csv ou em json")]),a("div",{staticClass:"columns mt-4 "},[a("div",{staticClass:"column is-three-fifths is-offset-one-fifth"},[void 0!=t.error?a("div",[a("article",{staticClass:"message is-danger"},[a("div",{staticClass:"message-header"},[a("p",[t._v(t._s(t.error))]),a("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(e){return t.closeError()}}})])])]):t._e(),a("form",{staticClass:"column is-half is-offset-one-quarter",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.sendFile(e)}}},[a("div",{staticClass:"file is-centered is-boxed is-success has-name"},[a("label",{staticClass:"file-label"},[a("input",{ref:"file",staticClass:"file-input",attrs:{type:"file"},on:{change:t.selectFile}}),t._m(0),t.file?a("span",{staticClass:"file-name"},[t._v(t._s(t.file.name))]):t._e(),t._m(1)])])])])]),a("div",{class:{modal:!0,"is-active":t.ShowModal}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Arquivo importado!")]),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return t.closeModal()}}})]),t._m(2),a("footer",{staticClass:"modal-card-foot columns"},[a("div",{staticClass:"column"},[a("button",{staticClass:"button",on:{click:function(e){return t.closeModal()}}},[t._v("Cancelar")])]),a("div",{staticClass:"column is-9 is-offset-4"},[a("router-link",{attrs:{to:{name:"ViewInvoice",params:{inv:this.FileIndex,date:this.DateInvoice}}}},[a("button",{staticClass:"button is-success"},[t._v("Próximo")])])],1)])])])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"file-cta"},[a("span",{staticClass:"file-icon"},[a("i",{staticClass:"fas fa-upload"})]),a("span",{staticClass:"file-label"},[t._v(" Escolha um arquivo...")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field mt-4"},[a("button",{staticClass:"button is-info is-fullwidth"},[t._v("Importar")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"modal-card-body"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},[t._v(" Seu arquivo está pronto para ser usado, clique em próximo. ")])])])])}],v=a("1da1"),f=(a("96cf"),a("c740"),a("1276"),a("ac1f"),a("bc3a")),m=a.n(f),h={name:"Home",components:{},data:function(){return{file:"",error:void 0,errorMessage:"",ShowModal:!1,FileIndex:-1,DateInvoice:""}},methods:{selectFile:function(){var t=this.$refs.file.files[0];this.file=t},sendFile:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var a,r,s,i,n,o,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("file",t.file),e.prev=2,e.next=5,m.a.post("https://creditcard-h-api.herokuapp.com/upload",a);case 5:return r=e.sent,t.file="",t.error=void 0,t.ShowModal=!0,s=void 0,e.prev=10,e.next=13,m.a.get("https://creditcard-h-api.herokuapp.com/files");case 13:i=e.sent,i=i.data,s=i.findIndex((function(t){return t==r.data.file.filename})),t.FileIndex=s,e.next=25;break;case 19:e.prev=19,e.t0=e["catch"](10),t.ShowModal=!1,console.log(e.t0),t.error="Houve um erro interno",t.file="";case 25:if(n=r.data.file.filename,console.log(n),o=n.split("-")[2].split(".")[0],c=n.split("-")[1],t.DateInvoice=o+"/"+c,l=r.data.file.mimetype,"application/vnd.ms-excel"!=l){e.next=42;break}return e.prev=32,e.next=35,m.a.post("https://creditcard-h-api.herokuapp.com/convert/"+s);case 35:console.log("Convertido para json"),e.next=42;break;case 38:e.prev=38,e.t1=e["catch"](32),t.error=e.t1.response.data.err,t.file="";case 42:e.next=48;break;case 44:e.prev=44,e.t2=e["catch"](2),t.error=e.t2.response.data.err,t.file="";case 48:case"end":return e.stop()}}),e,null,[[2,44],[10,19],[32,38]])})))()},closeError:function(){this.error=void 0},closeModal:function(){this.ShowModal=!1}}},b=h,_=(a("8ebd"),Object(n["a"])(b,d,p,!1,null,"9bba30a6",null)),C=_.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[void 0!=t.error?a("div",[a("article",{staticClass:"message is-danger"},[a("div",{staticClass:"message-header"},[a("p",[t._v(t._s(t.error))]),a("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(e){return t.closeError()}}})])])]):t._e(),a("div",{staticClass:"columns mt-5"},[a("div",{staticClass:"column is-two-thirds"},[a("table",{staticClass:"table is-bordered container is-striped"},[a("div",{staticStyle:{height:"70vh",overflow:"auto"}},[t._m(0),a("tbody",t._l(t.FullInvoice,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.Titulo))]),a("td",[t._v(t._s(e.Categoria))]),a("td",[t._v(t._s(e.Valor))]),a("td",[t._v(" "+t._s(e.Data.split("-")[2])+"/"+t._s(e.Data.split("-")[1])+" ")]),1===e.Pai?a("td",[a("input",{attrs:{type:"checkbox",checked:""},on:{click:function(a){return t.MarkDad(e.id)}}})]):a("td",[a("input",{attrs:{type:"checkbox"},on:{click:function(a){return t.MarkDad(e.id)}}})])])})),0)]),a("div",{staticClass:"field is-grouped"},[a("p",{staticClass:"control is-expanded"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input",attrs:{type:"text",placeholder:"Título"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),a("p",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"input",attrs:{type:"number",placeholder:"Valor"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}})]),a("p",{staticClass:"control"},[a("button",{staticClass:"button is-info",on:{click:function(e){return t.AddDad()}}},[t._v(" Adicionar ")])])])])]),a("div",{staticClass:"column"},[a("h1",{staticClass:"title"},[t._v("Fatura de: "+t._s(this.$route.params.date))]),a("div",{staticClass:"resume"},[a("small",[t._v("Valor Pai: ")]),a("small",{staticClass:"value"},[t._v(" R$ "+t._s(t.TotalDad))]),a("hr"),a("small",[t._v("Valor Henrique: ")]),a("small",{staticClass:"value"},[t._v("R$ "+t._s(t.TotalMe))]),a("hr"),a("small",[t._v("Valor Total: ")]),a("small",{staticClass:"value"},[t._v(" R$ "+t._s(t.TotalCard))])])])])])},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Título")]),a("th",[t._v("Categoria")]),a("th",[t._v("Valor")]),a("th",[t._v("Data")]),a("th",{staticClass:"dad"},[t._v("Pai")])])])}],w=(a("a9e3"),a("b680"),{name:"ViewInvoice",created:function(){var t=this;void 0==this.$route.params.inv&&this.$router.push({name:"PreviousInvoices"}),m.a.get("https://creditcard-h-api.herokuapp.com/faturas/"+this.$route.params.inv).then((function(e){t.FullInvoice=e.data,t.Calculate()})).catch((function(t){console.log(t)}))},data:function(){return{FullInvoice:[],TotalCard:0,TotalDad:0,TotalMe:0,error:void 0,title:"",amount:0}},methods:{MarkDad:function(t){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,m.a.put("https://creditcard-h-api.herokuapp.com/faturas/",{inv:e.$route.params.inv,id:t});case 3:e.Calculate(),a.next=10;break;case 6:a.prev=6,a.t0=a["catch"](0),console.log(a.t0),e.$router.push({name:"PreviousInvoices"});case 10:case"end":return a.stop()}}),a,null,[[0,6]])})))()},AddDad:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post("https://creditcard-h-api.herokuapp.com/faturas/pai/"+t.$route.params.inv,{title:t.title,amount:Number(t.amount)});case 3:t.error=void 0,t.UpdateList(),t.Calculate(),t.title="",t.amount=0,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),t.error=e.t0.response.data.err;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},Calculate:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://creditcard-h-api.herokuapp.com/faturas/totalizer/"+t.$route.params.inv);case 2:a=e.sent,t.TotalCard=a.data.TotalCard.toFixed(2),t.TotalDad=a.data.TotalDad.toFixed(2),t.TotalMe=a.data.TotalMe.toFixed(2);case 6:case"end":return e.stop()}}),e)})))()},UpdateList:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:void 0==t.$route.params.inv&&t.$router.push({name:"PreviousInvoices"}),m.a.get("https://creditcard-h-api.herokuapp.com/faturas/"+t.$route.params.inv).then((function(e){t.FullInvoice=e.data,t.Calculate()})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},closeError:function(){this.error=void 0}}}),k=w,y=(a("5c3b"),Object(n["a"])(k,g,x,!1,null,"7e49ebe8",null)),I=y.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-4"},[a("h1",{staticClass:"mb-4 title"},[t._v("Faturas anteriores")]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half is-offset-one-quarter"},t._l(t.ListFiles,(function(e){return a("div",{key:e.id},[a("div",{staticClass:"card mt-4"},[a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[t._v(" "+t._s(e.split(".")[0])+" ")]),a("router-link",{attrs:{to:{name:"ViewInvoice",params:{inv:t.FileIndex,date:t.DateInvoice}}}},[a("button",{staticClass:"button is-primary is-medium",on:{click:function(a){return t.getIndex(e)}}},[t._v("Acessar "),a("i",{staticClass:"ml-2 fas fa-arrow-right"})])])],1)])])})),0)])])},$=[],j={data:function(){return{ListFiles:[],FileIndex:-1,DateInvoice:""}},created:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://creditcard-h-api.herokuapp.com/files");case 3:a=e.sent,t.ListFiles=a.data,e.next=13;break;case 7:e.prev=7,e.t0=e["catch"](0),t.ShowModal=!1,console.log(e.t0),t.error="Houve um erro interno",t.file="";case 13:case"end":return e.stop()}}),e,null,[[0,7]])})))()},methods:{getIndex:function(t){var e=this.ListFiles.findIndex((function(e){return e==t}));this.FileIndex=e;var a=this.ListFiles[this.FileIndex],r=a.split("-")[2].split(".")[0],s=a.split("-")[1];this.DateInvoice=r+"/"+s}}},M=j,O=(a("c06a"),Object(n["a"])(M,F,$,!1,null,"13da45b0",null)),D=O.exports;r["a"].use(u["a"]);var T=[{path:"/",name:"Home",component:C},{path:"/newinvoice",name:"ViewInvoice",component:I},{path:"/previousinvoices",name:"PreviousInvoices",component:D}],P=new u["a"]({mode:"history",base:"/",routes:T}),R=P;a("92c6");r["a"].config.productionTip=!1,new r["a"]({router:R,render:function(t){return t(l)}}).$mount("#app")},"5c3b":function(t,e,a){"use strict";a("8ce7")},"85ec":function(t,e,a){},"8ce7":function(t,e,a){},"8ebd":function(t,e,a){"use strict";a("8fbd")},"8fbd":function(t,e,a){},c06a:function(t,e,a){"use strict";a("030b")}});
//# sourceMappingURL=app.3c8fdf82.js.map