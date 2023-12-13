import axios from "axios";
import Common from "../util/Common";

const ChatApi = {
  // 채팅방 이름 가져오기
  getChatName: async (chatId) => {
    const header = Common.tokenHeader;
    return await axios.get(
      Common.MV_DOMAIN + `/chat/chatroom/${chatId}`,
      header
    );
  },
};
export default ChatApi;
