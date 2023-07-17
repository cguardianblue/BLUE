# cg-ui

## 遵守 cg 规范，一个基于 vue3 的 ui 库。

## pnpm monorepo + vue3 + vite + eslint + prettier + husky + + lint-staged + vitepress

### pnpm monorepo 提供了一种简单的方式来管理多个项目的依赖项。它可以让您更轻松地处理维护复杂的代码库或共享库。

### 使用 ESLint 和 Prettier 来规范代码风格。

### husky 是一个用来管理 git hook 的工具，git hook 即在我们使用 git 提交代码的过程中会触发的钩子,规范仓库代码。

### VitePress 是在 Vite 上构建的静态网站生成器。

## 1.项目结构

##

```
├── packages/                 // 存放组件和工具库的目录
|   ├── components
|   |   |── src
│   |   |    ├── componentA/  // 组件A
│   |   |    │   ├── index.js // 组件A的入口
│   |   |    │   ├── src/     // 组件A的源代码
│   |   |    │   ├── styles/  // 组件A的样式源代码
│   |   |    ├── componentB/  // 组件B
│   |   |    │   ├── index.js // 组件B的入口
│   |   |    │   ├── src/     // 组件B的源代码
│   |   |    │   └── styles/  // 组件B的样式源代码
│   |   |    ├── index.js     // 导出所有组件
│   |   |    ├── mixin.scss   // 共用scss样式
│   |   |    └── ...
|   |   |── ui
│   |   |    ├── es/          // esm规范打包后代码
│   |   |    ├── lib/         // cjs规范打包后代码
│   |   |    ├── dist/        // 通用模块定义规范，script标签接引入
|   |   |── vite.config.js    // 配置项
|   |   |── index.js          // 入口文件
|   |   |── build.js          // 打包css代码
|   |   |── gulp.js           // css单独打包，入口文件
|   |   |── package.json      // 配置
|   ├── hooks                 // 工具函数
|   |   |── use-              // 具体方法
│   |   |    │──── index.js   // 定义单个方法并导出
│   |   |── index.js          // 导出所有方法
|   |   |── package.json      // 配置
|   ├── locale                // 多语言
│   |   |── index.js          // 导出多语言
│   |   |── en.js             // 英文
│   |   |── zh.js             // 中文
|   |   |── package.json      // 配置
├── example/                  // 例子、演示、文档相关的目录
│   ├── docs/                 // UI组件库文档及例子
├── .eslintrc                 // ESLint配置文件
├── .gitignore                // git忽略文件
├── .eslintignore             // ESLint忽略配置文件
├── .prettierrc               // Prettier配置文件
├── package.json              // 项目依赖和基础配置
└── README.md                 // 项目介绍和文档
```

## 2.安装依赖及查看组件示例

#### 2.1 根目录下面执行 pnpm install --recursive,安装所有子模块依赖。

#### 2.2 根目录下面执行 pnpm run build, 打包子模块组件库逻辑代码到 components/ui 文件夹下面。

#### 2.3 根目录下面执行 pnpm run build-scss, 打包子模块组件库样式代码到 components/ui 文件夹下面。

#### 2.3 根目录下面执行 pnpm run example-serve, 运行 vitepress 本地服务查看组件，默认端口号 5173。

## 3.新增组件后的验证及测试

#### 3.1 根目录下面执行 pnpm run build, 打包子模块组件库逻辑代码到 components/ui 文件夹下面。

#### 3.2 根目录下面执行 pnpm run build-scss, 打包子模块组件库样式代码到 components/ui 文件夹下面。

#### 3.3 在 example 子模块的 docs 目录下对应建新组件的文件夹，写测试代码即可
