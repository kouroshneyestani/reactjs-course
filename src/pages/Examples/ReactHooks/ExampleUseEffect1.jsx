import React, { useState, useEffect } from "react";

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count is ${count}`;
    }, [count])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Incrase Count</button>
        </div>
    );
}

export default Example;
