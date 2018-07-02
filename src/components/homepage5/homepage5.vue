<template>
    <div class="page5-content">
        <wenzhang v-bind:wenzhangData="wenzhangData" />
        <wenzhang2 v-bind:wenzhang2Data="wenzhang2Data" />
        <pageTop v-bind:imgSrc="datas" />
        <wenzhang2 v-bind:wenzhang2Data="wenzhang2Data2" />
        <pageContent v-bind:message="conDatas" />
    </div>
</template>

<script>
    import pageTop from '../home-page-commonbanner'
    import pageContent from '../homepage4/home-page-commoncontent'
    import wenzhang from '../wenzhang'
    import wenzhang2 from '../wenzhang2'


    export default {
        data () {
            return {
                datas: {
                    topImgSrc: '../../static/imgs/home-page4-top1.jpg',
                    topbImgSrc: ['../../static/imgs/home-page4-top2.jpg','../../static/imgs/home-page4-top2.jpg','../../static/imgs/home-page4-top2.jpg','../../static/imgs/home-page4-top2.jpg'],
                    title: '海选赛投票进行中',
                    jianjie: '6月25日~7月1日'
                },
                conDatas:{
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
                },
                wenzhangData: {
                    title: '48年来首次！俄罗斯晋级世界杯8强！西班牙第5次不敌世界杯东道主',
                    imgSrc: '../static/imgs/home-page5-top2.jpg',
                    sortName: '文章',
                    sort: '运动',
                    author: '球叮足球',
                    clickNum: 7346,
                    commentNum: 150
                },
                wenzhang2Data: {
                    imgSrc: '../static/imgs/home-page-top3.jpg',
                    title: '欧洲红魔来势汹汹',
                    sort: '竞猜',
                    jianjie: '16强是否已经是蓝武士的极限？'
                },
                wenzhang2Data2: {
                    imgSrc: '../static/imgs/ganbei-sjb.jpg',
                    title: '《干杯！世界杯》专题报道',
                    sort: '世界杯',
                    jianjie: '点燃你的夏日激情'
                }
            }
        },
        components: {
            wenzhang,
            pageTop,
            pageContent,
            wenzhang2
        }
    }
</script>

<style scpoed lang="scss">
    .page5-content{
        background:url('../../../static/imgs/home-page5-top1.png') no-repeat #f5f5f5;
        background-size: contain;
        padding-top: 190px;
    }
</style>