import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const FAQComp = styled.section`
  min-height: 40vw;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 60px 0;
    padding-bottom: 130px;
    .faqHeader {
      margin-bottom: 80px;
    }
    .faqMap {
      width: 80%;
      margin: 0 auto;
      li {
        position: relative;
        border-radius: 5px;
        background-color: rgba(42, 33, 71, 0.9);
        padding: 15px;
        font-size: 1.3rem;
        font-weight: 500;

        .faqBox {
          display: flex;

          .title {
            color: white;
            padding-left: 10px;
          }
        }
        .toggle {
          transition: 0.4s ease-in;
          overflow: hidden;
          height: 0;
          padding: 0;

          line-height: 1.6;
          font-size: 0.8em;
          &.active {
            overflow: visible;
            height: auto;
            padding-top: 20px;
          }
          p {
            margin: 0 auto;
            width: 100%;
            color: var(--GREY);
            padding: 10px;
            font-weight: 400;
          }
        }

        svg {
          color: var(--GREY);
          position: absolute;
          top: 0;
          right: 0;
          padding: 15px;
          cursor: pointer;
        }
      }
    }
  }
`;
const Faq = ({ faqPlus }) => {
  const [icon, setIcon] = useState(faAngleDown);
  const [active, setActive] = useState("");

  const onClick = () => {
    icon === faAngleDown ? setIcon(faAngleUp) : setIcon(faAngleDown);
    active === "" ? setActive("active") : setActive("");
  };
  return (
    <>
      <li>
        <div className="faqBox">
          <div className="title">{faqPlus.title}</div>
        </div>

        <div className={`toggle ${active}`}>
          <p>{faqPlus.contents}</p>
        </div>
        <FontAwesomeIcon onClick={onClick} icon={icon} />
      </li>
    </>
  );
};
const FAQList = () => {
  const faqData = [
    {
      title: "무비버스는 무엇인가요?",
      contents:
        "온/오프라인에서 함께 영화를 볼 수도 있고, 게시판에서 서로의 영화 취향을 공유하며 소통하는 공간입니다.",
    },
  ];
  return (
    <>
      <FAQComp>
        <div className="container">
          <div className="faqHeader">
            <h3>자주 묻는 질문</h3>
          </div>
          <ul className="faqMap">
            {faqData &&
              faqData.map((faq) => (
                <Faq key={faq.title} faqPlus={faq} isNotice={false} />
              ))}
          </ul>
        </div>
      </FAQComp>
    </>
  );
};
export default FAQList;
