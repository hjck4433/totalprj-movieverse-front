import axios from "axios";
import Common from "../util/Common";

const OttTivingApi = {
  getTivingMovies: async () => {
    console.log("getTivingMovies 진입");
    return await axios.get(Common.MV_DOMAIN + `/ottbox/otttiving`);
  },
};
export default OttTivingApi;
