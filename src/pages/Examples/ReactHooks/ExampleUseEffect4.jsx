// Multiple useEffect Hooks

import React, { useState, useEffect } from "react";

function Example() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log("This effect runs whenever `count` changes");
    }, [count]);

    useEffect(() => {
        console.log("This effect runs whenever `name` changes");
    }, [name]);

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
