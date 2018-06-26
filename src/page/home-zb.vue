<template>
    <div class="page">
      <homeheader />
      <tabNav />
      <homeBanner />
      <xIndexCommon></xIndexCommon>
      <xIndexBottom class="indexFooter"></xIndexBottom>
      <siderBar />
    </div>
</template>

<script>
    import homeheader from '../components/homeheader'
    import xIndexBottom from '../components/xIndex/xIndexBottom'
    import xIndexCommon from '../components/xIndex/xIndexCommon'
    import homeBanner from '../components/homeBanner'
    import tabNav from '../components/tabNav'
    import siderBar from '../components/sidebar'
    export default {
        components: {
            homeheader,
            xIndexBottom,
            xIndexCommon,
            tabNav,
            homeBanner,
            siderBar
        }
    }
</script>

<style scoped>
  .indexFooter{
    position:fixed;
    bottom:0;
    left:0;
    width: 100%;
  }
    .page{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
</style>
