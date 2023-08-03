import "./Header.css";

const Header = () => {
  return (
    <div className="header-main">
      <h3>My Tinerary</h3>
      <div className="container-btn">
        <button>home</button>
        <button>cities</button>
        <button>login</button>
      </div>
    </div>
  );
};

export default Header;
