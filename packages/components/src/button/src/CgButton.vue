<template>
  <button
    ref="root"
    :class="[
      cs.baseName,
      cs.addClass('type-' + type),
      cs.addClass('size-' + size),
      cs.is('disabled', disabled),
      cs.is('round', round),
    ]"
    :disabled="disabled"
    :style="buttonStyle"
    @click="handleClick"
  >
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>
<script setup>
import { useClassName } from "hooks"
import { buttonProps, buttonEmits } from "./CgButtonProps"
import { useButton } from "./use-button"
import { useButtonCustomStyle } from "./button-custom"
const COMPONENT_NAME = "button"
const cs = useClassName(COMPONENT_NAME)
const props = defineProps(buttonProps)
const emits = defineEmits(buttonEmits)
const buttonStyle = useButtonCustomStyle(props)
const { root, handleClick } = useButton(props, emits)
defineExpose({
  ref: root,
})
</script>
<style lang="scss" scoped>
@import "../styles/CgButton.scss";
</style>
<style>
@import "../../mixin.scss";
</style>
