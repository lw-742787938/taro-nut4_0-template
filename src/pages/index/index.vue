<!--
 * @Author: lw
 * @Date: 2023-01-13 11:22:39
 * @LastEditTime: 2023-01-31 11:57:41
 * @LastEditors: lw
 * @Description: 
 * @FilePath: \travelMiniApp\src\pages\index\index.vue
-->
<template>
  <NavBar>
    <div>test</div>
  </NavBar>
  <div class="test">1
    <div> {{ mainStore.testHeight }}</div>
  </div>
  <TabBar />
</template>

<script setup>
import { useLoad, useReady, nextTick } from '@tarojs/taro'
import { reactive, toRefs, ref } from 'vue';
import { TabBar, NavBar } from "@/components/index.js"
import { useMainStore } from "@/store/index";
const mainStore = useMainStore();
mainStore.getSystemInfo();

useLoad(() => {

})
useReady(() => {

})
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.test {
  background-color: red
}
</style>
