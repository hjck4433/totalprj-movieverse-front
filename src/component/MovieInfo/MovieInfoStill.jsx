import styled from "styled-components";
import StillCutComp from "./StillCutComp";

const MovieInfoStillStyle = styled.section`
  background-color: white;
  outline: 1px solid red;
  padding-bottom: 100px;
  .container {
    outline: 1px solid blue;
    display: grid;
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
    }
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 50px;
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
            <StillCutComp />
          </div>
        </div>
      </section>
    </MovieInfoStillStyle>
  );
};

export default MovieInfoStill;
