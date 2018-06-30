<template>
<div id="tabNav">
  <ul class="tabNav">
    <li v-for="(item,index) in tabNav" @click="clickNav(index)" :class="{active:idx===index}"><a :href="item.routerLink">{{item.name}}</a></li>
  </ul>
</div>
</template>

  <script>
    export default {
      data(){
        return {
          idx:0,
          tabNav:this.$store.state.changeChannelItem,
          channelItemInfo:[
            {
              name:'连载动画',
              rankItem:['默认排序','最新视频','播放最多','评论最多','弹幕最多','收藏最多'],
              animationItem:[
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
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
              name:'完结动画',
              rankItem:['默认排序','最新视频','播放最多','评论最多','弹幕最多','收藏最多'],
              animationItem:[
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
              ],
              searchKeyword:[
                '全部标签',
                'BILIBILI正版',
                '剧场版',
                'OVA•OAD',
                'TV动画',
                '童年',
                '经典',
                '1080P',
                '日本动画',
                'BDRIP',
                '合集',
                '720P',
                '搞笑',
                '动漫',
                '怀旧',
                '福山润',
                '治愈向',
                '花泽香菜',
                '机战',
                '神谷浩史',
                '热血',
                '机动战士高达',
                '樱井孝宏',
                '哆啦A梦',
                '童年回忆],']
            },
            {
              name:'资讯',
              rankItem:['默认排序','最新视频','播放最多','评论最多','弹幕最多','收藏最多'],
              animationItem:[
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
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
                'DARLING in the FRANX',]
            },
            {
              name:'官方延伸',
              rankItem:['默认排序','最新视频','播放最多','评论最多','弹幕最多','收藏最多'],
              animationItem:[
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
              ],
              searchKeyword:[
                '全部标签',
                'EVENT',
                'RADIO',
                'DRAMA',
                '声优',
                '生放送',
                '松冈祯丞',
                '声优广播',
                '神谷浩史',
                '小野大辅',
                '佐仓绫音',
                '福山润',
                '梶裕贵',
                '宫野真守',
                '茅野爱衣',
                '樱井孝宏',
                '三森铃子',
                '杉田智和',
                '铃村健一',
                '铃木达央',
                'LOVE LIVE!',
                '南条爱乃',
                '内田彩',
                '大西沙织',
                '生肉',
                '中村悠一],']
            },
            {
              rankItem:['默认排序','最新视频','播放最多','评论最多','弹幕最多','收藏最多'],
              animationItem:[
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
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
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
                  title:'【7月】千绪的通学路 PV2&CM【1080P】',
                  time:1,
                  upName:'bilimingming'
                },
                {
                  src:require('../../../static/imgs/bb0d544dc06c6c9baca7bd30f40106794bdc0d44.jpg'),
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
        }
      },
      methods:{
        clickNav(index){
          this.idx=index;
          this.$store.state.changeChannelSearchKeyword = this.channelItemInfo[index].searchKeyword;
          this.$store.state.changeChannelRankItem = this.channelItemInfo[index].rankItem;
          this.$store.state.changeChannelAnimationItem = this.channelItemInfo[index].animationItem;
        },
    }
    }
  </script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#tabNav{
  background: #fff;
  display: flex;
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding-left: 10px;
  padding-right: 10px;
}
#tabNav .tabNav{
  display: flex;
  width: 100%;
  height: 40px;
  font-size: 14px;
  justify-content: space-around;
  line-height: 40px;
}
#tabNav .tabNav li{
  display: flex;
  padding: 0 5px;
  font-size: 12px;
}
#tabNav .tabNav li a{
  color: #333;
}
#tabNav .tabNav li.active{
  color: #F15C8D;
  border-bottom: 2px solid #F15C8D;
}
#tabNav .tabNav li.active a{
  color: #F15C8D;
}

</style>
