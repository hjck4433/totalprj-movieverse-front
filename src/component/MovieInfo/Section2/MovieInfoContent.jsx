import styled from "styled-components";

const MovieInfoContentStyle = styled.section`
  background-color: white;
  padding: 100px 0;
  .container {
    .content {
      .bigText {
        color: var(--VIOLET);
        padding-top: 100px;
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
    .smallText {
      line-height: 2em;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

const MovieInfoContent = () => {
  const movieData = [
    {
      contents:
        "1979년 12월 12일, 수도 서울 군사반란 발생. 그날, 대한민국의 운명이 바뀌었다. 대한민국을 뒤흔든 10월 26일 이후, 서울에 새로운 바람이 불어온 것도 잠시, 12월 12일, 보안사령관 전두광이 반란을 일으키고 군 내 사조직을 총동원하여 최전선의 전방부대까지 빼내 수도 서울로 불러들인다. 권력에 눈이 먼 전두광 보안사령관의 반란군과 이에 맞선 수도경비사령관 이태신을 비롯한 진압군 사이, 일촉즉발의 9시간이 흘러가는데…목숨을 건 두 세력의 팽팽한 대립과 갈등 오늘 밤, 대한민국 수도에서 가장 치열한 전쟁이 펼쳐진다!",
    },
  ];
  return (
    <>
      {movieData.map((movie, index) => (
        <MovieInfoContentStyle key={index}>
          <section>
            <div className="container">
              <div className="content">
                <h2 className="bigText">주요 정보</h2>
                <div className="divider"></div>
              </div>
              <div className="smallText">
                <p className="movieContent">{movie.contents}</p>
              </div>
            </div>
          </section>
        </MovieInfoContentStyle>
      ))}
    </>
  );
};

export default MovieInfoContent;
