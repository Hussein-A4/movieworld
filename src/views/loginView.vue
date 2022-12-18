<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");
const error = ref(false);

const login = () => {
  if (username.value === "tmdb" && password.value === "movies") {
    router.push("./purchase");
  } else {
    error.value = true;
  }
};
</script>

<template>
  <div class="home-container">
    <h3>Login</h3>
    <form @submit.prevent="login()">
      <input class="login" type="text" placeholder="Username" v-model="username" />
      <input class="login" type="password" placeholder="Password" v-model="password" />
      <input class="login" type="submit" value="Login" />
    </form>
    <div v-if="error">
      <p>Incorrect Username/Password!</p>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 3rem;
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

.login {
  background-color: #A9D2D5;
  width: 300px;
  color: white;
  font-size: 20px;
  text-align: center;
}

.login::placeholder {
  color: pink;
}
</style>