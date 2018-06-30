<template>
    <div class="littleFenLei">
      <span v-for="(item,index) of littleFenleiItem"><i :class="item.icon"></i><a v-text="item.name"></a></span>
      <!--<span><i class="iconfont icon-smartphone color-skyblue"></i></span>-->
      <!--<span><i class="iconfont icon-yule color-pink"></i></span>-->
      <!--<span><i class="iconfont icon-shangpin- color-yellow"></i></span>-->
    </div>
</template>

<script>
    export default {
        data(){
          return{
            littleFenleiItem:[
              {
                name:'游戏',
                icon:'iconfont icon-94 color-orange',
              },
              {
                name:'手游',
                icon:'iconfont icon-smartphone color-skyblue',
              }
              ,
              {
                name:'娱乐',
                icon:'iconfont icon-yule color-pink',
              },
              {
                name:'常用',
                icon:'iconfont icon-shangpin- color-yellow',
              }
            ]
          }

        }
    }
</script>

<style scoped>
  .littleFenLei{
    display: flex;
    padding:10px 20px;
  }
  .littleFenLei span{
    flex:1;
    text-align: center;
    display:flex;
    flex-direction: column;
  }
  .littleFenLei span i{
    font-size: 30px;
    margin-bottom: 5px;
  }
  .littleFenLei span a{
    font-size: 12px;
  }
</style>
