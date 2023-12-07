import { useState } from "react";
import Button from "../util/Button";
import Modal from "../util/Modal";
import AgreementModal from "../util/Agreement/AgreementModal";

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

  // AgreementModal
  const [openAgreement, setAModalOpen] = useState(false);
  const agreeTest = () => {
    setAModalOpen(true);
  };
  const closeAgree = () => {
    setAModalOpen(false);
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
        <br />
        <Button children="약관" active={true} clickEvt={agreeTest} />
      </div>
      <Modal
        open={openModal}
        close={closeModal}
        header="테스트"
        children={modalMsg}
        type={true}
        confirm={modalTest}
      />
      <AgreementModal open={openAgreement} close={closeAgree} type={"use"} />
    </>
  );
};
export default UtilTest;
