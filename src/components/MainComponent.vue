<template>
  <!-- main container -->
  <main>
    <!-- hero component -->
    <HeroComponent />
    <!-- container -->
    <div class="container">
      <!-- row -->
      <div class="row">
        <h2>Movies</h2>
        <!-- col1 -->
        <div class="col-12 col-md-6 col-lg-3" v-for="movie in store.movies" :key="movie.id" :class="{ 'd-none': movie.poster_path === null }">
          <!-- card component -->
          <CardComponent :title="movie.title" :overview="movie.overview" :image="movie.poster_path" :lang="movie.original_language" :flag="store.flagUrl" :size="store.flagSize" :format="store.flagFormat" :vote="movie.vote_average" class="moviecard"/>
        </div>
      </div>
      <!-- row -->
      <div class="row">
        <h2>TV Series</h2>
        <!-- col2 -->
        <div class="col-12 col-md-6 col-lg-3" v-for="tv in store.tvs" :key="tv.id" :class="{ 'd-none': tv.poster_path === null }">
          <!-- card component -->
          <CardComponent :title="tv.name" :overview="tv.overview" :image="tv.poster_path" :lang="tv.original_language" :flag="store.flagUrl" :size="store.flagSize" :format="store.flagFormat" :vote="tv.vote_average"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import gsap from "gsap";
import { store } from "../store/store.js";
import CardComponent from './CardComponent.vue';
import HeroComponent from './HeroComponent.vue';
import { Agile } from "vue-agile";
    export default {
        name: 'HeaderComponent',
        components: {
            CardComponent,
            HeroComponent,
            Agile
        },
        data() {
            return {
                store,
            }
        },
        methods: {

        },
        mounted() {
            
        }
    }
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  background-color: #000000;
}
</style>
