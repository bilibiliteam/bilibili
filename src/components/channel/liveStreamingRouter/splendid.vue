<template>
  <div class="splendid">
    <div v-for="(item,index) of splendidItem">
      <h3><span class="fl"><i class="iconfont icon-fan color-pink"></i><a href="" v-text="item.title"></a></span> <span class="fr"><a> {{item.titleRightName}}></a></span></h3>
      <div class="splendidBottom">
        <img :src="item.src" alt="">
        <p v-text="item.name" class="itemName"></p>
        <p v-text="item.des" class="itemDes"></p>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        data(){
          return {
            splendidItem:[
              {
                title:'精彩推荐',
                titleRightName:'更多',
                src:require('../../../../static/imgs/7ec11ac897901cb826f34358a883416734fd5d33.jpg'),
                name:'一家之主',
                des:'荒诞中的真实'
              },
              {
                title:'资讯档',
                titleRightName:'更多',
                src:require('../../../../static/imgs/7ec11ac897901cb826f34358a883416734fd5d33.jpg'),
                name:'【资讯档】2018年第25周',
                des:'荒诞中的真实'
              },
              {
                title:'周末剧场',
                titleRightName:'更多',
                src:require('../../../../static/imgs/7ec11ac897901cb826f34358a883416734fd5d33.jpg'),
                name:'【周末剧场】魔法禁忌目录',
                des:'荒诞中的真实'
              },
              {
                title:'泡面档',
                titleRightName:'更多',
                src:require('../../../../static/imgs/7ec11ac897901cb826f34358a883416734fd5d33.jpg'),
                name:'【泡面档】任性HighSpec',
                des:'我 任性！'
              },
            ]
          }
        }
    }
</script>

<style scoped>
  .splendid{
    width: 100%;
    background: #fff;
    padding:0 20px;
    margin-top: 10px;
  }
  .splendid h3{
    height: 40px;
    line-height: 40px;
  }
  .splendid h3 i{
    font-size: 20px;
    margin-right: 5px;
  }
  .splendid h3 span:first-of-type a{
    color:#000;
    font-size: 12px;
  }
  .splendid h3 span:last-of-type a{
    color:#F15C8D;
    font-size: 12px;
  }
  .splendid .splendidBottom{
    width: 100%;
  }
  .splendid .splendidBottom img{
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    border-radius: 10px;

  }
  .splendid .splendidBottom .itemDes{
    color:#999;
    font-size: 12px;
    line-height: 30px;
  }
  .splendid .splendidBottom .itemName{
    font-size: 14px;
    line-height: 20px;

  }
</style>
