// OttSlide.js
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import styled from "styled-components";
import MovieCard from "../MovieSearch/MovieCard";
import OttTivingApi from "../../api/OttTivingApi";
import OttNetflixApi from "../../api/OttNetflixApi";
import OttWatchaApi from "../../api/OttWatcha";

const OttSlideStyle = styled.div`
  // ... (기존 코드)
`;

const OttSlide = ({ activeButton }) => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = (() => {
          switch (activeButton) {
            case "tiving":
              return OttTivingApi.getTivingMovies();
            case "netflix":
              return OttNetflixApi.getNetflixMovies();
            case "watcha":
              return OttWatchaApi.getWatchaMovies();
            default:
              return null;
          }
        })();

        if (data && data.data !== null) {
          setMovieData(data.data);
        } else {
          console.log("영화 정보가 없습니다.");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [activeButton]);

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
