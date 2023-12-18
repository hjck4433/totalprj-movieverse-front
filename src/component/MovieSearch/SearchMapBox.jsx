import { styled } from "styled-components";
import MovieCard from "./MovieCard";
import React, { useEffect, useState, useRef } from "react";
import MovieApi from "../../api/MovieApi";

const SearchMapBoxStyle = styled.div`
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    margin-bottom: 100px;
  }
  @media only screen and (max-width: 768px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const SearchMapBox = () => {
  const [movieSearchData, setMovieSearchData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // 무한 스크롤에는 필요하지 않음
  const [loading, setLoading] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    const fetchMovieSearchData = async () => {
      try {
        setLoading(true);
        const response = await MovieApi.moviePageList(currentPage, 8);
        setMovieSearchData((prevData) => [...prevData, ...response.data]);
        setLoading(false);
      } catch (error) {
        console.error("영화 데이터를 불러오는 중 에러 발생:", error);
        setLoading(false);
      }
    };

    fetchMovieSearchData();
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;

      if (container) {
        const isBottom =
          container.scrollTop + container.clientHeight ===
          container.scrollHeight;

        if (isBottom && !loading) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      }
    };

    const container = containerRef.current;

    console.log("useRef : " + containerRef.current?.scrollTop);

    if (container) {
      container.addEventListener("scroll", handleScroll);

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [loading]);

  // // 무한 스크롤
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isBottom =
  //       window.innerHeight + document.documentElement.scrollTop ===
  //       document.documentElement.offsetHeight;

  //     if (isBottom && !loading) {
  //       setCurrentPage((prevPage) => prevPage + 1);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [loading]);

  return (
    <>
      <SearchMapBoxStyle>
        <div className="container" ref={containerRef}>
          {movieSearchData &&
            movieSearchData.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
      </SearchMapBoxStyle>
    </>
  );
};

export default SearchMapBox;
