<script setup>
import { ref } from "vue";
import { auth } from "../firebase/index";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
const username = ref("");
const email = ref("");
const password1 = ref("");
const password2 = ref("");
const registerUserByEmail = async () => {
  if (password1.value !== password2.value) {
    console.log("Password issue");
    return;
  }
  try {
    await createUserWithEmailAndPassword(auth, email.value, password1.value);
  } catch (error) {
    console.log(error);
  }
};
const registerUserByGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const user = await signInWithPopup(auth, provider);
  console.log(user);
};
</script>

<template>
  <div>
    <h1>Login</h1>
    <h2>Register by Google</h2>
    <button @click="registerUserByGoogle">Google</button>
    <hr />
    <h2>Register by email</h2>
    <form @submit.prevent="registerUserByEmail()">
      <input v-model="username" type="text" placeholder="username" /> <br />
      <input v-model="email" type="email" placeholder="email" /> <br />
      <input v-model="password1" type="password" placeholder="password" /> <br />
      <input v-model="password2" type="password" placeholder="re-enter password" /> <br />
      <RouterLink to="/purchase" custom v-slot="{ navigate }">
          <button @click="navigate" role="link" class="register">Register</button>
        </RouterLink>
    </form>
  </div>
</template>

<style scoped>

</style>