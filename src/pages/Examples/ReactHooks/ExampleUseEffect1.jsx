// Basic useEffect

import React, { useState, useEffect } from "react";

function Example() {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     document.title = `Count is ${count}`;
    // }, [count]);

    useEffect(() => {
        const handleScroll = () => {
            console.log("Scroll event");
        };

       window.addEventListener("scroll", handleScroll);

       // Cleanup function
       return () => {
           window.removeEventListener("scroll", handleScroll);
       };
    }, []); // Empty dependency array means this effect runs once
    
    return (
        <div>
            <div>Scroll on my</div>
            <button onClick={() => setCount(count + 1)}>Incrase Count</button>
        </div>
    );
}

export default Example;
