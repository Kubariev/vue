import { _ } from "vue-underscore";
import Vue from "vue";
import Vuex from "vuex";
import moviesJson from "./../assets/movies.json";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        searchText: "",
        searchOption: "title",
        sortOption: "releaseDate",
        movies: moviesJson,
    },
    getters: {
        getAllFilms: (state) => {
            return _.sortBy(state.movies, state.sortOption).reverse();
        },

        getFilmsById: (state) => {
            let path = window.location.pathname;
            let id = path.split("/")[2];
            return _.find(state.movies, (movie) => movie.id === id);
        },

        getFilmsByGenre: (state) => (target) => {
            return _.filter(state.movies, (movie) => {
                if (target.id === movie.id) return false;
                return _.intersection(target.genre, movie.genre).length > 0;
            });
        },
    },

    mutations: {
        SEARCH_FILMS(state) {
            let searchText = state.searchText.toLowerCase().trim();
            if (!searchText) {
                state.movies = moviesJson;
            } else {
                state.movies = _.filter(moviesJson, (movie) => {
                    let movieSearch = movie[state.searchOption];

                    if (Array.isArray(movieSearch))
                        movieSearch = movieSearch.join(' ');
                    movieSearch = movieSearch.toLowerCase();

                    return movieSearch.includes(searchText);
                });
            }
        },

        CHANGE_SEARCH_INPUT(state, searchText) {
            state.searchText = searchText;
        },

        CHANGE_SORT_OPTION(state, sortOption) {
            state.sortOption = sortOption;
        },

        CHANGE_SEARCH_OPTION(state, searchOption) {
            state.searchOption = searchOption;
        },

    },
});