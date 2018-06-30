<template>
    <div id="guochan">
      <channelHeader></channelHeader>
      <tabNav></tabNav>
      <homeBanner></homeBanner>
      <channelCommon></channelCommon>
    </div>
</template>

<script>
    import channelCommon from './channelCommon'
    import homeBanner from '@/components/homeBanner'
    import tabNav from '@/components/tabNav'
    import channelHeader from './channelHeader'
    export default {
        components:{
          channelCommon,
          homeBanner,
          tabNav,
          channelHeader,
        }
    }
</script>

<style scoped>

</style>
