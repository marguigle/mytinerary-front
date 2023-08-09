import "./footer.css";
import { Link as Anchor } from "react-router-dom";
const Footer = () => {
  return (
    <section className="container-footer">
      <ul className="menu-footer">
        <li>
          <Anchor className="anchor" to={"/"}>
            home
          </Anchor>{" "}
        </li>
        <li>
          <Anchor className="anchor" to={"cities/"}>
            cities
          </Anchor>{" "}
        </li>
      </ul>
    </section>
  );
};

export default Footer;
