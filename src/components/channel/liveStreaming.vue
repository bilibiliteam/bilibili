<template>
  <div id="livStreaming">
    <homeheader class="homeheader"></homeheader>
    <tabNav class="tabNav"></tabNav>
    <div class="liveStreamingBody">
      <homeBanner></homeBanner>
      <channelCommon></channelCommon>
      <channelCommon></channelCommon>
    </div>
  </div>
</template>

<script>
    import tabNav from '@/components/tabNav'
    import homeheader from '@/components/homeheader'
    import homeBanner from '@/components/homeBanner'
    import channelCommon from '@/components/channel/channelCommon'
    export default {
        components:{
          tabNav,
          homeheader,
          homeBanner,
          channelCommon
        },
    }
</script>

<style scoped>
  #livStreaming{
    display:flex;
    flex-direction: column;
    overflow-x:hidden;


  }
  .tabNav{
    background: #F15C8D !important;
    color:#eee;
    height: 30px;
  }
  .homeheader{
    height: 10%;
  }
  .liveStreamingBody{
    flex:1;
  }
</style>
