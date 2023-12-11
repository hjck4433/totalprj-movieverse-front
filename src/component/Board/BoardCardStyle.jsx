import { styled } from "styled-components";

const CardListComp = styled.section`
  .container {
    padding-top: 50px;
    .gatherTypeList {
      display: flex;
    }
    .boardSort {
      display: flex;
    }
    .boardCardBox {
      outline: 1px solid;
    }
    .boardMap {
      .cardimgText {
        outline: 1px solid red;

        .imgBox {
          width: 300px;
          height: 300px;
          .cardImg {
            outline: 1px solid red;
            width: 100%;
            height: 100%;
          }
          .categoryGatherType {
            display: flex;
          }
        }
      }
    }
  }
`;

export default CardListComp;
