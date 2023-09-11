import "./signUp.css";
import { useState, useEffect } from "react";
import axios from "axios";
useState;
const SignUp = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios("https://restcountries.com/v3.1/all?fields=name").then(({ data }) =>
      setCountries(data.map((country) => country.name.common))
    );
  }, []);

  return (
    <div className="form-container">
      <form className="formulary">
        <label className=" m-3">
          {" "}
          Name:
          <input type="text" name="name" className="input" />
        </label>

        <label className="m-3">
          {" "}
          Email:
          <input type="email" name="email" className="input" />
        </label>

        <label className="m-3">
          {" "}
          Photo:
          <input type="text" name="photo" className="input photo" />
        </label>
        <label className="m-3">
          {" "}
          Age:
          <input type="text" name="age" className="input age" />
        </label>

        <label className="m-3">
          {" "}
          Password:
          <input type="password" name="password" className="input password" />
        </label>

        <label className="m-3">
          {" "}
          Birdh Date:
          <input type="text" name="birdh_date" className="input birdh-day" />
        </label>
        <label className="m-3">
          {" "}
          Country:
          <select name="country" id="select">
            {countries.length > 0 &&
              countries.map((country) => (
                // eslint-disable-next-line react/jsx-key
                <option value={country}>{country} </option>
              ))}
          </select>
        </label>
      </form>
    </div>
  );
};

export default SignUp;
