/*
 * @Author: lw
 * @Date: 2023-01-30 17:35:52
 * @LastEditTime: 2023-01-31 10:57:33
 * @LastEditors: lw
 * @Description:
 * @FilePath: \travelMiniApp\src\utils\elm.js
 */
import Taro from "@tarojs/taro"
import { useMainStore } from "@/store/index.js"
/**
 * ss
 * @param {*} arrElm
 * @returns
 */
export const getElmInfo = (arrElm) => {
  let query = Taro.createSelectorQuery() // 创建查询器
  arrElm.forEach((e) => {
    query.select(e).boundingClientRect()
  })
  return new Promise((resolve, reject) => {
    query.exec((res) => {
      resolve(res)
    })
  })
}
export const getElmActiveHeight = (arrElm) => {
  let query = Taro.createSelectorQuery() // 创建查询器
  arrElm.forEach((e) => {
    query.select(e).boundingClientRect()
  })
  return new Promise((resolve, reject) => {
    let systemInfo = useMainStore().systemInfo
    query.exec((res) => {
      res.forEach((elm) => {
        if (elm) elm.availableHeight = systemInfo.windowHeight - elm.top
      })
      resolve(res)
    })
  })
}
