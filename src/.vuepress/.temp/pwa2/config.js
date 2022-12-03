import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "C:/Users/victory/Desktop/demo/note-vuepress/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-pwa2@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "C:/Users/victory/Desktop/demo/note-vuepress/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-pwa2@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});
