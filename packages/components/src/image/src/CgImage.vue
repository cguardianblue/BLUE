<template>
  <img
    v-show="!imageReqDone || imageLoadingError"
    ref="cgImage_default"
    class="cgImage_default"
    :src="defaultSrc"
  />
  <img
    v-if="imageSrc !== undefined && !imageLoadingError"
    :src="imageSrc"
    v-bind="attrs"
    class="cgImage"
    ref="cgImage"
    :style="{ opacity }"
    :loading="props.loading"
    @load="onload"
    @error="onerror"
    v-img-hov="props.imageHover"
    alt=""
  />
</template>
<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: "CgImage",
})
</script>

<script setup>
import { imageProps } from "./props"
import { computed, ref, onMounted, nextTick, watch, useAttrs } from "vue"

const props = defineProps(imageProps)
const attrs = useAttrs()

const cgImage_default = ref(null)
const cgImage = ref(null)

const imageLoadingSuccess = ref(false) // 图片加载成功
const imageLoadingError = ref(false) // 图片加载失败
const imageReqDone = ref(false) // 图片请求结束

const imageDefaultWidth = ref("")
const imageDefaultHeight = ref("")

let addListenerDone = false
const opacity = computed(() => {
  return imageLoadingSuccess.value ? "1" : "0"
})

const imageSrc = ref()

let supportLoading = ref(false)

// 是否需要手动开启懒加载
const isManual = computed(() => {
  if (props.loading === "eager") return false
  return !supportLoading.value && props.loading === "lazy"
})

const vImgHov = {
  mounted: (el, binding) => {
    if (!binding.value) return
    el.style.transition = "transform 0.5s ease"
    el.onmouseover = function () {
      this.style.transform = "scale(1.2)"
    }
    el.onmouseout = function () {
      this.style.transform = "scale(1)"
    }
  },
}
onMounted(async () => {
  supportLoading.value = "loading" in HTMLImageElement.prototype
  await initContainer()
  if (isManual.value) {
    addLoadingLazyListener()
  } else {
    loadImage()
  }
})

watch(
  () => props.src,
  (newSrc) => {
    if (!newSrc) return
    if (isManual.value) {
      addLoadingLazyListener()
    } else {
      loadImage()
    }
  }
)

function addLoadingLazyListener() {
  if (IntersectionObserver) {
    const io = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0) {
        loadImage()
        io.unobserve(cgImage_default.value)
      }
    })
    io.observe(cgImage_default.value)
  } else {
    // 浏览器不支持IntersectionObserver
    // 用监听滚动的方式
    addListener()
    addListenerDone = true
  }
}

async function initContainer() {
  await nextTick()
  const parentEl = cgImage_default.value.parentNode
  if (!parentEl) return
  parentEl.style.position = "relative"
  parentEl.style.overflow = "hidden"
  parentEl.style.backgroundColor = "#f9f9fb"
  const elWidth_number = parseFloat(parentEl.clientWidth)

  if (1600 > elWidth_number && elWidth_number >= 700) {
    imageDefaultWidth.value = 490 + "px"
    imageDefaultHeight.value = 44 + "px"
  } else if (700 > elWidth_number && elWidth_number >= 400) {
    imageDefaultWidth.value = 490 * 0.7 + "px"
    imageDefaultHeight.value = 44 * 0.7 + "px"
  } else if (400 > elWidth_number && elWidth_number >= 300) {
    imageDefaultWidth.value = 490 * 0.45 + "px"
    imageDefaultHeight.value = 44 * 0.45 + "px"
  } else if (300 > elWidth_number && elWidth_number >= 180) {
    imageDefaultWidth.value = 490 * 0.3 + "px"
    imageDefaultHeight.value = 44 * 0.3 + "px"
  } else {
    cgImage_default.value.style.display = "none"
  }
}

function loadImage() {
  imageReqDone.value = false
  imageLoadingError.value = false
  imageSrc.value = props.src
}

async function onload() {
  await nextTick()
  if (!cgImage_default.value) return
  imageReqDone.value = true
  imageLoadingSuccess.value = true
  imageLoadingError.value = false
  const parentEl = cgImage_default.value.parentNode
  parentEl.style.backgroundColor = "white"

  if (addListenerDone) {
    document.removeEventListener("scroll", lazyLoad)
    window.removeEventListener("resize", lazyLoad)
    window.removeEventListener("orientationChange", lazyLoad)
  }
}

function onerror() {
  imageReqDone.value = true
  imageLoadingSuccess.value = false
  imageLoadingError.value = true
}

function addListener() {
  document.addEventListener("scroll", lazyLoad)
  window.addEventListener("resize", lazyLoad)
  window.addEventListener("orientationChange", lazyLoad)
}

function isInViewPort(element) {
  const viewHeight = window.innerHeight || document.documentElement.clientHeight
  const { top, left } = element.getBoundingClientRect()

  return top >= 0 && top <= viewHeight && left >= 0
}

function lazyLoad() {
  if (lazyLoadThrottleTimeout) {
    clearTimeout(lazyLoadThrottleTimeout)
  }
  let lazyLoadThrottleTimeout = setTimeout(function () {
    if (isInViewPort(cgImage_default.value)) {
      loadImage()
    }
  }, 100)
}
</script>
<style scoped lang="scss">
.cgImage {
  width: 100%;
  height: 100%;
  object-fit: v-bind("props.fit");
}

.cgImage_default {
  display: inline;
  position: absolute;
  opacity: 0.16;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: v-bind("imageDefaultWidth");
  height: v-bind("imageDefaultHeight");
}
</style>
