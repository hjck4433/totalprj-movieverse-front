import { styled } from "styled-components";
import Bookmark from "../MovieSearch/Bookmark";

const MovieCardComp = styled.div`
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 5px;
  }

  .overlay {
    position: absolute;
    /* outline: 1px solid red; */
    border-radius: 5px;
    padding: 8% 10%;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 0;
    transition: opacity 0.3s;
    .hoverInfo {
      width: 100%;
      height: 100%;
      text-align: left;
      .title {
        font-size: 1.2em;
        font-weight: 600;
        margin-bottom: 8%;
      }
      .contents {
        font-size: 0.8em;
        line-height: 1.4em;
        margin-bottom: 10px;
        word-break: break-all;
        text-overflow: ellipsis;
        height: 68%;
        overflow: hidden;
      }
      .score {
        position: absolute;
        width: 80%;
        left: 10%;
        bottom: 5%;
        font-weight: 300;
        font-size: 1em;
        border-top: 1px solid var(--GREY);
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
        /* text-align: left; */
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
  }
  @media only screen and (max-width: 768px) {
    .overlay {
      .hoverInfo {
        .title {
          font-size: 1.5rem;
        }
        .contents {
          font-size: 0.9rem;
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
`;

const MovieCard = () => {
  const movieData = [
    {
      img: "https://img.movist.com/?img=/x00/05/96/41_p1.jpg",
      title: "서울의 봄",
      contents:
        "《서울의 봄》은 2023년 11월 22일 개봉한 대한민국의 역사 영화로,12.12 사태를 다루었다. 감독은 김성수이고, 황정민, 정우성 등이 출연하였다. 군사 반란이 일어난 1979년 12월 12일 저녁 7시부터 이튿날 새벽 4시까지의 9시간을, 영화 141분에 담았다.《서울의 봄》은 2023년 11월 22일 개봉한 대한민국의 역사 영화로, 12.12 사태를 다루었다. 감독은 김성수이고, 황정민, 정우성 등이 출연하였다. 군사 반란이 일어난 1979년 12월 12일 저녁 7시부터 이튿날 새벽 4시까지의 9시간을, 영화 141분에 담았다.",
      scoreNum: "9.0",
    },
  ];

  return (
    <>
      {movieData.map((movie, index) => (
        <MovieCardComp key={index}>
          <img src={movie.img} alt="" />
          <div className="overlay">
            <div className="hoverInfo">
              <p className="title">{movie.title}</p>
              <p className="contents">{movie.contents}</p>
              <p className="score">
                <span className="scoreText">관람평</span>
                <span className="scoreNum">{movie.scoreNum}</span>
              </p>
            </div>
            <Bookmark />
          </div>
        </MovieCardComp>
      ))}
    </>
  );
};
export default MovieCard;
