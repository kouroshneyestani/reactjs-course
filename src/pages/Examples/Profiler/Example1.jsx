import React, { Profiler } from "react";

/**
 * App Component
 * This component sets up the React Profiler for the TestComponent and provides the Profiler's `onRender` callback.
 *
 * The Profiler measures the rendering performance of TestComponent.
 *
 * @returns {JSX.Element} The App component that contains the Profiler and the TestComponent.
 */
function App() {
    return (
        <Profiler id="TestComponent" onRender={callback}>
            <TestComponent />
        </Profiler>
    );
}

/**
 * TestComponent
 * A simple component that increments a counter when a button is clicked.
 * This component serves as a target for the Profiler to measure rendering performance.
 *
 * @returns {JSX.Element} The TestComponent that displays a button and a header.
 */
function TestComponent() {
    // State variable to keep track of the counter value
    const [counter, setCounter] = React.useState(0);

    /**
     * Handle button click event to increment the counter.
     * This function updates the counter state after a 2-second delay.
     */
    const handleClick = () => {
        // Update the counter state after 2 seconds
        setTimeout(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 2000);
    };

    return (
        <div>
            <h1>Test Component</h1>
            <button onClick={handleClick}>Increase Count</button>
            {/* Display the current counter value */}
            <p>Counter: {counter}</p>
        </div>
    );
}

/**
 * Profiler Callback Function
 * This function logs performance metrics for TestComponent.
 * The Profiler calls this callback during each commit phase, providing data about the render performance.
 *
 * @param {string} id - The id of the Profiler component.
 * @param {string} phase - The phase of the component lifecycle (either "mount" or "update").
 * @param {number} actualDuration - Time spent rendering the component.
 * @param {number} baseDuration - Time it would have taken to render the component without memoization.
 * @param {number} startTime - The time when React began rendering the component.
 * @param {number} commitTime - The time when React committed the render to the DOM.
 * @param {Set} interactions - A Set of interactions that are associated with the render.
 */
function callback(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
) {
    console.log("Profiler Callback:", {
        id, // The unique identifier for the Profiler component
        phase, // The phase of the render lifecycle ("mount" or "update")
        actualDuration, // The time spent rendering the component
        baseDuration, // The time it would have taken to render without memoization
        startTime, // The start time of the rendering process
        commitTime, // The time when the render was committed to the DOM
        interactions, // The interactions that happened during this render
    });
}

export default App;
