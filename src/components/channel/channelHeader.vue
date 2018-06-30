<template>
    <div id="channelHeader">
      <a href="#/channel"><i class=""><-</i></a>
      <span v-text="channelName"><i class=""></i></span>
      <span><i class="iconfont icon-ai33"></i></span>
      <span><i class="iconfont icon-fangdajing"></i></span>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            // channelName: this.$store.state.changeChannelName,
          }
        },
      computed:{
          channelName(){
            console.log(this.$store.state.changeChannelName)
            return this.$store.state.changeChannelName;
          }
      },
      methods:{
        returnChannel(){
          history.go(-1);
        }
      }
    }
</script>

<style scoped lang="scss">
#channelHeader{
  height: 60px;
  width: 100%;
  background: #F15C8D;
  display: flex;
  color:#fff;
  font-size: 16px;
  align-content:center;
  line-height:60px;
  padding: 0 10px;
  a,span{
    width: 10%;
    color:#fff;
    font-size: 16px;
  }
  span:nth-of-type(1){
    flex:1;
   }
}
</style>
