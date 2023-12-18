import axios from "axios";
import Common from "../util/Common";

const OttNetflixApi = {
  getNetflixMovies: async () => {
    console.log("getNetflixMovies 진입");
    return await axios.get(Common.MV_DOMAIN + `/ottbox/ottnetflix`);
  },
};
export default OttNetflixApi;
