// import react and react dom 
import React from "react";
import ReactDOM from "react-dom/client";



// create functional component Header

const Header = ()=>{
    return(
        <div className="header">
        {/* create a ul inside that have 4 list */}
        <ul>
            <li> Home </li>
            <li> About </li>
            <li> Contact </li>
            <li> Login </li>
        </ul>
        </div>
    )
}

// create a function component AppLayout

const AppLayout = ()=>{
    return(
        <div className="app">
            <Header/>
        <h1> Hello World </h1>
        </div>
    )
}


//  creating normal react elemnt i.e not component. (inside this)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)







  