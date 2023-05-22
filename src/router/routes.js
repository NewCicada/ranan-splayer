import HomeView from '@/views/Home/HomeView.vue'
import SearchView from '@/views/Search/index.vue'
import comment from '@/views/Comment/index.vue'
import Setting from '@/views/Setting/SettingView.vue'
import LoginView from '@/views/Login/LoginView.vue'
import UserView from '@/views/User/UserView.vue'
import VideoView from '@/views/Video/VideoView.vue'
import DiscoverView from '@/views/Discover/DiscoverView.vue'
import PlayListView from '@/views/PlayList/PlayListView.vue'
import DailySongs from '@/views/DailySongs/DailySongs.vue'
import SongView from '@/views/Song/SongView.vue'
import AlbumView from '@/views/Album/AlbumView.vue'

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
        path: 'songs',
        name: 's-songs',
        component: () => import('@/views/Search/songs.vue'),
      },
      {
        path: 'artists',
        name: 's-artists',
        component: () => import('@/views/Search/artists.vue'),
      },
      {
        path: 'albums',
        name: 's-albums',
        component: () => import('@/views/Search/albums.vue'),
      },
      {
        path: 'videos',
        name: 's-videos',
        component: () => import('@/views/Search/videos.vue'),
      },
      {
        path: 'playlists',
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
    redirect: '/discover/playlists',
    children: [
      {
        path: 'playlists',
        name: 'dsc-playlists',
        component: () => import('@/views/Discover/playlists.vue'),
      },
      {
        path: 'toplists',
        name: 'dsc-toplists',
        component: () => import('@/views/Discover/toplists.vue'),
      },
      {
        path: 'artists',
        name: 'dsc-artists',
        component: () => import('@/views/Discover/artists.vue'),
      },
    ],
  },
  {
    path: '/playlist',
    name: 'playlist',
    meta: {
      title: '歌单',
    },
    component: PlayListView,
  },
  {
    path: '/song',
    name: 'song',
    meta: {
      title: '歌曲',
    },
    component: SongView,
  },
  {
    path: '/dailySongs',
    name: 'dailySongs',
    meta: {
      title: '每日推荐',
      needLogin: true,
    },
    component: DailySongs,
  },
  {
    path: '/album',
    name: 'album',
    meta: {
      title: '专辑',
    },
    component: AlbumView,
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      title: '我的',
      needLogin: true,
    },
    component: UserView,
    redirect: '/user/playlists',
    children: [
      {
        path: 'playlists',
        name: 'playlists',
        component: () => import('@/views/User/playlists.vue'),
      },
      {
        path: 'cloud',
        name: 'cloud',
        component: () => import('@/views/User/cloud.vue'),
      },
    ],
  },
  {
    path: '/artist',
    name: 'artist',
    meta: {
      title: '歌手',
    },
    component: () => import('@/views/Artist/index.vue'),
    redirect: '/artist/songs',
    children: [
      {
        path: 'songs',
        name: 'ar-songs',
        component: () => import('@/views/Artist/songs.vue'),
      },
      {
        path: 'albums',
        name: 'ar-albums',
        component: () => import('@/views/Artist/albums.vue'),
      },
      {
        path: 'videos',
        name: 'ar-videos',
        component: () => import('@/views/Artist/videos.vue'),
      },
    ],
  },
]

export default routes
