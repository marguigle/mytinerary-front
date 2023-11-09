import "./signUp.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/actions/userActions";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navegate = useNavigate();
  const [countries, setCountries] = useState([]);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const photo = useRef(null);
  const age = useRef(null);
  const password = useRef(null);
  const phone = useRef(null);
  const country = useRef(null);

  useEffect(() => {
    axios("https://restcountries.com/v3.1/all?fields=name").then(({ data }) =>
      setCountries(data.map((country) => country.name.common))
    );
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const aux = [name, email, photo, age, password, phone, country];

    if (aux.some((campo) => !campo.current.value)) {
      alert("todos los campos deben completarse");
    } else {
      const body = {
        name: name.current.value,
        email: email.current.value,
        photo: photo.current.value,
        age: age.current.value,
        password: password.current.value,
        phone: phone.current.value,
        country: country.current.value,
      };
      console.log(body);
      dispatch(signUp(body)).then((response) => {
        if (response.payload.success) {
          alert("Sign Up Successful " + response.payload.userData.name);
          navegate("/");
        }
      });
    }
  };

  const handleSubmitGoogle = (credentialResponse) => {
    const infoUser = jwtDecode(credentialResponse.credential);
    console.log(infoUser);

    const body = {
      name: infoUser.given_name,
      email: infoUser.email,
      photo: infoUser.picture,
      age: 0,
      password: infoUser.sub + "aX_",
      phone: 0,
      country: "Argentina",
    };
    dispatch(signUp(body)).then((response) => {
      if (response.payload.success) {
        alert("Sign Up Successful " + response.payload.userData.name);
        console.log(response.payload);
        navegate("/");
      }
    });
  };

  return (
    <div className="form-container">
      <form className="formulary" onSubmit={handleSubmit}>
        <label className=" m-1"> Name:</label>
        <input
          type="text"
          name="name"
          className="input name"
          ref={name}
          required
        />

        <label className="m-1"> Email:</label>
        <input
          type="email"
          name="email"
          className="input email"
          ref={email}
          required
        />

        <label className="m-1"> Photo:</label>
        <input type="text" name="photo" className="input photo" ref={photo} />
        <label className="m-2"> Age:</label>
        <input type="text" name="age" className="input age" ref={age} />

        <label className="m-1"> Password:</label>

        <input
          type="password"
          name="password"
          className="input password"
          required
          ref={password}
        />
        <label className="m-1"> Phone:</label>
        <input
          type="text"
          name="phone"
          className="input phone"
          ref={phone}
          required
        />
        <label className="m-1"> Country:</label>
        <select name="country" id="select" ref={country}>
          {countries.length > 0 &&
            countries.map((country) => (
              <option key={`opt-country-${country}`} value={country}>
                {country}{" "}
              </option>
            ))}
        </select>
        <button className="btn btn-secondary m-2">sign up</button>
        <GoogleOAuthProvider clientId="820051858064-7lpsa7m8gg8opmj0c9i9qhddm8rikv2b.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={handleSubmitGoogle}
            onError={() => {
              console.log("Login Failed");
              alert("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </form>
    </div>
  );
};

export default SignUp;
