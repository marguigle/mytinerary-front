import "./carrucel.css";

const Carrucel = () => {
  return (
    <>
      <button>{"<"}</button>
      <div className="contenedor-carrusel">
        <img
          src="../../public/img/paris-100277_1280.jpg"
          alt=""
          className="img-carrusel"
        />
        <img
          src="../../public/img/paris-100277_1280.jpg"
          alt=""
          className="img-carrusel"
        />
        <img
          src="../../public/img/paris-100277_1280.jpg"
          alt=""
          className="img-carrusel"
        />
        <img
          src="../../public/img/paris-100277_1280.jpg"
          alt=""
          className="img-carrusel"
        />
      </div>
      <button>{">"}</button>
    </>
  );
};

export default Carrucel;
