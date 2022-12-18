<script setup>
import { useStore } from '../store/index.js'

const store = useStore();
</script>

<template>
    <h1 class="cart-title">Your Shopping Cart</h1>
    <div class="cart" v-if="store.cartData.length">
        <div v-for="movie in store.cartData" class="cart-row">
            <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.poster_path" />
            <h1>{{ movie.title }}</h1>
        </div>
    </div>
</template>

<style scoped>
.cart-row img {
    width: 200px;
    aspect-ratio: 2/3;
    
}

.cart {
    width: 66%;
    background-color: #A9D2D5;
    margin: 20px auto;
    border: 3px solid #947EB0;
}

.cart-row:first-of-type {
    border-top: none;
}

.cart-row {
    display: flex;
    align-items: center;
    border-top: 3px solid #947EB0;
}

.cart-row h1 {
    flex: 1;
    text-align: center;
}

.cart-title {
    text-align: center;
    margin-top: 20px;
}

</style>