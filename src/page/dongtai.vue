<template>
    <div class="page">
      <div class="dongtaiHeader">
        <dongtaiHeader class="dongtaiHeader"/>
      </div>
      <div class="dongtaiHeadercontent">
        <div class="img">
          <img src="../../static/imgs/dongtai.jpg">
        </div>
        <div class="news">
          <p>你还没有登录哦</p>
          <p>赶快登录打开新世界的大门</p>
        </div>
        <div class="btn">
          <button>登录</button>
        </div>
      </div>
      <div class="dongtaiHeaderfooter">
        <xIndexBottom class="indexFooter"></xIndexBottom>
      </div>
      
      
      
    </div>
</template>

<script>
import dongtaiHeader from '../components/dongtai/dongtaiHeader'
import xIndexBottom from '../components/xIndex/xIndexBottom'

export default {
    components: {
      dongtaiHeader,
      xIndexBottom
    }
}
</script>

<style scoped>
.page{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.dongtaiHeader{
  height: 60px;
}
.dongtaiHeadercontent{
  flex: 1;
  overflow-x: hidden;
  text-align: center;
}
.dongtaiHeadercontent .img{
  width: 100%;
  padding: 50px 50px 0 50px;
}
.dongtaiHeadercontent .img img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.dongtaiHeadercontent .news{
  margin: 40px 0;
}
.dongtaiHeadercontent .news p{
  font-size:14px ;
  color: #aaa;
}
.dongtaiHeadercontent .btn button{
  background-color: #F15C8D;
  color: #fff;
  width: 150px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
}
.dongtaiHeaderfooter{
  height: 50px;
}
</style>
