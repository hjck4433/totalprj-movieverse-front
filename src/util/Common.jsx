import axios from "axios";

const Common = {
  MV_DOMAIN: "http://localhost:8111",
  MV_SOCKET_URL: "ws://localhost:8111/ws/chat",

  setAccessToken: (token) => {
    localStorage.setItem("accessToken", token);
  },
  getAccessToken: () => {
    return localStorage.getItem("accessToken");
  },
  setRefreshToken: (token) => {
    localStorage.setItem("refreshToken", token);
  },
  getRefreshToken: () => {
    return localStorage.getItem("refreshToken");
  },
  // 헤더
  tokenHeader: () => {
    const accessToken = Common.getAccessToken();
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
  },

  handleUnathorized: async () => {
    const accessToken = Common.getAccessToken();
    const refreshToken = Common.getRefreshToken();
    console.log("refreshToken : " + refreshToken);
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const res = await axios.post(
        `${Common.MV_DOMAIN}/auth/refresh`,
        refreshToken,
        config
      );
      console.log(res.data);
      Common.setAccessToken(res.data.accessToken);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
};

export default Common;
