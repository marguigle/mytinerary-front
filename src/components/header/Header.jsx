import "./header.css";

const Header = () => {
  return (
    <div className="header-main">
      <h3>My Tinerary</h3>
      <navbar className="container-btn">
        <button>home</button>
        <button>cities</button>
        <button>login</button>
      </navbar>
    </div>
  );
};

export default Header;
