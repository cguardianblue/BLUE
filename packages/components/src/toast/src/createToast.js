/** @format */

import CgToastGroup from "./CgToastGroup.vue"
import { createApp } from "vue"
import { getRoot } from "hooks"

let toastGroups, _vm
if (getRoot() === "browser") {
  if (!toastGroups && !_vm) {
    toastGroups = createApp(CgToastGroup)
    const parentNode = document.createElement("div")
    document && document.body && document.body.appendChild(parentNode)
    _vm = toastGroups.mount(parentNode)
  }
}

/**
 * @param {'success'|'warning'|'error'|any} options.type 只有三种
 * @param {any} options.message
 * @param {number|any} options.duration 停留时间
 * */
export function createToast(options) {
  _vm.toastList = [..._vm.toastList, Object.assign({}, options, { show: true })]
}
