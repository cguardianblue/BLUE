<template>
  <div
    class="waterfall-wrapper"
    :style="{ width: wrapperWidth + 'px', height: wrapperHeight + 'px' }"
  >
    <div
      class="waterfall-item"
      :style="item.styles || { width: colWidth + 'px' }"
      v-for="(item, index) in actualList"
      :key="index"
    >
      <slot :item="item" :index="index"></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: "CgWaterfall",
})
</script>

<script setup>
import { computed, onMounted, toRefs, watch, onBeforeUnmount } from "vue"
import { CgWaterfallProps } from "./props"
import { calculateColumn } from "./calculateColumn"
import { setLayout } from "./setLayout"

const props = defineProps(CgWaterfallProps)

const { list, colWidth, gap, bottomGap, onceLoadMax, isMounted, isFinished } =
  toRefs(props)
const { distanceToScroll, scrollBodySelector, imageWidthKey, imageHeightKey } =
  toRefs(props)
const emit = defineEmits(["scroll-reach-bottom"])
const { actualCols, colsTop, calculateActualColumn } = calculateColumn(
  colWidth,
  gap
)
const { imageWidthKeyArr, imageHeightKeyArr } = preHandleImageSize()
const {
  actualList,
  wrapperHeight,
  isOver,
  setActualList,
  setLastLayoutIndex,
  setWaterfallLayout,
} = setLayout(
  list,
  colWidth,
  actualCols,
  gap,
  colsTop,
  bottomGap,
  onceLoadMax,
  imageWidthKeyArr,
  imageHeightKeyArr
)

const wrapperWidth = computed(() => {
  return props.colWidth * actualCols.value + props.gap * (actualCols.value - 1)
})

function init() {
  setLastLayoutIndex(-1)
  setActualList([])
  calculateActualColumn()
  if (list.value.length > 0) {
    setWaterfallLayout()
  }
}

onMounted(() => {
  scrollElement = window
  body = document.documentElement || document.body
  init()
  scrollElement.addEventListener("scroll", scrollFn)
})

onBeforeUnmount(() => {
  scrollElement.removeEventListener("scroll", scrollFn)
})

watch(
  () => props.list,
  (newVal, oldValue) => {
    if (newVal[0] !== oldValue[0]) {
      init()
      return
    }
    setWaterfallLayout()
  }
)

let scrollElement, body, scrollTimeoutHandle

watch(isMounted, (newVal) => {
  if (scrollBodySelector.value && newVal) {
    scrollElement.removeEventListener("scroll", scrollFn)
    scrollElement = body = document.querySelector(scrollBodySelector)
    scrollElement.addEventListener("scroll", scrollFn)
  }
})

function scrollFn() {
  if (isOver.value === false || isFinished.value === true) return
  const [scrollHeight, scrollTop, clientHeight] = [
    body.scrollHeight,
    body.scrollTop,
    body.clientHeight,
  ]
  if (scrollHeight - scrollTop - clientHeight <= distanceToScroll.value) {
    clearTimeout(scrollTimeoutHandle)
    scrollTimeoutHandle = setTimeout(() => {
      emit("scroll-reach-bottom")
    }, 200)
  }
}

function preHandleImageSize() {
  let imageWidthKeyArr = [],
    imageHeightKeyArr = []
  if (typeof imageWidthKey.value === "string") {
    imageWidthKeyArr.push(imageWidthKey)
  } else {
    imageWidthKeyArr = imageWidthKey
  }
  if (typeof imageHeightKey.value === "string") {
    imageHeightKeyArr.push(imageHeightKey)
  } else {
    imageHeightKeyArr = imageHeightKey
  }
  return {
    imageWidthKeyArr,
    imageHeightKeyArr,
  }
}
</script>
<style scoped lang="scss">
.waterfall-wrapper {
  width: 100%;
  position: relative;
}

.waterfall-item {
  position: absolute;
}
</style>
