<!-- @format -->

<template>
  <div class="CgToast" v-if="show">
    <div class="toast-box" :class="[ownIcon ? 'ownIcon' : 'onlyText']">
      <ToastIcon :type="props.type" style="margin-bottom: 10px" />
      <span>{{ props.message }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: "CgToast",
})
</script>

<script setup>
import ToastIcon from "./ToastIcon.vue"
import { toastProps } from "./props"
import { computed, onMounted, ref } from "vue"

const props = defineProps(toastProps)

const ownIcon = computed(() => {
  return props.type !== ""
})

const show = ref(props.show)
defineExpose({ show })

onMounted(() => {
  // setTimeout(() => {
  //   show.value = false
  // }, props.duration)
})
</script>
<style lang="scss" scoped>
@import "../styles/CgToast.scss";
</style>
