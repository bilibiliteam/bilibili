<template>
<div id="tabNav">
  <ul class="tabNav">
    <li v-for="(item,index) in tabNav" @click="clickNav(index)" :class="{active:curIdx===index}"><a :href="item.href">{{item.name}}</a></li>
  </ul>
</div>

</template>

<script>
export default {
  data(){
    return {
      idx:0,
      tabNav:[{name:"直播",href:'#/zhibo'},{name:"推荐",href:'#/tuijian'},{name:"追番",href:'#/zhuifan'},{name:"萌战",href:'#/homePage4'},{name:"干杯！世界杯",href:'#/shijiebei'}],
    }
  },
  computed: {
    curIdx(){
      return this.$store.state.tabNavLight;
    }
  },
  methods:{
    clickNav(index){
      this.$store.state.tabNavLight = index;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
