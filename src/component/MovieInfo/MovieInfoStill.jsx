import styled from "styled-components";
import StillCutComp from "./StillCutComp";

const MovieInfoStillStyle = styled.section`
  background-color: white;
  padding-bottom: 100px;
  .container {
    display: grid;
    .content {
      .captionText {
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

const MovieInfoStill = ({ movieDetail }) => {
  // stils 처리 리스트로 뽑아내기 단 정보가 있을때
  const stills = movieDetail.stlls ? movieDetail.stlls.split("|") : [];

  return (
    <>
      <MovieInfoStillStyle>
        <section>
          <div className="container">
            <div className="content">
              <h2 className="captionText">스틸 컷</h2>
              <div className="divider"></div>
            </div>
            <div className="movieStill">
              {stills &&
                stills.map((still, index) => (
                  <StillCutComp key={index} still={still} />
                ))}
            </div>
          </div>
        </section>
      </MovieInfoStillStyle>
    </>
  );
};

export default MovieInfoStill;
