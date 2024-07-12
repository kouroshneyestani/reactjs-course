import React, { useRef, forwardRef } from "react";

// FancyButton is a functional component that uses forwardRef to pass the ref down to the button element
const FancyButton = forwardRef((props, ref) => (
    <button ref={ref} className="fancy-button">
        {props.children}
    </button>
));

function App() {
    // Create a ref using useRef to reference the FancyButton component
    const buttonRef = useRef(null);

    // Function to handle the click event of the regular button
    const handleClick = () => {
        // Focus the FancyButton component by accessing its ref
        buttonRef.current.focus();
    };

    return (
        <div>
            {/* Pass the ref to the FancyButton component */}
            <FancyButton ref={buttonRef}>Click me!</FancyButton>
            {/* Button to trigger handleClick which focuses the FancyButton */}
            <button onClick={handleClick}>Focus Fancy Button</button>
        </div>
    );
}

export default App;
