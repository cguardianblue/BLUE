<template>
  <button
    type="button"
    :disabled="disabled || currentPage === pageCount"
    @click="next"
    :class="[
      cs.baseName,
      cs.is('disabled', disabled || currentPage === pageCount),
    ]"
  >
    <span>></span>
  </button>
</template>
<script setup>
import { useClassName } from "hooks"
import { usePagination } from "../../use-pagination"
const COMPONENT_NAME = "pagination-next"
const cs = useClassName(COMPONENT_NAME)
const { disabled, next, currentPage, pageCount } = usePagination()
</script>
<style lang="scss" scoped>
@import "../../../styles/CgNext.scss";
</style>
<style>
@import "../../../../mixin.scss";
</style>
