<template>
	<div class="elm-button">
	   <button class="login-btn"
	   :style="{background:bgColor}"
	   @click="$emit('click',$event)"
	   > 
	   <template v-if="text !== '按 钮'">
		   {{text}}
	   </template>
	   <slot v-if="text === '按 钮'">按 钮</slot>
	   </button>
	</div>
</template>

<script>
	export default{
		name:"elm-button",
		props:{
			bgColor:{
				type:String,
				default:'skyBlue'
			},
			text:{
				type:String,
				default:'按钮'
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
	.login-btn{ 
		width: 4.65rem;
		height: 0.65rem;
		text-align: center;
		color: #fff;
		line-height: 0.65rem;
		border-radius: 0.5rem;
		display: block;
		font-size: 0.28rem;
		border: none;
		outline: none;
		
	}
</style>
