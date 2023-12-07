import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import loginBgPc from "../images/login_bg_pc.jpg";
import loginBgMo from "../images/login_bg_mo.jpg";
import Button from "../util/Button";
import Modal from "../util/Modal";

const LoginComp = styled.section`
  width: 100%;
  height: 80vh;
  background-image: url(${loginBgPc});
  background-position: center;
  background-size: cover;
  .bgBox {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    .container {
      height: 100%;
      padding-top: 120px;
      display: flex;
      justify-content: center;
      .loginBox {
        width: 400px;
        /* outline: 1px solid red; */
        h2 {
          margin-bottom: 30px;
          font-size: 1.8em;
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
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    background-image: url(${loginBgMo});
    .bgBox {
      .container {
        .loginBox {
          h2 {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
`;

const Login = () => {
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
  const resetInput = () => {
    setInputId("");
    setInputPw("");
  };

  // 버튼 활성화
  const [isActive, setIsActive] = useState(false);

  // 팝업 처리
  const [openModal, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  const [modalMsg, setModalMsg] = useState("");

  useEffect(() => {
    console.log("id:" + inputId);
    console.log("pw:" + inputPw);

    // 이메일 + 비밀번호 입력시 로그인 버튼 활성화
    if (inputId.length > 0 && inputPw.length > 0) setIsActive(true);
    else setIsActive(false);
  }, [inputId, inputPw, modalMsg]);

  const loginClick = () => {
    console.log("로그인!");
    // API 들어올 자리
    resetInput();
  };
  const toJoin = () => {
    navigate("/join");
  };

  return (
    <>
      <LoginComp>
        <div className="bgBox">
          <div className="container">
            <div className="loginBox">
              <h2>로그인</h2>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="이메일(example@naver.com)"
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
                clickEvt={loginClick}
              />
              <Button
                children="카카오 간편 로그인"
                active={true}
                width="100%"
                height="50px"
                clickEvt={loginClick}
              />
              <Button
                children="회원가입"
                active={true}
                width="100%"
                height="50px"
                clickEvt={toJoin}
              />
            </div>
          </div>
        </div>
      </LoginComp>
      <Modal
        open={openModal}
        close={closeModal}
        header="로그인 실패"
        children={modalMsg}
      />
    </>
  );
};
export default Login;
