import "./cardCities.css";

const CardCities = ({ city }) => {
  return (
    <div className="cities-card">
      <div className="cities-img">
        <img src={city.image} alt="" />
      </div>
      <h4>{city.name}</h4>
      <p>{city.language}</p>
      <p>{city.description}</p>
    </div>
  );
};

export default CardCities;
