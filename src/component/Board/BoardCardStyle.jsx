import { styled } from "styled-components";
const BoardCardStyle = styled.section`
  .container {
    .boardCardBox {
      outline: 1px solid;
      padding-top: 50px;
      margin-bottom: 50px;
      .gatherTypeList {
        display: flex;
        p {
          margin-left: 5px;
        }
      }
      .boardSort {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 25px;
        p {
          margin-left: 10px;
        }
      }
      /* .boardMap {
        outline: 1px solid red;
        width: 100%;
        background-color: #ffffff;
        padding: 25px;
        border-radius: 5px; */
      .mapBox {
        display: flex;
        outline: 1px solid red;
        width: 100%;
        background-color: #ffffff;
        padding: 25px;
        border-radius: 5px;
        margin-bottom: 30px;
      }

      .imgBox {
        width: 60%;
        img {
          width: 100%;
          height: 100%;
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
        /* } */
      }
    }
  }
`;

export default BoardCardStyle;
