<template>
    <div class="zhuifanCon">
        <div class="block-all" v-for="item in data">
            <div class="block-top">
                <div class="left">
                    <div>
                        <img :src="item.imgSrc" alt="" />
                    </div>
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
                <p class="title">{{item.title}}</p>
                <p class="jianjie">{{item.jianjie}}</p>
            </div>
        </div>
        <div class="dptj block-all">
            <div class="block-top">
                <div class="left">
                    <div class="pic">
                        <img :src="dptjSrc" alt="" />
                    </div>
                    <p>点评推荐</p>
                </div>
                <div class="right">
                    <p>查看更多 &gt;</p>
                </div>
            </div>
            <div class="dptj-content" v-for="item in dptjData">
                <div class="dptj-content-top">
                    <div class="text">
                        <h3 class="title">{{item.title}}</h3>
                        <p class="text-content">{{item.content}}</p>
                    </div>
                    <div class="t-right">
                        <img :src="item.imgSrc" alt="" />
                    </div>
                </div>
                <div class="dptj-content-bottom">
                    <div class="writer">
                        <img class="writer-pic" :src="item.writePic" />
                        <div class="writer-name">{{item.name}}</div>
                    </div>
                    <div class="like-comment">
                        <div class="like">
                            <i class="iconfont icon-iconfontzhizuobiaozhun44"></i>
                            <span class="like-nums">{{item.likeNums}}</span>
                        </div>
                        <div class="comment">
                            <i class="iconfont icon-xinxi"></i>
                            <span class="comment-nums">{{item.commentNums}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bjtj">
            <div class="bjtj-top">
                
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
                        title: '',
                        jianjie: '',
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
                        title: '【资讯档】 2018年第25周',
                        jianjie: '',
                        btImg: '../../static/imgs/zhuifan11.jpg'
                    }
                ],
                dptjSrc: '../../static/imgs/zhuifan3.jpg' ,
                dptjData: [
                    {
                        title: '致这残酷美丽的世界',
                        content: '灰与幻想的格林加姆尔，一个残酷而美丽的世界。一如既往的穿越，一如既往的异世界，一如既往的公会',
                        imgSrc: 'https://i0.hdslb.com/bfs/bangumi/7fb4945f864e9e988212b7d20f206df2677053f8.jpg@180w_240h.webp',
                        writePic: '../../static/imgs/zhuifan-dptj-user1.jpg',
                        name: 'MHZJX',
                        likeNums: 906,
                        commentNums: 101
                    },
                    {
                        title: '致这残酷美丽的世界',
                        content: '灰与幻想的格林加姆尔，一个残酷而美丽的世界。一如既往的穿越，一如既往的异世界，一如既往的公会',
                        imgSrc: 'https://i0.hdslb.com/bfs/bangumi/7fb4945f864e9e988212b7d20f206df2677053f8.jpg@180w_240h.webp',
                        writePic: '../../static/imgs/zhuifan-dptj-user1.jpg',
                        name: 'MHZJX',
                        likeNums: 906,
                        commentNums: 101
                    },
                    {
                        title: '致这残酷美丽的世界',
                        content: '灰与幻想的格林加姆尔，一个残酷而美丽的世界。一如既往的穿越，一如既往的异世界，一如既往的公会',
                        imgSrc: 'https://i0.hdslb.com/bfs/bangumi/7fb4945f864e9e988212b7d20f206df2677053f8.jpg@180w_240h.webp',
                        writePic: '../../static/imgs/zhuifan-dptj-user1.jpg',
                        name: 'MHZJX',
                        likeNums: 906,
                        commentNums: 101
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
                        -webkit-box-orient: vertical;
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
        .dptj{
            padding: 0;
            font-size: 14px;
            .block-top{
                padding: 0 2%;
                .left{
                    .pic{
                        img{
                            width: 24px;
                        }
                    }
                }
            }
            .dptj-content{
                padding: 10px 2% 0;
                border-bottom: 1px solid #ccc;
                .dptj-content-top{
                    display: flex;
                    justify-content: space-between;
                    .text{
                        width: 76%;
                        .title{
                            line-height: 34px;
                        }
                        .text-content{
                            font-size: 12px;
                            line-height: 20px;
                            max-height: 40px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                        }
                    }
                    .t-right{
                        width: 16%;
                       img{
                            width: 100%;
                            border-radius: 5px;
                        } 
                    }
                }
                .dptj-content-bottom{
                    color: #888;
                    height: 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .writer{
                        width: 30%;
                        display: flex;
                        align-items: center;
                        .writer-pic{
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                        }
                        .writer-name{
                            padding-left: 6px;
                        }
                    }
                    .like-comment{
                        width: 40%;
                        display: flex;
                        .like{
                            flex: 1;
                        }
                        .comment{
                            flex: 1;
                        }
                    }
                }
            }
        }
    }
</style>