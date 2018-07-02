<template>
    <div class="handPlay-header">
        <div class="handPlay-header-left" @click="back">
            <i class="iconfont icon-jiantou caidan"></i>
        </div>
        <div class="handPlay-header-center">
            会员购
        </div>
        <div class="handPlay-header-right">
            <span>
                <i class="iconfont icon-like-1"></i>
            </span>
            <span>
                <i class="iconfont icon-caidan"></i>
            </span>
        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return {
                
            }
        },
        methods:{
            back(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .handPlay-header{
        display: flex;
        height: 60px;
        justify-content: space-between;
        padding: 20px 15px 0 15px;
        background: #f15c8d;
        color: #fff;
    }
    .handPlay-header i{
 		font-size: 20px;
    }
    .handPlay-header>div{
        width: 100px;
    }
    .handPlay-header-center{
        width: 100%;
        text-align: center;
    }
    .handPlay-header-left,.handPlay-header-center,.handPlay-header-right{
        color: #fff;
        width: 10%;
        padding-top: 4px;
        position: relative;
    }
    .handPlay-header-right{
    	padding-left: 30px;
    }
    .handPlay-header-right span{
        margin-left: 8px ;
    }


</style>