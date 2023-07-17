# 轮播图

###

## 基础用法

###

<script setup>
    import {ref} from 'vue'
</script>
<style lang="scss">
    .swiper {
        width: 450px;
        margin: 0 auto;
        margin-bottom:20px;
    }
    .swiper-item h3 {
        color: #475669;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
        text-align: center;
    }

    .swiper-item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .swiper-item:nth-child(2n + 1) {
        background-color: #d3dce6;
    }
</style>
<cg-swiper height="150px" class="swiper">
    <cg-swiper-item v-for="item in 7" :key="item" class="swiper-item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
    </cg-swiper-item>
</cg-swiper>

<cg-swiper height="150px" class="swiper" indicatorPosition="outside" :loop="false">
    <cg-swiper-item v-for="item in 7" :key="item" class="swiper-item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
    </cg-swiper-item>
</cg-swiper>

<cg-swiper height="150px" class="swiper" direction="vertical" :autoplay="false">
    <cg-swiper-item v-for="item in 7" :key="item" class="swiper-item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
    </cg-swiper-item>
</cg-swiper>

::: details 显示代码

```html
<cg-swiper height="150px" class="swiper">
  <cg-swiper-item v-for="item in 7" :key="item" class="swiper-item">
    <h3 class="small justify-center" text="2xl">{{ item }}</h3>
  </cg-swiper-item>
</cg-swiper>

<cg-swiper
  height="150px"
  class="swiper"
  indicatorPosition="outside"
  :loop="false"
>
  <cg-swiper-item v-for="item in 7" :key="item" class="swiper-item">
    <h3 class="small justify-center" text="2xl">{{ item }}</h3>
  </cg-swiper-item>
</cg-swiper>

<cg-swiper height="150px" class="swiper" direction="vertical">
  <cg-swiper-item v-for="item in 7" :key="item" class="swiper-item">
    <h3 class="small justify-center" text="2xl">{{ item }}</h3>
  </cg-swiper-item>
</cg-swiper>
<style lang="scss">
  .swiper {
    width: 450px;
    margin: 0 auto;
  }
  .swiper-item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
  }

  .swiper-item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .swiper-item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>
```

:::

###

## 卡片模式

###

<cg-swiper height="150px" class="swiper" type="card">
    <cg-swiper-item v-for="item in 7" :key="item" class="swiper-item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
    </cg-swiper-item>
</cg-swiper>

::: details 显示代码

```html
<cg-swiper height="150px" class="swiper" type="card">
  <cg-swiper-item v-for="item in 7" :key="item" class="swiper-item">
    <h3 class="small justify-center" text="2xl">{{ item }}</h3>
  </cg-swiper-item>
</cg-swiper>

<style lang="scss">
  .swiper {
    width: 450px;
    margin: 0 auto;
  }
  .swiper-item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
  }

  .swiper-item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .swiper-item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>
```

:::

## Swiper Attributes

| 名称              | 描述                   | 类型    | 可选值              | 默认值     |
| ----------------- | ---------------------- | ------- | ------------------- | ---------- |
| height            | 轮播图高度             | string  | —                   | —          |
| trigger           | 分页器的方式           | string  | hover/click         | click      |
| autoplay          | 自动播放               | boolean | —                   | true       |
| interval          | 间隔时间               | number  | —                   | 3000       |
| indicatorPosition | 指示器的位置           | string  | -/none/outside      | —          |
| arrow             | 切换箭头的显示时机     | number  | always/hover/never  | -          |
| type              | 类型                   | string  | —/card              | -          |
| loop              | 循环播放               | boolean | —                   | true       |
| direction         | 方向                   | string  | horizontal/vertical | horizontal |
| pauseOnHover      | 鼠标悬浮时暂停自动切换 | boolean | -                   | true       |

## Swiper Methods

| 方法名        | 描述                    | 参数                |
| ------------- | ----------------------- | ------------------- |
| setActiveItem | 设置要激活的 swiperItem | swiperItem 的索引值 |
| prev          | 上一张                  | -                   |
| next          | 下一张                  | -                   |

## Swiper Slots

| 名称 | 描述 | 参数        |
| ---- | ---- | ----------- |
| -    | 内容 | Swiper Item |
