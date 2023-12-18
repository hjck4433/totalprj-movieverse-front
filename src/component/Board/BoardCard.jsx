import { useNavigate } from "react-router-dom";

const BoardCard = ({ board }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="mapBox"
        onClick={() => {
          navigate(`/board/post/${board.postId}`);
        }}
      >
        <div className="imgBox">
          <img src={board.image} alt="이미지" />
        </div>
        <div className="textBox">
          <div className="categoryGatherBox">
            <div className="categoryGather">
              <p className="gather">{board.categoryId}</p>
              <p className="category">{board.gatherType}</p>
            </div>
            <div className="regdate">
              <p className="regdate">{board.regdate}</p>
            </div>
          </div>
          <div className="contentBox">
            <h3>{board.title}</h3>
            <p className="content">{board.content}</p>
          </div>
          <div className="countBox">
            <p>조회수 {board.count}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardCard;
