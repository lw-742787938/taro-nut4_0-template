<!--
 * @Author: lw
 * @Date: 2023-01-30 11:36:02
 * @LastEditTime: 2023-01-30 15:01:55
 * @LastEditors: lw
 * @Description: 
 * @FilePath: \travelMiniApp\src\components\tabBar\index.vue
-->
<template>
  <nut-tabbar v-model="activeName" @tab-switch="tabSwitch" active-color="#AF1E24" unactive-color="#666666" bottom
    safe-area-inset-bottom placeholder>
    <nut-tabbar-item tab-title="行程" name="trip">
      <template #icon="props">
        <img :src="props.active ? '../../assets/tabBar/trip_cur.png' : '../../assets/tabBar/trip.png'" alt="" />
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="审批" name="approval">
      <template #icon="props">
        <img :src="props.active ? '../../assets/tabBar/approval_cur.png' : '../../assets/tabBar/approval.png'" alt="" />
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="我的" name="me">
      <template #icon="props">
        <img :src="props.active ? '../../assets/tabBar/me_cur.png' : '../../assets/tabBar/me.png'" alt="" />
      </template>
    </nut-tabbar-item>
  </nut-tabbar>

</template>

<script>
import Approval_img from '@/assets/tabBar/approval.png'
import ApprovalCur_img from '@/assets/tabBar/approval_cur.png'
import Trip_img from '@/assets/tabBar/trip.png'
// import TripCur_img from '@/assets/tabBar/trip_cur.png'
import TripCur_img from '../../assets/tabBar/trip_cur.png'
import Me_img from '@/assets/tabBar/me.png'
import MeCur_img from '@/assets/tabBar/me_cur.png'
import { Image } from "@tarojs/components"
import { ref } from "vue"
export default {
  name: 'TabBar',
  setup () {
    const activeName = ref("trip")
    const tabSwitch = (item, index) => {
    }
    return {
      activeName,
      tabSwitch
    }
  }
}
</script>

<style lang="scss" scoped>

</style>