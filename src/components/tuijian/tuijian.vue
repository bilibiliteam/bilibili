<template>
    <div>
        <homeBanner v-bind:bannerPic="imgUrl" />
        <tuijianCommon />
    </div>
</template>
<script>
    import homeBanner from '../homeBanner'
    import tuijianCommon from './tuijianCommon'

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
        components: {
            homeBanner,
            tuijianCommon
        },
    }
</script>
<style></style>