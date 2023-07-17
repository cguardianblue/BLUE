# 按钮

###

## 基础用法

###

<div style="margin-bottom: 30px">
    <cg-button>哈哈哈</cg-button>
    <cg-button disabled style="margin-left: 10px">哈哈哈</cg-button>
    <cg-button style="margin-left: 10px" round>哈哈哈</cg-button
    >
</div>
<div style="margin-bottom: 30px">
    <cg-button type="plain-dark">全部拍场</cg-button>
    <cg-button type="plain-dark" disabled style="margin-left: 10px">哈哈哈</cg-button>
    <cg-button type="plain-dark" round style="margin-left: 10px">哈哈哈</cg-button>
</div>
<div>
    <cg-button type="plain-light" size="large" round color="rgba(75, 130, 210, 1)">全部拍场</cg-button>
    <cg-button
        type="plain-light"
        style="margin-left: 10px"
        :buttonStyle="{ width: '300px', color: 'green', backgroundColor: 'yellow' }"
        >哈哈哈</cg-button
    >
    <cg-button type="plain-light" disabled style="margin-left: 10px">哈哈哈</cg-button>
    <cg-button type="text">全部拍场</cg-button>
</div>

::: details 显示代码

```html
<div style="margin-bottom: 30px">
  <cg-button>哈哈哈</cg-button>
  <cg-button disabled style="margin-left: 10px">哈哈哈</cg-button>
  <cg-button style="margin-left: 10px" round>哈哈哈</cg-button>
</div>
<div style="margin-bottom: 30px">
  <cg-button type="plain-dark">全部拍场</cg-button>
  <cg-button type="plain-dark" disabled style="margin-left: 10px">
    哈哈哈
  </cg-button>
  <cg-button type="plain-dark" round style="margin-left: 10px">
    哈哈哈
  </cg-button>
</div>
<div>
  <cg-button
    type="plain-light"
    size="large"
    round
    color="rgba(75, 130, 210, 1)"
  >
    全部拍场
  </cg-button>
  <cg-button
    type="plain-light"
    style="margin-left: 10px"
    :buttonStyle="{ width: '300px', color: 'green', backgroundColor: 'yellow' }"
  >
    哈哈哈
  </cg-button>
  <cg-button type="plain-light" disabled style="margin-left: 10px">
    哈哈哈
  </cg-button>
  <cg-button type="text">全部拍场</cg-button>
</div>
```

:::

## Button Attributes

| 名称     | 描述                                                    | 类型    | 可选值                                                                                                        | 默认值  |
| -------- | ------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| type     | 按钮类型                                                | string  | default(红色实底，白色文字)/plain-dark(无底色，黑色边框文字)/plain-light(无底色，红色边框文字)/text(文本按钮) | default |
| disabled | 是否禁用                                                | boolean | —                                                                                                             | false   |
| round    | 圆角                                                    | boolean | —                                                                                                             | false   |
| size     | 大小                                                    | string  | default/large                                                                                                 | default |
| color    | 自定义按钮颜色, 并自动计算 hover 和 active 触发后的颜色 | string  | —                                                                                                             | —       |
