import "./header.css";

const Header = () => {
  return (
    <div className="header-main ">
      <h1 className="nombreHeader">My Tinerary</h1>
      <nav className="container-btn ">
        <button className="btn btn-secondary btn-nav">
          <a href="#">home</a>
        </button>
        <button className="btn btn-secondary btn-nav">
          <a href="#">cities</a>
        </button>
        <button className="btn btn-secondary btn-nav ">
          <a href="#">login</a>
        </button>
      </nav>
    </div>
  );
};

export default Header;
