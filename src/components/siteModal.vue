<script setup>

import axios from "axios"
import { ref } from "vue"
import { useStore } from '../store'
const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);

const movies = ref(null);
const movieData = ref(null);

const store = useStore();

const getMovie = async () => {
  movieData.value = (
    await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
      params: {
        api_key: "45f0db8e20f87e3e431aa1750076bb74",
        append_to_response: "videos",
      },
    })
  )
};


getMovie();
// await store.getMovies();

console.log(movieData.data);

let id = props.id

</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container" v-if="movieData">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <div class="grid-container">
          <div class="grid-item">
            <h1>{{ movieData.data.title }}</h1>
            <h1>{{ movieData.data.release_date }}</h1>
            <button class="purchase-btn">Purchase</button>
            <p>{{ movieData.data.overview }}</p>
          </div> 
            <img id="image" :src="`https://image.tmdb.org/t/p/w500${movieData.data.poster_path}`" alt="no image" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #0000008c;
  z-index: 3;
}

.modal-outer-container .modal-inner-container {
  background-color: #abcbeb;
  width: clamp(280px, 100%, 800px);
  height: 400px;
  position: relative;
  border: 10px;
}

.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #1F2123;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}

#image{
  width: 200px;
  aspect-ratio: 2/3;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  background-color: #2196F3;
  padding: 10px;
}

p{
  font-size: larger;
}

.purchase-btn{
  text-align: center;
  background-color: rgb(0, 247, 255);
  width: 100px;
  height: 50px;
  font-size: 15px;
  flex: auto;
  padding: 10px;
  margin: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 15px;
  text-align: center;
}
</style>
