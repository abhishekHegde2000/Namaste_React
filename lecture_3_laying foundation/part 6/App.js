// import react and react dom 
import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => <h1 className="title">This is a title</h1>;

const elementR = (
  <h1>
    This is a React element. We know Babel converts this, so it's like a piece of JavaScript code only.
    So put this in another element with curly braces.
  </h1>
);

const HeadingComponent = () => {
  return (
    <div>
      {elementR}
      <TitleComponent/>
      <h1 className="heading">Namaste React by Abhishek</h1>
    </div>
  );
}


//  creating normal react elemnt i.e not component. (inside this)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)







  