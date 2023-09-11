import "./signUp.css";

const SignUp = () => {
  return (
    <div className="form-container">
      <form className="formulary">
        <label className=" m-3">
          {" "}
          Name:
          <input type="text" className="input" />
        </label>

        <label className="m-3">
          {" "}
          Email:
          <input type="text" className="input" />
        </label>

        <label className="m-3">
          {" "}
          Photo:
          <input type="text" className="input photo" />
        </label>
        <label className="m-3">
          {" "}
          Age:
          <input type="text" className="input age" />
        </label>

        <label className="m-3">
          {" "}
          Password:
          <input type="text" className="input password" />
        </label>

        <label className="m-3">
          {" "}
          Birdh Day:
          <input type="text" className="input birdh-day" />
        </label>
      </form>
    </div>
  );
};

export default SignUp;
