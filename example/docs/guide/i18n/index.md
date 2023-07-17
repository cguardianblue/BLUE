# 多语言

###

## ConfigProvider

#### 利用提供的 ConfigProvider 组件来实现多语言。涉及到多语言的组件目前只有分页。

#### 目前 locale 只有两个取值,zh 和 en.

```
// main.js
<template>
  <cg-config-provider :locale="locale">
    <app />
  </cg-config-provider>
</template>

<script setup>
import { ref } from 'vue'
let locale = ref("zh")
</script>
```
