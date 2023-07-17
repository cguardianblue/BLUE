# 分页

###

## 基础用法

###

<script setup>
    import {ref,watch} from 'vue'
    let currentPage1 = ref(1)
    let currentPage2 = ref(1)
    let currentPage3 = ref(1)
    let pageSize1 = ref(10)
    let pageSize2 = ref(10)
    let pageSize3 = ref(10)
    let pageSizes = ref([10,20,200])
    setTimeout(() => {
      pageSizes.value = [20,30,50]
    },5000)
    let disabled = ref(false)
    let locale = ref('zh')
    watch(() => [currentPage1.value,currentPage2.value,pageSize1.value,pageSize2.value], (newValue,oldValue) => {
        console.log(newValue,oldValue)
    })
</script>
<cg-configProvider locale="zh">
  <cg-pagination
      v-model:current-page="currentPage1"
      v-model:page-size="pageSize1"
      :total="50"
      style="margin-bottom:30px;"
  />
  <cg-pagination
      v-model:current-page="currentPage2"
      v-model:page-size="pageSize2"
      layout="prev, pager, next"
      :total="5000"
  />
</cg-configProvider>

::: details 显示代码

```html
<cg-pagination
  v-model:current-page="currentPage1"
  v-model:page-size="pageSize1"
  :total="50"
  style="margin-bottom:30px;"
/>
<cg-pagination
  v-model:current-page="currentPage2"
  v-model:page-size="pageSize2"
  layout="prev, pager, next"
  :total="5000"
/>
<script setup>
  import { ref, watch } from "vue"
  let currentPage1 = ref(1)
  let currentPage2 = ref(1)
  let pageSize1 = ref(10)
  let pageSize2 = ref(10)
  watch(
    () => [
      currentPage1.value,
      currentPage2.value,
      pageSize1.value,
      pageSize2.value,
    ],
    (newValue, oldValue) => {
      console.log(newValue, oldValue)
    }
  )
</script>
```

:::

###

## 多功能用法

###

<cg-configProvider :locale="locale">
disabled: <cg-switch v-model="disabled"></cg-switch>
英文 <cg-switch v-model="locale" active-value="zh" inactive-value="en"></cg-switch> 中文
<cg-pagination
    v-model:current-page="currentPage3"
    v-model:page-size="pageSize3"
    :disabled="disabled"
    :page-sizes="pageSizes"
    layout="sizes, prev, pager, next, jumpTo"
    :total="600"
/>
</cg-configProvider>

::: details 显示代码

```html
disabled:

<cg-switch v-model="disabled"></cg-switch>
<cg-pagination
  v-model:current-page="currentPage3"
  v-model:page-size="pageSize3"
  :disabled="disabled"
  :page-sizes="pageSizes"
  layout="sizes, prev, pager, next, jumpTo"
  :total="600"
/>
<script setup>
  import { ref } from "vue"
  let currentPage3 = ref(1)
  let pageSize3 = ref(10)
  let pageSizes = ref([20, 200])
  let disabled = ref(false)
  watch(
    () => [currentPage3.value, pageSize3.value],
    (newValue, oldValue) => {
      console.log(newValue, oldValue)
    }
  )
</script>
```

:::

## Attributes

| 名称                 | 描述                         | 类型    | 可选值 | 默认值 |
| -------------------- | ---------------------------- | ------- | ------ | ------ |
| v-model:current-page | 当前页                       | number  | —      | —      |
| v-model:page-size    | 每页多少个                   | number  | —      | -      |
| pageSizes            | 每页显示个数选择器的选项设置 | array   | —      | -      |
| total                | 总个数                       | number  | —      | -      |
| disabled             | 是否禁用                     | boolean | —      | false  |
| layout               | 组件布局，子组件名用逗号分隔 | string  | —      | paper  |

##### 用法:用 watch 监听 currentPage,pageSize 的数值变化，就可以执行自身的业务逻辑。
