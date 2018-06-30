<template>
	<div id="videoPage">
		<div class="videofilm">
			<videoheader />
		</div>
		<div class="videonav">
			<ul class="tabNav">
			    <li v-for="(item,index) in tabNav" @click="clickNav(index)" :class="{active:idx===index}"><a :href="item.href">{{item.name}}</a></li>
			</ul>
		</div>
		<div class="videoContent">
			<router-view></router-view>
		</div>
	</div>

</template>

<script>
	import videoheader from '../components/video/videoPlay'
	// import videxIntro from '../components/video/videxIntro'
	export default{
		components:{
			videoheader,
			// videxIntro	
		},
		data(){
			return{
				idx:0,
				tabNav:[{name:"简介",href:'#/video/videoIntro'},{name:"评论",href:'#/video/videoComment'}]
			}
		},
		methods:{
			clickNav(index){
			  this.idx=index
			}
		}
	}

</script>


<style>
#videoPage{
	height: 100%;
	display: flex;
	flex-direction: column;
}
#videoPage .videofilm{
	height: 240px;
}
#videoPage .videonav{
	height: 30px;
}
#videoPage .videoContent{
	flex: 1;
	overflow-x: hidden;
}

.videonav{
  background: #fff;
  display: flex;
  height: 30px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding-left: 10px;
  padding-right: 10px;
}
.videonav .tabNav{
  display: flex;
  width: 100%;
  height: 30px;
  font-size: 14px;
  justify-content: space-around;
  line-height: 30px;
}
.videonav .tabNav li{
  display: flex;
  padding: 0 5px;
  font-size: 12px;
}
.videonav .tabNav li a{
  color: #333;
}
.videonav .tabNav li.active{
  color: #F15C8D;
  border-bottom: 2px solid #F15C8D;
}
.videonav .tabNav li.active a{
  color: #F15C8D;
}

</style>