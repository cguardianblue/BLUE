# 文字提示

###

## 基础用法

###

<div style="margin-bottom: 30px">
    <div style="display: flex">
      <cg-tooltip placement="left" style="margin-right: 30px">
        <template #trigger>bottom left</template>
        <template #content>bottom left text some words</template>
      </cg-tooltip>
      <cg-tooltip placement="left" trigger="always" style="margin-right: 300px">
        <template #trigger>bottom left</template>
        <template #content>bottom left text some words</template>
      </cg-tooltip>
      <cg-tooltip placement="right" trigger="click">
        <template #trigger>bottom right</template>
        <template #content
          >bottom right text some words 范德萨发生范德萨范德萨发方式大是大非发大水
          范德萨发生范德萨范德萨发方式大是大非发大水 发达舒服阿凡达</template
        >
      </cg-tooltip>
    </div>
</div>

::: details 显示代码

```html
<div style="margin-bottom: 30px">
  <div style="display: flex">
    <cg-tooltip placement="left" style="margin-right: 30px">
      <template #trigger>bottom left</template>
      <template #content>bottom left text some words</template>
    </cg-tooltip>
    <cg-tooltip placement="left" trigger="always" style="margin-right: 300px">
      <template #trigger>bottom left</template>
      <template #content>bottom left text some words</template>
    </cg-tooltip>
    <cg-tooltip placement="right" trigger="click">
      <template #trigger>bottom right</template>
      <template #content>
        bottom right text some words 范德萨发生范德萨范德萨发方式大是大非发大水
        范德萨发生范德萨范德萨发方式大是大非发大水 发达舒服阿凡达
      </template>
    </cg-tooltip>
  </div>
</div>
```

:::

## Tooltip Attributes

| 名称      | 描述               | 类型   | 可选值             | 默认值 |
| --------- | ------------------ | ------ | ------------------ | ------ |
| trigger   | 文字提示出现的方式 | string | hover/click/always | hover  |
| placement | 出现的位置         | string | left/right         | left   |

## Tooltip Slots

| 名称    | 描述           |
| ------- | -------------- |
| trigger | 触发的文字内容 |
| content | 内容           |
