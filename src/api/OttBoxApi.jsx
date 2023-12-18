import axios from "axios";
import Common from "../util/Common";

const OttBoxApi = {
  getBoxOfficeMovies: async () => {
    console.log("getBoxOfficeMovies 진입");
    return await axios.get(Common.MV_DOMAIN + `/ottbox/boxoffice`);
  },
};
export default OttBoxApi;
