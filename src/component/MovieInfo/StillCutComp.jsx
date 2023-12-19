import styled from "styled-components";

const StillCompStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  .still {
    outline: 1px solid red;
    img {
      width: 100%;
      border-radius: 5px;
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StillCutComp = ({ still }) => {
  return (
    <>
      <StillCompStyle>
        <div className="still">
          <img src={still} alt="stllsImg" />
        </div>
      </StillCompStyle>
    </>
  );
};

export default StillCutComp;
