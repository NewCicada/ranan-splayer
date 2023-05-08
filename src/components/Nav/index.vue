<template>
  <nav>
    <div class="left">
      <div class="logo" @click="router.push('/')">
        <img src="/images/logo/favicon.svg" alt="logo">
      </div>
      <div class="controls">
        <n-icon size="26" :component="NavigateBeforeFilled" @click="$router.go(-1)" />
        <n-icon size="26" :component="NavigateNextFilled" @click="$router.go(1)" />
      </div>
    </div>
    <div class="center">
      <RouterLink class="link" to="/">首页</RouterLink>
      <RouterLink class="link" to="/">发现</RouterLink>
      <RouterLink class="link" to="/">我的</RouterLink>
    </div>
    <div class="ri ght">
      <SearchInp />
    </div>
  </nav>
</template>
 
<script setup>
import {
  NavigateBeforeFilled,
  NavigateNextFilled
} from "@vicons/material";
</script>
 
<style lang="scss" scoped>
nav {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.left {
  flex: 1;
  max-width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width:990px) {
    flex: initial;
  }

  .logo {
    width: 30px;
    height: 30px;
    margin-right: 12px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .controls {
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 520px) {
      display: none;
    }

    .n-icon {
      margin: 0 4px;
      border-radius: 8px;
      padding: 4px;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background-color: var(--n-border-color);
      }

      &:active {
        transform: scale(0.95);
      }
    }
  }
}

.center {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }

  .link {
    display: block;
    text-decoration: none;
    color: var(--n-text-color);
    padding: 6px 16px;
    margin: 0 2px;
    border-radius: 8px;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      background-color: $mainColor;
      color: var(--n-color);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .router-link-active {
    background-color: $mainColor;
    color: var(--n-color);
  }
}
</style>
