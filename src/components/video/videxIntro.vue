<template>
  <div>
    <div class="intro">
      <div class="top">
        <div>
          <i class="iconfont icon-like-1"  style="color: #F15C8D;"></i>
          <div>
            <p style="font-size: 13px;font-weight: bold;">心扉如醉</p>
            <p>2.2万粉丝</p>
          </div>
        </div>
        <div class="guanzhu"><a><i class="iconfont icon-jia"></i>关注</a></div>
      </div>
      <div class="center">
        <div style="font-size: 13px;">【补番推荐】b站今年来买回版权的热门番剧!</div>
        <div class="center-c">
          <div><i class="iconfont icon-bofangcishu"></i>2.7万</div>
          <div><i class="iconfont icon-like-1"></i>197</div>
        </div>
        <div>视频类型:盘点...</div>
      </div>
      <div class="bottom">
        <ul>
          <li><i class="iconfont icon-dianzan"></i><span>332</span></li>
          <li><i class="iconfont icon-chaping"></i><span>差评</span></li>
          <li><i class="iconfont icon-Upload_files"></i><span>406</span></li>
          <li><i class="iconfont icon-iconfontxingxing"></i><span>746</span></li>
          <li><i class="iconfont icon-fenxiang"></i><span>23</span></li>
        </ul>
      </div>
    </div>
    <vipContent />
  </div>

</template>

<script>
  import vipContent from '../../components/vipShopping/vipContent'
export default {
  components:{
    vipContent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .intro{
    background-color: #fff;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    padding: 10px;
  }
  .intro .top{
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 5px 0 10px 0;
    font-size: 13px;
  }
  .intro .top div:nth-child(1){
    display: flex;
    font-size: 12px;
  }
  .intro .top div:nth-child(1)>i{
    font-size: 30px;
    margin-right: 10px;
  }
  .intro .top .guanzhu{
    background-color: #F15C8D;
    height: 30px;padding: 5px;
    border-radius: 5px;
    color: #fff;
  }
  .intro .top .guanzhu i{
    margin-right: 5px;
    font-size: 13px;
  }
  .intro .center{
    display: flex;
    flex-direction: column;
  }
  .intro .center .center-c{
    display: flex;
    color: #B3B3B3;
  }
  .intro .center .center-c div{
    margin-right: 10px;
  }
  .intro .center>div{
    margin-bottom:8px ;
  }
  .intro .bottom ul{
    display: flex;
    justify-content: space-between;
  }
  .intro .bottom ul li{
    display: flex;
    text-align: center;
    flex-direction: column;
    padding: 0 10px;
  }
  .intro .bottom ul li i{
    font-size: 30px;
    color: #6E6E6E;
  }

</style>
