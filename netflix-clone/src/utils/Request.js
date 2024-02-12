const Api_Key = process.env.REACT_APP_Api_Key;
const Request = {
  fetchTranding: `/trending/all/week?api_key=${Api_Key}&language=en-US`,
  fetchNetfilexOrigionals: `/discover/tv?api_key=${Api_Key}&with_networks=213`,
  fetchTopratedMovies: `/movie/top_rated?${Api_Key}language=en-US`,
  fetchActionMovies: `/discover/movie?${Api_Key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?${Api_Key}&with_genres=35`,
  fetchHorerMovies: `/discover/movie?${Api_Key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?${Api_Key}&with_genres=10749`,
  fetchDocumentry: `/discover/movie?${Api_Key}&with_genres=99`,
  fetchTvShow: `/tv/popular?${Api_Key}language=en-US&page=1';
`,
};

export default Request;
