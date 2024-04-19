<template>
  <!-- main container -->
  <main>
    <!-- hero component -->
    <HeroComponent />
    <!-- container -->
    <div class="container py-5">
      <!-- row movies populars -->
      <h2 class="text-white">Most Popular Movies</h2>
      <div class="row flex-nowrap overflow-auto">
        <div class="col-12 col-md-6 col-lg-3" v-for="popular in store.most_populars" :key="popular.id" :class="{ 'd-none': popular.poster_path === null }">
          <CardComponent :title="popular.title" :overview="popular.overview" :image="popular.poster_path" :lang="popular.original_language" :flag="store.flagUrl" :size="store.flagSize" :format="store.flagFormat" :vote="popular.vote_average" />
        </div>
      </div>
      <!-- row tv populars -->
      <h2 class="text-white">Most Popular TVSeries</h2>
      <div class="row flex-nowrap overflow-auto">
        <div class="col-12 col-md-6 col-lg-3" v-for="seriespop in store.tv_populars" :key="seriespop.id" :class="{ 'd-none': seriespop.poster_path === null }">
          <CardComponent :title="seriespop.title" :overview="seriespop.overview" :image="seriespop.poster_path" :lang="seriespop.original_language" :flag="store.flagUrl" :size="store.flagSize" :format="store.flagFormat" :vote="seriespop.vote_average"/>
        </div>
      </div>
      <!-- on ari tvSeries -->
      <h2 class="text-white"><i class="fa-solid fa-tower-broadcast text-danger"></i> On Air <i class="fa-solid fa-tower-broadcast text-danger"></i></h2>
      <div class="row flex-nowrap overflow-auto">
        <div class="col-12 col-md-6 col-lg-3" v-for="onair in store.tv_on_airs" :key="onair.id"
          :class="{ 'd-none': onair.poster_path === null }">
          <CardComponent :title="onair.name" :overview="onair.overview" :image="onair.poster_path"
            :lang="onair.original_language" :flag="store.flagUrl" :size="store.flagSize" :format="store.flagFormat"
            :vote="onair.vote_average" />
        </div>
      </div>
      <!-- row -->
      <h2 class="text-white">Movies</h2>
      <div class="row flex-nowrap overflow-auto">
        <!-- col1 -->
        <div class="col-12 col-md-6 col-lg-3" v-for="movie in store.movies" :key="movie.id"
          :class="{ 'd-none': movie.poster_path === null }">
          <!-- card component -->
          <CardComponent :title="movie.title" :overview="movie.overview" :image="movie.poster_path"
            :lang="movie.original_language" :flag="store.flagUrl" :size="store.flagSize" :format="store.flagFormat"
            :vote="movie.vote_average" class="moviecard" />
        </div>
      </div>
      <!-- row -->
      <h2 class="text-white">TV Series</h2>
      <div class="row flex-nowrap overflow-auto">
        <!-- col2 -->
        <div class="col-12 col-md-6 col-lg-3" v-for="tv in store.tvs" :key="tv.id"
          :class="{ 'd-none': tv.poster_path === null }">
          <!-- card component -->
          <CardComponent :title="tv.name" :overview="tv.overview" :image="tv.poster_path" :lang="tv.original_language"
            :flag="store.flagUrl" :size="store.flagSize" :format="store.flagFormat" :vote="tv.vote_average" />
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
export default {
  name: 'HeaderComponent',
  components: {
    CardComponent,
    HeroComponent,
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

  .row {
    margin-top: 20px;
    margin-bottom: 20px;
    background-image: url(/public/images/bg-col.jpg);
  }

  ::-webkit-scrollbar {
    background-color: #c11119;
    border-radius: 20px;
    height: 15px;

    &:hover {
      background-color: #000000;

      &::-webkit-scrollbar-thumb {
        background-color: #c11119;
      }
    }
  }

  ::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 20px;

    &:hover {
      background-color: #c11119;
    }
  }

}
</style>
