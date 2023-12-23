import { styled } from "styled-components";
import { useState, useEffect } from "react";
import Button from "../../../util/Button";
import Modal from "../../../util/Modal";

const TrComp = styled.tr`
  vertical-align: middle;
  td {
    outline: 1px solid red;
    padding: 10px;
    vertical-align: middle;
    &.center {
      text-align: center;
    }
    &.profile {
      .wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .imgBox {
          width: 30px;
          padding-bottom: 30px;
          position: relative;
          border-radius: 100%;
          overflow: hidden;
          img {
            position: absolute;
            width: 100%;
          }
          margin-right: 10px;
        }
        span {
        }
      }
    }
    &.selectBox {
      select {
        &:disabled {
          opacity: 1;
        }
        outline: none;
        border: none;
        padding: 6px;
        font-weight: 600;
        option {
        }
      }
    }
  }
`;

const Tr = ({ data, index }) => {
  const [categorySel, setCategorySel] = useState(data.category);
  const [categoryActive, setCategoryActive] = useState(true);

  const [typeSel, setTypeSel] = useState(data.gatherType);
  const [gatherActive, setGatherActive] = useState(true);

  const [confirmRevise, setConfirmRevise] = useState(false);

  useEffect(() => {
    // console.log("Category : " + selCategory);
    // console.log("Gather : " + selGather);
    if (categorySel === "무비추천") {
      setTypeSel("sel");
      setGatherActive(true);
    }
  }, [categorySel, typeSel]);

  //Modal
  const [openModal, setModalOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const [modalType, setModalType] = useState(null);
  const [modalConfirm, setModalConfirm] = useState(null);

  // 모달 닫기
  const closeModal = (num) => {
    setModalOpen(false);
  };
  const handleModal = (header, msg, type, num) => {
    setModalOpen(true);
    setModalHeader(header);
    setModalMsg(msg);
    setModalType(type);
    setModalConfirm(num);
  };

  const clickRevise = () => {
    setCategoryActive(false);
    if (categorySel !== "영화추천" && categorySel !== "sel")
      setGatherActive(false);
    setConfirmRevise(true);
  };

  const onChangeCategory = (e) => {
    setCategorySel(e.target.value);
    if (e.target.value !== "무비추천") {
      setGatherActive(false);
      if (data.gatherType === "") {
        setTypeSel("오프라인");
      } else setTypeSel(data.gatherType);
    }
  };
  const onChangeType = (e) => {
    setTypeSel(e.target.value);
  };

  const ClickOk = () => {
    handleModal("확인", "수정하시겠습니까?", true, 0);
  };

  return (
    <TrComp>
      {/* 숫자 자동증가 */}
      <td className="center">{index + 1}</td>
      <td className="profile">
        <span className="wrapper">
          <span className="imgBox">
            <img src={data.image} alt="profile" />
          </span>
          <span>{data.alias}</span>
        </span>
      </td>
      <td>{data.title}</td>
      <td className="center">{data.count}</td>
      <td className="center">{data.regDate}</td>
      {/* 셀렉트 들어갈 예정 */}
      <td className="selectBox">
        <select
          name="category"
          disabled={categoryActive}
          value={categorySel}
          onChange={onChangeCategory}
        >
          <option value="sel" hidden>
            선택
          </option>
          <option value="무비모임">무비모임</option>
          <option value="모임후기">모임후기</option>
          <option value="무비추천">무비추천</option>
        </select>
      </td>
      {/* 셀렉트 들어갈 예정 */}
      <td className="selectBox">
        <select
          name="gather"
          disabled={gatherActive}
          value={typeSel}
          onChange={onChangeType}
        >
          <option value="sel" hidden>
            선택
          </option>
          <option value="오프라인">오프라인</option>
          <option value="온라인">온라인</option>
        </select>
      </td>
      <td>
        {confirmRevise ? (
          <Button
            children={"확인"}
            back="var(--BLUE)"
            fontSize=".8em"
            width="80px"
            height="30px"
            active={true}
            clickEvt={ClickOk}
          />
        ) : (
          <Button
            children={"수정"}
            back="var(--BLUE)"
            fontSize=".8em"
            width="80px"
            height="30px"
            active={true}
            clickEvt={clickRevise}
          />
        )}
      </td>
      <td>
        <Button
          children={"삭제"}
          back="var(--BLUE)"
          fontSize=".8em"
          width="80px"
          height="30px"
          active={true}
          clickEvt={() => {}}
        />
      </td>
      <Modal
        open={openModal}
        close={closeModal}
        header={modalHeader}
        children={modalMsg}
        type={modalType}
        confirm={() => {
          if (modalConfirm === 0) {
            setCategoryActive(true);
            setGatherActive(true);
            closeModal();
            setConfirmRevise(false);
          }
        }}
        closeEvt={() => {
          setCategoryActive(true);
          setGatherActive(true);
          setConfirmRevise(false);
          setCategorySel(data.category);
          setTypeSel(data.gatherType);
        }}
      />
    </TrComp>
  );
};
export default Tr;
