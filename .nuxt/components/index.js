export const Aside = () => import('../..\\components\\Aside.vue' /* webpackChunkName: "components/aside" */).then(c => wrapFunctional(c.default || c))
export const DescargaReportes = () => import('../..\\components\\DescargaReportes.vue' /* webpackChunkName: "components/descarga-reportes" */).then(c => wrapFunctional(c.default || c))
export const Grafica = () => import('../..\\components\\Grafica.vue' /* webpackChunkName: "components/grafica" */).then(c => wrapFunctional(c.default || c))
export const SelectoresFechas = () => import('../..\\components\\SelectoresFechas.vue' /* webpackChunkName: "components/selectores-fechas" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
