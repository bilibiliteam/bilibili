<template>
    <div class="playerRoom">
      <homeBanner></homeBanner>
    </div>
</template>

<script>
  import tabNav from '@/components/tabNav'
  import channelHeader from '../channelHeader'
  import homeBanner from '@/components/homeBanner'
  export default {
    components:{
      tabNav,
      channelHeader,
      homeBanner
    },
    data(){
      return {
        livStreamingItem:[
          {
            name:"直播",
            tabNavItem:['推荐','娱乐',"手游","游戏","绘画","精彩轮播"]
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
