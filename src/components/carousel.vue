<template>
                <mu-carousel interval="1000" hide-controls="true">
              <mu-carousel-item>
                <img :src="carouselImg1">
              </mu-carousel-item>
              <mu-carousel-item>
                <img :src="carouselImg2">
              </mu-carousel-item>
              <mu-carousel-item>
                <img :src="carouselImg3">
              </mu-carousel-item>
           
            </mu-carousel>
</template>
<script>
import carouselImg1 from '../../static/imgs/01.png';
import carouselImg2 from '../../static/imgs/02.png';
import carouselImg3 from '../../static/imgs/03.png';


export default {
  data () {
    return {
      carouselImg1,
      carouselImg2,
      carouselImg3
   
    }
  },

};
</script>