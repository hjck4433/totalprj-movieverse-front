import { styled } from "styled-components";
import Button from "../../util/Button";
import EditFaqModal from "../../component/Administor/AdmimFaq/EditFaqModal";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FaqTr from "../../component/Administor/AdmimFaq/FaqElement";
import Modal from "../../util/Modal";

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
        margin-bottom: 30px;
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
        }
      }
    }
    .addbutton {
      display: flex;
      justify-content: end;
      border-top: 1px solid #ccc;
      padding-top: 30px;
    }
  }
`;

const AdminFaq = () => {
  const navigate = useNavigate();
  const [adminFaq, setAdminFaq] = useState("");

  const [titleVal, setTitleVal] = useState("");
  const [contentVal, setContentVal] = useState("");

  const [editId, setEditId] = useState("");

  // 새 faq 생성 관련
  const [openFaqModal, setFaqModalOpen] = useState(false);
  const [faqType, setFaqType] = useState("");

  const closeModal = () => {
    setFaqModalOpen(false);
  };

  const openEdit = () => {
    setFaqModalOpen(true);
    setFaqType("edit");
  };

  const changeTitleInput = (e) => {
    setTitleVal(e.target.value);
  };

  const changeContentInput = (e) => {
    setContentVal(e.target.value);
  };

  const faqData = [
    {
      id: 1234,
      title: "무비버스는 무엇인가요?-----------------------------------",
      content: "졸려졸려졸려졸려졸려졸려졸려햄스터",
    },
    {
      id: 122,
      title: "무비버스는 무엇인가요------------------------------------",
      content: "졸려졸려졸려졸려졸려졸려졸려햄스터",
    },
    {
      id: 22,
      title: "무비버스는 무엇인가요------------------------------------",
      content: "졸려졸려졸려졸려졸려졸려졸려햄스터",
    },
  ];

  // useEffect(() => {
  //   console.log("titleVal : " + titleVal);
  //   console.log("contentVal : " + contentVal);
  //   console.log("editId : " + editId);
  // }, [titleVal, contentVal, editId]);

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
                    <FaqTr
                      key={data.id}
                      data={data}
                      index={index}
                      editModal={openEdit}
                      setTitle={setTitleVal}
                      setContent={setContentVal}
                      setId={setEditId}
                    ></FaqTr>
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
                front="var(--BLUE)"
                back="var(--DARKBLUE)"
                clickEvt={() => {
                  setFaqModalOpen(true);
                  setFaqType("new");
                }}
              />
            </div>
          </div>
        </div>
        <EditFaqModal
          open={openFaqModal}
          close={closeModal}
          type={faqType}
          titleVal={titleVal}
          contentVal={contentVal}
          onChangeTitle={changeTitleInput}
          onChangeContent={changeContentInput}
          editId={editId}
        />
        <Modal />
      </AdminFaqComp>
    </>
  );
};
export default AdminFaq;
