import "./signIn.css";
import { useEffect, useRef } from "react";

import { useDispatch } from "react-redux";
import { signIn } from "../redux/actions/userActions.js";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

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
  /* const handleSubmitGoogle = (e)=>{
  const aux = [ email,  password];
  const body = {
    
    email: infoUser.email,
    password:
 
  };

} */
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
        <GoogleOAuthProvider clientId="820051858064-7lpsa7m8gg8opmj0c9i9qhddm8rikv2b.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              const infoUser = jwtDecode(credentialResponse.credential);
              console.log(infoUser);
              console.log(infoUser.email);
              console.log(infoUser.password);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </form>
    </div>
  );
};

export default SignIn;
