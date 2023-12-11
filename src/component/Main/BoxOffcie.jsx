import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
// import { EffectCards } from "swiper/modules";

const BoxOfficeComp = styled.section`
  width: 100%;
  padding: 5% 0;
  .container {
    width: 100%;
    padding: 100px 0;

    .boxOfficeBox {
      border: 1px solid red;
      text-align: center;
      align-items: center;
      padding: 20px;
      .textBox {
        h3 {
          font-weight: 600;
        }
        hr {
          width: 130px;
          margin-bottom: 30px;
        }
      }
      .cardSwiper {
      }
    }
  }
`;
const BoxOffice = () => {
  return (
    <>
      <BoxOfficeComp>
        <div className="container">
          <div className="boxOfficeBox">
            <div className="textBox">
              <h3>박스 오피스</h3>
              <hr />
            </div>

            <div className="cardSwiper">{/* 슬라이더 들어갈 자리 */}</div>
          </div>
        </div>
      </BoxOfficeComp>
    </>
  );
};
export default BoxOffice;
