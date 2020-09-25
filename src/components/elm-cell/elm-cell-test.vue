<template>
  <div id="app">
	<elm-cell 
	:data="{_id:3,title:'xx',des:'oo'}"
	:index="0"
	collection="detail"
	isAdd
	@addItem="show"
	>
	</elm-cell>
	
  </div>
</template>

<script>
import ElmCell from '../components/elm-cell/elm-cell.vue'
export default {
  name: 'App',

  data(){
	  return{
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
   ElmCell
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
