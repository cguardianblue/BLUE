# 复选框组

###

## 基础用法

###

<script setup>
import { ref } from 'vue'
let checkAll = ref(false)
let checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
function handleCheckAllChange (value) {
    checkedCities.value = value ? cities : []
}
function handleCheckedCitiesChange (value) {
    checkAll.value = value.length === cities.length
}
</script>

<cg-checkbox v-model="checkAll" style="margin-bottom:20px;" @change="handleCheckAllChange">
全选
</cg-checkbox>
<cg-checkbox-group
v-model="checkedCities"
@change="handleCheckedCitiesChange"

>    <cg-checkbox v-for="city in cities" :key="city" :label="city" :disabled="city === 'Shanghai'">

        {{city}}

  </cg-checkbox>
</cg-checkbox-group>

::: details 显示代码

```html
<script setup>
  import { ref } from "vue"
  let checkAll = ref(false)
  let checkedCities = ref(["Shanghai", "Beijing"])
  const cities = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"]
  function handleCheckAllChange(value) {
    checkedCities.value = value ? cities : []
  }
  function handleCheckedCitiesChange(value) {
    checkAll.value = value.length === cities.length
  }
</script>

<cg-checkbox
  v-model="checkAll"
  style="margin-bottom:20px;"
  @change="handleCheckAllChange"
>
  全选
</cg-checkbox>
<cg-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
  <cg-checkbox
    v-for="city in cities"
    :key="city"
    :label="city"
    :disabled="city === 'Shanghai'"
  >
    {{city}}
  </cg-checkbox>
</cg-checkbox-group>
```

:::

## CheckboxGroup Attributes

| 名称     | 描述                                   | 类型                            | 可选值 | 默认值 |
| -------- | -------------------------------------- | ------------------------------- | ------ | ------ |
| v-model  | 绑定的值（仅用于单独使用 checkbox 时） | string[] / number[] / boolean[] | —      | []     |
| disabled | 是否禁用                               | boolean                         | —      | —      |

## CheckboxGroup Events

| 名称   | 描述                 | 类型                       |
| ------ | -------------------- | -------------------------- | -------- | ------------------ |
| change | 当绑定的值改变时触发 | 回调函数 (value : string[] | number[] | boolean[]) => vold |
