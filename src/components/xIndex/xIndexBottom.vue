<template>
    <div id="xIndexBottom" class="bg-fff">
      <span><i class="iconfont icon-shouye"></i>首页</span>
      <span><i class="iconfont icon-changyongfenlei"></i>频道</span>
      <span><i class="iconfont icon-dongtaiweixuanzhong"></i>动态</span>
      <span><i class="iconfont icon-gouwudai"></i>会员购</span>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped lang="scss">
#xIndexBottom{
  width:100%;
  align-items: center;
  display:flex;
  height:50px;
  span{
    flex:1;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    text-align: center;
    color:#999;
    i{
      font-size: 20px;
    }
  }
}
</style>
