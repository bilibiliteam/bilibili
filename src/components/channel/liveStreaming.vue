<template>
  <div id="livStreaming">
    <homeheader></homeheader>
    <tabNav class="tabNav"></tabNav>
    <homeBanner></homeBanner>
    <channelCommon></channelCommon>
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
  .tabNav{
    background: #F15C8D !important;
    color:#eee;
  }
</style>
