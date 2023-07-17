# 选择器

###

## 基础用法

###

<script setup>
    import {ref} from 'vue'
    let value = ref('')
    let disabled = ref(false)
    let options = [
        {
            value: '',
            label: '不限'
        },
        {
            value: 'Option1',
            label: 'Option11'
        },
        {
            value: 'Option2',
            label: 'Option22'
        },
        {
            value: 'Option3',
            label: 'Option33'
        },
        {
            value: 'Option4',
            label: 'Option44'
        },
        {
            value: 'Option5',
            label: 'Option55'
        }
    ]
</script>
<cg-select v-model:select-value="value" style="width: 300px; margin-bottom: 30px">
    <cg-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
</cg-select>
<cg-select v-model:select-value="value" disabled style="width: 300px;">
    <cg-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
</cg-select>

::: details 显示代码

```html
<cg-select
  v-model:select-value="value"
  style="width: 300px; margin-bottom: 30px"
>
  <cg-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value"
    :icon="true"
  />
</cg-select>
<cg-select v-model:select-value="value" disabled style="width: 300px;">
  <cg-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value"
  />
</cg-select>
<script setup>
  import { ref } from "vue"
  let value = ref("")
  let disabled = ref(false)
  let options = [
    {
      value: "",
      label: "不限",
    },
    {
      value: "Option1",
      label: "Option11",
    },
    {
      value: "Option2",
      label: "Option22",
    },
    {
      value: "Option3",
      label: "Option33",
    },
    {
      value: "Option4",
      label: "Option44",
    },
    {
      value: "Option5",
      label: "Option55",
    },
  ]
</script>
```

:::

## Select Attributes

| 名称                 | 描述     | 类型    | 可选值 | 默认值 |
| -------------------- | -------- | ------- | ------ | ------ |
| v-model:select-value | 当前页   | string  | —      | —      |
| disabled             | 是否禁用 | boolean | —      | false  |

## Select Slots

| 名称 | 描述     | 子标签 |
| ---- | -------- | ------ |
| -    | 选项内容 | Option |

## Option Attributes

| 名称  | 描述               | 类型    | 可选值 | 默认值 |
| ----- | ------------------ | ------- | ------ | ------ |
| value | 选项的值           | string  | —      | —      |
| label | 选项的名称         | string  | —      | —      |
| icon  | 是否展示选中的图标 | Boolean | —      | false  |

## Option Slot

| 名称 | 描述 |
| ---- | ---- |
| —    | 内容 |

##### 用法:options 可为响应式数据。
