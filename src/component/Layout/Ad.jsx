import styled from "styled-components";
import face from "../../images/faceIcon/faceIcon1.png";
import { useNavigate } from "react-router-dom";

const AdComp = styled.div`
  width: 100%;
  background-color: var(--VIOLET);

  .container {
    position: relative;
    display: flex;
    justify-content: center;
  }
  &:hover {
    cursor: pointer;
    transition: 0.3s ease-in;
    background-color: var(--LIGHTVIO);

    p {
      color: var(--DARKBLUE);
    }
  }
  .ad {
    width: 65%;
    padding-left: 5%;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    p {
      font-size: 1.5rem;
      padding-bottom: 10px;
    }
    @media only screen and (max-width: 768px) {
      p {
        font-size: 1.1rem;
      }
    }
    @media only screen and (max-width: 569px) {
      p {
        font-size: 0.9rem;
      }
    }
  }
  .imgWrap {
    width: 20%;
    padding-bottom: 20%;
    position: relative;
    .faceIcon {
      position: absolute;
      /* width: 70%; */
      height: 100%;
      top: 0;
      left: 0;
    }
  }
`;
const Advertise = () => {
  const navigate = useNavigate();

  const toPayment = () => {
    navigate("/Payment");
  };

  return (
    <>
      <AdComp onClick={toPayment}>
        <div className="container">
          <div className="ad">
            <p>지금 멤버십에 가입하고 광고 없는</p>
            <p>쾌적한 환경에서 무비버스를 이용해보세요!</p>
          </div>
          <div className="imgWrap">
            <img className="faceIcon" src={face} alt="faceIcon" />
          </div>
        </div>
      </AdComp>
    </>
  );
};
export default Advertise;
