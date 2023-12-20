import axios from "axios";
import Common from "../util/Common";

const BoardApi = {
  saveNewPost: async (categoryName, gatherType, title, image, boardContent) => {
    console.log("저장 진입");
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
      Common.MV_DOMAIN + `/board/gather`,
      Common.tokenHeader()
    );
  },
};
export default BoardApi;
