# 对话框

###

## 基础用法

###

<script setup>
    import { ref } from 'vue'
    let showDialog = ref(false)
    function onClick () {
        showDialog.value = true
    }
    function dialogCancel () {
        console.log('取消按钮点击')
    }
    function dialogConfirm () {
        console.log('确定按钮点击')
    }
</script>
<div>
    <cg-button type="plain-dark" @click="onClick">我是按钮</cg-button>
</div>
<cg-dialog v-model="showDialog" :title="'dialog title'" :showClose="true" cancelText="取消" confirmText="确定" :onCancel="dialogCancel" :onConfirm="dialogConfirm">
    <div>dialog content</div>
</cg-dialog>

## Dialog Attributes

| 属姓名         | 说明                                                                                 | 类型     | 默认值 |
| -------------- | ------------------------------------------------------------------------------------ | -------- | ------ |
| v-model        | 显隐绑定值                                                                           | Boolean  | false  |
| title          | 弹窗标题，不传不显示                                                                 | String   |        |
| content        | 弹窗内容，优先级大于 slot                                                            | String   |        |
| cancelText     | 取消按钮文案，不传不显示取消按钮                                                     | String   |        |
| confirmText    | 确定按钮文案                                                                         | String   |        |
| showClose      | 是否展示右上角关闭图标                                                               | Boolean  | false  |
| confirmDisable | 确定按钮不能点击，默认关闭                                                           | Boolean  | false  |
| autoClose      | 自动关闭，默认开启                                                                   | Boolean  | true   |
| onCancel       | 取消按钮触发的函数（不支持异步）<br/>需要等待异步函数函数结束的话，将 autoClose 关闭 | Function |        |
| onConfirm      | 同上                                                                                 | Function |        |
| lockScroll     | 是否在 dialog 出现时，将 body 滚动锁住                                               | Boolean  | true   |

### Dialog slot

开启 slot 条件是不传 content 属性，匿名插槽，没有默认样式

### create Dialog 函数

入参 options props 属性都支持

> - createDialog 函数返回一个 Promise 对象
> - 只能同时存在一个 dialog 实例，二次触发会返回 resolve('already exist')
> - autoClose 开启时，会返回 resolve(true)
> - autoClose 关闭时，会返回 resolve(unmount) 一定要最后调用 unmount 函数卸载掉 dialog 组件
