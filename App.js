/*var heading = React.createElement("h1",{id:"kapil"},"Hello world from React");*/

var root = ReactDOM.createRoot(document.getElementById("root"));



const heading = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},[React.createElement("h1",{},"i am an h1 tag"),
React.createElement("h2",{},"i am an h2 tag")])],
[React.createElement("div",{id:"child-2"},[React.createElement("h1",{},"i am an h1 tag"),
React.createElement("h2",{},"i am an h2 tag")])])

root.render(heading);

console.log(heading);