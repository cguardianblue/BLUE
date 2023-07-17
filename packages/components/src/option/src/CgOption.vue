<template>
  <div
    :class="[cs.baseName, cs.is('active', selectValue === props.value)]"
    @click.stop="selectOptionClick"
  >
    <div :class="[cs.addClass('text')]">
      {{ props.label }}
    </div>
    <div
      :class="[cs.addClass('icon')]"
      v-if="props.icon && selectValue === props.value"
    ></div>
  </div>
</template>
<script setup>
import { inject, getCurrentInstance } from "vue"
import { useClassName } from "hooks"
import { cgSelectKey } from "../../select/src/CgSelectProps"
import { optionProps } from "./CgOptionProps"
const props = defineProps(optionProps)
const COMPONENT_NAME = "select-option"
const cs = useClassName(COMPONENT_NAME)
const { selectValue, changeSelectValue, addOption } = inject(cgSelectKey, {})
function selectOptionClick() {
  changeSelectValue(props.value)
}
const vm = getCurrentInstance().proxy
addOption(vm)
</script>
<style lang="scss" scoped>
@import "../styles/CgOption.scss";
</style>
<style>
@import "../../mixin.scss";
</style>
