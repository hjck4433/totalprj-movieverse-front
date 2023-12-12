import styled from "styled-components";

const MovieStaffStyle = styled.section`
  background-color: white;
  outline: 1px solid red;
  padding: 100px 0;
  .container {
    outline: 1px solid blue;
    .content {
      .bigText {
        color: var(--VIOLET);
        margin-bottom: 20px;
        font-weight: 600;
      }
      .divider {
        border-bottom: 1px solid var(--GREY);
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
            width: 15%;
            font-weight: 600;
            color: var(--GREY);
            margin-right: 10px;
          }
          &.movieActor {
            width: 80%;
            word-break: keep-all;
            white-space: normal;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

const MovieInfoStaff = () => {
  const movieData = [
    {
      director: "김현지",
      actor: "김현지, 박소현, 유현주, 이재원, 이세웅",
    },
  ];
  return (
    <>
      {movieData.map((movie, index) => (
        <MovieStaffStyle key={index}>
          <section>
            <div className="container">
              <div className="content">
                <h2 className="bigText">감독 및 출연진</h2>
                <div className="divider"></div>
              </div>
              <div className="smallText">
                <div className="staff">
                  <p className="movieStaff">감독</p>
                  <p className="movieDirector">{movie.director}</p>
                </div>
                <div className="staff">
                  <p className="movieStaff">출연 배우</p>
                  <p className="movieActor">{movie.actor}</p>
                </div>
              </div>
            </div>
          </section>
        </MovieStaffStyle>
      ))}
    </>
  );
};

export default MovieInfoStaff;
