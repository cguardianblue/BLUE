<template>
  <div :class="cs.baseName">
    <slot />
  </div>
</template>
<script setup>
import { computed, provide } from "vue"
import { useClassName } from "hooks"
import { checkboxGroupProps, cgCheckboxGroupKey } from "./CheckboxGroupProps"
import { useCheckboxGroup } from "./use-checkboxGroup"
const COMPONENT_NAME = "checkoutboxGroup"
const cs = useClassName(COMPONENT_NAME)
const props = defineProps(checkboxGroupProps)
const emits = defineEmits(["update:model-value", "change"])
useCheckboxGroup()
function changeValue(value) {
  emits("update:model-value", value)
  emits("change", value)
}
provide(cgCheckboxGroupKey, {
  modelValue: computed(() => props.modelValue),
  disabled: computed(() => props.disabled),
  changeValue,
})
</script>
<style lang="scss" scoped>
@import "../../mixin.scss";
@import "../styles/CgCheckboxGroup.scss";
</style>
