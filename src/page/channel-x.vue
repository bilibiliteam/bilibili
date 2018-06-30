<template>
  <div id="channel" class="page">
    <homeHeader class="header"></homeHeader>
    <div class="channelBody">
      <div class="channelSome clearfix">
        <a v-for="(item,index) of channelSome" class="fl" :href="item.routerLink" @click="toChannel(index)" :channelId="item.id"><i :class="item.icon"></i><span v-text="item.name"></span></a>
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
        <a v-for="(item,index) of channelAll" class="fl" :href="item.routerLink" @click="toChannelAll(index)"><i :class="item.icon"></i><span v-text="item.name"></span></a>
      </div>
    </div>
    <xIndexBottom class="footer"></xIndexBottom>
  </div>
</template>

<script>
  import homeHeader from '@/components/homeheader'
  import xIndexBottom from '@/components/xIndex/xIndexBottom'
    export default {
      data() {
        return {
          channelSome: [
            {
              id: 1,
              name: '番剧',
              icon: 'iconfont icon-dianshiji color-orange',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '推荐', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '连载动画', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '完结动画', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '资讯', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '官方延伸', routerLink: '#/channel/liveStreaming/completionAnimation'}],
            },
            {
              id: 2,
              name: '国创',
              icon: 'iconfont icon-guochandonghuatuijian color-pink',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '推荐', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '国产动画', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '国产原创相关', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '布袋戏', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '资讯', routerLink: '#/channel/liveStreaming/completionAnimation'}],
            },
            {
              id: 3,
              name: '放映厅',
              icon: 'iconfont icon-zhibo color-yellow',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '推荐', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '纪录片', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '电影', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '电视剧', routerLink: '#/channel/liveStreaming/recommend'}],
            },
            {
              id: 4,
              name: '记录片',
              icon: 'iconfont icon-jingyu color-skyblue',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '推荐', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '纪录片', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '电影', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '电视剧', routerLink: '#/channel/liveStreaming/recommend'}],
            },
            {
              id: 5,
              name: '专栏',
              icon: 'iconfont icon-book color-skyblue',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '推荐', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '动画', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '游戏', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '影视', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '生活', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '兴趣', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '轻小说', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '科技', routerLink: '#/channel/liveStreaming/completionAnimation'},],
            },
            {
              id: 6,
              name: '音频',
              icon: 'iconfont icon-miao color-orange',
              routerLink: '#/channel/liveStreaming',
            },
          ],
          findChannel: [
            {
              src: require('../../static/imgs/7ec11ac897901cb826f34358a883416734fd5d33.jpg'),
              h3: '绝地求生',
              howmany: '33333万人已订阅'
            },
            {
              src: require('../../static/imgs/7ec11ac897901cb826f34358a883416734fd5d33.jpg'),
              h3: '绝地求生',
              howmany: '33333万人已订阅'
            },
            {
              src: require('../../static/imgs/7ec11ac897901cb826f34358a883416734fd5d33.jpg'),
              h3: '绝地求生',
              howmany: '33333万人已订阅'
            },
          ],
          channelAll: [
            {
              name: '直播',
              icon: 'iconfont icon--fangyingji color-skyblue',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '推荐', routerLink: '#/channel/liveStreaming/zhiboRecommend'},
                {name: '连载动画', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '完结动画', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '资讯', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '官方延伸', routerLink: '#/channel/liveStreaming/completionAnimation'}],
            },
            {
              name: '动画',
              icon: 'iconfont icon-boshiweb_bofangliang color-pink',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '推荐', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '短片·手书·配音', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: 'MAD·AMV', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '综合', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: 'MMD·3D', routerLink: '#/channel/liveStreaming/completionAnimation'}],
            },
            {
              name: '音乐',
              icon: 'iconfont icon-tubiaozhizuomobanyihuifu- color-yellow',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '推荐', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '原创音乐', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '翻唱', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: 'VOCALOID·UTAU', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '演奏', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '三次元音乐', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: 'OP/ED/OST', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '音乐选集', routerLink: '#/channel/liveStreaming/completionAnimation'}],
            },
            {
              name: '舞蹈',
              icon: 'iconfont icon-fan color-pink',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '推荐', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '宅舞', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '三次元舞蹈', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '舞蹈教程', routerLink: '#/channel/liveStreaming/completionAnimation'},
              ],
            },
            {
              name: '游戏',
              icon: 'iconfont icon-youxi color-green',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '推荐', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '单机游戏', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '电子竞技', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '手机游戏', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '网络游戏', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '桌游棋牌', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: 'GMV', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '音游', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: 'Mugen', routerLink: '#/channel/liveStreaming/completionAnimation'}],
            },
            {
              name: '科技',
              icon: 'iconfont icon-ufo color-skyblue',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '推荐', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '趣味科普人文', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '野生技术协会', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '演讲•公开课', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '星海', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '数码', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '机械', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '汽车', routerLink: '#/channel/liveStreaming/completionAnimation'}],
            },
            {
              name: '生活',
              icon: 'iconfont icon-miao color-orange',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '推荐', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '搞笑', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '日常', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '美食圈', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '动物圈', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '手工', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '绘画', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '运动', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '其他', routerLink: '#/channel/liveStreaming/completionAnimation'}],
            },
            {
              name: '鬼畜',
              icon: 'iconfont icon-guixu color-pink',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '推荐', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '鬼畜调教', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '音MAD', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '人力VOCALOID', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '教程演示', routerLink: '#/channel/liveStreaming/completionAnimation'}],
            },
            {
              name: '时尚',
              icon: 'iconfont icon-shishang color-pink',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '推荐', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '美妆', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '服饰', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '健身', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '资讯', routerLink: '#/channel/liveStreaming/completionAnimation'}],
            },
            {
              name: '广告',
              icon: 'iconfont icon-guanggao color-skyblue',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '推荐', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '连载动画', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '完结动画', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '资讯', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '官方延伸', routerLink: '#/channel/liveStreaming/completionAnimation'}],
            },
            {
              name: '娱乐',
              icon: 'iconfont icon-yule color-orange',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '推荐', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '综艺', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '明星', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: 'Korea相关', routerLink: '#/channel/liveStreaming/completionAnimation'}],
            },
            {
              name: '影视',
              icon: 'iconfont icon-liebiaodaohang_yingshi color-skyblue',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '推荐', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '影视杂谈', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '影视剪辑', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '短片', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '预告·资讯', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '特摄', routerLink: '#/channel/liveStreaming/completionAnimation'}],
            },
            {
              name: '电影',
              icon: 'iconfont icon-dianying color-pink',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '推荐', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '华语电影', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '欧美电影', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '日本电影', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '其他国家', routerLink: '#/channel/liveStreaming/completionAnimation'}],
            },
            {
              name: '电视剧',
              icon: 'iconfont icon-dianshiju color-orange',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '推荐', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '国产剧', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '海外剧', routerLink: '#/channel/liveStreaming/completionAnimation'}],
            },
            {
              name: '小视频',
              icon: 'iconfont icon-shipin color-pink',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '画友', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '摄影', routerLink: '#/channel/liveStreaming/completionAnimation'},
              ],
            },
            {
              name: '相簿',
              icon: 'iconfont icon-book color-green',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '推荐', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '连载动画', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '完结动画', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '资讯', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '官方延伸', routerLink: '#/channel/liveStreaming/completionAnimation'}],
            },
            {
              name: '会员购',
              icon: 'iconfont icon-gouwudai color-pink',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '推荐', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '连载动画', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '完结动画', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '资讯', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '官方延伸', routerLink: '#/channel/liveStreaming/completionAnimation'}],
            },
            {
              name: '游戏中心',
              icon: 'iconfont icon-94 color-orange',
              routerLink: '#/channel/liveStreaming',
              channelItem: [
                {name: '推荐', routerLink: '#/channel/liveStreaming/recommend'},
                {name: '连载动画', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '完结动画', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '资讯', routerLink: '#/channel/liveStreaming/completionAnimation'},
                {name: '官方延伸', routerLink: '#/channel/liveStreaming/completionAnimation'}],
            }
          ],
        }
      },
      components: {
        homeHeader,
        xIndexBottom
      },
      methods: {
        toChannel(index) {
          this.$store.state.changeChannelName = this.channelSome[index].name;
          this.$store.state.changeChannelItem = this.channelSome[index].channelItem;
        },
        toChannelAll(index) {
          this.$store.state.changeChannelName = this.channelAll[index].name;
          this.$store.state.changeChannelItem = this.channelAll[index].channelItem;
        },
      },
      mounted() {
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
