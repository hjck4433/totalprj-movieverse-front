import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../util/Button";
import face from "../../images/faceIcon/faceIcon3.png";
import { useState, useEffect } from "react";

/* 마이페이지 MembershipJoin */
const MembershipJoinComp = styled.section`
  width: 100%;
  background-color: var(--VIOLET);

  .container {
    position: relative;
    display: flex;
    justify-content: center;
    outline: 1px solid red;
  }
  .adWrap {
    outline: 1px solid white;
  }
  .imgWrap {
    outline: 1px solid black;
  }
`;
const MembershipJoin = () => {
  const navigate = useNavigate();

  return (
    <MembershipJoinComp>
      <div className="container">
        <div className="adWrap">
          <div className="ad">
            <p>아직 멤버십 회원이 아니시군요!</p>
          </div>
          <div className="buttonBox">
            <Button children="가입하기" active={true} />
          </div>
        </div>
        <div className="imgWrap">
          <img className="faceIcon" src={face} alt="faceIcon" />
        </div>
      </div>
    </MembershipJoinComp>
  );
};

export default MembershipJoin;
