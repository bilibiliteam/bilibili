<template>
    <div class="page">
      <homeheader />
      <tabNav />
      <div class="home-body">
        <router-view></router-view>
      </div>
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
        },
        mounted(){
          this.$store.state.idxLight = 0;
        },
    }

</script>

<style>
  .page{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
  .home-body{
        flex: 1;
        overflow-x: hidden;
        font-size: 14px;
    }
</style>
