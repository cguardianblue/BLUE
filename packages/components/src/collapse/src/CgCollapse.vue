<template>
  <div :class="cs.baseName">
    <slot />
  </div>
</template>
<script setup>
import { useClassName } from "hooks"
import { collapseProps } from "./CollapseProps"
import { useCollapse } from "./use-collapse"
const COMPONENT_NAME = "collapse"
const cs = useClassName(COMPONENT_NAME)
const props = defineProps(collapseProps)
const emits = defineEmits(["update:active-value", "change"])
const { activeNames, setActiveNames } = useCollapse(props, emits)
defineExpose({
  activeNames,
  setActiveNames,
})
</script>
<style lang="scss" scoped>
@import "../../mixin.scss";
.cg-collapse {
  background-color: #ffffff;
}
</style>
