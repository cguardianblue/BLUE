<template>
  <div v-show="show">
    <slot></slot>
  </div>
</template>
<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: "CgTabPane",
})
</script>
<script setup>
import { computed, inject, watch } from "vue"

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  name: {
    type: [String, Number],
    required: true,
  },
})
const { updateLabels, isShow } = inject("tab-func")

const show = computed(() => props.name === isShow.value)

watch(
  () => props.label,
  () => {
    updateLabels()
  }
)

defineExpose({
  show,
})
</script>
