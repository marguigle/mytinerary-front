import "./header.css";

const Header = () => {
  return (
    <div className=" container-fluid header-main ">
      <h1 className="nombreHeader">My Tinerary</h1>
      <nav className="container-btn ">
        <i className="fi fi-br-menu-burger burger"></i>
        {/*   <i className="fi fi-br-cross cross"></i> */}

        <ul>
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
      </nav>
    </div>
  );
};

export default Header;
