import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { styled } from "styled-components";
import searchBannerPc from "../../../src/images/moviesearch_pc.jpg";

const SearchBannerStyle = styled.section`
  width: 100%;
  background-image: url(${searchBannerPc});
  background-size: cover;
  background-position: center;
  margin-bottom: 100px;
  height: 350px;
  .wrapper {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 80px 0;
    .container {
      text-align: center;
      .searchText {
        margin-bottom: 50px;
      }
      .movieSearchBar {
        width: 100%;
        align-items: center;
        justify-content: center;
        display: flex;
        .inputBox {
          position: relative;
          width: 50%;
          input {
            text-align: center;
            border: none;
            outline: none;
            width: 100%;
            height: 40px;
            border-radius: 5px;
          }
          .searchBox {
            position: absolute;
            top: 0;
            color: black;
            right: 10px;
            padding: 10px;
            cursor: pointer;
            svg {
              font-size: 20px;
            }
          }
        }
      }
    }
    @media only screen and (max-width: 768px) {
      .container {
        .movieSearchBar {
          .inputBox {
            position: relative;
            width: 80%;
            input {
              text-align: center;
              border: none;
              outline: none;
              width: 100%;
              height: 40px;
              border-radius: 5px;
            }
          }
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
              <div className="searchBox">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SearchBannerStyle>
  );
};

export default MovieSearchBanner;
