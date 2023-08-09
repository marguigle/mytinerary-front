import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const LayoutCities = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container-fuid">{children}</main>
      <Footer />
    </>
  );
};

export default LayoutCities;
