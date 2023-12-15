import axios from "axios";
import Common from "../util/Common";

const MovieApi = {
  // kmdb API 가져오기
  kmdbMovieData: async (title) => {
    return await axios.get(Common.MV_DOMAIN + `/api/apilist/${title}`);
  },
};

export default MovieApi;
