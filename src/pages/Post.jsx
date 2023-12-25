import React, { useEffect, useState } from "react";
import { PostComp } from "../component/Post/PostStyle";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../util/Button";
import BoardApi from "../api/BoardApi";
import Common from "../util/Common";
import CommentList from "../component/Board/Comment/CommentList";
const Post = () => {
  const navigate = useNavigate();
  const onClickBoard = (num) => {
    switch (num) {
      case 1:
        navigate(`/board/revise/${postId}`);
        break;
      case 2:
        navigate("/board/:id");
        break;
      default:
    }
  };
  const [boardData, setBoardData] = useState("");
  const { postId } = useParams();
  const [regDate, setRegDate] = useState("");

  useEffect(() => {
    const fetchBoardData = async () => {
      console.log("API 요청 전");
      const res = await BoardApi.boardDetail(postId);
      console.log("API 요청 후 : ", res);
      if (res.data !== null) {
        setBoardData(res.data);
        const toDate = new Date(res.data.regDate);
        setRegDate(toDate.toISOString().split("T")[0]);
      }
    };

    Common.handleTokenAxios(fetchBoardData);
  }, []);

  return (
    <>
      <PostComp>
        <div className="container">
          <div className="titleBox">
            <div className="memIconArea">
              <div className="imgBox">
                <img src={boardData.memberImage} alt="memberIcon" />
              </div>
              <p>{boardData.memberAlias}</p>
            </div>
            <div className="titleElements">
              <div className="topElements">
                <div className="selectedBox">
                  <div className="boardType">
                    <p>{boardData.categoryName}</p>
                  </div>
                  <div className="placeType">
                    <p>{boardData.gatherType}</p>
                  </div>
                </div>
                <div className="uploadedDate">{regDate}</div>
              </div>
              <h3>{boardData.title}</h3>
            </div>
          </div>
          <div className="contentsBox">
            <div className="introduce">
              <img src={boardData.image} alt="selectedImg" />
              <div className="contentsText">{boardData.boardContent}</div>
            </div>
            <div className="buttonBox">
              <Button
                children="수정하기"
                front="var(--BLUE)"
                active={true}
                clickEvt={() => onClickBoard(1)}
              />
              <Button children="삭제하기" active={true} clickEvt={() => {}} />
            </div>
          </div>
          {/* 댓글 영역 */}
          <CommentList id={postId} />
          <div className="listBtnBox">
            <Button
              className="listBtn"
              children="목록보기"
              active={true}
              front="var(--VIOLET)"
              back="var(--BLUE)"
              clickEvt={() => onClickBoard(2)}
            />
          </div>
        </div>
      </PostComp>
    </>
  );
};
export default Post;
