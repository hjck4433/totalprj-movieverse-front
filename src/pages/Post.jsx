import React from "react";
import { PostComp } from "../component/Post/PostStyle";
import { useNavigate } from "react-router-dom";
import faceIcon from "../images/faceIcon/faceIcon4.png";
import Button from "../util/Button";
import postImg from "../images/main_top_mo.jpg";
const Post = () => {
  const navigate = useNavigate();
  const onClickBoard = (num) => {
    switch (num) {
      case 1:
        navigate("/board/new");
        break;
      case 2:
        navigate("/board/:id");
        break;
      default:
    }
  };
  const commentData = [
    {
      faceIcon: "../images/faceIcon/faceIcon4.png",
      nickName: "햄햄",
      commentText: "저 초대해주세요!",
    },
  ];
  return (
    <>
      <PostComp>
        <div className="container">
          <div className="titleBox">
            <div className="memIconArea">
              <div className="imgBox">
                <img src={faceIcon} alt="memberIcon" />
              </div>
              <p>gogohamster</p>
            </div>
            <div className="titleElements">
              <div className="topElements">
                <div className="selectedBox">
                  <div className="boardType">
                    <p>무비모임</p>
                  </div>
                  <div className="placeType">
                    <p>온라인</p>
                  </div>
                </div>
                <div className="uploadedDate">2023.12.14</div>
              </div>
              <h3>크리스마스 이브에 케빈과 함께 보낼 사람 모여라🎅🎄</h3>
            </div>
          </div>
          <div className="contentsBox">
            <div className="introduce">
              <img src={postImg} alt="selectedImg" />
              <div className="contentsText">
                <p>
                  혼자 하는 크리스마스는 이제 그만! 크리스마스 하면 케빈이죠~
                  <br />
                  뭅뭅 친구들끼리 온라인으로 모여 수다나 떨며 ‘나홀로 집에’
                  함께봐요ㅎㅎ 각자 집에서 좋아하는 음식을 준비해서 편하게
                  모여요 :) <br />
                  얼굴을 보이기 부담스러운 분들은 화면을 꺼둔 채로 소리만
                  켜주셔도 괜찮으니 편하게 만나요! 간단한 아이스 브레이킹 후
                  영화시청하고 영화가 끝난 후에 1시간 정도 수다떨면서 맛있는 걸
                  먹을 예정입니다~ <br />
                  자세한 내용은 아래의 ‘모임 내용’을 참고해주세요! 댓글을
                  남겨주시면 채팅방을 만들겠습니다!ㅎㅎ
                </p>
                <br />
                <br />
                <p>
                  - 모임 내용 - <br />
                  🌠일시 : 2023.12.24(일) 오후 5시 <br />
                  🌠장소 : 온라인 (구글 미트 링크 추후 공지) <br />
                  🌠모집인원 : 10명 내외 <br />
                  🌠준비물 : 각자 먹을 간식, 각자의 넷플릭스 계정 <br />
                  🌠진행과정 -아이스 브레이킹(20분) -영화 감상(90분) -수다
                  타임(60분) <br />
                  <br />
                  📢영화 감상 중에는 소리를 켜지 않고 채팅창에서만 대화를 나누는
                  것으로 하겠습니다 :)
                </p>
              </div>
            </div>
            <Button
              children="수정하기"
              active={true}
              clickEvt={() => onClickBoard(1)}
            />
          </div>

          {/* 댓글 영역 */}
          <div className="commentArea">
            <h3>댓글</h3>
            <div className="commentList">
              {commentData.map((comment) => (
                <div key={comment.nickName} className="commentBox">
                  <div className="iconArea">
                    <div className="imgBox">
                      <img
                        src={comment.memberIcon || faceIcon}
                        alt="memberIcon"
                      />
                    </div>
                  </div>
                  <div className="textArea">
                    <div className="comment">
                      <p className="nickName">{comment.nickName}</p>
                      <p className="commentText">{comment.commentText}</p>
                    </div>
                  </div>
                  <div className="rightArea">
                    <div className="writeDate">2023.12.14</div>
                    <div className="editBtnBox">
                      <Button
                        className="deleteBtn"
                        children="삭제"
                        active={true}
                        width="70px"
                        height="30px"
                        fontSize="14px"
                        front="var(--BLUE)"
                      />
                      <Button
                        className="editBtn"
                        children="수정"
                        active={true}
                        width="70px"
                        height="30px"
                        fontSize="14px"
                        front="var(--GREY)"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="textInputBox">
              <textarea type="text" placeholder="댓글을 남겨주세요."></textarea>
              <Button
                className="postBtn"
                children="등록"
                active={true}
                width="70px"
                height="30px"
                fontSize="14px"
              />
            </div>
          </div>
          <div className="listBtnBox">
            <Button
              className="listBtn"
              children="목록보기"
              active={true}
              front="var(--VIOLET)"
              back="var(--BLUE)"
              clickEvt={() => onClickBoard(2)}
            />
          </div>
        </div>
      </PostComp>
    </>
  );
};
export default Post;
