import MyInfo from "../component/MyPage/MyInfo";
import MembershipJoin from "../component/MyPage/MembershipJoin";
import BookMarkList from "../component/MyPage/BookMarkList";
import { useState, useEffect } from "react";
import MemberApi from "../api/MemberApi";
import Common from "../util/Common";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();
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
          try {
            const res = await MemberApi.getMemberDetail();
            if (res.status === 200) {
              console.log("토큰 재발행 회원정보 : " + res.data);
              setMemberInfo(res.data);
            }
          } catch (err) {
            console.log(err);
          }
        }
      }
      console.log(err);
    }
  };
  useEffect(() => {
    memberDetail();
  }, []);

  // 멤버십 여부 back 실행 시켜야 오류 안뜸!
  return (
    <>
      <MyInfo memberInfo={memberInfo} />
      {memberInfo && !memberInfo.isMembership && <MembershipJoin />}
      <BookMarkList />
    </>
  );
};
export default MyPage;
