<!--
 * @Author: lw
 * @Date: 2023-01-30 15:08:40
 * @LastEditTime: 2023-01-30 16:27:37
 * @LastEditors: lw
 * @Description: 
 * @FilePath: \travelMiniApp\src\components\navBar\index.vue
-->
<template>
  <nut-navbar class="nav-bar-item" @on-click-back="back" @on-click-title="title" left-show safe-area-inset-top fixed
    placeholder border>
    <template #content>
      <slot />
    </template>
  </nut-navbar>
</template>

<script setup>
import { Router } from 'tarojs-router-next'
import { useMainStore } from "@/store/index";
const mainStore = useMainStore();
const back = () => {
  Router.back()
}
</script>

<style lang="scss" >
.nav-bar-item {
  display: block;

  .nut-navbar {
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>