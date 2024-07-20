// Advanced: Synchronizing with External Systems

import React, { useState, useEffect } from "react";

function LocalStorageComponent() {
    const [value, setValue] = useState(() => {
        return localStorage.getItem("myValue") || "";
    });

    useEffect(() => {
        localStorage.setItem("myValue", value);
    }, [value]);

    return (
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}
