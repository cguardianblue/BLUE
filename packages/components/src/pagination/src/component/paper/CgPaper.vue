<template>
  <ul :class="cs.baseName" @click="onPagerClick" @keyup.enter="onEnter">
    <li
      v-if="paginationContext.pageCount.value > 0"
      :class="[
        cs.addClass('number'),
        cs.is('active', paginationContext.currentPage.value === 1),
        cs.is('disabled', paginationContext.disabled.value),
      ]"
    >
      1
    </li>
    <li
      v-if="showPrevMore"
      :class="[
        cs.addClass('number'),
        'more',
        'btn-quickprev',
        cs.is('disabled', paginationContext.disabled.value),
      ]"
      @focus="onFocus(true)"
      @blur="quickPrevFocus = false"
    >
      ...
    </li>
    <li
      v-for="pager in pagers"
      :key="pager"
      :class="[
        cs.addClass('number'),
        cs.is('active', paginationContext.currentPage.value === pager),
        cs.is('disabled', paginationContext.disabled.value),
      ]"
      class="number"
    >
      {{ pager }}
    </li>
    <li
      v-if="showNextMore"
      :class="[
        cs.addClass('number'),
        'more',
        'btn-quicknext',
        cs.is('disabled', paginationContext.disabled.value),
      ]"
      @focus="onFocus()"
      @blur="quickNextFocus = false"
    >
      ...
    </li>
    <li
      v-if="paginationContext.pageCount.value > 1"
      :class="[
        cs.addClass('number'),
        cs.is(
          'active',
          paginationContext.currentPage.value ===
            paginationContext.pageCount.value
        ),
        cs.is('disabled', paginationContext.disabled.value),
      ]"
      class="number"
    >
      {{ paginationContext.pageCount.value }}
    </li>
  </ul>
</template>
<script setup>
import { ref, computed, watchEffect } from "vue"
import { usePagination } from "../../use-pagination"
import { useClassName } from "hooks"
const COMPONENT_NAME = "pagination-paper"
const cs = useClassName(COMPONENT_NAME)
const showPrevMore = ref(false)
const showNextMore = ref(false)
const quickPrevFocus = ref(false)
const quickNextFocus = ref(false)
const paginationContext = usePagination()
const pagers = computed(() => {
  const pagerCount = paginationContext.pagerCount
  const halfPagerCount = (pagerCount - 1) / 2
  const currentPage = Number(paginationContext.currentPage.value)
  const pageCount = Number(paginationContext.pageCount.value)
  let showPrevMore = false
  let showNextMore = false
  if (pageCount > pagerCount) {
    if (currentPage > pagerCount - halfPagerCount) {
      showPrevMore = true
    }
    if (currentPage < pageCount - halfPagerCount) {
      showNextMore = true
    }
  }
  const array = []
  if (showPrevMore && !showNextMore) {
    const startPage = pageCount - (pagerCount - 2)
    for (let i = startPage; i < pageCount; i++) {
      array.push(i)
    }
  } else if (!showPrevMore && showNextMore) {
    for (let i = 2; i < pagerCount; i++) {
      array.push(i)
    }
  } else if (showPrevMore && showNextMore) {
    const offset = Math.floor(pagerCount / 2) - 1
    for (let i = currentPage - offset; i <= currentPage + offset; i++) {
      array.push(i)
    }
  } else {
    for (let i = 2; i < pageCount; i++) {
      array.push(i)
    }
  }
  return array
})
watchEffect(() => {
  const halfPagerCount = (paginationContext.pagerCount - 1) / 2
  showPrevMore.value = false
  showNextMore.value = false
  if (paginationContext.pageCount.value > paginationContext.pagerCount) {
    if (
      paginationContext.currentPage.value >
      paginationContext.pagerCount - halfPagerCount
    ) {
      showPrevMore.value = true
    }
    if (
      paginationContext.currentPage.value <
      paginationContext.pageCount.value - halfPagerCount
    ) {
      showNextMore.value = true
    }
  }
})
function onFocus(forward = false) {
  if (forward) {
    quickPrevFocus.value = true
  } else {
    quickNextFocus.value = true
  }
}
function onEnter(e) {
  const target = e.target
  if (
    target.tagName.toLowerCase() === "li" &&
    Array.from(target.classList).includes("number")
  ) {
    const newPage = Number(target.textContent)
    if (newPage !== paginationContext.currentPage.value) {
      // emit("change", newPage)
    }
  } else if (
    target.tagName.toLowerCase() === "li" &&
    Array.from(target.classList).includes("more")
  ) {
    onPagerClick(e)
  }
}
function onPagerClick(event) {
  const target = event.target
  if (
    target.tagName.toLowerCase() === "ul" ||
    paginationContext.disabled.value
  ) {
    return
  }
  let newPage = Number(target.textContent)
  const pageCount = paginationContext.pageCount.value
  const currentPage = paginationContext.currentPage.value
  const pagerCountOffset = paginationContext.pagerCount - 2
  if (target.className.includes("more")) {
    if (target.className.includes("quickprev")) {
      newPage = currentPage - pagerCountOffset
    } else if (target.className.includes("quicknext")) {
      newPage = currentPage + pagerCountOffset
    }
  }
  if (!Number.isNaN(+newPage)) {
    if (newPage < 1) {
      newPage = 1
    }
    if (newPage > pageCount) {
      newPage = pageCount
    }
  }
  if (newPage !== currentPage) {
    paginationContext.handleCurrentChange(newPage)
  }
}
</script>
<style lang="scss" scoped>
@import "../../../styles/CgPaper.scss";
</style>
<style>
@import "../../../../mixin.scss";
</style>
