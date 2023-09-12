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

const RestaurantCard = () =>{
    return(
        // it should have image , name of restaurant , star rating , cuisines , delvary tie
        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/usjgacltnt2rwla0hcpl" alt="pizza" />
            <h3>Meghana Foods</h3>
            <h4>biriyani , bengakuru</h4>
            <h4>4.8 stars</h4>
            <h4>39 minutes</h4>
        </div>

    )

}



const Body = () =>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/>
                <RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/>
                <RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/>
                <RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/>
                <RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/>
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




