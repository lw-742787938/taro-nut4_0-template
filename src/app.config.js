/*
 * @Author: lw
 * @Date: 2023-01-13 11:22:39
 * @LastEditTime: 2023-01-31 14:14:55
 * @LastEditors: lw
 * @Description:
 * @FilePath: \travelMiniApp\src\app.config.js
 */
export default defineAppConfig({
  lazyCodeLoading: "requiredComponents",
  entryPagePath: "pages/index/index",
  pages: ["pages/index/index"],
  subPackages: [
    { name: "approval", root: "approval/pages", pages: ["index/index"] },
    { name: "me", root: "me/pages", pages: ["index/index"] },
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    navigationStyle: "custom",
  },
})
