import { Outlet } from "react-router-dom";
import Header from "../component/Layout/Header/Header";
import Footer from "../component/Layout/Footer";
import Advertise from "../component/Layout/Ad";
import Modal from "../util/Modal";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserStore";

const Layout = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { loginStatus } = context;
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
      <Footer />
    </>
  );
};
export default Layout;
