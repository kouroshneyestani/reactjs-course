import React from "react";
import Button from "./components/Button";

function App() {
    return (
        <div>
            <h1>Unit Testing</h1>
            <Button label="Test Button" onClick={() => {console.log("Clicked on test button.")}} />
            <a href="#">Learn react</a>
        </div>
    );
}

export default App;
