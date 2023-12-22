import { useEffect, useState } from "react";
import Button from "../../../util/Button";
import CommnetApi from "../../../api/CommentApi";
import Common from "../../../util/Common";
import Comment from "./Comment";

const CommentList = ({ id }) => {
  const [commentData, setCommmentData] = useState("");
  const [inputComment, setInputComment] = useState("");

  const oninputCommentChange = (e) => {
    setInputComment(e.target.value);
  };

  // 댓글 리스트
  const fetchCommentList = async () => {
    console.log("API 요청 전");
    const res = await CommnetApi.commentList(id);
    console.log("API 요청 후 : ", res);
    if (res.data !== null) {
      setCommmentData(res.data);
    }
  };

  // 댓글 저장
  const handleSubmitComment = async () => {
    const response = await CommnetApi.saveNewComment(id, inputComment);
    console.log("댓글 결과 : ", response.data);
    if (response.data) {
      setInputComment("");
      Common.handleTokenAxios(fetchCommentList);
    }
  };

  useEffect(() => {
    Common.handleTokenAxios(fetchCommentList);
    console.log("boardId : " + id);
  }, []);

  useEffect(() => {
    console.log("입력한 댓글 : " + inputComment);
  }, [inputComment]);

  return (
    <>
      {/* 댓글 영역 */}
      <div className="commentArea">
        <h3>댓글</h3>
        <div className="commentList">
          {commentData &&
            commentData.map((comment) => (
              <Comment
                key={comment.commentId}
                comment={comment}
                fetchCommentList={fetchCommentList}
              />
            ))}
        </div>
        <div className="textInputBox">
          <textarea
            type="text"
            placeholder="댓글을 남겨주세요."
            value={inputComment}
            onChange={oninputCommentChange}
          ></textarea>
          <Button
            className="postBtn"
            children="등록"
            active={true}
            width="70px"
            height="30px"
            fontSize="14px"
            clickEvt={() => {
              Common.handleTokenAxios(handleSubmitComment);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CommentList;
