<template>
  <div>
    <CgSelect
      v-model:select-value="pageSize"
      style="width: 110px"
      :disabled="disabled"
    >
      <CgOption
        v-for="option in pageSizes"
        :key="option"
        :label="option.label"
        :value="option.value"
      ></CgOption>
    </CgSelect>
  </div>
</template>
<script setup>
import { watch } from "vue"
import { usePagination } from "../../use-pagination"
import CgSelect from "../../../../select/src/CgSelect.vue"
import CgOption from "../../../../option/src/CgOption.vue"
const { pageSizes, pageSize, handlePageSizeChange, disabled } = usePagination()
watch(
  () => pageSize.value,
  (value) => {
    handlePageSizeChange(value)
  }
)
</script>
