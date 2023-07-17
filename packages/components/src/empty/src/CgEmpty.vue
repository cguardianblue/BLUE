<template>
  <div class="empty-container">
    <div class="svg-container">
      <img :src="props.src" alt="" />
    </div>
    <div class="description-container">
      <span>{{ props.description }}</span>
      <span v-if="props.description2">{{ props.description2 }}</span>
    </div>
    <slot></slot>
  </div>
</template>
<script>
import { defineComponent } from "vue"
export default defineComponent({
  name: "CgEmpty",
})
</script>
<script setup>
const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "No Data",
  },
  description2: {
    type: String,
    default: "",
  },
})
</script>
<style scoped lang="scss">
.empty-container {
  padding-top: 170px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .svg-container {
    height: 100px;
    margin-bottom: 8px;

    img {
      display: block;
      height: 100%;
    }
  }

  .description-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;

    span {
      color: #aaafb7;
      line-height: 20px;
      font-size: 14px;
    }
  }
}
</style>
