
import Vue from 'vue'
import App from './App'
import router from './router'
var VueMaterial = require('vue-material')
const VueUploadComponent = require('vue-upload-component')


Vue.use(VueMaterial)
Vue.component('file-upload', VueUploadComponent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
