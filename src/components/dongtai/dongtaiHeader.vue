<template>
    <div class="vip-header">
        <div class="vip-header-left">
            <i class="iconfont icon-caidan caidan"></i>
            <div class="head-portrait">
                <img src="../../../static/imgs/noface.jpg" />
            </div>
        </div>
        <div class="vip-header-center">
            动态
        </div>
        <div class="vip-header-right">
            <span>
                <i class="iconfont icon-xiewrite18"></i>
            </span>
        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return {
                
            }
        }
    }
</script>

<style scoped>
    .vip-header{
        display: flex;
        height: 60px;
        justify-content: space-between;
        padding-top: 20px;
        background: #f15c8d;
    }
    .vip-header>div{
        width: 100px;
    }
    .vip-header .vip-header-left{
        color: #fff;
    }
    .vip-header-center{
        width: 100%;
        text-align: center;
    }
    .vip-header .vip-header-left .caidan{
        position: absolute;
        left: -8px;
        line-height: 24px;
    }
    .vip-header .vip-header-left .head-portrait{
        position: absolute;
        left: 15px;
        overflow: hidden;
    }
    .vip-header .vip-header-left .head-portrait img{
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 1px solid #fff;
    }

    .vip-header-left,.vip-header-center,.vip-header-right{
        color: #fff;
        width: 10%;
        padding-top: 4px;
        position: relative;
    }
    .vip-header-right span{
        margin-left: 60px ;
    }
    .vip-header-right span i{
        font-size: 22px;
    }

</style>