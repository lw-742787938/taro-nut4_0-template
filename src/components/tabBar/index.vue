<!--
 * @Author: lw
 * @Date: 2023-01-30 11:36:02
 * @LastEditTime: 2023-01-31 14:10:50
 * @LastEditors: lw
 * @Description: 
 * @FilePath: \travelMiniApp\src\components\tabBar\index.vue
-->
<template>
  <nut-tabbar v-model="mainStore.tabActiveName" id="test" ref="tabBarItem" @tab-switch="tabSwitch" class="tab-bar-item"
    active-color="#AF1E24" unactive-color="#666666" bottom safe-area-inset-bottom placeholder>
    <nut-tabbar-item tab-title="行程" name="trip">
      <template #icon="props">
        <img :src="
          props.active
            ? trip_cur_img
            : trip_img
        " alt="" />
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="审批" name="approval">
      <template #icon="props">
        <img :src="
          props.active
            ? approval_cur_img
            : approval_img
        " alt="" />
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="我的" name="me">
      <template #icon="props">
        <img :src="
  props.active
    ? me_cur_img
    : me_img
        " alt="" />
      </template>
    </nut-tabbar-item>
  </nut-tabbar>
</template>

<script setup>
import { useLoad, useReady, } from '@tarojs/taro'
import { ref } from "vue"
import { useMainStore } from "@/store/index"
// icon
import trip_img from "@/assets/tabBar/trip.png"
import trip_cur_img from "@/assets/tabBar/trip_cur.png"
import approval_img from "@/assets/tabBar/approval.png"
import approval_cur_img from "@/assets/tabBar/approval_cur.png"
import me_img from "@/assets/tabBar/me.png"
import me_cur_img from "@/assets/tabBar/me_cur.png"
import { Router, NavigateType } from 'tarojs-router-next'

const mainStore = useMainStore()
const tabBarItem = ref(null)
const tabSwitch = (item, index) => {
  if (index == mainStore.curTabActiveName) return
  mainStore.curTabActiveName = index
  let url = `/${index}/pages/index/index`
  Router.navigate({ url: url }, { type: NavigateType.reLaunch })
}
useLoad(() => {
})
useReady(() => {
})
</script>

<style lang="scss" scoped>

</style>
