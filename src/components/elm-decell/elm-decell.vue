<template>
	<div class="elm-decell" @click="$emit('add-item',$event)">
		<div class="cell-l">
			<img :src="data.detail.auth_icon" alt="">
			
		</div>
		<div class="shoper">
			<h2>
				<span>{{data.mtitle}}</span>
			</h2>
			<div>
				<h5>门店销量排名第{{Math.floor(data.scores) }}名</h5>			
				<h5>月售{{Math.round(data.lens*8)}}</h5>
			</div>
			<h3>
				<span>￥{{data.scores}}</span>
				<button>+</button>
			</h3>
		</div>
	</div>
</template>

<script>
	
	export default{
		name:"elm-decell",
		props:{
			data:{
				type:Object,
				required:true
			},
			collection:{
				type:String,
				default:null
			},
			index:{
				type:Number,
				default:null
			},
			isAdd:{
				type:Boolean,
				default:false
			}
		},

		components:{},
		mounted(){},
		updated() {
			
		},
		methods:{}
		
	}
</script>
	
<style scoped>
	.elm-decell{
		width: 100%;
		display: flex;
		margin-bottom: 0.2rem;
		min-height: 2rem;
	}
	.elm-decell .cell-l{
		width:2.3rem;
		/* width: 100%; */
	}
	.elm-decell .cell-l img{
		width: 100%;
	}
	.shoper{ 
		width: 100%;
		margin-left: 0.3rem;
		display: flex;
		flex-direction: column;
		/* justify-content: space-between; */
		/* align-items: center; */
	}
	.shoper h2{
		display: flex;
		width: 100%;
		margin-bottom:0.2rem;
	}
	
	
	.shoper div h5{
	text-align: left;
}

	.shoper h3{
	display: flex;
	justify-content:space-between ;
}

	button{
		background: deepskyblue;
		border: none;
		outline: none;
		font-size: 18px;
		color: #fff;
		border-radius: 50%;
	}
</style>
