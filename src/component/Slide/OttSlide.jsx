import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle"; // 스와이퍼 버튼 css 변경하기 위해 추가
import styled from "styled-components";
import poster1 from "../../images/poster/poster1.jpeg";
import poster2 from "../../images/poster/poster2.jpeg";
import poster3 from "../../images/poster/poster3.jpeg";
import poster4 from "../../images/poster/poster4.jpeg";
import poster5 from "../../images/poster/poster5.jpeg";
import poster6 from "../../images/poster/poster6.jpeg";
import poster7 from "../../images/poster/poster7.webp";
import poster8 from "../../images/poster/poster8.jpeg";
import poster9 from "../../images/poster/poster9.jpeg";
import poster10 from "../../images/poster/poster10.jpeg";

const OttSlideStyle = styled.div`
  padding: 50px 0;
  width: 100%;
  /* outline: 1px solid yellow; */
  .ottRank-slider {
    width: 100%;
    position: relative;
    .swiper-button-prev,
    .swiper-button-next {
      color: white;
      /* width: 20px;
      height: 20px; */
      background-size: 90% auto;
      background-position: center;
      position: absolute;
      top: 50%; // 추가
      transform: translateY(-50%);
      cursor: pointer; // 추가
      z-index: 10; // 추가
    }

    /* 버튼 뒤에 동그란 배경 추가 */
    /* .swiper-button-prev::before,
    .swiper-button-next::before {
      content: "";
      display: block;
      width: 40px;
      height: 40px;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 50%; 
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1; 
    } */
    .swiper-wrapper {
      .slide {
        width: 20%;

        img {
          width: 95%;
          border-radius: 5px;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 20px 0;
    .swiper-wrapper {
      .slide {
        width: 50%;

        img {
          width: 95%;
          border-radius: 5px;
        }
      }
    }
  }
`;

const OttSlide = () => {
  const urls = [
    poster1,
    poster2,
    poster3,
    poster4,
    poster5,
    poster6,
    poster7,
    poster8,
    poster9,
    poster10,
  ];

  // 반응형 적용 : 사이즈가 줄면 두개만 보여지도록
  const [slidesPerView, setSlidesPerView] = useState(
    window.innerWidth > 768 ? 5 : 2
  );

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth > 768 ? 5 : 2);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <OttSlideStyle>
      <Swiper
        className="ottRank-slider"
        loop={false}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={slidesPerView}
        allowTouchMove={true}
        initialSlide={0}
      >
        {urls.map((url, index) => (
          <SwiperSlide className="slide" key={index}>
            <img src={url} alt="ottRank" />
          </SwiperSlide>
        ))}
        {/* css 적용을 위해 스와이퍼 버튼 추가 */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </OttSlideStyle>
  );
};

export default OttSlide;
