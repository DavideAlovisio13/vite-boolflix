<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3" v-for="movie in store.movies" :key="movie.id">
                    <CardComponent :title="movie.title" :overview="movie.overview" :image="movie.poster_path"/>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { store } from "../store/store.js";
import CardComponent from './CardComponent.vue';
    export default {
        name: 'HeaderComponent',
        components: {
            CardComponent
        },
        data() {
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
main {
    padding: 20px;
    width: 100%;
    height: calc(100% - 80px);
}
</style>