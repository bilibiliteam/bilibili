<template>
    <div id="xIndexCommon" class="bg-fff">
        <div class="xIndexCommonHead">
          <h3 class="clearfix"><span class="fl"><i class="iconfont icon-smartphone"></i>综合</span><a href="" class="fr"><i class="iconfont icon-msnui-bar-chart"></i>排行榜</a></h3>
        </div>
        <div class="xIndexCommonBody clearfix">
          <a href="#/video" v-for="(item,index) of items" class="fl">
            <div class="xIndexCommonBodyItem">
              <div class="xIndexCommonBodyItemTop">
                <img :src="item.src" alt="">
                <div class="itemInformation">
                  <span class="fl"><i class="iconfont icon-goutongye_bofangjian_bofangyangshi"></i></span>
                  <span class="fr"><i class="iconfont icon-liuyan"></i></span>
                </div>
              </div>
              <div class="xIndexCommonBodyItemBottom">
                <p v-text="item.title"></p>
              </div>
            </div>
          </a>
        </div>
        <div class="xIndexCommonBottom">
          <p><a href="">查看更多 ></a></p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            items:[
              {
                src:"../../../static/imgs/tuijiancommon1.jpg",
                title:"【手绘ED/应援手书】魔卡少女樱透明牌篇【木之本樱/CLAMP】",
              },
              {
                src:"../../../static/imgs/tuijiancommon2.jpg",
                title:"【手绘OP】我的英雄学院+斩服少女!!",
              },
              {
                src:"../../../static/imgs/tuijiancommon3.jpg",
                title:"【崩坏3】魔族君王？吸血鬼？我德莉莎大魔王让你见识一下什么叫暴力萝莉！",
              },
              {
                src:"../../../static/imgs/tuijiancommon4.jpg",
                title:"【神威鬼鸣】学猫叫【翻唱】",
              },
            ]
          }
        }
    }
</script>

<style scoped lang="scss">
  #xIndexCommon{
    margin-top: 10px;
    padding:10px 20px;
    .xIndexCommonHead{
      margin-bottom:10px;
      h3{
        span{
          font-weight: normal;
          font-size:16px;
          i{
            color:cyan;
            font-size: 20px;
          }
        }

        a{
          color: orange;
          font-size: 16px;
          i{
            font-size: 20px;
            margin-right: 10px;
          }
        }
      }
    }

  .xIndexCommonBody{
  a{
    width: 50%;
    height: 25%;
    color: #333;
      .xIndexCommonBodyItem{
        margin:0 10px 10px 0;
      .xIndexCommonBodyItemTop{
        position:relative;
        font-size:0;
        margin-bottom:5px;
        height: 98px;
        img{
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
        .itemInformation{
          position:absolute;
          bottom:0;
          width: 100%;
          height: 20px;
          background: rgba(102,102,102,.6);
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          padding-left: 10px;
          padding-right: 10px;
          color:#fff;
          line-height: 20px;
        }
      }
      .xIndexCommonBodyItemBottom{
        font-size: 12px;
        p{
          height: 32px;
          overflow: hidden;
        }
      }
    }
  }

  }

  .xIndexCommonBottom{
    p{
      text-align: center;
      a{
        color:deeppink;
      }

    }
  }
  }

</style>