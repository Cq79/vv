<template>
	<div class="elm-menufood" @click="$emit('moreFoods',$event)">
		<div class="mImg">
			<img :src="data.detail.auth_icon" alt="">
		</div>
		<h4>{{data.detail.auth}}</h4>
	</div>
</template>

<script>
	export default{
		name:"elm-menufood",
		props:{
			data:{
				type:Object,
				required:true
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
	.elm-menufood{ 
		display: flex;
		flex-direction: column;
		margin-bottom: 0.2rem;
	}
	.elm-menufood div{
		/* width: 100%; */
		width:1rem;
		/* margin-bottom: 0.2rem; */
	}
	.elm-menufood div img{
		width: 100%;
	}
	.elm-menufood h4{
		margin-top: 0.2rem;
		font-size: 20px;
	}
</style>
