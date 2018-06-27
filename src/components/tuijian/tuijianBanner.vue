<template>
<div class="swiper-container" id="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,idx) in imgUrl" :key="idx">
          <a>
              <img :src="item" alt="">
          </a>
      </div>
    </div>
      <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
</div>
</template>
    
<script>
    import Swiper from 'swiper'
    export default {
        data () {
            return {
                imgUrl: [
                    "../../static/imgs/tuijianbanner1.jpg",
                    "../../static/imgs/tuijianbanner2.jpg",
                    "../../static/imgs/tuijianbanner3.jpg",
                    "../../static/imgs/tuijianbanner4.jpg",
                    "../../static/imgs/tuijianbanner5.jpg"
                ]
            }
        },
        mounted() {
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
                },
                loop: true,
                pagination: {
                    el: '.swiper-pagination'
                },
                effect: 'fade'
            })
        }
    }
        
</script>
    
<style>
    .swiper-container{
        /* margin-top: 50px; */
        width: 100%;
        height: 140px;
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