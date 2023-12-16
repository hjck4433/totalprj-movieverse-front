import { Outlet } from "react-router-dom";
import AdminMenu from "../../component/Administor/AdminMenu";
import { styled } from "styled-components";

const AdminLayoutComp = styled.div`
  min-height: 100vh;
  display: flex;
  .wrapper {
    width: 1200px;
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
