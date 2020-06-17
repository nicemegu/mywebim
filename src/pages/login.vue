<template>
  <div class="loginOut">
    <span>用户名：</span>
    <input type="text" v-model="username">
    <span>密码：</span>
    <input type="text" v-model="password">
    <span>
      昵称：
    </span>
    <input type="text" v-model="nickname">
    <button @click="toRegister">注册</button>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: 'login',
  data () {
    return {
     
         username:'',
        password:'',
        nickname:''

       
    }
  },
  methods: {
    ...mapActions(['onRegister']),
    register(){
      const {username,password,nickname} =this.user
      console.log(username,password,nickname);
      
    },
    toRegister(){
      console.log(this.username);
      
			this.onRegister({
				username: this.username.toLowerCase(),
				password: this.password,
				nickname: this.nickname.toLowerCase(),
			});
		},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.loginOut{
  width: 100px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 80px;
}


</style>
