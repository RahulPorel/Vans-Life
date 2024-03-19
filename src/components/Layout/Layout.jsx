import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer/Footer";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
