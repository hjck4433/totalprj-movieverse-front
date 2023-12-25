import BoardHeaderList from "../component/Board/BoardHeader";
import BoardCardList from "../component/Board/BoardCardList";
import { useParams } from "react-router-dom";

const Board = () => {
  return (
    <div>
      <BoardHeaderList />
      <BoardCardList />
    </div>
  );
};

export default Board;
