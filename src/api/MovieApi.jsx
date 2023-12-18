import axios from "axios";
import Common from "../util/Common";

const MovieApi = {
  // 모든 영화 정보 가져오기
  getallmovies: async () => {
    return await axios.get(Common.MV_DOMAIN + `/movies/movielist`);
  },
};

export default MovieApi;
