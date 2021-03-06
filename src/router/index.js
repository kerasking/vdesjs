import Vue from 'vue'
import Router from 'vue-router'
import editor from '@/page/editor'
import phonePreview from '@/page/phonePreview'
import test from '@/page/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'editor',
      component: editor
    },
    {
      path: '/phonePreview',
      name: 'phonePreview',
      component: phonePreview
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
  ]
})
