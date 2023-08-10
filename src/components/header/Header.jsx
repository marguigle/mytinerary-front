import "./header.css";
import { Link as Anchor } from "react-router-dom";

const Header = () => {
  const linkMenu = [
    {
      name: "home",
      to: "/",
    },
    {
      name: "cities",
      to: "cities/",
    },
    {
      name: "login",
      to: "#",
    },
  ];

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
            <Anchor to={linkMenu[0].to}>{linkMenu[0].name}</Anchor>{" "}
          </li>
          <li>
            <Anchor to={linkMenu[1].to}>{linkMenu[1].name}</Anchor>{" "}
          </li>
          <li>
            <Anchor to={"#"}>{linkMenu[2].name}</Anchor>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
