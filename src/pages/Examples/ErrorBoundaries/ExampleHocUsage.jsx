import React from "react";
import withErrorBoundary from "../../../hocs/withErrorBoundary";

function App() {
    return (
        <div>
            <h1>Error Boundaries</h1>
            <ErrorComponent />
        </div>
    );
}

function ErrorComponent() {
    throw new Error("An error has occurred!");
}

export default withErrorBoundary(App);