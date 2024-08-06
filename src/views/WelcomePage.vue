<template>
  <div>
    <h2>Welcome Page</h2>
    <p>Welcome, Admin!</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit('logout');
      this.$router.push('/login'); // 退出登录后跳转到登录页面
    }
  }
};
</script>
