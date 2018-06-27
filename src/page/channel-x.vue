<template>
  <div id="channel" class="page">
    <homeHeader class="header"></homeHeader>
    <div class="channelBody">
      <div class="channelSome clearfix">
        <a v-for="(item,index) of channelSome" class="fl" :href="item.routerLink" ><i :class="item.icon"></i><span v-text="item.name"></span></a>
      </div>
      <div class="mychannel">
        <h3>
          <span>我的频道</span>
          <a href="" class="fr">全部></a>
        </h3>
        <div class="mychannelBody">
          <span><a href="">双笙</a></span>
        </div>
      </div>
      <div class="findChannel">
        <h3>
          <span>发现频道</span>
          <a href="" class="fr">更多></a>
        </h3>
        <ul class="clearfix">
          <li v-for="(item,index) of findChannel" class="fl">
            <img :src="item.src" alt="">
            <h3 v-text="item.h3"></h3>
            <p v-text="item.howmany"></p>
            <button>订阅</button>
          </li>
        </ul>
      </div>
      <div class="channelSome clearfix">
        <a v-for="(item,index) of channelAll" class="fl" :href="item.routerLink" ><i :class="item.icon"></i><span v-text="item.name"></span></a>
      </div>
    </div>
    <xIndexBottom class="footer"></xIndexBottom>
  </div>
</template>

<script>
  import homeHeader from '@/components/homeheader'
  import xIndexBottom from '@/components/xIndex/xIndexBottom'
    export default {
        data(){
          return{
            channelSome:[
              {
                name:'番剧',
                icon:'iconfont icon-dianshiji color-orange',
                routerLink:'#/channel/liveStreaming'
              },
              {
                name:'国创',
                icon:'iconfont icon-guochandonghuatuijian color-pink',
                routerLink:'#/'
              },
              {
                name:'放映厅',
                icon:'iconfont icon-zhibo color-yellow',
                routerLink:'#/'
              },
              {
                name:'记录片',
                icon:'iconfont icon-jingyu color-skyblue',
                routerLink:'#/'
              },
              {
                name:'专栏',
                icon:'iconfont icon-book color-skyblue',
                routerLink:'#/'
              },
              {
                name:'音频',
                icon:'iconfont icon-miao color-orange',
                routerLink:'#/'
              },
            ],
            findChannel:[
              {
                src:require('../../static/imgs/7ec11ac897901cb826f34358a883416734fd5d33.jpg'),
                h3:'绝地求生',
                howmany:'33333万人已订阅'
              },
              {
                src:require('../../static/imgs/7ec11ac897901cb826f34358a883416734fd5d33.jpg'),
                h3:'绝地求生',
                howmany:'33333万人已订阅'
              },
              {
                src:require('../../static/imgs/7ec11ac897901cb826f34358a883416734fd5d33.jpg'),
                h3:'绝地求生',
                howmany:'33333万人已订阅'
              },
            ],
            channelAll:[
              {
                name:'直播',
                icon:'iconfont icon--fangyingji color-skyblue'
              },
              {
                name:'动画',
                icon:'iconfont icon-boshiweb_bofangliang color-pink'
              },
              {
                name:'音乐',
                icon:'iconfont icon-tubiaozhizuomobanyihuifu- color-yellow'
              },
              {
                name:'舞蹈',
                icon:'iconfont icon-fan color-pink'
              },
              {
                name:'游戏',
                icon:'iconfont icon-youxi color-green'
              },
              {
                name:'科技',
                icon:'iconfont icon-ufo color-skyblue'
              },
              {
                name:'生活',
                icon:'iconfont icon-miao color-orange'
              },
              {
                name:'科技',
                icon:'iconfont icon-ufo color-orange'
              },
              {
                name:'科技',
                icon:'iconfont icon-ufo color-orange'
              },
              {
                name:'科技',
                icon:'iconfont icon-ufo color-orange'
              },
              {
                name:'科技',
                icon:'iconfont icon-ufo color-orange'
              },
              {
                name:'科技',
                icon:'iconfont icon-ufo color-orange'
              },
              {
                name:'科技',
                icon:'iconfont icon-ufo color-orange'
              },
              {
                name:'科技',
                icon:'iconfont icon-ufo color-orange'
              },
              {
                name:'科技',
                icon:'iconfont icon-ufo color-orange'
              },
              {
                name:'科技',
                icon:'iconfont icon-ufo color-orange'
              },
              {
                name:'科技',
                icon:'iconfont icon-ufo color-orange'
              },
              {
                name:'科技',
                icon:'iconfont icon-ufo color-orange'
              },
              {
                name:'科技',
                icon:'iconfont icon-ufo color-orange'
              },
              {
                name:'科技',
                icon:'iconfont icon-ufo color-orange'
              },
            ],
          }
        },
        components:{
          homeHeader,
          xIndexBottom
        },
        mounted(){
          this.$store.state.idxLight = 1;
        }
    }
</script>

<style scoped lang="scss">
#channel{
  background: #fff;
  display:flex;
  flex-direction:column;
  height:100%;

  .footer{
    height: 50px;
}
  .channelBody{
    flex:1;
  overflow-x:hidden;
    .channelSome{
      border-bottom: 1px solid #eee;
      padding:10px 20px;
      a{
        display:flex;
        flex-direction: column;
        text-align: center;
        padding-bottom: 10px;
        width:25%;
        i{
          font-size: 30px;
          margin-bottom: 5px;
        }
        span{
          font-size: 12px;
        }
      }
    }
        h3{
        margin-bottom:10px;
        span{
          font-weight: bold;
          font-size: 14px;
        }
        a{
          color:#999;
          font-size: 12px;
        }
        }
    .mychannel{
      border-bottom: 1px solid #eee;
      padding:10px 20px;
      .mychannelBody{
        span{
          background: lightpink;
          display: inline-block;
          border-radius: 10px;
          margin:10px;
          font-size:0;
          padding:3px 0;
          a{
            margin:0 30px;
            font-size: 12px;
            color:#000;
          }
        }
      }

    }
  .findChannel{
    padding:10px 20px;
    border-bottom:1px solid #eee;
    ul li{
      width: 30%;
      text-align: center;
      border-radius: 3px;
      border:1px solid #eee;
      padding:10px;
      margin-right:10px;
      img{
        width: 100%;
        margin-bottom:5px;
      }
      h3{
        font-weight: normal;
        font-size: 14px;
        margin-bottom:5px;
      }
      p{
        font-size: 12px;
        color:#999;
        margin-bottom:5px;
      }
      button{
        border:1px solid deeppink;
        background: #fff;
        color:deeppink;
        font-size: 12px;
        padding:3px 20px;
        border-radius: 3px;
        margin-bottom:5px;

      }
    }
  }
  }
}
</style>

<style scoped>

</style>
