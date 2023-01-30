/*
 * @Author: lw
 * @Date: 2023-01-13 11:22:39
 * @LastEditTime: 2023-01-30 10:19:44
 * @LastEditors: lw
 * @Description:
 * @FilePath: \travelMiniApp\src\app.js
 */
import { createApp } from "vue"
import { createPinia } from "pinia"
import "./app.scss"

const App = createApp({
  onShow(options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.use(createPinia())
export default App
