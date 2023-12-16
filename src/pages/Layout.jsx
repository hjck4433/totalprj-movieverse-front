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

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // 로그인 상태를 확인, 비로그인 상태라면 모달을 표시하고 로그인 페이지로 이동
    if (!loginStatus) {
      const accessToken = Common.getAccessToken();
      if (!accessToken) {
        setShowModal(true);
      }
    }
  }, [loginStatus]);

  // 모달 닫기 함수
  const closeModal = () => {
    setShowModal(false);
    navigate("/login"); // 모달에서 확인을 누를 경우 로그인 페이지로 이동
  };

  // 키키멤버십 가입여부
  const [isKikiMember, setKikiMember] = useState(true);
  // const isKikiMember = context.getKikiStatus();
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {!isKikiMember && <Advertise />}
      <Modal
        open={showModal}
        close={closeModal}
        header="로그인 필요"
        children="로그인이 필요한 서비스입니다. 로그인 페이지로 이동하시겠습니까?"
        confirm={closeModal}
      />

      <Footer />
    </>
  );
};
export default Layout;
