<template>
  <div
    v-show="ready"
    :class="[
      'cg-swiper__item',
      active ? 'cg-swiper__active' : '',
      inStage ? 'cg-swiper__inStage' : '',
      hover ? 'cg-swiper__hover' : '',
      animating ? 'cg-swiper__animating' : '',
      { 'cg-swiper__card': isCardType },
    ]"
    :style="itemStyle"
    @click="handleItemClick"
  >
    <div v-if="isCardType" v-show="!active" :class="'cg-swiper__item-mask'" />
    <slot />
  </div>
</template>
<script>
import { defineComponent } from "vue"
export default defineComponent({
  name: "CgSwiperItem",
})
</script>
<script setup>
import { computed, unref } from "vue"
import { swiperItemProps } from "./SwiperItemProps"
import { useSwiperItem } from "./use-swiper-item"
const props = defineProps(swiperItemProps)
// inject
const {
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
} = useSwiperItem(props)

const itemStyle = computed(() => {
  const translateType = `translate${unref(isVertical) ? "Y" : "X"}`
  const _translate = `${translateType}(${unref(translate)}px)`
  const _scale = `scale(${unref(scale)})`
  const transform = [_translate, _scale].join(" ")

  return {
    transform,
  }
})
</script>
<style lang="scss">
@import "../styles/CgSwiperItem.scss";
</style>
