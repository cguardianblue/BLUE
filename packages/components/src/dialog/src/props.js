/** @format */

export const dialogProps = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  // 标题
  title: {
    type: String,
    default: "",
  },
  // 内容
  content: {
    type: String,
    default: "",
  },
  // 取消按钮
  cancelText: {
    type: String,
    default: "",
  },
  // 确定按钮
  confirmText: {
    type: String,
    default: "",
  },
  // 是否展示关闭按钮
  showClose: {
    type: Boolean,
    default: false,
  },
  // 确认按钮 能不能点
  confirmDisable: {
    type: Boolean,
    default: false,
  },
  // 确认后自动关闭 为false时，可通过then的第一个参数关闭
  autoClose: {
    type: Boolean,
    default: true,
  },
  // 干一些其他事
  onCancel: {
    type: Function,
    default: function () {},
  },
  // 干一些其他事
  onConfirm: {
    type: Function,
    default: function () {},
  },
  lockScroll: {
    type: Boolean,
    default: true,
  },
}
