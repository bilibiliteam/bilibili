<template>
	<div>
		<div id="handPlay">
			<div class="handPlayheader">
				<handPlayheader />
			</div>
			<div class="handPlayNav">
				<ul class="navleft">
					<li v-for="(item,idx) in navName" @click="sortPrice(idx)" :class="{active:idx===navIdx}">{{item.name}}</li>
				</ul>
				<ul class="navright">
					<li>现货</li>
					<li @click="showRightSide">筛选</li>
				</ul>
			</div>
			<div class="handPlayGoods">
				<ul class="goodslist">
					<li v-for="item in PlayGoods" :data-id="item._id">
						<div class="goods-img">
							<a href="">
								<img :src="item.imgurl">
							</a>
						</div>
						<div class="goods-news">
							<div class="goodsName">
								<a href="">
									<span style="margin-right: 5px;">[预售]</span>{{item.content}}
								</a>
							</div>
							<p class="price"><span style="font-size: 10px;">￥</span>{{item.now_price}}</p>
							<div class="sellNum" >
								<span style="display: inline-block;padding:0 4px;border:1px solid #FF5A9C;color:#FF5A9C;">新品</span>
								<span style="color:#9D9D9D;">已售{{Number(item.now_price)+111}}</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<rightSide />
	</div>
	

</template>

<script>
	import $ from '../../../static/lib/jquery-3.3.1'
	import handPlayheader from '../../components/vipShopping/handPlay/handPlayheader'
	import rightSide from '../../components/vipShopping/handPlay/rightSide'
	export default{
		components:{
			handPlayheader,
			rightSide
		}
		,
		data(){
			return{
				navIdx:0,
				navName:[{
					name:"综合",
					lei:"all"
				},{
					name:"销量",
					lei:"num"
				},{
					name:"价格",
					lei:"price"
				}],
				PlayGoods:[],
				PlayGoodsStart:[],
				priceNum:0
			}
		},
		mounted(){
			var left = this;
			$.ajax({
				url:"http://119.23.55.48/liupan?kind=l_mobile",
				success:function(data){
					left.PlayGoods = data;
					left.PlayGoodsStart = data.concat();
					left.$store.state.handPlayGoodslist=data;
					console.log()
				}
			})
		},
		methods:{
			sortPrice(idx){
				this.navIdx = idx;
				var newGoods =[];
				if(event.target.innerHTML==="价格"){
					this.priceNum++;
					if(this.priceNum%3==1){
						newGoods = this.PlayGoods.sort((a,b)=>{
							return a.now_price - b.now_price;
						})
						this.PlayGoods = newGoods;
					}else if(this.priceNum%3==2){
						newGoods = this.PlayGoods.sort((a,b)=>{
							return b.now_price - a.now_price;
						})
						this.PlayGoods = newGoods;
					}else if(this.priceNum%3==0){
						this.PlayGoods = this.PlayGoodsStart.concat();
					}
				}
				if(event.target.innerHTML==="综合"){
					this.priceNum = 0;
					this.PlayGoods = this.PlayGoodsStart.concat();
				}
			},
			showRightSide(){
				this.$store.state.right = 0;
			}
		}
	}

</script>

<style scoped  lang="scss">
#handPlay{
	height:100%;
	display:flex;
	flex-direction:column;
	.handPlayheader{
		height:60px;
	}
	.handPlayNav{
		height:40px;
		display:flex;
		color:#666;
		font-size:12px;
		box-shadow: 0 3px 10px #ccc;
		background-color:#fff;
		.active{
			color:#FF5A9C;
		}
	}
	.handPlayNav ul{
		display:flex;
		margin:5px 0;
		justify-content:space-around;
		padding-top:5px;

	}
	.handPlayNav .navleft{
		border-right:1px solid #ccc;
		width:70%;
	}
	.handPlayNav .navright{
		width:30%;
	}
	.handPlayGoods{
		flex:1;
		overflow-x:hidden;
		.goodslist{
			background-color:#eee;
			padding: 10px 5px;
			display:flex;
			flex-wrap:wrap;
			justify-content:space-around;
			font-size:12px;
			li{
				background-color:#fff;
				width:48%;
				border-radius:5px;
				margin-bottom:10px;
				.goods-img{
					width:100%;
					img{
						width:100%;
						border-radius:5px;
					}
				}
				.goods-news{
					padding:10px;
					.goodsName{
						font-size:13px;
						min-height:35px;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						a{
							color:#000;
						}
						span{
							color:#F15C8D;
						}

					}
					.price{
							color:#F15C8D;
							line-height: 30px;
							font-size:13px;
						}
				}
			}
		}
	}
}
	
</style>