import React from "react";
import ReactDOM from "react-dom/client";

const headingJSX = <h1>This is written usng JSX ✨</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

const Title = () => (
    <h1 className="heading">Namaste React Title ✨</h1>
)

const Heading = () => (
<div id="container">
    <Title/>
    <h1 className="heading">Namaste React Functional Component Cool Way ✨</h1>
</div>
)

   root.render(<Heading/>);
