<template>
    <div class="carousel">
        <div class="carousel-inner position-relative">
            <div v-for="(item, index) in carouselItems" :key="index" :class="{'active': index === activeIndex}">
                <img :src="item.image" alt="carousel image1">
                <h3 class="text-white fw-bolder">{{ item.title }}</h3>
                <p class="text-white">{{ item.description }}</p>
            </div>
        </div>
        <button @click="prevItem">Previous</button>
        <button @click="nextItem">Next</button>
    </div>
</template>

<script>
export default {
    name: 'CarouselHeroComponent',
    data() {
        return {
            carouselItems: [
                { title: 'See what\'s next', description: 'Watch anywhere. Cancel anytime', image: '/images/carousel1.png' },
                { title: 'Explore. Enjoy.', description: 'Stream unlimited movies and TV shows on your device', image: '/images/carousel2.webp' },
                { title: 'Item 3', description: 'Description 3' },
            ],
            activeIndex: 0
        };
    },
    methods: {
        prevItem() {
            this.activeIndex = (this.activeIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
        },
        nextItem() {
            this.activeIndex = (this.activeIndex + 1) % this.carouselItems.length;
        }
    }
};
</script>

<style lang="scss" scoped>
.carousel-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 400px;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        opacity: 0.8;
        box-shadow: 0 15px 15px #C11119;
    }

    h3 {
        position: absolute;
        top: 50%;
        left: 10%;
    }

    p {
        position: absolute;
        top: 60%;
        left: 10%;
        padding: 5px 30px;
    }
}

.carousel-inner > div {
    display: none;
}

.carousel-inner > div.active {
    display: block;
}
</style>