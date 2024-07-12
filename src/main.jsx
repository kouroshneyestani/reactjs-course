import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Examples
import Err1 from "./pages/Examples/ErrorBoundaries/ExampleErrorBoundaryClass";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Err1 />
    </React.StrictMode>
);
