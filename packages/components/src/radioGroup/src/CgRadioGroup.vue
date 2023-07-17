<template>
  <div :class="cs.baseName">
    <slot />
  </div>
</template>
<script setup>
import { computed, provide } from "vue"
import { useClassName } from "hooks"
import { radioGroupProps, cgRadioGroupKey } from "./RadioGroupProps"
const COMPONENT_NAME = "checkoutboxGroup"
const cs = useClassName(COMPONENT_NAME)
const props = defineProps(radioGroupProps)
const emits = defineEmits(["update:model-value", "change"])
function changeValue(value) {
  emits("update:model-value", value)
  emits("change", value)
}
provide(cgRadioGroupKey, {
  modelValue: computed(() => props.modelValue),
  disabled: computed(() => props.disabled),
  changeValue,
})
</script>
<style lang="scss" scoped>
@import "../../mixin.scss";
@import "../styles/CgRadioGroup.scss";
</style>
