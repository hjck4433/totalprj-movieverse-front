import { styled } from "styled-components";
import Button from "../../util/Button";
const AdminBoardComp = styled.div`
  padding-top: 10%;
  .container {
    width: 1200px;
    background-color: var(--VIOLET);
    padding: 40px 30px;
    h2 {
      margin-bottom: 30px;
    }
    .tableBox {
      width: 100%;
      padding-bottom: 10px;
      overflow-x: auto;
      table {
        width: 100%;
        max-width: 100%;
        white-space: nowrap;
        overflow-x: scroll;
        thead {
          tr {
            border-radius: 10px;
            th {
              color: #333;
              font-weight: 600;
              font-size: 1.2em;
              background-color: var(--GREY);
              padding: 20px;
              &:first-child {
                border-radius: 10px 0 0 10px;
              }
              &:last-child {
                border-radius: 0 10px 10px 0;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              padding: 10px;
              &.center {
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
`;

const AdminBoard = () => {
  const dataList = [
    {
      alias: "햄스터",
      image:
        "https://firebasestorage.googleapis.com/v0/b/movieverse-e1c4f.appspot.com/o/hamster.jpg?alt=media&token=3d2fe721-d4f2-4cde-8862-604ad7081656",
      title:
        "햄찌랜드 입니다 어서 놀러오세요! 같이 놀러갑시다!햄찌랜드 입니다 어서 놀러오세요! 같이 놀러갑시다!",
      count: 120,
      regDate: "2023.12.16",
      category: "무비모임",
      gatherType: "온라인",
    },
    {
      alias: "햄스터",
      image:
        "https://firebasestorage.googleapis.com/v0/b/movieverse-e1c4f.appspot.com/o/hamster.jpg?alt=media&token=3d2fe721-d4f2-4cde-8862-604ad7081656",
      title:
        "햄찌랜드 입니다 어서 놀러오세요! 같이 놀러갑시다!햄찌랜드 입니다 어서 놀러오세요! 같이 놀러갑시다!",
      count: 120,
      regDate: "2023.12.16",
      category: "무비모임",
      gatherType: "온라인",
    },
    {
      alias: "햄스터",
      image:
        "https://firebasestorage.googleapis.com/v0/b/movieverse-e1c4f.appspot.com/o/hamster.jpg?alt=media&token=3d2fe721-d4f2-4cde-8862-604ad7081656",
      title:
        "햄찌랜드 입니다 어서 놀러오세요! 같이 놀러갑시다!햄찌랜드 입니다 어서 놀러오세요! 같이 놀러갑시다!",
      count: 120,
      regDate: "2023.12.16",
      category: "무비모임",
      gatherType: "온라인",
    },
  ];
  return (
    <AdminBoardComp>
      <div className="container">
        <h2>게시글 관리</h2>
        <div className="tableBox">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>작성자</th>
                <th>게시글 제목</th>
                <th>조회수</th>
                <th>작성 날짜</th>
                <th>대분류</th>
                <th>소분류</th>
                <th>수정</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              {/* map으로 반복할 요소 */}
              {dataList &&
                dataList.map((data, index) => (
                  <tr key={data.title}>
                    {/* 숫자 자동증가 */}
                    <td className="center">{index + 1}</td>
                    <td>{data.alias}</td>
                    <td>{data.title}</td>
                    <td className="center">{data.count}</td>
                    <td className="center">{data.regDate}</td>
                    {/* 셀렉트 들어갈 예정 */}
                    <td>{data.category}</td>
                    {/* 셀렉트 들어갈 예정 */}
                    <td>{data.gatherType}</td>
                    <td>
                      <Button
                        children={"수정"}
                        fontSize=".8em"
                        width="80px"
                        height="30px"
                        active={true}
                        clickEvt={() => {}}
                      />
                    </td>
                    <td>
                      <Button
                        children={"삭제"}
                        fontSize=".8em"
                        width="80px"
                        height="30px"
                        active={true}
                        clickEvt={() => {}}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminBoardComp>
  );
};
export default AdminBoard;
