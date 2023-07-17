import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import VueSetupExtend from "vite-plugin-vue-setup-extend"
export default defineConfig({
  plugins: [
    vue({
      css: true,
      compileTemplate: true,
    }),
    VueSetupExtend(),
  ],
  base: "./",
  build: {
    target: "modules",
    //打包文件目录
    // outDir: "es",
    //压缩
    minify: true,
    rollupOptions: {
      //忽略打包vue
      external: ["vue", "lodash-es", "@ctrl/tinycolor", "@vueuse/core"],
      input: ["index.js"],
      // cssCodeSplit: true,
      output: [
        {
          format: "umd",
          dir: "./ui/dist",
          //当入口文件有export时，'umd'格式必须指定name
          //这样，在通过<script>标签引入时，才能通过name访问到export的内容。
          name: "cgUi",
          // exports: "named",
          globals: {
            vue: "Vue",
            "lodash-es": "_",
            "@vueuse/core": "VueUse",
            "@ctrl/tinycolor": "tinycolor",
          },
        },
        {
          format: "es",
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: resolve(__dirname, "./ui/es"),
        },
        {
          format: "cjs",
          entryFileNames: "[name].cjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: resolve(__dirname, "./ui/lib"),
        },
      ],
    },
    lib: {
      entry: "./index.js",
      name: "cgUi",
      formats: ["umd", "es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
  },
})
