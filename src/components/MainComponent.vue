<template>
  <main>
    <div class="container">
      <div class="row">
        <h2>Movies</h2>
        <div
          class="col-12 col-md-6 col-lg-3"
          v-for="movie in store.movies"
          :key="movie.id"
          :class="{ 'd-none': movie.poster_path === null }"
        >
          <CardComponent
            :title="movie.title"
            :overview="movie.overview"
            :image="movie.poster_path"
            :lang="movie.original_language"
            :flag="store.flagUrl"
            :size="store.flagSize"
            :format="store.flagFormat"
          />
        </div>
      </div>
      <div class="row">
        <h2>TV Series</h2>
        <div
          class="col-12 col-md-6 col-lg-3"
          v-for="tv in store.tvs"
          :key="tv.id"
          :class="{ 'd-none': tv.poster_path === null }"
        >
          <CardComponent
            :title="tv.name"
            :overview="tv.overview"
            :image="tv.poster_path"
            :lang="tv.original_language"
            :flag="store.flagUrl"
            :size="store.flagSize"
            :format="store.flagFormat"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { store } from "../store/store.js";
import CardComponent from './CardComponent.vue';
    export default {
        name: 'HeaderComponent',
        components: {
            CardComponent
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
  padding: 20px;
  width: 100%;
}
</style>
