function App() {
    return (
        <div>
            <h1>Error Boundaries</h1>
            {/* <ErrorComponent /> */}
        </div>
    );
}

function ErrorComponent() {
    throw new Error();
}


export default App;