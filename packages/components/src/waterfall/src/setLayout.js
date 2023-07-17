import { nextTick, reactive, toRefs } from "vue"

export function setLayout(
  list,
  colWidth,
  actualCol,
  gap,
  colsTop,
  bottomGap,
  onceLoadMax,
  imageWidthKeyArr,
  imageHeightKeyArr
) {
  const state = reactive({
    wrapperHeight: 0,
    actualList: [],
    isOver: false,
  })

  let lastLayoutIndex = -1
  let timer

  function setActualList(newList = []) {
    state.actualList = newList
  }

  function setLastLayoutIndex(index) {
    lastLayoutIndex = index
  }

  function setWaterfallLayout() {
    if (onceLoadMax.value !== Infinity) {
      if (state.actualList.length === list.value.length) {
        state.isOver = true
        return (timer = null)
      }
      state.actualList = state.actualList.concat(
        list.value.slice(
          lastLayoutIndex + 1,
          lastLayoutIndex + 1 + onceLoadMax.value
        )
      )
      nextTick(() => {
        setWaterfallLayoutCallback()
        clearTimeout(timer)
        timer = setTimeout(() => setWaterfallLayout(), 200)
      })
    } else {
      state.actualList = list.value
      nextTick(() => {
        setWaterfallLayoutCallback()
        state.isOver = true
      })
    }
  }

  // 布局核心逻辑
  function setWaterfallLayoutCallback() {
    let waterfallItems = document.querySelectorAll(".waterfall-item")
    if (waterfallItems.length === 0) return
    let idx = lastLayoutIndex + 1
    for (; idx < waterfallItems.length; idx++) {
      const current = waterfallItems[idx]
      // 这里有个很大的问题  必须用cgImage才行
      const i = current.querySelector("i")
      i.parentNode.style.display = "none"
      const eleHeight = current.clientHeight
      i.parentNode.style.display = ""
      // 找到现有列最小高度
      const minHeight = Math.min.apply(null, colsTop.value)
      // 最小高度的列
      const minOfColIdx = colsTop.value.indexOf(minHeight)
      // 计算图片高度
      const imgHeight = calculateImageHeight(
        state.actualList[idx],
        colWidth.value
      )
      // 设置样式
      if (imgHeight > 0) {
        state.actualList[idx].imgHeight = imgHeight
      }
      const left =
        colWidth.value * minOfColIdx +
        (minOfColIdx - 1 < 0 ? 0 : minOfColIdx - 1) * gap.value +
        "px"
      const top = minHeight + "px"
      colsTop.value[minOfColIdx] =
        colsTop.value[minOfColIdx] + imgHeight + eleHeight + bottomGap.value
      const marginLeft =
        actualCol.value !== 1 && minOfColIdx !== 0 ? gap.value + "px" : "0"

      state.actualList[idx].styles = {
        width: colWidth.value + "px",
        left,
        top,
        marginLeft,
        visibility: "visible",
      }
      state.wrapperHeight = Math.max.apply(null, colsTop.value)
      lastLayoutIndex = waterfallItems.length - 1
    }

    function calculateImageHeight(item, colWidth) {
      let imgHeight, imageWidthRaw, imageHeightRaw
      imageWidthRaw = imageWidthKeyArr.reduce((p, n) => {
        if (p) {
          return p[n]
        }
        return p
      }, item)
      imageHeightRaw = imageHeightKeyArr.reduce((p, n) => {
        if (p) {
          return p[n]
        }
        return p
      }, item)

      if (+imageWidthRaw > 0 && +imageHeightRaw > 0) {
        imgHeight = (colWidth * imageHeightRaw) / imageWidthRaw
      } else {
        // 默认宽高比 9:16
        imgHeight = (colWidth * 16) / 9
      }
      return imgHeight
    }
  }

  return {
    ...toRefs(state),
    setActualList,
    setLastLayoutIndex,
    setWaterfallLayout,
  }
}
