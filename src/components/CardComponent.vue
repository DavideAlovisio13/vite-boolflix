<template>
  <div class="card">
    <img
      class="card-img-top"
      :src="store.imagesUrl + image"
      alt="Card image cap"
    />
    <div class="card-body d-none">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ overview }}</p>
      <p class="card-text">{{ lang.toUpperCase() }}</p>
      <span><img :src="flag + lang.toUpperCase() + size" :alt="lang">
      </span>
    </div>
  </div>
</template>

<script>
import { store } from "../store/store.js";
import { hasFlag } from "country-flag-icons";
export default {
  name: "CardComponent",
  props: {
    title: String,
    overview: String,
    image: String,
    lang: String,
    flag: String,
    size: String,
    format: String,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>

.card {
  width: 18rem;
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  .card-img-top {
    width: 300px;
    height: 400px;
    object-fit: cover;
  }
}

</style>
