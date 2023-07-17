import { reactive, toRefs } from "vue"

export function calculateColumn(colWidth, gap) {
  const state = reactive({
    actualCols: 1, // 实际列数
    colsTop: [], // 记录每列的 top 值
  })

  function calculateActualColumn() {
    const parentWidth =
      document.querySelector(".waterfall-wrapper")?.parentElement
        ?.offsetWidth || 0
    state.actualCols = Math.floor(
      (parentWidth + gap.value) / (colWidth.value + gap.value)
    )
    state.colsTop = new Array(state.actualCols).fill(0)
  }

  return { ...toRefs(state), calculateActualColumn }
}
