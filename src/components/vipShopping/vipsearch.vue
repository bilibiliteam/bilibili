<template>
	<div class="search">
		<i class="iconfont icon-fangdajing"></i>
		<input type="text" placeholder="商品、漫展">
	</div>
</template>

<script>
	import $ from '../../../static/lib/jquery-3.3.1'
    export default {
        data(){
            return {
                
            }
        }
    }
    $("input").trigger("click").focus();
</script>

<style scoped>
	.search{
		width: 100%;
		position: relative;
	}
	.search i{
		position: absolute;
		top: 20%;
		left: 7%;
		font-size: 20px;
		color: #ccc;
	}
	.search input::-webkit-input-placeholder{
    color: #ccc;
 	}
	.search input{
		width: 90%;
		margin: 0 5%;
		padding: 3% 9%;
		border-radius: 10px;
		color: #ccc;
	}
</style>