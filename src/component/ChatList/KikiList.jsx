import Button from "../../util/Button";
import { styled } from "styled-components";
import Kiki from "./Kiki";
import { useEffect, useState } from "react";
import ChatApi from "../../api/ChatApi";
import Common from "../../util/Common";
import { useNavigate } from "react-router-dom";

const KikiListComp = styled.section`
  width: 100%;
  /* outline: 1px solid red; */
  .buttonBox {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: end;
    margin-bottom: 50px;
    /* outline: 1px solid yellow; */
  }
  .container {
    padding: 100px 0;
    /* outline: 1px solid red; */
    .chatListBox {
      width: 80%;
      margin: 0 auto;
      /* outline: 1px solid blue; */

      .chatBox {
        width: 100%;
        background-color: var(--LIGHTVIO);
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        padding: 45px;
        margin-bottom: 30px;
        cursor: pointer;
        transition: 0.3s ease-out;
        &:hover {
          background-color: var(--MIDBLUE);
          .title,
          .createdAt {
            color: white;
          }
        }
        /* outline: 1px solid red; */
        .title {
          color: #000;
          font-weight: 600;
          font-size: 1.5em;
        }
        .createdAt {
          color: #000;
          font-weight: 600;
          font-size: 1.3em;
          text-align: right;
        }
      }
      .txtBox {
        padding-top: 40px;
        text-align: center;
        p {
          font-size: 1.6em;
          line-height: 2.3;
        }
      }
    }
  }
  /* 모바일은 가장 밑에 두고 해야함! */
  @media only screen and (max-width: 768px) {
    .buttonBox {
      width: 100%;
    }
    .container {
      .chatListBox {
        width: 100%;
        .chatBox {
          padding: 45px 10px;
        }
      }
    }
  }
`;

const KikiList = ({ newKiki }) => {
  const navigate = useNavigate();
  const [kikiList, setKikiList] = useState("");

  const fetchKikiList = async () => {
    const res = await ChatApi.getChatList();
    if (res.data !== null) {
      console.log("채팅방 목록 : " + res.data);
      setKikiList(res.data);
    }
  };

  const enterKiki = (roomId) => {
    console.log("kiki 진입 중 : " + roomId);
    navigate(`/kikilist/${roomId}`);
  };

  useEffect(() => {
    const intervalId = setInterval(
      Common.handleTokenAxios(fetchKikiList),
      3000
    );
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  useEffect(() => {
    console.log("kikiList : " + typeof kikiList);
  }, [kikiList]);

  return (
    <>
      <KikiListComp>
        <div className="container">
          <div className="buttonBox">
            <Button
              children="키키 추가하기"
              active={true}
              front="var(--VIOLET)"
              back="var(--LIGHTVIO)"
              clickEvt={newKiki}
            />
          </div>
          <div className="chatListBox">
            {kikiList &&
              kikiList !== null &&
              kikiList.map((room) => (
                <Kiki
                  key={room.roomId}
                  data={room}
                  onClick={() => enterKiki(room.roomId)}
                />
              ))}
            {/* <div className="txtBox">
                <p>진행중인 키키가 없습니다</p>
                <p>키키를 오픈하고 새로운 영화친구를 기다려보세요!</p>
              </div> */}
          </div>
        </div>
      </KikiListComp>
    </>
  );
};
export default KikiList;
