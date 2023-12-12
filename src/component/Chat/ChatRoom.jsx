import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Button from "../../util/Button";



const ChatRoomComp = styled.section`
    width: 100%;

    .container{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 100px 0;
      outline: 1px solid red;
      .chatBg{
          width: 400px;
          background-color: var(--VIOLET);
          border-radius: 5px;
          position: relative;
          padding: 30px;
          .chatTitle{
              font-size: 1.4em;
              font-weight: 600;
              margin-bottom: 30px;
              text-align: center;
              /* outline: 1px solid red; */
          }
          .chatPrint{
              height: 360px;
              background-color: white;
              border-radius: 5px;
              margin-bottom: 20px;
              padding-top: 10px;
              
          }
          .chatInput{
              height: 120px;
              background-color: white;
              border-radius: 5px;
              position: relative;
              Button{
                position: absolute;
                bottom: 0;
                right: 0;
                margin: 10px;
              }
          }
        Button{
            margin-top: 20px;
        }
      }
    }
    
    
`;
const ChatRoom = () => {
    const navigate = useNavigate();

    const toChatList = () => {
        navigate("/kikilist");
    };


    return(
        <ChatRoomComp>
            <div className="container">
                <div className="chatBg">
                    <div className="chatTitle">
                    <p>마블스는 몇 엄복동인가?</p>
                    </div>
                    <div className="chatPrint"></div>
                    <div className="chatInput">
                        <Button 
                        children = "전송" 
                        active={true}
                        width ="80px"
                        back = "var(--BLUE)"
                        />
                    </div>
                    <Button children = "키키 나가기"
                    active={true}
                    clickEvt={toChatList}
                    width = "100%"
                    front = "var(--BLUE)"
                    back = "var(--MIDBLUE)"
                     />
                </div>
            </div>
        </ChatRoomComp>
    );
};

export default ChatRoom;