import { styled } from "styled-components";
import Button from "../../util/Button";
import { useNavigate } from "react-router-dom";
const AdminMenuComp = styled.div`
  width: 200px;
  position: fixed;
  top: 20%;
  left: 5%;
  .menuWrap {
    width: 100%;
    button {
      margin-bottom: 40px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const AdminMenu = () => {
  return (
    <>
      <AdminMenuComp>
        <div className="menuWrap">
          <Button
            children="회원 관리"
            width="100%"
            active={true}
            clickEvt={[]}
          />
          <Button
            children="게시글 관리"
            width="100%"
            active={true}
            clickEvt={[]}
          />
          <Button
            children="FAQ 관리"
            width="100%"
            active={true}
            clickEvt={[]}
          />
        </div>
      </AdminMenuComp>
    </>
  );
};
export default AdminMenu;
