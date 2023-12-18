import { styled } from "styled-components";
const BoardCardStyle = styled.section`
  .container {
    .boardCardBox {
      padding-top: 90px;
      margin-bottom: 50px;
      .gatherTypeList {
        display: flex;
        margin-bottom: 20px;
        p {
          margin-left: 5px;
        }
      }
      .sortArea {
        display: flex;
        font-weight: 600;
        font-size: 15px;
        margin-bottom: 20px;
        justify-content: flex-end;
        li {
          position: relative;
          cursor: pointer;
          color: var(--GREY);
          &.active {
            color: var(--LIGHTVIO);
          }
          margin-left: 24px;
          &::after {
            content: "";
            width: 2px;
            height: 100%;
            background-color: var(--GREY);
            position: absolute;
            top: 1px;
            left: -11px;
          }
        }
      }
      .mapBox {
        display: flex;
        width: 100%;
        background-color: #ffffff;
        padding: 25px;
        border-radius: 5px;
        margin-bottom: 30px;
        cursor: pointer;
      }

      .imgBox {
        width: 60%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
        }
      }
      .textBox {
        padding-left: 20px;
        .categoryGatherBox {
          display: flex;
          padding-bottom: 15px;
          justify-content: space-between;
          .categoryGather {
            display: flex;
          }
          p {
            margin-left: 10px;
            color: white;
            padding: 5px;
            border-radius: 5px;
          }
          .category {
            background-color: var(--LIGHTVIO);
          }
          .gather {
            background-color: var(--BLUE);
          }
          .regdate {
            color: var(--GREY);
          }
        }
        .contentBox {
          padding-bottom: 120px;
          h3 {
            color: black;
            padding-bottom: 15px;
            font-weight: 600;
          }
          .content {
            padding-right: 50px;
            color: black;
            line-height: 1.5;
          }
        }
        .countBox {
          p {
            text-align: end;
            color: var(--GREY);
          }
        }
      }
      .arrow {
        display: flex;
        align-items: center;
        width: 20%;
        margin: 0 auto;
        justify-content: space-between;
        .icons {
          cursor: pointer;
        }
      }
    }
  }
`;

export default BoardCardStyle;
