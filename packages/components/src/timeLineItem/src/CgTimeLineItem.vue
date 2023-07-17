<template>
  <div :class="cs.baseName">
    <!--竖线-->
    <div
      :class="[cs.addClass('tail'), cs.is('active', props.status === '2')]"
      v-if="
        parent.timeLineArr[parent.timeLineArr.length - 1].uid !== instance.uid
      "
    ></div>
    <!--圆点-->
    <div v-if="props.status === '3'" :class="[cs.addClass('circle2')]"></div>
    <div
      v-else
      :class="[cs.addClass('circle'), cs.is('active', props.status === '2')]"
    ></div>
    <div :class="[cs.addClass('content-container')]">
      <div :class="[cs.addClass('title')]">{{ props.title }}</div>
      <div :class="[cs.addClass('time')]">{{ props.time }}</div>
      <div :class="[cs.addClass('content')]"><slot /></div>
    </div>
  </div>
</template>
<script setup>
import { reactive, inject, getCurrentInstance } from "vue"
import { useClassName } from "hooks"
import { timeLineItemProps, cgTimeLineKey } from "./CgTimeLineItemProps"
const COMPONENT_NAME = "timeLineItem"
const cs = useClassName(COMPONENT_NAME)
const props = defineProps(timeLineItemProps)
const color = reactive({ titleColor: props.titleColor })
const { parent, addTimeLineItem } = inject(cgTimeLineKey, {})
const instance = getCurrentInstance()
addTimeLineItem({ ...props, uid: instance.uid })
</script>
<style lang="scss" scoped>
@import "../styles/CgTimeLineItem.scss";
.cg-timeLineItem-title {
  font-size: var(--cg-timeLine-title-fontSize);
  // color: var(--cg-timeLine-title-color);
  color: v-bind("color.titleColor");
}
</style>
<style>
@import "../../mixin.scss";
</style>
