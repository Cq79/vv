<template>
  <div id="app">
	<elm-toolbar></elm-toolbar>
  </div>
</template>

<script>
import ElmToolbar from '../components/elm-toolbar/elm-toolbar.vue'

export default {
  name: 'App',
  components: {
   ElmToolbar
  },
  data(){
	  return{

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
