<template>
  <teleport to="body" v-if="props.modelValue">
    <div class="dialog-mask" v-bind="$attrs">
      <div class="dialog-wrapper">
        <div class="dialog-title" v-if="props.title">
          {{ props.title }}
        </div>
        <div
          class="dialog-content"
          :class="{ 'no-title': !props.title, padding: props.content }"
        >
          <div
            class="dialog-content-text"
            v-if="props.content"
            v-html="props.content"
          ></div>
          <slot v-else></slot>
        </div>
        <div class="dialog-button">
          <div class="cancel-btn" v-if="cancelBtnExist" @click="cancel">
            {{ props.cancelText }}
          </div>
          <div
            class="confirm-btn"
            v-if="confirmBtnExist"
            @click="confirm"
            :class="{
              'single-btn': !cancelBtnExist,
              disable: props.confirmDisable,
            }"
          >
            {{ props.confirmText }}
          </div>
        </div>
        <div class="dialog-close" v-if="props.showClose" @click="cancel">
          <svg
            width="14px"
            height="14px"
            viewBox="0 0 14 14"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>形状结合</title>
            <defs>
              <rect
                id="path-1"
                x="0"
                y="0"
                width="540"
                height="222"
                rx="8"
              ></rect>
              <filter
                x="-2.5%"
                y="-7.0%"
                width="106.1%"
                height="114.9%"
                filterUnits="objectBoundingBox"
                id="filter-3"
              >
                <feOffset
                  dx="3"
                  dy="1"
                  in="SourceAlpha"
                  result="shadowOffsetOuter1"
                ></feOffset>
                <feGaussianBlur
                  stdDeviation="5"
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                ></feGaussianBlur>
                <feColorMatrix
                  values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.15 0"
                  type="matrix"
                  in="shadowBlurOuter1"
                ></feColorMatrix>
              </filter>
            </defs>
            <g
              id="页面-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Feedback反馈备份"
                transform="translate(-1230.000000, -2493.000000)"
              >
                <rect
                  fill="#F5F5F5"
                  x="0"
                  y="0"
                  width="1440"
                  height="6260"
                ></rect>
                <g
                  id="弹窗/标题/list筛选/一个button/最小高度"
                  transform="translate(720.000000, 2476.000000)"
                >
                  <g id="编组-5" transform="translate(0.000000, 0.550253)">
                    <mask id="mask-2" fill="white">
                      <use xlink:href="#path-1"></use>
                    </mask>
                    <g id="蒙版">
                      <use
                        fill="black"
                        fill-opacity="1"
                        filter="url(#filter-3)"
                        xlink:href="#path-1"
                      ></use>
                      <use
                        fill="#FFFFFF"
                        fill-rule="evenodd"
                        xlink:href="#path-1"
                      ></use>
                    </g>
                    <path
                      d="M511.437588,16.7481763 L516.601,21.8827475 L521.764047,16.7481763 C522.054021,16.4598226 522.522446,16.4598226 522.812419,16.7481763 L522.895624,16.8309165 C523.18675,17.1204164 523.188069,17.5911069 522.898569,17.8822332 L522.895624,17.885178 L517.738,23.0137475 L522.895624,28.1422007 C523.18675,28.4317005 523.188069,28.902391 522.898569,29.1935173 C522.89759,29.1945017 522.896609,29.1954833 522.895624,29.1964622 L522.812419,29.2792023 C522.522446,29.5675561 522.054021,29.5675561 521.764047,29.2792023 L516.601,24.1437475 L511.437588,29.2792023 C511.147615,29.5675561 510.67919,29.5675561 510.389217,29.2792023 L510.306012,29.1964622 C510.014885,28.9069623 510.013567,28.4362718 510.303067,28.1451455 C510.304046,28.1441611 510.305027,28.1431795 510.306012,28.1422007 L515.463,23.0137475 L510.306012,17.885178 C510.014885,17.5956781 510.013567,17.1249876 510.303067,16.8338614 C510.304046,16.832877 510.305027,16.8318954 510.306012,16.8309165 L510.389217,16.7481763 C510.67919,16.4598226 511.147615,16.4598226 511.437588,16.7481763 Z"
                      id="形状结合"
                      fill="#AAAFB7"
                      mask="url(#mask-2)"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: "CgDialog",
})
</script>

<script setup>
import { dialogProps } from "./props.js"
import { computed, onMounted, watch } from "vue"

const props = defineProps(dialogProps)
const emit = defineEmits(["update:modelValue"])
onMounted(() => {
  watch(
    () => props.modelValue,
    (newVal) => {
      if (newVal && props.lockScroll) {
        document.body.classList.add("freezeWindow")
      } else {
        document.body.classList.remove("freezeWindow")
      }
    },
    { immediate: true, flush: "post" }
  )
})
const cancelBtnExist = computed(() => {
  return !!props.cancelText
})
const confirmBtnExist = computed(() => {
  return !!props.confirmText
})

function cancel() {
  if (props.onCancel) {
    props.onCancel()
  }
  if (props.autoClose) {
    emit("update:modelValue", false)
  }
}

function confirm() {
  if (props.confirmDisable) return
  if (props.onConfirm) {
    props.onConfirm()
  }
  if (props.autoClose) {
    emit("update:modelValue", false)
  }
}
</script>

<style scoped lang="scss">
.dialog-mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(51, 51, 51, 0.4);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.dialog-wrapper {
  position: relative;
  width: 540px;
  background: #ffffff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .dialog-title {
    margin-top: 40px;
    margin-bottom: 32px;
    font-size: 18px;
    font-weight: bold;
    color: #142133;
    text-align: center;
  }

  .dialog-content {
    line-height: 24px;
    font-size: 16px;
    margin-bottom: 24px;
    word-wrap: break-word;
    color: #434d5c;
    text-align: left;
  }

  .no-title {
    margin-top: 60px;
  }

  .padding {
    padding: 0 60px;
    text-align: center;
  }

  .dialog-button {
    height: 40px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    cursor: pointer;

    .cancel-btn {
      width: 126px;
      height: 40px;
      line-height: 40px;
      border-radius: 4px;
      border: 1px solid rgba(175, 177, 196, 0.4);
      text-align: center;
      color: #434d5c;
      margin-right: 12px;
    }

    .confirm-btn {
      width: 126px;
      height: 40px;
      line-height: 40px;
      background: #a83844;
      border-radius: 4px;
      text-align: center;
      color: #ffffff;
    }

    .single-btn {
      width: 255px;
    }

    .disable {
      background: rgba(20, 33, 51, 0.2);
    }
  }

  .dialog-close {
    position: absolute;
    top: 16px;
    right: 16px;
  }
}
</style>
<style>
.freezeWindow {
  overflow: hidden;
}
</style>
