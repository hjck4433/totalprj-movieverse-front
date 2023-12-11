import styled from "styled-components";

const StillCompStyle = styled.section`
  .container {
    outline: 1px solid red;
    .still {
    }
  }
`;

const StillCutComp = () => {
  return (
    <StillCompStyle>
      <section>
        <div className="container">
          <div className="still">
            <img
              src="https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Ff47bdb7c3174e8bcf43fb6ab27283fc2f4d34555"
              alt="stillImg"
            />
          </div>
        </div>
      </section>
    </StillCompStyle>
  );
};

export default StillCutComp;
