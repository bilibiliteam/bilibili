<template>
    <div class="home-header">
        <div class="my" @click="showSider">
            <i class="iconfont icon-caidan caidan"></i>
            <div class="head-portrait">
                <img src="../../static/imgs/noface.jpg" />
            </div>
        </div>
        <div class="search">
            <i class="iconfont icon-fangdajing"></i>
            <input type="text" />
        </div>
        <div class="game">
            <i class="iconfont icon-94"></i>
        </div>
        <div class="download">
            <i class="iconfont icon-xiazai"></i>
        </div>
        <div class="message">
            <i class="iconfont icon-liuyan"></i>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        methods: {
            showSider(){
                this.$store.state.left = 0;
            }
        }
    }
</script>

<style scoped>
    .home-header{
        display: flex;
        height: 60px;
        justify-content: space-between;
        padding-top: 20px;
        background: #f15c8d;
    }
    .home-header .my{
        color: #fff;
    }
    .home-header .my .caidan{
        position: absolute;
        left: -8px;
        line-height: 24px;
    }
    .home-header .my .head-portrait{
        position: absolute;
        left: 15px;
        overflow: hidden;
    }
    .home-header .my .head-portrait img{
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 1px solid #fff;
    }
    .home-header .search{
        width: 40%;
        height: 30px;
        border-radius: 20px;
        background: rgba(130,130,130,0.3);
    }
    .home-header .search .icon-fangdajing{
        color: #ddd;
        margin: 0 5px;
    }
    .home-header .search input{
        width: 70%;
        height: 100%;
        background: rgba(200,200,200,0);
        color: #ddd;
    }
    .my,.game,.download,.message{
        color: #fff;
        width: 10%;
        padding-top: 4px;
        position: relative;
    }
    .game .icon-94{
        font-size: 26px;
        position: absolute;
        top: -2px;
    }
    .download .icon-xiazai{
        font-size: 22px;
        position: absolute;
        top: 2px;
    }
    .message .icon-liuyan{
        font-size: 26px;
        position: absolute;
        top: 0;
    }
</style>