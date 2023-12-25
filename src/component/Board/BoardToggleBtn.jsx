import styled, { css } from "styled-components";
import { useEffect, useState } from "react";

const ToggleBtn = styled.button`
  width: 25%;
  border-radius: 30px;
  padding: 5px;
  border: 1px solid #909090;
  overflow: hidden;
  cursor: pointer;
  background-color: white;
  position: relative;
  transition: all 0.5s ease;
  .btnBox {
    display: flex;
    justify-content: space-around;
    outline: 1px solid yellow;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: 40%;
  }
`;

const BtnText = styled.div`
  width: 50%;
  z-index: 5;
  left: ${(props) => (!props.Text ? "60px" : "195px")};
  color: ${(props) => (!props.toggle ? "GREY" : "white")};
  font-size: 15px;
  font-weight: bold;
  transition: all 0.5s ease;
`;

const Circle = styled.div`
  background-color: var(--VIOLET);
  width: 49%;
  height: 90%;
  border-radius: 30px;
  position: absolute;
  left: 2%;
  top: 6%;
  transition: all 0.8s ease;
  ${(props) =>
    props.toggle &&
    css`
      transform: translate(98%, 0);
      transition: all 0.5s ease;
    `}
`;

const ToggleButton = ({ onChange, gatherType }) => {
  const [toggle, setToggle] = useState(false);

  const clickedToggle = () => {
    setToggle((prev) => !prev);
    onChange();
  };

  return (
    <>
      <ToggleBtn onClick={clickedToggle} toggle={toggle}>
        <div className="btnBox">
          <BtnText toggle={!toggle}>온라인</BtnText>
          <BtnText Text={true} toggle={toggle}>
            오프라인
          </BtnText>
        </div>
        <Circle toggle={toggle} className="right" />
      </ToggleBtn>
    </>
  );
};

export default ToggleButton;
