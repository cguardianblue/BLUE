<template>
  <div
    :class="[
      cs.baseName,
      cs.is('background', background),
      cs.is('small', small),
    ]"
  >
    <template
      v-for="(component, componentIndex) in components"
      :key="componentIndex"
    >
      <component :is="TEMPLATE_MAP[component].name"></component>
    </template>
  </div>
</template>
<script setup>
import { ref, computed, provide, watch } from "vue"
import { useClassName } from "hooks"
import { useLocale } from "hooks"
import { paginationProps, cgPaginationKey } from "./CgPaginationProps"
import Pager from "./component/paper/CgPaper.vue"
import Prev from "./component/prev/CgPrev.vue"
import Next from "./component/next/CgNext.vue"
import JumpTo from "./component/jumpTo/CgJumpTo.vue"
import Sizes from "./component/Sizes/CgSizes.vue"
const COMPONENT_NAME = "pagination"
const cs = useClassName(COMPONENT_NAME)
const props = defineProps(paginationProps)
const emits = defineEmits([
  "update:page-size",
  "update:current-page",
  "current-change",
])
const { t } = useLocale()
const components = ref(props.layout.split(",").map((item) => item.trim()))
// 按照当前页码，一共分了多少页
const pageCount = computed(() => {
  let pageCount = 0
  pageCount = Math.max(1, Math.ceil(props.total / props.pageSize))
  return pageCount
})
provide(cgPaginationKey, {
  pageCount: pageCount, //分成了多少页
  pagerCount: props.pagerCount, // 当前分页显示的最多个目数
  disabled: computed(() => props.disabled),
  currentPage: computed(() => props.currentPage),
  pageSize: ref(props.pageSize),
  pageSizes: computed(() =>
    props.pageSizes.map((item) => ({
      label: `${item}/${t("pagination.size")}`,
      value: item,
    }))
  ),
  total: props.total,
  handleCurrentChange,
  handlePageSizeChange,
  prev,
  next,
})
function prev() {
  if (props.currentPage === 1 || props.disabled) return
  emits("update:current-page", props.currentPage - 1)
}
function next() {
  if (props.currentPage === props.total - 1 || props.disabled) return
  emits("update:current-page", props.currentPage + 1)
}
function handleCurrentChange(val) {
  emits("update:current-page", val)
}
function handlePageSizeChange(val) {
  emits("update:page-size", val)
}
watch(
  () => pageCount.value,
  () => {
    console.log(props.currentPage)
    console.log(pageCount.value)
    if (props.currentPage > pageCount.value) {
      handleCurrentChange(1)
    }
  }
)
const TEMPLATE_MAP = {
  pager: {
    name: Pager,
  },
  prev: {
    name: Prev,
  },
  next: {
    name: Next,
  },
  jumpTo: {
    name: JumpTo,
  },
  sizes: {
    name: Sizes,
  },
}
</script>
<style lang="scss" scoped>
@import "../styles/CgPagination.scss";
</style>
<style>
@import "../../mixin.scss";
</style>
