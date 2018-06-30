<template>
    <div class="zhiboRecommend">
      <div class="homeBanner">
        <homeBanner></homeBanner>
      </div>
      <littleFenlei class="littleFenlei"></littleFenlei>
    </div>
</template>

<script>
    import homeBanner from '@/components/homeBanner'
    import littleFenlei from '@/components/channel/channelAllRouter/littleFenlei'
    export default {
        components:{
          homeBanner,
          littleFenlei
        }
    }
</script>

<style scoped>
  .zhiboRecommend{
    background: #fff;
  }
  .homeBanner{
    padding:10px;
    border-radius: 20px;
  }

</style>
