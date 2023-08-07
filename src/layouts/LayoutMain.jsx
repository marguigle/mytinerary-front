import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const LayoutMain = (props) => {
  return (
    <>
      <Header />

      <main className="container-fuid">{props.children}</main>
      <Footer />
    </>
  );
};

export default LayoutMain;
