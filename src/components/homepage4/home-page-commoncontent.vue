<template>
    <div class="page-content">
        <div class="con-top">
            <p class="top-left">{{topLeft}}</p>
            <p class="top-right">{{topRight}}</p>
        </div>
        <div class="content-lists">
            <div class="content-list" v-for="item in listsData">
                <div class="list-top">
                    <img :src="item.listSrc" alt="" />
                    <div class="bottom-msg">
                        <p class="left1"><i class="iconfont icon-liebiaodaohang_yingshi"></i> {{item.listBL1}}</p>
                        <p class="left2"><i class="iconfont icon-liuyan"></i> {{item.listBL2}}</p>
                        <p class="right">{{item.listBR}}</p>
                    </div>
                </div>
                <p class="list-title">{{item.listTitle}}</p>
                <div class="list-sort">{{item.listSort}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                topLeft: '国产场应援2018',
                topRight: '查看更多',
                listsData:[
                    {
                        listSrc: '../../static/imgs/home-page4-content1.png',
                        listBL1: 2857,
                        listBL2: 54,
                        listBR: '03:01',
                        listTitle: '【金光布袋戏】长生诀（神蛊温皇/任飘渺）',
                        listSort: '布袋戏'
                    },
                    {
                        listSrc: '../../static/imgs/home-page4-content2.png',
                        listBL1: 2857,
                        listBL2: 54,
                        listBR: '03:01',
                        listTitle: '国漫崛起！来看看《昨日青空》作者口袋巧克力背后鲜为人知的创作历程～',
                        listSort: '布袋戏'
                    },
                    {
                        listSrc: '../../static/imgs/home-page4-content3.png',
                        listBL1: 2857,
                        listBL2: 54,
                        listBR: '03:01',
                        listTitle: '【刺客伍六七】【B萌应援】【高燃】 我今天就要带她走 我看谁敢拦我！',
                        listSort: '布袋戏'
                    },
                    {
                        listSrc: '../../static/imgs/home-page4-content4.png',
                        listBL1: 2857,
                        listBL2: 54,
                        listBR: '03:01',
                        listTitle: '【天行九歌/流沙】台词向角色宣传',
                        listSort: '布袋戏'
                    },
                    {
                        listSrc: '../../static/imgs/home-page4-content5.png',
                        listBL1: 2857,
                        listBL2: 54,
                        listBR: '03:01',
                        listTitle: '【2018B萌应援】【秦时明月盗跖】【搞笑向】江湖危险快点跑~',
                        listSort: '布袋戏'
                    },
                    {
                        listSrc: '../../static/imgs/home-page4-content6.png',
                        listBL1: 2857,
                        listBL2: 54,
                        listBR: '03:01',
                        listTitle: '【B萌应援丨菲洛】天降混沌，以光逐之',
                        listSort: '布袋戏'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .page-content{
        padding: 10px 2% 0;
        .con-top{
            display: flex;
            justify-content: space-between;
            line-height: 40px;
            .top-right{
                font-size: 12px;
                color: #888;
                padding-right: 3px;
            }
        }
        .content-lists{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .content-list{
                width: 48%;
                border-radius: 5px;
                overflow: hidden;
                margin-bottom: 10px;
                background: #fff;
                box-shadow: 0 1px 1px 0px #ccc;
                .list-top{
                    position: relative;
                    img{
                        width: 100%;
                    }
                    .bottom-msg{
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        color: #fff;
                        font-size: 12px;
                        p{
                            float: left;
                            padding: 0 5px 2px;
                            .iconfont{
                                font-size: 12px;
                            }
                        }
                        .right{
                            float: right;
                        }
                    }
                }
                .list-title{
                    padding: 5px;
                    line-height: 20px;
                    max-height: 50px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .list-sort{
                    padding: 0 5px 5px;
                    font-size: 12px;
                    color: #888;
                }
            }
        }
    }
</style>