import React, { useState, useEffect } from "react";

// The CatFact component fetches a random cat fact from an API
function CatFact() {
    // State to store the cat fact fetched from the API
    const [catFact, setCatFact] = useState("");

    // State to track the loading status
    const [loading, setLoading] = useState(true);

    // State to store any errors encountered during the fetch request
    const [error, setError] = useState(null);

    // Define the fetchData function that handles the API request
    const fetchData = async () => {
        // Create a new AbortController instance
        const controller = new AbortController();
        // Extract the signal from the controller to be used for aborting the fetch request
        const { signal } = controller;

        try {
            // Perform the fetch request and pass the signal to it
            const response = await fetch("https://catfact.ninja/fact", {
                signal,
            });

            // Check if the response status is OK (status in the range 200-299)
            if (!response.ok) {
                // If not OK, throw an error with the response status
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the response data as JSON
            const data = await response.json();
            // Update the state with the fetched cat fact
            setCatFact(data.fact);
            // Clear any previous errors
            setError(null);
        } catch (error) {
            // If the error is due to the request being aborted, log a message
            if (error.name === "AbortError") {
                console.log("Fetch request was aborted");
            } else {
                // Otherwise, update the state with the error message
                setError(error.message);
            }
        } finally {
            // Set the loading state to false whether the request succeeds or fails
            setLoading(false);
        }

        // Return the controller for use in the retry functionality
        return controller;
    };

    useEffect(() => {
        // Call fetchData to start the fetch operation when the component mounts
        const controller = fetchData();

        // Cleanup function to abort the fetch request if the component unmounts
        return () => {
            // Check if `controller` is an instance of `AbortController`
            if (controller instanceof AbortController) {
                controller.abort(); // Abort the fetch request
            }
        };
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    // Retry the fetch operation
    const handleRetry = () => {
        setLoading(true); // Reset loading state to true to show loading indicator
        setError(null); // Clear any previous errors
        fetchData(); // Call fetchData to fetch new data
    };

    // Conditional rendering based on the loading and error states
    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <div>Error: {error}</div>
                <button onClick={handleRetry}>Retry</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Cat Fact</h1>
            <p>{catFact}</p>
        </div>
    );
}

export default CatFact;
