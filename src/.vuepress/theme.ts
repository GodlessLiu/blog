import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  // hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "Mr.V",
    email: "2788370451@qq.com",
  },
  // 字体link
  iconAssets: "//at.alicdn.com/t/c/font_3805211_yii8tkt3tjd.css",
  logo: "/logo.png",
  repo: "https://github.com/GodlessLiu",
  darkmode: "toggle",
  editLink: false,
  backToTop: true,
  // 文章所在目录
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  // 导航栏布局
  navbarLayout: {
    left: ["Brand"],
    center: ["Links"],
    right: ["Language", "Repo", "Outlook", "Search"],
  },
  themeColor: {
    yellow: "#FEC201",
    pink: "#EF699F",
    purple: "#684CCE",
    orange: "#FF8C3D",
  },
  repoLabel: "Gitee",
  lastUpdated: true,
  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,
      // sidebar
      sidebar: zhSidebar,
      footer: "Publish By LAF",
      displayFooter: true,
      // page meta
      metaLocales: {
        editLink: "在 Gitee 上编辑此页",
      },
    },
  },
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },
  blog: {
    // 头像
    avatar: "/blog/header.png",
    // 名称
    name: "Mr.Tong",
    // 是否是圆形头像
    roundAvatar: true,
    // 个人描述
    description: "你是人间二月天",
    // 社交媒体
    medias: {
      Gitee: "https://gitee.com/victory147",
      GitHub: "https://github.com/GodlessLiu",
      BiliBili:
        "https://space.bilibili.com/2103498741?spm_id_from=333.1007.0.0",
    },
    // 博客的侧边栏设置
    sidebarDisplay: "mobile",
    // 每页展示的文章数量
    articlePerPage: 7,
    timeline: "小刘の时光轴🍃",
  },
  plugins: {
    copyright: {
      hostname: "http://43.136.131.248:90/",
      author: "V",
      global: true,
    },
    mdEnhance: {
      tasklist: true,
      // 添加选项卡支持
      tabs: true,
      // ==== 标记
      mark: true,
      // 脚注
      footnote: true,
    },
    copyCode: {
      // 在移动端也可以实现复制代码
      showInMobile: true,
      // 代码复制成功提示消息的时间-ms
      duration: 3000,
      // 纯净模式
      pure: false,
    },
    blog: true,
    git: true,
  },
  footer: "",
});
