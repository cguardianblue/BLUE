/** @format */

import CgDialog from "./CgDialog.vue"
import { createApp } from "vue"

/**
 * @param {Object} options
 * @param {String | any } options.title 标题
 * @param {String | any } options.content 内容
 * @param {String | any } options.cancelText 取消按钮文案
 * @param {String | any } options.confirmText 确定按钮文案
 * @param {String | any } options.autoClose 是否自动关闭
 * @param {String | any } options.lockScroll body滚动锁定
 *
 * */

let CgDialogInstance

export function createDialog(options) {
  if (CgDialogInstance) {
    return Promise.resolve("already exist")
  }
  return new Promise((resolve) => {
    CgDialogInstance = createApp(CgDialog, {
      modelValue: true,
      title: options.title,
      content: options.content,
      cancelText: options.cancelText,
      confirmText: options.confirmText,
      autoClose: options.autoClose || true,
      lockScroll: options.lockScroll || true,
      showClose: options.showClose || false,
      confirmDisable: options.confirmDisable || false,

      onConfirm: () => {
        // 不传 autoClose 自动关闭
        if (options.autoClose !== false) {
          unmount()
          resolve(true)
        } else {
          resolve(unmount)
        }
      },

      onCancel: () => {
        unmount()
        resolve(false)
      },
    })

    // 必须有个载体dom元素 不能直接放body上，不然组件卸载会清空 body
    const parentNode = document.createElement("div")
    document.body.appendChild(parentNode)

    CgDialogInstance.mount(parentNode)

    function unmount() {
      CgDialogInstance.unmount()
      // 这里先这样吧，没想到好方法
      document.body.classList.remove("freezeWindow")
      CgDialogInstance = null
      document.body.removeChild(parentNode)
    }
  })
}
