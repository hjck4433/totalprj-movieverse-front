import styled from "styled-components";

const InfoSection1Style = styled.section`
  background-color: black;
  padding: 90px 0;
  .container {
    display: flex;
    .moviePoster {
      width: 300px;
      margin-right: 100px;
      margin-left: 100px;
      img {
        width: 100%;
        border-radius: 20px;
        object-fit: cover;
        height: 100%;
      }
    }
    .movieOtherInfo {
      flex: 1;
      font-size: 1.4em;
      letter-spacing: -0.8px;
      box-sizing: border-box;
      .infoBox {
        display: flex;
        margin-top: 40px;
        .movieInfo {
          margin-right: 10px;
          width: 150px;
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
      .moviePoster {
        width: 250px;
        margin-left: 50px;
        margin-right: 50px;
      }
      .movieOtherInfo {
        .infoBox {
          margin-top: 35px;
          .movieInfo {
            width: 100px;
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
            margin-bottom: 30px;
          }
        }
      }
    }
  }
`;

const MovieInfoSection1 = () => {
  return (
    <InfoSection1Style>
      <section>
        <div className="container">
          <div className="moviePoster">
            <img
              src="https://images.unsplash.com/photo-1611267254323-4db7b39c732c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVBJUIzJUEwJUVDJTk2JTkxJUVDJTlEJUI0JTIwJUVDJTgzJTg4JUVCJTgxJUJDfGVufDB8fDB8fHwy"
              alt="PosterImg"
            />
          </div>
          <div className="movieOtherInfo">
            <div className="infoTitle">
              <h3 className="titleMain">프로젝트는 힘들어</h3>
              <p></p>
            </div>
            <div className="infoSubTitle">
              <p className="titleSub">subtitle:</p>
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
      </section>
    </InfoSection1Style>
  );
};

export default MovieInfoSection1;
