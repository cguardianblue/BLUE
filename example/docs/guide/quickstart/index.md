# 快速开始

###

## 全局引入

```
// main.js
import { createApp } from 'vue'
import CgUi from '@cguardian/cg-ui'
import "@cguardian/cg-ui/ui/dist/style.css"
import App from './App.vue'

const app = createApp(App)
app.use(CgUi)
app.mount('#app')

```

## 按需引入

##### 需要在项目配置文件里面加一些配置。

### vite

```
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 自动导入组件库导出的方法
    // 暂时只有这两个，后续增加这里对应添加
    AutoImport({
      imports: [
        {
          "@cguardian/cg-ui/ui/es/components/src/toast/index.js": ["createToast"],
          "@cguardian/cg-ui/ui/es/components/src/dialog/index.js": ["createDialog"],
        },
      ],
    }),
    Components({
      // ui库解析器
      resolvers: [
        {
          type: "component",
          resolve: (name) => {
            let str = name.slice(2);
            str = str.replace(str[0], str[0].toLowerCase());
            // 对应组件导出位置
            const path = `@cguardian/cg-ui/ui/es/components/src/${str}`;
            return {
              name,
              from: path,
              // 组件对应的css文件
              sideEffects: `@cguardian/cg-ui/ui/es/components/src/${str}/styles/${name}.css`,
            };
          },
        },
      ],
    }),
  ]
});

```

## 手动引入

##### cg-ui 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。既 package.json 文件的 sideEffects 字段会声明设置哪些模块具有副作用，让打包工具知道你的模块是否是“纯”的以此更好的 Tree Shaking。

##### 另外需要自动引入手动引入组件的 css 样式，需要加一些配置。

```
// app.vue
<template>
  <cg-button>我是 CgButton</cg-button>
</template>
<script setup>
  import { CgButton } from 'cg-ui'
</script>

```

```
// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createStyleImportPlugin } from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 手动引入组件时，需要配置加载对应的css样式
    createStyleImportPlugin({
      libs: [
        // 如果没有你需要的resolve，可以在lib内直接写，也可以给我们提供PR
        {
          libraryName: "cg-ui",
          resolveStyle: (name) => {
            let str = name.slice(3);
            let newStr = str
              .replace(/-(\w)/g, (match, p1) => p1.toUpperCase())
              .replace(/-/g, "");
            let dirNewStr =
              "Cg" + newStr.replace(newStr[0], newStr[0].toUpperCase());
            // use scss
            return `@cguardian/cg-ui/ui/es/components/src/${newStr}/styles/${dirNewStr}.css`;
          },
        },
      ],
    })
  ]
});

```

##### 如果只引入组件库导出的方法呢，例如 createToast 和 createDialog,需要额外单独引入 css 样式。

##### 例如需要引入， import 'cg-ui/ui/es/components/src/toast/styles/CgToast.css'
