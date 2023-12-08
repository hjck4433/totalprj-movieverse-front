import styled from "styled-components";
import Button from "../util/Button";
import face from "../images/faceIcon/faceIcon4.png";

const PayComp = styled.section`
  width: 100%;
  padding: 5% 0;

  .container {
    position: relative;
    overflow: hidden;
    padding: 130px 0;
    background-color: var(--BLUE);
    border-radius: 10px;
    .paymentBox {
      width: 70%;
      padding-left: 15%;
      .textBox {
        margin-bottom: 50px;
        h2 {
          padding-bottom: 5%;
        }
        p {
          font-size: 1.3rem;
          padding-bottom: 2%;
          span {
            font-weight: 600;
            font-size: 1.7rem;
            color: var(--LIGHTVIO);
          }
        }
      }
    }
    .faceIcon {
      position: absolute;
      bottom: -10%;
      right: -8%;
      width: 400px;
    }
    @media only screen and (max-width: 768px) {
      .paymentBox {
        .textBox {
          p {
            font-size: 1.1rem;
            span {
              font-size: 1.4rem;
            }
          }
        }
      }
      .faceIcon {
        width: 300px;
      }
    }
    @media only screen and (max-width: 569px) {
      .paymentBox {
        width: 80%;
        .textBox {
          h2 {
            font-size: 1.6rem;
          }
        }
      }
      .faceIcon {
        width: 220px;
      }
    }
    .buttonBox {
      width: 200px;
      p {
        padding-top: 3%;
        text-align: right;
        font-size: 0.9rem;
      }
    }
  }
`;

const Payment = () => {
  return (
    <>
      <PayComp>
        <div className="container">
          <div className="paymentBox">
            <div className="textBox">
              <h2>앗, 광고가 불편하셨나요?</h2>
              <p>뭅뭅 친구들을 없애고</p>
              <p>쾌적한 무비버스를 즐겨보세요!</p>
              <p>
                단돈 <span>2,900원</span>으로
              </p>
              <p>마음의 평화를 얻을 수 있어요 :)</p>
            </div>
            <div className="buttonBox">
              <Button children="결제하기" active={true} />
              <p>VAT포함</p>
            </div>
          </div>
          <img className="faceIcon" src={face} alt="faceIcon" />
        </div>
      </PayComp>
    </>
  );
};
export default Payment;
