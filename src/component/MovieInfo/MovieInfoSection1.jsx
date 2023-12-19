import styled from "styled-components";

const InfoSection1Style = styled.section`
  background-color: black;
  padding: 90px 0;
  .container {
    display: flex;
    .moviePoster {
      width: 30%;
      margin: 0 10%;
      img {
        width: 100%;
        border-radius: 20px;
        object-fit: cover;
        height: 91.5%;
      }
    }
    .movieOtherInfo {
      flex: 1;
      font-size: 1.4em;
      letter-spacing: -0.8px;
      box-sizing: border-box;
      .infoBox {
        display: flex;
        margin-bottom: 8%;
        .movieInfo {
          margin-right: 10px;
          width: 23%;
          font-weight: 600;
          color: var(--LIGHTVIO);
        }
      }
      .infoTitle {
        .titleMain {
          word-break: keep-all;
          white-space: normal;
          margin-bottom: 5px;
        }
      }
      .infoSubTitle {
        .titleSub {
          color: var(--GREY);
          margin-bottom: 50px;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    background-color: black;
    padding: 50px 0;
    .container {
      width: 100%;

      .moviePoster {
        width: 40%;
        margin: 0 5%;
      }
      .movieOtherInfo {
        .infoBox {
          .movieInfo {
            width: 32%;
          }
        }
      }
    }
  }
`;

const MovieInfoSection1 = ({ movieDetail }) => {
  return (
    <>
      <InfoSection1Style>
        <section>
          <div className="container">
            <div className="moviePoster">
              <img src={movieDetail.posters} alt="PosterImg" />
            </div>
            <div className="movieOtherInfo">
              <div className="infoTitle">
                <h3 className="titleMain">{movieDetail.title}</h3>
              </div>
              <div className="infoSubTitle">
                <p className="titleSub">{movieDetail.titleEng}</p>
              </div>
              <div className="infoBox">
                <p className="movieInfo">개봉</p>
                <p>{movieDetail.reprlsDate}</p>
              </div>
              <div className="infoBox">
                <p className="movieInfo">장르</p>
                <p>{movieDetail.genre}</p>
              </div>
              <div className="infoBox">
                <p className="movieInfo">국가</p>
                <p>{movieDetail.nation}</p>
              </div>
              <div className="infoBox">
                <p className="movieInfo">등급</p>
                <p>{movieDetail.rating}</p>
              </div>
              <div className="infoBox">
                <p className="movieInfo">평점</p>
                <p>{movieDetail.score}</p>
              </div>
              <div className="infoBox">
                <p className="movieInfo">상영시간</p>
                <p>{movieDetail.runtime + "분"}</p>
              </div>
            </div>
          </div>
        </section>
      </InfoSection1Style>
    </>
  );
};

export default MovieInfoSection1;
