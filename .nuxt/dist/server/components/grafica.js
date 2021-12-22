exports.ids = [2];
exports.modules = {

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
/* harmony import */ var _src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var _mixins_sizeable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3);
// Styles

 // Components


 // Mixins






 // Utilities


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_sizeable__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], _mixins_routable__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_5__[/* factory */ "a"])('chipGroup'), Object(_mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__[/* factory */ "b"])('inputValue')).extend({
  name: 'v-chip',
  props: {
    active: {
      type: Boolean,
      default: true
    },
    activeClass: {
      type: String,

      default() {
        if (!this.chipGroup) return '';
        return this.chipGroup.activeClass;
      }

    },
    close: Boolean,
    closeIcon: {
      type: String,
      default: '$delete'
    },
    closeLabel: {
      type: String,
      default: '$vuetify.close'
    },
    disabled: Boolean,
    draggable: Boolean,
    filter: Boolean,
    filterIcon: {
      type: String,
      default: '$complete'
    },
    label: Boolean,
    link: Boolean,
    outlined: Boolean,
    pill: Boolean,
    tag: {
      type: String,
      default: 'span'
    },
    textColor: String,
    value: null
  },
  data: () => ({
    proxyClass: 'v-chip--active'
  }),
  computed: {
    classes() {
      return {
        'v-chip': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].options.computed.classes.call(this),
        'v-chip--clickable': this.isClickable,
        'v-chip--disabled': this.disabled,
        'v-chip--draggable': this.draggable,
        'v-chip--label': this.label,
        'v-chip--link': this.isLink,
        'v-chip--no-color': !this.color,
        'v-chip--outlined': this.outlined,
        'v-chip--pill': this.pill,
        'v-chip--removable': this.hasClose,
        ...this.themeClasses,
        ...this.sizeableClasses,
        ...this.groupClasses
      };
    },

    hasClose() {
      return Boolean(this.close);
    },

    isClickable() {
      return Boolean(_mixins_routable__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].options.computed.isClickable.call(this) || this.chipGroup);
    }

  },

  created() {
    const breakingProps = [['outline', 'outlined'], ['selected', 'input-value'], ['value', 'active'], ['@input', '@active.sync']];
    /* istanbul ignore next */

    breakingProps.forEach(([original, replacement]) => {
      if (this.$attrs.hasOwnProperty(original)) Object(_util_console__WEBPACK_IMPORTED_MODULE_10__[/* breaking */ "a"])(original, replacement, this);
    });
  },

  methods: {
    click(e) {
      this.$emit('click', e);
      this.chipGroup && this.toggle();
    },

    genFilter() {
      const children = [];

      if (this.isActive) {
        children.push(this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
          staticClass: 'v-chip__filter',
          props: {
            left: true
          }
        }, this.filterIcon));
      }

      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_2__[/* VExpandXTransition */ "b"], children);
    },

    genClose() {
      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        staticClass: 'v-chip__close',
        props: {
          right: true,
          size: 18
        },
        attrs: {
          'aria-label': this.$vuetify.lang.t(this.closeLabel)
        },
        on: {
          click: e => {
            e.stopPropagation();
            e.preventDefault();
            this.$emit('click:close');
            this.$emit('update:active', false);
          }
        }
      }, this.closeIcon);
    },

    genContent() {
      return this.$createElement('span', {
        staticClass: 'v-chip__content'
      }, [this.filter && this.genFilter(), this.$slots.default, this.hasClose && this.genClose()]);
    }

  },

  render(h) {
    const children = [this.genContent()];
    let {
      tag,
      data
    } = this.generateRouteLink();
    data.attrs = { ...data.attrs,
      draggable: this.draggable ? 'true' : undefined,
      tabindex: this.chipGroup && !this.disabled ? 0 : data.attrs.tabindex
    };
    data.directives.push({
      name: 'show',
      value: this.active
    });
    data = this.setBackgroundColor(this.color, data);
    const color = this.textColor || this.outlined && this.color;
    return h(tag, this.setTextColor(color, data), children);
  }

}));

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("edc7f98e", content, true)

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:\"\";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(202);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("dd31c928", content, true, context)
};

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_nuxtjs_vuetify_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grafica_vue_vue_type_style_index_0_id_363c43ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(191);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_nuxtjs_vuetify_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grafica_vue_vue_type_style_index_0_id_363c43ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_nuxtjs_vuetify_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grafica_vue_vue_type_style_index_0_id_363c43ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_nuxtjs_vuetify_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grafica_vue_vue_type_style_index_0_id_363c43ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_nuxtjs_vuetify_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grafica_vue_vue_type_style_index_0_id_363c43ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".contenedor-fechas[data-v-363c43ef]{display:flex;justify-content:space-evenly}.active[data-v-363c43ef]{color:#fff}.contenedor-chart div[data-v-363c43ef]{width:700px;height:400px;padding-bottom:15px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Grafica.vue?vue&type=template&id=363c43ef&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mb-4 mt-5"},[_vm._ssrNode("<div data-v-363c43ef>","</div>",[_c('v-card-text',{staticStyle:{"display":"flex","justify-content":"center"}},[_c('v-chip',{staticClass:"mr-2",attrs:{"color":"primary","outlined":""},on:{"click":_vm.establecerHoy}},[(_vm.chipActivo == 0)?_c('v-avatar',{attrs:{"left":""}},[_c('v-icon',[_vm._v("mdi-checkbox-marked-circle")])],1):_vm._e(),_vm._v("\n          Ultima Semana\n        ")],1),_vm._v(" "),_c('v-chip',{staticClass:"mr-2",attrs:{"color":"secondary","outlined":""},on:{"click":_vm.establecerSemana}},[(_vm.chipActivo == 1)?_c('v-avatar',{attrs:{"left":""}},[_c('v-icon',[_vm._v("mdi-checkbox-marked-circle")])],1):_vm._e(),_vm._v("\n          Ultimo Mes\n        ")],1),_vm._v(" "),_c('v-chip',{attrs:{"color":"green","outlined":""},on:{"click":_vm.establecerMes}},[(_vm.chipActivo == 2)?_c('v-avatar',{attrs:{"left":""}},[_c('v-icon',[_vm._v("mdi-checkbox-marked-circle")])],1):_vm._e(),_vm._v("\n          Ultimos 3 Meses\n        ")],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"contenedor-chart\" data-v-363c43ef>","</div>",[_c('GChart',{attrs:{"type":"ColumnChart","data":_vm.chartData,"options":_vm.chartOptions}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Grafica.vue?vue&type=template&id=363c43ef&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(121);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "vue-google-charts"
var external_vue_google_charts_ = __webpack_require__(127);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Grafica.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Graficavue_type_script_lang_js_ = ({
  name: 'Grafica',
  components: {
    GChart: external_vue_google_charts_["GChart"]
  },
  data: () => ({
    chipActivo: 0,
    usuarios: [],
    usuariosFiltrados: [],
    chartData: [],
    chartOptions: {
      chart: {
        title: 'Company Performance',
        subtitle: 'Sales, Expenses, and Profit: 2014-2017'
      }
    },
    datosEstadisticos: []
  }),

  created() {
    this.obtenerUsuarios(), this.establecerHoy(), this.filtrarUsuarios();
  },

  watch: {
    dateInicio: function () {
      this.filtrarUsuarios();
    },
    dateFin: function () {
      this.filtrarUsuarios();
    }
  },
  methods: {
    obtenerUsuarios() {
      external_axios_default.a.post('http://18.235.152.56/students', {
        api_token: "Uhln2BZLQO6FcC0peIBSVmMNqA2KicvYhAXBepBVAZwRVwBxhnayKuQIb5sPYBEVRG7aXlYBQsNnTxNGzm6Z7eE4z18nowIKXW4rc9yCLuSvdahh0z5tuUH0yCO5fwJFG8hq3PcWuSdNMc0mUVKtSz"
      }).then(response => {
        this.usuarios = response.data.data;
      }).catch(error => {
        console.warn(response);
      }); //this.usuarios = []
    },

    filtrarUsuarios() {
      const filtroUsuarios = this.usuarios.filter(item => item.created_at !== null ? item.created_at.split('T')[0] <= this.dateFin && item.created_at.split('T')[0] >= this.dateInicio : '');
      this.usuariosFiltrados = filtroUsuarios;
    },

    establecerHoy() {
      this.chipActivo = 0;
      const fechaInicio = new Date();
      fechaInicio.setDate(fechaInicio.getDate() - 7);
      const fechaHoy = new Date();
      var datos = [['fecha', 'cantidad alumnos registrador por fecha']];
      var i = 0;

      while (fechaInicio <= fechaHoy) {
        for (const usuario in this.usuarios) {
          if (this.usuarios[usuario].created_at !== null) {
            var created = this.usuarios[usuario].created_at.split('T')[0];

            if (created == fechaInicio.toISOString().split('T')[0]) {
              i++;
            }
          }
        }

        datos.push([fechaInicio.toISOString().split('T')[0].substr(5, 8), i]);
        i = 0;
        fechaInicio.setDate(fechaInicio.getDate() + 1);
      }

      this.chartData = datos;
    },

    establecerSemana() {
      this.chipActivo = 1;
      const fechaInicio = new Date();
      fechaInicio.setDate(fechaInicio.getDate() - 30);
      const fechaHoy = new Date();
      var datos = [['fecha', 'cantidad alumnos registrador por fecha']];
      var i = 0;

      while (fechaInicio <= fechaHoy) {
        for (const usuario in this.usuarios) {
          if (this.usuarios[usuario].created_at !== null) {
            var created = this.usuarios[usuario].created_at.split('T')[0];

            if (created == fechaInicio.toISOString().split('T')[0]) {
              i++;
            }
          }
        }

        datos.push([fechaInicio.toISOString().split('T')[0].substr(5, 8), i]);
        i = 0;
        fechaInicio.setDate(fechaInicio.getDate() + 1);
      }

      this.chartData = datos;
    },

    establecerMes() {
      this.chipActivo = 2;
      const fechaInicio = new Date();
      fechaInicio.setDate(fechaInicio.getDate() - 93);
      const fechaHoy = new Date();
      var datos = [['fecha', 'cantidad alumnos registrador por fecha']];
      var i = 0;

      while (fechaInicio <= fechaHoy) {
        for (const usuario in this.usuarios) {
          if (this.usuarios[usuario].created_at !== null) {
            var created = this.usuarios[usuario].created_at.split('T')[0];

            if (created == fechaInicio.toISOString().split('T')[0]) {
              i++;
            }
          }
        }

        datos.push([fechaInicio.toISOString().split('T')[0].substr(5, 8), i]);
        i = 0;
        fechaInicio.setDate(fechaInicio.getDate() + 1);
      }

      this.chartData = datos;
    }

  }
});
// CONCATENATED MODULE: ./components/Grafica.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Graficavue_type_script_lang_js_ = (Graficavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@nuxtjs/vuetify/node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(17);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var VCard = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(35);

// CONCATENATED MODULE: ./components/Grafica.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(201)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Graficavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "363c43ef",
  "f5124fc4"
  
)

/* harmony default export */ var Grafica = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VAvatar: VAvatar["a" /* default */],VCardText: VCard["a" /* VCardText */],VChip: VChip["a" /* default */],VIcon: VIcon["a" /* default */]})


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VCardActions */
/* unused harmony export VCardSubtitle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VCardText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VCardTitle; });
/* harmony import */ var _VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


const VCardActions = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "g"])('v-card__actions');
const VCardSubtitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "g"])('v-card__subtitle');
const VCardText = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "g"])('v-card__text');
const VCardTitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "g"])('v-card__title');

/* unused harmony default export */ var _unused_webpack_default_export = ({
  $_vuetify_subcomponents: {
    VCard: _VCard__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    VCardActions,
    VCardSubtitle,
    VCardText,
    VCardTitle
  }
});

/***/ })

};;
//# sourceMappingURL=grafica.js.map