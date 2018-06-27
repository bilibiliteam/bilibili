<template>
    <div id="xIndexBottom" class="bg-fff">
      <span v-for="(item,index) of xIndexBottomItem"  @click="changeIndex(index)" :class="{active:whoIdx===index}"><i :class="item.icon"></i><a :href="item.routerLink" v-text="item.name" :class="{active:whoIdx===index}"></a></span>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            xIndexBottomItem:[
              {
                name:'首页',
                routerLink:'#/',
                icon:'iconfont icon-shouye'
              },
              {
                name:'频道',
                routerLink:'#/channel',
                icon:'iconfont icon-changyongfenlei'
              },
              {
                name:'动态',
                routerLink:'#/dongtai',
                icon:'iconfont icon-dongtaiweixuanzhong'
              },
              {
                name:'会员购',
                routerLink:'#/vipshopping',
                icon:'iconfont icon-gouwudai'
              },
            ],
            currentIndex:1
          }

        },
        methods:{
            changeIndex(index){
              this.$store.state.idxLight = index;
            }
        },
        computed:{
          whoIdx(){
            return this.$store.state.idxLight;
          }
        }
    }
</script>

<style scoped lang="scss">
#xIndexBottom{
  .active{
    color:#F15C8D;
  }
  width:100%;
  align-items: center;
  display:flex;
  height:50px;
  bottom:0;
  left:0;
  width:100%;
border-top:1px solid #eee;
  span{
    flex:1;
    display: flex;
    flex-direction: column;
    text-align: center;
    color:#999;
    a{
          font-size: 12px;
      color:#999;

    }
    i{
      font-size: 20px;

    }
  }
}
</style>
