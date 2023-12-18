import axios from "axios";
import Common from "../util/Common";

const OttBoxApi = {
  //박스오피스 조회
  getBoxOfficeMovies: async () => {
    console.log("getBoxOfficeMovies 진입");
    return await axios.get(Common.MV_DOMAIN + `/ottbox/boxoffice`);
  },

  //티빙
  getTivingMovies: async () => {
    console.log("getTivingMovies 진입");
    return await axios.get(Common.MV_DOMAIN + `/ottbox/otttiving`);
  },

  //넷플릭스
  getNetflixMovies: async () => {
    console.log("getNetflixMovies 진입");
    return await axios.get(Common.MV_DOMAIN + `/ottbox/ottnetflix`);
  },

  //왓챠
  getWatchaMovies: async () => {
    console.log("getWatchaMovies 진입");
    return await axios.get(Common.MV_DOMAIN + `/ottbox/ottwatcha`);
  },
};

export default OttBoxApi;
