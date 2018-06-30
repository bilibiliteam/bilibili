<template>
  <div id="channelCommon">
    <h3><span class="fl"><i class="iconfont icon-fan color-pink"></i><a href="">新番连载</a></span> <span class="fr"><a href="">时间表 ></a></span></h3>
    <div class="channelCommonBody">
      <ul class="clearfix">
        <li v-for="(item,index) of recommendChannel" class="fl">
          <div class="channelCommonBodyTop">
            <img :src="item.src" alt="">
          </div>
          <div class="channelCommonBodyBottom">
            <h4 v-text="item.title"></h4>
            <p v-text="item.currentState"></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  // import Vue from 'vue'
  // Vue.filter('currency',(el)=>{
  //   console.log(el);
  //   return el+'万人在看';
  // })
  export default {
    data(){
      return {
        recommendChannel:[
          {
            title:'齐木楠雄的灾难',
            src:require('../../../static/imgs/7ec11ac897901cb826f34358a883416734fd5d33.jpg'),
            imfo:'555.4',
            currentState:33
          },
          {
            title:'齐木楠雄的灾难',
            src:require('../../../static/imgs/7ec11ac897901cb826f34358a883416734fd5d33.jpg'),
            imfo:'555.4',
            currentState:33
          },
          {
            title:'齐木楠雄的灾难',
            src:require('../../../static/imgs/7ec11ac897901cb826f34358a883416734fd5d33.jpg'),
            imfo:'555.4',
            currentState:33
          },
          {
            title:'齐木楠雄的灾难',
            src:require('../../../static/imgs/7ec11ac897901cb826f34358a883416734fd5d33.jpg'),
            imfo:'555.4',
            currentState:33
          },
          {
            title:'齐木楠雄的灾难',
            src:require('../../../static/imgs/7ec11ac897901cb826f34358a883416734fd5d33.jpg'),
            imfo:'555.4',
            currentState:33
          },
          {
            title:'齐木楠雄的灾难',
            src:require('../../../static/imgs/7ec11ac897901cb826f34358a883416734fd5d33.jpg'),
            imfo:'555.4',
            currentState:33
          },
        ]
      }
    },
  }
</script>

<style scoped>

  #channelCommon{
    width: 100%;
    background: #fff;
    padding:0 20px;
    margin-top: 10px;
  }
  #channelCommon h3{
    height: 40px;
    line-height: 40px;
  }
  #channelCommon h3 i{
    font-size: 20px;
    margin-right: 5px;
  }
  #channelCommon h3 span:first-of-type a{
    color:#000;
    font-size: 12px;
  }
  #channelCommon h3 span:last-of-type a{
    color:#F15C8D;
    font-size: 12px;
  }
  #channelCommon .channelCommonBody{
    margin-top: 5px;
    width: 100%;
  }
  #channelCommon .channelCommonBody li{
    width: 50%;
    padding:5px;
  }
  #channelCommon .channelCommonBody li img{
    width: 100%;
    height: 130px;
    border-radius: 2px;
  }
  #channelCommon .channelCommonBody li .channelCommonBodyBottom h4{
    font-size: 14px;
    margin:5px 0;
  }
  #channelCommon .channelCommonBody li .channelCommonBodyBottom p{
    font-size: 12px;
    color:#aaa;
  }
</style>
