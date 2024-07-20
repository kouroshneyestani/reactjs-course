// Conditional Effects

import React, { useState, useEffect } from "react";

function Example() {
    const [count, setCount] = useState(0);
    const [anotherState, setAnotherState] = useState(false);

    useEffect(() => {
        console.log("This runs whenever `count` changes");

        return () => {
            console.log("Cleanup if `count` changes");
        };
    }, [count]);

    useEffect(() => {
        console.log(anotherState);
    }, [anotherState]);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setAnotherState(!anotherState)}>
                Toggle
            </button>
        </div>
    );
}

export default Example;
