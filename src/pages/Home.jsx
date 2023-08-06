import "./home.css";
import LayoutMain from "../layouts/LayoutMain";
import Carrucel from "../components/carrusel/Carrucel";
const Home = () => {
  return (
    <LayoutMain>
      <section className="container-hero">
        <h3 className="p-4">FIND THE PERFECT DESTINATION</h3>
        <p>
          Find your perfect trip, designed by insiders who know and love their
          cities!
        </p>
        <button className=" boton-hero">view more</button>
      </section>
      <section>
        <Carrucel />
      </section>
    </LayoutMain>
  );
};

export default Home;
