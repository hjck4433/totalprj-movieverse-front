import { styled } from "styled-components";
import Logo from "../../images/movieverse_logo.png";
import Button from "../../util/Button";
import { useState, useEffect, useContext } from "react";
import Common from "../../util/Common";
import { useNavigate } from "react-router-dom";

const AdminLoginComp = styled.section`
  background-image: url(${Logo});
  background-position: top 6% center;
  background-repeat: no-repeat;
  background-size: 16%;
  .container {
    height: calc(100vh - 160px);
    background-color: rgba(24, 18, 43, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    .loginBox {
      width: 400px;
      /* outline: 1px solid red; */
      h2 {
        margin-bottom: 20px;
        text-align: center;
        font-size: 1.6em;
        font-weight: 600;
      }
      .inputBox {
        border-radius: 5px;
        border: 1px solid var(--GREY);
        overflow: hidden;
        margin-bottom: 40px;
        input {
          width: 100%;
          font-size: 1em;
          padding: 15px;
          border: none;
          outline: none;
          &:first-child {
            border-bottom: 1px solid var(--GREY);
          }
          &::placeholder {
            color: var(--GREY);
          }
        }
      }
      button {
        margin-bottom: 30px;
        &.kakaoBtn {
          background-color: #fee500;
          font-size: 1em;
          font-weight: 600;
          color: #333;
          cursor: pointer;
          border: none;
        }
      }
    }
  }
`;

const AdminLogin = () => {
  const navigate = useNavigate();

  //키보드 입력
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const onChangeId = (e) => {
    setInputId(e.target.value);
  };
  const onChangePw = (e) => {
    setInputPw(e.target.value);
  };

  useEffect(() => {
    console.log("id:" + inputId);
    console.log("pw:" + inputPw);

    // 이메일 + 비밀번호 입력시 로그인 버튼 활성화
    if (inputId.length > 0 && inputPw.length > 0) setIsActive(true);
    else setIsActive(false);
  }, [inputId, inputPw]);

  // 버튼 활성화
  const [isActive, setIsActive] = useState(false);

  return (
    <AdminLoginComp>
      <div className="container">
        <div className="loginBox">
          <h2>관리자 로그인</h2>
          <div className="inputBox">
            <input
              type="text"
              placeholder="관리자 아이디"
              value={inputId}
              onChange={onChangeId}
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={inputPw}
              onChange={onChangePw}
            />
          </div>
          <Button
            children="로그인"
            active={isActive}
            width="100%"
            height="50px"
            // clickEvt={loginClick}
          />
        </div>
      </div>
    </AdminLoginComp>
  );
};
export default AdminLogin;
