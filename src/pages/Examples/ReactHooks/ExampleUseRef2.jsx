import React, { useRef, forwardRef } from "react";

function App() {
    const testRef = useRef(null);

    const handleClick = () => {
        // Log the ref's current DOM node
        console.log(testRef.current);
        // Change the background color of the ref's current DOM node
        if (testRef.current) {
            testRef.current.style.backgroundColor = "lightblue";
        }
    };

    return (
        <div>
            <TestComponent
                ref={testRef}
                title="Dynamic Title"
                description="This is a dynamic description."
            />
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

// Use forwardRef to forward the ref to the div element inside TestComponent
const TestComponent = forwardRef(({ title, description }, ref) => {
    return (
        <div ref={ref} style={{ padding: "10px", border: "1px solid black" }}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
});

export default App;
