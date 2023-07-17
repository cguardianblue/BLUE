<template>
  <div
    ref="root"
    :class="classList"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave"
  >
    <div class="cg-swiper__container" :style="{ height: height }">
      <transition v-if="arrowDisplay" name="swiper-arrow-left">
        <button
          v-show="
            (arrow === 'always' || hover) && (props.loop || activeIndex > 0)
          "
          type="button"
          class="cg-swiper__arrow cg-swiper__left"
          @click.stop="throttledArrowClick(activeIndex - 1)"
        >
          <span>&lt;</span>
        </button>
      </transition>
      <transition v-if="arrowDisplay" name="swiper-arrow-right">
        <button
          v-show="
            (arrow === 'always' || hover) &&
            (props.loop || activeIndex < items.length - 1)
          "
          type="button"
          class="cg-swiper__arrow cg-swiper__right"
          @click.stop="throttledArrowClick(activeIndex + 1)"
        >
          >
        </button>
      </transition>
      <slot />
    </div>
    <ul v-if="indicatorPosition !== 'none'" :class="indicatorsClassList">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="[
          'cg-swiper__indicator',
          'cg-swiper__indicator-' + direction,
          index === activeIndex ? 'active' : '',
        ]"
        @mouseenter="throttledIndicatorHover(index)"
        @click.stop="handleIndicatorClick(index)"
      >
        <button class="cg-swiper__button">
          <span v-if="hasLabel">{{ item.props.label }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
import { defineComponent } from "vue"
export default defineComponent({
  name: "CgSwiper",
})
</script>
<script setup>
import { computed, unref } from "vue"
import { swiperProps, swiperEmits } from "./SwiperProps"
import { useSwiper } from "./use-swiper"

const props = defineProps(swiperProps)
const emit = defineEmits(swiperEmits)
const {
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
} = useSwiper(props, emit)
// swiper父容器类名list
const classList = computed(() => {
  const classList = ["cg-swiper", "cg-swiper__" + props.direction]
  if (unref(isCardType)) {
    classList.push("cg-swiper--card")
  }
  return classList
})
const indicatorsClassList = computed(() => {
  const classes = [
    "cg-swiper__indicators",
    "cg-swiper__indicators--" + props.direction,
  ]
  if (unref(hasLabel)) {
    classes.push("cg-swiper__indicators-labels")
  }
  if (props.indicatorPosition === "outside" || unref(isCardType)) {
    classes.push("cg-swiper__indicators-outside")
  }
  return classes
})
//导出方法，供直接调用
defineExpose({
  setActiveItem,
  prev,
  next,
})
</script>
<style lang="scss">
@import "../styles/CgSwiper.scss";
</style>
