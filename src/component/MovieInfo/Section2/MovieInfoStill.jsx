import styled from "styled-components";

const MovieInfoStillStyle = styled.section`
  background-color: white;
  padding: 100px 0;
  .container {
    display: flex-row;
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
    }
  }
`;

const MovieInfoStill = () => {
  return (
    <MovieInfoStillStyle>
      <section>
        <div className="container">
          <div className="content">
            <h2 className="bigText">스틸 컷</h2>
            <div className="divider"></div>
          </div>
          <div className="movieStill">
            <p>이미지 가져오기</p>
          </div>
        </div>
      </section>
    </MovieInfoStillStyle>
  );
};

export default MovieInfoStill;
