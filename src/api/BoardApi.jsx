import axios from "axios";
import Common from "../util/Common";

const BoardApi = {
  // 새 포스트 저장
  saveNewPost: async (categoryName, gatherType, title, image, boardContent) => {
    console.log("저장 진입");
    console.log("저장중 이미지 : " + image);
    const data = {
      categoryName: categoryName,
      gatherType: gatherType,
      title: title,
      image: image,
      boardContent: boardContent,
    };
    return await axios.post(
      Common.MV_DOMAIN + "/board/new",
      data,
      Common.tokenHeader()
    );
  },
  boardList: async () => {
    console.log("게시판 불러와졌니 ? ");
    return await axios.get(
      Common.MV_DOMAIN + `/board/list`,
      Common.tokenHeader()
    );
  },
  // 상세 게시글 정보
  boardDetail: async (postId) => {
    console.log("상세 게시판은 불러와졌을까? ");
    return await axios.get(
      Common.MV_DOMAIN + `/board/post/${postId}`,
      Common.tokenHeader()
    );
  },

  // 게시글 수정
  updateBoard: async (
    id,
    categoryName,
    gatherType,
    title,
    image,
    boardContent
  ) => {
    console.log("보더수정 저장 !");
    const data = {
      id: id,
      categoryName: categoryName,
      gatherType: gatherType,
      title: title,
      image: image,
      boardContent: boardContent,
    };
    return await axios.post(
      Common.MV_DOMAIN + "/board/update",
      data,
      Common.tokenHeader()
    );
  },

  getTotalPage: async (keyword, categoryName, gatherType) => {
    // console.log("총페이지 키워드 : " + keyword);
    // console.log("총페이지 카테고리 : " + categoryName);
    // console.log("총페이지 게더 : " + gatherType);
    const page = 0;
    const size = 6;
    return await axios.get(
      Common.MV_DOMAIN +
        `/board/totalpages?page=${page}&size=${size}&keyword=${keyword}&categoryName=${categoryName}&gatherType=${gatherType}`,
      Common.tokenHeader()
    );
  },

  getBoardList: async (page, sort, keyword, categoryName, gatherType) => {
    console.log("리스트 키워드 : " + keyword);
    console.log("리스트 카테고리 : " + categoryName);
    console.log("리스트 게더 : " + gatherType);
    console.log("리스트 페이지 : " + page);
    const size = 6;
    return await axios.get(
      Common.MV_DOMAIN +
        `/board/processedlist?page=${
          page - 1
        }&size=${size}&sort=${sort}&keyword=${keyword}&categoryName=${categoryName}&gatherType=${gatherType}`,
      Common.tokenHeader()
    );
  },
};
export default BoardApi;
