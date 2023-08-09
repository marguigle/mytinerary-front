import "./header.css";
import { Link as Anchor } from "react-router-dom";

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
            <Anchor to={"/"}>home</Anchor>{" "}
          </li>
          <li>
            <Anchor to={"cities/"}>cities</Anchor>{" "}
          </li>
          <li>
            <Anchor to={"#"}>login</Anchor>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
