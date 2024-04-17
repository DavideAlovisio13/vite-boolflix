<template>
    <div class="card">
        <img class="card-img-top" :src="store.imagesUrl + image" alt="Card image cap" >
        <div class="card-body d-none">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ overview }}</p>
        </div>
    </div>
</template>

<script>
import { store } from '../store/store.js';
export default {
    name: 'CardComponent',
    props: {
        title: String,
        overview: String,
        image: String
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style scoped>
.card {
    width: 18rem;
    margin: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

.card:hover {
    transform: scale(1.05);
}

.card-img-top {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
}

.card-body {
    padding: 1rem;
}

.card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.card-text {
    font-size: 1rem;
    color: #555;
}
</style>