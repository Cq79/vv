<template>
	<div class="foot-btn">
	   <ul class="foot-con">
		  <router-link class="home" to="/home" tag="li" active-class="active">
				   <i class="iconfont icon-shouye"></i>
				   <span>首页</span>
		  </router-link>
		  <router-link class="detail" to="/shopcar" tag="li" active-class="active">
				   <i class="iconfont icon-search"></i>
				   <span>详情</span>
		  </router-link>
		  <router-link  to="/lists" tag="li" active-class="active">
				 <i class="iconfont icon-wodedingdan"></i>
				 <span>订单</span>
		  </router-link> 
		  <router-link  to="/user" tag="li" active-class="active">
				   <i class="iconfont icon-wodejuhuasuan"></i>
				   <span>用户</span>
		  </router-link>	   
	  </ul>
	</div>
</template>

<script>
	export default{
		name:"foot-btn",
		props:{},
		data(){
			return{
				
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
.foot-btn{width:100%;height:0.8rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
.foot-btn .foot-con{width:100%; margin:0 auto;display: flex;height: 100%;justify-content: center;}
.foot-btn .foot-con li{width: 25%;height: 100%;}
.foot-btn .foot-con li a{ display:block; width:100%;height:100%;}
.foot-btn ul li{display: flex;font-size: 16px;flex-direction: column; background:url() no-repeat 50% 0; background-size:contain;}
 i{font-size: 24px}
/* .foot-btn ul .write{ background:url(../assets/img/write.png) no-repeat 50% 0; background-size:contain}
.foot-btn ul .my{background:url(../assets/img/my.png) no-repeat 50% 0;background-size:contain; } */
</style>
