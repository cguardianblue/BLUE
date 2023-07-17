<template>
  <template v-if="uiLoading">
    <div
      :class="['cg-skeleton', animated ? 'is-animated' : '']"
      v-bind="$attrs"
    >
      <template v-for="i in count" :key="i">
        <slot v-if="loading" :key="i" name="template">
          <cg-skeleton-item class="is-first" variant="p" />
          <cg-skeleton-item
            v-for="item in rows"
            :key="item"
            :class="[
              'cg-skeleton__paragraph',
              item === rows && rows > 1 ? 'is-last' : '',
            ]"
            variant="p"
          />
        </slot>
      </template>
    </div>
  </template>
  <template v-else>
    <slot v-bind="$attrs" />
  </template>
</template>
<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: "CgSkeleton",
})
</script>

<script setup>
import { toRef } from "vue"
import { useThrottleRender } from "./hooks"
import { skeletonProps } from "./CgSkeletonProps.js"
import CgSkeletonItem from "../../skeletonItem/src/CgSkeletonItem.vue"

const props = defineProps(skeletonProps)

const uiLoading = useThrottleRender(toRef(props, "loading"), props.throttle)

defineExpose({
  uiLoading,
})
</script>
<style scoped lang="scss">
@import "../styles/CgSkeleton.scss";
</style>
