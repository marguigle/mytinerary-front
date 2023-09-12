import "./signUp.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/actions/userActions";
const SignUp = () => {
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
      dispatch(signUp(body));
    }
  };

  return (
    <div className="form-container">
      <form className="formulary" onSubmit={handleSubmit}>
        <label className=" m-3">
          {" "}
          Name:
          <input
            type="text"
            name="name"
            className="input"
            ref={name}
            required
          />
        </label>

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
          Photo:
          <input type="text" name="photo" className="input photo" ref={photo} />
        </label>
        <label className="m-2">
          {" "}
          Age:
          <input type="text" name="age" className="input age" ref={age} />
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

        <label className="m-2">
          {" "}
          Phone:
          <input
            type="text"
            name="phone"
            className="input phone"
            ref={phone}
            required
          />
        </label>
        <label className="m-2">
          {" "}
          Country:
          <select name="country" id="select" ref={country}>
            {countries.length > 0 &&
              countries.map((country) => (
                <option key={`opt-country-${country}`} value={country}>
                  {country}{" "}
                </option>
              ))}
          </select>
        </label>
        <button className="btn btn-secondary">sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
