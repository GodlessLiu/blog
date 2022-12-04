import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("FlipClock", defineAsyncComponent(() => import("C:/Users/victory/Desktop/demo/blog/src/.vuepress/components/FlipClock.vue"))),
      app.component("FlipItem", defineAsyncComponent(() => import("C:/Users/victory/Desktop/demo/blog/src/.vuepress/components/FlipItem.vue"))),
      app.component("MyFlipClock", defineAsyncComponent(() => import("C:/Users/victory/Desktop/demo/blog/src/.vuepress/components/MyFlipClock.vue"))),
      app.component("NavCard", defineAsyncComponent(() => import("C:/Users/victory/Desktop/demo/blog/src/.vuepress/components/NavCard.vue"))),
      app.component("QuickNav", defineAsyncComponent(() => import("C:/Users/victory/Desktop/demo/blog/src/.vuepress/components/QuickNav.vue")))
  },
}
