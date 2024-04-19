import { reactive } from "vue";

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/",
    imagesUrl: "http://image.tmdb.org/t/p/original/",
    flagUrl: "https://flagsapi.com/",
    flagSize: "/flat/64.png",
    movies: [],
    tvs: [],
    most_populars: [],
    tv_populars: [],
    tv_on_airs: [],
    endPoint: {
        movie: "search/movie",
        tv: "search/tv",
        most_popular:"movie/popular",
        tv_popular:"tv/popular",
        tv_on_air:"tv/on_the_air",
    },
    options: {
        params: {
            api_key: "1e77597204f226cd2a7c520c769c4f45",
            query: "",
        }
    },

    optionsgen: {
        params: {
            api_key: "1e77597204f226cd2a7c520c769c4f45",
        }
    }
})