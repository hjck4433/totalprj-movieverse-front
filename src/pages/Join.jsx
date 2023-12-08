import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../api/firebase";
import basicProfile from "../images/faceIcon/faceIcon1.png";
import JoinComp from "../component/Join/JoinStyles";
import DaumPostPopup from "../api/DaumPost";
import Modal from "../util/Modal";
import { Input, InputButton } from "../component/Join/JoinInput";

const Join = () => {
  const navigate = useNavigate();

  // 프로필 관련
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

  useEffect(() => {
    console.log("imgSrc : " + imgSrc);
    console.log("file : " + file.name);
  }, [file]);

  // 이메일 인증
  const authorizeMail = () => {
    console.log("이메일 인증");
  };

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
              btnChild="인증하기"
              active={false}
            />
            <InputButton
              holder="인증번호를 입력하세요"
              btnChild="확인"
              active={false}
            />
            <Input holder="비밀번호" type="password" />
            <Input holder="비밀번호 다시 입력" type="password" />
            <Input holder="이름" />
            <Input holder="닉네임" />
            <Input holder="전화번호 '-' 포함 입력하세요" />
          </div>
        </div>
      </JoinComp>
    </>
  );
};
export default Join;
