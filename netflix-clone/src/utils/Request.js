const Api_Key = "712530e310a02f0b3c13b055537f1a01";
const Request = {
  fetchTranding: `/trending/all/week?api-key=${Api_Key}&language=en-US`,
  fetchNetfilexOrigionals: `/discover/tv?${Api_Key}&with_networks=213`,
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
