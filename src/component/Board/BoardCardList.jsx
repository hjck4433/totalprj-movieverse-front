import BoardCard from "./BoardCard";
import BoardCardStyle from "../Board/BoardCardStyle";
import { useEffect, useState } from "react";
import ToggleButton from "../Board/BoardToggleBtn";
import Button from "../../util/Button";
import { useNavigate } from "react-router-dom";
import BoardApi from "../../api/BoardApi";
import Common from "../../util/Common";
import PaginationUtil from "../../util/Pagination/Pagination";

const BoardCardList = ({ category, keyword }) => {
  // 페이지 네이션 관련
  const [totalPage, setTotalPage] = useState(5);
  const [page, setPage] = useState(0);
  const [sortBy, setSortBy] = useState("recent");
  const [boardData, setBoardData] = useState([]);
  const [gatherType, setGatherType] = useState("온라인");

  // 페이지 수
  const fetchTotalPage = async () => {
    const res = await BoardApi.getTotalPage(keyword, category, gatherType);
    console.log("총페이지 키워드 : " + keyword);
    console.log("총페이지 카테고리 : " + category);
    console.log("총페이지 게더 : " + gatherType);
    if (res.data !== null) {
      setTotalPage(res.data);
      Common.handleTokenAxios(() => fetchBoardList(1));
    }
  };

  // 게시글 리스트
  const fetchBoardList = async (page) => {
    const res = await BoardApi.getBoardList(
      page,
      sortBy,
      keyword,
      category,
      gatherType
    );
    if (res.data !== null) {
      setBoardData(res.data);
    }
  };

  useEffect(() => {
    Common.handleTokenAxios(fetchTotalPage);
    console.log("타입 : " + gatherType);
    setPage(1);
  }, [category, sortBy, keyword, gatherType]);

  useEffect(() => {
    Common.handleTokenAxios(() => fetchBoardList(page));
  }, [page]);

  useEffect(() => {
    console.log("카테고리" + category);

    if (category === "무비추천") {
      setGatherType("");
    } else setGatherType("온라인");
  }, [category]);

  const navigate = useNavigate();

  return (
    <BoardCardStyle>
      <div className="container">
        <div className="boardCardBox">
          {category !== "무비추천" && (
            <div className="gatherTypeList">
              <ToggleButton
                onChange={setGatherType}
                category={category}
                gatherType={gatherType}
              />
            </div>
          )}

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
            {/* 페이지네이션 */}
            <PaginationUtil
              totalPage={totalPage}
              limit={10}
              page={page}
              setPage={setPage}
            />
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
