<template>
	<div class="elm-input">
	    <input 
		:type="type"
		:value="value"
		@input="$emit('input',$event.target.value)"
		:placeholder="placeholder"
		/>
		<span v-if="label">{{label}}</span>
	</div>
</template>

<script>
	export default{
		name:"elm-input",
		props:{
			type:{
				type:String,
				default:'text'
			},
			value:{
				type:String,
				default:''
			},
			placeholder:{
				type:String,
				default:''
			},
			label:{
				type:String,
				default:''	
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
	.elm-input{
		border-bottom: 1px solid #e5e7e8;
		position: relative;
		height: 0.95rem;
		
	}
	.elm-input input{
		width: 4.54rem;height: 100%;font-size: 0.28rem;
	}
	
	
</style>
