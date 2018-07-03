<template>
    <div class="page-content">
        <div class="con-top">
            <p class="top-left">{{message.topLeft}}</p>
            <p class="top-right">{{message.topRight}}</p>
        </div>
        <div class="content-lists">
            <div class="content-list" v-for="item in message.listsData">
                <div class="list-top">
                    <img :src="item.listSrc" alt="" />
                    <div class="bottom-msg">
                        <p class="left1"><i class="iconfont icon-boshiweb_bofangliang"></i> {{item.listBL1}}</p>
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
            }
        },
        props:['message']
    }
</script>

<style scoped lang="scss">
    .page-content{
        padding: 0px 2%;
        .con-top{
            display: flex;
            justify-content: space-between;
            line-height: 30px;
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
                            background: rgba(0,0,0,0.3);
                            border-radius: 3px;
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