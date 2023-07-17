import pkg from "gulp"
const { dest, src } = pkg
import dartSass from "sass"
import gulpSass from "gulp-sass"
import autoprefixer from "gulp-autoprefixer"
import cleanCSS from "gulp-clean-css"
import cssmin from "gulp-cssmin"
import concat from "gulp-concat"
// outputEsm = resolve(__dirname, ".ui/es");
// const buildScssCopy = async () => {
//   await new Promise((resolve) => {
//     src(`./src/**/*.scss`)
//       .pipe(dest("./dist/styles")) // es
//       .on("end", resolve) // 监听流完成
//   })
// }
const buildScssModules = async () => {
  const sass = gulpSass(dartSass)
  await new Promise((resolve) => {
    src(`./src/**/*.scss`)
      .pipe(sass.sync()) // 编译
      .pipe(autoprefixer({ cascade: false })) // 兼容
      .pipe(cleanCSS()) // 压缩
      .pipe(dest("./ui/es/components/src")) // es
      .pipe(dest("./ui/lib/components/src")) // lib
      .on("end", resolve) // 监听流完成
  })
}
const buildScssFull = async () => {
  const sass = gulpSass(dartSass)
  await new Promise((resolve) => {
    src(`./src/**/*.scss`)
      .pipe(concat("style.css"))
      .pipe(sass.sync()) // 编译
      .pipe(autoprefixer({ cascade: false })) // 兼容
      .pipe(cleanCSS()) // 压缩
      .pipe(cssmin()) // 压缩
      .pipe(dest("./ui/es/components/src")) // dist
      .on("end", resolve) // 监听流完成
  })
}

export const buildStyle = async () => {
  await Promise.all([buildScssModules(), buildScssFull()])
}
