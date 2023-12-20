import { styled } from "styled-components";
import Chart from "../../component/Chart/Chart";
import MemTr from "../../component/Administor/AdminBoard/MemTableElement";
import MemberApi from "../../api/MemberApi";
import { useEffect, useState } from "react";
import Common from "../../util/Common";
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
              /* border: 1px solid blue; */
              color: #333;
              font-weight: 600;
              font-size: 1em;
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
              /* border: 1px solid red; */
              padding: 10px;
              vertical-align: middle;
              font-size: 0.9rem;
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
  const [page, setPage] = useState(0);
  const [memData, setMemData] = useState([]);

  useEffect(() => {
    Common.handleTokenAxios(adminMemList);
  }, [page]);

  useEffect(() => {
    Common.handleTokenAxios(adminMemList);
  }, []);

  // 멤버정보 불러오기
  const adminMemList = async () => {
    const rsp = await MemberApi.memberPage(page);
    if (rsp.data !== null) {
      setMemData(rsp.data);
    }
  };

  // const memData = [
  //   {
  //     profile:
  //       "https://firebasestorage.googleapis.com/v0/b/movieverse-e1c4f.appspot.com/o/hamster.jpg?alt=media&token=3d2fe721-d4f2-4cde-8862-604ad7081656",
  //     alias: "햄스터는 햄햄",
  //     name: "햄토리",
  //     email: "hamham1234@gmail.com",
  //     phone: "010-8888-8888",
  //     iskakao: "연동완료",
  //     membership: "미가입",
  //     regDate: "2023.12.12",
  //     withdraw: "회원",
  //     addr: "서울시 강남구 역삼동",
  //   },
  // ];
  return (
    <>
      <AdminMemberComp>
        <div className="container">
          <h2>회원 정보 관리</h2>
          <Chart />
          <div className="tableBox">
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>유저</th>
                  <th>이름</th>
                  <th>이메일</th>
                  <th>전화번호</th>
                  <th>카카오연동</th>
                  <th>멤버십</th>
                  <th>등록날짜</th>
                  <th>탈퇴정보</th>
                  <th>주소</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                {/* map으로 반복할 요소 */}
                {memData &&
                  memData.map((data, index) => (
                    <MemTr key={data.email} data={data} index={index} />
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
