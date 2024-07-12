import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Examples
import Err from "./pages/Examples/ErrorBoundaries";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Err />
    </React.StrictMode>
);
