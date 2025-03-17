import "./home.css";

import Carrucel from "../components/carrusel/Carrucel";
import { Link as Anchor } from "react-router-dom";
const Home = () => {
  return (
    <main className="container-fuid ">
      <section className="container-hero">
        <h3>FIND THE PERFECT DESTINATION</h3>
        <p>
          Find your perfect trip,
          <br /> designed by insiders who know and <br />
          love their cities!
        </p>
        <button className=" boton-hero">
          {" "}
          <Anchor to={"cities/"}>view more</Anchor>{" "}
        </button>
      </section>
      <section>
        <Carrucel />
      </section>
    </main>
  );
};

export default Home;
