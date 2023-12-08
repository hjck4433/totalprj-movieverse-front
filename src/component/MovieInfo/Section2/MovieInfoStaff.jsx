import styled from "styled-components";

const MovieStaffStyle = styled.section`
  background-color: white;
  padding: 100px 0;
  .container {
    .content {
      .bigText {
        color: var(--VIOLET);
        margin-bottom: 20px;
        font-weight: 600;
      }
      .divider {
        border-bottom: 1px solid #ccc;
        margin-bottom: 50px;
      }
    }
    p {
      color: black;
      font-size: 1.4em;
      margin-bottom: 40px;
    }
    .smallText {
      .staff {
        width: 100%;
        display: flex;
        p {
          &.movieStaff {
            width: 20%;
            font-weight: 600;
            color: #939393;
            outline: 1px solid red;
            margin-right: 10px;
          }
          &.movieActor {
            width: 60%;
            word-break: keep-all;
          }
        }
      }
    }
  }
`;

const MovieInfoStaff = () => {
  return (
    <MovieStaffStyle>
      <section>
        <div className="container">
          <div className="content">
            <h2 className="bigText">감독 및 출연진</h2>
            <div className="divider"></div>
          </div>
          <div className="smallText">
            <div className="staff">
              <p className="movieStaff">감독</p>
              <p className="movieDirector">불러 오기</p>
            </div>
            <div className="staff">
              <p className="movieStaff">출연 배우</p>
              <p className="movieActor">
                배우
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaa aaaaaa aaaaaaaa aaaaaaaaaaaa
              </p>
            </div>
          </div>
        </div>
      </section>
    </MovieStaffStyle>
  );
};

export default MovieInfoStaff;
