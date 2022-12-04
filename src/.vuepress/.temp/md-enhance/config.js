import { defineClientConfig } from "@vuepress/client";
import "C:/Users/victory/Desktop/demo/blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "C:/Users/victory/Desktop/demo/blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import Tabs from "C:/Users/victory/Desktop/demo/blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Tabs", Tabs);
    
  },
});
