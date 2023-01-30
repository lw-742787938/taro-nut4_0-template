/*
 * @Author: lw
 * @Date: 2023-01-30 10:20:36
 * @LastEditTime: 2023-01-30 10:20:36
 * @LastEditors: lw
 * @Description:
 * @FilePath: \travelMiniApp\src\store\index.js
 */
import { defineStore } from "pinia"

export const useMainStore = defineStore("main", {
  state: () => {
    return { count: 0 }
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
