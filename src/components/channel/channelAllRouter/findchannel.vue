<template>
  <div class="findChannel">
    <h3>
      <span>发现频道</span>
      <a href="" class="fr">更多></a>
    </h3>
    <ul class="clearfix">
      <li v-for="(item,index) of findChannel" class="fl">
        <img :src="item.src" alt="">
        <h3 v-text="item.h3"></h3>
        <p v-text="item.howmany"></p>
        <button>订阅</button>
      </li>
    </ul>
  </div>

</template>

<script>
    export default {
        data(){
          return {
            findChannel: [
              {
                src: require('../../../../static/imgs/7ec11ac897901cb826f34358a883416734fd5d33.jpg'),
                h3: '绝地求生',
                howmany: '33333万人已订阅'
              },
              {
                src: require('../../../../static/imgs/7ec11ac897901cb826f34358a883416734fd5d33.jpg'),
                h3: '绝地求生',
                howmany: '33333万人已订阅'
              },
              {
                src: require('../../../../static/imgs/7ec11ac897901cb826f34358a883416734fd5d33.jpg'),
                h3: '绝地求生',
                howmany: '33333万人已订阅'
              },
            ],

          }
        }
    }
</script>

<style scoped lang="scss">
  h3{
    margin-bottom:10px;
  span{
    font-weight: bold;
    font-size: 14px;
  }
  a{
    color:#999;
    font-size: 12px;
  }
  }
  .findChannel{
    padding:10px 20px;
    border-bottom:1px solid #eee;
  ul li{
    width: 30%;
    text-align: center;
    border-radius: 3px;
    border:1px solid #eee;
    padding:10px;
    margin-right:10px;
  img{
    width: 100%;
    margin-bottom:5px;
  }
  h3{
    font-weight: normal;
    font-size: 14px;
    margin-bottom:5px;
  }
  p{
    font-size: 12px;
    color:#999;
    margin-bottom:5px;
  }
  button{
    border:1px solid deeppink;
    background: #fff;
    color:deeppink;
    font-size: 12px;
    padding:3px 20px;
    border-radius: 3px;
    margin-bottom:5px;

  }
  }
  }
</style>
