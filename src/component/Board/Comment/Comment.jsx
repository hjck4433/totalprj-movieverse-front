import Button from "../../../util/Button";
import faceIcon from "../../../images/faceIcon/faceIcon1.png";

const Comment = ({ comment }) => {
  const dateTimeString = comment.commentRegDate;
  const toDate = new Date(dateTimeString);
  const regDate = toDate.toISOString().split("T")[0];

  return (
    <>
      <div key={comment.commentId} className="commentBox">
        <div className="iconArea">
          <div className="imgBox">
            <img src={comment.memberImage || faceIcon} alt="memberIcon" />
          </div>
        </div>
        <div className="textArea">
          <div className="comment">
            <p className="nickName">{comment.memberAlias}</p>
            <p className="commentText">{comment.commentContent}</p>
          </div>
        </div>
        <div className="rightArea">
          <div className="writeDate">{regDate}</div>
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
    </>
  );
};
export default Comment;
