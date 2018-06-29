<template>
    <div class="common-top">
        <img class="common-top-t" :src="topImgSrc" alt="" />
        <div class="common-top-b">
            <img :src="topbImgSrc" alt="" />
            <p class="title">{{title}}</p>
            <p class="jianjie">{{jianjie}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                topImgSrc: '../../static/imgs/home-page4-top1.jpg',
                topbImgSrc: '../../static/imgs/home-page4-top2.jpg',
                title: '海选赛投票进行中',
                jianjie: '6月25日~7月1日'
            }
        }
    }
</script>

<style scoped lang="scss">
    .common-top{
        .common-top-t{
            width: 100%;
            margin-bottom: -30px;
        }
        .common-top-b{
            margin: 0 2%;
            border-radius: 10px;
            background: #fff;
            box-shadow: 0px 1px 0 0px #ccc;
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