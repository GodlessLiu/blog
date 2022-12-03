import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { searchPlugin } from "@vuepress/plugin-search";
import path from "path";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "小刘の学习笔记",
      description: "小刘の学习笔记",
    },
  },
  theme,
  shouldPrefetch: false,
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索本站",
        },
      },
      hotKeys: ["command", "k"],
      maxSuggestions: 7,
      isSearchable: (page) => page.path !== "/",
    }),
  ],
});
