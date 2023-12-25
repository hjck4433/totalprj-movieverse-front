import BoardCard from "./BoardCard";
import BoardCardStyle from "../Board/BoardCardStyle";
import { useEffect, useState } from "react";
import ToggleButton from "../Board/BoardToggleBtn";
import Button from "../../util/Button";
import { useNavigate } from "react-router-dom";
import BoardApi from "../../api/BoardApi";
const BoardCardList = ({ search, nofilter }) => {
  const [sortBy, setSortBy] = useState("highestCount");
  const [boardData, setBoardData] = useState([]);
  const [gatherType, setGatherType] = useState("온라인");

  const [loading, setLoading] = useState(false);

  const onChangeGather = () => {
    gatherType === "온라인"
      ? setGatherType("오프라인")
      : setGatherType("오프라인");
  };

  useEffect(() => {
    const boardData = async () => {
      try {
        setLoading(true);
        const response = await BoardApi.boardList();
        if (response.data === false) {
          console.log("게시판에 정보가 없습니다.");
        } else {
          setBoardData(response.data);
        }
      } catch (error) {
        console.error("게시판 데이터를 불러오는 중 에러 발생 : ", error);
        setLoading(false);
      }
    };

    boardData();
  }, []);

  const navigate = useNavigate();

  return (
    <BoardCardStyle>
      <div className="container">
        <div className="boardCardBox">
          <div className="gatherTypeList">
            <ToggleButton
              gatherType={boardData.gatherType}
              onChange={onChangeGather}
            />
          </div>
          <ul className="sortArea">
            <li
              className={sortBy === "recent" ? "active" : ""}
              onClick={() => setSortBy("recent")}
            >
              최신순
            </li>
            <li
              className={sortBy === "former" ? "active" : ""}
              onClick={() => setSortBy("former")}
            >
              과거순
            </li>
          </ul>
          <div className="boardMap">
            {boardData &&
              boardData.map((board) => (
                <BoardCard key={board.title} board={board} />
              ))}
          </div>

          <div className="newPostBtn">
            <Button
              children="새 글 작성"
              active={true}
              clickEvt={() => {
                navigate("/board/new");
              }}
            />
          </div>
        </div>
      </div>
    </BoardCardStyle>
  );
};

export default BoardCardList;
