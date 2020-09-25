<template>
  <div id="app">
  <elm-button bg-color="#399" @xx="show" text="登 陆">登陆</elm-button>
  <elm-button bg-color="#399" @xx="show" text="注 册">登陆</elm-button>

  </div>
</template>

<script>
import ElmButton from '../components/elm-button/elm-button.vue'

export default {
  name: 'App',
  components: {
   ElmButton
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
