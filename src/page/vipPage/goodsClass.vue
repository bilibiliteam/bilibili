<template>
	<div id="goodsClass">
		<div class="goodsheader">
			<searchHeader />
		</div>
		<div class="content">
			<div class="goodsclass">
				<ul>
					<li v-for="(item,idx) in goodslist"><a :href="'#class'+idx" :class="{change:classLignt===idx}" @click="changeLight(idx)">{{item.title}}</a></li>
				</ul>
			</div>
			<div class="goods">
				<div class="item" v-for="(item,idx) in goodslist">
					<h3 :id="'class'+idx">{{item.title}}分类</h3>
					<ul>
						<li v-for="val in item.goods">
							<img :src="val.img">
							<p>{{val.name}}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import searchHeader from '../../components/vipShopping/goodsClass/goodsSearch'
	export default{
		components:{
			searchHeader
		},
		data(){
			return {
				classLignt:0,
				goodslist:[{
					title:"模型",
					goods:[{
						img:"../../../static/imgs/g5.jpg",
						name:"SD高达"
					},{
						img:"../../../static/imgs/g1.jpg",
						name:"HD高达"
					},{
						img:"../../../static/imgs/g3.jpg",
						name:"RD高达"
					},{
						img:"../../../static/imgs/g2.jpg",
						name:"HD高达"
					},{
						img:"../../../static/imgs/g4.jpg",
						name:"RD高达"
					}]
					
				},{
					title:"Figure",
					goods:[{
						img:"../../../static/imgs/g4.jpg",
						name:"SD高达"
					},{
						img:"../../../static/imgs/g2.jpg",
						name:"HD高达"
					},{
						img:"../../../static/imgs/g4.jpg",
						name:"RD高达"
					},{
						img:"../../../static/imgs/g2.jpg",
						name:"HD高达"
					},{
						img:"../../../static/imgs/g5.jpg",
						name:"RD高达"
					}]
					
				},{
					title:"B站周边",
					goods:[{
						img:"../../../static/imgs/g2.jpg",
						name:"SD高达"
					},{
						img:"../../../static/imgs/g5.jpg",
						name:"HD高达"
					},{
						img:"../../../static/imgs/g2.jpg",
						name:"HD高达"
					},{
						img:"../../../static/imgs/g4.jpg",
						name:"RD高达"
					},{
						img:"../../../static/imgs/g3.jpg",
						name:"RD高达"
					}]
					
				},{
					title:"展览",
					goods:[{
						img:"../../../static/imgs/g4.jpg",
						name:"SD高达"
					},{
						img:"../../../static/imgs/g5.jpg",
						name:"HD高达"
					},{
						img:"../../../static/imgs/g1.jpg",
						name:"RD高达"
					},{
						img:"../../../static/imgs/g2.jpg",
						name:"HD高达"
					},{
						img:"../../../static/imgs/g4.jpg",
						name:"RD高达"
					}]
					
				},{
					title:"演出",
					goods:[{
						img:"../../../static/imgs/g2.jpg",
						name:"SD高达"
					},{
						img:"../../../static/imgs/g2.jpg",
						name:"HD高达"
					},{
						img:"../../../static/imgs/g4.jpg",
						name:"RD高达"
					},{
						img:"../../../static/imgs/g3.jpg",
						name:"HD高达"
					},{
						img:"../../../static/imgs/g5.jpg",
						name:"RD高达"
					}]
					
				},{
					title:"作品",
					goods:[{
						img:"../../../static/imgs/g5.jpg",
						name:"SD高达"
					},{
						img:"../../../static/imgs/g1.jpg",
						name:"HD高达"
					},{
						img:"../../../static/imgs/g2.jpg",
						name:"HD高达"
					},{
						img:"../../../static/imgs/g4.jpg",
						name:"RD高达"
					},{
						img:"../../../static/imgs/g4.jpg",
						name:"RD高达"
					}]
					
				},{
					title:"品牌",
					goods:[{
						img:"../../../static/imgs/g3.jpg",
						name:"SD高达"
					},{
						img:"../../../static/imgs/g5.jpg",
						name:"HD高达"
					},{
						img:"../../../static/imgs/g1.jpg",
						name:"RD高达"
					},{
						img:"../../../static/imgs/g2.jpg",
						name:"HD高达"
					},{
						img:"../../../static/imgs/g4.jpg",
						name:"RD高达"
					}]
					
				}]
			}
		},
		methods:{
			changeLight(index){
				this.classLignt = index;
			}
		}
	}

</script>


<style scoped>
	#goodsClass{
		display: flex;
		flex-direction: column;
		height: 100%;

	}
	.goodsheader{
		height: 60px;
		width: 100%;
		background-color: #F15C8D;
	}
	.content{
		flex: 1;
		display: flex;
	}
	.content .goodsclass{
		width: 110px;
	}
	.content .goodsclass ul{
		display: flex;
		flex-direction: column;
	}
	.content .goodsclass ul li{
		
	}
	.content .goodsclass ul li a{
		display: block;
		height: 60px;
		line-height: 60px;
		padding-left: 30px;
		color: #2C2C2C;
	}
	.content .goodsclass ul li a.change{
		color:#F15C8D ;
		background-color: #fff;
	}
	.content .goods{
		flex: 1;
		height: 100%;
		overflow-x: hidden;
		background-color: #fff;
	}
	.content .goods .item{
		width: 100%;
	}
	.content .goods .item h3{
		font-size: 13px;
		font-weight: 500;
		padding: 15px;
	}
	.content .goods .item ul{
		width: 100%;
		overflow: hidden;
	}
	.content .goods .item ul li{
		width: 70px;
		text-align: center;
		margin:5px 0 10px 15px; 
		height: 100px;
		float: left;
	}
	.content .goods .item ul li img{
		width: 70px;
		height: 70px;
		margin-bottom: 10px;
	}
	.content .goods .item ul li p{
		color: #A3A3A3;
		font-size: 12px;
	}



</style>