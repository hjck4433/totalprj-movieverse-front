import ChatBanner from "../component/ChatList/ChatBanner";
import KikiList from "../component/ChatList/KikiList";
import NewChatModal from "../component/ChatList/NewChatModal";
import { useState } from "react";
import ChatApi from "../api/ChatApi";
import Common from "../util/Common";
import { useNavigate } from "react-router-dom";

const ChatList = () => {
  const navigate = useNavigate();
  const [openModal, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  const [inputVal, setInputVal] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isActive, setIsActive] = useState(false);
  const onChangeInput = (e) => {
    const currVal = e.target.value;
    setInputVal(currVal);
    if (currVal.length < 5 || currVal.length > 15) {
      setErrMsg("5자 이상 15자 이하로 입력하세요.");
      setIsActive(false);
    } else {
      setErrMsg("키키를 만들 수 있어요!");
      setIsActive(true);
    }
  };

  const createChatRoom = async () => {
    const accessToken = Common.getAccessToken();
    console.log("새 채팅방 생성 진입");
    try {
      const res = await ChatApi.createNewChat(inputVal);
      if (res.data !== null) {
        console.log("roomId : ", res.data);
        navigate(`/kikilist/${res.data}`);
      }
    } catch (err) {
      if (err.response.status === 401) {
        await Common.handleUnathorized();
        const newToken = Common.getAccessToken();
        if (newToken !== accessToken) {
          try {
            const res = await ChatApi.createNewChat(inputVal);
            if (res.data !== null) {
              console.log("토큰 재발행 회원정보 : " + res.data);
              navigate(`/kikilist/${res.data}`);
            }
          } catch (err) {
            console.log(err);
            setErrMsg("채팅방 생성에 실패했습니다.");
          }
        }
      }
    }
  };

  return (
    <>
      <ChatBanner />
      <KikiList
        newKiki={() => {
          setModalOpen(true);
        }}
      />
      <NewChatModal
        open={openModal}
        close={closeModal}
        active={isActive}
        inputVal={inputVal}
        errMsg={errMsg}
        onChangeInput={onChangeInput}
        confirm={createChatRoom}
      />
    </>
  );
};
export default ChatList;
