import { useParams } from "react-router-dom";
import BoardHeaderList from "../component/Board/BoardHeader";
import BoardCardList from "../component/Board/BoardCardList";
const Board = () => {
  const { id } = useParams();

  // 각 페이지에 맞는 정보 정의
  const { category, title, description } = (() => {
    switch (id) {
      case "gather":
        return {
          category: ["무비모임", "모임후기", "영화추천"],
          title: "무비모임",
          description: "무비모임, 새로운 친구와의 만남의 장소",
        };
      case "recap":
        return {
          category: ["무비모임", "모임후기", "영화추천"],
          title: "모임후기",
          description: "영화를 마주한 감동과 여운을 모임후기에서 공유해보세요.",
        };
      case "recs":
        return {
          category: ["무비모임", "모임후기", "영화추천"],
          title: "영화추천",
          description:
            "트렌드에 민감한 여러분을 위한 최고의 영화 소식과 추천작을 즐겨보세요.",
        };
      default:
        return { category: [], title: "", description: "" };
    }
  })();

  return (
    <div>
      {/* BoardHeaderList에 필요한 정보를 props로 전달 */}
      <BoardHeaderList
        category={category}
        title={title}
        description={description}
      />
      <BoardCardList />
    </div>
  );
};

export default Board;
