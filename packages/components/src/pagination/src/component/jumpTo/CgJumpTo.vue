<template>
  <div :class="[cs.baseName, cs.is('disabled', disabled)]" :disabled="disabled">
    <div :class="[cs.addClass('goto')]">{{ t("pagination.jumpTo") }}</div>
    <div>
      <input
        :disabled="disabled"
        :value="currentPage"
        @input="changeCurrentPage"
        @blur="setCurrentPage"
        @keyup.enter="setCurrentPage"
        :class="[cs.addClass('num'), cs.is('disabled', disabled)]"
      />
    </div>
    <div :class="[cs.addClass('page')]">{{ t("pagination.size") }}</div>
  </div>
</template>
<script setup>
import { useClassName } from "hooks"
import { usePagination } from "../../use-pagination"
import { useLocale } from "hooks"
const COMPONENT_NAME = "pagination-jumpTo"
const cs = useClassName(COMPONENT_NAME)
const { t } = useLocale()
const { disabled, currentPage, pageCount, handleCurrentChange } =
  usePagination()
function changeCurrentPage($event) {
  $event.target.value = $event.target.value.replace(/[^\d]/g, "")
  if ($event.target.value === "0" || Number($event.target.value) === 0) {
    $event.target.value = 0
    return
  } else if (Number($event.target.value) > pageCount.value) {
    $event.target.value = pageCount.value
    return
  }
}
function setCurrentPage($event) {
  if ($event.target.value === "" || Number($event.target.value) === 0) {
    $event.target.value = 1
    handleCurrentChange(Number(1))
  }
  handleCurrentChange(Number($event.target.value))
}
</script>
<style lang="scss" scoped>
@import "../../../styles/CgJumpTo.scss";
</style>
<style>
@import "../../../../mixin.scss";
</style>
