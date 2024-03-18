import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />

      <h1>This is the Layout Route</h1>
    </>
  );
};

export default Layout;
