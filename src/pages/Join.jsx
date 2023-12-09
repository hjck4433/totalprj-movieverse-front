import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../api/firebase";
import basicProfile from "../images/faceIcon/faceIcon1.png";
import JoinComp from "../component/Join/JoinStyles";
import DaumPostPopup from "../api/DaumPost";
import AgreeCheck from "../component/Join/AgreeCheck";
import Modal from "../util/Modal";
import { Input, InputButton, Address } from "../component/Join/JoinInput";
import Button from "../util/Button";

const Join = () => {
  const navigate = useNavigate();

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
  ////////////////////////////////////////////////////////////////
  //키보드 입력
  const [inputEmail, setInputEmail] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputPw2, setInputPw2] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputAlias, setInputAlias] = useState("");
  const [inputPhone, setInputPhone] = useState("");

  // 오류 메세지
  const [emailMessage, setEmailMessage] = useState("");
  const [codeMessage, setCodeMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [pw2Message, setPw2Message] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [aliasMessage, setAliasMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  // 유효성
  const [isEmail, setIsEmail] = useState(false);
  const [isCode, setIsCode] = useState(true);
  const [isPw, setIsPw] = useState(false);
  const [isPw2, setIsPw2] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isAlias, setIsAlias] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isAddr, setIsAddr] = useState(false);

  // 정규식
  const regexList = [
    //email
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
    //pw
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%_#^*?])[A-Za-z\d@$!%_#^*?]{8,15}$/,
    //phone
    /^\d{3}-\d{4}-\d{4}$/,
  ];

  // 이메일
  const onChangeEmail = (e) => {
    const currEmail = e.target.value;
    console.log("currr" + currEmail);
    setInputEmail(currEmail);
    if (!regexList[0].test(currEmail)) {
      setEmailMessage("잘못 된 형식입니다.");
      setIsEmail(false);
    } else {
      setEmailMessage("이메일 인증이 필요합니다.");
      setIsEmail(true);
    }
  };

  // 이메일 인증 번호 확인
  const [sentCode, setSentCode] = useState("123456");
  const onChangeEmailCode = (e) => {
    const currCode = e.target.value;
    console.log("currr" + currCode);
    setInputCode(currCode);
  };

  // 이메일 인증
  const authorizeMail = () => {
    console.log("이메일 인증");
  };

  // 비밀번호
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

  // 이름
  const onChangeName = (e) => {
    const currName = e.target.value;
    setInputName(currName);
    if (currName.length < 2 || currName.length > 5) {
      setNameMessage("2자 이상 5자 이하로 입력하세요");
      setIsName(false);
    } else {
      setNameMessage("사용 가능합니다");
      setIsName(true);
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
      setAliasMessage("사용 가능합니다");
      setIsAlias(true);
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
      setPhoneMessage("사용 가능합니다");
      setIsPhone(true);
    }
  };

  // useEffect(() => {
  //   console.log("email!");
  //   console.log("email : " + inputEmail);
  // }, [inputEmail]);

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

  // useEffect(() => {
  //   console.log("imgSrc : " + imgSrc);
  //   console.log("file : " + file.name);
  // }, [file]);
  //////////////////////////////////////////////////////////

  // 약관 동의 //////////////////////////////////////////////////
  const [checkedAll, setCheckedAll] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const onCheckedChange = (checkboxNumber) => {
    switch (checkboxNumber) {
      case 1:
        setChecked1(!checked1);
        break;
      case 2:
        setChecked2(!checked2);
        break;
      default:
        // 전체약관동의 체크박스를 선택하면 나머지 두 개의 체크박스도 선택/해제되도록 설정
        setCheckedAll(!checkedAll);
        setChecked1(!checkedAll);
        setChecked2(!checkedAll);
        break;
    }
  };
  useEffect(() => {
    if (checked1 && checked2) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked1, checked2]);
  /////////////////////////////////////////////////////////////////

  return (
    <>
      <JoinComp>
        <div className="container">
          <h2>회원가입</h2>
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
          {/* 인풋 영역 */}
          <div className="inputArea">
            <InputButton
              holder="이메일 입력"
              value={inputEmail}
              changeEvt={onChangeEmail}
              btnChild="인증하기"
              active={isEmail}
              msg={emailMessage}
              msgType={isEmail}
            />
            <InputButton
              holder="인증번호를 입력하세요"
              value={inputCode}
              changeEvt={onChangeEmailCode}
              btnChild="확인"
              active={false}
              msg={codeMessage}
              msgType={isCode}
            />
            <Input
              holder="비밀번호"
              value={inputPw}
              type="password"
              msg={pwMessage}
              msgType={isPw}
              changeEvt={onChangePw}
            />
            <Input
              holder="비밀번호 다시 입력"
              value={inputPw2}
              type="password"
              msg={pw2Message}
              msgType={isPw2}
              changeEvt={onChangePw2}
            />
            <Input
              holder="이름"
              value={inputName}
              msg={nameMessage}
              msgType={isName}
              changeEvt={onChangeName}
            />
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

            {/* 약관동의 */}
            <div className="agreementBox">
              <AgreeCheck
                className="all"
                agreeAll={true}
                children="전체 약관동의"
                checked={checkedAll}
                onCheckedChange={() => onCheckedChange()}
              />
              <AgreeCheck
                children="[필수] 서비스 이용약관 동의"
                checked={checked1}
                onCheckedChange={() => onCheckedChange(1)}
                modalType="use"
              />
              <AgreeCheck
                children="[필수] 개인정보 수집 및 이용 동의"
                checked={checked2}
                onCheckedChange={() => onCheckedChange(2)}
                modalType="privacy"
              />
            </div>

            {/* 회원가입 */}
            <Button
              children={"회원가입"}
              width="100%"
              height="60px"
              active={
                isCode &&
                isPw2 &&
                isName & isAlias &&
                isPhone &&
                isAddr &&
                checkedAll
              }
            />
          </div>
        </div>
      </JoinComp>
    </>
  );
};
export default Join;
