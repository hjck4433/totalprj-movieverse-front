import styled from "styled-components";
// 새 글 작성 전체
export const NewPostComp = styled.section`
  width: 100%;
  padding: 5% 0;
  background-color: white;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // 말풍선
    .bubbleArea {
      /* border: 1px solid red; */
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
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
    // 새 글 작성
    .postBox {
      width: 100%;
      border: 1px solid var(--GREY);
      border-radius: 10px;
      margin-top: 10px;
      padding: 30px;
      .selectBoard {
        h3 {
          color: var(--VIOLET);
          font-weight: 600;
          font-size: 1.4rem;
        }
      }
      .meetingMethod {
        h3 {
          color: var(--VIOLET);
          font-weight: 600;
          font-size: 1.4rem;
          letter-spacing: 8px; // 자간 조정
        }
      }
      .writer {
        display: flex;
        margin-bottom: 20px;
        h3 {
          color: var(--VIOLET);
          font-weight: 600;
          font-size: 1.4rem;
          margin-right: 20px;
        }
        p {
          color: black;
        }
      }
      .uploadDate {
        display: flex;
        margin-bottom: 20px;
        h3 {
          color: var(--VIOLET);
          font-weight: 600;
          font-size: 1.4rem;
          margin-right: 20px;
        }
        p {
          color: black;
        }
      }
      .postTitle {
        display: flex;
        margin-bottom: 20px;
        h3 {
          color: var(--VIOLET);
          font-weight: 600;
          font-size: 1.4rem;
          margin-right: 20px;
          letter-spacing: 8px;
        }
        p {
          color: black;
        }
      }
      .uploadImg {
        margin-bottom: 20px;
        h3 {
          color: var(--VIOLET);
          font-weight: 600;
          font-size: 1.4rem;
          margin-right: 20px;
        }
        p {
          color: black;
        }
      }
      .contents {
        display: flex;
        margin-bottom: 20px;
        h3 {
          color: var(--VIOLET);
          font-weight: 600;
          font-size: 1.4rem;
          margin-right: 20px;
          letter-spacing: 8px; // 자간 조정
        }
        p {
          color: black;
        }
        textarea {
          width: 90%;
          height: 300px;
          border-radius: 10px;
          padding: 10px;
          font-size: 1.1rem;
        }
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
// 라디오 버튼 스타일
export const RadioBox = styled.div`
  padding: 10px;
  margin: 10px;
  height: 60px;
  /* display: flex;
  align-items: center;
  justify-content: space-evenly; */
  .boardSelectBtn {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .boardLable1 {
      background-color: var(--LIGHTVIO);
    }
    .boardLable2 {
      background-color: var(--VIOLET);
    }
    .boardLable3 {
      background-color: var(--BLUE);
    }
    label {
      padding: 18px;
      height: 2rem;
      cursor: pointer;
      border-radius: 2rem;

      font-size: 1.2rem;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      word-break: keep-all;
      text-align: center;
      margin-right: 3px;

      /* 체크박스를 라벨 내에 숨깁니다. */
      input[type="radio"] {
        margin-right: 10px;
      }
    }
  }
  .placeSelectBtn {
    display: flex;
    justify-content: space-between;
    width: 58%;
    .placeLable1 {
      background-color: var(--BLUE);
    }

    .placeLable2 {
      background-color: var(--MIDBLUE);
    }
    label {
      padding: 18px;
      height: 2rem;
      cursor: pointer;
      border-radius: 2rem;

      font-size: 1.2rem;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      word-break: keep-all;
      text-align: center;
      margin-right: 3px;

      /* 체크박스를 라벨 내에 숨깁니다. */
      input[type="radio"] {
        margin-right: 10px;
      }
    }
  }
`;
