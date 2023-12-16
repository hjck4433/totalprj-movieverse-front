import { Outlet } from "react-router-dom";
import AdminMenu from "../../component/Administor/AdminMenu";
import { styled } from "styled-components";

const AdminLayoutComp = styled.div`
  min-height: 100vh;
  .wrapper {
    width: 1200px;
    margin: 0 auto;
    outline: 1px solid red;
  }
`;

const AdminLayout = () => {
  return (
    <>
      <AdminLayoutComp>
        <AdminMenu />
        <div className="wrapper">
          <Outlet />
        </div>
      </AdminLayoutComp>
    </>
  );
};
export default AdminLayout;
