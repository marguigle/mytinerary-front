import "./header.css";

const Header = () => {
  return (
    <div className=" container-fluid header-main ">
      <h1 className="nombreHeader">My Tinerary</h1>

      <nav className="container-btn ">
        <button className=" boton-nav">
          <a href="#">home</a>
        </button>
        <button className=" boton-nav">
          <a href="#">cities</a>
        </button>
        <button className=" boton-nav ">
          <a href="#">login</a>
        </button>
      </nav>
    </div>
  );
};

export default Header;
