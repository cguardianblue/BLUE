<template>
  <button
    type="button"
    :disabled="disabled || currentPage === 1"
    @click="prev"
    :class="[cs.baseName, cs.is('disabled', disabled || currentPage === 1)]"
  >
    <span>&lt;</span>
  </button>
</template>
<script setup>
import { useClassName } from "hooks"
import { usePagination } from "../../use-pagination"
const COMPONENT_NAME = "pagination-prev"
const cs = useClassName(COMPONENT_NAME)
const { disabled, prev, currentPage } = usePagination()
</script>
<style lang="scss" scoped>
@import "../../../styles/CgPrev.scss";
</style>
<style>
@import "../../../../mixin.scss";
</style>
