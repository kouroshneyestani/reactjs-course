// Cleanup in useEffect;

import React, { useEffect } from "react";

function Example() {
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

    return <div>Scroll to see effect</div>;
}

export default Example;
