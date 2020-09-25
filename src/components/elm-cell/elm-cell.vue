<template>
	<div class="elm-cell" @click="toDetail">
		<div class="cell-l">
			<img :src="data.detail.auth_icon" alt="">			
		</div>
		<div class="shoper">
			<h2>
				<span>{{data.mtitle}}</span>
			</h2>
			<div>
				<span>{{data.scores}}分 月售{{data.counts}}份</span>			
				<span>距离 {{data.lens}} km</span>
			</div>
			<div>
				<span>222</span>
				<span>222</span>
			</div>
		</div>
	</div>
	
</template>

<script>
	
	export default{
		name:"elm-cell",
		props:{
			data:{
				type:Object,
				required:true
			},
			collectionName:{
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
		mounted(){
			//console.log(this.data)
		},
		updated() {
			
		},
		methods:{
			toDetail(){
				if(this.collectionName){
					this.$router.push(`/detail/${this.data._id}?collectionName=${this.collectionName}`)
				}
			}
		}
		
	}
</script>
	
<style scoped>
	.elm-cell{
		width: 100%;
		display: flex;
		margin-bottom: 0.2rem;
		min-height: 2rem;
	}
	.elm-cell .cell-l{
		width:2.3rem;
		/* width: 100%; */
	}
	.elm-cell .cell-l img{
		width: 100%;
	}
	.shoper{ 
		width: 100%;
		margin-left: 0.3rem;
		display: flex;
		flex-direction: column;
		/* justify-content: space-between; */
		align-items: center;
	}
	.shoper h2{
		display: flex;
		width: 100%;
		margin-bottom:0.5rem;
		justify-content:space-between;
	}
	.shoper div{
		display: flex;
		width: 100%;
		justify-content:space-between;
	}
	.shoper div span{
		display:block;
	}
</style>
