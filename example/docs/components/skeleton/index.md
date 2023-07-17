## 骨架屏

<script setup>
    import { ref } from 'vue'
    const loading = ref(true)
    const currentDate = new Date().toDateString()
</script>
<div>
  <div>简单骨架屏</div>
  <div style="width: 400px">
    <cg-skeleton :rows="3" />
    <br />
    <cg-skeleton style="--cg-skeleton-circle-size: 100px">
      <template #template>
        <cg-skeleton-item variant="circle" />
      </template>
    </cg-skeleton>
  </div>
  <div>自定义样式骨架屏 2组一样的</div>
  <div>
    <cg-skeleton style="width: 240px" animated :count="2">
      <template #template>
        <cg-skeleton-item variant="image" style="width: 240px; height: 240px" />
        <div style="padding: 14px">
          <cg-skeleton-item variant="p" style="width: 50%" />
          <div style="display: flex; align-items: center; justify-items: space-between; margin-top: 10px">
            <cg-skeleton-item variant="text" style="margin-right: 16px" />
            <cg-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
    </cg-skeleton>
  </div>
  <div>防止渲染防止抖动</div>
  <div>
    <div style="margin-bottom: 20px">
      <label style="margin-right: 16px" @click="loading = !loading">Switch Loading</label>
      <button @click="loading = !loading">点我</button>
    </div>
    <cg-skeleton style="width: 240px" :loading="loading" animated :throttle="500">
      <template #template>
        <cg-skeleton-item variant="image" style="width: 240px; height: 240px" />
        <div style="padding: 14px">
          <cg-skeleton-item variant="h3" style="width: 50%" />
          <div
            style="display: flex; align-items: center; justify-content: space-between; margin-top: 16px; height: 16px"
          >
            <cg-skeleton-item variant="text" style="margin-right: 16px" />
            <cg-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
      <template #default>
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div style="padding: 14px">
          <div style="margin-bottom: 10px">Delicious hamburger</div>
          <div class="">
            <span style="margin-right: 10px">{{ currentDate }}</span>
            <button text class="button">button</button>
          </div>
        </div>
      </template>
    </cg-skeleton>
  </div>
</div>
