import styled from "styled-components";

const MovieInfoContentStyle = styled.section`
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
            <p className="movieContent">내용 가져오기</p>
          </div>
        </div>
      </section>
    </MovieInfoContentStyle>
  );
};

export default MovieInfoContent;
