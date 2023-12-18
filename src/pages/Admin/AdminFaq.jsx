import { styled } from "styled-components";
import Button from "../../util/Button";

const AdminFaqComp = styled.div`
  padding-top: 8%;
  .container {
    min-width: 1200px;
    background-color: var(--VIOLET);
    padding: 40px 30px;
    margin: 0;
    margin-left: 50px;
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
        margin-bottom: 20px;

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
            vertical-align: middle;
            td {
              padding: 10px;
              /* outline: 1px solid red; */
              &.center {
                text-align: center;
              }
              &.btn {
                span {
                  display: flex;
                  justify-content: center;
                }
              }
            }
          }
        }
      }
    }
    .addbutton {
      display: flex;
      justify-content: end;
    }
  }
`;

const AdminFaq = () => {
  const faqData = [
    {
      title: "무비버스는 무엇인가요?-----------------------------------",
    },
    {
      title: "무비버스는 무엇인가요------------------------------------",
    },
    {
      title: "무비버스는 무엇인가요------------------------------------",
    },
  ];
  return (
    <>
      <AdminFaqComp>
        <div className="container">
          <h2>FAQ 관리</h2>
          <div className="tableBox">
            <table>
              <thead className="">
                <tr>
                  <th>No.</th>
                  <th>제목</th>
                  <th>수정</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                {/* map으로 반복할 요소 */}
                {faqData &&
                  faqData.map((data, index) => (
                    <tr key={data.title}>
                      <td className="center">{index + 1}</td>
                      <td>{data.title}</td>
                      <td className="btn">
                        <span>
                          <Button
                            children={"수정"}
                            back="var(--BLUE)"
                            fontSize=".8em"
                            width="80px"
                            height="30px"
                            active={true}
                            clickEvt={() => {}}
                          />
                        </span>
                      </td>

                      <td className="btn">
                        <span>
                          <Button
                            children={"삭제"}
                            fontSize=".8em"
                            width="80px"
                            height="30px"
                            active={true}
                            front="var(--BLUE)"
                            clickEvt={() => {}}
                          />
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="addbutton">
              <Button
                children={"추가"}
                fontSize=".8em"
                width="80px"
                height="30px"
                active={true}
                front="var(--MIDBLUE)"
                clickEvt={() => {}}
              />
            </div>
          </div>
        </div>
      </AdminFaqComp>
    </>
  );
};
export default AdminFaq;
