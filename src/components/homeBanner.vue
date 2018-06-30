<template>
<div class="swiper-container" id="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(img,idx) in imgUrl" :key="idx">
          <a>
              <img :src="img" alt="">
          </a>
      </div>
    </div>
      <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
</div>
</template>

<script>
  import '../../static/css/swiper.min.css'
  import Swiper from 'swiper'
  export default {
    data () {
      return {
        imgUrl: [
          "../../static/imgs/homeBanner1.jpg",
          "../../static/imgs/homeBanner2.jpg",
          "../../static/imgs/homeBanner3.jpg",
          "../../static/imgs/homeBanner4.jpg",
          "../../static/imgs/homeBanner5.jpg"
        ]
      }
    },
    mounted() {
      setTimeout(function () {
          var swiperObj =  new Swiper('#swiper', {
              loop: true,
              pagination: {
                el: '.swiper-pagination'
              },
              autoplay: 4000,
          })
      }, 1000)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .swiper-container{
        /* margin-top: 50px; */
        width: 100%;
        height: 150px;
        background: #cccccc;
    }
    .swiper-slide{
        width: 100%;
        height: 100%;
    }
    .swiper-slide img{
        width: 100%;
        height: 100%;
    }
</style>
