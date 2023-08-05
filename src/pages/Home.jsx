import "./home.css";
import LayoutMain from "../layouts/LayoutMain";

const Home = () => {
  return (
    <LayoutMain>
      <body className="container-body">
        <div className="container-hero">
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
        </div>

        <div className="contenedor-carrusel">
          <button className="btn-carrusel">{"<"}</button>
          <img
            src="../../../public/img/munich-1572429_1280.jpg"
            className="img-carrusel"
            alt=""
          />
          <button className="btn-carrusel">{">"}</button>
        </div>
      </body>
    </LayoutMain>
  );
};

export default Home;
