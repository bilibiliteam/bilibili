<template>
	<div class="videoplay-top">
		<div class="top">
			<div @click="back"><i class="iconfont icon-jiantou"></i></div>
			<div><i class="iconfont icon-gengduoda"></i></div>
		</div>
		<div class="video">
			<video controls="controls" height="150" width="100%">
				<source src="//pic.ibaotu.com/00/17/41/71w888piC7BQ.mp4_10s.mp4" type="video/mp4" /> 
			</video>
		</div>
		<div class="tanmu">
			<input type="text" placeholder="发射弹幕">
		</div>
	</div>

</template>

<script>
	export default{
		data(){
			return{

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
	.videoplay-top{}
	.videoplay-top .top{
		height: 50px;
		background-color: #000;
		padding: 20px 15px 0 15px;
		display: flex;
		justify-content: space-between;
	}
	.videoplay-top .top i{
		color: #fff;
		font-size: 20px;

	}
	.videoplay-top .video{
		height: 150px;
		width: 100%;
	}
	.videoplay-top .tanmu{
		height: 40px;
		padding: 5px 20px;
		background-color: #282923;
		text-align: center;
		width: 100%;
	}
	.videoplay-top .tanmu input{
		height: 30px;
		background-color: #6E6E6E;
		width: 100%;
		padding-left: 20px;
		border-radius: 30px;
	}
	.videoplay-top .tanmu input::-webkit-input-placeholder{
    color: #ddd;
 	}

</style>