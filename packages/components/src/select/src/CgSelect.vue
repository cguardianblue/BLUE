<template>
  <div :class="[cs.baseName]">
    <div :class="[cs.addClass('input-container'), cs.is('disabled', disabled)]">
      <input
        v-model="state.selectLabel"
        type="text"
        readonly
        :placeholder="placeholder"
        :class="[cs.addClass('input')]"
        @click.stop="state.visible = !state.visible"
        :disabled="disabled"
      />
      <div :class="[cs.addClass('icon'), cs.is('rotate', state.visible)]"></div>
    </div>
    <div :class="[cs.addClass('options-container')]" v-show="state.visible">
      <slot />
    </div>
  </div>
</template>
<script setup>
import { reactive, computed, provide, onMounted, watch } from "vue"
import { useClassName } from "hooks"
import { cgSelectKey, selectProps } from "./CgSelectProps"
const props = defineProps(selectProps)
const emits = defineEmits(["update:select-value"])
const COMPONENT_NAME = "select"
const cs = useClassName(COMPONENT_NAME)
const state = reactive({
  optionArr: [],
  selectLabel: "",
  visible: false,
  optionVmArr: [],
})
provide(cgSelectKey, {
  selectValue: computed(() => props.selectValue),
  changeSelectValue,
  addOption,
})
watch(
  () => props.selectValue,
  () => {
    setSelectLabel()
  }
)
watch(
  () => state.optionArr,
  () => {
    setSelectLabel()
  },
  {
    deep: true,
  }
)
function changeSelectValue(value) {
  emits("update:select-value", value)
  state.visible = false
}
function addOption(optionVm) {
  if (!state.optionVmArr.includes(optionVm)) {
    state.optionArr = []
    state.optionVmArr = []
    setTimeout(() => {
      state.optionArr.push({
        value: optionVm.value,
        label: optionVm.label,
      })
      state.optionVmArr.push(optionVm)
    }, 0)
  } else {
    state.optionArr.push({
      value: optionVm.value,
      label: optionVm.label,
    })
    state.optionVmArr.push(optionVm)
  }
}
function setSelectLabel() {
  state.selectLabel =
    state.optionArr.find((option) => option.value === props.selectValue)
      ?.label || ""
}
onMounted(() => {
  setSelectLabel()
})
</script>
<style lang="scss" scoped>
@import "../styles/CgSelect.scss";
</style>
<style>
@import "../../mixin.scss";
</style>
