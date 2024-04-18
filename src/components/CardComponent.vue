<template>
  <div class="card" @mouseenter="scaleUpMouseEnter($event)" @mouseleave="scaleUpMouseLeave($event)">
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
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    scaleUpMouseEnter(event) {
      gsap.to(event.currentTarget, {
        duration: 0.1,
        scale: 1.05,
        ease: "expo.out"
      })
    },
    scaleUpMouseLeave(event) {
      gsap.to(event.currentTarget, {
        duration: 0.1,
        scale: 1,
        ease: "expo.out"
      })
    }
  },
  mounted() {
    gsap.to(".card", {
      duration: 0.3,
      opacity: 1,
      scale: 1,
      stagger: 0.1,
      ease: "power1.inOut"
    })
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
  opacity: 0;
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
