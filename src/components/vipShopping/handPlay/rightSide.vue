<template>
	<div class="rightSide" :style="{right:sideright}">
		<div class="Sideleft" @click="hideSide">
		</div>
		<div class="Sideright">
			<div class="right-price">
				<h4>价格</h4>
				<input type="text" placeholder="最低价" id="floorPrice">
				<span>-</span>
				<input type="text" placeholder="最高价" id="topPrice">
			</div>
			<div class="right-brand">
				<h4>品牌<span :data-num="pitchClass" @click="more">∨</span></h4>
				<ul>
					<li v-for="(item,idx) in brandList" @click="pitch" :data-num="pitchClass">{{item}}</li>
				</ul>
			</div>
			<div class="right-IP">
				<h4>IP <span :data-num="pitchClass" @click="more">∨</span></h4>
				<ul>
					<li v-for="(item,idx) in IpList" @click="pitch" :data-num="pitchClass">{{item}}</li>
				</ul>
			</div>
			<div class="right-class">
				<h4>分类</h4>
				<ul>
					<li v-for="(item,idx) in ClassList" @click="pitch" :data-num="pitchClass">{{item}}</li>
				</ul>
			</div>
			<div class="right-btn">
				<button>重置</button>
				<button style="background-color:#FF5A9C;color:#fff;" @click="confirmBtn">确定</button>
			</div>
		</div>
	</div>

</template>

<script>
	export default{
		data(){
			return{
				pitchClass:1,
				arrgoods:[],
				brandList:["万达","COMPANY","BANPERSTO","寿屋","孩之宝","ALTER","DollZone","角川","海洋堂","quesQ","Plum","哔哩哔哩","Flare","水族馆","hello"],
				IpList:["机动战士高达","Fate系咧","龙珠系咧","ONE PIECE","变形金刚系咧","漫威","名侦探柯南","出包王女","火影忍者","圣斗士星矢","守望先锋","哔哩哔哩"],
				ClassList:["手办","变形金刚及其他","扭蛋/盒蛋/食完","娃娃"]
			}
		},
		methods:{
			pitch(e){
				let number =  e.target.getAttribute("data-num")*1 +1;
				e.target.setAttribute("data-num",number)
				if(number%2==0){
					e.target.setAttribute("class","active")
				}else if(number%2==1){
					e.target.setAttribute("class","")
				}

			},
			more(e){
				let number =  e.target.getAttribute("data-num")*1 +1;
				e.target.setAttribute("data-num",number)
				if(number%2==0){
					e.target.parentNode.nextElementSibling.style.height= 'auto';
				}else if(number%2==1){
					e.target.parentNode.nextElementSibling.style.height = 80+'px';
				}
			},
			hideSide(){
				this.$store.state.right = "-100%";
				// console.log(this.$store.state.right)
			},
			confirmBtn(){
				// var floorPrice = document.querySelector("#floorPrice").value*1;
				// var topPrice = document.querySelector("#topPrice").value*1;


				this.$store.state.right = "-100%";

			}
		},
		computed:{
			sideright(){
				return this.$store.state.right;

			}
		}
	}

</script>

<style scoped lang="scss">
	.rightSide{
		width:100%;
		height:100%;
		display:flex;
		position:fixed;
		transition: all 0.1s linear;
		top:0;
		z-index: 6666;
		font-size:12px;
		.Sideleft{
			width:10%;
			height:100%;
			background: rgba(0,0,0,0.2);
		}
		.Sideright{
			width:90%;
			height:100%;
			padding:0 15px;
			background-color:#fff;
			position:relative;
			h4{
				font-size:14px;
				margin:20px 0 10px 0;
				span{
					float:right;
					font-size:16px;
					color:#bbb;
				}
			}
			.right-price{
				input{
					width:46%;
					height:25px;
					line-height:25px;
					padding:5px;
					background-color:#F4F4F4;
					text-align:center;
				}
				span{
					margin:0 2%;
				}
			}
			ul{
				overflow:hidden;
				height:80px;
				li{
					float:left;
					width:30%;
					margin:0 2% 10px 1%;
					height:30px;
					line-height:30px;
					text-align:center;
					background-color:#F4F4F4;
					border:1px solid #fff;
				}
				li.active{
					border:1px solid #FF5A9C;
					color:#FF5A9C;
					background-color:#fff;
				}
			}
			.right-btn{
				position:absolute;
				width:100%;
				bottom:0;
				height:50px;
				padding:5px 0;
				border-top:1px solid #F4F4F4;
				button{
					width:40%;
					height:40px;
					border:1px solid #FF5A9C;
					border-radius:40px;
					background-color:#fff;
					color:#FF5A9C;
					margin-left:3%;
				}
			}
		}
	}

</style>