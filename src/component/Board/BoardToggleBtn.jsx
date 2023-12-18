import styled, { css } from "styled-components";
import { useEffect, useState } from "react";

const ToggleBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 35px;
  border-radius: 30px;
  border: 1px solid #909090;
  cursor: pointer;
  background-color: white;
  // 토글내 버튼 색
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
`;

const Circle = styled.div`
  background-color: var(--VIOLET);
  width: 150px;
  height: 30px;
  border-radius: 30px;
  position: absolute;
  left: 1%;
  transition: all 0.8s ease;
  ${(props) =>
    props.toggle &&
    css`
      transform: translate(144px, 0);
      transition: all 0.5s ease;
    `}
`;

const BtnText = styled.div`
  display: inline;
  position: absolute;
  z-index: 5;
  left: ${(props) => (!props.Text ? "60px" : "195px")};
  display: inline;
  color: ${(props) => (!props.toggle ? "GREY" : "white")};
  font-size: 15px;
  font-weight: bold;
  transition: all 0.5s ease;
`;

const ToggleButton = ({ onselect, onselect3, gatherType }) => {
  const [toggle, setToggle] = useState(false);

  const clickedToggle = () => {
    setToggle((prev) => !prev);
    if (toggle === true) {
      onselect(gatherType);
      onselect3(gatherType === "온라인" ? "온라인" : "오프라인");
    } else {
      onselect(gatherType);
      onselect3(gatherType === "온라인" ? "온라인" : "오프라인");
    }
    console.log(gatherType);
  };

  return (
    <>
      <ToggleBtn onClick={clickedToggle} toggle={toggle}>
        <BtnText toggle={!toggle}>온라인</BtnText>
        <BtnText Text={true} toggle={toggle}>
          오프라인
        </BtnText>
        <Circle toggle={toggle} />
      </ToggleBtn>
      {/*<h3>Toggle Switch {!toggle ? "OFF" : "ON"}</h3> on off 기능 */}
    </>
  );
};

export default ToggleButton;
