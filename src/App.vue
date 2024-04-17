 <!-- 1e77597204f226cd2a7c520c769c4f45 -->
 <!-- eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTc3NTk3MjA0ZjIyNmNkMmE3YzUyMGM3NjljNGY0NSIsInN1YiI6IjY2MWY4MDBmOTY2NzBlMDE3ZGRhMWFkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ozDUt2IbmeEW_QaE3afydKfwl56yHR9gm6Uy8iH-dZM -->
<template>
  <HeaderComponent />
</template>

<script>
import axios from 'axios'
import { store } from './store/store.js';
import HeaderComponent from './components/HeaderComponent.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getMovies() {
        axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options).then((response) => {
          this.store.movies = response.data.results
        })
      },
      getTVSeries() {
        axios.get(this.store.apiUrl + this.store.endPoint.tv, this.store.options).then((resp) => {
          this.store.tvs = resp.data.results
        })
      }
    },
    created() {
      this.getMovies();
      this.getTVSeries();
    },
    mounted() {
      console.log(this.store.movies)
      console.log(this.store.tvs)
    }
  }
</script>

<style lang="scss" scoped>

</style>