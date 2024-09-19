const heading2 = React.createElement("h1", {id: "heading2"}, "Second Title From React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading2);

const parent = React.createElement(
    "div", 
    {id:"parent"}, 
    [
        React.createElement(
            "div", 
            {id: "child"},
            [
                React.createElement("h1", {}, "First Title From React! 1"),
                React.createElement("h1", {}, "Second Title From React! 1"),
            ]
        ),
        React.createElement(
            "div", 
            {id: "child"},
            [
                React.createElement("h1", {}, "First Title From React! 2"),
                React.createElement("h1", {}, "Second Title From React! 2"),
            ]
        ),
    ]
   );
     
        

console.log(parent); // Object


root.render(parent);