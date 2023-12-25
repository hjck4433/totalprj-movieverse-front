import BoardHeaderList from "../component/Board/BoardHeader";
import BoardCardList from "../component/Board/BoardCardList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Board = () => {
  const { category } = useParams();
  const [categorySel, setCategorySel] = useState("");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    switch (category) {
      case "gather":
        setCategorySel("무비모임");
        break;
      case "recap":
        setCategorySel("모임후기");
        break;
      case "recs":
        setCategorySel("무비추천");
        break;
      default:
        return "";
    }
    console.log("category" + category);
  }, [category]);

  useEffect(() => {
    console.log("검색키워드 : " + keyword);
  }, [keyword]);

  return (
    <div>
      <BoardHeaderList id={category} setKeyword={setKeyword} />
      <BoardCardList category={categorySel} keyword={keyword} />
    </div>
  );
};

export default Board;
