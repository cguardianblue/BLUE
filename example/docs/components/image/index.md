# 占位图

###

## 基础用法

###

<div style="width:200px;height:200px;">
    <cg-image src="https://deveop.cguardian.com/images/GD-2023-CN005/GD-2023-CN005-008-001.jpg?t=0.7599900132232524" fit="contain" defaultSrc="./images/image.svg"> </cg-image>
</div>
<div style="width:200px;height:200px;">
    <cg-image src="https://develop.cguardian.com/images/GD-2023-CN005/GD-2023-CN005-008-001.jpg?t=0.7599900132232524" fit="contain" defaultSrc="./images/image.svg"> </cg-image>
</div>

::: details 显示代码

```html
<div style="width:200px;height:200px;">
  <cg-image
    src="https://deveop.cguardian.com/images/GD-2023-CN005/GD-2023-CN005-008-001.jpg?t=0.7599900132232524"
    fit="contain"
    defaultSrc="./images/image.svg"
  ></cg-image>
</div>
<div style="width:200px;height:200px;">
  <cg-image
    src="https://develop.cguardian.com/images/GD-2023-CN005/GD-2023-CN005-008-001.jpg?t=0.7599900132232524"
    fit="contain"
    defaultSrc="https://develop.cguardian.com/images/GD-2023-CN005/GD-2023-CN005-008-001/_lastModified1682479130000_/3.jpg"
  ></cg-image>
</div>
```

:::

## Image Attributes

| 名称       | 描述                               | 类型    | 可选值 | 默认值 |
| ---------- | ---------------------------------- | ------- | ------ | ------ |
| src        | 图片地址                           | string  | —      | —      |
| defaultSrc | 图片加载失败或者未加载完成时占位图 | string  | —      | —      |
| fit        | 同原生 img                         | string  | —      | —      |
| loading    | 同原生 img                         | string  | —      | —      |
| imageHover | 移入是否放大                       | boolean | —      | true   |
