import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
const LayoutMain = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default LayoutMain;
