import styled from "styled-components";
import Button from "../util/Button";
import { useNavigate } from "react-router-dom";
import face from "../images/faceIcon/faceIcon7.png";

const NewPostComp = styled.section`
  width: 100%;
  padding: 5% 0;
  background-color: white;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .bubbleArea {
      border: 1px solid red;
      width: 100%;
      display: flex;
      justify-content: center;

      img {
        width: 120px;
        height: 120px;
        margin-right: 50px;
      }
      .bubbleText {
        position: relative;
        background: var(--GREY);
        border-radius: 20px;
        padding: 20px 30px;
        width: 100%;
        height: 120px;
        h2 {
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--VIOLET);
          margin-bottom: 10px;
        }
        p {
          font-size: 1.1rem;
          color: black;
          margin-bottom: 5px;
        }
        :after {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          width: 0;
          height: 0;
          border: 27px solid transparent;
          border-right-color: var(--GREY);
          border-left: 0;
          border-top: 0;
          margin-top: -13.5px;
          margin-left: -27px;
        }
      }
    }
    .postBox {
      width: 100%;
      border: 1px solid blue;
      border-radius: 10px;
      margin-top: 10px;
      padding: 20px;
      h3 {
        color: var(--VIOLET);
      }
      .buttonBox {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        Button {
          margin-right: 10px;
        }
      }
    }
  }
`;

const NewPost = () => {
  return (
    <>
      <NewPostComp>
        <div className="container">
          <div className="bubbleArea">
            <img className="faceIcon" src={face} alt="Icon" />
            <div className="bubbleText">
              <h2>게시글을 등록해볼까요?</h2>
              <p>
                무비 모임을 열어서 함께 영화도 보고, 모임 후기도 남겨보세요!
              </p>
              <p>
                나의 인생 영화, 추천영화도 공유하며 새로운 취향도 찾아보아요~
              </p>
            </div>
          </div>
          <div className="postBox">
            <div className="selectBoard">
              <h3>게시판 선택</h3>
            </div>
            <div className="meetingMethod">
              <h3>장소</h3>
            </div>
            <div className="writer">
              <h3>작성자</h3>
            </div>
            <div className="uploadDate">
              <h3>작성일</h3>
            </div>
            <div className="postTitle">
              <h3>제목</h3>
            </div>
            <div className="uploadImg">
              <h3>이미지</h3>
            </div>
            <div className="contents">
              <h3>내용</h3>
            </div>
            <div className="buttonBox">
              <Button children="등록하기" active={true} back="var(--BLUE)" />
              <Button
                children="목록보기"
                active={true}
                front="var(--VIOLET)"
                back="var(--BLUE)"
              />
            </div>
          </div>
        </div>
      </NewPostComp>
    </>
  );
};
export default NewPost;
