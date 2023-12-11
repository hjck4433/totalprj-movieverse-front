import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import styled from "styled-components";
import MovieCard from "../MovieSearch/MovieCard";

const OttSlideStyle = styled.div`
  padding: 50px 0;
  width: 100%;
  .ottRank-slider {
    width: 100%;
    position: relative;
    .swiper-button-prev,
    .swiper-button-next {
      color: white;
      background-size: 90% auto;
      background-position: center;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      z-index: 10;
    }
    .swiper-wrapper {
      .slide {
        width: 20%;
        /* margin: 0 5px; */
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 20px 0;
    .swiper-wrapper {
      .slide {
        width: 50%;
      }
    }
  }
`;

const OttSlide = () => {
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

  const generateMovieCards = () => {
    const movieData = [
      { id: 1, imgUrl: "url1" },
      { id: 2, imgUrl: "url2" },
      { id: 3, imgUrl: "url3" },
      { id: 4, imgUrl: "url4" },
      { id: 5, imgUrl: "url5" },
      { id: 6, imgUrl: "url6" },
      { id: 7, imgUrl: "url7" },
      { id: 8, imgUrl: "url8" },
      { id: 9, imgUrl: "url9" },
      { id: 10, imgUrl: "url10" },
    ];

    return movieData.map((data) => (
      <SwiperSlide className="slide" key={data.id}>
        <MovieCard imgUrl={data.imgUrl} />
      </SwiperSlide>
    ));
  };

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
        {generateMovieCards()}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </OttSlideStyle>
  );
};

export default OttSlide;
