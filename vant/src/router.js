import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Button from './views/Button.vue'
import Course from './views/Course.vue'
import User from './views/User.vue'
import Learn from './views/Learn.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/course',
      name: 'course',
      component: Course
    },{
      path: '/learn',
      name: 'learn',
      component: Learn
    },{
      path: '/user',
      name: 'user',
      component: User
    },{
      path: '/button',
      name: 'button',
      component: Button
    }]
})
