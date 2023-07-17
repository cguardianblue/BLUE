<template>
  <div :class="cs.baseName">
    <slot />
  </div>
</template>
<script setup>
import { reactive, provide } from "vue"
import { useClassName } from "hooks"
import { cgTimeLineKey } from "../../timeLineItem/src/CgTimeLineItemProps"
const COMPONENT_NAME = "timeLine"
const cs = useClassName(COMPONENT_NAME)
const state = reactive({
  timeLineArr: [],
})
function addTimeLineItem(timeLineItem) {
  state.timeLineArr.push(timeLineItem)
}
provide(cgTimeLineKey, {
  parent: state,
  addTimeLineItem,
})
</script>
