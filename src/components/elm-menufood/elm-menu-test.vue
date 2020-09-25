<template>
  <div id="app">
	<elm-menu-food :data="mFood"></elm-menu-food>
	<!-- <ElmMenuFood  :data="{url:'qqq',menu:'aa'}" @moreFoods="moreFoods"/> -->
  </div>
</template>

<script>
import ElmMenuFood from '../components/elm-menufood/elm-menufood.vue'
export default {
  name: 'App',

  data(){
	  return{
		list:[],
		mFood:{}
	  }
  },
  mounted() {
  	setTimeout(()=>{
		this.list=[
				{_id:1,image:'/images/img_1.jpg',title:'xxx1',sub_title:'xxxx2'},
				{_id:2,image:'/images/img_2.jpg',title:'xxx2',sub_title:'xxxx2'},
				{_id:3,image:'/images/img_3.jpg',title:'xxx3',sub_title:'xxxx2'},
				{_id:4,image:'/images/img_1.jpg',title:'xxx4',sub_title:'xxxx2'},
		]
	})
  },
  components: {
	ElmMenuFood
  },
  methods:{
	moreFoods(ev){
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
