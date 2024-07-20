// Advanced: Debouncing with useEffect

import React, { useState, useEffect } from "react";

function DebouncedInput() {
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 500);

        // Cleanup function
        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    useEffect(() => {
        if (debouncedTerm) {
            console.log(`Searching for ${debouncedTerm}`);
        }
    }, [debouncedTerm]);

    return (
        <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
}

export default DebouncedInput;