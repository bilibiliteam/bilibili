<template>
    <div id="xIndexBottom" class="bg-fff">
      <span><i class="iconfont icon-shouye"></i><a href="#/">首页</a></span>
      <span><i class="iconfont icon-changyongfenlei"></i><a href="#/channel">频道</a></span>
      <span><i class="iconfont icon-dongtaiweixuanzhong"></i><a href="">动态</a></span>
      <span><i class="iconfont icon-gouwudai"></i><a href="">会员购</a></span>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped lang="scss">
#xIndexBottom{
  align-items: center;
  display:flex;
  height:50px;
  bottom:0;
  left:0;
  width:100%;
border-top:1px solid #eee;
  span{
    flex:1;
    display: flex;
    flex-direction: column;
    text-align: center;
    color:#999;
    a{
          font-size: 12px;
      color:#999;

    }
    i{
      font-size: 20px;

    }
  }
}
</style>
