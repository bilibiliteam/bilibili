<template>
  <div id="content">
    <div class="item" v-for="item in main">
      <div class="content-img">
        <img :src="item.imgUrl">
        <div class="tanmu"></div>
      </div>
      <div class="content-new">
        <div class="content1"><span>[预售]</span>{{item.name}}</div>
        <div class="content2"><span class="span">￥{{item.price}}<i class="iconfont icon-29_rexiao"></i></span><span class="num">{{item.people}}想要</span></div>
      </div>
    </div>
    
  </div>
    
</template>

<script>
    export default {
      data(){
        return {
          idx:0,
          tanmu:["墩子就好了！！o(∩_∩)o","刚刚有看到这个，好像要~~~","好像要！！没钱买。。","可爱的不要不要的~~","七海的话就考虑下","我再等等好了","吃吐了要吃土了","啊啊啊啊啊啊啊啊啊啊啊啊","啊你妹啊啊"],
          main:[{
            imgUrl:"../../../static/imgs/vipContent.jpg",
            name:"【九周年首发】哔哩哔哩 2233陶瓷马克杯 周边",
            price:"59.00",
            people:486
          },{
            imgUrl:"../../../static/imgs/vipContent1.jpg",
            name:"【九周年首发】哔哩哔哩 5354音乐演唱会 全球",
            price:"199.00",
            people:886
          }]
        }
        
      },
      mounted(){
        setInterval(function(){
          var p = document.createElement("p");
          
        },2000)
        setInterval(function(){
          
        },6000)
      }
    }
</script>

<style scoped>
  #content .item{
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
  }
  #content .item .content-img{
    width: 100%;
    border-radius: 10px;
  }
  #content .item .content-img .tanmu{

  }
  #content .item .content-img img{
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }
  #content .item .content-new>div{
    margin-top: 5px;
  }
  #content .item .content-new{
    font-size: 14px;
  }
  #content .item .content-new .content1 span,#content .item .content-new .content2 .span{
    color: #F15C8D;
  }
  #content .item .content-new .content2{
    display: flex;
    justify-content: space-between;
  }
  #content .item .content-new .content2 .span{
    position: relative;
  }
  #content .item .content-new .content2 .span i{
    font-size: 25px;
    position: absolute;
    top: -5px;right: -30px;
  }
  #content .item .content-new .content2 .num{
    font-size: 12px;
    color: #bbb;
  }
</style>
