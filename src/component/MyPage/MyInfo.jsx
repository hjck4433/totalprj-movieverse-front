import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import profileimg from "../../images/faceIcon/faceIcon1.png";
import profileimg2 from "../../images/faceIcon/faceIcon2.png";
import Button from "../../util/Button";

/*마이페이지 myinfo */
const MyInfoComp = styled.section`
  width: 100%; /* 보통 높이값은 따로 주지 않음!(배너를 잡을 경우에는 높이값을 줌) */
  padding-top: 80px;
  /* outline: 1px solid yellow; */
  margin-bottom: 100px;

  .container {
    h2 {
      text-align: center;
      margin-bottom: 50px;
      font-size: 3rem;
    }
    .wrapper {
      /* outline: 1px solid yellow; */
      display: flex;
      justify-content: center;
      align-items: center;
      .userProfile {
        width: 250px;
        margin-right: 5%;
        padding-bottom: 5%;
        /* outline: 1px solid red; */
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
          }
        }
      }
      .userContent {
        width: 30%;
        letter-spacing: -0.8px;
        /* outline: 1px solid pink; */
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
      /* outline: 1px solid blue; */
      display: flex;
      justify-content: end;
      padding-right: 40px;
      button {
        &:first-child {
          margin-right: 12px;
        }
      }
    }
    @media only screen and (max-width: 768px) {
      .wrapper {
        flex-direction: column; /* 모바일에서 세로로 배치 */
        align-items: center; /* 가운데 정렬 */

        .userProfile {
          order: -1; /* .userContent보다 위로 이동 */
          margin-bottom: 10px;
        }

        .userContent {
          width: 80%; /* 모바일에서 전체 너비로 */
        }

        .buttonBox {
          padding-right: 0; /* 모바일에서 오른쪽 패딩 제거 */
          justify-content: center; /* 가운데 정렬 */
        }
      }
    }
  }
`;

const MyInfo = ({ memberInfo }) => {
  const navigate = useNavigate();
  const tomemberpost = () => {
    navigate("/mypage/memberpost");
  };
  const toinfochange = () => {
    navigate("/mypage/infochange");
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
                      memberInfo && memberInfo.image
                        ? memberInfo.image
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
                <p>{memberInfo && memberInfo.name}</p>
              </div>
              <div className="userBox">
                <p className="title">닉네임</p>
                <p>{memberInfo && memberInfo.alias}</p>
              </div>
              <div className="userBox">
                <p className="title">이메일</p>
                <p>{memberInfo && memberInfo.email}</p>
              </div>
              <div className="userBox">
                <p className="title">전화번호</p>
                <p>{memberInfo && memberInfo.phone}</p>
              </div>
              <div className="userBox">
                <p className="title">주소</p>
                <p>{memberInfo && memberInfo.addr}</p>
              </div>
              <div className="buttonBox">
                <Button
                  children="수정하기"
                  active={true}
                  height="30px"
                  width="95px"
                  fontSize="12px"
                  clickEvt={toinfochange}
                />
                <Button
                  children="내 글 관리하기"
                  active={true}
                  height="30px"
                  width="95px"
                  fontSize="12px"
                  clickEvt={tomemberpost}
                />
              </div>
            </div>
          </div>
        </div>
      </MyInfoComp>
    </>
  );
};

export default MyInfo;
