import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import tiving from "../../images/logo_tiving.svg";
import wavve from "../../images/logo_wavve.png";
import watcha from "../../images/logo_watcha.svg";
import OttSlide from "../Slide/OttSlide";

const OTTComp = styled.section`
  width: 100%;
  height: 800px;
  /* padding: 5% 0; */
  background-color: white;
  position: relative;
  .bgBox {
    height: 40%;
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50%;

        .tivingBtn {
          width: 150px;
          height: 60px;
          cursor: pointer;
          border: 0;
          background-color: white;
          box-shadow: 2px 2px 2px 2px rgba(204, 204, 204, 0.4);
          border-radius: 5px;
          align-items: center;
          display: flex;
          justify-content: center;
          margin-right: 10px;
          img {
            width: 85%;
          }
        }
        .wavveBtn {
          width: 150px;
          height: 60px;
          cursor: pointer;
          border: 0;
          background-color: white;
          box-shadow: 2px 2px 2px 2px rgba(204, 204, 204, 0.4);
          border-radius: 5px;
          align-items: center;
          display: flex;
          justify-content: center;
          margin-right: 10px;
          img {
            width: 100%;
          }
        }
        .watchaBtn {
          width: 150px;
          height: 60px;
          cursor: pointer;
          border: 0;
          background-color: white;
          box-shadow: 2px 2px 2px 2px rgba(204, 204, 204, 0.4);
          border-radius: 5px;
          align-items: center;
          display: flex;
          justify-content: center;
          img {
            width: 120%;
          }
        }
      }
      .swiperBasic {
        width: 100%;
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
              <div className="tivingBtn">
                <img src={tiving} alt="tiving" />
              </div>
              <div className="wavveBtn">
                <img src={wavve} alt="wavve" />
              </div>
              <div className="watchaBtn">
                <img src={watcha} alt="watcha" />
              </div>
            </div>
            <div className="swiperBasic">
              <OttSlide />
            </div>
          </div>
        </div>
      </OTTComp>
    </>
  );
};
export default OTT;
