<template>
    <div id="xIndexBottom" class="bg-fff">
      <a v-for="(item,index) of xIndexBottomItem"  :href="item.routerLink" @click="changeIndex(index)" :class="{active:computedIndex===index}"><i :class="item.icon"></i><span v-text="item.name"></span></a>
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
              this.$store.state.currentIndex = index;
              console.log(this.$store.state.currentIndex)
            }
        },
        computed:{
          computedIndex(){
            return this.$store.state.currentIndex;
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
  a{
    flex:1;
    display: flex;
    flex-direction: column;
    text-align: center;
    color:#999;
    span{
          font-size: 12px;
      color:#999;

    }
    i{
      font-size: 20px;

    }
  }
}
</style>
