<template>
	
	<div class="content">
	  <elm-nav bg-color="transparent" :border-width="0" arrow="gray"></elm-nav>
	  <h1></h1>
	  <div class="login-box">
	    <p class="lsolid"></p>
	    <div class="login">
	      <router-link to="/login">登录</router-link>
	      <span></span>
	      <router-link to="/reg">注册</router-link>
	    </div>
	    <p class="rsolid"></p>
	  </div>
	  <ul>
		 <li>
			<elm-input v-model="username" placeholder="帐号" ></elm-input>
		</li>
		<li>
			<elm-input v-model="password"  placeholder="密码" type="password"></elm-input>
		</li>
	    {{mess}}
	  </ul>
	  <div class="footbox">
	     <elm-button bg-color="#02B6FD" @click="login" text="登 录" style="margin-top:.23rem">登陆</elm-button>
	    <a href="javascript:;" class="tishi">忘记密码？</a>
	  </div>
	</div>
</template>

<script>
	import ElmNav from '../components/elm-nav/elm-nav.vue'
	import ElmButton from '../components/elm-button/elm-button.vue'
	import ElmInput from '../components/elm-input/elm-input.vue'
	export default{
		name:'login',
		props:{},
		data(){
			return{
				username:'',
				password:'',
				mess:''
			}
		},
		components:{
			ElmNav,
			ElmButton,
			ElmInput
		},
		mounted(){},
		updated() {
			
		},
		methods:{
			login(){
				this.$axios({
					url:'http://47.116.70.86:3333/api/login',
					method:'post',
					data:{
						username:this.username,
						password:this.password
					}
				}).then(
				res => {
					// console.log(res)
				  if(res.data.err===0){
				    //种local  跳转到之前
				    window.localStorage.setItem('user',JSON.stringify(res.data));
				    if(!this.$route.query.p){
				     this.$router.push('/user')
				    }else{
				     this.$router.push(this.$route.query.p)
				    }
				  }else{
				    this.mess = res.data.msg
				  }
				}
				)
			}
		}
		
	}
</script>
	
<style scoped>
	.content{max-width:6.4rem; margin:0 auto;}
	.content .fhbtn{ padding-top:0.27rem;}
	.content .fhbtn a{ display:block;width:0.23rem;height:0.25rem; background:url(../assets/img/history1.png) no-repeat 0 0; background-size:100%; margin-left:0.3rem;}
	.content h1{width:2.18rem;height:1rem; background:url(../assets/img/logo.png) no-repeat 0 0; background-size:100%; margin:0 auto; margin-top:0.82rem;}
	.content .login{width:2.0rem;height:0.38rem; margin:0 auto; margin-top:0.35rem;}
	.login a{width:0.97rem;height:0.38rem; font-size:0.35rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
	.login span{ float:left;height:0.38rem; border-left:1px solid #4c4f50;}
	.content .login-box{ position:relative;}
	.content .login-box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:0.1rem;}
	.content .login-box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:0.1rem;}
	.content ul{width:5.78rem;height:1.92rem; border:1px solid #e5e7e8; background:#fff; margin:0 auto; margin-top:0.68rem;}
	.content ul li{height:0.95rem; position:relative;}
	.content ul li.lifirst{border-bottom:1px solid #e5e7e8;} 
	.content ul li input{ padding-left:1.24rem;width:4.54rem;height:100%; font-size:0.4rem;margin-bottom:.23rem;}
	.content ul li span{width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0; border-right:1px solid #676868; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;}
	.content .footbox{width:4.65rem;height:0.65rem;margin:0 auto; }
	.content .login-btn{width:4.65rem;height:0.65rem; background:#4c4f50; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:0.62rem; font-size:0.28rem;}
	.content .tishi{width:1.4rem; font-size:0.25rem; margin-top:0.28rem; display:block;}
	/* .elm-input{margin-bottom: .25rem;} */
</style>
