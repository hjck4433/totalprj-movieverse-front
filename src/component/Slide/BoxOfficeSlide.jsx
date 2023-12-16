import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import styled from "styled-components";
import MovieCard from "../MovieSearch/MovieCard";

const BoxOfficeSlideStyle = styled.div`
  padding: 50px 0;
  width: 100%;
  align-items: center;
  .boxOfficeRank-slider {
    width: 100%;
    position: relative;
    .swiper-button-prev,
    .swiper-button-next {
      color: #494949;
      background-color: white;
      opacity: 0.5;
      padding: 15px 15px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      cursor: pointer;
      z-index: 10;
    }

    .swiper-wrapper {
      .slide {
        width: 30%;
      }
    }
    .swiper-button-next::after,
    .swiper-button-prev::after {
      /* display: none; */
      font-size: 1.1rem;
      font-weight: 600;
    }
  }
`;

const BoxOfficeSlide = () => {
  const [movieData, setMovieData] = useState([]);

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
    <BoxOfficeSlideStyle>
      <Swiper
        className="boxOfficeRank-slider"
        loop={false}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        allowTouchMove={true}
        initialSlide={0}
        spaceBetween={10}
        breakpoints={{
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 1,
          },
        }}
      >
        {generateMovieCards()}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </BoxOfficeSlideStyle>
  );
};

export default BoxOfficeSlide;
