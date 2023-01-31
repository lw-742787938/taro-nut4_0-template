/*
 * @Author: lw
 * @Date: 2023-01-13 11:22:39
 * @LastEditTime: 2023-01-31 10:19:40
 * @LastEditors: lw
 * @Description:
 * @FilePath: \travelMiniApp\config\dev.js
 */
module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  outputRoot: "distDev",
  defineConstants: {},
  plugins: ["@tarojs/plugin-vue-devtools"],
  mini: {},
  h5: {},
}
