import styled from "styled-components";

const InfoSection1Style = styled.section`
  background-color: black;
  width: 100%;
  padding: 90px 0;
  .container {
    display: flex;
    position: relative;
    .movieDetail {
      flex-grow: 4.5;
      .moviePoster {
        width: 80%;
        height: 95%;
        padding-bottom: 80%;
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        img {
          width: 100%;
          height: 100%;
          position: absolute;
        }
      }
    }
    .movieOtherInfo {
      flex-grow: 5.5;
      font-size: 1.4em;
      letter-spacing: -0.8px;
      .infoBox {
        display: flex;
        margin-bottom: 30px;
        .movieInfo {
          margin-right: 10px;
          width: 25%;
          font-weight: 600;
          color: var(--LIGHTVIO);
        }
        .titleMain {
        }
        .titleSub {
          color: #ccc;
          margin-bottom: 15px;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 50px 0;
    .container {
      display: flex;
      padding-left: 50px;
      .movieDetail {
        flex-grow: 5;
        .moviePoster {
          width: 80%;
          height: 100%;
          margin-right: 40px;
          img {
            width: 100%;
            height: 97%;
            position: absolute;
          }
        }
      }
      .movieOtherInfo {
        flex-grow: 5;
        .infoBox {
          margin-bottom: 20px;
          .movieInfo {
            margin-right: 10px;
            width: 25%;
            font-weight: 600;
            color: var(--LIGHTVIO);
          }
          .titleMain {
          }
          .titleSub {
            color: #ccc;
            margin-bottom: 15px;
          }
        }
      }
    }
  }
`;

const MovieInfoSection1 = () => {
  return (
    <InfoSection1Style>
      <div className="container">
        <div className="movieDetail">
          <div className="moviePoster">{<img src="" alt="" />}</div>
        </div>
        <div className="movieOtherInfo">
          <div className="infoBox">
            <h3 className="titleMain">제목1</h3>
            <p></p>
          </div>
          <div className="infoBox">
            <p className="titleSub">제목2</p>
            <p></p>
          </div>
          <div className="infoBox">
            <p className="movieInfo">개봉</p>
            <p>2023.12.08</p>
          </div>
          <div className="infoBox">
            <p className="movieInfo">장르</p>
          </div>
          <div className="infoBox">
            <p className="movieInfo">국가</p>
          </div>
          <div className="infoBox">
            <p className="movieInfo">등급</p>
          </div>
          <div className="infoBox">
            <p className="movieInfo">상영시간</p>
          </div>
          <div className="infoBox">
            <p className="movieInfo">누적관객수</p>
            <p>20,231,208명</p>
          </div>
        </div>
      </div>
    </InfoSection1Style>
  );
};

export default MovieInfoSection1;
