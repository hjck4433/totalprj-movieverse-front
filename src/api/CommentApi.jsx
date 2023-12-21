import axios from "axios";
import Common from "../util/Common";

const CommnetApi = {
  saveNewComment: async (boardId, content) => {
    console.log("리액트 댓글 저장 진입 내용 : " + content);
    const data = {
      boardId: boardId,
      commentContent: content,
    };
    return await axios.post(
      Common.MV_DOMAIN + "/comment/new",
      data,
      Common.tokenHeader()
    );
  },

  commentList: async (id) => {
    return await axios.get(
      Common.MV_DOMAIN + `/comment/${id}`,
      Common.tokenHeader()
    );
  },
};
export default CommnetApi;
