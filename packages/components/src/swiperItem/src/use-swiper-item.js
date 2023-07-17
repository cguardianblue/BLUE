import {
  getCurrentInstance,
  inject,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  unref,
} from "vue"
import { swiperKey } from "../../swiper/src/SwiperProps"
export const useSwiperItem = (props) => {
  const carouselContext = inject(swiperKey)
  // instance
  const instance = getCurrentInstance()
  const CARD_SCALE = 0.83

  const hover = ref(false)
  const translate = ref(0)
  const scale = ref(1)
  const active = ref(false)
  const ready = ref(false)
  const inStage = ref(false)
  const animating = ref(false)
  // computed
  const { isCardType, isVertical } = carouselContext
  // methods

  function processIndex(index, activeIndex, length) {
    const lastItemIndex = length - 1
    // const prevItemIndex = activeIndex - 1
    // const nextItemIndex = activeIndex + 1
    // const halfItemIndex = length / 2
    // 当前激活的是第一张，把最后一张弄到前面来-1item的距离
    if (activeIndex === 0 && index === lastItemIndex) {
      return -1
      // 当前激活的是最后一张，把第一张弄到1item的距离来
    } else if (activeIndex === lastItemIndex && index === 0) {
      return length
      // 在当前激活前面的，大于一半个数量的，放到后面
    }
    // else if (index < prevItemIndex && activeIndex - index >= halfItemIndex) {
    //   return length + 1
    //   // 在当前激活后面的，大于一办个数量的，放到前面
    // } else if (index > nextItemIndex && index - activeIndex >= halfItemIndex) {
    //   return -2
    // }
    return index
  }
  function calcCardTranslate(index, activeIndex) {
    const parentWidth = carouselContext.root.value?.offsetWidth || 0
    if (inStage.value) {
      return (parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1)) / 4
    } else if (index < activeIndex) {
      return (-(1 + CARD_SCALE) * parentWidth) / 4
    } else {
      return ((3 + CARD_SCALE) * parentWidth) / 4
    }
  }
  function calcTranslate(index, activeIndex, isVertical) {
    const rootEl = carouselContext.root.value
    if (!rootEl) return 0

    const distance =
      (isVertical ? rootEl.offsetHeight : rootEl.offsetWidth) || 0
    return distance * (index - activeIndex)
  }
  // 设置item的偏移量
  const translateItem = (index, activeIndex, oldIndex) => {
    const _isCardType = unref(isCardType)
    const carouselItemLength = carouselContext.items.value.length ?? Number.NaN

    const isActive = index === activeIndex
    // 这里找到两个animating的item
    if (!_isCardType && oldIndex !== undefined) {
      // 激活是第一个或者最后一个时，切换动画只给当前的和上一个
      if (
        activeIndex === 0 ||
        activeIndex === carouselContext.items.value.length - 1
      ) {
        animating.value = isActive || index === oldIndex
      } else {
        if (activeIndex > oldIndex) {
          animating.value = oldIndex <= index && index <= activeIndex
        } else {
          animating.value = activeIndex <= index && index <= oldIndex
        }
      }
    }

    if (!isActive && carouselItemLength > 2 && carouselContext.loop) {
      index = processIndex(index, activeIndex, carouselItemLength)
    }

    const _isVertical = unref(isVertical)
    active.value = isActive

    if (_isCardType) {
      // 是否在当前显示内的item
      inStage.value = Math.round(Math.abs(index - activeIndex)) <= 1
      translate.value = calcCardTranslate(index, activeIndex)
      scale.value = unref(active) ? 1 : CARD_SCALE
    } else {
      translate.value = calcTranslate(index, activeIndex, _isVertical)
    }

    ready.value = true
  }
  // 单个item点击
  function handleItemClick() {
    if (carouselContext && unref(isCardType)) {
      const index = carouselContext.items.value.findIndex(
        ({ uid }) => uid === instance.uid
      )
      carouselContext.setActiveItem(index)
    }
  }
  onMounted(() => {
    // 父元素实例增加单个item
    carouselContext.addItem({
      props,
      states: reactive({
        hover,
        translate,
        scale,
        active,
        ready,
        inStage,
        animating,
      }),
      uid: instance.uid,
      translateItem,
    })
  })
  onUnmounted(() => {
    carouselContext.removeItem(instance.uid)
  })
  return {
    active,
    animating,
    hover,
    inStage,
    isVertical,
    translate,
    isCardType,
    scale,
    ready,
    handleItemClick,
  }
}
