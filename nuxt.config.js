export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'kompletecare',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/custom.css' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
      },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      }
    ],
    script: [
      {
      src: '/js/bootstrap.bundle.min.jquery.js',
      type: 'text/javascript'
      },
      {
      src: '/js/bootstrap.bundle.min.popper.js',
      type: 'text/javascript'
      },
      {
      src: '/js/bootstrap.bundle.min.js',
      type: 'text/javascript'
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  //components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [  
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
