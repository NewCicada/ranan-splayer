import { defineStore } from 'pinia'

const useUserDataStore = defineStore('userData', {
  state: () => {
    return {
      // 用户登录状态
      userLogin: false,
      // 用户cookie
      cookie: null,
      // 用户数据
      userData: {},
    }
  },
  getters: {
    // 获取cookie
    getCookie(state) {
      return state.cookie
    },
    // 获取用户数据
    getUserData(state) {
      return state.userData
    },
  },
  actions: {
    // 更改cookie
    setCookie(value) {
      window.localStorage.setItem('cookie', value)
      this.cookie = value
    },
    // 更改用户数据
    setUserData(value) {
      this.userData = value
      this.setUserLevel()
    },
    // 更改用户等级信息
    setUserLevel() {
      if (this.userLogin) {
        getUserLevel()
          .then((res) => {
            this.userData.lever = res.data
          })
          .catch((err) => {
            $message.error('获取用户等级出错' + err)
          })
      } else {
        $message.error('请登录后执行该操作')
      }
    },
  },
})
