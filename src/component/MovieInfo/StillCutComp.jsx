import styled from "styled-components";

const StillCompStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  .still {
    img {
      width: 100%;
      border-radius: 5px;
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StillCutComp = () => {
  const movieData = [
    {
      stlls:
        "https://t1.daumcdn.net/movie/f93e7e4923c0091d0a290264fcec8153df19a11d",
    },
  ];
  return (
    <>
      {movieData.map((movie, index) => (
        <StillCompStyle key={index}>
          <div className="still">
            <img src={movie.stlls} alt="" />
          </div>
        </StillCompStyle>
      ))}
    </>
  );
};

export default StillCutComp;
