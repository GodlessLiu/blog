import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "快速导航", icon: "navigation", link: "/resource/quicknav/" },
  {
    text: "博客首页",
    icon: "blog",
    link: "/resource/blogs/",
  },
  {
    text: "代码笔记",
    icon: "daima",
    link: "/resource/codeNotes/git/1.html",
  },
  {
    text: "浮生杂记",
    icon: "biji",
    link: "/resource/diaries/",
  },
  {
    text: "专业学习",
    prefix: "/resource/major/",
    children: [
      { text: "计算机", icon: "jisuanjicomputer160", link: "computers/" },
      { text: "其他", icon: "qita", link: "others/" },
    ],
  },
]);
