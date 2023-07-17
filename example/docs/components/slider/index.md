# 滑块

###

## 基础用法

###

<script setup>
    import { ref } from 'vue'
    let sliderValue1 = ref(0)
    let sliderValue2 = ref(30)
</script>

<cg-slider v-model="sliderValue1" style="width: 600px; margin-bottom: 20px"></cg-slider>
<cg-slider v-model="sliderValue2" style="height: 400px" vertical></cg-slider>

::: details 显示代码

```html
<cg-slider
  v-model="sliderValue1"
  style="width: 600px; margin-bottom: 20px"
></cg-slider>
<cg-slider v-model="sliderValue2" style="height: 400px" vertical></cg-slider>
<script setup>
  import { ref } from "vue"
  let sliderValue1 = ref(0)
  let sliderValue2 = ref(30)
</script>
```

:::

## Slider Attributes

| 名称     | 描述         | 类型    | 可选值 | 默认值 |
| -------- | ------------ | ------- | ------ | ------ |
| v-model  | 选中项绑定值 | string  | —      | 0      |
| vertical | 是否纵向     | boolean | —      | false  |
