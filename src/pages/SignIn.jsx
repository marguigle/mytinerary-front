import "./signUp.css";
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

  useEffect(() => {
    /*  axios("https://restcountries.com/v3.1/all?fields=name").then(({ data }) =>
      setCountries(data.map((country) => country.name.common)) 
    );*/
  }, []);
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
        <label className="m-2">
          {" "}
          Email:
          <input
            type="email"
            name="email"
            className="input"
            ref={email}
            required
          />
        </label>

        <label className="m-2">
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

        <button className="btn btn-secondary">sign in</button>
      </form>
    </div>
  );
};

export default SignIn;
