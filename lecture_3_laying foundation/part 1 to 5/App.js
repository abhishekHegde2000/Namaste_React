// import react and react dom 
import React from "react";
import ReactDOM from "react-dom/client";

// const rootElement = (
//     <div className="root">
//       <div className="parent">
//         <div className="child">
//           <h1>This is an h1 tag inside a child div</h1>
//         </div>
//       </div>
//     </div>
//   );

  // const heading = React.createElement("h1",{id:"heading"},"namaste React")
  
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  
  // root.render(heading);

// jsx is not html in javascript. this is html like syntax but not html

// components -----------------------------------------------Functional component


// const HeadingComponent = () => { 
//   return <h1 className="heading">Namaste React by Abhishek</h1>; 
// }

//  both are same

// const HeadingComponent1 = () => <h1 className="heading">Namaste React by Abhishek</h1>;


//   const jsxHeading = <h1 className="heading">namaste React by Abhishek</h1>  // this piece code becomes react element(object)
  
//   const root = ReactDOM.createRoot(document.getElementById("root"));
  
//   root.render(<HeadingComponent/>)

//  create a title component , create a heading component. render title inside heading

const TitleComponent = () => <h1 className="title">This is a title</h1>;

const HeadingComponent = () => {
  return (
    <div>
      <TitleComponent/>
      <h1 className="heading">Namaste React by Abhishek</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)







  