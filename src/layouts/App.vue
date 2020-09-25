<template>
  <div id="app">
	<!-- <elm-menu-food :data="mFood"></elm-menu-food> -->
	<!-- <ElmMenuFood  :data="{url:'qqq',menu:'aa'}" @moreFoods="moreFoods"/> -->
	<!-- <Home></Home> -->
	<Loading v-show="$root.bLoading"></Loading>
		
		<router-view></router-view>
	</keep-alive>
	
	<Footer v-show="$root.bFoot" v-if="$root.bLoading===false"/>
  </div>
</template>

<script>
// import Home from '../pages/home.vue'
import Footer from './Footer.vue'
import Loading from '../components/elm-loading.vue'

export default {
  name: 'App',

  data(){
	  return{
	// list:[]
	  }
  },
  mounted() {},
  components: {
	Footer,Loading
	},
  watch:{
	$route:{
	 handler(newVal){
	let path = newVal.path;
        if(/home|/.test(path)){
          this.$root.bNav=true;
          this.$root.bFoot=true;
        }
		if(/reg|login/.test(path)){
			this.$root.bNav=true;
			this.$root.bFoot=false;
		}
		if(/detail/.test(path)){
			this.$root.bNav=false;
			this.$root.bFoot=false;
		}	
		},
		  immediate:true
	  }
  },
  methods:{

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
