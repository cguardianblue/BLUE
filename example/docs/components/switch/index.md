# 开关

###

## 基础用法

###

<script setup>
    import {ref} from 'vue'
    const switchValue1 = ref(false)
    const switchValue2 = ref('100')
</script>
<div style="margin-bottom: 30px">
    关<cg-switch v-model="switchValue1" width="60px"></cg-switch>开
</div>
<div style="margin-bottom: 30px">
    关<cg-switch v-model="switchValue2" disabled active-value="100" inactive-value="0" width="80px"></cg-switch>开
</div>

::: details 显示代码

```html
<div style="margin-bottom: 30px">
  关
  <cg-switch v-model="switchValue1" width="60px"></cg-switch>
  开
</div>
<div style="margin-bottom: 30px">
  关
  <cg-switch
    v-model="switchValue2"
    disabled
    active-value="100"
    inactive-value="0"
    width="80px"
  ></cg-switch>
  开
</div>

<script setup>
  import { ref } from "vue"
  const switchValue1 = ref(false)
  const switchValue2 = ref("100")
</script>
```

:::

## Switch Attributes

| 名称          | 描述             | 类型                                       | 可选值 | 默认值 |
| ------------- | ---------------- | ------------------------------------------ | ------ | ------ |
| v-model       | 绑定值           | string/number/boolean 同(active-value)类型 | —      | —      |
| activeValue   | 开关为开时候的值 | string/number/boolean                      | —      | —      |
| inactiveValue | 开关为关时候的值 | string/number/boolean                      | —      | —      |
| disabled      | 禁用             | boolean                                    | —      | false  |
| width         | 宽度             | string                                     | -      | —      |
