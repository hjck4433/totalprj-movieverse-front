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
        font-size: 0.9rem;
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
      .boardMap {
        margin-bottom: 80px;
        .mapBox {
          display: flex;
          width: 100%;
          height: 100%;
          background-color: #ffffff;
          padding: 20px;
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
          padding-left: 15px;
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
            padding-bottom: 15%;
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
      }
      .arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 80px;

        .icons {
          cursor: pointer;
          margin-left: 12px;
        }
      }
      .newPostBtn {
        margin-bottom: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      .boardCardBox {
        .gatherTypeList {
        }
        .sortArea {
          font-size: 0.9rem;
          li {
          }
        }
        .boardMap {
          .mapBox {
            .imgBox {
              width: 110%;
              img {
              }
            }
          }
        }
        .arrow {
        }
      }
    }
  }
`;

export default BoardCardStyle;
