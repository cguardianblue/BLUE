<template>
  <span>
    <i v-if="props.type === 'error'">
      <svg
        width="36px"
        height="36px"
        viewBox="0 0 48 48"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Icon 图标/表单类图标/失败提示</title>
        <g
          id="Guardian2.0"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Icon-图标"
            transform="translate(-616.000000, -1856.000000)"
            fill="#FFFFFF"
          >
            <g id="表单类图标" transform="translate(120.000000, 1505.000000)">
              <g
                id="Icon-图标/通用类图标/失败提示"
                transform="translate(496.000000, 351.000000)"
              >
                <path
                  d="M24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 Z M24,2 C11.8497355,2 2,11.8497355 2,24 C2,36.1502645 11.8497355,46 24,46 C36.1502645,46 46,36.1502645 46,24 C46,11.8497355 36.1502645,2 24,2 Z"
                  id="Oval-4"
                  fill-rule="nonzero"
                ></path>
                <rect
                  id="矩形"
                  transform="translate(24.000000, 24.000000) rotate(-45.000000) translate(-24.000000, -24.000000) "
                  x="13"
                  y="23"
                  width="22"
                  height="2"
                  rx="1"
                ></rect>
                <rect
                  id="矩形"
                  transform="translate(24.000000, 24.000000) scale(1, -1) rotate(-45.000000) translate(-24.000000, -24.000000) "
                  x="13"
                  y="23"
                  width="22"
                  height="2"
                  rx="1"
                ></rect>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </i>
    <i v-if="props.type === 'success'">
      <svg
        width="36px"
        height="36px"
        viewBox="0 0 36 36"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>icon/成功/浮层</title>
        <g
          id="页面-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="画板"
            transform="translate(-901.000000, -745.000000)"
            fill="#FFFFFF"
          >
            <g id="编组-6" transform="translate(901.000000, 745.000000)">
              <path
                d="M12,11 L12,20 L27,20 L27,22 L10,22 L10,11 L12,11 Z"
                id="形状结合"
                transform="translate(18.500000, 16.500000) rotate(-47.000000) translate(-18.500000, -16.500000) "
              ></path>
              <path
                d="M18,0 C27.9411255,0 36,8.0588745 36,18 C36,27.9411255 27.9411255,36 18,36 C8.0588745,36 0,27.9411255 0,18 C0,8.0588745 8.0588745,0 18,0 Z M18,2 C9.163444,2 2,9.163444 2,18 C2,26.836556 9.163444,34 18,34 C26.836556,34 34,26.836556 34,18 C34,9.163444 26.836556,2 18,2 Z"
                id="椭圆形"
                fill-rule="nonzero"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </i>
    <i v-if="props.type === 'warning'">
      <svg
        width="36px"
        height="36px"
        viewBox="0 0 49 48"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Icon 图标/表单类图标/警示提示</title>
        <g
          id="Guardian2.0"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Icon-图标"
            transform="translate(-767.000000, -1856.000000)"
            fill="#FFFFFF"
          >
            <g id="表单类图标" transform="translate(120.000000, 1505.000000)">
              <g
                id="Icon-图标/通用类图标/警示提示"
                transform="translate(647.500000, 351.000000)"
              >
                <path
                  d="M24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 Z M24,2 C11.8497355,2 2,11.8497355 2,24 C2,36.1502645 11.8497355,46 24,46 C36.1502645,46 46,36.1502645 46,24 C46,11.8497355 36.1502645,2 24,2 Z"
                  id="Oval-4"
                  fill-rule="nonzero"
                ></path>
                <rect
                  id="矩形"
                  x="23"
                  y="13"
                  width="2"
                  height="17"
                  rx="1"
                ></rect>
                <rect
                  id="矩形备份"
                  x="23"
                  y="33"
                  width="2"
                  height="2"
                  rx="1"
                ></rect>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </i>
  </span>
</template>
<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "", // success warning error
  },
})
</script>
