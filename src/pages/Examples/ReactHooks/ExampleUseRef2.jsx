import React, { useRef, forwardRef } from "react";

function App() {
    const testRef = useRef(null);

    const handleClick = () => {
        if (testRef.current) {
            console.log(testRef.current);

            testRef.current.style.color = "#fff";
            testRef.current.style.padding = "10px 20px";
            testRef.current.style.backgroundColor = "blue";
        }
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            <TestComponent ref={testRef} />
        </div>
    );
}

// Use forwardRef to forward the ref to the div element inside TestComponent
const TestComponent = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <h1>Use me!</h1>
        </div>
    );
});

export default App;

// By default, refs cannot be attached to functional components directly. 
// They can only be attached to DOM elements or class components.