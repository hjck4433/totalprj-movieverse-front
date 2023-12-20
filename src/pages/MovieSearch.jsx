import MovieSearchBanner from "../component/MovieSearch/MovieSearchBanner";
import MovieSort from "../component/MovieSearch/MovieSort";
import SearchMapBox from "../component/MovieSearch/SearchMapBox";
import { useState } from "react";

const MovieSearch = () => {
  const [selBtn, setSelBtn] = useState("recent");

  const handleButtonClick = (type) => {
    setSelBtn(type);
  };

  return (
    <>
      <MovieSearchBanner />
      <MovieSort selBtn={selBtn} setSelBtn={handleButtonClick} />
      <SearchMapBox sortType={selBtn} />
    </>
  );
};
export default MovieSearch;
