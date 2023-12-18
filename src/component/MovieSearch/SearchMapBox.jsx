import { styled } from "styled-components";
import MovieCard from "./MovieCard";
import React, { useEffect, useState, useRef } from "react";
import MovieApi from "../../api/MovieApi";

const SearchMapBoxStyle = styled.section`
  .container {
    padding-bottom: 150px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
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
  const [lastPage, setLastPage] = useState(false);

  const end = useRef(null);

  const fetchMovieSearchData = async () => {
    try {
      setLoading(true);
      const response = await MovieApi.moviePageList(currentPage, 8);
      if (response.data.length === 0) {
        //값이 없으면 마지막 페이지
        setLastPage(true);
      } else {
        setMovieSearchData((prevData) => [...prevData, ...response.data]);
        setCurrentPage(currentPage + 1);
      }
      setLoading(false);
    } catch (error) {
      console.error("영화 데이터를 불러오는 중 에러 발생:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieSearchData();
  }, []);

  useEffect(() => {
    if (!loading && !lastPage) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            fetchMovieSearchData();
          }
        },
        { threshold: 1 }
      );
      observer.observe(end.current);

      // Cleanup function
      return () => {
        observer.disconnect();
      };
    }
  }, [loading, lastPage]);

  return (
    <>
      <SearchMapBoxStyle>
        <div className="container">
          {movieSearchData &&
            movieSearchData.map((movie) => (
              <MovieCard movie={movie} key={movie.title} />
            ))}
        </div>
        {!loading && <div ref={end}></div>}
      </SearchMapBoxStyle>
    </>
  );
};

export default SearchMapBox;
