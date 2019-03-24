import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

const Blog = () => import('./views/Blog.vue');
const Post = () => import('./views/Post.vue');

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/posts',
      name: 'blog',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Blog
    }, {
      path: '/posts/:id',
      name: 'post',
      component: Post
    }
  ]
})
