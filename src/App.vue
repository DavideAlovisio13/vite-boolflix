<!-- 1e77597204f226cd2a7c520c769c4f45 -->
<!-- eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTc3NTk3MjA0ZjIyNmNkMmE3YzUyMGM3NjljNGY0NSIsInN1YiI6IjY2MWY4MDBmOTY2NzBlMDE3ZGRhMWFkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ozDUt2IbmeEW_QaE3afydKfwl56yHR9gm6Uy8iH-dZM -->
<template>
  <HeaderComponent @fetchData="fetchData" />
  <MainComponent />
</template>

<script>
import axios from "axios";
import { store } from "./store/store.js";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getMovies() {
      axios
        .get(this.store.apiUrl + this.store.endPoint.movie, this.store.options)
        .then((response) => {
          this.store.movies = response.data.results;
          console.log(this.store.movies);
        });
    },
    getTVSeries() {
      axios
        .get(this.store.apiUrl + this.store.endPoint.tv, this.store.options)
        .then((resp) => {
          this.store.tvs = resp.data.results;
          console.log(this.store.tvs);
        });
    },
    fetchData() {
      this.getMovies();
      this.getTVSeries();
    },
    getMostPopular() {
      axios.get(this.store.apiUrl + this.store.endPoint.most_popular, this.store.optionsgen)
        .then((re) => {
          this.store.most_populars = re.data.results;
          console.log(this.store.popular);
        });
    },
    getMostPopularTv() {
      axios.get(this.store.apiUrl + this.store.endPoint.tv_popular, this.store.optionsgen)
        .then((r) => {
          this.store.tv_populars = r.data.results;
          console.log(this.store.popular_tv);
        });
    },
    getOnAirTV() {
      axios.get(this.store.apiUrl + this.store.endPoint.tv_on_air, this.store.optionsgen)
      .then((ans) => {
        this.store.tv_on_airs = ans.data.results;
      })
    }
  },
  created() {
    this.getMostPopular();
    this.getMostPopularTv();
    this.getOnAirTV();
  }
}
</script>

<style lang="scss" scoped></style>
