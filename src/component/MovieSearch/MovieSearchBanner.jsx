import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { styled } from "styled-components";
import searchBannerPc from "../../../src/images/moviesearch_pc.jpg";

const SearchBannerStyle = styled.section`
  width: 100%;
  background-image: url(${searchBannerPc});
  background-size: cover;
  background-position: center;
  .wrapper {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 80px 0;
    .container {
      text-align: center;
      .searchText {
        padding-bottom: 50px;
      }
      .movieSearchBar {
        align-items: center;
        justify-content: center;
        display: flex;
        .inputBox {
          input {
            border: none;
            outline: none;
            width: 600px;
            height: 40px;
            border-radius: 5px;
          }
        }
        .searchBox {
          color: black;
          margin-left: -20px;
          cursor: pointer;
        }
      }
    }
  }
`;

const MovieSearchBanner = () => {
  return (
    <SearchBannerStyle>
      <div className="wrapper">
        <div className="container">
          <div className="searchText">
            <h2>영화 검색</h2>
          </div>
          <div className="movieSearchBar">
            <div className="inputBox">
              <input type="text" placeholder="찾으시는 영화를 검색하세요." />
            </div>
            <div className="searchBox">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
      </div>
    </SearchBannerStyle>
  );
};

export default MovieSearchBanner;
