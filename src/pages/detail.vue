<template>
	<div class="detail" >
		<elm-nav bgColor="tarnsparent" :borderWidth="0" />
		<div class="detail-header">
	   <!-- <div class="header">1</div> -->
			<ElmCell
			:data="$route.query.deFoods"  
			/>
		</div>
		<div class="detail" >
		  <div class="recommend fixed">
			  <div class="detail-mo ">
				<a href="javascript:void(0)" 
				v-for="(item,index) in moData"
				:key="index"
				>{{item.title}}</a>
			  </div>
		  </div>
		  <div class="moreDetail">
			<div class="detail-l  " >
			   <ul class="detail-des " 

				>				   
<!-- 				  <li id="_1">实惠折扣</li>
				  <li id="_2">超值套餐</li>
				  <li id="_3">人气套餐</li>
				  <li id="_4">美味小食</li>
				  <li id="_5">饮品专区</li>  -->
				  <li  v-for="(item,index) in desData"
				:key="index">
				  <a href="javascript:void(0)" 
				 :id="item.id"
				  @click="gtDes('#anchor-'+(item.id*3-0+40),item.id)"
				  :class="{active:showIn===(index-0+1)}"
				  rel="external nofollow" 
				  >{{item.title}}</a>
				  </li>
			   </ul>
		   </div>
		   <div class="detail-r">
			   <!-- <div id=""> -->
				   <!-- <h3>1</h3> -->
					<ElmDecell 
					v-for="(item,index) in deMoFood"
					:key="item._id"
					:data ="item"
					:id ="'anchor-'+item._id"
					/>
			   <!-- /div> -->
	<!-- 		   <div id="">
					<h3>1</h3>
			   		<div>2</div>
			   		<div>2</div>
			   		<div>2</div>
			   </div> -->
		   </div>
		 </div>
	   </div>
	   
	</div>
	<!-- <FrameScreen  v-else /> -->
</template>

<script>
	import ElmNav from '../components/elm-nav/elm-nav.vue'
	import ElmCell from '../components/elm-cell/elm-cell.vue'
	import ElmDecell from '../components/elm-decell/elm-decell.vue'
	import ElmComm from '../components/elm-comm/elm-comm.vue'
	import FrameScreen from '../components/frame-screen.vue'
	import axios from '../plugins/axios.js'
	export default{
		name:"detail",
		props:{},
		data(){
			return{
				deFoods:{},
				deMoFood:[],
				desData:[
					{id:1,title:"实惠折扣"},
					{id:2,title:"超值套餐"},
					{id:3,title:"人气套餐"},
					{id:4,title:"美味小食"},
					{id:5,title:"饮品专区"},
				],
				moData:[
					{id:1,title:"点餐"},
					{id:2,title:"评价"},
					{id:3,title:"商家"},
				],
				showIn:1
			}
		},
		beforeRouteEnter(to,from,next) {
		let collectionName=to.query.collectionName;
		let _id = to.params._id;
		// console.log(to.query)
		//  axios({
		// 	url:`/api/${collectionName}/${_id}`
			
		// }).then( res => {
		// 	to.query.deFoods = res.data.data;
		// 	 // console.log(res)
		// 	axios({
		// 		url:'/api/detail',
		// 		params:{_limit:20,_page:3}
		// 	}).then((res) => {
		// 		to.query.deMoFood =  res.data.data;
		// 		// res => console.log(res)
		// 		// console.log(res)
		// 		next();
		// 	});
			
		// });
		// var more=`${collectionName}/${_id}` 
		axios.all([
			axios({url:`http://47.116.70.86:3333/api/${collectionName}/${_id}`}),
			axios({url:'http://47.116.70.86:3333/api/detail'})
		]).then(axios.spread((fir,sec)=>{ 
			to.query.deFoods= fir.data.data;
			to.query.deMoFood = sec.data.data; 
			next()
		}))
		},
		components:{ElmNav,ElmCell,ElmDecell,ElmComm,FrameScreen,axios},
		mounted(){
		this.deFoods = this.$route.query.deFoods;
		this.deMoFood = this.$route.query.deMoFood;
		window.addEventListener('scroll', this.watchScroll)
		},
		updated() {
		},
		methods:{
			gtDes(id,key){
				this.showIn=key
				var anchor = this.$el.querySelector(id)
				console.log(this.$el,anchor,id)
				document.documentElement.scrollTop = anchor.offsetTop
			} ,
			// handleScroll () {
			// 	let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			// 	let topBar=document.querySelector(".detail-main");
			// 	if(scrollTop > topBar.offsetHeight){
			// 		topBar.style.offsetHeight = "200px";
			// 	}
			// }
			// touchmove (e){			
			// 　　var e = event || window.event; 　　			
			// 　　var divTop= document.querySelector('.recommend');			
			// 　　　　var scrollHeight= document.documentElement.scrollTop || document.body.scrollTop;			
			// 　　　　if(scrollHeight>160){//当滚动高度超过160赋予div  fixed属性，将其固定在顶部		
			// 　　　　　　divTop.className = 'divTop fixed'		
			// 　　　　}else{			
			// 　　　　　　divTop.className='divTop'			
			// 　　　　}
			
			// 　}
			

		 // handleScroll () {
   //              let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                        
   //                  // 固定导航栏
   //                  let topBar = document.querySelector(".detail");
   //                  let navBar = document.querySelector(".detail-des");
   //                  let mainPart = document.querySelector("#mainPart");
   //                  if (scrollTop > topBar.offsetHeight){
   //                      this.istabBar = true
   //                      mainPart.style.paddingTop = navBar.offsetHeight + "px";
   //                  } else {
   //                      this.istabBar = false
   //                      mainPart.style.paddingTop = "0px";
   //                  }
   //          }
		}
		
	}
	

</script>
	
<style scoped>

	.detail{position: relative;}
	.fixed{position:sticky;-webkit-transform: translateZ(0);width:100%;top:0.45rem;z-index:99;}
	.detail-main{display: flex;flex-direction: column;position: relative;}
	.moreDetail{display: flex;padding: 0 0.2rem;position: relative;}
	.detail-l{width: 1.8rem;}
	.detail-des{position: sticky;top: 1.25rem;z-index:99;}
	.detail-des li a{display: block; height: 1.2rem; font-size: 20px;background:#EAE8E8;line-height: 1.2rem;}
	.detail-mo{display: flex;justify-content: space-between;position: sticky;background-color: #E9E9E9;}
	.detail-mo a{width: 30%;height: .8rem;line-height: .8rem;font-size: 16px}
	.active{background: #FFF !important;}
</style>
