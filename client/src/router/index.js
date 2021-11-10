import Vue from 'vue'
import Router from 'vue-router'
import CreatePost from '@/components/CreatePost'
import PostsContainer from '@/components/PostsContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllPosts',
      component: PostsContainer
    },
    {
      path: '/create',
      name: 'CreatePost',
      component: CreatePost
    },
    {
      path: '/edit',
      name: 'EditPost',
      component: PostsContainer
    }
  ]
})
