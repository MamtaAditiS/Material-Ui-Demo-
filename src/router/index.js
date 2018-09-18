import Vue from 'vue'
import Router from 'vue-router'
import upload from '@/components/upload'
import uploader from '@websanova/vue-upload'

Vue.use(Router)
Vue.use(uploader)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'upload',
      component: upload
    }
  ]
})
