export const CgWaterfallProps = {
  list: {
    type: Array,
    default: () => [],
  },
  imageWidthKey: {
    type: [String, Array],
    default: "width",
  },
  imageHeightKey: {
    type: [String, Array],
    default: "height",
  },
  colWidth: {
    // 每列的宽度，不包括两列的间隔
    type: Number,
    default: 250,
  },
  gap: {
    // 左右间距
    type: Number,
    default: 20,
  },
  bottomGap: {
    // 上下间距
    type: Number,
    default: 10,
  },
  onceLoadMax: {
    // 一次性加载的最大数量
    type: Number,
    default: Infinity,
  },
  distanceToScroll: {
    // 滚动加载的bottom值
    type: Number,
    default: 200,
  },
  scrollBodySelector: {
    // 滚动主体选择器，默认为页面
    type: String,
    default: "",
  },
  isMounted: {
    // 和 scrollBodySelector 配合使用
    type: Boolean,
    default: false,
  },
  isFinished: {
    // 当你想让瀑布流结束，请把他制成false
    type: Boolean,
    default: false,
  },
}
