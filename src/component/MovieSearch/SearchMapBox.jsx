import { styled } from "styled-components";
import MovieCard from "./MovieCard";
import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    const fetchMovieSearchData = async () => {
      try {
        const response = await MovieApi.getallmovies();
        setMovieSearchData(response.data);
      } catch (error) {
        console.error("Error fetching movieSearchData:", error);
      }
    };

    fetchMovieSearchData();
  }, []);

  return (
    <SearchMapBoxStyle>
      <div className="container">
        {movieSearchData &&
          movieSearchData.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </SearchMapBoxStyle>
  );
};

export default SearchMapBox;
