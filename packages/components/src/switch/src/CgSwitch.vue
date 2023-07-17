<template>
  <div
    :class="[cs.baseName, cs.is('disabled', props.disabled)]"
    @click="changeSwitch"
  >
    <div
      :class="[
        cs.addClass('bg'),
        cs.is('active', props.modelValue === props.activeValue),
      ]"
    >
      <div
        :class="[
          cs.addClass('action'),
          cs.is('active', props.modelValue === props.activeValue),
        ]"
      ></div>
    </div>
  </div>
</template>
<script setup>
import { toRefs } from "vue"
import { useClassName } from "hooks"
import { switchProps } from "./CgSwitchProps"
const COMPONENT_NAME = "switch"
const cs = useClassName(COMPONENT_NAME)
const props = defineProps(switchProps)
const emits = defineEmits(["update:modelValue"])
const { width } = toRefs(props)
function changeSwitch() {
  if (props.disabled) return
  if (props.modelValue === props.activeValue) {
    emits("update:modelValue", props.inactiveValue)
  } else if (props.modelValue === props.inactiveValue) {
    emits("update:modelValue", props.activeValue)
  }
}
</script>
<style lang="scss" scoped>
@import "../styles/CgSwitch.scss";
.cg-switch-bg {
  width: v-bind("width");
}
</style>
<style>
@import "../../mixin.scss";
</style>
