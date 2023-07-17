# 复选框

###

## 基础用法

###

<script setup>
    import {ref} from 'vue'
    let value = ref(false)
</script>
<cg-checkbox v-model="value">
    复选框
</cg-checkbox>

::: details 显示代码

```html
<script setup>
  import { ref } from "vue"
  let value = ref(1)
</script>
<cg-checkbox v-model="value">复选框1</cg-checkbox>
```

:::

## Checkbox Attributes

| 名称     | 描述                                         | 类型                  | 可选值 | 默认值 |
| -------- | -------------------------------------------- | --------------------- | ------ | ------ |
| v-model  | 选中项绑定的值（仅用于单独使用 checkbox 时） | boolean               | —      | false  |
| lebel    | 选中的值（仅用于在 checkboxGroup 中使用时）  | boolean/number/string | —      | —      |
| disabled | 是否禁用                                     | boolean               | —      | —      |

## Checkbox Events

| 名称   | 描述                 | 类型                              |
| ------ | -------------------- | --------------------------------- |
| change | 当绑定的值改变时触发 | 回调函数 (value : number) => vold |
