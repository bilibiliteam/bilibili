<template>
    <div class="zhuifanCon">
        <div class="block-myzf">
            <div class="my-top">
                <div class="left">
                    <img :src="imgSrc" alt="" />
                    <p>我的追番</p>
                </div>
                <div class="right">
                    <p>查看全部 &gt;</p>
                </div>
            </div>
            <div class="my-center">
                <div class="centerList" v-for="iData in myzfData">
                    <a href="#/video">
                        <img :src="iData.imgSrc" alt="" />
                    </a>
                    <p class="videoname">{{iData.videoname}}</p>
                    <p class="allNum same">{{iData.allNum}}</p>
                    <p class="curNum same">{{iData.curNum}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                imgSrc: '../../static/imgs/zhuifan6.jpg',
                myzfData:[
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
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .zhuifanCon{
        .block-myzf{
            background: #fff;
            .my-top{
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
            .my-center{
                padding: 0 6px;
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
                        padding: 3px 0;
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
        }
    }
</style>