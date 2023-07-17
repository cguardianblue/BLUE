# 折叠面板

###

## 基础用法

###

<script setup>
    import {ref} from 'vue'
    let activeValue = ref('1')
    let activeValueArr = ref(['1'])
    function change (value) {
      console.log(value)
    }
</script>

<cg-collapse v-model:active-value="activeValueArr" @change="change">
<cg-collapse-item title="第1条collapse的header部分啊" name="1">

  <div>第一条 collapse 的 content 部分啊</div>
  <div>第一条 collapse 的 content 部分啊</div>
  <div>第一条 collapse 的 content 部分啊</div>
  </cg-collapse-item>
  <cg-collapse-item title="第2条collapse的header部分啊" name="2">
  <div>第一条 collapse 的 content 部分啊</div>
  <div>第一条 collapse 的 content 部分啊</div>
  <div>第一条 collapse 的 content 部分啊</div>
  </cg-collapse-item>
  <cg-collapse-item title="第3条collapse的header部分啊" name="3">
  <div>第一条 collapse 的 content 部分啊</div>
  <div>第一条 collapse 的 content 部分啊</div>
  <div>第一条 collapse 的 content 部分啊</div>
  </cg-collapse-item>
</cg-collapse>

::: details 显示代码

```html
<cg-collapse v-model:active-value="activeValueArr">
  <cg-collapse-item title="第1条collapse的header部分啊" name="1">
    <div>第一条collapse的content部分啊</div>
    <div>第一条collapse的content部分啊</div>
    <div>第一条collapse的content部分啊</div>
  </cg-collapse-item>
  <cg-collapse-item title="第2条collapse的header部分啊" name="2">
    <div>第一条collapse的content部分啊</div>
    <div>第一条collapse的content部分啊</div>
    <div>第一条collapse的content部分啊</div>
  </cg-collapse-item>
  <cg-collapse-item title="第3条collapse的header部分啊" name="3">
    <div>第一条collapse的content部分啊</div>
    <div>第一条collapse的content部分啊</div>
    <div>第一条collapse的content部分啊</div>
  </cg-collapse-item>
</cg-collapse>
<script setup>
  import { ref } from "vue"
  let activeValueArr = ref(["1"])
  function change(value) {
    console.log(value)
  }
</script>
```

:::

## 手风琴用法

###

<cg-collapse accordion v-model:active-value="activeValue" @change="change">
<cg-collapse-item title="第1条collapse的header部分啊" name="1">

  <div>第一条 collapse 的 content 部分啊</div>
  <div>第一条 collapse 的 content 部分啊</div>
  <div>第一条 collapse 的 content 部分啊</div>
  </cg-collapse-item>
  <cg-collapse-item title="第2条collapse的header部分啊" name="2">
  <div>第一条 collapse 的 content 部分啊</div>
  <div>第一条 collapse 的 content 部分啊</div>
  <div>第一条 collapse 的 content 部分啊</div>
  </cg-collapse-item>
  <cg-collapse-item title="第3条collapse的header部分啊" name="3">
  <div>第一条 collapse 的 content 部分啊</div>
  <div>第一条 collapse 的 content 部分啊</div>
  <div>第一条 collapse 的 content 部分啊</div>
  </cg-collapse-item>
</cg-collapse>

::: details 显示代码

```html
<cg-collapse accordion v-model:active-value="activeValue" @change="change">
  <cg-collapse-item title="第1条collapse的header部分啊" name="1">
    <div>第一条collapse的content部分啊</div>
    <div>第一条collapse的content部分啊</div>
    <div>第一条collapse的content部分啊</div>
  </cg-collapse-item>
  <cg-collapse-item title="第2条collapse的header部分啊" name="2">
    <div>第一条collapse的content部分啊</div>
    <div>第一条collapse的content部分啊</div>
    <div>第一条collapse的content部分啊</div>
  </cg-collapse-item>
  <cg-collapse-item title="第3条collapse的header部分啊" name="3">
    <div>第一条collapse的content部分啊</div>
    <div>第一条collapse的content部分啊</div>
    <div>第一条collapse的content部分啊</div>
  </cg-collapse-item>
</cg-collapse>
<script setup>
  import { ref } from "vue"
  let activeValueArr = ref("1")
  function change(value) {
    console.log(value)
  }
</script>
```

:::

## Collapse Attributes

| 名称                 | 描述             | 类型                                                 | 可选值 | 默认值 |
| -------------------- | ---------------- | ---------------------------------------------------- | ------ | ------ |
| v-model:active-value | 当前激活的       | string (accordion mode) / array (non-accordion mode) | —      | —      |
| accordion            | 是否是手风琴模式 | boolean                                              | —      | false  |

## Collapse Events

| 名称   | 描述                 | 回调参数                                                            |
| ------ | -------------------- | ------------------------------------------------------------------- |
| change | 当选中的值改变时触发 | (activeNames: array (non-accordion mode) / string (accordion mode)) |

## Collapse Slots

| 名称 | 描述     | 子标签        |
| ---- | -------- | ------------- |
| -    | 折叠内容 | Collapse Item |

## Collapse Item Attributes

| 名称     | 描述       | 类型          | 可选值 | 默认值 |
| -------- | ---------- | ------------- | ------ | ------ |
| name     | 独一无二的 | string/number | —      | —      |
| title    | 标题       | string        | —      | —      |
| disabled | 禁用       | boolean       | —      | —      |

## Collapse Item Slot

| 名称 | 描述 |
| ---- | ---- |
| —    | 内容 |
