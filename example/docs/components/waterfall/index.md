## 瀑布流

<script setup>
    import {reactive, onMounted} from 'vue'
    let state = reactive({
        dataList: [],
        isMounted: false,
        isFinished: false,
        isLoading: false
    })
    let list = [
        {
            imagePath: 'https://testcos.cguardian.com/blue/image/bid/page/app聚合页banner1_s_69171.png',
            width: 1029,
            height: 360,
            title: '图片1',
            content: '你说气不气加辣口水鸡弗兰克撒娇弗兰克是大姐'
        },
        {
            height: 740,
            imagePath: 'https://testcos.cguardian.com/blue/image/bid/page/刘国松云树银枝_s_18018.jpg',
            width: 1500,
            title: '图片2',
            content: ''
        },
        {
            height: 400,
            imagePath: 'https://testcos.cguardian.com/blue/image/bid/page/7_s_70572.jpg',
            width: 267,
            title: '图片3',
            content: ''
        },
        {
            height: 360,
            imagePath: 'https://testcos.cguardian.com/blue/image/bid/page/app聚合页banner1_s_69171.png',
            width: 1029,
            title: '图片4',
            content: '发东升了咖啡就行'
        },
        {
            height: 740,
            imagePath: 'https://testcos.cguardian.com/blue/image/bid/page/刘国松云树银枝_s_18018.jpg',
            width: 1500,
            title: '图片5',
            content: '发东升房间里看女i哦'
        }
    ]
    onMounted(() => {
        state.isMounted = true
    })
    state.dataList = list
    function getNext() {
        if (state.isLoading) return
        state.isLoading = true
        setTimeout(() => {
            state.dataList = state.dataList.concat([
            {
                height: 360,
                imagePath: 'https://testcos.cguardian.com/blue/image/bid/page/app聚合页banner1_s_69171.png',
                width: 1029,
                title: '图片4',
                content: '发东升了咖啡就行'
            },
            {
                height: 360,
                imagePath: 'https://testcos.cguardian.com/blue/image/bid/page/app聚合页banner1_s_69171.png',
                width: 1029,
                title: '图片4',
                content: '发东升了咖啡就行'
            },
            {
                height: 360,
                imagePath: 'https://testcos.cguardian.com/blue/image/bid/page/app聚合页banner1_s_69171.png',
                width: 1029,
                title: '图片4',
                content: '发东升了咖啡就行'
            },
            {
                height: 740,
                imagePath: 'https://testcos.cguardian.com/blue/image/bid/page/刘国松云树银枝_s_18018.jpg',
                width: 1500,
                title: '图片8',
                content: '你说气不气加辣口水鸡弗兰克撒娇弗兰克是大姐'
            },
            {
                height: 740,
                imagePath: 'https://testcos.cguardian.com/blue/image/bid/page/刘国松云树银枝_s_18018.jpg',
                width: 1500,
                title: '图片9',
                content: '你说气不气加辣口水鸡弗兰克撒娇弗兰克是大姐'
            },
            {
                height: 740,
                imagePath: 'https://testcos.cguardian.com/blue/image/bid/page/刘国松云树银枝_s_18018.jpg',
                width: 1500,
                title: '图片8',
                content: '你说气不气加辣口水鸡弗兰克撒娇弗兰克是大姐'
            },
            {
                height: 740,
                imagePath: 'https://testcos.cguardian.com/blue/image/bid/page/刘国松云树银枝_s_18018.jpg',
                width: 1500,
                title: '图片9',
                content: '你说气不气加辣口水鸡弗兰克撒娇弗兰克是大姐'
            }
            ])
            state.isLoading = false
        }, 2000)

        state.isFinished = true
        state.dataList = [...state.dataList, ...JSON.parse(JSON.stringify(list))]
    }
</script>
<div style="width: 1000px; height: 300px; overflow-y: scroll" id="waterfall">
    <cg-waterfall
      :list="state.dataList"
      :colWidth="280"
      :gap="20"
      scrollBodySelector="#waterfall"
      :distanceToScroll="20"
      :isMounted="state.isMounted"
      @scroll-reach-bottom="getNext"
    >
      <template v-slot="{ item, index }">
        <div>
          <div>
            <cg-image :src="item.imagePath" fit="contain"></cg-image>
          </div>
          <div>序号{{ index + 1 }}</div>
          <div>{{ item.content }}</div>
        </div>
      </template>
    </cg-waterfall>
</div>
