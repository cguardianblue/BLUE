/** @format */

export const toastProps = {
  // 控制显隐，默认引用就开启
  show: {
    type: Boolean,
    default: false,
  },
  // 内容
  message: {
    type: String,
    default: "",
  },
  // 关闭toast延时时间
  duration: {
    type: Number,
    default: 3000,
  },
  // 只提供 成功 警告 失败
  type: {
    type: String,
    default: "", // success warning error
  },
  // *********不让自定义 ICON 了
  // 自定义icon，想要自定义icon 就不要传type了，然后不要传相对路径，要完整的
  // 这是 vite 没有require 要用import.meta.glob()
  // icon: {
  //   type: String,
  //   default: ''
  // }
}
