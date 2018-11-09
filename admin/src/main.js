// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'
import VueSweetalert2 from 'vue-sweetalert2'
// Import boostrap and css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/client/styles.css'
import 'jquery/dist/jquery.min'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.min'
// Import vue-good-table
import VueGoodTablePlugin from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'
Vue.use(VueGoodTablePlugin)
Vue.config.productionTip = false
Vue.use(VeeValidate)
// eslint-disable-next-line
/* eslint-disable */
Vue.use(VueSweetalert2)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
