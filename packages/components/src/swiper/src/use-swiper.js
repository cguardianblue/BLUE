import {
  computed,
  getCurrentInstance,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  shallowRef,
  unref,
  watch,
} from "vue"
import { useResizeObserver } from "@vueuse/core"
import { swiperKey } from "./SwiperProps"
import { useOrderedChildren } from "./hooks"
import { throttle } from "lodash-es"
export const useSwiper = (props, emit) => {
  const THROTTLE_TIME = 300
  const {
    children: items,
    addChild: addItem,
    removeChild: removeItem,
  } = useOrderedChildren(getCurrentInstance(), "CgSwiperItem")

  // refs
  const activeIndex = ref(-1)
  const timer = ref(null)
  const hover = ref(false)
  const root = ref()
  // computed
  const arrowDisplay = computed(
    () => props.arrow !== "never" && !unref(isVertical)
  )
  const hasLabel = computed(() => {
    return items.value.some((item) => item.props.label.toString().length > 0)
  })
  const isCardType = computed(() => props.type === "card")
  const isVertical = computed(() => props.direction === "vertical")
  // function
  const throttledArrowClick = throttle(
    (index) => {
      setActiveItem(index)
    },
    THROTTLE_TIME,
    { trailing: true }
  )
  const throttledIndicatorHover = throttle((index) => {
    handleIndicatorHover(index)
  }, THROTTLE_TIME)
  // 移入轮播图块触发
  function handleMouseEnter() {
    hover.value = true
    if (props.pauseOnHover) {
      pauseTimer()
    }
  }
  // 移出轮播图块触发
  function handleMouseLeave() {
    hover.value = false
    startTimer()
  }
  // 重新设置每个item的transform值
  function resetItemPosition(oldIndex) {
    items.value.forEach((item, index) => {
      item.translateItem(index, activeIndex.value, oldIndex)
    })
  }
  // index为item的index或者item的name值
  function setActiveItem(index) {
    if (typeof index === "string") {
      const filteredItems = items.value.filter(
        (item) => item.props.name === index
      )
      if (filteredItems.length > 0) {
        index = items.value.indexOf(filteredItems[0])
      }
    }
    index = Number(index)
    const itemCount = items.value.length
    const oldIndex = activeIndex.value
    // 前两个if判断下边界情况
    if (index < 0) {
      activeIndex.value = props.loop ? itemCount - 1 : 0
    } else if (index >= itemCount) {
      activeIndex.value = props.loop ? 0 : itemCount - 1
    } else {
      activeIndex.value = index
    }
    // 关键重新设置每个item的transform
    if (oldIndex === activeIndex.value) {
      resetItemPosition(oldIndex)
    }
    // 重新开始定时器，开始轮播计算每个item的transform值
    resetTimer()
  }
  // 指示器item点击
  function handleIndicatorClick(index) {
    activeIndex.value = index
  }
  // 指示器item移入
  function handleIndicatorHover(index) {
    if (props.trigger === "hover" && index !== activeIndex.value) {
      activeIndex.value = index
    }
  }
  function prev() {
    setActiveItem(activeIndex.value - 1)
  }
  function next() {
    setActiveItem(activeIndex.value + 1)
  }
  function pauseTimer() {
    if (timer.value) {
      clearInterval(timer.value)
      timer.value = null
    }
  }
  function startTimer() {
    if (props.interval <= 0 || !props.autoplay || timer.value) return
    timer.value = setInterval(() => playSlides(), props.interval)
  }
  function resetTimer() {
    pauseTimer()
    startTimer()
  }
  const playSlides = () => {
    if (activeIndex.value < items.value.length - 1) {
      activeIndex.value = activeIndex.value + 1
    } else if (props.loop) {
      activeIndex.value = 0
    }
  }
  // watch
  watch(
    () => activeIndex.value,
    (current, prev) => {
      resetItemPosition(prev)
      //   导出提供change方法
      if (prev > -1) {
        emit("change", current, prev)
      }
    }
  )
  watch(
    () => props.autoplay,
    (autoplay) => {
      autoplay ? startTimer() : pauseTimer()
    }
  )
  watch(
    () => props.loop,
    () => {
      setActiveItem(activeIndex.value)
    }
  )

  watch(
    () => props.interval,
    () => {
      resetTimer()
    }
  )
  // 第一次初始化，相当于第一次计算每个item的transfrom
  watch(
    () => items.value,
    () => {
      if (items.value.length > 0) setActiveItem(props.initialIndex)
    }
  )
  // lifecycle
  const resizeObserver = shallowRef()
  onMounted(() => {
    resizeObserver.value = useResizeObserver(root.value, () => {
      resetItemPosition()
    })
    startTimer()
  })
  onBeforeUnmount(() => {
    pauseTimer()
    if (root.value && resizeObserver.value) resizeObserver.value.stop()
  })
  // provide
  provide(swiperKey, {
    root,
    isCardType,
    isVertical,
    items,
    loop: props.loop,
    addItem,
    removeItem,
    setActiveItem,
  })
  return {
    root,
    activeIndex,
    arrowDisplay,
    hasLabel,
    hover,
    isCardType,
    items,
    handleIndicatorClick,
    handleMouseEnter,
    handleMouseLeave,
    setActiveItem,
    prev,
    next,
    throttledArrowClick,
    throttledIndicatorHover,
  }
}
