<template>
  <div
    :class="[cs.baseName, { 'is-disabled': trueDisabled }]"
    @click="handleClick"
  >
    <div
      :class="[cs.addClass('circle'), cs.is('check', trueValue === label)]"
    ></div>
    <div class="checkbox-text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
  name: "CgRadio",
})
</script>
<script setup>
import { ref, computed, watch, inject } from "vue"
import { RadioProps } from "./RadioProps"
import { cgRadioGroupKey } from "../../radioGroup/src/RadioGroupProps"
import { useClassName } from "hooks"
const COMPONENT_NAME = "radio"
const cs = useClassName(COMPONENT_NAME)
let model = inject(cgRadioGroupKey, null)
let isGroup = ref(model ? true : false)
let trueValue = computed(() => {
  return isGroup.value ? model.modelValue.value : props.modelValue
})
let trueDisabled = computed(() => {
  return isGroup.value
    ? model.disabled.value
      ? model.disabled.value
      : props.disabled
    : props.disabled
})
const props = defineProps(RadioProps)
const emits = defineEmits(["update:modelValue", "change"])
watch(
  () => props.modelValue,
  (value) => {
    emits("update:modelValue", value)
    // emits("change", value)
  },
  {
    immediate: true,
  }
)

function handleClick() {
  if (props.disabled) return
  if (isGroup.value) {
    model.changeValue(props.label)
  } else {
    if (props.label === trueValue.value) return
    emits("update:modelValue", props.label)
    emits("change", props.label)
  }
}
</script>
<style lang="scss" scoped>
@import "../styles/CgRadio.scss";
</style>
<style>
@import "../../mixin.scss";
</style>
