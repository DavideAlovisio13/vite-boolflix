<template>
    <div class="carousel">
        <div class="carousel-inner position-relative">
            <div v-for="(item, index) in carouselItems" :key="index" :class="{'active': index === activeIndex}">
                <img :src="item.image" alt="carousel image1">
                <h3 class="text-white fw-bolder">{{ item.title }}</h3>
                <p class="text-danger">{{ item.description }}</p>
            </div>
        </div>
        <button @click="prevItem" class="btn1"><i class="fa-solid fa-circle-left w-100 h-100"></i></button>
        <button @click="nextItem" class="btn2"><i class="fa-solid fa-circle-right"></i></button>
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
                { title: 'Best price. Best quality', description: 'Spend a little and enjoy best quality videos', image: '/images/carousel3.png' },
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
    height: 400px;
    width: 500px;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        opacity: 0.7;
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
        font-size: 1.2rem;
        background-color: black;
    }
}

.carousel-inner > div {
    display: none;
}

.carousel-inner > div.active {
    display: block;
}

button {
    position: absolute;
    background-color: transparent;
    border-radius: 50%;
    font-size: 2rem;
    cursor: pointer;
    top: 50%;
    border: none;
    box-shadow:0 3px 15px #C11119;
    color: white;

    i {
        padding: 10px;
    }
}

.btn1 {
    transform: translateY(-50%);
    left: -30px;
}

.btn2 {
    transform: translateY(-50%);
    right: -30px;
    
}
</style>