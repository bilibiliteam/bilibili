<template>
    <div class="wenzhang2">
        <img :src="wenzhang2Data.imgSrc" alt="" />
        <p class="title">{{wenzhang2Data.title}}</p>
        <div class="bottom">
            <p class="sort">{{wenzhang2Data.sort}}</p>
            <p class="jianjie">{{wenzhang2Data.jianjie}}</p>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                    
            }
        },
        props: ['wenzhang2Data']
    }
</script>

<style type="text/css" scoped lang="scss">
    .wenzhang2{
        margin: 0 2%;
        border-radius: 5px;
        background: #fff;
        margin-bottom: 15px;
        box-shadow: 0px 1px 1px 0px #ccc;
        img{
            width: 100%;
        }
        .title{
            padding: 2%;
        }
        .bottom{
            padding: 2%;
            font-size: 12px;
            color: #888;
            overflow: hidden;
            p{
                float: left;
            }
            .sort{
                color: #e47d9a;
                border: 1px solid #e47d9a;
                border-radius: 3px;
                line-height: 14px;
                padding: 0 2px;
                margin-right: 10px;
            }
        }
    }
</style>