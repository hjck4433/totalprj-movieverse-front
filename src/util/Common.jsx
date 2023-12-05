const Common = {
  MV_DOMAIN: "http://localhost:8111",
  MV_SOCKET_URL: "ws://localhost:8111/ws/chat",

  setAccessToken: (token) => {
    localStorage.setItem("accessToken", token);
  },
  getAccessToken: () => {
    return localStorage.getItme("accessToken");
  },
  setRefreshToken: (token) => {
    localStorage.setItem("refreshToken", token);
  },
  getRefreshToken: () => {
    return localStorage.getItme("refreshToken");
  },
};

export default Common;
