import { styled } from "styled-components";

const SearchMapBoxStyle = styled.div`
  padding: 40px 0;

  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;

    .sortedPoster {
      position: relative;

      img {
        width: 100%;
        border-radius: 5px;
      }

      .overlay {
        position: absolute;
        border-radius: 5px;
        padding: 40px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        flex-direction: column; /* 세로 방향으로 배치 */
        align-items: flex-start;
        justify-content: space-between; /* 각 요소 사이에 여백 추가 */
        opacity: 0;
        transition: opacity 0.3s;

        .contents {
          color: white;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 8;
          -webkit-box-orient: vertical;
          position: relative;
        }

        .hoverInfo {
          .title {
            font-size: 1.2em;
            font-weight: 600;
          }
          .contents {
            font-size: 1em;
            padding: 20px 0;
            line-height: 1.4em;
            margin-bottom: 35px;
          }
          .score {
            padding: 25px 0;
            font-weight: 300;
            font-size: 1em;
            border-top: 1px solid var(--GREY);
            display: flex;
            justify-content: space-between;
            align-items: center;
            .scoreText {
            }
            .scoreNum {
              font-size: 1.8rem;
              font-weight: 600;
              color: var(--LIGHTVIO);
            }
          }
        }
      }

      &:hover .overlay {
        opacity: 1; // 호버 시 오버레이
        content: "...";
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
      .sortedPoster {
        .overlay {
          .hoverInfo {
            .title {
              font-size: 1.5rem;
              padding-bottom: 20px;
            }
            .contents {
              font-size: 1rem;
            }
            .score {
              .scoreText {
                font-size: 1rem;
              }
              .scoreNum {
                font-size: 1.8rem;
              }
            }
          }
        }
      }
    }
  }
`;

const SearchMapBox = () => {
  return (
    <SearchMapBoxStyle>
      <div className="container">
        <div className="sortedPoster">
          <img src="https://img.movist.com/?img=/x00/05/96/41_p1.jpg" alt="" />
          <div className="overlay">
            <div className="hoverInfo">
              <p className="title">서울의봄</p>
              <p className="contents">
                《서울의 봄》은 2023년 11월 22일 개봉한 대한민국의 역사 영화로,
                12.12 사태를 다루었다. 감독은 김성수이고, 황정민, 정우성 등이
                출연하였다. 군사 반란이 일어난 1979년 12월 12일 저녁 7시부터
                이튿날 새벽 4시까지의 9시간을, 영화 141분에 담았다.《서울의
                봄》은 2023년 11월 22일 개봉한 대한민국의 역사 영화로, 12.12
                사태를 다루었다. 감독은 김성수이고, 황정민, 정우성 등이
                출연하였다. 군사 반란이 일어난 1979년 12월 12일 저녁 7시부터
                이튿날 새벽 4시까지의 9시간을, 영화 141분에 담았다.
              </p>
              <p className="score">
                <span className="scoreText">관람평</span>
                <span className="scoreNum">9.0</span>
              </p>
            </div>
          </div>
        </div>
        <div className="sortedPoster">
          <img src="https://img.movist.com/?img=/x00/05/96/41_p1.jpg" alt="" />
          <div className="overlay">
            <div className="hoverInfo">
              <p className="title">서울의봄</p>
              <p className="contents">
                《서울의 봄》은 2023년 11월 22일 개봉한 대한민국의 역사 영화로,
                12.12 사태를 다루었다. 감독은 김성수이고, 황정민, 정우성 등이
                출연하였다. 군사 반란이 일어난 1979년 12월 12일 저녁 7시부터
                이튿날 새벽 4시까지의 9시간을, 영화 141분에 담았다.
              </p>
              <p className="score">
                <span className="scoreText">관람평</span>
                <span className="scoreNum">9.0</span>
              </p>
            </div>
          </div>
        </div>
        <div className="sortedPoster">
          <img src="https://img.movist.com/?img=/x00/05/96/41_p1.jpg" alt="" />
          <div className="overlay">
            <div className="hoverInfo">
              <p className="title">서울의봄</p>
              <p className="contents">
                《서울의 봄》은 2023년 11월 22일 개봉한 대한민국의 역사 영화로,
                12.12 사태를 다루었다. 감독은 김성수이고, 황정민, 정우성 등이
                출연하였다. 군사 반란이 일어난 1979년 12월 12일 저녁 7시부터
                이튿날 새벽 4시까지의 9시간을, 영화 141분에 담았다.
              </p>
              <p className="score">
                <span className="scoreText">관람평</span>
                <span className="scoreNum">9.0</span>
              </p>
            </div>
          </div>
        </div>
        <div className="sortedPoster">
          <img src="https://img.movist.com/?img=/x00/05/96/41_p1.jpg" alt="" />
          <div className="overlay">
            <div className="hoverInfo">
              <p className="title">서울의봄</p>
              <p className="contents">
                《서울의 봄》은 2023년 11월 22일 개봉한 대한민국의 역사 영화로,
                12.12 사태를 다루었다. 감독은 김성수이고, 황정민, 정우성 등이
                출연하였다. 군사 반란이 일어난 1979년 12월 12일 저녁 7시부터
                이튿날 새벽 4시까지의 9시간을, 영화 141분에 담았다.
              </p>
              <p className="score">
                <span className="scoreText">관람평</span>
                <span className="scoreNum">9.0</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </SearchMapBoxStyle>
  );
};

export default SearchMapBox;
