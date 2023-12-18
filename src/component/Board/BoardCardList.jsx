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
const BoardCardList = ({ search, nofilter }) => {
  const [sortBy, setSortBy] = useState("highestCount");
  const [sortedData, setSortedData] = useState([]);

  const BoardData = [
    {
      title: "크리스마스 이브에 케빈과 함께 보낼 사람 모여라🎅🎄1",
      content:
        "혼자 하는 크리스마스는 이제 그만! 크리스마스 하면 케빈이죠~뭅뭅 친구들끼리 온라인으로 모여 수다나 떨며 ‘나홀로 집에’ 함께봐요ㅎㅎ 각자 집에서 좋아하는 음식을 준비해서 편하게 모여요 :)",
      categoryId: "무비모임",
      regdate: "2023-09-01",
      count: "10",
      gatherType: "온라인",
      image:
        "https://images.unsplash.com/photo-1451772741724-d20990422508?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "크리스마스 이브에 케빈과 함께 보낼 사람 모여라🎅🎄2",
      content:
        "혼자 하는 크리스마스는 이제 그만! 크리스마스 하면 케빈이죠~뭅뭅 친구들끼리 온라인으로 모여 수다나 떨며 ‘나홀로 집에’ 함께봐요ㅎㅎ 각자 집에서 좋아하는 음식을 준비해서 편하게 모여요 :)",
      categoryId: "무비모임",
      regdate: "2023-09-02",
      count: "11",
      gatherType: "오프라인",
      image:
        "https://images.unsplash.com/photo-1451772741724-d20990422508?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "크리스마스 이브에 케빈과 함께 보낼 사람 모여라🎅🎄3",
      content:
        "혼자 하는 크리스마스는 이제 그만! 크리스마스 하면 케빈이죠~뭅뭅 친구들끼리 온라인으로 모여 수다나 떨며 ‘나홀로 집에’ 함께봐요ㅎㅎ 각자 집에서 좋아하는 음식을 준비해서 편하게 모여요 :)",
      categoryId: "무비모임",
      regdate: "2023-09-03",
      count: "12",
      gatherType: "온라인",
      image:
        "https://images.unsplash.com/photo-1451772741724-d20990422508?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "크리스마스 이브에 케빈과 함께 보낼 사람 모여라🎅🎄4",
      content:
        "혼자 하는 크리스마스는 이제 그만! 크리스마스 하면 케빈이죠~뭅뭅 친구들끼리 온라인으로 모여 수다나 떨며 ‘나홀로 집에’ 함께봐요ㅎㅎ 각자 집에서 좋아하는 음식을 준비해서 편하게 모여요 :)",
      categoryId: "무비모임",
      regdate: "2023-09-04",
      count: "13",
      gatherType: "오프라인",
      image:
        "https://images.unsplash.com/photo-1451772741724-d20990422508?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "크리스마스 이브에 케빈과 함께 보낼 사람 모여라🎅🎄5",
      content:
        "혼자 하는 크리스마스는 이제 그만! 크리스마스 하면 케빈이죠~뭅뭅 친구들끼리 온라인으로 모여 수다나 떨며 ‘나홀로 집에’ 함께봐요ㅎㅎ 각자 집에서 좋아하는 음식을 준비해서 편하게 모여요 :)",
      categoryId: "무비모임",
      regdate: "2023-09-05",
      count: "14",
      gatherType: "온라인",
      image:
        "https://images.unsplash.com/photo-1451772741724-d20990422508?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "크리스마스 이브에 케빈과 함께 보낼 사람 모여라🎅🎄6",
      content:
        "혼자 하는 크리스마스는 이제 그만! 크리스마스 하면 케빈이죠~뭅뭅 친구들끼리 온라인으로 모여 수다나 떨며 ‘나홀로 집에’ 함께봐요ㅎㅎ 각자 집에서 좋아하는 음식을 준비해서 편하게 모여요 :)",
      categoryId: "무비모임",
      regdate: "2023-09-06",
      count: "15",
      gatherType: "오프라인",
      image:
        "https://images.unsplash.com/photo-1451772741724-d20990422508?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const sortedBy = (sortBy) => {
    const sortedData = [...BoardData];
    switch (sortBy) {
      case "highestCount":
        sortedData.sort(
          (a, b) => parseInt(b.count, 10) - parseInt(a.count, 10)
        );
        break;
      case "lowestCount":
        sortedData.sort(
          (a, b) => parseInt(a.count, 10) - parseInt(b.count, 10)
        );
        break;
      case "latest":
        sortedData.sort((a, b) => new Date(b.regdate) - new Date(a.regdate));
        break;
      case "oldest":
        sortedData.sort((a, b) => new Date(a.regdate) - new Date(b.regdate));
        break;
      default:
        break;
    }
    return sortedData;
  };
  useEffect(() => {
    const newSortedData = sortedBy(sortBy);
    setSortedData(newSortedData);
  }, [sortBy]);

  const handleSortChange = (criteria) => {
    setSortBy(criteria);
  };

  return (
    <BoardCardStyle>
      <div className="container">
        <div className="boardCardBox">
          <div className="gatherTypeList">
            <p>온라인</p>
            <p>오프라인</p>
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
          {/* <div className="boardMap"> */}
          {nofilter !== "nofilter" &&
            sortedData &&
            sortedData.map((board) => (
              <BoardCard key={board.title} board={board} />
            ))}
          {/* </div> */}
          <div className="arrow">
            <FontAwesomeIcon className="icons" icon={faAngleDoubleLeft} />
            <FontAwesomeIcon className="icons" icon={faAngleLeft} />
            <FontAwesomeIcon className="icons" icon={fa1} />
            <FontAwesomeIcon className="icons" icon={fa2} />
            <FontAwesomeIcon className="icons" icon={fa3} />
            <FontAwesomeIcon className="icons" icon={faAngleRight} />
            <FontAwesomeIcon className="icons" icon={faAngleDoubleRight} />
          </div>
        </div>
      </div>
    </BoardCardStyle>
  );
};

export default BoardCardList;
