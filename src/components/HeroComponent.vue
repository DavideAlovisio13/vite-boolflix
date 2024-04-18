<template>
    <div id="hero">
        <img src="/public/images/IT-it-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="">
    </div>
</template>

<script>
    export default {
        name: 'HeroComponent',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
#hero {
    width: 100%;
    height: 500px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>