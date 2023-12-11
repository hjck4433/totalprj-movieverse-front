const BoardCard = ({ board }) => {
  return (
    <>
      <div className="cardimgText">
        <div className="imgBox">
          <img className="cardImg" src={board.image} alt="이미지" />
        </div>
        <div className="categoryGatherType">
          <div>{board.categoryId}</div>
          <div>{board.gatherType}</div>
        </div>
        <div>{board.title}</div>
        <div>{board.content}</div>
      </div>
    </>
  );
};

export default BoardCard;
