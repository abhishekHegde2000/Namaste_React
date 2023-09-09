// create a html structure that has div element parent , inside it div child , inside it h1 tag
{/* <div class="root">
<div class="parent">
    <div class="child">
        <h1>This is an h1 tag inside a child div</h1>
    </div>
</div>
</div> */}
//  same way create this structure by react only

// create nested react structure of html

const parent = React.createElement(
    "div",                  // Type of the parent element (tag name)
    { className: "parent" }, // Properties (in this case, setting the class name)
    [
        React.createElement(
            "div",        // Type of the child element
            { className: "child" }, // Properties for the child element
            [
                React.createElement(
                    "h1",   // Type of the grandchild element
                    null,   // Properties for the grandchild element (null in this case)
                    "This is an h1 tag inside a child div" // Text content of the grandchild element
                ),
                React.createElement(
                    "h1",   // Type of the grandchild element
                    null,   // Properties for the grandchild element (null in this case)
                    "This is an h1 tag inside a child div" // Text content of the grandchild element
                )
            ]
        ),
    ]
);
console.log("Parent : ", JSON.stringify(parent));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)

// order matters