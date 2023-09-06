const CityItineraries = () => {
  return (
    <div>
      <section className="cont-itineraries">
        <div className="cont-itinerary-card">
          <div className="guide">
            <img src="public/img/guia-1.jpeg" className="img-guide" alt="" />
            <p className="guide-name">Guide Name</p>
          </div>

          <p>Itinerary:</p>
          <p>Price:</p>
          <p>duration:</p>
          <p>Hashtags:</p>
          <button className="btn-ViewMore">view more</button>
        </div>
      </section>
    </div>
  );
};

export default CityItineraries;
