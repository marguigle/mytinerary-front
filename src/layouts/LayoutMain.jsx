import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import { Outlet } from "react-router-dom";
const LayoutMain = () => {
  return (
    <>
      <Header />
      <Outlet />

      <Footer />
    </>
  );
};

export default LayoutMain;
