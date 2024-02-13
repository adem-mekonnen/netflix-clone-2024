import React from "react";
import Row from "../Row/Row";
import Request from "../../../utils/Request";
const RowList = () => {
  return (
    <div>
      <Row
        title="Netflix Original"
        fetchUrl={Request.fetchNetfilexOrigionals}
        isLargeRow={true}
      />
      <Row title="Trandning Now" fetchUrl={Request.fetchTranding} />
      <Row title="Top Rated" fetchUrl={Request.fetchTopratedMovies} />
      <Row title="Action Movies" fetchUrl={Request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Request.fetchComedyMovies} />
      <Row title="Horer Movies" fetchUrl={Request.fetchHorerMovies} />
      <Row title="Romance Movies" fetchUrl={Request.fetchRomanceMovies} />
      <Row title="TV Shows" fetchUrl={Request.fetchTvShow} />
      <Row title="Documentaries" fetchUrl={Request.fetchDocumentry} />
    </div>
  );
};

export default RowList;
