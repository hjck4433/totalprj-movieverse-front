import styled from "styled-components";
import StillCutComp from "./StillCutComp";

const MovieInfoStillStyle = styled.section`
  background-color: white;
  .container {
    display: grid;
    .content {
      margin-left: 50px;
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
    .movieStill {
      margin-left: 50px;
    }
    p {
      color: black;
      font-size: 1.4em;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 50px 0;
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