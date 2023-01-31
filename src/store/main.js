/*
 * @Author: lw
 * @Date: 2023-01-30 10:20:36
 * @LastEditTime: 2023-01-31 11:25:31
 * @LastEditors: lw
 * @Description:
 * @FilePath: \travelMiniApp\src\store\main.js
 */
import { defineStore } from "pinia"
import Taro from "@tarojs/taro"
export const useMainStore = defineStore("main", {
  state: () => {
    return {
      customNavBarHeight: "",
      statusBarHeight: "",
      systemInfo: "",
      tabActiveName: "trip",
      curTabActiveName: "trip",
    }
  },
  actions: {
    /**
     * 获取微信胶囊栏的坐标信息
     */
    async getSystemInfo() {
      await Taro.getSystemInfo().then((res) => {
        let custom = Taro.getMenuButtonBoundingClientRect()
        let customNavBarHeight =
          custom.bottom + custom.top - (res.statusBarHeight ?? 0)
        this.customNavBarHeight = customNavBarHeight
        this.statusBarHeight = res.statusBarHeight
        this.systemInfo = res
      })
    },
  },
})
