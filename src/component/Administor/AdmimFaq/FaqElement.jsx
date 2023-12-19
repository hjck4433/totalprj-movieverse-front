import { styled } from "styled-components";
import Button from "../../../util/Button";
import { useState } from "react";

const TrComp = styled.tr`
  vertical-align: middle;
  td {
    padding: 10px;
    /* outline: 1px solid red; */
    &.center {
      text-align: center;
    }
    &.btn {
      span {
        display: flex;
        justify-content: center;
      }
    }
  }
`;

const FaqTr = ({ data, index, editModal, setTitle, setContent, setId }) => {
  return (
    <>
      <TrComp>
        <td className="center">{index + 1}</td>
        <td>{data.title}</td>
        <td className="btn">
          <span>
            <Button
              children={"수정"}
              back="var(--BLUE)"
              fontSize=".8em"
              width="80px"
              height="30px"
              active={true}
              clickEvt={() => {
                editModal();
                setTitle(data.title);
                setContent(data.content);
                setId(data.id);
              }}
              faqId={data.id}
            />
          </span>
        </td>

        <td className="btn">
          <span>
            <Button
              children={"삭제"}
              fontSize=".8em"
              width="80px"
              height="30px"
              active={true}
              back="var(--BLUE)"
              clickEvt={() => {
                // setFaqModalOpen(true);
                // setFaqType("del");
              }}
            />
          </span>
        </td>
      </TrComp>
    </>
  );
};
export default FaqTr;
