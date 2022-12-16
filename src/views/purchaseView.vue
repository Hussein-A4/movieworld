<script setup>
import { useStore } from '../store/index.js'
import { storeToRefs } from 'pinia'
import { ref } from 'vue';
import modal from "../components/siteModal.vue"

const main = useStore()

const showModal = ref(false);
const selectedId = ref(0);

var moviesData = []
var cartData = []

// extract specific store properties
const { movies, getMovies } = storeToRefs(main)

main.getMovies()
moviesData = movies
console.log(moviesData)

const openModal = (id) => {
    showModal.value = true;
    selectedId.value = id;
    //check if exists to avoid duplicates
}

const closeModal = () => {
    showModal.value = false;
}
</script>

<template>
    <h1>Purchase</h1>
    <RouterLink to="/cart" custom v-slot="{ navigate }">
            <button @click="navigate" role="link" class="purchase">Purchase</button>
    </RouterLink>
    <div class="images">
    <img v-for="movie in moviesData" :src="movie.poster" @click="openModal(movie.id)"/>
    </div>
    <div class="siteModal">
        <modal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
    </div>
</template>

<style scoped>
img{
    aspect-ratio: 2/3;
    width: 200px;
    gap: 1rem;
}

.images{
    align-items: center;
}

.purchase{
    float: right;
    right: 10px;
}
</style>