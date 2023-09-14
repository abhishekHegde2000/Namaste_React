  
  function RestaurantCard({ resData }) {
    const { logo, name, cuisine, location, rating, deliveryTime } = resData;
  
    return (
      <div className="res-card">
        <img className="res-logo" src={logo} alt="Logo" />
        <h3>{name}</h3>
        <h4>{`${cuisine}, ${location}`}</h4>
        <h4>{`${rating} stars`}</h4>
        <h4>{`${deliveryTime} minutes`}</h4>
      </div>
    );
  }

    export default RestaurantCard;