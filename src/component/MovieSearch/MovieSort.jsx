import { useState, useEffect } from "react";
import { styled } from "styled-components";

const MovieSortStyle = styled.div`
  padding: 50px;

  .container {
    display: flex;
    justify-content: flex-end;
  }

  button {
    background: none;
    border: none;
    color: white;

    &:hover {
      cursor: pointer;
    }

    &.recent {
      margin-right: 10px;
      font-weight: ${({ selectedButton }) =>
        selectedButton === "recent" ? "bold" : "normal"};
      font-size: ${({ selectedButton }) =>
        selectedButton === "recent" ? "1.3em" : "1.1em"};
    }

    &.count {
      font-weight: ${({ selectedButton }) =>
        selectedButton === "count" ? "bold" : "normal"};
      font-size: ${({ selectedButton }) =>
        selectedButton === "count" ? "1.3em" : "1.1em"};
    }
  }
`;

const MovieSort = ({ defaultSelectedButton = "recent" }) => {
  const [selectedButton, setSelectedButton] = useState(defaultSelectedButton);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  useEffect(() => {
    setSelectedButton(defaultSelectedButton);
  }, [defaultSelectedButton]);

  return (
    <MovieSortStyle selectedButton={selectedButton}>
      <div className="container">
        <button
          className={`recent ${selectedButton === "recent" ? "selected" : ""}`}
          onClick={() => handleButtonClick("recent")}
        >
          {selectedButton === "recent" ? "최신영화순" : "최신영화순"}
        </button>
        <button
          className={`count ${selectedButton === "count" ? "selected" : ""}`}
          onClick={() => handleButtonClick("count")}
        >
          {selectedButton === "count" ? "누적관객순" : "누적관객순"}
        </button>
      </div>
    </MovieSortStyle>
  );
};

export default MovieSort;