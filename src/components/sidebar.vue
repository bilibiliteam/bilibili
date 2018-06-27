<template>
    <div class="siderbar" :style="{left:siderLeft}">
        <div class="leftCon">
            <div class="top">
                <img class="headPic" src="../../static/imgs/noface.jpg" alt="" />
                <div class="t-r-icon1 r-icon">
                    <i class="iconfont icon-saoyisao"></i>
                </div>
                <div class="t-r-icon2 r-icon">
                    <i class="iconfont icon-928caidan_piaowu"></i>
                </div>
            </div>
            <div class="siderbar-nav">
                <div class="tabList">
                    <p class="dt-num">0</p>
                    <p>动态</p>
                </div>
                <div class="tabList">
                    <p class="gz-num">50</p>
                    <p>关注</p>
                </div><div class="tabList">
                    <p class="fens-num">0</p>
                    <p>粉丝</p>
                </div>
            </div>
            <div class="list">
                <div class="lists1 lists0">
                    <div class="li" v-for="(item,idx) in lists1" :class="{active:idx===curLi}">
                        <div class="icon-box">
                            <i class="iconfont" :class="item.icon"></i>
                        </div>
                        <div class="liName">{{item.name}}</div>
                    </div>
                </div>
                <div class="lists2 lists0">
                    <div class="li" v-for="(item,idx) in lists2">
                        <div class="icon-box">
                            <i class="iconfont" :class="item.icon"></i>
                        </div>
                        <div class="liName">{{item.name}}</div>
                    </div>
                </div>
                <div class="lists3 lists0">
                    <div class="li" v-for="item in lists3">
                        <div class="icon-box">
                            <i class="iconfont" :class="item.icon"></i>
                        </div>
                        <div class="liName">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="btmList">
                    <div class="btm-icon">
                        <i class="iconfont icon-shezhi"></i>
                    </div>
                    <p>设置</p>
                </div>
                <div class="btmList">
                    <div class="btm-icon">
                        <i class="iconfont icon-zhuti"></i>
                    </div>
                    <p>主题</p>
                </div>
                <div class="btmList">
                    <div class="btm-icon">
                        <i class="iconfont icon-yejianmoshi"></i>
                    </div>
                    <p>夜间</p>
                </div>
            </div>
        </div>
        <div class="right" @click="hideSider">
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                lists1:[
                    {
                        icon: 'icon-shouye',
                        name: '首页'
                    },
                    {
                        icon: 'icon-shijianzhongbiao2',
                        name: '历史记录'
                    },
                    {
                        icon: 'icon-ai33',
                        name: '离线缓存'
                    },
                    {
                        icon: 'icon-xingxing_selected',
                        name: '我的收藏'
                    },
                    {
                        icon: 'icon-wodeguanzhu',
                        name: '我的关注'
                    },
                    {
                        icon: 'icon-boshiweb_bofangliang',
                        name: '稍后再看'
                    },
                ],
                lists2:[
                    {
                        icon: 'icon-ufo',
                        name: '创作中心'
                    },
                    {
                        icon: 'icon-CN_bilibili',
                        name: '投稿'
                    }
                ],
                lists3:[
                    {
                        icon: 'icon-dianshiguiyiguixieguianzhuang',
                        name: '直播中心'
                    },
                    {
                        icon: 'icon-wodedahuiyuan',
                        name: '我的大会员'
                    },
                    {
                        icon: 'icon-mianliuliangfuwu',
                        name: '免流量服务'
                    },
                    {
                        icon: 'icon-gouwudai',
                        name: '会员购中心'
                    },
                    {
                        icon: 'icon-54',
                        name: '联系客服'
                    }
                ],
                curLi: 0
            }
        },
        methods: {
            hideSider(){
                this.$store.state.left = '-100%';
            }
        },
        computed: {
            siderLeft(){
                return this.$store.state.left;
            }
        },
    }
</script>
<style scoped>
    .siderbar{
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        z-index: 6666;
        transition: left 0.2s linear;
        font-size: 12px;
    }
    .siderbar .leftCon{
        width: 80%;
        height: 100%;
        background: #fff;
        display: flex;
        flex-direction: column;
    }
    .siderbar .leftCon .top{
        height: 20%;
        background: #fb7299;
        padding-top: 4%;
    }
    .siderbar .leftCon .top .headPic{
        width: 65px;
        height: 65px;
        border-radius: 50%;
        margin-left: 20px;
        border: 2px solid #fff;
    }
    .siderbar .leftCon .top .r-icon{
        float: right;
        width: 36px;
        height: 36px;
        border: 2px solid #fff;
        border-radius: 50%;
        margin-right: 5%;
        color: #fff;
        position: relative;
    }
    .siderbar .leftCon .top .r-icon .iconfont{
        font-size: 24px;
        line-height: 32px;
        position: absolute;
        left:4px;
    }
    .siderbar .leftCon .siderbar-nav{
        height: 8%;
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #aaa;
        color: #333;
    }
    .siderbar .leftCon .siderbar-nav .tabList{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .siderbar .leftCon .list{
        flex: 1; 
        overflow-x: hidden;
    }
    .siderbar .leftCon .list .lists0{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-bottom: 1px solid #ccc;
    }
    .siderbar .leftCon .list .lists0 .active{
        color: #fb7299;
    }
    .siderbar .leftCon .list .lists1{
        height: 300px;
    }
    .siderbar .leftCon .list .lists2{
        height: 100px;
    }
    .siderbar .leftCon .list .lists3{
        height: 250px;
        border-bottom: none;
    }
    .siderbar .leftCon .list .lists0 .li{
        height: 14%;
        display: flex;
        align-items: center;
    }
    .siderbar .leftCon .list .lists0 .li .iconfont{
        font-size: 22px;
    }
    .siderbar .leftCon .list .lists0 .li .icon-box{
        width: 16%;
        text-align: center;
    }
    .siderbar .leftCon .list .lists2 .li{
        height: 40%;
    }







    .siderbar .leftCon .bottom{
        height: 7%;
        display: flex;
        justify-content: space-around;
        border-top: 1px solid #aaa;
        color: #333;
        line-height: 24px;
    }
    .siderbar .leftCon .bottom .btmList{
        width: 20%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .siderbar .leftCon .bottom .btmList .btm-icon{
        width: 28px;
        height: 28px;
        border: 1px solid #000;
        border-radius: 50%;
        text-align: center;
    }
    .siderbar .leftCon .bottom .btmList .iconfont{
        font-size: 18px;
    }


    .siderbar .right{
        width: 20%;
        background: rgba(0,0,0,0.3);
    }
</style>
