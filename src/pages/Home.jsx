import "./home.css";
import LayoutMain from "../layouts/LayoutMain";
import Carrucel from "../components/carrusel/Carrucel";
const Home = () => {
  return (
    <LayoutMain>
      <body className="container-body">
        <section className="container-hero">
          <h3>FIND THE PERFECT DESTINATION</h3>
          <p>
            Find your perfect trip, designed by insiders who know and love their
            cities!
          </p>
          <img
            src="../../../public/img/copenhagen-142711_1280.jpg"
            alt=""
            className="img-hero"
          />
        </section>
        <section>
          <Carrucel />
        </section>
      </body>
    </LayoutMain>
  );
};

export default Home;
