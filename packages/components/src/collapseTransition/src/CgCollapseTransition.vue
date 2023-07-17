<template>
  <transition :name="cs.baseName" :class="cs.baseName" v-on="on">
    <slot />
  </transition>
</template>
<script setup>
import { useClassName } from "hooks"
const COMPONENT_NAME = "collapseTransition"
const cs = useClassName(COMPONENT_NAME)

const on = {
  beforeEnter(el) {
    if (!el.dataset) el.dataset = {}

    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom

    el.style.maxHeight = 0
    el.style.paddingTop = 0
    el.style.paddingBottom = 0
  },

  enter(el) {
    el.dataset.oldOverflow = el.style.overflow
    if (el.scrollHeight !== 0) {
      el.style.maxHeight = `${el.scrollHeight}px`
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
    } else {
      el.style.maxHeight = 0
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
    }

    el.style.overflow = "hidden"
  },

  afterEnter(el) {
    el.style.maxHeight = ""
    el.style.overflow = el.dataset.oldOverflow
  },

  beforeLeave(el) {
    if (!el.dataset) el.dataset = {}
    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    el.dataset.oldOverflow = el.style.overflow

    el.style.maxHeight = `${el.scrollHeight}px`
    el.style.overflow = "hidden"
  },

  leave(el) {
    if (el.scrollHeight !== 0) {
      el.style.maxHeight = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    }
  },

  afterLeave(el) {
    el.style.maxHeight = ""
    el.style.overflow = el.dataset.oldOverflow
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom
  },
}
</script>
<style lang="scss" scoped>
@import "../styles/CgCollapseTransition.scss";
</style>
<style>
@import "../../mixin.scss";
</style>
