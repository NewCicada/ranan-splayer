import HomeView from '@/views/Home/HomeView.vue'
import SearchView from '@/views/Search/index.vue'
import comment from '@/views/Comment/index.vue'
import Setting from '@/views/Setting/SettingView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
    },
    component: HomeView,
  },
  {
    path: '/search',
    name: 'search',
    meta: {
      title: '搜索',
    },
    component: SearchView,
    redirect: '/search/songs',
    children: [
      {
        path: '/search/songs',
        name: 's-songs',
        component: () => import('@/views/Search/songs.vue'),
      },
      {
        path: '/search/artists',
        name: 's-artists',
        component: () => import('@/views/Search/artists.vue'),
      },
      {
        path: '/search/albums',
        name: 's-albums',
        component: () => import('@/views/Search/albums.vue'),
      },
      {
        path: '/search/videos',
        name: 's-videos',
        component: () => import('@/views/Search/videos.vue'),
      },
      {
        path: '/search/playlists',
        name: 's-playlists',
        component: () => import('@/views/Search/playlists.vue'),
      },
    ],
  },
  {
    path: '/comment',
    name: 'comment',
    meta: {
      title: '歌曲评论',
    },
    component: comment,
  },
  {
    path: '/setting',
    name: 'setting',
    meta: {
      title: '全局设置',
    },
    component: Setting,
  },
]

export default routes
