import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from '../pages/Article.vue'
import Home from '../pages/Home.vue'
import Articles from '../pages/Articles.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles,
  },
  {
    path: '/articles/:id',
    name: 'Article',
    component: Article,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
