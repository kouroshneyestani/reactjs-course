import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Examples
import Err1 from "./pages/Examples/ErrorBoundaries/ExampleErrorBoundaryClass";
import Err2 from "./pages/Examples/ErrorBoundaries/ExampleHocUsage";

import Profiller1 from "./pages/Examples/Profiler/Example1";

import ReactUseRef1 from "./pages/Examples/ReactHooks/ExampleUseRef1";
import ReactUseRef2 from "./pages/Examples/ReactHooks/ExampleUseRef2";
import ReactUseRef3 from "./pages/Examples/ReactHooks/ExampleUseRef3";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ReactUseRef3 />
    </React.StrictMode>
);
