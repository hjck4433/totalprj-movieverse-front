import styled from "styled-components";

export const PostComp = styled.section`
  .container {
    background-color: white;
    padding: 3%;
    border-radius: 5px;

    .titleBox {
      width: 100%;
      border-bottom: 1px solid var(--GREY);
      display: flex;
      /* justify-content: center; */
      align-items: center;
      padding-bottom: 30px;

      .memIconArea {
        width: 15%;
        text-align: center;
        .imgBox {
          width: 100%;
          padding-bottom: 100%;
          position: relative;
          border-radius: 50%;
          background-color: var(--VIOLET);
          img {
            width: 80%;
            position: absolute;
            top: 10%;
            left: 10%;
          }
        }
        p {
          color: black;
          margin-top: 5px;
        }
      }
      .titleElements {
        width: 90%;
        margin-left: 30px;
        /* padding: 30px 0; */
        .topElements {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          .selectedBox {
            width: 40%;
            height: 30px;
            display: flex;
            text-align: center;

            .boardType {
              width: 100px;
              height: 30px;
              background-color: var(--LIGHTVIO);
              border-radius: 15px;
              margin-right: 5px;
              padding: 5px;

              p {
                font-weight: 600;
              }
            }
            .placeType {
              width: 100px;
              height: 30px;
              background-color: var(--BLUE);
              border-radius: 15px;
              padding: 5px;
              p {
                font-weight: 600;
              }
            }
          }
        }
        .uploadedDate {
          color: var(--GREY);
        }
        h3 {
          color: black;
        }
      }
    }
    .contentsBox {
      /* border: 1px solid red; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 5%;
      .introduce {
        width: 90%;
        img {
          width: 100%;
          border-radius: 10px;
        }
      }
      .contentsText {
        width: 100%;
        margin: 40px 0;
        /* border: 1px solid blue; */
        p {
          font-size: 1.2rem;
          font-weight: 300;
          color: black;
          padding-bottom: 5px;
          line-height: 1.5; //줄간격을 위한
        }
      }
    }
    .commentArea {
      h3 {
        color: var(--VIOLET);
        font-weight: 600;
        margin-bottom: 10px;
      }
      .commentList {
        /* border: 1px solid red; */

        .commentBox {
          /* border: 1px solid blue; */
          border-top: 1px solid var(--GREY);
          border-bottom: 1px solid var(--GREY);
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 5px;
          .iconArea {
            width: 10%;
            .imgBox {
              width: 100%;
              padding-bottom: 100%;
              position: relative;
              border-radius: 50%;
              background-color: var(--VIOLET);
              img {
                width: 80%;
                position: absolute;
                top: 10%;
                left: 10%;
              }
            }
          }
          .textArea {
            /* border: 1px solid orange; */
            width: 60%;
            padding: 2%;
            .nickName {
              color: var(--VIOLET);
              font-weight: 600;
              font-size: 1.3rem;
              margin-bottom: 15px;
            }
            .commentText {
              color: black;
              font-size: 1.2rem;
            }
          }
          .rightArea {
            width: 20%;
            padding: 2%;
            /* border: 1px solid blue; */
            .writeDate {
              color: var(--GREY);
              margin-bottom: 20px;
              text-align: right;
            }
            .editBtnBox {
              /* outline: 1px solid red; */
              display: flex;
              justify-content: end;
              Button {
                margin-left: 10px;
              }
            }
          }
        }
      }
      .textInputBox {
        width: 100%;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: end;
        textarea {
          width: 100%;
          height: 150px;
          padding: 8px;
          font-size: 0.9rem;
          margin-bottom: 10px;
          border: 2px solid var(--GREY);
          border-radius: 10px;
          outline-color: var(--GREY);
        }
        .postBtn {
          align-items: right;
          margin-bottom: 30px;
        }
      }
    }
    .listBtnBox {
      display: flex;
      justify-content: center;
    }
  }
`;
