<template>
	<div id="searchHeader">
		<div class="fanhui"><a href="#/vipshopping"><i class="iconfont icon-jiantou"></i></a></div>
		<div class="search">
			<i class="iconfont icon-fangdajing"></i>
			<input type="text" placeholder="商品、品牌、作品名">
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
        		// this.$router.go(-1);
        	}
        }
    }
</script>

<style scoped>
	#searchHeader{
		display: flex;
		padding-top: 20px;
	}
	.fanhui{
		width: 10%;
		padding-left: 10px;
		text-align: center;
		font-size: 20px;
		
	}
	.fanhui a{
		color: #fff;
	}
	.fanhui a i{
		color: #fff;
		font-size: 25px;
	}
	.search{
		width: 90%;
		position: relative;
	}
	.search i{
		position: absolute;
		top: 15%;
		left: 7%;
		font-size: 20px;
		color: #ccc;
	}
	.search input::-webkit-input-placeholder{
    color: #ccc;
 	}
	.search input{
		width: 90%;
		height: 30px;
		margin: 0 5%;
		padding: 3% 9%;
		border-radius: 30px;
		color: #ccc;
	}
</style>