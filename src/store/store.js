import Vue from "vue";
import Vuex from "vuex";
import axiosApi from "./../axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        searchText: "",
        searchOption: "title",
        sortOption: "release_date",
        movies: [],
        movieById: null,
    },
    getters: {
        getAllFilms: (state) => {
            return state.movies.sort((a, b) => b[state.sortOption] - a[state.sortOption]);
        },

        getFilmsById: (state) => {
            return state.movieById;
        },
    },

    mutations: {
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

    actions: {
        SHOW_FILMS({ state }) {
            let text = state.searchText.toLowerCase().trim(),
                sortOpt = state.sortOption,
                searchOpt = state.searchOption;

            return axiosApi.getMovies(sortOpt, searchOpt, text).then(
                (result) => {
                    state.movies = result;
                }
            );
        },

        FILM_BY_ID({ state }, id) {
            return axiosApi.getFilmsById(id).then((result) => {
                state.movieById = result;
            });
        },

        FILM_BY_GENRES({ state }) {
            return axiosApi.getFilmsByGenres(
                state.sortOption,
                state.movieById.genres
            ).then((result) => {
                state.movies = result;
            });
        },
    },
});
