# 安装

###

## 使用包管理器

```
# npm
$ npm install @cguardian/cg-ui

# pnpm
$ pnpm install @cguardian/cg-ui

```

## 浏览器直接引入

直接通过浏览器的 HTML 标签导入 cgUi，然后就可以使用全局变量 cgUi 了。这里没有提供 cdn 引入，拿到打包的 dist 文件夹下面的 js 和 css 文件导入即可。

```
<head>
    // vue3
    <script src="//unpkg.com/vue@3"></script>
    // style 相对路径
    <link rel="stylesheet" href="./style.css" />
    // component 相对路径
    <script src="./index.umd.js"></script>
</head>

```

##### createToast 方法在这种模式下有问题，暂未修复。
