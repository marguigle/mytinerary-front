import "./header.css";

const Header = () => {
  return (
    <nav className=" navbar">
      <div>
        <h1 id="nombreHeader">My Tinerary</h1>
      </div>
      <div>
        <input type="checkbox" className="checkbox" />
        <i className="icons fi fi-br-menu-burger burger"></i>
        <i className="icons fi fi-br-cross cross"></i>

        <ul className="menu">
          <li>
            <a href="#">home</a>{" "}
          </li>
          <li>
            <a href="#">cities</a>{" "}
          </li>
          <li>
            <a href="#">login</a>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
