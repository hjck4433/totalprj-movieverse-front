import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import tiving from "../../images/logo_tiving.svg";
import wavve from "../../images/logo_wavve.png";
import watcha from "../../images/logo_watcha.svg";

const OTTComp = styled.section`
  width: 100%;
  height: 800px;
  padding: 5% 0;
  background-color: white;
  position: relative;
  .bgBox {
    height: 250px;
    background-color: var(--LIGHTVIO);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .container {
    width: 100%;
    padding: 100px 0;
    .ottRankBox {
      border: 1px solid red;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      padding: 20px;
      h3 {
        font-weight: 600;
        color: black;
      }
      hr {
        width: 130px;
        margin-bottom: 30px;
      }
      .ottBtnBox {
        border: 1px solid blue;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50%;
        button {
          width: 150px;
          height: 50px;
          cursor: pointer;
          margin: 0 10px;
          border: 0;
          background-color: white;
          box-shadow: 2px 2px 2px 2px rgba(204, 204, 204, 0.4);

          border-radius: 5px;
          img {
            /* height: 60px; */
            height: 100%;
            width: 100%;
          }
        }
      }
      .swiperBasic {
      }
    }
  }
`;
const OTT = () => {
  return (
    <>
      <OTTComp>
        <div className="bgBox"></div>
        <div className="container">
          <div className="ottRankBox">
            <h3>OTT별 순위</h3>
            <hr />
            <div className="ottBtnBox">
              <button className="tivingBtn">
                <img src={tiving} alt="tiving" />
              </button>
              <button className="wavveBtn">
                <img src={wavve} alt="wavve" />
              </button>
              <button className="watcha">
                <img src={watcha} alt="watcha" />
              </button>
            </div>
            <div className="swiperBasic">{/* 기본 슬라이더 들어감 */}</div>
          </div>
        </div>
      </OTTComp>
    </>
  );
};
export default OTT;
