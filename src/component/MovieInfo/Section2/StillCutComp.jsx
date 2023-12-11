import styled from "styled-components";

const StillCompStyle = styled.div`
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    outline: 1px solid blue;
    margin-bottom: 180px;

    .still {
      outline: 1px solid red;
      img {
        width: 100%;
        border-radius: 5px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const StillCutComp = () => {
  return (
    <StillCompStyle>
      <div className="container">
        <div className="still">
          <img
            src="https://t1.daumcdn.net/movie/f93e7e4923c0091d0a290264fcec8153df19a11d"
            alt=""
          />
        </div>
        <div className="still">
          <img
            src="https://t1.daumcdn.net/movie/f93e7e4923c0091d0a290264fcec8153df19a11d"
            alt=""
          />
        </div>
        <div className="still">
          <img
            src="https://t1.daumcdn.net/movie/f93e7e4923c0091d0a290264fcec8153df19a11d"
            alt=""
          />
        </div>
        <div className="still">
          <img
            src="https://t1.daumcdn.net/movie/f93e7e4923c0091d0a290264fcec8153df19a11d"
            alt=""
          />
        </div>
        <div className="still">
          <img
            src="https://t1.daumcdn.net/movie/f93e7e4923c0091d0a290264fcec8153df19a11d"
            alt=""
          />
        </div>
      </div>
    </StillCompStyle>
  );
};

export default StillCutComp;
