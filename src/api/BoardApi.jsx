import axios from "axios";
import Common from "../util/Common";

const BoardApi = {
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
  boardList: async (id) => {
    console.log("게시판 불러와졌니 ? ");
    return await axios.get(
      Common.MV_DOMAIN + `/board/${id}`,
      Common.tokenHeader()
    );
  },
  boardDetail: async (postId) => {
    console.log("상세 게시판은 불러와졌을까? ");
    return await axios.get(
      Common.MV_DOMAIN + `/board/post/${postId}`,
      Common.tokenHeader()
    );
  },

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
};
export default BoardApi;
