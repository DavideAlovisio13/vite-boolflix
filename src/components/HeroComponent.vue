<template>
    <div id="hero">
        <div class="sheldon">
            <img src="/images/sheldon-1a29d9f7807771f061c5a3799a61ed2f0a84505553c70fc99719df02335d9746.png" alt="">
        </div>
        <div class="main-title">
            <h1 class="text-white">Find your next favorite movie</h1>
        </div>
        <CarouselHeroComponent class="carousel"/>
    </div>
</template>

<script>
import CarouselHeroComponent from './CarouselHeroComponent.vue';
    export default {
        name: 'HeroComponent',
        components: {
            CarouselHeroComponent,
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
#hero {
    width: 100%;
    height: 800px;
    background-image: url("/images/IT-it-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;

    .sheldon {
        width: 450px;
        align-self: flex-end;
        margin: 100px 300px;
        position: absolute;
        z-index: 0;

        img {
            width: 100%;
            object-fit: cover;
            opacity: 0.9;

        }
    }

    .main-title {
        align-self: center;
        margin: 120px 400px;
        position: absolute;
        z-index: 1;


        h1 {
            font-size: 5rem;
            color: white;
            font-weight: 900;
        }

    }

    .carousel {
        align-self: flex-end;
        margin: 20px 1200px;
        position: absolute;
        z-index: 1;

    }
}
</style>