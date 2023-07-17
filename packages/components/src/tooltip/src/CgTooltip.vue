<template>
  <div :class="[cs.baseName]">
    <div
      :class="[cs.addClass('trigger')]"
      @mouseenter="onMouseenter"
      @mouseleave="onMouseleave"
      @click="onClick"
    >
      <slot name="trigger"></slot>
    </div>
    <div
      :class="[
        cs.addClass('content-container'),
        cs.is('right', placement === 'right'),
      ]"
      v-if="contentShow"
    >
      <div :class="[cs.addClass('close')]" v-if="placement === 'left'">
        <div :class="[cs.addClass('close-icon')]" @click="contentShow = false">
          X
        </div>
      </div>
      <div :class="[cs.addClass('content')]"><slot name="content"></slot></div>
      <div :class="[cs.addClass('close')]" v-if="placement === 'right'">
        <div :class="[cs.addClass('close-icon')]" @click="contentShow = false">
          X
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watchEffect } from "vue"
import { useClassName } from "hooks"
import { tooltipProps } from "./CgTooltipProps"
// import { cgTooltipKey } from './CgTooltipProps'
let contentShow = ref(false)
const COMPONENT_NAME = "tooltip"
const cs = useClassName(COMPONENT_NAME)
const props = defineProps(tooltipProps)
watchEffect(() => {
  if (props.trigger === "always") {
    contentShow.value = true
  }
})
function onMouseenter() {
  if (props.trigger === "hover") {
    contentShow.value = true
  }
}
function onMouseleave() {
  if (props.trigger === "hover") {
    contentShow.value = false
  }
}
function onClick() {
  if (props.trigger === "click") {
    contentShow.value = !contentShow.value
  }
}
</script>
<style lang="scss" scoped>
@import "../styles/CgTooltip.scss";
</style>
<style>
@import "../../mixin.scss";
</style>
