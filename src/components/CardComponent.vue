<template>
  <div class="card" @mouseenter="rotationYMouseEnter($event)" @mouseleave="rotationYMouseLeave($event)" >
    <img class="card-img-top" :src="store.imagesUrl + image" alt="Card image cap"/>
    <div class="card-body" :class="{ 'd-none': !activeBack }">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ overview }}</p>
      <p class="card-text d-inline"><strong>language:</strong> {{ lang.toUpperCase() }}</p>
      <span class="flag px-2"
        ><img :src="flag + lang.toUpperCase() + size" :alt="lang" style="width: 30px" />
      </span>
      <div class="star">
        <span><strong>Rate:</strong> </span>
        <span v-for="i in 5" :key="i" :class="{ 'd-none': i >= vote, 'd-inline': i <= vote }"> &#11088;</span>
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
  border: 1px solid #000000;

  &::-webkit-scrollbar {
    display: none;
  }

  .card-img-top {
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
    min-height: 430px;
    text-align: center;
    padding: 1rem;
  }
}
</style>
