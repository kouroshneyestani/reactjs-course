import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//
import App from "./App";

// Examples
import Err1 from "./pages/Examples/ErrorBoundaries/ExampleErrorBoundaryClass";
import Err2 from "./pages/Examples/ErrorBoundaries/ExampleHocUsage";

import Profiller1 from "./pages/Examples/Profiler/Example1";

import ReactUseRef1 from "./pages/Examples/ReactHooks/ExampleUseRef1";
import ReactUseRef2 from "./pages/Examples/ReactHooks/ExampleUseRef2";
import ReactUseRef3 from "./pages/Examples/ReactHooks/ExampleUseRef3";
import ReactUseRef4 from "./pages/Examples/ReactHooks/ExampleUseRef4";

import ReactUseEffect1 from "./pages/Examples/ReactHooks/ExampleUseEffect1";
import ReactUseEffect2 from "./pages/Examples/ReactHooks/ExampleUseEffect2";
import ReactUseEffect3 from "./pages/Examples/ReactHooks/ExampleUseEffect3";
import ReactUseEffect6 from "./pages/Examples/ReactHooks/ExampleUseEffect6";

import ErrorHandling1 from "./pages/Examples/ErrorHandling/Example1";

import ReactUseReducer1 from "./pages/Examples/ReactHooks/ExampleUseReducer1.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ReactUseReducer1 />
    </React.StrictMode>
);
