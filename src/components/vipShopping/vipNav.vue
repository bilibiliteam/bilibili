<template>
  <div id="vipNav">
    <div class="vipNav bg-fff">
      <div class="lei">
        <a href="#/handPlay">
          <div><i class="iconfont icon-shangpin-" style="color: #EFDF8E;"></i></div>
          <span>手办模玩</span>
        </a>
      </div>
      <div class="lei">

        <div><i class="iconfont icon-dianshiju" style="color: #3AD1FF;"></i></div>
        <span>漫展购票</span>

      </div>
      <div class="lei">

        <div><i class="iconfont icon-shijianbiao" style="color: #F9C301;"></i></div>
        <span>新品上架</span>

      </div>
      <div class="lei">
        <a href="#/goodsClass">
          <div><i class="iconfont icon-gouwudai" style="color: #F15C8D;"></i></div>
          <span>商品分类</span>
        </a>
        
      </div>
    </div>
    <div class="vipNav-img">
      <img src="../../../static/imgs/vipPic1.jpg">
    </div>
  </div>
    
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
  #vipNav .vipNav{
    display: flex;
    padding: 10px;
    background-color: #eee;
  }
  #vipNav .vipNav .lei{
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  #vipNav .vipNav .lei span{
    font-size: 12px;
    color: #6D6D6D;
  }
  #vipNav .vipNav .lei div{
    padding: 5px;
    width: 50px;
    height: 50px;
    margin: 10px auto;
    border-radius:50%; 
    background-color: #fff;
  }
  #vipNav .vipNav .lei div i{
    font-size: 35px;
  }
  #vipNav .vipNav-img{
    height: 100px;
    padding: 5px;
    width: 100%;
  }
  #vipNav .vipNav-img img{
    width: 100%;height: 100%;
    border-radius:50px; 
  }
</style>
