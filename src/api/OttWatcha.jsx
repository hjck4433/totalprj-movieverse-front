import axios from "axios";
import Common from "../util/Common";

const OttWatchaApi = {
  getWatchaMovies: async () => {
    console.log("getWatchaMovies 진입");
    return await axios.get(Common.MV_DOMAIN + `/ottbox/ottwatcha`);
  },
};
export default OttWatchaApi;
