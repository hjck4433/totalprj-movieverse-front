import Button from "../../util/Button";
import { styled } from "styled-components";
import Kiki from "./Kiki";

const KikiListComp = styled.section`
  width: 100%;
  /* outline: 1px solid red; */
  .buttonBox {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: end;
    margin-bottom: 50px;
    /* outline: 1px solid yellow; */
  }
  .container {
    padding: 100px 0;
    /* outline: 1px solid red; */
    .chatListBox {
      width: 80%;
      margin: 0 auto;
      /* outline: 1px solid blue; */

      .chatBox {
        width: 100%;
        background-color: var(--LIGHTVIO);
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        padding: 45px;
        /* outline: 1px solid red; */
        .title {
          color: #000;
          font-weight: 600;
          font-size: 1.5em;
        }
        .createdAt {
          color: #000;
          font-weight: 600;
          font-size: 1.3em;
          text-align: right;
        }
      }
    }
  }
  /* 모바일은 가장 밑에 두고 해야함! */
  @media only screen and (max-width: 768px) {
    .buttonBox {
      width: 100%;
    }
    .container {
      .chatListBox {
        width: 100%;
        .chatBox {
          padding: 45px 10px;
        }
      }
    }
  }
`;

const KikiList = () => {
  const data = {
    roomName: "더 마블스는 몇 엄복동인가?",
    createdAt: "2023.12.02",
  };
  //   const data = "";
  return (
    <>
      <KikiListComp>
        <div className="container">
          <div className="buttonBox">
            <Button
              children="키키 추가하기"
              active={true}
              front="var(--VIOLET)"
              back="var(--LIGHTVIO)"
            />
          </div>
          <div className="chatListBox">
            {data ? <Kiki data={data} /> : <div>data없음!</div>}
          </div>
        </div>
      </KikiListComp>
    </>
  );
};
export default KikiList;
