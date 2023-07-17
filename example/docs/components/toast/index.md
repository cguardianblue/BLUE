<script setup>
    import { createToast } from 'cg-ui'
    function onClick () {
        createToast({ message: `测试数据` })
    }
</script>
<div>
    <cg-button type="plain-dark" @click="onClick">我是按钮</cg-button>
</div>

::: details 显示代码

```html
<div>
  <cg-button type="plain-dark" @click="onClick">我是按钮</cg-button>
</div>
<script setup>
  import { createToast } from "cg-ui"
  function onClick() {
    createToast({ message: `测试数据` })
  }
</script>
```

:::

## Toast Attributes

| 属姓名   | 说明                   | 类型                          | 默认值 |
| -------- | ---------------------- | ----------------------------- | ------ |
| show     | 控制显隐               | Boolean                       | false  |
| message  | 内容                   | String                        |        |
| duration | 展示时间               | Number                        | 3000   |
| type     | 样式：成功、警告、错误 | 'success'，'warning'，'error' | --     |

### createToast 函数

入参为 ({ message: String, duration: Number, type: String })

> createToast 函数短时间内多次触发会有特殊效果
