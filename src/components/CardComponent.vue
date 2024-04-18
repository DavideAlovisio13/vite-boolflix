<template>
  <div
    class="card"
    @mouseenter="scaleUpMouseEnter($event)"
    @mouseleave="scaleUpMouseLeave($event)"
  >
    <img
      class="card-img-top"
      :src="store.imagesUrl + image"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ overview }}</p>
      <p class="card-text">{{ lang.toUpperCase() }}</p>
      <span class="flag"
        ><img :src="flag + lang.toUpperCase() + size" :alt="lang" />
      </span>
      <div class="star">
        <span v-for="i in 5" :key="i" :class="{ 'd-none': i >= vote, 'd-block ': i <= vote }">&#11088;</span>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { store } from "../store/store.js";
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
    vote: Number,
  },
  data() {
    return {
      store,
      stars: 0,
    };
  },
  methods: {
    scaleUpMouseEnter(event) {
      gsap.to(event.currentTarget, {
        duration: 0.1,
        scale: 1.05,
        ease: "expo.out",
      });
    },
    scaleUpMouseLeave(event) {
      gsap.to(event.currentTarget, {
        duration: 0.1,
        scale: 1,
        ease: "expo.out",
      });
    },
  },
  computed: {
    showStar() {
      this.stars = Math.round(this.vote / 2);
    },
  },
  created() {
    gsap.to(".card", {
      duration: 0.3,
      opacity: 1,
      scale: 1,
      stagger: 0.1,
      ease: "power1.inOut",
    });
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 18rem;
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: transform 0.3s ease-in-out;

  .card-img-top {
    width: 300px;
    height: 400px;
    object-fit: cover;
  }
}
</style>
