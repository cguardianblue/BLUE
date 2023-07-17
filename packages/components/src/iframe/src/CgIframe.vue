<template>
  <iframe
    ref="theIframe"
    class="iframe-comp"
    :src="src"
    @load="onIframeLoad($event)"
    :style="{
      height: iframeHeight + 'px',
    }"
    scrolling="no"
  ></iframe>
</template>
<script>
import { defineComponent } from "vue"
export default defineComponent({
  name: "CgIframe",
})
</script>
<script setup>
import { onMounted, ref } from "vue"

const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  initHeight: {
    type: Number,
    default: 0,
    required: true,
  },
  loaded: {
    type: Function,
    default: function () {},
  },
})

const iframeHeight = ref(0)

onMounted(() => {
  iframeHeight.value = props.initHeight
})

const onIframeLoad = (evt) => {
  const iframe = evt.target || evt.srcElement
  const doc = iframe.contentDocument || iframe.document || iframe.contentWindow
  iframeHeight.value = calcPageHeight(doc)
  props.loaded()
}

const calcPageHeight = (doc) => {
  const clientHeight = Math.max(
    doc.body.clientHeight,
    doc.documentElement.clientHeight
  )
  const offsetHeight = Math.max(
    doc.body.offsetHeight,
    doc.documentElement.offsetHeight
  )
  const scrollHeight = Math.max(
    doc.body.scrollHeight,
    doc.documentElement.scrollHeight
  )
  return Math.max(offsetHeight, scrollHeight, clientHeight) + 1
}
</script>

<style scoped lang="scss">
.iframe-comp {
  width: 100%;
  border: none;
}
</style>
