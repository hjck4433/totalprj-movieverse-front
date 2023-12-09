import BoardCard from "./BoardCard";
import BoardCardStyle from "../Board/BoardCardStyle";
const BoardCardList = () => {
  const BoardData = [
    {
      title: "크리스마스 이브에 케빈과 함께 보낼 사람 모여라🎅🎄1",
      content:
        "혼자 하는 크리스마스는 이제 그만! 크리스마스 하면 케빈이죠~뭅뭅 친구들끼리 온라인으로 모여 수다나 떨며 ‘나홀로 집에’ 함께봐요ㅎㅎ 각자 집에서 좋아하는 음식을 준비해서 편하게 모여요 :)",
      categoryId: "무비모임",
      regdate: "2023.09.06",
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
      regdate: "2023.09.06",
      count: "10",
      gatherType: "오프라인",
      image:
        "https://images.unsplash.com/photo-1451772741724-d20990422508?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "크리스마스 이브에 케빈과 함께 보낼 사람 모여라🎅🎄3",
      content:
        "혼자 하는 크리스마스는 이제 그만! 크리스마스 하면 케빈이죠~뭅뭅 친구들끼리 온라인으로 모여 수다나 떨며 ‘나홀로 집에’ 함께봐요ㅎㅎ 각자 집에서 좋아하는 음식을 준비해서 편하게 모여요 :)",
      categoryId: "무비모임",
      regdate: "2023.09.06",
      count: "10",
      gatherType: "온라인",
      image:
        "https://images.unsplash.com/photo-1451772741724-d20990422508?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "크리스마스 이브에 케빈과 함께 보낼 사람 모여라🎅🎄4",
      content:
        "혼자 하는 크리스마스는 이제 그만! 크리스마스 하면 케빈이죠~뭅뭅 친구들끼리 온라인으로 모여 수다나 떨며 ‘나홀로 집에’ 함께봐요ㅎㅎ 각자 집에서 좋아하는 음식을 준비해서 편하게 모여요 :)",
      categoryId: "무비모임",
      regdate: "2023.09.06",
      count: "10",
      gatherType: "오프라인",
      image:
        "https://images.unsplash.com/photo-1451772741724-d20990422508?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "크리스마스 이브에 케빈과 함께 보낼 사람 모여라🎅🎄5",
      content:
        "혼자 하는 크리스마스는 이제 그만! 크리스마스 하면 케빈이죠~뭅뭅 친구들끼리 온라인으로 모여 수다나 떨며 ‘나홀로 집에’ 함께봐요ㅎㅎ 각자 집에서 좋아하는 음식을 준비해서 편하게 모여요 :)",
      categoryId: "무비모임",
      regdate: "2023.09.06",
      count: "10",
      gatherType: "온라인",
      image:
        "https://images.unsplash.com/photo-1451772741724-d20990422508?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "크리스마스 이브에 케빈과 함께 보낼 사람 모여라🎅🎄6",
      content:
        "혼자 하는 크리스마스는 이제 그만! 크리스마스 하면 케빈이죠~뭅뭅 친구들끼리 온라인으로 모여 수다나 떨며 ‘나홀로 집에’ 함께봐요ㅎㅎ 각자 집에서 좋아하는 음식을 준비해서 편하게 모여요 :)",
      categoryId: "무비모임",
      regdate: "2023.09.06",
      count: "10",
      gatherType: "오프라인",
      image:
        "https://images.unsplash.com/photo-1451772741724-d20990422508?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <BoardCardStyle>
      <div className="container">
        <div className="boardCardBox">
          <div className="gatherTypeList">
            <p>온라인</p>
            <p>오프라인</p>
          </div>
          <div className="boardSort">
            <p>최신순 |</p>
            <p>과거순 |</p>
            <p>조회 많은 순</p>
          </div>
          {/* <div className="boardMap"> */}
          {BoardData &&
            BoardData.map((board) => (
              <BoardCard key={board.title} board={board} />
            ))}
          {/* </div> */}
        </div>
      </div>
    </BoardCardStyle>
  );
};

export default BoardCardList;
