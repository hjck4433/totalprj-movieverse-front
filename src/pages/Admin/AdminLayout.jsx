import { Outlet } from "react-router-dom";
import AdminMenu from "../../component/Administor/AdminMenu";

const AdminLayout = () => {
  return (
    <>
      <AdminMenu />
      <Outlet />
    </>
  );
};
export default AdminLayout;
