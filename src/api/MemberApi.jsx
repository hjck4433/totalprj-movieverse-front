import axios from "axios";
import Common from "../util/Common";

const MemberApi = {
  //이메일 인증
  sendEmailCode: async (email) => {
    console.log("이메일 인증 : " + email);
    return await axios.get(Common.MV_DOMAIN + `/email/mail?id=${email}`);
  },
  //중복체크
  checkUnique: async (type, data) => {
    console.log("중복체크 진입 : " + data);
    const dataMap = {
      type: type,
      data: data,
    };
    return await axios.post(Common.MV_DOMAIN + "/auth/isunique", dataMap);
  },
  //회원가입
  joinMember: async (email, password, name, alias, phone, addr, image) => {
    console.log("회원가입 진입 : " + email);
    const data = {
      email: email,
      password: password,
      name: name,
      alias: alias,
      phone: phone,
      addr: addr,
      image: image,
    };
    return await axios.post(Common.MV_DOMAIN + "/auth/join", data);
  },
  //로그인
  login: async (email, password) => {
    console.log("로그인 진입 : " + email);
    const data = {
      email: email,
      password: password,
    };
    return await axios.post(Common.MV_DOMAIN + "/auth/login", data);
  },
  //회원 상세 조회
  getMemberDetail: async () => {
    return await axios.get(
      Common.MV_DOMAIN + "/member/detail",
      Common.tokenHeader()
    );
  },
};
export default MemberApi;
