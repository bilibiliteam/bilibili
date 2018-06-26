<template>
    <div>
      <homeheader />
      <xIndexCommon></xIndexCommon>
      <xIndexBottom class="indexFooter"></xIndexBottom>
    </div>
</template>

<script>
    import homeheader from '../components/homeheader'
    import xIndexBottom from '../components/xIndex/xIndexBottom'
    import xIndexCommon from '../components/xIndex/xIndexCommon'
    export default {
        components: {
            homeheader,
            xIndexBottom,
            xIndexCommon
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
</style>
