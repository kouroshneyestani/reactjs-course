import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Examples
import Err1 from "./pages/Examples/ErrorBoundaries/ExampleErrorBoundaryClass";
import Err2 from "./pages/Examples/ErrorBoundaries/ExampleHocUsage";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Err2 />
    </React.StrictMode>
);
