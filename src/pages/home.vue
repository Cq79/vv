<template>
	<div class="home">	
		<div>
			<div class="mFoods" >
				<router-link  to="/detail" class="moreFoods" v-for="(item,index) in fList">
					<ElmMenuFood 		
					:data="item"
					:index="index"
					/>
				</router-link>
			</div>
		</div>
		
		<ElmBanner 
		:data="bList"
		collectionName="banner"
		></ElmBanner>
		
		<ElmMorenav v-show="bList.length!==0"></ElmMorenav>
		
		<div class="detailFoods">
			<elm-cell 
		  v-for="(item,index) in dList"
		   :key="item._id"
		  :data="item" 
		  :index="index" 
		  collectionName="home"
		  
			 />	
		</div>		
	</div>
	
</template>

<script>
	import ElmMenuFood from '../components/elm-menufood/elm-menufood.vue'
	import ElmCell from '../components/elm-cell/elm-cell.vue'
	import ElmMorenav from '../components/elm-morenav/elm-morenav.vue'
	import ElmBanner from '../components/banner/banner.vue'
	// import ElmToolbar from '../components/elm-toolbar/elm-toolbar.vue'
	export default{
		name:"home",
		props:{},
		data(){
			return{
				fList:[],
				dList:[],
				bList:[]
				
			}
		},
		components:{
			ElmMenuFood,
			ElmCell,
			ElmMorenav,
			ElmBanner
		},
		mounted(){
			this.$axios({
				url:'http://47.116.70.86:3333/api/home',
				params:{_limit:20,_page:1}
			}).then(
			res =>{
				// res => this.dList = res.data.data
				 this.dList = res.data.data
				 this.fList = res.data.data
				 this.fList.splice(10)		
			}),
			this.$axios({
				url:'http://47.116.70.86:3333/api/banner',
				params:{_limit:3,_page:1}
			}).then(
				res => this.bList = res.data.data
			)
			
		},
		updated() {

		},
		methods:{}
		
	}

</script>
	
<style scoped>
	.mFoods{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.moreFoods{
		display: flex;
		width: 20%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 1.6rem;
	}
	.ElmMenuFood{
		display: flex;	
	}
	
	.detailFoods{
		display: flex;
		/* width: 100%; */
		flex-direction: column;
		padding: 0.1rem;
	}
</style>
