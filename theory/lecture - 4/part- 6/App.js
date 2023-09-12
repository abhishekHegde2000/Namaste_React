
import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=>{
    return(
        <div className="header">

            <div className="logoContainer">
                <img className="logo" src="https://imgs.search.brave.com/Mvy0HTvvOpSBRbEeJsdi-dox4fiGkzrUoRCLV7SvWsg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzM2LzUxLzUx/LzM2MF9GXzQzNjUx/NTE0OV83QjlaZDho/bjZIYk13bndLaUZk/Y2JwQ0o3SXF3dkR1/cy5qcGc" alt="Logo" />
            </div>

            <div className="nav-items">

                <ul>
                    <li> Home </li>
                    <li> About </li>
                    <li> Contact </li>
                    <li> Login </li>
                </ul>

            </div>

        </div>
    )
}

const resObj = [
    {
      "name": "Meghana Foods",
      "location": "Bengaluru",
      "cuisine": "Biryani",
      "rating": 4.8,
      "deliveryTime": 39,
      "logo": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/usjgacltnt2rwla0hcpl",
      "offers": [
        {
          "title": "50% off on Kebabs",
          "description": "Enjoy 50% off on all Kebab orders today!",
          "code": "KEBAB50"
        }
      ]
    },
    {
      "name": "Sagar Ratna",
      "location": "Delhi",
      "cuisine": "South Indian",
      "rating": 4.5,
      "deliveryTime": 30,
      "logo": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/usjgacltnt2rwla0hcpl",
      "offers": []
    },
    {
      "name": "Pizza Hut",
      "location": "Mumbai",
      "cuisine": "Pizza",
      "rating": 4.2,
      "deliveryTime": 45,
      "logo": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/usjgacltnt2rwla0hcpl",
      "offers": [
        {
          "title": "Buy 1 Get 1 Free",
          "description": "Buy any medium pizza and get another medium pizza free!",
          "code": "BOGO"
        }
      ]
    },
    {
        "name": "Burger King",
        "location": "New York",
        "cuisine": "Burgers",
        "rating": 4.1,
        "deliveryTime": 35,
        "logo": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/usjgacltnt2rwla0hcpl",
        "offers": [
            {
                "title": "20% off on all orders",
                "description": "Enjoy 20% off on all orders today!",
                "code": "BK20"
            }
        ]
    },
    {
        "name": "Subway",
        "location": "Los Angeles",
        "cuisine": "Sandwiches",
        "rating": 4.3,
        "deliveryTime": 25,
        "logo": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/usjgacltnt2rwla0hcpl",
        "offers": []
    },
    {
        "name": "Taco Bell",
        "location": "Chicago",
        "cuisine": "Mexican",
        "rating": 4.0,
        "deliveryTime": 40,
        "logo": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/usjgacltnt2rwla0hcpl",
        "offers": [
            {
                "title": "$5 off on orders over $25",
                "description": "$5 off on all orders over $25 today!",
                "code": "$5OFF"
            }
        ]
    },
    {
        "name": "Panda Express",
        "location": "San Francisco",
        "cuisine": "Chinese",
        "rating": 4.2,
        "deliveryTime": 30,
        "logo": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/usjgacltnt2rwla0hcpl",
        "offers": [
            {
                "title": "Free Spring Roll",
                "description": "Get a free spring roll with every order!",
                "code": "FREEROLL"
            }
        ]
    },
    {
        "name": "Olive Garden",
        "location": "Seattle",
        "cuisine": "Italian",
        "rating": 4.5,
        "deliveryTime": 45,
        "logo": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/usjgacltnt2rwla0hcpl",
        "offers": []
    },
    {
        "name": "Chipotle",
        "location": "Austin",
        "cuisine": "Mexican",
        "rating": 4.3,
        "deliveryTime": 35,
        "logo": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/usjgacltnt2rwla0hcpl",
        "offers": [
            {
                "title": "$3 off on Burrito Bowl",
                "description": "$3 off on all Burrito Bowl orders today!",
                "code": "$3OFF"
            }
        ]
    },
    {
        "name": "Starbucks",
        "location": "Boston",
        "cuisine": "Coffee and Snacks",
        "rating": 4.6,
        "deliveryTime": 20,
        "logo": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/usjgacltnt2rwla0hcpl",
        "offers": [
            {
                "title": "$1 off on all drinks",
                "description": "$1 off on all drinks today!",
                "code": "$1OFF"
            }
        ]
    },
    {
        "name": "Starbucks",
        "location": "Boston",
        "cuisine": "Coffee and Snacks",
        "rating": 4.6,
        "deliveryTime": 20,
        "logo": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/usjgacltnt2rwla0hcpl",
        "offers": [
            {
                "title": "$1 off on all drinks",
                "description": "$1 off on all drinks today!",
                "code": "$1OFF"
            }
        ]
    },
    {
        "name": "Starbucks",
        "location": "Boston",
        "cuisine": "Coffee and Snacks",
        "rating": 4.6,
        "deliveryTime": 20,
        "logo": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/usjgacltnt2rwla0hcpl",
        "offers": [
            {
                "title": "$1 off on all drinks",
                "description": "$1 off on all drinks today!",
                "code": "$1OFF"
            }
        ]
    },
 
  ]
  
  
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

const AppLayout = ()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)



