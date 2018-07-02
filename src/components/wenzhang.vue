<template>
    <div class="article">
        <div class="title">{{wenzhangData.title}}</div>
        <img :src="wenzhangData.imgSrc" alt="" />
        <div class="article-bottom">
            <p class="sort-name">{{wenzhangData.sortName}}</p>
            <p class="sort">{{wenzhangData.sort}}</p>
            <p class="author">{{wenzhangData.author}}</p>
            <p class="click-num">{{wenzhangData.clickNum}}</p>
            <p class="comment-num">{{wenzhangData.commentNum}}</p>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data () {
            return {
            }
        },
        props: ['wenzhangData']
    }
</script>

<style scoped lang="scss">
    .article{
        margin: 0 2%;
        background: #fff;
        border-radius: 5px;
        margin-bottom: 15px;
        box-shadow: 0px 1px 1px 0px #ccc;
        .title{
            padding: 2%;
            border-radius: 5px;
        }
        img{
            width: 100%;
        }
        .article-bottom{
            overflow: hidden;
            p{
                float: left;
                color: #888;
                margin-right: 25px;
                font-size: 12px;
            }
            padding: 10px 10px;
            .sort-name{
                border: 1px solid #e47d9a;
                color: #e47d9a;
                border-radius: 3px;
                margin-right: 5px;
                line-height: 14px;
                padding: 0 2px;
            }
        }
    }
</style>