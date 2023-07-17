<template>
  <div
    :class="[
      cs.baseName,
      cs.is(
        'last',
        parent.stepArr[parent.stepArr.length - 1].uid === currentInstance.uid
      ),
    ]"
  >
    <div :class="[cs.addClass('title'), cs.is('active', index <= activeValue)]">
      <div :class="[cs.addClass('title-num')]">{{ index + 1 }}</div>
      <div :class="[cs.addClass('title-text')]">{{ props.title }}</div>
    </div>
    <div
      :class="[cs.addClass('arrow'), cs.is('active', index < activeValue)]"
      v-if="
        parent.stepArr[parent.stepArr.length - 1].uid !== currentInstance.uid
      "
    >
      <div :class="[cs.addClass('arrow-line')]"></div>
    </div>
  </div>
</template>
<script setup>
import { ref, inject, getCurrentInstance } from "vue"
import { useClassName } from "hooks"
import { stepProps } from "./CgStepProps"
import { cgStepsKey } from "../../steps/src/CgStepsProps"
const currentInstance = getCurrentInstance()
const props = defineProps(stepProps)
const index = ref(-1)
const COMPONENT_NAME = "step"
const cs = useClassName(COMPONENT_NAME)
const { addStep, parent, activeValue } = inject(cgStepsKey)
addStep({ title: props.title, uid: currentInstance.uid, setIndex })
function setIndex(val) {
  index.value = val
}
</script>
<style lang="scss" scoped>
@import "../styles/CgStep.scss";
</style>
<style>
@import "../../mixin.scss";
</style>
