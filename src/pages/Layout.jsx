import { Outlet } from "react-router-dom";
import Header from "../component/Layout/Header/Header";
import Footer from "../component/Layout/Footer";
import Advertise from "../component/Layout/Ad";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserStore";
import Common from "../util/Common";
import ScrollToTop from "../component/Layout/ScrollToTop";
import MemberApi from "../api/MemberApi";

const Layout = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  // 로그인 / 멤버쉽 여부
  const { loginStatus, isKikiMember, setIsKikiMember } = context;

  useEffect(() => {
    console.log("로그인 여부" + loginStatus);
    console.log("kiki" + isKikiMember);
    if (loginStatus) {
      Common.handleTokenAxios(fetchIsKikiMember);
    }
  }, [loginStatus]);

  useEffect(() => {}, []);

  const fetchIsKikiMember = async () => {
    const res = await MemberApi.getMembership();
    if (res.data) {
      setIsKikiMember(res.data);
      console.log("키키 멤버 : " + res.data);
    }
  };

  return (
    <>
      <ScrollToTop />
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
