<template>
  <TransitionGroup :name="onlyOne ? 'one' : 'list'" tag="ul" class="toast-list">
    <li v-for="item in list" :key="item.message">
      <CgToast v-bind="item" />
    </li>
  </TransitionGroup>
</template>

<script setup>
import CgToast from "./CgToast.vue"
import { computed, ref, watch } from "vue"

let timer = null
let timerOut = null
const toastList = ref([])
const onlyOne = ref(false)

const hideToasts1 = () => {
  let len = 0
  timer = setInterval(() => {
    len = toastList.value.length
    if (len === 0) {
      clearInterval(timer)
    }
    onlyOne.value = false
    if (len === 2 || len === 1) {
      if (len === 1) onlyOne.value = true
      if (timerOut) return
      timerOut = setTimeout(() => {
        toastList.value = toastList.value.slice(1)
        clearTimeout(timerOut)
        timerOut = null
      }, toastList.value[0].duration || 3000)
    }
  }, 500)
}

watch(toastList, () => {
  clearInterval(timer)
  clearTimeout(timerOut)
  timerOut = null
  hideToasts1()
})

const list = computed(() => {
  const len = toastList.value.length
  if (len > 2) {
    return toastList.value.slice(1)
  }
  return toastList.value
})

defineExpose({
  toastList,
})
</script>

<style scoped lang="scss">
@import "../styles/CgToastGroup.scss";
</style>
