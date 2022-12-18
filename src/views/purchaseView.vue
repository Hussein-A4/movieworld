<script setup>
import { useStore } from '../store/index.js'
import { storeToRefs } from 'pinia'
import { ref } from 'vue';
import modal from "../components/siteModal.vue"

const main = useStore()

const showModal = ref(false);
const selectedId = ref(0);

var moviesData = []

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
    <div class="top">
        <h1 class="purchase">Purchase</h1>
        <RouterLink to="/cart" custom v-slot="{ navigate }">
            <button @click="navigate" role="link" class="cart"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></button>
        </RouterLink>
    </div>
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
}

.images{
    align-items: center;
    justify-content: center;
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
}

.cart{
    font-size: 30px;
    float: right;
    margin-right: 15px;
    background: none;
    border: none;
    cursor: pointer;
}

.purchase {
    float: left;
    margin-left: 15px;
}

.top {
    margin-top: 20px;
}
</style>