import { Outlet } from "react-router-dom";
import Header from "../component/Layout/Header/Header";
import Footer from "../component/Layout/Footer";
import Advertise from "../component/Layout/Ad";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserStore";
import Common from "../util/Common";

const Layout = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { loginStatus } = context;

  useEffect(() => {
    if (loginStatus) {
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
