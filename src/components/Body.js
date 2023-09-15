import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";
const Body = () => {

    const [listOfRestaurants , setListofRestaurant] = useState([
        {
        "name": "Meghana Foods",
        "location": "Bengaluru",
        "cuisine": "Biryani",
        "rating": 4.8,
        "deliveryTime": 39,
        "logo": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/usjgacltnt2rwla0hcpl",
      },
        {
        "name": "dominos",
        "location": "Bengaluru",
        "cuisine": "Biryani",
        "rating": 1.8,
        "deliveryTime": 39,
        "logo": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/usjgacltnt2rwla0hcpl",
      },
        {
        "name": "kfc",
        "location": "Bengaluru",
        "cuisine": "Biryani",
        "rating": 2.8,
        "deliveryTime": 39,
        "logo": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/usjgacltnt2rwla0hcpl",
      },
    ] , )

// let listOfRestaurants = [
// ,
//           {
//             "name": "Sagar Ratna",
//             "location": "Delhi",
//             "cuisine": "South Indian",
//             "rating": 3.5,
//             "deliveryTime": 30,
//             "logo": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/usjgacltnt2rwla0hcpl",
//             "offers": []
//           }
//     ];
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                // local state variable with use state
                
                // i want to write a filter logic to get the top rated resturant
                filteredRestaurant = listOfRestaurants.filter((ele)=>{
                    return ele.rating > 4.0;
                }
        );
        setListofRestaurant(filteredRestaurant)
        
        console.log(listOfRestaurants);
            }}> Top rated restaurants </button>
        </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurantData, index) => (
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