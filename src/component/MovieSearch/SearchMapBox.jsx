import { styled } from "styled-components";
import MovieCard from "./MovieCard";

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
  return (
    <SearchMapBoxStyle>
      <div className="container">
        <MovieCard />
      </div>
    </SearchMapBoxStyle>
  );
};

export default SearchMapBox;
