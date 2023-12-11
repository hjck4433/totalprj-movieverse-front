import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
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
        navigation={true}
        slidesPerView={slidesPerView}
        allowTouchMove={true}
        initialSlide={0}
      >
        {urls.map((url, index) => (
          <SwiperSlide className="slide" key={index}>
            <img src={url} alt="ottRank" />
          </SwiperSlide>
        ))}
      </Swiper>
    </OttSlideStyle>
  );
};

export default OttSlide;
