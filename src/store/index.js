import { defineStore } from 'pinia'
import axios from 'axios';

export const useStore = defineStore('store', {
  state: () => {
    return {
      movies: [],
      cartData: [],
    }
  },
  actions: {
    async getMovies() {
      let data = (await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
        params: {
          api_key: "ad891932e4907c23fc8a99002a4b5d3f",
        }
      })).data.results;
      
      this.movies = data.map((movie) => {
        return {
          id: movie.id,
          poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }
      });
    },
    addToCart(movieData) {
      if(!this.cartData.some(arrayItem => arrayItem.id == movieData.id)) {
        this.cartData.push(movieData);
      }
    }
  }
});