import Button from "../util/Button";
import { useNavigate } from "react-router-dom";
import face from "../images/faceIcon/faceIcon7.png";
import { NewPostComp, RadioBox } from "../component/NewPost/NewPostStyle";

const NewPost = () => {
  return (
    <>
      <NewPostComp>
        <div className="container">
          <div className="bubbleArea">
            <img className="faceIcon" src={face} alt="Icon" />
            <div className="bubbleText">
              <h2>게시글을 등록해볼까요?</h2>
              <p>
                무비 모임을 열어서 함께 영화도 보고, 모임 후기도 남겨보세요!
              </p>
              <p>
                나의 인생 영화, 추천영화도 공유하며 새로운 취향도 찾아보아요~
              </p>
            </div>
          </div>
          <div className="postBox">
            <div className="selectBoard">
              <h3>게시판 선택</h3>
              <RadioBox>
                {/* name 부분이 같아야 함 */}
                <div className="boardSelectBtn">
                  <label class="boardLable1" htmlFor="btn1">
                    <input type="radio" id="option1" name="bordBtn" />
                    무비모임
                  </label>
                  <label class="boardLable2" htmlFor="btn2">
                    <input type="radio" id="option2" name="bordBtn" />
                    모임후기
                  </label>
                  <label class="boardLable3" htmlFor="btn3">
                    <input type="radio" id="option3" name="bordBtn" />
                    영화추천
                  </label>
                </div>
              </RadioBox>
            </div>
            <div className="meetingMethod">
              <h3>장 소</h3>
              <RadioBox>
                <div className="placeSelectBtn">
                  <label class="placeLable1" htmlFor="btn1">
                    <input type="radio" id="option1" name="placeBtn" />
                    온라인
                  </label>
                  <label class="placeLable2" htmlFor="btn2">
                    <input type="radio" id="option2" name="placeBtn" />
                    오프라인
                  </label>
                </div>
              </RadioBox>
            </div>
            <div className="writer">
              <h3>작성자</h3>
              <p>gogohamster</p>
            </div>
            <div className="uploadDate">
              <h3>작성일</h3>
              <p>20231214</p>
            </div>
            <div className="postTitle">
              <h3>제 목</h3>
              <p> 제목 자리만 입력</p>
            </div>
            <div className="uploadImg">
              <h3>이미지</h3>
            </div>
            <div className="contents">
              <h3>내 용</h3>
              <textarea
                type="text"
                placeholder="모임내용을 입력해주세요"
              ></textarea>
            </div>
            <div className="buttonBox">
              <Button children="등록하기" active={true} back="var(--BLUE)" />
              <Button
                children="목록보기"
                active={true}
                front="var(--VIOLET)"
                back="var(--BLUE)"
              />
            </div>
          </div>
        </div>
      </NewPostComp>
    </>
  );
};
export default NewPost;
