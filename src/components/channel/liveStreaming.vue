<template>
  <div id="livStreaming">
    <div class="liveStreamingHead">
      <channelHeader class="homeheader"></channelHeader>
      <tabNav class="tabNav"></tabNav>
    </div>
    <div class="liveStreamingBody">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
    import tabNav from '@/components/channel/tabNav'
    import channelHeader from './channelHeader'
    export default {
        components:{
          tabNav,
          channelHeader,
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
  .tabNav{
    width:auto;
  }
</style>
