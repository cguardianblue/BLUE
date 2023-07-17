<template>
  <div class="cg-tabs">
    <div class="cg-tabs-nav" ref="navListRef">
      <div
        class="cg-tabs-nav-item"
        v-for="(nav, index) in state.navList"
        ref="navItemsRef"
        @click="tabClick(nav)"
        :key="index"
        :class="{
          selected: nav.name === props.modelValue,
          'cg-tabs-nav-item-border-bottom': props.borderBottomDisplay,
        }"
      >
        {{ nav.label }}
      </div>
      <div class="cg-tabs-nav-indicator" :style="state.barStyle"></div>
    </div>
    <div class="cg-tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: "CgTabs",
})
</script>
<script setup>
import {
  onMounted,
  ref,
  useSlots,
  reactive,
  provide,
  computed,
  watch,
  nextTick,
} from "vue"
import TabPane from "../../tabPane/src/CgTabPane.vue"

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },
  blockWidth: {
    type: String,
    default: "0",
    required: true,
  },
  sliderWidth: {
    type: String,
    default: "30px",
  },
  borderBottomDisplay: {
    type: Boolean,
    default: true,
  },
})
const state = reactive({
  navList: [],
  barStyle: {},
})

const activeName = computed(() => props.modelValue)

provide("tab-func", { updateLabels, isShow: activeName })

const slots = useSlots()
const emits = defineEmits(["tab-click", "tab-change", "update:modelValue"])

const navItemsRef = ref([])
const navListRef = ref(null)

const activeIndex = computed(() => {
  return getSlotComp().findIndex((item) => item.props.name === props.modelValue)
})

onMounted(async () => {
  await nextTick()
  moveSlider()
})

watch(
  () => props.modelValue,
  (newVal) => {
    emits("tab-change", newVal)
    moveSlider()
  }
)

updateLabels()

// 获取 tabs 插槽内所有 tabPane 组件
function getSlotComp() {
  return slots.default().filter((tag) => tag.type === TabPane)
}

// 更新 tab label
function updateLabels() {
  state.navList = getSlotComp().map((item) => {
    return { label: item.props.label, name: item.props.name }
  })
}

function moveSlider() {
  let left = 0,
    first = true,
    index = activeIndex.value
  const selectEl = navItemsRef.value[index]
  while (index >= 0) {
    if (first) {
      left += selectEl.clientWidth / 2
      first = false
    } else {
      left += selectEl.clientWidth
    }
    index--
  }
  state.barStyle = {
    left: left + "px",
  }
}

function tabClick(label) {
  emits("tab-click", label)
  emits("update:modelValue", label.name)
}
</script>

<style lang="scss" scoped>
.cg-tabs {
  .cg-tabs-nav {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .cg-tabs-nav-item {
    width: v-bind("props.blockWidth");
    height: 40px;
    box-sizing: content-box;
    padding: 0 20px;
    line-height: 40px;
    cursor: pointer;
    text-align: center;
  }

  .cg-tabs-nav-item-border-bottom {
    border-bottom: 1px rgba(175, 177, 196, 0.4) solid;
  }

  .cg-tabs-content {
    padding: 8px 0;
  }

  .cg-tabs-nav-indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateX(-50%);
    width: v-bind("props.sliderWidth");
    height: 2px;
    background: #a73843;
    transition: left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
}
</style>
