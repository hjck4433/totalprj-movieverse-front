const BoardCard = ({ board }) => {
  return (
    <>
      <div>{board.image}</div>
      <div>{board.gatherType}</div>
      <div>{board.title}</div>
      <div>{board.content}</div>
    </>
  );
};

export default BoardCard;
