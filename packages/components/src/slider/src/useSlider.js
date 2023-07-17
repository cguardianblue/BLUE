import { ref, reactive, nextTick, watch } from "vue"
export function useSlider(props, emits) {
  const slider = ref(null)
  const sliderSize = reactive({
    width: 0,
    height: 0,
    currentWidth: 0,
    currentHeight: 0,
  })
  const state = reactive({
    startX: 0,
    startY: 0,
    moveX: 0,
    moveY: 0,
    isDraging: false,
    currentWidth: 0,
    currentHeight: 0,
  })
  watch(
    () => props.modelValue,
    (value) => {
      nextTick(() => {
        if (state.isDraging) return
        resetSize()
        if (props.vertical) {
          sliderSize.currentHeight = value
        } else {
          sliderSize.currentWidth = value
        }
      })
    },
    {
      immediate: true,
    }
  )
  const getClientXY = (event) => {
    let clientX
    let clientY
    if (event.type.startsWith("touch")) {
      clientY = event.touches[0].clientY
      clientX = event.touches[0].clientX
    } else {
      clientY = event.clientY
      clientX = event.clientX
    }
    return {
      clientX,
      clientY,
    }
  }
  function onSliderDown(event) {
    handleSliderPointerEvent(event)
  }
  function onDragStart(event) {
    event.preventDefault()
    state.isDraging = true
    const { clientX, clientY } = getClientXY(event)
    if (props.vertical) {
      state.startY = clientY
    } else {
      state.startX = clientX
    }
    state.currentWidth = Number(sliderSize.currentWidth)
    state.currentHeight = Number(sliderSize.currentHeight)
  }
  async function onDragging(event) {
    event.stopPropagation()
    event.preventDefault()
    const { clientX, clientY } = getClientXY(event)
    state.moveX = clientX
    state.moveY = clientY
    state.isDraging = true
    if (props.vertical) {
      if (clientY > slider.value.getBoundingClientRect().bottom) {
        sliderSize.currentHeight = 0
      } else if (
        clientY <=
        slider.value.getBoundingClientRect().bottom - sliderSize.height
      ) {
        sliderSize.currentHeight = 100
      } else {
        sliderSize.currentHeight =
          Number(state.currentHeight) -
          Number(((clientY - state.startY) / sliderSize.height) * 100)
      }
      emits(
        "update:modelValue",

        Number(sliderSize.currentHeight.toFixed())
      )
    } else {
      if (clientX < slider.value.getBoundingClientRect().left) {
        sliderSize.currentWidth = 0
      } else if (
        clientX >=
        slider.value.getBoundingClientRect().left + sliderSize.width
      ) {
        sliderSize.currentWidth = 100
      } else {
        sliderSize.currentWidth =
          state.currentWidth +
          Number(((clientX - state.startX) / sliderSize.width) * 100)
      }
      //   state.startX = state.moveX
      //   state.startY = state.moveY
      await nextTick()
      emits("update:modelValue", Number(sliderSize.currentWidth.toFixed()))
    }
  }
  function onDragEnd() {
    state.startX = 0
    state.moveX = 0
    state.startY = 0
    state.moveY = 0
    state.isDraging = false
    handleEventListeners("2")
  }
  function handleSliderPointerEvent(event) {
    resetSize()
    nextTick(() => {
      let newPercent = 0
      if (props.vertical) {
        const clientY = event.touches?.item(0)?.clientY ?? event.clientY
        const sliderOffsetBottom = slider.value.getBoundingClientRect().bottom
        newPercent = Number(
          (((sliderOffsetBottom - clientY) / sliderSize.height) * 100).toFixed()
        )
        // if (newPercent < 0 || newPercent > 100) return
        sliderSize.currentHeight = newPercent
        emits(
          "update:modelValue",
          sliderSize.currentHeight >= 100
            ? 100
            : sliderSize.currentHeight <= 0
            ? 0
            : sliderSize.currentHeight
        )
      } else {
        const clientX = event.touches?.item(0)?.clientX ?? event.clientX
        const sliderOffsetLeft = slider.value.getBoundingClientRect().left
        newPercent = Number(
          (((clientX - sliderOffsetLeft) / sliderSize.width) * 100).toFixed()
        )
        //   if (newPercent < 0 || newPercent > 100) return
        sliderSize.currentWidth = newPercent
        emits(
          "update:modelValue",
          sliderSize.currentWidth >= 100
            ? 100
            : sliderSize.currentWidth <= 0
            ? 0
            : sliderSize.currentWidth
        )
      }

      handleEventListeners("1")
    })
  }
  function handleEventListeners(type) {
    if (type === "1") {
      onDragStart(event)
      window.addEventListener("mousemove", onDragging)
      window.addEventListener("touchmove", onDragging)
      window.addEventListener("mouseup", onDragEnd)
      window.addEventListener("touchend", onDragEnd)
      window.addEventListener("contextmenu", onDragEnd)
    } else if (type === "2") {
      window.removeEventListener("mousemove", onDragging)
      window.removeEventListener("touchmove", onDragging)
      window.removeEventListener("mouseup", onDragEnd)
      window.removeEventListener("touchend", onDragEnd)
      window.removeEventListener("contextmenu", onDragEnd)
    }
  }
  function resetSize() {
    if (slider.value) {
      sliderSize.width = slider.value[`clientWidth`]
      sliderSize.height = slider.value[`clientHeight`]
    }
  }

  return {
    slider,
    sliderSize,
    onSliderDown,
  }
}
