<template>
  <div>
<!--    <el-form :model="loginData" status-icon :rules="rules" ref="loginData" label-width="100px" class="demo-ruleForm">-->
<!--      <el-form-item label="username" prop="age">-->
<!--        <el-input v-model.number="loginData.username"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="password" prop="pass">-->
<!--        <el-input type="password" v-model="loginData.password" ></el-input>-->
<!--      </el-form-item>-->


<!--      <el-form-item>-->
<!--        <el-button type="primary" @click="login">Login</el-button>-->
<!--      </el-form-item>-->
<!--    </el-form>-->


    <h2>Login Page</h2>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username">
      <input type="password" v-model="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
        username: '',
        password: ''
      // loginData: {
      //   username: '',
      //   password: ''
      // }

    };
  },
  methods: {
    login() {
      this.$store.dispatch('login', {username: this.username, password: this.password})
          .then(success => {
            if (success) {
              this.$router.push('/welcome'); // 登录成功后跳转到欢迎页面
            } else {
              alert('Login failed. Please check your credentials.');
            }
          });
    }
  }
};
</script>
