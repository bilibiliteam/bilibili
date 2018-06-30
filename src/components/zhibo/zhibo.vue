<template>
    <div>
        <homeBanner v-bind:bannerPic="imgUrl" />
        <xIndexCommon />
    </div>
</template>
<script>
    import xIndexCommon from '../xIndex/xIndexCommon'
    import homeBanner from '../homeBanner'

    export default {
        components: {
            homeBanner,
            xIndexCommon
        },
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
        }
    }
</script>
<style></style>