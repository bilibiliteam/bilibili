<template>
    <div class="findchannel">
      <channelHeader></channelHeader>
      <tabNav></tabNav>
      <findchannelCommon></findchannelCommon>
    </div>
</template>

<script>
    import channelHeader from '@/components/channel/channelHeader'
    import tabNav from '@/components/channel/tabNav'
    import findchannelCommon from '@/components/channel/channelAllRouter/findchannelCommon'

    export default {
        name: "",
      components:{
        channelHeader,
        findchannelCommon,
        tabNav
      }
    }
</script>

<style scoped>

</style>
