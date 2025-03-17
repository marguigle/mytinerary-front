import "./signIn.css";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/actions/userActions.js";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

import "react-toastify/dist/ReactToastify.css";

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
  const handleSubmitGoogle = (credentialResponse) => {
    const infoUser = jwtDecode(credentialResponse.credential);
    console.log(infoUser.email);
    console.log(infoUser.sub);
    console.log(infoUser);

    const body = {
      email: infoUser.email,
      password: infoUser.sub + "aX_",
    };
    dispatch(signIn(body)).then((response) => {
      if (response.payload.success) {
        alert("Welcome " + response.payload.user.name);
        navegate("/");
      }
    });
  };
  return (
    <div className="form-container" onSubmit={handleSubmit}>
      <form className="mb-1 form-signin">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          name="email"
          ref={email}
          required
          className="form-control  input-email"
          id="exampleFormControlInput1"
        />

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            ref={password}
            className="form-control input-password"
            id="exampleFormControlInput2"
          />
        </div>

        <button className="btn btn-secondary">sign in</button>
      </form>

      <GoogleOAuthProvider clientId="820051858064-7lpsa7m8gg8opmj0c9i9qhddm8rikv2b.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleSubmitGoogle}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default SignIn;
