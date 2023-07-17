<template>
  <div :class="[cs.baseName, cs.is('vertical', props.vertical)]">
    <div :class="[cs.addClass('value')]" v-if="props.vertical">
      {{ props.modelValue }}
    </div>
    <div
      :class="[cs.addClass('runway')]"
      @mousedown="onSliderDown"
      ref="slider"
    >
      <div :class="[cs.addClass('bar')]" :style="barStyle"></div>
      <div
        :class="[cs.addClass('button')]"
        :style="buttonStyle"
        @mousedown.stop="onSliderDown"
      ></div>
    </div>
    <div :class="[cs.addClass('value')]" v-if="!props.vertical">
      {{ props.modelValue }}
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue"
import { useClassName } from "hooks"
import { sliderProps } from "./CgSliderProps.js"
import { useSlider } from "./useSlider"
const COMPONENT_NAME = "slider"
const cs = useClassName(COMPONENT_NAME)
const props = defineProps(sliderProps)
const emits = defineEmits(["update:modelValue"])
const { slider, sliderSize, onSliderDown } = useSlider(props, emits)
const barStyle = computed(() => {
  return props.vertical
    ? {
        height: `${
          Number(sliderSize.currentHeight) <= 100
            ? Number(sliderSize.currentHeight) >= 0
              ? sliderSize.currentHeight
              : 0
            : 100
        }%`,
      }
    : {
        width: `${
          Number(sliderSize.currentWidth) <= 100
            ? sliderSize.currentWidth.toFixed()
            : 100
        }%`,
      }
})
const buttonStyle = computed(() => {
  return props.vertical
    ? {
        top: `${
          100 -
          (Number(sliderSize.currentHeight) <= 100
            ? Number(sliderSize.currentHeight) >= 0
              ? sliderSize.currentHeight
              : 0
            : 100)
        }%`,
      }
    : {
        left: `${
          Number(sliderSize.currentWidth) <= 100
            ? Number(sliderSize.currentWidth) >= 0
              ? sliderSize.currentWidth
              : 0
            : 100
        }%`,
      }
})
</script>
<style lang="scss" scoped>
@import "../styles/CgSlider.scss";
</style>
<style>
@import "../../mixin.scss";
</style>
