import HomeView from '@/views/Home/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
    },
    component: HomeView,
  },
]

export default routes
