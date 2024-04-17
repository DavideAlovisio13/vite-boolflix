import { reactive } from "vue";

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/",
    imagesUrl: "http://image.tmdb.org/t/p/",
    movies: [],
    tvs: [],
    endPoint: {
        movie: "search/movie",
        tv: "search/tv",
        original_images: "original",
        w92_img: "w92",
        w154_img: "w154",
        w185_img: "w185",
        w342_img: "w342",
        w500_img: "w500",
        w780_img: "w780",
    },
    options: {
        params: {
            api_key: "1e77597204f226cd2a7c520c769c4f45",
            query: "a",
        }
    },
    

})