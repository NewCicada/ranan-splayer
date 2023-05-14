import HomeView from '@/views/Home/HomeView.vue'
import SearchView from '@/views/Search/index.vue'
import comment from '@/views/Comment/index.vue'
import Setting from '@/views/Setting/SettingView.vue'
import LoginView from '@/views/Login/LoginView.vue'
import UserView from '@/views/User/UserView.vue'
import VideoView from '@/views/Video/VideoView.vue'
import DiscoverView from '@/views/Discover/DiscoverView.vue'
import PlayListView from '@/views/PlayList/PlayListView.vue'

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
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
    },
    component: LoginView,
  },
  {
    path: '/video',
    name: 'video',
    meta: {
      title: '视频',
    },
    component: VideoView,
  },
  {
    path: '/discover',
    name: 'discover',
    meta: {
      title: '发现',
    },
    component: DiscoverView,
  },
  {
    path:'/playlist',
    name:'playlist',
    meta:{
      title:'歌单',
    },
    component:PlayListView,
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      title: '我的',
      needLogin: true,
    },
    component: UserView,
  },
]

export default routes
