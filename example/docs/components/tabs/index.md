# 标签页

###

## 基础用法

###

<script setup>
    import {reactive} from 'vue'
    let state = reactive({
        activeTab1: 'all',
        activeTab2: 0
    })
    function tabChange (val) {
        console.log(val)
    }
</script>

<cg-tabs v-model="state.activeTab1" slider-width="30px" block-width="100px" @tab-change="tabChange" style="margin-bottom:30px;">
<cg-tab-pane label="全部列表" name="all">全部列表内容</cg-tab-pane>
<cg-tab-pane label="部分列表" name="ending">部分列表内容</cg-tab-pane>
</cg-tabs>

<cg-tabs v-model="state.activeTab2" slider-width="30px" block-width="100px" :border-bottom-display="false" @tab-change="tabChange">
<cg-tab-pane label="全部列表" :name="0">全部列表内容</cg-tab-pane>
<cg-tab-pane label="部分列表" :name="1">部分列表内容</cg-tab-pane>
</cg-tabs>

::: details 显示代码

```html
<cg-tabs
  v-model="state.activeTab1"
  slider-width="30px"
  block-width="100px"
  @tab-change="tabChange"
  style="margin-bottom:30px;"
>
  <cg-tab-pane label="全部列表" name="all">全部列表内容</cg-tab-pane>
  <cg-tab-pane label="部分列表" name="ending">部分列表内容</cg-tab-pane>
</cg-tabs>

<cg-tabs
  v-model="state.activeTab2"
  slider-width="30px"
  block-width="100px"
  :border-bottom-display="false"
  @tab-change="tabChange"
>
  <cg-tab-pane label="全部列表" name="all">全部列表内容</cg-tab-pane>
  <cg-tab-pane label="部分列表" name="ending">部分列表内容</cg-tab-pane>
</cg-tabs>

<script setup>
  import { reactive } from "vue"
  let state = reactive({
    activeTab1: "all",
    activeTab2: "all",
  })
  function tabChange(val) {
    console.log(val)
  }
</script>
```

:::

## Tabs Attributes

| 名称                | 描述                                          | 类型          | 可选值 | 默认值 |
| ------------------- | --------------------------------------------- | ------------- | ------ | ------ |
| v-model             | 绑定值，选中的 tab 的 name                    | string/number | —      | —      |
| blockWidth          | tab 的宽度(单位 px,算上两侧 padding 是 240px) | string        | —      | —      |
| sliderWidth         | 选中线的长度(单位 px)                         | string        | —      | —      |
| borderBottomDisplay | 是否展示下划线                                | boolean       | —      | true   |

## Tabs Events

| 名称       | 描述                    | 回调参数 |
| ---------- | ----------------------- | -------- |
| tab-change | 当选中的 tab 改变时触发 | tabName  |

## Tabs Slots

| 名称 | 描述 | 参数 |
| ---- | ---- | ---- |
| -    | 内容 | Tab  |

## Tab Attributes

| 名称  | 描述                            | 类型   | 可选值 | 默认值 |
| ----- | ------------------------------- | ------ | ------ | ------ |
| label | tab 的标签                      | string | —      | —      |
| name  | 与选项卡绑定值 value 对应的标识 | string | —      | —      |

## Tab Slots

| 名称 | 描述 | 参数 |
| ---- | ---- | ---- |
| -    | 内容 | -    |
