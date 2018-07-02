<template>
    <div class="common-top">
        <div class="common-top-b">
            <div class="swiper-container" id="swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(img,idx) in imgSrc.topbImgSrc" :key="idx">
                      <a>
                          <img :src="img" alt="">
                      </a>
                  </div>
                </div>
                  <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
            <p class="title">{{imgSrc.title}}</p>
            <p class="jianjie">{{imgSrc.jianjie}}</p>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'

    export default {
        data () {
            return {
                
            }
        },
        props: ['imgSrc'],
        mounted() {
            setTimeout(function () {
              var swiperObj =  new Swiper('#swiper', {
                  loop: true,
                  pagination: {
                    el: '.swiper-pagination'
                  },
                  autoplay: true,
              })
            }, 1000)
        }
    }
</script>

<style scoped lang="scss">
    .common-top{
        margin-bottom: 15px;
        .common-top-b{
            margin: 0 2%;
            border-radius: 10px;
            background: #fff;
            box-shadow: 0px 1px 1px 0px #ccc;
            img{
                width: 100%;
                border-radius: 5px;
            }
            p{
                padding-left: 8px;
                line-height: 28px;
            }
            .jianjie{
                color: #888;
                padding-bottom: 5px;
            }
        }
    }
</style>