# 单选框

###

## 基础用法

###

<script setup>
    import {ref} from 'vue'
    let value = ref(false)
    function changeValue (value) {
        console.log(value)
    }
</script>

<cg-radio v-model="value" :label="true" @change="changeValue">
单选框 1
</cg-radio>
<cg-radio v-model="value" :label="false" @change="changeValue">
单选框 2
</cg-radio>

::: details 显示代码

```html
<script setup>
  import { ref } from "vue"
  let value = ref(false)
</script>
<cg-radio v-model="value" :label="true">单选框1</cg-radio>
<cg-radio v-model="value" :label="false">单选框2</cg-radio>
```

:::

## Checkbox Attributes

| 名称     | 描述                                      | 类型                  | 可选值 | 默认值 |
| -------- | ----------------------------------------- | --------------------- | ------ | ------ |
| v-model  | 选中项绑定的值（仅用于单独使用 radio 时） | boolean/number/string | —      | false  |
| lebel    | 选中的值                                  | boolean/number/string | —      | —      |
| disabled | 是否禁用                                  | boolean               | —      | —      |

## Checkbox Events

| 名称   | 描述                 | 类型                              |
| ------ | -------------------- | --------------------------------- |
| change | 当绑定的值改变时触发 | 回调函数 (value : number) => vold |
