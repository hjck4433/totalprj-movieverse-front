import MyInfo from "../component/MyPage/MyInfo";
import MembershipJoin from "../component/MyPage/MembershipJoin";
import BookMarkList from "../component/MyPage/BookMarkList";
import { useState, useEffect } from "react";
import MemberApi from "../api/MemberApi";
import Common from "../util/Common";

const MyPage = () => {
  const [memberInfo, setMemberInfo] = useState();

  const memberDetail = async () => {
    const accessToken = Common.getAccessToken();
    try {
      const res = await MemberApi.getMemberDetail();
      console.log("상세회원정보 : " + res.data);
      setMemberInfo(res.data);
    } catch (err) {
      if (err.response.status === 401) {
        await Common.handleUnathorized();
        const newToken = Common.getAccessToken();
        if (newToken !== accessToken) {
          const res = await MemberApi.getMemberDetail();
          if (res.status === 200) {
            console.log("토큰 재발행 회원정보 : " + res.data);
            setMemberInfo(res.data);
          }
        }
      }
    }
  };
  useEffect(() => {
    memberDetail();
  }, []);

  return (
    <>
      <MyInfo memberInfo={memberInfo} />
      <MembershipJoin />
      <BookMarkList />
    </>
  );
};
export default MyPage;
