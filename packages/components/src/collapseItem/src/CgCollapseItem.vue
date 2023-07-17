<template>
  <div :class="cs.baseName">
    <div
      :class="[cs.addClass('header'), cs.is('active', isActive)]"
      @click="handleHeaderClick"
    >
      <div :class="[cs.addClass('header-title')]">
        <slot name="title">{{ title }}</slot>
      </div>
      <div :class="[cs.addClass('header-arrow')]">
        <div class="arrow"></div>
      </div>
    </div>
    <cg-collapse-transition>
      <div v-show="isActive" :class="[cs.addClass('content')]">
        <div>
          <slot />
        </div>
      </div>
    </cg-collapse-transition>
  </div>
</template>
<script setup>
import CgCollapseTransition from "../../collapseTransition/src/CgCollapseTransition.vue"
import { useClassName } from "hooks"
import { collapseItemProps } from "./CollapseItemProps"
import { useCollapseItem } from "./use-collapse-item"
const COMPONENT_NAME = "collapseItem"
const cs = useClassName(COMPONENT_NAME)
const props = defineProps(collapseItemProps)
const { isActive, handleHeaderClick } = useCollapseItem(props)
defineExpose({
  isActive,
})
</script>
<style lang="scss" scoped>
@import "../styles/CgCollapseItem.scss";
</style>
<style>
@import "../../mixin.scss";
</style>
