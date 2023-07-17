<template>
  <div :class="cs.baseName">
    <slot />
  </div>
</template>
<script setup>
import { provide, computed } from "vue"
import { useClassName } from "hooks"
import {
  configProviderProps,
  configProviderKey,
} from "./ConfigProviderProps.js"
const COMPONENT_NAME = "configProvider"
const cs = useClassName(COMPONENT_NAME)
const props = defineProps(configProviderProps)
provide(configProviderKey, {
  localeValue: computed(() => props.locale),
})
</script>
