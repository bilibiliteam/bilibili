<template>
    <div class="page4-content">
        <pageTop />
        <pageContent v-bind:message="datas" />
    </div>
</template>
    
<script>
    import pageTop from './home-page-commontop'
    import pageContent from './home-page-commoncontent'

    export default {
        data () {
            return {
                datas:{
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
        },
        components: {
            pageTop,
            pageContent
        }
    }
</script>

<style scoped lang="scss">
    .page4-content{
        background:url('../../../static/imgs/home-page4-top1.jpg') no-repeat #f5f5f5;
        background-size: contain;
        padding-top: 190px;
    }
</style>