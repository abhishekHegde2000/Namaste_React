import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import DataFetcher from "./components/testJason";

const AppLayout = () => {
  return (
    <div className="app">
      <DataFetcher/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
