<template>
  <div class="card" @mouseenter="rotationYMouseEnter($event)" @mouseleave="rotationYMouseLeave($event)" >
    <img class="card-img-top" :src="store.imagesUrl + image" alt="Card image cap"/>
    <div class="card-body" :class="{ 'd-none': !activeBack }">
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
      activeBack: false,
    };
  },
  methods: {
    rotationYMouseEnter(event) {
      this.activeBack = true;
      gsap.to(event.currentTarget, {
        duration: 0.1,
        rotationY: "180deg",
        ease: "expo.out",
      });
    },
    rotationYMouseLeave(event) {
      this.activeBack = false;
      gsap.to(event.currentTarget, {
        duration: 0.1,
        rotationY: "0deg",
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
    
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 18rem;
  margin: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 1;
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  .card-img-top {
    width: 300px;
    height: 400px;
    object-fit: cover;
    background-color: transparent;

    img {
      width: 100%;
    }
  }

  .card-body {
    background-color: #000000;
    color: white;
    transition: transform 0.3s ease-in-out;
    transform: rotateY(180deg);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
}
</style>
