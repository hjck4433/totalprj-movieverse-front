import { styled } from "styled-components";
import { useState, useEffect } from "react";
import Button from "../../../util/Button";
const MemTrComp = styled.tr`
  vertical-align: middle;
  td {
    /* border: 1px solid red; */
    padding: 10px;
    vertical-align: middle;
    &.center {
      text-align: center;
    }
    &.profile {
      .wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .imgBox {
          width: 30px;
          padding-bottom: 30px;
          position: relative;
          border-radius: 100%;
          overflow: hidden;
          img {
            position: absolute;
            width: 100%;
          }
          margin-right: 10px;
        }
        span {
        }
      }
    }
  }
`;

const MemTr = ({ data, index }) => {
  return (
    <MemTrComp>
      {/* 숫자 자동증가 */}
      <td className="center">{index + 1}</td>
      <td className="profile">
        <span className="wrapper">
          <span className="imgBox">
            <img src="{data.image}" alt="profile" />
          </span>
          <span>{data.alias}</span>
        </span>
      </td>
      <td className="center">{data.name}</td>
      <td className="center">{data.email}</td>
      <td className="center">{data.phone}</td>
      <td className="center">{data.iskakao}</td>
      <td className="center">{data.membership}</td>
      <td className="center">{data.joinDate}</td>
      <td className="center">{data.withdraw}</td>
      <td className="center">{data.addr}</td>

      <td>
        <Button
          children={"삭제"}
          fontSize=".8em"
          width="80px"
          height="30px"
          active={true}
          clickEvt={() => {}}
        />
      </td>
    </MemTrComp>
  );
};
export default MemTr;
