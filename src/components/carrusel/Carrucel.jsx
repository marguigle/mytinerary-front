import "./carrucel.css";

const Carrucel = () => {
  const FotoCiudades = [
    { id: 0, foto: "../public/img/copenhagen-142711_1280.jpg" },
    { id: 1, foto: "../public/img/dubai-2650364_1280.jpg" },
    { id: 2, foto: "../public/img/london-123785_1280.jpg" },
    { id: 3, foto: "../public/img/munich-1572429_1280.jpg" },
    {},
  ];

  /* let indice = 0; */
  const prev = () => {};

  const next = () => {};

  return (
    <>
      <section className="section-carousel container-flex">
        <button className="btn-carroucel" onClick={prev}>
          {"<"}
        </button>
        <div className="contenedor-carrusel col-6">
          <img src={FotoCiudades[0].foto} alt="" className="img-carrusel" />
          <img src={FotoCiudades[1].foto} alt="" className="img-carrusel" />
          <img src={FotoCiudades[2].foto} alt="" className="img-carrusel" />
          <img src={FotoCiudades[3].foto} alt="" className="img-carrusel" />
        </div>
        <button onClick={next}>{">"}</button>
      </section>
    </>
  );
};

export default Carrucel;
