<template>
  <Provider>
    <n-layout style="height: 100vh">
      <n-layout-header bordered>
        <Nav />
      </n-layout-header>
      <n-layout-content position="absolute" :class="music.getPlaylists[0] && music.showPlayBar ? 'show' : ''"
        :native-scrollbar="false" embedded>
        <main ref="mainContent" class="main">
          <n-back-top :bottom="music.getPlaylists[0] && music.showPlayBar ? 100 : 40" style="transition: all 0.3s" />
          <router-view v-slot="{ Component }">
            <keep-alive>
              <Transition name="scale" mode="out-in">
                <component :is="Component" />
              </Transition>
            </keep-alive>
          </router-view>
          <Player />
        </main>
      </n-layout-content>
    </n-layout>
  </Provider>
</template>

<script setup>
import { musicStore, userStore } from "@/store/index";
import { getLoginState } from "@/api";

const music = musicStore();
const user = userStore();
const router = useRouter();
const mainContent = ref(null);

// 空格暂停与播放
const spacePlayOrPause = (e) => {
  if (e.code === "Space") {
    if (e.target.tagName === "INPUT") return false;
    if (router.currentRoute.value.name == "video") return false;
    e.preventDefault();
    music.setPlayState(!music.getPlayState);
  }
};

onMounted(() => {
  // 挂载主窗口至全局
  window.$mainContent = mainContent.value;

  // 检查账号登录状态
  getLoginState()
    .then((res) => {
      if (res.data.profile && user.userLogin) {
        user.userLogin = true;
        user.setUserOtherData();
      } else {
        user.userLogOut();
      }
    })
    .catch((err) => {
      $message.error("遇到错误" + err);
      return false;
    });

  // 获取喜欢音乐列表
  music.setLikeList();

  // 键盘监听
  window.addEventListener("keydown", spacePlayOrPause);
});
</script>

<style lang="scss" scoped>
.n-layout-header {
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.n-layout-content {
  top: 60px;
  transition: all 0.3s;

  &.show {
    bottom: 70px;
  }
}

// 路由跳转动画
.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>