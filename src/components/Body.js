import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
const Body = () => {
    return (
      <div className="body">
        <div className="search">
          Search
        </div>
        <div className="res-container">
          {resObj.map((restaurantData, index) => (
            <RestaurantCard
              key={index}
              resData={restaurantData}
            />
          ))}
        </div>
      </div>
    );
  }

export default Body;