import "./home.css";
import LayoutMain from "../layouts/LayoutMain";
import Carrucel from "../components/carrusel/Carrucel";
const Home = () => {
  return (
    <LayoutMain>
      <section className="container-hero">
        <h3>FIND THE PERFECT DESTINATION</h3>
        <p>
          Find your perfect trip,
          <br /> designed by insiders who know and <br />
          love their cities!
        </p>
        <button className=" boton-hero">
          {" "}
          <a href="#">view more</a>{" "}
        </button>
      </section>
      <section>
        <Carrucel />
      </section>
    </LayoutMain>
  );
};

export default Home;
