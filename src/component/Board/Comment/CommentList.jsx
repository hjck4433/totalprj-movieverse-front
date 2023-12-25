import { useEffect, useState } from "react";
import Button from "../../../util/Button";
import CommnetApi from "../../../api/CommentApi";
import Common from "../../../util/Common";
import Comment from "./Comment";
import PaginationUtil from "../../../util/Pagination/Pagination";

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

  const [totalPage, setTotalPage] = useState(5);
  const [pageData, setPageData] = useState("");
  const [page, setPage] = useState(0);
  const [isId, setIsId] = useState("");

  useEffect(() => {
    Common.handleTokenAxios(() => fetchPageList(page));
  }, [page]);

  useEffect(() => {
    Common.handleTokenAxios(fetchPage);
  }, []);

  // 댓글 총 페이지 수 불러오기
  const fetchPage = async () => {
    const res = await CommnetApi.commentPageCount(id);
    if (res.data !== null) {
      console.log("댓글 총 페이지 수 : ", res.data);
      setTotalPage(res.data);
      Common.handleTokenAxios(() => fetchPageList(0));
    }
  };
  // 댓글 페이지네이션 불러오기
  const fetchPageList = async (page) => {
    const res1 = await CommnetApi.commentPageList(id, page);
    if (res1.data !== null) {
      console.log("댓글 페이지네이션 : ", res1.data);
      setPageData(res1.data);
    }
  };

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
        <PaginationUtil
          totalPage={totalPage}
          limit={5}
          page={page}
          setPage={setPage}
        />
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
