<template>
    <div class="zhuifanTop">
        <div class="fanju-or-gz">
            <img :src="imgSrc[0]" alt="" /><img :src="imgSrc[1]" alt="" />
        </div>
        <div class="topNav">
            <div class="topList" v-for="i in navData">
                <img :src="i.imgSrc" alt="" />
                <p>{{i.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                imgSrc: ['../../static/imgs/zhuifan1.jpg','../../static/imgs/zhuifan2.jpg'],
                navData:[
                    {
                        imgSrc: '../../static/imgs/zhuifan3.jpg',
                        name: '点评'
                    },
                    {
                        imgSrc: '../../static/imgs/zhuifan4.jpg',
                        name: '时间表'
                    },
                    {
                        imgSrc: '../../static/imgs/zhuifan5.jpg',
                        name: '索引'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .zhuifanTop{
        height: 120px;
        margin-bottom: 6px;
        background: #fff;
        color: #777;
        .fanju-or-gz{
            padding: 0 4%;
            height:80px;
            margin: 0 auto;
            border-bottom: 1px solid #eee;
            img{
                width: 50%;
                padding: 5px 5px;
            }
        }
        .topNav{
            height: 40px;
            display: flex;
            align-items: center;
            .topList{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: 18%;
                }
                p{
                    padding-left: 6%;
                    line-height: 40px;
                }
            }
        }
    }
</style>