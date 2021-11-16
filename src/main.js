// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { BootstrapVue, IconsPlugin} from 'bootstrap-vue'
// import Vuetify from 'vuetify'

import App from './App'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // vuetify: new Vuetify(),
  router,
  components: { App },
  template: '<App/>'
})
