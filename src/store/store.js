import { reactive } from "vue";

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/",
    imagesUrl: "http://image.tmdb.org/t/p/original/",
    flagUrl: "https://flagsapi.com/",
    flagSize: "/shiny/64.png",
    movies: [],
    tvs: [],
    endPoint: {
        movie: "search/movie",
        tv: "search/tv",
    },
    options: {
        params: {
            api_key: "1e77597204f226cd2a7c520c769c4f45",
            query: "",
        }
    },
})