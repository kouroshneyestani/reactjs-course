import React, { useRef, useEffect } from "react";

function App() {
    // Create a reference object to hold a reference to the button element, initialized to null
    const buttonRef = useRef(null);

    // Define a function to handle the button click event
    const handleClick = () => {
        if (buttonRef.current) {
            // Update the inner text of the button element to "Clicked"
            buttonRef.current.innerText = "Clicked";
            
            // Optionally update aria-pressed attribute for accessibility
            // buttonRef.current.setAttribute("aria-pressed", "true");
        }
    };

    // // Using useEffect to perform any setup if needed
    // useEffect(() => {
    //     if (buttonRef.current) {
    //         console.log("Button element is mounted.");
    //     }
    //     // Cleanup function if needed when the component unmounts
    //     return () => {
    //         console.log("Button element will unmount.");
    //     };
    // }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div>
            <button ref={buttonRef} onClick={handleClick} aria-pressed="false">
                Click Me
            </button>
        </div>
    );
}

export default App;
