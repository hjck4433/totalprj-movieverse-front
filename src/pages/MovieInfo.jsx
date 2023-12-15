import MovieInfoSection1 from "../component/MovieInfo/MovieInfoSection1";
import MovieInfoContent from "../component/MovieInfo/MovieInfoContent";
import MovieInfoStaff from "../component/MovieInfo/MovieInfoStaff";
import MovieInfoStill from "../component/MovieInfo/MovieInfoStill";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieApi from "../api/MovieApi";

const MovieInfo = () => {
  const { title } = useParams();

  const [movieData, setMovieData] = useState({
    plotText: "줄거리 입니다!",
  });

  const fetchMovieDetail = async () => {
    try {
      const res = await MovieApi.fetchMovieDetail(title);
      if (res.data !== null) {
        setMovieData(res.data);
      }
    } catch (err) {
      console.log(err);
    }
    // 영화 Api  값이 있으면 setMovieData("값")
  };

  useEffect(() => {
    // 화면이 처음 렌더링 된 상태에서 한번만 호출!
    // fetchMovieDetail();
  }, []);

  return (
    <>
      <MovieInfoSection1 />
      <MovieInfoContent movieDetail={movieData} />
      <MovieInfoStaff />
      <MovieInfoStill />
    </>
  );
};
export default MovieInfo;
