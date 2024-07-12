import ErrorBoundary from "../../../ErrorBoundary";

function App() {
    return (
        <div>
            <ErrorBoundary>
                <h1>Error Boundaries</h1>
                <ErrorComponent />
            </ErrorBoundary>
        </div>
    );
}

function ErrorComponent() {
    throw new Error();
}

export default App;
