(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{383:function(t,e,n){var content=n(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("4b459064",content,!0,{sourceMap:!1})},390:function(t,e,n){t.exports=n.p+"img/reports3.07c5ac5.png"},392:function(t,e){},394:function(t,e,n){"use strict";n(383)},395:function(t,e,n){var c=n(23)(!1);c.push([t.i,".contenedor-fechas[data-v-32dba61d]{display:flex;justify-content:space-evenly}.active[data-v-32dba61d]{color:#fff}#tabla[data-v-32dba61d]{margin:20px}",""]),t.exports=c},399:function(t,e,n){"use strict";n.r(e);var c=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"flex","justify-content":"center"}},[e("div",[e("img",{attrs:{src:n(390),alt:"",width:"400px"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",{staticClass:"text-center",staticStyle:{color:"red"}},[t._v("No se han encontrado registro")])])}],o=(n(10),n(6),n(25),n(68),n(34),n(403)),r=n.n(o),l=n(393),d=n.n(l),v=n(407),h=n(385),f=n.n(h),m={name:"DescargaReportes",data:function(){return{menuFechaInicio:!1,menuFechaFin:!1,dateInicio:"",dateFin:"",chipActivo:0,usuarios:[],usuariosFiltrados:[],search:"",headers:[{text:"Código",value:"code"},{text:"Nombres",value:"name"},{text:"Apellidos",value:"last_name"},{text:"Dirección",value:"address"},{text:"Edad",value:"age"},{text:"Teléfono",value:"phone"},{text:"Email",value:"email"},{text:"Semestre",value:"semester"},{text:"Carrera",value:"university_career"}]}},created:function(){this.establecerHoy(),this.obtenerUsuarios(),this.filtrarUsuarios()},watch:{dateInicio:function(){this.filtrarUsuarios()},dateFin:function(){this.filtrarUsuarios()}},methods:{obtenerUsuarios:function(){var t=this;f.a.post("http://18.235.152.56/students",{api_token:"Uhln2BZLQO6FcC0peIBSVmMNqA2KicvYhAXBepBVAZwRVwBxhnayKuQIb5sPYBEVRG7aXlYBQsNnTxNGzm6Z7eE4z18nowIKXW4rc9yCLuSvdahh0z5tuUH0yCO5fwJFG8hq3PcWuSdNMc0mUVKtSz"}).then((function(e){t.usuarios=e.data.data})).catch((function(t){console.warn(response)}))},filtrarUsuarios:function(){var t=this,e=this.usuarios.filter((function(e){return null!==e.created_at?e.created_at.split("T")[0]<=t.dateFin&&e.created_at.split("T")[0]>=t.dateInicio:""}));this.usuariosFiltrados=e},establecerHoy:function(){this.chipActivo=0;var t=(new Date).toISOString().split("T")[0];this.dateInicio=t,this.dateFin=t},establecerSemana:function(){this.chipActivo=1;var t=new Date,e=t.toISOString().split("T")[0];this.dateFin=e;var n=new Date;n.setDate(t.getDate()-7);var c=n.toISOString().split("T")[0];this.dateInicio=c},establecerMes:function(){this.chipActivo=2;var t=new Date,e=t.toISOString().split("T")[0];this.dateFin=e;var n=new Date;n.setDate(t.getDate()-30);var c=n.toISOString().split("T")[0];this.dateInicio=c},descargarPDf:function(t,e){document.getElementsByClassName("v-data-footer")[0].style="display:none",window.html2canvas=d.a,new v.a("l","pt","a4").html(document.getElementById("tabla"),{callback:function(n){n.save("report ".concat(t," to ").concat(e,".pdf"))}})},exportExcel:function(){var data=r.a.utils.json_to_sheet(this.usuariosFiltrados),t=r.a.utils.book_new(),e="report ".concat(this.dateInicio," to ").concat(this.dateFin);r.a.utils.book_append_sheet(t,data,e),r.a.writeFile(t,"".concat(e,".xlsx"))}}},_=(n(394),n(71)),x=n(87),F=n.n(x),y=n(186),k=n(430),I=n(366),w=n(253),S=n(396),C=n(522),D=n(523),V=n(183),E=n(426),T=n(519),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-4 mt-5"},[n("div",{staticClass:"contenedor-fechas"},[n("div",[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var c=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"Fecha Inicio","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.dateInicio,callback:function(e){t.dateInicio=e},expression:"dateInicio"}},"v-text-field",o,!1),c))]}}]),model:{value:t.menuFechaInicio,callback:function(e){t.menuFechaInicio=e},expression:"menuFechaInicio"}},[t._v(" "),n("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menuFechaInicio=!1}},model:{value:t.dateInicio,callback:function(e){t.dateInicio=e},expression:"dateInicio"}})],1)],1),t._v(" "),n("div",[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var c=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"Fecha Fin","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.dateFin,callback:function(e){t.dateFin=e},expression:"dateFin"}},"v-text-field",o,!1),c))]}}]),model:{value:t.menuFechaFin,callback:function(e){t.menuFechaFin=e},expression:"menuFechaFin"}},[t._v(" "),n("v-date-picker",{attrs:{color:"green lighten-1","header-color":"primary","no-title":""},on:{input:function(e){t.menuFechaFin=!1}},model:{value:t.dateFin,callback:function(e){t.dateFin=e},expression:"dateFin"}})],1)],1)]),t._v(" "),n("div",[n("v-card-text",{staticStyle:{display:"flex","justify-content":"center"}},[n("v-chip",{staticClass:"mr-2",attrs:{color:"primary",outlined:""},on:{click:t.establecerHoy}},[0==t.chipActivo?n("v-avatar",{attrs:{left:""}},[n("v-icon",[t._v("mdi-checkbox-marked-circle")])],1):t._e(),t._v("\n          Hoy\n        ")],1),t._v(" "),n("v-chip",{staticClass:"mr-2",attrs:{color:"secondary",outlined:""},on:{click:t.establecerSemana}},[1==t.chipActivo?n("v-avatar",{attrs:{left:""}},[n("v-icon",[t._v("mdi-checkbox-marked-circle")])],1):t._e(),t._v("\n          Esta Semana\n        ")],1),t._v(" "),n("v-chip",{attrs:{color:"green",outlined:""},on:{click:t.establecerMes}},[2==t.chipActivo?n("v-avatar",{attrs:{left:""}},[n("v-icon",[t._v("mdi-checkbox-marked-circle")])],1):t._e(),t._v("\n          Este Mes\n        ")],1)],1)],1),t._v(" "),t.usuariosFiltrados.length>0?n("div",[n("div",{staticClass:"mt-15",staticStyle:{display:"flex","justify-content":"center"}},[n("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"red"},on:{click:function(e){return t.descargarPDf(t.dateInicio,t.dateFin)}}},[t._v("\n            Descargar PDF\n            "),n("v-icon",{attrs:{right:"",dark:""}},[t._v("\n              mdi-cloud-download\n            ")])],1)],1),t._v(" "),n("div",{staticClass:"mt-15",staticStyle:{display:"flex","justify-content":"center"}},[n("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"green"},on:{click:t.exportExcel}},[t._v("\n            Descargar Excel\n            "),n("v-icon",{attrs:{right:"",dark:""}},[t._v("\n              mdi-cloud-download\n            ")])],1)],1),t._v(" "),n("v-card",{staticStyle:{visibility:"hidden"}},[n("v-card-title",[n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("v-data-table",{attrs:{id:"tabla",headers:t.headers,items:t.usuariosFiltrados,search:t.search}})],1)],1):n("div",[t._m(0),t._v(" "),t._m(1)])])}),c,!1,null,"32dba61d",null);e.default=component.exports;F()(component,{VAvatar:y.a,VBtn:k.a,VCard:I.a,VCardText:w.a,VCardTitle:w.b,VChip:S.a,VDataTable:C.a,VDatePicker:D.a,VIcon:V.a,VMenu:E.a,VTextField:T.a})},405:function(t,e){},406:function(t,e){}}]);