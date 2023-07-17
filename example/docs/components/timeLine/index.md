# 时间轴

###

## 基础用法

###

<script setup>
    import {ref} from 'vue'
    const timeLineItemArr = ref([
        {
            title: '申请已提交',
            time: '2021-12-12',
            titleColor: 'rgba(67, 77, 92, 1)',
            status: '2'
        },
        {
            title: '申请已处理',
            time: '2021-12-12',
            content: '审核未通过，资金已经退回保证金账户，如有问题请联系我司结算010-85928288',
            titleColor: 'rgba(167, 56, 67, 1)',
            status: '2'
        },
        {
            title: '申请已提交',
            time: '2021-12-12',
            titleColor: 'rgba(175, 177, 196, 1)',
            status: '3'
        }
    ])
</script>
<div style="margin-bottom: 30px; width: 500px">
    <cg-timeLine>
      <cg-timeLineItem
        :title="timeLineItem.title"
        :time="timeLineItem.time"
        :titleColor="timeLineItem.titleColor"
        :status="timeLineItem.status"
        v-for="(timeLineItem, timeLineItemIndex) in timeLineItemArr"
        :key="timeLineItemIndex"
      >
        <span v-if="timeLineItem.content">{{ timeLineItem.content }}</span>
      </cg-timeLineItem>
    </cg-timeLine>
</div>

::: details 显示代码

```html
<div style="margin-bottom: 30px; width: 500px">
  <cg-timeLine>
    <cg-timeLineItem
      :title="timeLineItem.title"
      :time="timeLineItem.time"
      :titleColor="timeLineItem.titleColor"
      :status="timeLineItem.status"
      v-for="(timeLineItem, timeLineItemIndex) in timeLineItemArr"
      :key="timeLineItemIndex"
    >
      <span v-if="timeLineItem.content">{{ timeLineItem.content }}</span>
    </cg-timeLineItem>
  </cg-timeLine>
</div>
<script setup>
  import { ref } from "vue"
  const timeLineItemArr = ref([
    {
      title: "申请已提交",
      time: "2021-12-12",
      titleColor: "rgba(67, 77, 92, 1)",
      status: "2",
    },
    {
      title: "申请已处理",
      time: "2021-12-12",
      content:
        "审核未通过，资金已经退回保证金账户，如有问题请联系我司结算010-85928288",
      titleColor: "rgba(167, 56, 67, 1)",
      status: "2",
    },
    {
      title: "申请已提交",
      time: "2021-12-12",
      titleColor: "rgba(175, 177, 196, 1)",
      status: "3",
    },
  ])
</script>
```

:::

## TimeLine Slots

| 名称 | 描述 | 子标签        |
| ---- | ---- | ------------- |
| -    | 内容 | TimeLine Item |

## TimeLineItem Attributes

| 名称       | 描述               | 类型   | 可选值                            | 默认值              |
| ---------- | ------------------ | ------ | --------------------------------- | ------------------- |
| title      | 标题               | string | —                                 | —                   |
| time       | 时间               | string | —                                 | —                   |
| content    | 内容               | string | —                                 | —                   |
| status     | 节点以及竖线轴状态 | string | 1(灰色)/2(红色)/3(有背景底色红色) | 1                   |
| titleColor | 文字颜色           | string | -                                 | rgba(67, 77, 92, 1) |
