import { useState, useEffect } from "react";
import { styled } from "styled-components";

const MovieSortStyle = styled.div`
  .container {
    margin-bottom: 40px;
    height: 50px;
    .buttonBox {
      display: flex;
      justify-content: flex-end;
      align-items: baseline;
      button {
        background: none;
        border: none;
        color: white;
        transition: 0.3s ease-in;

        &:hover {
          cursor: pointer;
        }

        &.recent {
          margin-right: 10px;
          vertical-align: text-bottom;
          font-weight: ${({ selectedButton }) =>
            selectedButton === "recent" ? "bold" : "normal"};
          font-size: ${({ selectedButton }) =>
            selectedButton === "recent" ? "1.3em" : "1.1em"};
          line-height: 1;
        }

        &.count {
          vertical-align: text-bottom;
          font-weight: ${({ selectedButton }) =>
            selectedButton === "count" ? "bold" : "normal"};
          font-size: ${({ selectedButton }) =>
            selectedButton === "count" ? "1.3em" : "1.1em"};
          line-height: 1;
        }
      }
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
        <div className="buttonBox">
          <button
            className={`recent ${
              selectedButton === "recent" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("recent")}
          >
            최신영화순
          </button>
          <button
            className={`count ${selectedButton === "count" ? "selected" : ""}`}
            onClick={() => handleButtonClick("count")}
          >
            누적관객순
          </button>
        </div>
      </div>
    </MovieSortStyle>
  );
};

export default MovieSort;
