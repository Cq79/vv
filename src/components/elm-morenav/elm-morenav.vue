<template>
	<div class="elm-morenav">	
	    <a href="javascript:void(0)">综合排序</a>
	    <a href="javascript:void(0)">距离最近</a>
	    <a href="javascript:void(0)">销量最高</a>
	    <a href="javascript:void(0)">筛选</a>
	</div>
</template>

<script>
	export default{
		name:"elm-morenav",
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
	
<style>
	.elm-morenav{
		width: 100%;
		height: 0.4rem;
		display: flex;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
	.elm-morenav a{
	width: 25%;
    font-size: 18px;
	font-weight: bold;
    text-align: center;
    line-height: 0.4rem;
    color: #666666;
    background: #fff;
	}
</style>
