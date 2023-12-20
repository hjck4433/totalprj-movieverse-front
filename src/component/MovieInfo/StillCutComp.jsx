import styled from "styled-components";

const StillCompStyle = styled.div`
  .still {
    img {
      width: 100%;
      border-radius: 5px;
    }
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
