// import react and react dom 
import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = (
    <div className="root">
      <div className="parent">
        <div className="child">
          <h1>This is an h1 tag inside a child div</h1>
        </div>
      </div>
    </div>
  );
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(rootElement);
  