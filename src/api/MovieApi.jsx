import axios from "axios";
import Common from "../util/Common";

const MovieApi = {
  // 무비서치 영화정보 가져오기
  getallmovies: async () => {
    return await axios.get(Common.MV_DOMAIN + `/movies/movielist`);
  },
  // 무비인포 영화상세정보 가져오기
  getMoviesDetail: async (id) => {
    return await axios.get(Common.MV_DOMAIN + `/movies/movielist/${id}`);
  },

  // 영화 페이지네이션 조회
  moviePageList: async (page, size) => {
    return await axios.get(
      Common.MV_DOMAIN + `/movies/movielist/page?page=${page}&size=${size}`
    );
  },
  // 영화 페이지 수 조회
  moviePage: async (page, size) => {
    return await axios.get(
      Common.MV_DOMAIN + `/movies/movielist/count?page=${page}&size=${size}`
    );
  },
};

export default MovieApi;
