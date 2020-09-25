<template>
  <div id="app">
 <elm-input v-model="ipt" placeholder="手机号" ></elm-input>
 <elm-input v-model="ipt2"  placeholder="验证码" ></elm-input>
  </div>
</template>

<script>
import ElmInput from '../components/elm-input/elm-input.vue'

export default {
  name: 'App',
  components: {
   ElmInput
  },
  data(){
	  return{
		  ipt:'',
		  ipt2:''
	  }
  },
  methods:{
	  show(ev){
		  console.log(ev)
	  }
  }
}
</script>

<style>
	   
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
