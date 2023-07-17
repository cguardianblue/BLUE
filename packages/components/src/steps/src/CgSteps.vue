<template>
  <div :class="cs.baseName">
    <slot />
  </div>
</template>
<script setup>
import { reactive, provide, computed, onMounted } from "vue"
import { useClassName } from "hooks"
import { cgStepsKey, stepsProps } from "./CgStepsProps"
const props = defineProps(stepsProps)
// const emits = defineEmits(["update:active-value"])
const COMPONENT_NAME = "steps"
const cs = useClassName(COMPONENT_NAME)
const state = reactive({
  stepArr: [],
})
provide(cgStepsKey, {
  addStep,
  parent: state,
  activeValue: computed(() => props.activeValue),
})
function addStep({ title, uid, setIndex }) {
  state.stepArr.push({
    title,
    uid,
    setIndex,
  })
}
onMounted(() => {
  state.stepArr.forEach(({ setIndex }, stepIndex) => {
    setIndex(stepIndex)
  })
})
</script>
<style lang="scss" scoped>
@import "../styles/CgSteps.scss";
</style>
<style>
@import "../../mixin.scss";
</style>
