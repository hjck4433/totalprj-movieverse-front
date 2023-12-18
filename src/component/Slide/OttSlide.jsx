import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import styled from "styled-components";
import MovieCard from "../MovieSearch/MovieCard";

const OttSlideStyle = styled.div`
  padding-top: 50px;
  width: 100%;
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
  .swiper .swiper-wrapper {
    align-items: center;
    .slide {
      width: 30%;

      /* margin: 0 5px; */
    }
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    /* display: none; */
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

const OttSlide = () => {
  const [movieData, setMovieData] = useState([]);

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
        allowTouchMove={true}
        initialSlide={0}
        spaceBetween={10}
        breakpoints={{
          992: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // 576: {
          //   slidesPerView: 2,
          //   spaceBetween: 20,
          // },
          300: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {movieData &&
          movieData.map((movie) => (
            <SwiperSlide className="slide" key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </OttSlideStyle>
  );
};

export default OttSlide;
