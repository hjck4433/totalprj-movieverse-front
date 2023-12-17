import { styled } from "styled-components";
import Button from "../../util/Button";
import Chart from "../../component/Chart/Chart";
const AdminMemberComp = styled.div`
  padding-top: 10%;
  .container {
    width: 1200px;
    background-color: var(--VIOLET);
    padding: 40px 30px;
    h2 {
      margin-bottom: 30px;
    }
    .chart {
      margin-bottom: 50px;
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

const AdminMember = () => {
  const memData = [
    {
      profile:
        "https://firebasestorage.googleapis.com/v0/b/movieverse-e1c4f.appspot.com/o/hamster.jpg?alt=media&token=3d2fe721-d4f2-4cde-8862-604ad7081656",
      alias: "햄스터는 햄햄",
      name: "햄토리",
      email: "hamham1234@gmail.com",
      phone: "010-8888-8888",
      membership: "미가입",
      joinDate: "2023.12.12",
      addr: "서울시 강남구 역삼동",
    },
    {
      profile:
        "https://firebasestorage.googleapis.com/v0/b/movieverse-e1c4f.appspot.com/o/hamster.jpg?alt=media&token=3d2fe721-d4f2-4cde-8862-604ad7081656",
      alias: "햄스터는 햄햄",
      name: "햄토리",
      email: "hamham1234@gmail.com",
      phone: "010-8888-8888",
      membership: "미가입",
      joinDate: "2023.12.12",
      addr: "서울시 강남구 역삼동",
    },
    {
      profile:
        "https://firebasestorage.googleapis.com/v0/b/movieverse-e1c4f.appspot.com/o/hamster.jpg?alt=media&token=3d2fe721-d4f2-4cde-8862-604ad7081656",
      alias: "햄스터는 햄햄",
      name: "햄토리",
      email: "hamham1234@gmail.com",
      phone: "010-8888-8888",
      membership: "미가입",
      joinDate: "2023.12.12",
      addr: "서울시 강남구 역삼동",
    },
  ];
  return (
    <>
      <AdminMemberComp>
        <div className="container">
          <h2>회원 정보 관리</h2>
          <Chart />
          <div className="tableBox">
            <table>
              <thead className="">
                <tr>
                  <th>No.</th>
                  <th>유저</th>
                  <th>이름</th>
                  <th>이메일</th>
                  <th>전화번호</th>
                  <th>멤버십</th>
                  <th>등록날짜</th>
                  <th>주소</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                {/* map으로 반복할 요소 */}
                {memData &&
                  memData.map((data, index) => (
                    <tr key={data.title}>
                      {/* 숫자 자동증가 */}
                      <td className="center">{index + 1}</td>
                      {/* <td>{data.profile}</td> */}
                      <td>{data.alias}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.phone}</td>
                      <td>{data.membership}</td>
                      <td>{data.joinDate}</td>
                      <td>{data.addr}</td>

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
      </AdminMemberComp>
    </>
  );
};
export default AdminMember;
