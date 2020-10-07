import axios from "axios";

const axiosApi = {
  init() {
    axios.defaults.baseURL = "http://react-cdp-api.herokuapp.com/";
    axios.defaults.timeout = 3000;
  },

  getMovies(sortBy, searchBy, search) {
    return axios
        .get("movies", {
          params: {
            limit: 200,
            sortOrder: "desc",
            sortBy,
            searchBy,
            search,
          },
        })
        .then((result) => result.data.data)
        .catch((error) => console.log(error));
  },

  getFilmsById: function(id) {
    return axios
        .get(`movies/${id}`)
        .then((result) => result.data)
        .catch((error) => console.log(error));
  },

  getFilmsByGenres(sortBy, genre) {
    let request = `movies?limit=18&sortOrder=desc&sortBy=${sortBy}`;

    if (genre.length !== 1) {
      genre.forEach(item => {
        request += `&filter=${item}`;
      });
    } else {
      request += `&search=${genre[0]}`;
    }


    return axios
        .get(request)
        .then((result) => result.data.data)
        .catch((error) => console.log(error));
  },
};

export default axiosApi;