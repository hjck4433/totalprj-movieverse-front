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

const SearchMapBox = ({ sortType, keyword }) => {
  const [movieSearchData, setMovieSearchData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [lastPage, setLastPage] = useState(false);

  const end = useRef(null);

  const fetchMovieData = async () => {
    try {
      setLoading(true);

      const res = await MovieApi.getMovieList(
        currentPage,
        8,
        sortType,
        keyword
      );

      if (res.data.length === 0) {
        //값이 없으면 마지막 페이지
        setLastPage(true);
      } else {
        setMovieSearchData((prevData) => [...prevData, ...res.data]);

        // 현재 타입에 따라 currentPage 갱신
        setCurrentPage((prevPage) => prevPage + 1);
      }

      setLoading(false);
    } catch (error) {
      console.error("영화 데이터를 불러오는 중 에러 발생:", error);
      setLoading(false);
    }
  };

  const fetchFirstMovieData = async () => {
    try {
      setCurrentPage(0);
      setMovieSearchData([]);
      setLastPage(false);
      setLoading(true);
      const res = await MovieApi.getMovieList(0, 8, sortType, keyword);

      if (res.data !== null) {
        setMovieSearchData(res.data);
        setLoading(false);
        setCurrentPage(1);
      }
    } catch (error) {
      console.error("영화 데이터를 불러오는 중 에러 발생:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFirstMovieData();

    console.log("sortType" + sortType);
  }, [sortType, keyword]);

  useEffect(() => {
    console.log("currentPage" + currentPage);
  }, [currentPage]);

  useEffect(() => {
    console.log(keyword);
    if (!loading && !lastPage) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            fetchMovieData();
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
  }, [loading, lastPage, currentPage, keyword]);

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
