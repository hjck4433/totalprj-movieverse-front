import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import profileimg from "../../images/faceIcon/faceIcon1.png";
import profileimg2 from "../../images/faceIcon/faceIcon2.png";
import { useState, useEffect } from "react";
import Button from "../../util/Button";

/*마이페이지 myinfo */
const MyInfoComp = styled.section`
  width: 100%; /* 보통 높이값은 따로 주지 않음!(배너를 잡을 경우에는 높이값을 줌) */
  padding-top: 80px;
  outline: 1px solid yellow;

  .container {
    h2 {
      text-align: center;
      margin-bottom: 50px;
    }
    .wrapper {
      outline: 1px solid yellow;
      display: flex;
      justify-content: center;
      align-items: center;
      .userProfile {
        width: 250px;
        margin-right: 5%;
        outline: 1px solid red;
        .profileImg {
          width: 250px;
          padding-bottom: 250px;
          position: relative;
          /* 사진이 원 안으로 들어오게 함 */
          overflow: hidden;
          border-radius: 100%;
          background-color: var(--GREY);
          img {
            width: 100%;
            height: 100%;
            position: absolute;
            /* outline: 1px solid yellow; */
          }
        }
      }
      .userContent {
        width: 30%;
        letter-spacing: -0.8px;
        outline: 1px solid pink;
        .userBox {
          width: 100%;
          margin-bottom: 20px;
          /* display: flex; */
          display: grid;
          grid-template-columns: 30% 60%;
          p {
            padding: 10px 0;
            letter-spacing: 0.8px;
            &.title {
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: var(--LIGHTVIO);
              border-radius: 5px;
              font-weight: 600;
              margin-right: 20px;
            }
            &:last-child {
              border-bottom: 1px solid white;
            }
          }
        }
      }
    }
    .buttonBox {
      outline: 1px solid blue;
      display: flex;
      justify-content: end;
    }
  }
`;

const MyInfo = () => {
  const navigate = useNavigate();
  // const [userInfo, setUserInfo] = useState(null);
  const userInfo = {
    userName: "햄스터",
    userImg:
      "data:image/png;base64,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",
    userAlias: "햄스터!!!!!!",
  };
  return (
    <>
      <MyInfoComp>
        <div className="container">
          <h2>MY INFO</h2>
          <div className="wrapper">
            <div className="userProfile">
              <div className="profileImg">
                {
                  <img
                    src={
                      userInfo && userInfo.userImg
                        ? userInfo.userImg
                        : profileimg
                    }
                    alt="profile"
                  />
                }
              </div>
            </div>
            <div className="userContent">
              <div className="userBox">
                <p className="title">이름</p>
                <p>{userInfo && userInfo.userName}</p>
              </div>
              <div className="userBox">
                <p className="title">닉네임</p>
                <p>{userInfo && userInfo.userAlias}</p>
              </div>
              <div className="userBox">
                <p className="title">이메일</p>
                <p>{userInfo && userInfo.userEmail}</p>
              </div>
              <div className="userBox">
                <p className="title">전화번호</p>
                <p>{userInfo && userInfo.userPhone}</p>
              </div>
              <div className="userBox">
                <p className="title">주소</p>
                <p>{userInfo && userInfo.userAddr}</p>
              </div>
              <div className="buttonBox">
                <Button children="수정하기" active={true} />
                <Button children="내 글 관리하기" active={true} />
              </div>
            </div>
          </div>
        </div>
      </MyInfoComp>
    </>
  );
};

export default MyInfo;
