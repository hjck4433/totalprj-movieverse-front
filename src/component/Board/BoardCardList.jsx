import BoardCard from "./BoardCard";
import CardListComp from "./BoardCardStyle";
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
        "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/1_comp_wallet.jpg?alt=media&token=25e63758-5c94-4ecc-8ecc-0ccdda651a01",
    },
    // {
    //   title: "크리스마스 이브에 케빈과 함께 보낼 사람 모여라🎅🎄2",
    //   content:
    //     "혼자 하는 크리스마스는 이제 그만! 크리스마스 하면 케빈이죠~뭅뭅 친구들끼리 온라인으로 모여 수다나 떨며 ‘나홀로 집에’ 함께봐요ㅎㅎ 각자 집에서 좋아하는 음식을 준비해서 편하게 모여요 :)",
    //   categoryId: "Attend",
    //   regdate: "2023.09.06",
    //   count: "10",
    //   gatherType: "오프라인",
    //   image:
    //     "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/1_comp_wallet.jpg?alt=media&token=25e63758-5c94-4ecc-8ecc-0ccdda651a01",
    // },
    // {
    //   title: "크리스마스 이브에 케빈과 함께 보낼 사람 모여라🎅🎄3",
    //   content:
    //     "혼자 하는 크리스마스는 이제 그만! 크리스마스 하면 케빈이죠~뭅뭅 친구들끼리 온라인으로 모여 수다나 떨며 ‘나홀로 집에’ 함께봐요ㅎㅎ 각자 집에서 좋아하는 음식을 준비해서 편하게 모여요 :)",
    //   categoryId: "Attend",
    //   regdate: "2023.09.06",
    //   count: "10",
    //   gatherType: "온라인",
    //   image:
    //     "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/1_comp_wallet.jpg?alt=media&token=25e63758-5c94-4ecc-8ecc-0ccdda651a01",
    // },
    // {
    //   title: "크리스마스 이브에 케빈과 함께 보낼 사람 모여라🎅🎄4",
    //   content:
    //     "혼자 하는 크리스마스는 이제 그만! 크리스마스 하면 케빈이죠~뭅뭅 친구들끼리 온라인으로 모여 수다나 떨며 ‘나홀로 집에’ 함께봐요ㅎㅎ 각자 집에서 좋아하는 음식을 준비해서 편하게 모여요 :)",
    //   categoryId: "Attend",
    //   regdate: "2023.09.06",
    //   count: "10",
    //   gatherType: "오프라인",
    //   image:
    //     "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/1_comp_wallet.jpg?alt=media&token=25e63758-5c94-4ecc-8ecc-0ccdda651a01",
    // },
    // {
    //   title: "크리스마스 이브에 케빈과 함께 보낼 사람 모여라🎅🎄5",
    //   content:
    //     "혼자 하는 크리스마스는 이제 그만! 크리스마스 하면 케빈이죠~뭅뭅 친구들끼리 온라인으로 모여 수다나 떨며 ‘나홀로 집에’ 함께봐요ㅎㅎ 각자 집에서 좋아하는 음식을 준비해서 편하게 모여요 :)",
    //   categoryId: "Attend",
    //   regdate: "2023.09.06",
    //   count: "10",
    //   gatherType: "온라인",
    //   image:
    //     "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/1_comp_wallet.jpg?alt=media&token=25e63758-5c94-4ecc-8ecc-0ccdda651a01",
    // },
    // {
    //   title: "크리스마스 이브에 케빈과 함께 보낼 사람 모여라🎅🎄6",
    //   content:
    //     "혼자 하는 크리스마스는 이제 그만! 크리스마스 하면 케빈이죠~뭅뭅 친구들끼리 온라인으로 모여 수다나 떨며 ‘나홀로 집에’ 함께봐요ㅎㅎ 각자 집에서 좋아하는 음식을 준비해서 편하게 모여요 :)",
    //   categoryId: "Attend",
    //   regdate: "2023.09.06",
    //   count: "10",
    //   gatherType: "오프라인",
    //   image:
    //     "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/1_comp_wallet.jpg?alt=media&token=25e63758-5c94-4ecc-8ecc-0ccdda651a01",
    // },
  ];
  return (
    <CardListComp>
      <div className="container">
        <div className="gatherTypeList">
          <p>온라인</p>
          <p>오프라인</p>
        </div>
        <div className="boardSort">
          <p>최신순</p>
          <p>과거순</p>
          <p>조회 많은 순</p>
        </div>
        <div className="boardMap">
          {BoardData &&
            BoardData.map((board) => (
              <BoardCard key={board.title} board={board} />
            ))}
        </div>
      </div>
    </CardListComp>
  );
};

export default BoardCardList;
