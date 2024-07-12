import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update state so the next render shows the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log error details to an external service or console.
        console.error("Error caught by Error Boundary:", error);
        console.error("Error information:", errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
