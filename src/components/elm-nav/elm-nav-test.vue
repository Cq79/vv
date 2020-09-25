<template>
  <div id="app">
	<elm-nav bgColor="tarnsparent" :borderWidth="0" :arrow='xx'/>
	
  </div>
</template>

<script>
import ElmNav from '../components/elm-nav/elm-nav.vue'
export default {
  name: 'App',

  data(){
	  return{
		  
		 xx:'gray',
		list:[]
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
   ElmNav
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
