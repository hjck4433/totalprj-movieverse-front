import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserStore";
import { useNavigate } from "react-router-dom";
import { storage } from "../api/firebase";
import basicProfile from "../images/faceIcon/faceIcon1.png";
import InfoChgComp from "../component/MemberInfoChg/InfoChgStyles";
import DaumPostPopup from "../api/DaumPost";
import Modal from "../util/Modal";
import { Input, InputButton, Address } from "../component/Join/JoinInput";
import Button from "../util/Button";
import MemberApi from "../api/MemberApi";
import Common from "../util/Common";

const MemberInfoChg = () => {
  const navigate = useNavigate();

  // 회원정보
  const [memberInfo, setMemberInfo] = useState({
    email: "hjck0326@naver.com",
    isKakao: false,
    name: "테스트",
    alias: "햄스터",
    phone: "010-1234-1234",
    addr: "강남구 역삼동",
  });

  // 프로필 관련 ////////////////////////////////////////////////////
  const [imgSrc, setImgSrc] = useState(basicProfile);
  const [file, setFile] = useState("");
  const [url, setUrl] = useState("");

  // 입력받은 이미지 파일 주소
  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files?.[0];

    // 선택된 파일이 있다면
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setImgSrc(objectUrl);
      // 파이어베이스에 보내기위해 변수에 저장
      setFile(selectedFile);
    }
  };
  // 이미지 변경 확인 용
  // useEffect(() => {
  //   console.log("imgSrc : " + imgSrc);
  //   console.log("file : " + file.name);
  // }, [file]);
  ////////////////////////////////////////////////////////////////
  //모달/////////////////////////////////////////////////////////
  const [openModal, setModalOpen] = useState(false);
  const closeModal = (num) => {
    setModalOpen(false);
  };
  const [modalMsg, setModalMsg] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const [modalType, setModalType] = useState(null);
  /////////////////////////////////////////////////////////////

  // 키보드 입력
  const [inputOriginPw, setInputOriginPw] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputPw2, setInputPw2] = useState("");
  const [inputAlias, setInputAlias] = useState("");
  const [inputPhone, setInputPhone] = useState("");

  //오류 메세지
  const [originPwMessage, setOriginPwMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [pw2Message, setPw2Message] = useState("");
  const [aliasMessage, setAliasMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  //유효성
  const [isOriginPw, setIsOriginPw] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isPw2, setIsPw2] = useState(false);
  const [isName, setIsName] = useState(true);
  const [isAlias, setIsAlias] = useState(true);
  const [isPhone, setIsPhone] = useState(true);
  const [isAddr, setIsAddr] = useState(true);

  // 정규식
  const regexList = [
    //pw
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%_#^*?])[A-Za-z\d@$!%_#^*?]{8,15}$/,
    //phone
    /^\d{3}-\d{4}-\d{4}$/,
  ];

  //중복체크
  const isUnique = async (num, checkVal) => {
    const msgList = ["", setAliasMessage, setPhoneMessage];
    const validList = ["", setIsAlias, setIsPhone];
    try {
      const res = await MemberApi.checkUnique(num, checkVal);
      console.log("중복여부 : " + !res.data);
      if (!res.data) {
        if (num === 0) {
          msgList[num]("사용 가능합니다. 인증을 해주세요.");
        } else msgList[num]("사용 가능합니다.");
        validList[num](true);
      } else {
        msgList[num]("이미 사용중입니다.");
        validList[num](false);
      }
    } catch (err) {
      console.log("중복오류 : " + err);
    }
  };
  // 비밀번호 확인
  const onChangeOriginPw = (e) => {
    const currPw = e.target.value;
  };

  const checkPw = () => {};

  // 새 비밀번호
  const onChangePw = (e) => {
    const currPw = e.target.value;
    setInputPw(currPw);
    if (!regexList[1].test(currPw)) {
      setPwMessage(
        "대소문자, 숫자, 특수기호 포함 8자 이상 15자 이하로 입력 하세요"
      );
      setIsPw(false);
      setIsPw2(false);
      setPw2Message("");
    } else {
      setPwMessage("사용 가능합니다");
      setIsPw(true);
    }
  };
  // 비밀번호 재 입력
  const onChangePw2 = (e) => {
    const currPw2 = e.target.value;
    setInputPw2(currPw2);
    if (currPw2 !== inputPw) {
      setPw2Message("입력한 비밀번호와 일치 하지 않습니다.");
      setIsPw2(false);
    } else if (isPw && currPw2 === inputPw) {
      setPw2Message("비밀번호가 일치합니다");
      setIsPw2(true);
    }
  };

  // 닉네임
  const onChangeAlias = (e) => {
    const currAlias = e.target.value;
    setInputAlias(currAlias);
    if (currAlias.length < 2 || currAlias.length > 8) {
      setAliasMessage("2자 이상 8자 이하로 입력하세요");
      setIsAlias(false);
    } else {
      isUnique(1, currAlias);
    }
  };
  const onChangePhone = (e) => {
    const currPhone = e.target.value;
    setInputPhone(currPhone);
    const regex = regexList[2];
    if (!regex.test(currPhone)) {
      setPhoneMessage("잘못 입력 하셨습니다.");
      setIsPhone(false);
    } else {
      isUnique(2, currPhone);
    }
  };

  //주소////////////////////////////////////////////////////////
  const [inputAddr, setInputAddr] = useState("");
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const openPostCode = () => {
    setIsPopUpOpen(true);
  };
  const closePostCode = () => {
    setIsPopUpOpen(false);
  };

  const setAddr = (addr) => {
    setInputAddr(addr);
    setIsAddr(true);
  };

  return (
    <>
      <InfoChgComp>
        <div className="container">
          <h2>회원정보 수정</h2>
          {/* 프로필 이미지 */}
          <div className="profile">
            <div className="imgBox">
              <img src={imgSrc} alt="프로필이미지" />
            </div>
            <label>
              <input type="file" onChange={(e) => handleFileInputChange(e)} />
              파일 선택
            </label>
          </div>
          <div className="inputArea">
            {memberInfo.isKakao ? (
              <Input value={memberInfo.email} disabled={true} />
            ) : (
              <>
                <Input value={memberInfo.email} disabled={true} />
                <InputButton
                  holder="기존 비밀번호 입력"
                  value={inputOriginPw}
                  changeEvt={onChangeOriginPw}
                  btnChild="확인"
                  active={isOriginPw}
                  clickEvt={checkPw}
                  msg={originPwMessage}
                  msgType={isOriginPw}
                />
                <Input
                  holder="새 비밀번호"
                  value={inputPw}
                  type="password"
                  msg={pwMessage}
                  msgType={isPw}
                  changeEvt={onChangePw}
                  disabled={!isOriginPw}
                />
                <Input
                  holder="비밀번호 다시 입력"
                  value={inputPw2}
                  type="password"
                  msg={pw2Message}
                  msgType={isPw2}
                  changeEvt={onChangePw2}
                  disabled={!isOriginPw}
                />
              </>
            )}
            <Input holder="이름" value={memberInfo.name} disabled={true} />
            <Input
              holder="닉네임"
              value={inputAlias}
              msg={aliasMessage}
              msgType={isAlias}
              changeEvt={onChangeAlias}
            />
            <Input
              holder="전화번호 '-' 포함 입력하세요"
              value={inputPhone}
              msg={phoneMessage}
              msgType={isPhone}
              changeEvt={onChangePhone}
            />
            {/* 주소 */}
            <Address value={inputAddr} open={openPostCode} />
            {isPopUpOpen && (
              <DaumPostPopup
                onClose={closePostCode}
                setAddr={setAddr}
                open={isPopUpOpen}
              />
            )}

            {/* 회원정보 수정 */}
            <div className="btnBox">
              <Button
                children={"수정하기"}
                width="45%"
                height="60px"
                active={isName && isAlias && isPhone && isAddr}
                // clickEvt={onSubmit}
              />
              <Button
                children={"취소하기"}
                width="45%"
                height="60px"
                active={isName && isAlias && isPhone && isAddr}
                // clickEvt={onSubmit}
              />
            </div>
            <div className="withdrawBox">
              <Button
                children={"탈퇴하기"}
                front="var(--GREY)"
                width="30%"
                height="40px"
                active={true}
                // clickEvt={onSubmit}
              />
            </div>
          </div>
        </div>
      </InfoChgComp>
      <Modal
        open={openModal}
        close={closeModal}
        header={modalHeader}
        children={modalMsg}
        type={modalType}
        confirm={() => {
          navigate("/mypage");
        }}
      />
    </>
  );
};
export default MemberInfoChg;
