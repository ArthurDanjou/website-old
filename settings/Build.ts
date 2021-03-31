// Build Configuration: https://go.nuxtjs.dev/config-build
export default {
  extend(config: any) {
    config.module.rules.push({
      test: /\.vue$/,
      loader: 'vue-windicss-preprocess',
      options: {
        compile: true,                // false: interpretation mode; true: compilation mode
        globalPreflight: true,         // set preflight style is global or scoped
        globalUtility: true,           // set utility style is global or scoped
        prefix: 'windi-'               // set compilation mode style prefix
      }
    })
  }
}
