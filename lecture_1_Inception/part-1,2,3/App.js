
// object {} like id: etc is used to give attributes to a tag
const heading = React.createElement("h1" , {id: "heading" , xyz : "abc"} , 'hi abhi - welcome to react');

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(heading); // creates an obj with given props

root.render(heading); // render is responsible for creating the tag and putting it inside react dom


