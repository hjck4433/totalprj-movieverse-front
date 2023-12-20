import BoardCard from "./BoardCard";
import BoardCardStyle from "../Board/BoardCardStyle";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { fa1 } from "@fortawesome/free-solid-svg-icons";
import { fa2 } from "@fortawesome/free-solid-svg-icons";
import { fa3 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ToggleButton from "../Board/BoardToggleBtn";
import Button from "../../util/Button";
import { useNavigate } from "react-router-dom";
import BoardApi from "../../api/BoardApi";
const BoardCardList = ({ search, nofilter }) => {
  const [sortBy, setSortBy] = useState("highestCount");
  const [boardData, setBoardData] = useState([]);

  const [loading, setLoading] = useState(false);
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

  const handleSortChange = (criteria) => {
    setSortBy(criteria);
  };
  const navigate = useNavigate();

  return (
    <BoardCardStyle>
      <div className="container">
        <div className="boardCardBox">
          <div className="gatherTypeList">
            <ToggleButton gatherType={boardData.gatherType} />
          </div>
          <ul className="sortArea">
            <li
              className={sortBy === "highestCount" ? "active" : ""}
              onClick={() => handleSortChange("highestCount")}
            >
              조회 많은 순
            </li>
            <li
              className={sortBy === "lowestCount" ? "active" : ""}
              onClick={() => handleSortChange("lowestCount")}
            >
              조회 적은 순
            </li>
            <li
              className={sortBy === "latest" ? "active" : ""}
              onClick={() => handleSortChange("latest")}
            >
              최신순
            </li>
            <li
              className={sortBy === "oldest" ? "active" : ""}
              onClick={() => handleSortChange("oldest")}
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
          <div className="arrow">
            <FontAwesomeIcon className="icons" icon={faAngleDoubleLeft} />
            <FontAwesomeIcon className="icons" icon={faAngleLeft} />
            <FontAwesomeIcon className="icons" icon={fa1} />
            <FontAwesomeIcon className="icons" icon={fa2} />
            <FontAwesomeIcon className="icons" icon={fa3} />
            <FontAwesomeIcon className="icons" icon={faAngleRight} />
            <FontAwesomeIcon className="icons" icon={faAngleDoubleRight} />
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
