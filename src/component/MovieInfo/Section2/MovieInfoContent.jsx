import styled from "styled-components";

const MovieInfoContentStyle = styled.section`
  background-color: white;
  padding: 100px 0;
  .container {
    padding-left: 50px;
    display: flex-row;
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
    padding: 50px 0;
  }
`;

const MovieInfoContent = () => {
  return (
    <MovieInfoContentStyle>
      <section>
        <div className="container">
          <div className="content">
            <h2 className="bigText">주요 정보</h2>
            <div className="divider"></div>
          </div>
          <div className="smallText">
            <p className="movieContent">줄거리 가져오기</p>
          </div>
        </div>
      </section>
    </MovieInfoContentStyle>
  );
};

export default MovieInfoContent;
