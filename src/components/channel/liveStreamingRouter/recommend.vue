<template>
    <div class="recommend">
      <div class="homeBanner">
        <homeBanner class="littleHomeBanner"></homeBanner>
      </div>
      <channelCommon class="channelCommon"></channelCommon>
      <channelCommon2></channelCommon2>
      <splendid></splendid>
    </div>
</template>

<script>
  import homeBanner from '@/components/homeBanner'
  import channelCommon from '@/components/channel/channelCommon'
  import channelCommon2 from '@/components/channel/channelCommon2'
  import splendid from '@/components/channel/liveStreamingRouter/splendid'
    export default {
        components:{
          homeBanner,
          channelCommon,
          channelCommon2,
          splendid
        }
    }
</script>

<style scoped>
  .homeBanner{
    padding:10px;
    background: #fff;

  }
  .littleHomeBanner{
     border-radius: 5px !important;
   }
  .channelCommon{
    margin-top: 0;
  }

</style>
