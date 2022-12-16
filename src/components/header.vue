<script setup>
</script>

<template>
  <div class="main">
    <div class="header">
        <h1>Welcome To MovieWorld</h1>
        <RouterLink to="/login" custom v-slot="{ navigate }">
            <button @click="navigate" role="link" class="sign_in">Login</button>
        </RouterLink>
        <img src="../assets/Movieworld.png" class="centuryImg" />
    </div>
  </div>
</template>

<style scoped>
h1{
  color: rgb(22, 32, 59);
  text-align: center;
  padding: 20px;
}
.header{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.sign_in{
  text-align: center;
  background-color: chartreuse;
  /* align-content: center; */
  width: 100px;
  height: 50px;
  font-size: 15px;
  flex: auto;
  padding: 10px;
}

.centuryImg{
  height: 100%;
  width: 100%;
}

</style>