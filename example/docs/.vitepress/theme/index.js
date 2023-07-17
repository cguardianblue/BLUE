import DefaultTheme from "vitepress/theme"
import cg from "@cguardian/cg-ui"
import "@cguardian/cg-ui/ui/dist/style.css"
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(cg)
  },
}
