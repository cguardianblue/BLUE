<template>
  <div
    class="checkbox-container"
    @click="handleClick"
    :class="{ 'is-disabled': trueDisabled }"
  >
    <div class="checkbox-rect" :class="{ check: value }"></div>
    <div class="checkbox-text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
  name: "CgCheckbox",
})
</script>
<script setup>
import { ref, computed, watch, inject } from "vue"
import { cgCheckboxGroupKey } from "../../checkboxGroup/src/CheckboxGroupProps"
let model = inject(cgCheckboxGroupKey, null)
let isGroup = ref(model ? true : false)
let value = computed(() => {
  return isGroup.value
    ? model.modelValue.value.includes(props.label)
    : props.modelValue
})
let trueDisabled = computed(() => {
  return isGroup.value
    ? model.disabled.value
      ? model.disabled.value
      : props.disabled
    : props.disabled
})
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "",
  },
})
const emits = defineEmits(["update:modelValue", "change"])
const currentStatus = computed(() => props.modelValue)
watch(
  () => props.modelValue,
  (value) => {
    emits("update:modelValue", value)
  },
  {
    immediate: true,
  }
)

function handleClick() {
  if (props.disabled) return
  if (isGroup.value) {
    if (model.modelValue.value.includes(props.label)) {
      model.changeValue(
        model.modelValue.value.filter((item) => item !== props.label)
      )
    } else {
      let tempArr = [...model.modelValue.value]
      tempArr.push(props.label)
      model.changeValue(tempArr)
    }
  } else {
    emits("update:modelValue", !currentStatus.value)
    emits("change", !currentStatus.value)
  }
}
</script>

<style scoped lang="scss">
@import "../../mixin.scss";
@import "../styles/CgCheckbox.scss";
</style>
