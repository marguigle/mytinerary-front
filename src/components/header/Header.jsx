import { useSelector, useDispatch } from "react-redux";
import "./header.css";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/userActions.js";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
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
      name: "Sign Up",
      to: "signup",
    },
    {
      name: "Sign In",
      to: "signin",
    },
    {
      name: "Sign Out",
      to: "/",
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
            <Link to={linkMenu[0].to}>{linkMenu[0].name}</Link>{" "}
          </li>
          <li>
            <Link to={linkMenu[1].to}>{linkMenu[1].name}</Link>{" "}
          </li>

          {user ? (
            <li>
              <Link to={linkMenu[0].to} onClick={() => dispatch(logout())}>
                {linkMenu[4].name}
              </Link>{" "}
            </li>
          ) : (
            <>
              <li>
                <Link to={linkMenu[2].to}>{linkMenu[2].name}</Link>{" "}
              </li>
              <li>
                <Link to={linkMenu[3].to}>{linkMenu[3].name}</Link>{" "}
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
