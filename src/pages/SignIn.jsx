import "./signIn.css";
import { useEffect, useRef } from "react";
/* import axios from "axios"; */
import { useDispatch } from "react-redux";
import { signIn } from "../redux/actions/userActions.js";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);

  useEffect(() => {}, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const aux = [email, password];

    if (aux.some((campo) => !campo.current.value)) {
      alert("todos los campos deben completarse");
    } else {
      const body = {
        email: email.current.value,

        password: password.current.value,
      };
      console.log(body);
      dispatch(signIn(body)).then((response) => {
        if (response.payload.success) {
          alert("Welcome " + response.payload.user.name);
          navegate("/");
        }
      });
    }
  };

  return (
    <div className="form-container">
      <form className="formulary" onSubmit={handleSubmit}>
        <div className="lavel-input-cont">
          <label className="">
            {" "}
            Email:
            <input
              type="email"
              name="email"
              className="input email"
              ref={email}
              required
            />
          </label>
        </div>
        <div className="lavel-input-cont">
          <label className="">
            {" "}
            Password:
            <input
              type="password"
              name="password"
              className="input password"
              required
              ref={password}
            />
          </label>
        </div>

        <button className="btn btn-secondary">sign in</button>
      </form>
    </div>
  );
};

export default SignIn;
