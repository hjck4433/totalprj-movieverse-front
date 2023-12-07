import { useState } from "react";
import Button from "../util/Button";
import Modal from "../util/Modal";

const UtilTest = () => {
  //Modal
  const [openModal, setModalOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState("");

  const closeModal = () => {
    setModalOpen(false);
  };
  const modalTest = () => {
    setModalMsg("모달 확인 버튼 테스트");
  };

  const test = () => {
    console.log("test!");
    setModalOpen(true);
    setModalMsg("테스트 테스트");
  };

  //Button 활성화
  const [isActive, setActive] = useState(false);
  const activate = () => {
    isActive ? setActive(false) : setActive(true);
  };

  return (
    <>
      <div className="container">
        <Button
          children="모달팝업"
          front="var(--VIOLET)"
          back="var(--LIGHTVIO)"
          width=""
          height=""
          fontSize=""
          active={isActive}
          clickEvt={test}
        />
        <Button children="활성화" clickEvt={activate} active={true} />
      </div>
      <Modal
        open={openModal}
        close={closeModal}
        header="테스트"
        children={modalMsg}
        type={true}
        confirm={modalTest}
      />
    </>
  );
};
export default UtilTest;
