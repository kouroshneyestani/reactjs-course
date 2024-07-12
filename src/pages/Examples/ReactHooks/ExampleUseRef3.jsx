import React, { useState, useRef, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();

    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);

    const prevCount = prevCountRef.current;

    return (
        <div>
            <h1>Current Count: {count}</h1>
            <h2>Previous Count: {prevCount}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;