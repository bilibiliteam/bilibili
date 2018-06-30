<template>
<div class="completionAnimation">
  <div class="searchKeyword" :class="{showKeyword:isShowKeyword}">
    <span v-for="(item,index) of ChannelSearchKeywordMethod">{{item}}</span><span class="down" @click="downKeyword">﹀</span>
  </div>
  <div class="allAnimation">
    <h3 class="clearfix"><span class="fl">综合动态</span><span class="fr" @click="showRank">最新</span></h3>
    <div class="rank" :class="{rankShow:isShowRankItem}">
      <span v-for="(item,index) of channelRankItemMethod">{{item}}</span>
    </div>
    <div class="animationItem" v-for="(item,index) of channelAnimationItemMethod">
      <div class="item clearfix">
        <div class="left fl"><img :src="item.src" alt=""></div>
        <div class="right fl"><div class="rightTop"><h4 v-text="item.title"></h4></div><div class="rightBottom"><p v-text="item.upName"></p><p v-text="item.time"></p></div></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        data(){
          return {
            channelItemInfo:[
              {
                rankItem:['默认排序','最新视频','播放最多','评论最多','弹幕最多','收藏最多'],
                animationItem:[
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                ],
                searchKeyword:[
                  'PV',
                  'CM',
                  '新番介绍',
                  '预告片',
                  '日本动画',
                  '剧场版',
                  '预告',
                  '新番',
                  'F宅字幕组',
                  'Fate',
                  'TV动画',
                  '1080P',
                  '4月',
                  '下集预告',
                  '热血',
                  '2018',
                  '1月',
                  '名侦探柯南',
                  '精灵宝可梦',
                  '自由之翼',
                  'Fate/stay night',
                  'DARLING in the FRANX'],
              },
              {
                rankItem:['默认排序','最新视频','播放最多','评论最多','弹幕最多','收藏最多'],
                animationItem:[
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                ],
                searchKeyword:[
                  'PV',
                  'CM',
                  '新番介绍',
                  '预告片',
                  '日本动画',
                  '剧场版',
                  '预告',
                  '新番',
                  'F宅字幕组',
                  'Fate',
                  'TV动画',
                  '1080P',
                  '4月',
                  '下集预告',
                  '热血',
                  '2018',
                  '1月',
                  '名侦探柯南',
                  '精灵宝可梦',
                  '自由之翼',
                  'Fate/stay night',
                  'DARLING in the FRANX'],
              },
              {
                rankItem:['默认排序','最新视频','播放最多','评论最多','弹幕最多','收藏最多'],
                animationItem:[
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                ],
                searchKeyword:[
                  'PV',
                  'CM',
                  '新番介绍',
                  '预告片',
                  '日本动画',
                  '剧场版',
                  '预告',
                  '新番',
                  'F宅字幕组',
                  'Fate',
                  'TV动画',
                  '1080P',
                  '4月',
                  '下集预告',
                  '热血',
                  '2018',
                  '1月',
                  '名侦探柯南',
                  '精灵宝可梦',
                  '自由之翼',
                  'Fate/stay night',
                  'DARLING in the FRANX'],
              },
              {
                rankItem:['默认排序','最新视频','播放最多','评论最多','弹幕最多','收藏最多'],
                animationItem:[
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                ],
                searchKeyword:[
                  'PV',
                  'CM',
                  '新番介绍',
                  '预告片',
                  '日本动画',
                  '剧场版',
                  '预告',
                  '新番',
                  'F宅字幕组',
                  'Fate',
                  'TV动画',
                  '1080P',
                  '4月',
                  '下集预告',
                  '热血',
                  '2018',
                  '1月',
                  '名侦探柯南',
                  '精灵宝可梦',
                  '自由之翼',
                  'Fate/stay night',
                  'DARLING in the FRANX'],
              },
              {
                rankItem:['默认排序','最新视频','播放最多','评论最多','弹幕最多','收藏最多'],
                animationItem:[
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                ],
                searchKeyword:[
                  'PV',
                  'CM',
                  '新番介绍',
                  '预告片',
                  '日本动画',
                  '剧场版',
                  '预告',
                  '新番',
                  'F宅字幕组',
                  'Fate',
                  'TV动画',
                  '1080P',
                  '4月',
                  '下集预告',
                  '热血',
                  '2018',
                  '1月',
                  '名侦探柯南',
                  '精灵宝可梦',
                  '自由之翼',
                  'Fate/stay night',
                  'DARLING in the FRANX'],
              },
              {
                rankItem:['默认排序','最新视频','播放最多','评论最多','弹幕最多','收藏最多'],
                animationItem:[
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                  {
                    src:require('../../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                    title:'【7月】千绪的通学路 PV2&CM【1080P】',
                    time:1,
                    upName:'bilimingming'
                  },
                ],
                searchKeyword:[
                  'PV',
                  'CM',
                  '新番介绍',
                  '预告片',
                  '日本动画',
                  '剧场版',
                  '预告',
                  '新番',
                  'F宅字幕组',
                  'Fate',
                  'TV动画',
                  '1080P',
                  '4月',
                  '下集预告',
                  '热血',
                  '2018',
                  '1月',
                  '名侦探柯南',
                  '精灵宝可梦',
                  '自由之翼',
                  'Fate/stay night',
                  'DARLING in the FRANX'],
              },
            ],
            isShowKeyword:false,
            isShowRankItem:false,
            // ChannelSearchKeyword:[],
            // channelAnimationItem:[],
            // channelRankItem:[],

          }
        },
      computed:{
        ChannelSearchKeywordMethod(){
          console.log(this.$store.state.changeChannelSearchKeyword)
          return  this.$store.state.changeChannelSearchKeyword;

        },
        channelAnimationItemMethod(){
          console.log(this.$store.state.changeChannelAnimationItem)
          return this.$store.state.changeChannelAnimationItem;
        },
        channelRankItemMethod(){
          console.log(this.$store.state.changeChannelRankItem)
          return  this.$store.state.changeChannelRankItem;
        }
      },
      methods:{
        downKeyword(){
          this.isShowKeyword = !this.isShowKeyword;
        },
        showRank(){
          this.isShowRankItem = !this.isShowRankItem;
        }
      }
    }
</script>

<style scoped lang="scss">
  .completionAnimation{
    position: relative;
    background:#eee;
    .allAnimation{
      position:relative;
    .animationItem{
      width: 100%;
      padding:10px;
      height:110px;
      .item{
        width: 100%;
        height:100%;
        font-size:0;
        .left{
          width: 40%;
        height:100%;
          img{
            width: 100%;
            vertical-align: middle;
          }
        }
        .right{
          width: 60%;
          height:100%;
          padding:0 10px;
          position:relative;
          h4{
            padding:0;
            font-size: 12px;
          }
          .rightBottom{
            position:absolute;
            bottom:0;
            color:#666;
            p{
              font-size: 12px;
            }
          }

        }
      }
    }
      h3{
        padding:0 10px;
        line-height: 30px;
        font-size: 12px;
        border-bottom:1px solid #e9e9e9;
        span:last-of-type{
          color:#999;
          }
        }
      .rank{
        padding:10px 40px;
        display:none;
        position:absolute;
        font-size: 12px;
        background: #eee;
        z-index:1;
        span{
          margin-right: 25px;
          line-height: 20px;
        }
      }
      .rankShow{
        display:block;
      }
      }
    .searchKeyword{
      overflow:hidden;
      height:45px;
      background:#eee;
      padding:10px;
      border-bottom:1px solid #e9e9e9;
      .down{
        position:absolute;
        top: 10px;
        right:0;
        background: #eee;
        border-radius: unset;
        margin:0;
      }
      span{
        background: #fff;
        display: inline-block;
        padding:0 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        border-radius: 10px;
        font-size: 14px;
        height: 24px;
        line-height: 24px;
      }
    }
  .showKeyword{
    position:absolute;
    overflow:visible;
    height:auto;
    z-index:1;
  }
  }

</style>
