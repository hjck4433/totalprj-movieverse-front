import { styled } from "styled-components";
import bgPc from "../../images/board_bg_pc.jpg";
const BoardComp = styled.section`
  width: 100%;
  height: 300px;
  outline: 1px solid yellow;
  background-image: url(${bgPc});
  background-size: cover;
  background-position: center;
  .wrapper {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    .container {
      text-align: center;
      .boardCategory {
        display: flex;
        padding-top: 20px;
        margin-bottom: 50px;
        p {
          cursor: pointer;
          margin-right: 5px;
        }
      }
      .boardText {
        margin-bottom: 40px;
        h1 {
          font-size: 2.2em;
          font-weight: 600;
          padding-bottom: 40px;
        }
        p {
          font-size: 1.2em;
        }
      }
      .boardSearch {
        align-items: center;
        justify-content: center;
        display: flex;
        .inputBox {
          input {
            border: none;
            outline: none;
            width: 600px;
            height: 40px;
            border-radius: 5px;
          }
        }
        .searchBox {
          color: black;
          margin-left: -20px;
          cursor: pointer;
        }
      }
    }
  }
`;
export default BoardComp;
