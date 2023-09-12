// import react and react dom 
import React from "react";
import ReactDOM from "react-dom/client";






// create functional component Header

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
            {/* create a ul inside that have 4 list */}

        </div>
    )
}

// const RestaurantCard = () =>{
//     return(
//          it should have image , name of restaurant , star rating , cuisines , delvary tie
//         <div className="res-card">
//             <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/usjgacltnt2rwla0hcpl" alt="pizza" />
//             {/* <h3>Meghana Foods</h3>
//             <h4>biriyani , bengakuru</h4>
//             <h4>4.8 stars</h4>
//             <h4>39 minutes</h4> */
//          these values are hardcoded but how can i make it dynamic? - with the help of props
//          props are just normal args to a function.
//             }
//         </div>
//     )
// }


{/* Sure, here are the examples with smaller codes:

**Without destructuring:**

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

<Greeting name="John" />
```

In this example, `props` is an object that contains properties passed to the component. `props.name` will contain the name passed to the `Greeting` component.

**With destructuring:**

```jsx
const Greeting = ({ name }) => {
  return <h1>Hello, {name}</h1>;
}

<Greeting name="John" />
```

In this example, we're using destructuring in the function parameter to directly extract the `name` property from `props`. This way, you can use `name` directly instead of having to write `props.name`. */}

const resObj = {
    "restaurant": {
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
    }
  }
  


  function RestaurantCard(props) {
    const { resData } = props;
  
    return (
      <div className="res-card">
        <img className="res-logo" src={resData.logo} alt="Logo" />
        <h3>{resData.name}</h3>
        <h4>{resData.description}</h4>
        <h4>{resData.rating} stars</h4>
        <h4>{resData.deliveryTime} minutes</h4>
      </div>
    );
  }
  



const Body = () =>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard 
                resData = {resObj}
                />
            </div>
        </div>
    );
}

// create a function component AppLayout

const AppLayout = ()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}


 {/* creating normal react elemnt i.e not component. (inside this) */}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)




