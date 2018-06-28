<template>
    <div class="zhuifanCon">
        <div class="block-all" v-for="item in data">
            <div class="block-top">
                <div class="left">
                    <img :src="item.imgSrc" alt="" />
                    <p>{{item.itemName}}</p>
                </div>
                <div class="right">
                    <p>{{item.more}} &gt;</p>
                </div>
            </div>
            <div class="block-center">
                <div class="centerList" v-for="iData in item.itmData">
                    <img :src="iData.imgSrc" alt="" />
                    <p class="videoname">{{iData.videoname}}</p>
                    <p class="allNum same">{{iData.allNum}}</p>
                    <p class="curNum same">{{iData.curNum}}</p>
                </div>
            </div>
            <div class="bottom-block">
                <img :src="item.btImg" alt="" />
                <p class="item.title"></p>
                <p class="jitem.lianjie"></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                data:[
                    {
                        itemName: '我的追番',
                        more: '查看全部',
                        imgSrc: '../../static/imgs/zhuifan6.jpg',
                        itmData:[
                            {
                                imgSrc: '../../static/imgs/zhuifan7.jpg',
                                videoname: '齐木楠雄的灾难 第二季',
                                allNum: '全 24 话',
                                curNum: '看到第 3 话'
                            },
                            {
                                imgSrc: '../../static/imgs/zhuifan8.jpg',
                                videoname: '钢之炼金术师 FULLMETAL ALCHEMIST',
                                allNum: '全 64 话',
                                curNum: '看到第 64 话'
                            },
                            {
                                imgSrc: '../../static/imgs/zhuifan9.jpg',
                                videoname: '一人之下 第二季',
                                allNum: '全 24 话',
                                curNum: '看到第 24 话'
                            }
                        ],
                        btImg: '../../static/imgs/zhuifan10.jpg'
                    },
                    {
                        itemName: '番剧推荐',
                        more: '查看更多',
                        imgSrc: '../../static/imgs/zhuifan15.jpg',
                        itmData:[
                            {
                                imgSrc: '../../static/imgs/zhuifan12.jpg',
                                videoname: '宇宙战舰提拉米斯',
                                allNum: '',
                                curNum: '更新至EX02'
                            },
                            {
                                imgSrc: '../../static/imgs/zhuifan13.jpg',
                                videoname: '魔法少女樱 CLEAR CARD篇',
                                allNum: '全 22 话',
                                curNum: ''
                            },
                            {
                                imgSrc: '../../static/imgs/zhuifan14.jpg',
                                videoname: '鬼灯的冷彻 第二季 其二',
                                allNum: '',
                                curNum: '更新至25话'
                            }
                        ],
                        btImg: '../../static/imgs/zhuifan11.jpg'
                    }
                ],
                        
            }
        }
    }
</script>

<style scoped lang="scss">
    .zhuifanCon{
        .block-all{
            background: #fff;
            padding: 0 2%;
            margin-bottom: 8px;
            .block-top{
                height: 40px;
                display: flex;
                justify-content: space-between;
                .left{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    padding-left: 5px;
                    width: 28%;
                    color: #333;
                    img{
                        width: 26px;
                        height: 26px;
                    }
                }
                .right{
                    width: 30%;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    padding-right: 5px;
                    color: #999;
                    font-size: 14px;
                }
            }
            .block-center{
                display: flex;
                justify-content: space-around;
                .centerList{
                    width: 32%;
                    img{
                        width: 100%;
                        margin-bottom: 3px;
                    }
                    p{
                        font-size: 14px;
                        line-height: 20px;
                        max-height: 40px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical
                    }
                    .same{
                        color: #999;
                    }
                }
            }
            .bottom-block{
                padding: 10px 0;
                img{
                    width: 100%;
                }
                p{
                    line-height: 26px;
                    background: #f5f5f5;
                }
                .title{
                    padding-left: 15px;
                    color: #000;
                    font-size: 14px;
                    max-height: 26px;
                    overflow: hidden;
                }
                .jianjie{
                    padding-left: 10px;
                    color: #666;
                    font-size: 12px;
                    max-height: 26px;
                    overflow: hidden;
                }
            }

        }
    }
</style>