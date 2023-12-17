import { Outlet } from "react-router-dom";
import Header from "../component/Layout/Header/Header";
import Footer from "../component/Layout/Footer";
import Advertise from "../component/Layout/Ad";
import Modal from "../util/Modal";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserStore";
import Common from "../util/Common";

const Layout = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { loginStatus } = context;

  useEffect(() => {
    // 로그인 상태를 확인, 비로그인 상태라면 모달을 표시하고 로그인 페이지로 이동
    if (!loginStatus) {
      // const accessToken = Common.getAccessToken();
      // if (!accessToken) {
      //   setModalOpen(true); => 이건 모달 여는 내용이에요
      //    클릭했을 때 모달이 나와야 해서
      //    모달에 대한건 클릭이벤트가 있는 위치에서 불러야 해요
      // }
      //  이 위치에서는 로그인 상태인 경우 회원 정보를 불러오고 , 멤버쉽 여부를 확인해야 해요
      // 멤버쉽 여부에 따라 광고가 보여지고 안보여지고만 설정해줄 수 있어요
    }
    console.log("로그인 여부" + loginStatus);
    console.log("kiki" + isKikiMember);
  }, [loginStatus]);

  // 키키멤버십 가입여부
  const [isKikiMember, setKikiMember] = useState(false);
  // const isKikiMember = context.getKikiStatus();
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* 로그인 여부를 props로 전달 */}
      {!isKikiMember && <Advertise isLogin={loginStatus} />}
      <Footer />
    </>
  );
};
export default Layout;
