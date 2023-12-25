import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useEffect, useState } from "react";

const BoardCardComp = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  height: 300px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 30px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    height: 200px;
  }
  .textBox {
    width: 56%;
    position: relative;
    .categoryGatherBox {
      display: flex;
      margin-bottom: 20px;
      justify-content: space-between;
      align-items: baseline;
      .categoryGather {
        p {
          color: white;
          padding: 10px;
          border-radius: 5px;
          display: inline-block;
          &.category {
            background-color: var(--LIGHTVIO);
            margin-right: 10px;
          }
          &.gather {
            background-color: var(--BLUE);
          }
        }
      }
      .regdate {
        color: #333;
      }
    }
    .contentBox {
      margin-bottom: 15px;
      h3 {
        color: black;
        padding-bottom: 15px;
        font-weight: 600;
      }
      .content {
        color: black;
        line-height: 1.5;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: left;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 5;
        @media only screen and (max-width: 768px) {
          -webkit-line-clamp: 3;
        }
      }
    }
    .countBox {
      position: absolute;
      bottom: 0;
      right: 0;
      p {
        text-align: end;
        color: #333;
      }
    }
  }
`;

const ImgBoxComp = styled.div`
  width: 40%;
  height: 100%;
  background-image: url(${(props) => props.imgsrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const BoardCard = ({ board }) => {
  const navigate = useNavigate();
  const toDate = new Date(board.regDate);
  const regDate = toDate.toISOString().split("T")[0];

  return (
    <>
      <BoardCardComp
        className="mapBox"
        onClick={() => {
          navigate(`/board/post/${board.id}`);
        }}
      >
        <ImgBoxComp imgsrc={board.image} />
        <div className="textBox">
          <div className="categoryGatherBox">
            <div className="categoryGather">
              <p className="category">{board.categoryName}</p>
              <p className="gather">{board.gatherType}</p>
            </div>
            <div className="regdate">
              <p className="regdate">{regDate}</p>
            </div>
          </div>
          <div className="contentBox">
            <h3>{board.title}</h3>
            <p className="content">{board.boardContent}</p>
          </div>
          <div className="countBox">
            <p>조회수 {board.count}</p>
          </div>
        </div>
      </BoardCardComp>
    </>
  );
};

export default BoardCard;
