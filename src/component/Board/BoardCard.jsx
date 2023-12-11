const BoardCard = ({ board }) => {
  return (
    <>
      <div className="mapBox">
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
          <h3>{board.title}</h3>
          <p className="content">{board.content}</p>
        </div>
      </div>
    </>
  );
};

export default BoardCard;
