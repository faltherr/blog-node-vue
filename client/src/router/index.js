import Vue from 'vue'
import Router from 'vue-router'
import AllPosts from '@/components/AllPosts'
import CreatePost from '@/components/CreatePost'
import EditPost from '@/components/EditPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllPosts',
      component: AllPosts
    },
    {
      path: '/create',
      name: 'CreatePost',
      component: CreatePost
    },
    {
      path: '/edit',
      name: 'EditPost',
      component: EditPost
    }
  ]
})
