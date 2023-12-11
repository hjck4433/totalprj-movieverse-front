import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../util/Button";
import topBg from "../../images/main_top_mo.jpg";
const MainTopComp = styled.section`
  width: 100%;
  height: 600px;
  background-image: url(${topBg});
  background-size: cover;
  background-position: center;
  .wrapper {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    .container {
      padding-top: 130px;
      .elements {
        /* padding: 30px; */
        .textBox {
          h4 {
            margin-bottom: 8px;
            font-size: 1.5rem;
          }
          h2 {
            margin-bottom: 30px;
            color: var(--LIGHTVIO);
          }
        }
        Button {
          font-size: 1.5rem;
          margin-right: 25px;
        }
      }
    }
    @media only screen and (max-width: 768px) {
      .container {
        padding-left: 35px;
        .elements {
          align-items: center;
          .textBox {
            h4 {
              font-size: 1.2rem;
            }
            h2 {
              font-size: 1.8rem;
            }
          }
          Button {
            width: 180px;
            height: 180px;
            font-size: 1.3rem;
            margin-right: 20px;
          }
        }
      }
    }
  }
`;
const MainTop = () => {
  const navigate = useNavigate();
  const toKiki = () => {
    navigate("/kikilist");
  };
  const toMoim = () => {
    navigate("/board/:id");
  };
  return (
    <>
      <MainTopComp>
        <div className="wrapper">
          <div className="container">
            <div className="elements">
              <div className="textBox">
                <h4>함께 보는 영화,</h4>
                <h4>영화 취향으로 하나되는 세상!</h4>
                <h2>무비버스</h2>
              </div>
              <Button
                className="kikiBtn"
                children="무비키키"
                active={true}
                height="200px"
                front="var(--VIOLET)"
                back="var(--BLUE)"
                clickEvt={toKiki}
              ></Button>
              <Button
                className="moimBtn"
                children="무비모임"
                active={true}
                height="200px"
                back="var(--BLUE)"
                clickEvt={toMoim}
              ></Button>
            </div>
          </div>
        </div>
      </MainTopComp>
    </>
  );
};

export default MainTop;