// OttSlide.js
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import styled from "styled-components";
import MovieCard from "../MovieSearch/MovieCard";
import OttBoxApi from "../../api/OttBoxApi";
import { useNavigate } from "react-router-dom";
import Modal from "../../util/Modal";

const OttSlideStyle = styled.div`
  padding-top: 50px;
  width: 100%;
  align-items: center;
  .ottRank-slider {
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
      align-items: center;
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

const OttSlide = ({ activeButton }) => {
  const [movieData, setMovieData] = useState([]);

  const navigate = useNavigate();

  //Modal
  // 여기서부터
  const [openModal, setModalOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const [modalType, setModalType] = useState(null);

  // 모달 닫기
  const closeModal = (num) => {
    setModalOpen(false);
  };
  const handleModal = (header, msg, type, num) => {
    setModalOpen(true);
    setModalHeader(header);
    setModalMsg(msg);
    setModalType(type);
  };

  const fetchMoviesByButton = async () => {
    try {
      const data = (() => {
        switch (activeButton) {
          case "tiving":
            return OttBoxApi.getTivingMovies();
          case "netflix":
            return OttBoxApi.getNetflixMovies();
          case "watcha":
            return OttBoxApi.getWatchaMovies();
          default:
            //디폴트 값
            return OttBoxApi.getOttBoxMovies();
        }
      })();

      const result = await data;

      if (result && result.data !== null) {
        console.log(result.data);
        setMovieData(result.data);
      } else {
        console.log("영화 정보가 없습니다.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    try {
      fetchMoviesByButton();
    } catch (e) {
      console.log(e);
    }
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
            <SwiperSlide className="slide" key={movie.title}>
              <MovieCard movie={movie} handleModal={handleModal} />
            </SwiperSlide>
          ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
      <Modal
        open={openModal}
        close={closeModal}
        header={modalHeader}
        children={modalMsg}
        type={modalType}
        confirm={() => {
          navigate("/login");
        }}
      />
    </OttSlideStyle>
  );
};

export default OttSlide;
