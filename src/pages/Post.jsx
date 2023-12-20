import React, { useEffect, useState } from "react";
import { PostComp } from "../component/Post/PostStyle";
import { useNavigate, useParams } from "react-router-dom";
import faceIcon from "../images/faceIcon/faceIcon4.png";
import Button from "../util/Button";
import postImg from "../images/main_top_mo.jpg";
import BoardApi from "../api/BoardApi";
import Common from "../util/Common";
const Post = () => {
  const navigate = useNavigate();
  const onClickBoard = (num) => {
    switch (num) {
      case 1:
        navigate("/board/new");
        break;
      case 2:
        navigate("/board/:id");
        break;
      default:
    }
  };
  const [boardData, setBoardData] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    const fetchBoardData = async () => {
      console.log("API 요청 전");
      const res = await BoardApi.boardDetail(postId);
      console.log("API 요청 후 : ", res);
      if (res.data !== null) {
        setBoardData(res.data);
      }
    };
    Common.handleTokenAxios(fetchBoardData);
    console.log("boardData 잘 불러와 지고 있을까 과연 ? ");
  }, []);

  const commentData = [
    {
      faceIcon: "../images/faceIcon/faceIcon4.png",
      nickName: "햄햄",
      commentText: "저 초대해주세요!",
    },
  ];
  return (
    <>
      <PostComp>
        <div className="container">
          <div className="titleBox">
            <div className="memIconArea">
              <div className="imgBox">
                <img src={faceIcon} alt="memberIcon" />
              </div>
              <p>gogohamster</p>
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
                <div className="uploadedDate">{boardData.regDate}</div>
              </div>
              <h3>{boardData.title}</h3>
            </div>
          </div>
          <div className="contentsBox">
            <div className="introduce">
              <img src={boardData.image} alt="selectedImg" />
              <div className="contentsText">
                <p>{boardData.boardContent}</p>
              </div>
            </div>
            <Button
              children="수정하기"
              active={true}
              clickEvt={() => onClickBoard(1)}
            />
          </div>

          {/* 댓글 영역 */}
          <div className="commentArea">
            <h3>댓글</h3>
            <div className="commentList">
              {commentData.map((comment) => (
                <div key={comment.nickName} className="commentBox">
                  <div className="iconArea">
                    <div className="imgBox">
                      <img
                        src={comment.memberIcon || faceIcon}
                        alt="memberIcon"
                      />
                    </div>
                  </div>
                  <div className="textArea">
                    <div className="comment">
                      <p className="nickName">{comment.nickName}</p>
                      <p className="commentText">{comment.commentText}</p>
                    </div>
                  </div>
                  <div className="rightArea">
                    <div className="writeDate">2023.12.14</div>
                    <div className="editBtnBox">
                      <Button
                        className="deleteBtn"
                        children="삭제"
                        active={true}
                        width="70px"
                        height="30px"
                        fontSize="14px"
                        front="var(--BLUE)"
                      />
                      <Button
                        className="editBtn"
                        children="수정"
                        active={true}
                        width="70px"
                        height="30px"
                        fontSize="14px"
                        front="var(--GREY)"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="textInputBox">
              <textarea type="text" placeholder="댓글을 남겨주세요."></textarea>
              <Button
                className="postBtn"
                children="등록"
                active={true}
                width="70px"
                height="30px"
                fontSize="14px"
              />
            </div>
          </div>
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
